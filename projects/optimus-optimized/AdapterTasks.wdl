version 1.0

# Due to the nature generating adapters for intermediate and project level files, we have several placee
# where we process arrays of inputs which we expect to contain a single value, duplicated many times.
# This simple function confirms that there is a single value in a given input array and that that value does not
# contain any disallowed characters
task CheckInput {
  input {
    Array[String] input_array
    String input_type
    String illegal_characters = ""

    String docker = "python:3.7.2"
    Int cpu = 1
    Int memory_mb = 1000
    Int disk_size_gb = 1
  }

  command <<<
  set -e pipefail
  python3 <<CODE

  input_set = set([ "~{sep='", "' input_array}" ])
  list_illegal = "~{illegal_characters}".split(" ")
  input_type = "~{input_type}"

  errors=0

  if len(input_set) != 1:
      raise ValueError("ERROR: Expected one value for {}, but found multiple: {}".format(input_type, input_set))
      errors += 1

  for c in list_illegal:
      for i in input_set:
          if c in i:
              raise ValueError("ERROR: {} string, {}, contains an illegal character {}".format(input_type, i, c))
              errors += 1

  if errors > 0:
      raise ValueError("Failed input check due to mulitple values and/or illegal characters")

  with open('output.txt', 'w') as f:
        f.write(list(input_set)[0])
  CODE
  >>>
  runtime {
    docker: docker
    cpu: cpu
    memory: "~{memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String output_string = read_string("output.txt")
  }
}

# Get Cromwell metadata for a workflow
# Uses a workflow output to parse the cromwell id and fetch the metadata
task GetCromwellMetadata {
  input {
    String output_path
    String cromwell_url
    Boolean include_subworkflows = false
    String? include_keys

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 10
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
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
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
    Int cpu = 1
    Int memory_mb = ceil(size(output_looms, "M")) + 10
    Int disk_size_gb = ceil((size(output_looms, "G") * 2)) + 3
  }

  command {
    python3 /tools/optimus_HCA_loom_merge.py \
      --input-loom-files ~{sep=' ' output_looms} \
      --library "~{library}" \
      --species "~{species}" \
      --organ "~{organ}" \
      --project-id "~{project_id}" \
      --project-name "~{project_name}" \
      --output-loom-file ~{output_basename}.loom
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "~{memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
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
    File? input_file # Input file is the internal path to metadata.json
    Boolean project_level
    String? project_loom # Project loom is optional and provided on project level run as the gs:// link
    String? ss2_bam_file # Individual bam file to be used for intermediate analysis file for ss2 runs
    String? ss2_bai_file # Individual bai file to be used for intermediate analysis file for ss2 runs

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = if defined(input_file) then ceil((size(input_file, "MiB"))) + 3 else 2000
    Int disk_size_gb = if defined(input_file) then ceil((size(input_file, "GiB"))) + 3 else 10
  }

  # For Optimus, if we are doing an intermediate level run, then we pass in the metadata.json
  # For Ss2, if we are doing an intermediate level run, then we pass in the intermediate bam and bai
  # For project level runs on either pipeline, we pass in the project loom
  command {
    if ~{project_level}
    then
      create-analysis-file \
      --input_uuid "~{input_uuid}" \
      --pipeline_type "~{pipeline_type}" \
      --workspace_version "~{version_timestamp}" \
      --input_file "~{project_loom}" \
      --project_level ~{project_level}
    else
      create-analysis-file \
      --input_uuid "~{input_uuid}" \
      --pipeline_type "~{pipeline_type}" \
      --workspace_version "~{version_timestamp}" \
      ~{"--input_file " + "\"" + input_file + "\""} \
      ~{"--ss2_bam_file " + "\"" + ss2_bam_file + "\""} \
      ~{"--ss2_bai_file " + "\"" + ss2_bai_file + "\""} \
      --project_level ~{project_level}

    fi
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    Array[File] analysis_file_outputs = glob("*${version_timestamp}.json")
    File outputs_json = "outputs.json"
  }
}

task GetAnalysisProcessMetadata {
  input {
    String input_uuid
    String pipeline_type
    String version_timestamp
    String references
    File input_file
    Boolean project_level
    Int? ss2_index

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(input_file, "MiB"))) + 2000
    Int disk_size_gb = ceil((size(input_file, "GiB"))) + 3
  }

  command {
    create-analysis-process \
      --input_uuid "~{input_uuid}" \
      --pipeline_type "~{pipeline_type}" \
      --workspace_version "~{version_timestamp}" \
      --references "~{references}" \
      --input_file "~{input_file}" \
      --project_level ~{project_level} \
      ~{"--ss2_index " + ss2_index}

  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    Array[File] analysis_process_outputs = glob("*${version_timestamp}.json")
  }
}

