version 1.0

# Check that the library prep method, species, and organ are the same for all workflow being processed together
task CheckStratumMetadata {
  input {
    Array[String] library
    Array[String] species
    Array[String] organ
    Array[String] project_id
    Array[String] project_name

    String docker = "python:3.7.2"
    Int memory = 3
    Int disk = 20
  }

  command {
  set -e pipefail
  python3 <<CODE

  library_set = set([ "~{sep='", "' library}" ])
  species_set = set([ "~{sep='", "' species}" ])
  organ_set = set([ "~{sep='", "' organ}" ])
  project_id_set = set([ "~{sep='", "' project_id}" ])
  project_name_set = set([ "~{sep='", "' project_name}" ])

  errors=0

  if len(library_set) != 1:
      print("ERROR: Library metadata is not consistent within the project.")
      errors += 1
  if len(species_set) != 1:
      print("ERROR: Species metadata is not consistent within the project.")
      errors += 1
  if len(organ_set) != 1:
      print("ERROR: Organ metadata is not consistent within the project.")
      errors += 1
  if len(project_id_set) != 1:
        print("ERROR: Project_id metadata is not consistent within the project.")
        errors += 1
  if len(project_name_set) != 1:
      print("ERROR: Project_name metadata is not consistent within the project.")
      errors += 1

  if ';' in list(library_set)[0] or '=' in list(library_set)[0]:
      print('ERROR: Library metadata contains an illegal character (";" or "=")')
      errors += 1
  if ';' in list(species_set)[0] or '=' in list(species_set)[0]:
      print('ERROR: Species metadata contains an illegal character (";" or "=")')
      errors += 1
  if ';' in list(organ_set)[0] or '=' in list(organ_set)[0]:
      print('ERROR: Organ metadata contains an illegal character (";" or "=")')
      errors += 1
  if ';' in list(project_id_set)[0] or '=' in list(project_id_set)[0]:
      print('ERROR: Project_id metadata contains an illegal character (";" or "=")')
      errors += 1
  if ';' in list(project_name_set)[0] or '=' in list(project_name_set)[0]:
      print('ERROR: Project_name metadata contains an illegal character (";" or "=")')
      errors += 1

  if errors > 0:
      raise ValueError("Files must have matching metadata in order to combine.")
  CODE
  }

  runtime {
    docker: docker
    cpu: 1
    memory: "~{memory} GiB"
    disks: "local-disk ~{disk} HDD"
  }
}