task GetAnalysisProtocolMetadata {
  input {
    String input_uuid
    String pipeline_type
    String version_timestamp
    String pipeline_version
    Boolean project_level

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 10
  }

  command {
    create-analysis-protocol \
      --input_uuid "~{input_uuid}" \
      --pipeline_type "~{pipeline_type}" \
      --workspace_version "~{version_timestamp}" \
      --pipeline_version "~{pipeline_version}" \
      --project_level ~{project_level}
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    Array[File] analysis_protocol_outputs = glob("*${version_timestamp}.json")
  }
}

task GetLinksFileMetadata {
  input {
    String project_id
    Array[String] process_input_ids
    File output_file_path
    String version_timestamp
    Array[File] analysis_process_path
    Array[File] analysis_protocol_path
    String file_name_string
    String pipeline_type
    Boolean project_level
    Array[String]? bam_array
    Array[String]? bai_array
    Array[String]? fastq1_array
    Array[String]? fastq2_array

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil(size(output_file_path, "MiB") * 2) + 2000
    Int disk_size_gb = ceil(size(output_file_path, "GiB") * 2) + 50
  }

  command {
    if ["~{pipeline_type}" == "Optimus"]; then
      create-links \
      --project_id "~{project_id}" \
      --input_uuids ~{sep=' ' process_input_ids} \
      --output_file_path "~{output_file_path}" \
      --workspace_version "~{version_timestamp}" \
      --analysis_process_path "~{sep=' ' analysis_process_path}" \
      --analysis_protocol_path "~{sep=' ' analysis_protocol_path}" \
      --file_name_string "~{file_name_string}" \
      --project_level ~{project_level} \
      --pipeline_type "~{pipeline_type}"
    else
      create-links \
      --project_id "~{project_id}" \
      --output_file_path "~{output_file_path}" \
      --workspace_version "~{version_timestamp}" \
      --input_uuids ~{sep=' ' process_input_ids} \
      --analysis_process_path "~{sep=' ' analysis_process_path}" \
      --analysis_protocol_path "~{sep=' ' analysis_protocol_path}" \
      --ss2_bam ~{sep=' ' bam_array} \
      --ss2_bai ~{sep=' ' bai_array} \
      --ss2_fastq1 ~{sep=' ' fastq1_array} \
      --ss2_fastq2 ~{sep=' ' fastq2_array} \
      --file_name_string "~{file_name_string}" \
      --project_level ~{project_level} \
      --pipeline_type "~{pipeline_type}"
    fi
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ${disk_size_gb} HDD"
  }
  output {
    Array[File] links_outputs = glob("*${version_timestamp}*.json")
  }
}

task GetFileDescriptor {
  input {
    String input_uuid
    String pipeline_type
    String creation_time
    String version_timestamp
    String file_path_string # Must be the gs:// file path to properly hash and size
    File file_path

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(file_path, "MiB")) * 2) + 1000
    Int disk_size_gb = ceil((size(file_path, "GiB") * 2)) + 5
  }

  command
  <<<
    export sha256=$(sha256sum ~{file_path} | cut -f1 -d ' ')
    export crc32c=$(gsutil hash -h ~{file_path_string} | awk '/crc32c/ { print $3 }')
    export size=$(gsutil stat ~{file_path_string} | awk '/Content-Length/ { print $2 }')

    create-file-descriptor \
    --size "$size" \
    --sha256 "$sha256" \
    --crc32c "$crc32c" \
    --pipeline_type "~{pipeline_type}" \
    --file_path "~{file_path}" \
    --input_uuid "~{input_uuid}" \
    --creation_time "~{creation_time}" \
    --workspace_version "~{version_timestamp}"

  >>>
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    Array[File] file_descriptor_outputs = glob("*${version_timestamp}.json")
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

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 10
  }

  command {
  create-reference-file \
  --genus_species "~{genus_species}" \
  --file_path "~{file_path}" \
  --workspace_version "~{version_timestamp}" \
  --input_uuid "~{input_uuid}" \
  --reference_version "~{reference_version}" \
  --ncbi_taxon_id "~{ncbi_taxon_id}" \
  --pipeline_type "~{pipeline_type}" \
  --assembly_type "~{assembly_type}" \
  --reference_type "~{reference_type}"
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String reference_file_uuid = read_string("reference_uuid.txt")
    Array[File] reference_metadata_outputs = glob("*${version_timestamp}.json")
  }
}

task GetCloudFileCreationDate {
  input {
    String file_path

    String docker = "gcr.io/google.com/cloudsdktool/cloud-sdk:latest"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 10
  }

  command <<<
    gsutil ls -l ~{file_path} | egrep -o "([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)" > creation_date.txt
  >>>

  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String creation_date = read_string("creation_date.txt")
  }
}

task ParseCromwellMetadata {
  input {
    File cromwell_metadata
    String pipeline_type

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(cromwell_metadata, "MiB")) * 2) + 1000
    Int disk_size_gb = ceil((size(cromwell_metadata, "GiB") * 2)) + 5
  }

  command {
    parse-metadata \
    --cromwell-metadata-json ~{cromwell_metadata} \
    --pipeline-type ~{pipeline_type}
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String ref_fasta = read_string("ref_fasta.txt")
    String pipeline_version = read_string("pipeline_version.txt")
    String single_sample_pipeline_version = read_string("single_sample_pipeline_version.txt")
  }
}

task GetReferenceDetails {
  input {
    File ref_fasta
    String species

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(ref_fasta, "MiB")) * 2) + 1000
    Int disk_size_gb = ceil((size(ref_fasta, "GiB") * 2)) + 5
  }

  command {
    get-reference-file-details \
    --reference-file "~{ref_fasta}" \
    --species "~{species}"
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String ncbi_taxon_id = read_string("ncbi_taxon_id.txt")
    String assembly_type = read_string("assembly_type.txt")
    String reference_type = read_string("reference_type.txt")
    String reference_version = read_string("reference_version.txt")
  }
}

# This task is specifically for getting intermediate level loom ids for Optimues
task GetProjectLevelInputIds {
  input {
    Array[File] intermediate_analysis_files

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(intermediate_analysis_files, "MiB")) * 2) + 1000
    Int disk_size_gb = ceil((size(intermediate_analysis_files, "GiB") * 2)) + 5
  }

  command {
    get-process-input-ids \
    --input-json-files ~{sep=' ' intermediate_analysis_files}
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
  output {
    String process_input_uuids = read_string("output.txt")
  }
}

task CopyToStagingBucket {
  input  {
    Array[String] analysis_file_metadata_objects
    Array[String] analysis_process_objects
    Array[String] analysis_protocol_objects
    Array[String] analysis_file_descriptor_objects
    Array[String] links_objects
    Array[String] data_objects
    Array[String] reference_metadata_objects
    Array[String] reference_file_descriptor_objects
    String staging_bucket
    String? cache_invalidate

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = ceil((size(data_objects, "MiB") * 2)) + 2000
    Int disk_size_gb = ceil((size(data_objects, "GiB") * 2)) + 5
  }

  command {
    copy-adapter-outputs \
    --analysis_files_metadata_jsons ~{sep=" " analysis_file_metadata_objects} \
    --analysis_process_jsons ~{sep=" " analysis_process_objects} \
    --analysis_protocol_jsons ~{sep=" " analysis_protocol_objects} \
    --analysis_files_descriptors_jsons ~{sep=" " analysis_file_descriptor_objects} \
    --links_jsons ~{sep=" " links_objects} \
    --data_files ~{sep=" " data_objects} \
    --reference_metadata_jsons ~{sep=" " reference_metadata_objects} \
    --reference_file_descriptor_jsons ~{sep=" " reference_file_descriptor_objects} \
    --staging-bucket ~{staging_bucket}
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "~{memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
}

# This task is specifically for getting the MergeOptimusLooms version
# MergeOptimusLooms version is found in MergeOptimusLooms.wdl
task GetOptimusPipelineVersion {
  input {
    String pipeline_version
    String prefix = "MergeOptimusLooms_v"

    String docker = "ubuntu:18.04"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 3
  }
  command {
    echo ~{prefix}~{pipeline_version} > pipeline_version.txt
  }
  output {
    String pipeline_version_string = read_string("pipeline_version.txt")
  }
  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ${disk_size_gb} HDD"
  }
}

task GetBucketCreationDate {
  input {
    String bucket_path

    String docker = "us.gcr.io/broad-gotc-prod/pipeline-tools:latest"
    Int cpu = 1
    Int memory_mb = 2000
    Int disk_size_gb = 30
  }

  meta {
    volatile: true
  }

  command 
  <<<
    export timestamp=$(gsutil ls -L -b ~{bucket_path} | grep -e "created:" | sed -e 's/.*created:\(.*\)GMT.*/\1/' | awk '{$1=$1};1')

    get-bucket-date \
      --timestamp "${timestamp}"
  >>>

  output{
    String version_timestamp = read_string("bucket_timestamp.txt")
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${memory_mb} MiB"
    disks: "local-disk ~{disk_size_gb} HDD"
  }
}