# Get Cromwell metadata for a workflow
# Uses a workflow output to parse the cromwell id and fetch the metadata
task GetCromwellMetadata {
  input {
    String output_path
    String cromwell_url
    Boolean include_subworkflows
    Array[String] include_keys

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:gw_cromwell_includekeys"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }

  command {
    # Force the binary layer of the stdout and stderr streams (which is available as their buffer attribute)
    # to be unbuffered. This is the same as "-u", more info: https://docs.python.org/3/using/cmdline.html#cmdoption-u
    export PYTHONUNBUFFERED=TRUE

    get-analysis-workflow-metadata \
      --analysis_output_path ~{output_path} \
      --cromwell_url ~{cromwell_url} \
      ~{true="--include_subworkflows True" false="--include_subworkflows False" include_subworkflows} \
      ~{"--include_keys " + include_keys}
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }

  output {
    File metadata = "metadata.json"
    String workflow_id = read_string("workflow_id.txt")
  }
}

task MergeLooms {
  input {
    Array[File] output_looms
    String library
    String species
    String organ
    String project_id
    String project_name
    String output_basename

    String docker = "quay.io/humancellatlas/hca_post_processing:2.0"
    Int memory = ceil(size(output_looms, "G"))+ 10
    Int disk = ceil((size(output_looms, "G") * 4)) + 50
  }

  command {
    python3 /tools/optimus_HCA_loom_merge.py \
      --input-loom-files ~{sep=" " output_looms} \
      --library "~{library}" \
      --species "~{species}" \
      --organ "~{organ}" \
      --project-id "~{project_id}" \
      --project-name "~{project_name}" \
      --output-loom-file ~{output_basename}.loom
  }

  runtime {
    docker: docker
    cpu: 1
    memory: "~{memory} GiB"
    disks: "local-disk ~{disk} HDD"
  }

  output {
    File project_loom = "~{output_basename}.loom"
  }
}

task GetAnalysisFileMetadata {
  input {
    String input_uuid
    String pipeline_type
    String version_timestamp
    String input_file
    Boolean? project_level

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }

  command {
    create-analysis-file \
      --input_uuid = "~{input_uuid}" \
      --pipeline_type = "~{pipeline_type}" \
      --workspace_version = "~{version_timestamp}" \
      --input_file = "~{input_file}" \
      ~{"--project_level " + project_level}
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }

  output {
      File outputs_json = "" #unsure what this would be
  }
}

task GetAnalysisProcessMetadata {
  input {
    String input_uuid
    String pipeline_type
    String version_timestamp
    String references
    String input_file
    Boolean? project_level
    String? loom_timestamp

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }

  command {
    create-analysis-process \
      --input_uuid = "~{input_uuid}" \
      --pipeline_type = "~{pipeline_type}" \
      --workspace_version = "~{version_timestamp}" \
      --references ="~{references}" \
      --input_file ="~{input_file}" \
      ~{"--project_level " + project_level} \
      ~{"--loom_timestamp " + loom_timestamp}

  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }
  output {
    File outputs_json = "" #unsure what this would be
  }
}

task GetAnalysisProtocolMetadata {
   input {
     String input_uuid
     String pipeline_type
     String version_timestamp
     String pipeline_version
     Boolean? project_level

     String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
     Int cpu = 1
     Int machine_mem_mb = 2000
     Int disk = 10
   }

   command {
     create-analysis-protocol \
       --input_uuid = "~{input_uuid}" \
       --pipeline_type = "~{pipeline_type}" \
       --workspace_version = "~{version_timestamp}" \
       --pipeline_version = "~{pipeline_version}" \
       ~{"--project_level " + project_level}
   }

   runtime {
     docker: docker
     cpu: cpu
     memory: "${machine_mem_mb} MiB"
     disks: "local-disk ~{disk} HDD"
   }

    output {
      File outputs_json = "" #unsure what this would be
    }
 }

task GetLinksFileMetadata {
  input {
    String project_id
    Array[String] process_input_ids
    String output_file_path
    String version_timestamp
    String analysis_process_path
    String analysis_protocol_path
    String file_name_string
    Boolean? project_level

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }

  command {
    create-links \
    --project_id = "~{project_id}" \
    --input_uuids = "~{sep=' ' process_input_ids}" \
    --output_file_path = "~{output_file_path}" \
    --workspace_version = "~{version_timestamp}" \
    --analysis_process_path = "~{analysis_process_path}" \
    --analysis_protocol_path = "~{analysis_protocol_path}" \
    --file_name_string = "~{file_name_string}" \
    ~{"--project_level " + project_level}
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }
}

task GetDescriptorsAnalysisFileMetadata {
  input {
    String input_uuid
    String pipeline_type
    String creation_time
    String version_timestamp
    File file_path
    String file_path_string #does this need to be set to file_path ?

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 30
   }
  command
  <<<
      export sha=$(sha256sum ~{file_path} | cut -f1 -d ' ')
      export crc=$(gsutil hash -h ~{file_path_string} | awk '/crc32c/ { print $3 }')
      export size=$(gsutil stat ~{file_path_string} | awk '/Content-Length/ { print $2 }')

    create-file-descriptor \
    --size = "$size" \
    --sha256 = "$sha256" \
    --crc32c = "$crc32c" \
    --pipeline_type = "~{pipeline_type}" \
    --file_path = "~{file_path}" \
    --input_uuid = "~{input_uuid}" \
    --creation_time = "~{creation_time}" \
    --workspace_version = "~{version_timestamp}"

  >>>
  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }
}

task GetReferenceFileMetadata {
  input {
    String file_path
    String input_uuid
    String genus_species
    String assembly_type
    String pipeline_type
    String ncbi_taxon_id
    String reference_type
    String version_timestamp
    String reference_version

    String docker = "quay.io/humancellatlas/secondary-analysis-pipeline-tools:master"
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }
  command {
  create-reference-file \
  --genus_species = "~{genus_species}" \
  --file_path = "~{file_path}" \
  --workspace_version = "~{version_timestamp}" \
  --input_uuid = "~{input_uuid}" \
  --reference_version = "~{reference_type}" \
  --ncbi_taxon_id = "~{ncbi_taxon_id}" \
  --pipeline_type = "~{pipeline_type}" \
  --assembly_type = "~{assembly_type}" \
  --reference_type = "~{reference_type}"
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }
}

task GetCloudFileCreationDate {
  input {
    String file_path
    Int cpu = 1
    Int machine_mem_mb = 2000
    Int disk = 10
  }

  command <<<
    gsutil ls -l ~{file_path} | egrep -o "([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)" > creation_date.txt
  >>>

  runtime {
    docker: "gcr.io/google.com/cloudsdktool/cloud-sdk:latest"
    cpu: cpu
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ~{disk} HDD"
  }

  output {
    String creation_date = read_string("creation_date.txt")
  }
}