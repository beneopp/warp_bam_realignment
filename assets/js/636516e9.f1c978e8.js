"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[275],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5288:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i={sidebar_position:1},o="Imputation Overview",s={unversionedId:"Pipelines/Imputation_Pipeline/README",id:"Pipelines/Imputation_Pipeline/README",isDocsHomePage:!1,title:"Imputation Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Imputation_Pipeline/README.md",sourceDirName:"Pipelines/Imputation_Pipeline",slug:"/Pipelines/Imputation_Pipeline/README",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/README",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Imputation_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"Farzaneh Khajouei",lastUpdatedAt:1646192140,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"VCF Overview: Illumina Genotyping Array",permalink:"/warp/docs/Pipelines/Illumina_Genotyping_Arrays_Pipeline/Illumina_genotyping_array_spec"},next:{title:"Creating the Imputation Pipeline's Modified 1000 Genomes Reference",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview"}},p=[{value:"Introduction to the Imputation pipeline",id:"introduction-to-the-imputation-pipeline",children:[]},{value:"Set-up",id:"set-up",children:[{value:"Workflow installation and requirements",id:"workflow-installation-and-requirements",children:[]},{value:"Input descriptions",id:"input-descriptions",children:[]},{value:"Imputation reference panel",id:"imputation-reference-panel",children:[]}]},{value:"Workflow tasks and tools",id:"workflow-tasks-and-tools",children:[]},{value:"Workflow outputs",id:"workflow-outputs",children:[]},{value:"Important notes",id:"important-notes",children:[]},{value:"Price estimates",id:"price-estimates",children:[]},{value:"Contact us",id:"contact-us",children:[]},{value:"Licensing",id:"licensing",children:[]}],m={toc:p};function d(t){var e=t.components,i=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"imputation-overview"},"Imputation Overview"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases?q=Imputation_v1.0.0&expanded=true"},"Imputation_v1.0.0")),(0,l.kt)("td",{parentName:"tr",align:"center"},"August, 2021"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in warp or contact ",(0,l.kt)("a",{parentName:"td",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano"))))),(0,l.kt)("h2",{id:"introduction-to-the-imputation-pipeline"},"Introduction to the Imputation pipeline"),(0,l.kt)("p",null,"The Imputation pipeline imputes missing genotypes from either a multi-sample VCF or an array of single sample VCFs using a large genomic reference panel. It is based on the ",(0,l.kt)("a",{parentName:"p",href:"https://imputationserver.readthedocs.io/en/latest/pipeline/"},"Michigan Imputation Server pipeline"),". Overall, the pipeline filters, phases, and performs imputation on a multi-sample VCF. It outputs the imputed VCF along with key imputation metrics."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6499).Z})),(0,l.kt)("h2",{id:"set-up"},"Set-up"),(0,l.kt)("h3",{id:"workflow-installation-and-requirements"},"Workflow installation and requirements"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.wdl"},"Imputation workflow")," is written in the Workflow Description Language (WDL) and can be deployed using a WDL-compatible execution engine like  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms."),(0,l.kt)("p",null,"To identify the latest workflow version and release notes, please see the Imputation workflow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.changelog.md"},"changelog"),". "),(0,l.kt)("p",null,"The latest release of the workflow, example data, and dependencies are available from the WARP releases page. To discover and search releases, use the WARP command-line tool ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try the Imputation pipeline in Terra")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can run the pipeline in the ",(0,l.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/warp-pipelines/Imputation"},"Imputation workspace")," on ",(0,l.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-optimized scalable bioinformatics platform. The workspace contains a preconfigured workflow, example inputs, instructions, and cost-estimates. "))),(0,l.kt)("h3",{id:"input-descriptions"},"Input descriptions"),(0,l.kt)("p",null,"The table below describes each of the Imputation pipeline inputs. The workflow requires ",(0,l.kt)("strong",{parentName:"p"},"either")," a multi-sample VCF or an array of single sample VCFs. These samples must be from the same species and genotyping chip."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You must have two or more samples to run the pipeline.")," "),(0,l.kt)("p",null,"However, the pipeline is cost-optimized for between 100 and 1,000 samples. After 1,000 samples, the cost per sample no longer decreases (see the ",(0,l.kt)("a",{parentName:"p",href:"#price-estimates"},"Price estimates")," section). "),(0,l.kt)("p",null,"For examples of how to specify each input in a configuration file, as well as cloud locations for different example input files, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/example_inputs.json"},"example input configuration file (JSON)"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChunkLength"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of chunks; default set to 25 MB."),(0,l.kt)("td",{parentName:"tr",align:null},"Int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunkOverlaps"),(0,l.kt)("td",{parentName:"tr",align:null},"Padding adding to the beginning and end of each chunk to reduce edge effects; default set 5 MB."),(0,l.kt)("td",{parentName:"tr",align:null},"Int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multi_sample_vcf"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged VCF containing multiple samples; can also use an array of individual VCFs."),(0,l.kt)("td",{parentName:"tr",align:null},"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multi_sample_vcf_index"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged index for the merged VCF; can also use an array of index files if using an array of VCFs."),(0,l.kt)("td",{parentName:"tr",align:null},"Index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"single_sample_vcfs"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of VCFs, one for each sample; can be used in lieu of a merged VCF containing all samples."),(0,l.kt)("td",{parentName:"tr",align:null},"Array of files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"single_sample_vcf_indices"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of indices, one for each sample; can be used in lieu of a merged index for a multi-sample VCF."),(0,l.kt)("td",{parentName:"tr",align:null},"Array of index files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"perform_extra_qc_steps"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean to indicate if additional QC steps should be performed before imputing; when true, sites with call rates below 95% or low Hardy Weinberg Equilibrium (HWE) p-value are removed before imputation. Default is set to false."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optional_qc_max_missing"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional float used for the additional QC steps that sets a max threshold for the maximum rate of missing data allowed for sites; default set to 0.05."),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optional_qc_hwe"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HWE p-value when performing additional QC steps; default set to 0.000001."),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref_dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference dictionary."),(0,l.kt)("td",{parentName:"tr",align:null},"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contigs"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings defining which contigs (chromsomes) should be used for the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reference_panel_path"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the cloud storage containing the reference panel files for all contigs."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"genetics_maps_eagle"),(0,l.kt)("td",{parentName:"tr",align:null},"Genetic map file for phasing."),(0,l.kt)("td",{parentName:"tr",align:null},"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_callset_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Output callset name."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split_output_to_single_sample"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean to split out the final combined VCF to individual sample VCFs; set to false by default."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"merge_ssvcf_mem_gb"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory allocation for MergeSingleSampleVcfs (in GB)."),(0,l.kt)("td",{parentName:"tr",align:null},"Int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frac_well_imputed_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Threshold for the fraction of well-imputed sites; default set to 0.9."),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunks_fail_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum threshold for the number of chunks allowed to fail; default set to 1."),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vcf_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"File extension used for the VCF in the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vcf_index_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"File extension used for the VCF index in the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bcf_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"File extension used for the BCF in the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bcf_index_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"File extension used for the BCF index in the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m3vcf_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"File extension used for the M3VCF in the reference panel."),(0,l.kt)("td",{parentName:"tr",align:null},"String")))),(0,l.kt)("h3",{id:"imputation-reference-panel"},"Imputation reference panel"),(0,l.kt)("p",null,"The Imputation workflow's reference panel files are hosted in a ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg19/v0/1000G_reference_panel;tab=objects?prefix=&forceOnObjectsSortingFiltering=false"},"public Google Bucket"),". For the cloud-path (URI) to the files, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/example_inputs.json"},"example input configuration"),"."),(0,l.kt)("h4",{id:"generation-of-the-modified-1000-genomes-reference"},"Generation of the modified 1000 Genomes reference"),(0,l.kt)("p",null,"Initial tests of the Imputation workflow followed by assessments of polygenic risk score revealed that disease risk scores were lower when computed from imputed array data as opposed to whole-genome sequencing data. This was found to be due to incorrectly genotyped sites in the 1000G reference panel. As a result, the 1000G reference files were modified for the Imputation pipeline as described in the ",(0,l.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview"},"references overview"),". You can view the original, unmodified 1000G VCFs ",(0,l.kt)("a",{parentName:"p",href:"https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502/"},"here"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"X-chromosome not imputed")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently, the pipeline does not perform imputation on the X-chromosome and no reference panels are needed for the X-chromosome. Any sites identified on the X-chromosome after array analysis are merged back into the VCF after the imputation steps. "))),(0,l.kt)("h2",{id:"workflow-tasks-and-tools"},"Workflow tasks and tools"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.wdl"},"Imputation workflow")," imports a series of tasks from the ImputationTasks WDL, which is hosted in the Broad ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/broad"},"tasks library"),". The table below describes each workflow task, including the task name, tools, relevant software and non-default parameters. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Task name (alias) in WDL"),(0,l.kt)("th",{parentName:"tr",align:null},"Tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Software"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeSingleSampleVcfs"),(0,l.kt)("td",{parentName:"tr",align:null},"merge"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"If an array of single sample VCFs are pipeline input, the task merges them into a single VCF.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetIDs (SetIdsVcfToImpute)"),(0,l.kt)("td",{parentName:"tr",align:null},"annotate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools"),", bash"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds variant IDs to the combined input VCF to create a new VCF. Sorts the alleles for a given variant ID so that REF:ALT is lexicographically consistent across IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ExtractIDs (ExtractIdsVcfToImpute)"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the variant IDs from the SortIDs output VCF to a new \u201c.ids\u201d file so that any missing variants can be added back to the final VCF after imputation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CountSamples"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the merged input VCF file to count the number of samples and output a TXT file containing the count.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CalculateChromsomeLength"),(0,l.kt)("td",{parentName:"tr",align:null},"grep"),(0,l.kt)("td",{parentName:"tr",align:null},"bash"),(0,l.kt)("td",{parentName:"tr",align:null},"Reads chromosome lengths from the reference dictionary and uses these to generate chunk intervals for the GenerateChunk task.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GenerateChunk"),(0,l.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Performs site filtering by selecting SNPs only and excluding InDels, removing duplicate sites from the VCF, selecting biallelic variants, excluding symbolic/mixed variants, and removing sites with a maximum fraction of samples with no-call genotypes greater than 0.1. Also subsets to only a specified chunk of the genome.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OptionalQCSites"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://vcftools.sourceforge.net/"},"vcftools"),", ",(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"If the boolean extra_qc_steps is true, performs additional QC steps; excludes sites with more than 95% missing data and assesses sites for Hardy Weinberg Equilibrium, excluding any site with a p-value less than 0.000001.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CountVariantsInChunks"),(0,l.kt)("td",{parentName:"tr",align:null},"CountVariants"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Counts variants in the filtered VCF file; Returns the number of chunks in the array and in the reference file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CheckChunks"),(0,l.kt)("td",{parentName:"tr",align:null},"convert, index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Confirms that there are no chunks where less than 3 sites or less than 50% of the sites in the array are also in the reference panel; if valid, creates a new VCF output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PhaseVariantsEagle"),(0,l.kt)("td",{parentName:"tr",align:null},"eagle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://alkesgroup.broadinstitute.org/Eagle/Eagle_manual.html"},"Eagle2")),(0,l.kt)("td",{parentName:"tr",align:null},"Performs phasing on the filtered, validated VCF using the phased reference panel; allows for REF/ALT swaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Minimac4"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimac4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://genome.sph.umich.edu/wiki/Minimac4_Documentation"},"minimac4"),", ",(0,l.kt)("a",{parentName:"td",href:"%5Bbcftools%5D(http://samtools.github.io/bcftools/bcftools.html)"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Performs imputation on the prephased VCF; parameterized to include variants that were genotyped but NOT in the reference panel and to specify a minRatio of 0.00001.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AggregateImputationQCMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses an R script to take calculate metrics from minimac4 output info file, including total sites, total sites with variants, and sites with an ",(0,l.kt)("a",{parentName:"td",href:"https://genome.sph.umich.edu/wiki/Minimac3_Info_File"},"R2 metric")," of 0.3 (total_sites_r2_gt_0.3); adds the metrics to a new TSV output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateHeader"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateVCFSequenceDictionary"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates the header of the imputed VCF; adds contig lengths")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SeparateMultiallelics"),(0,l.kt)("td",{parentName:"tr",align:null},"norm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Splits multiallelic sites in the imputed VCF into biallelic records.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveSymbolicAlleles"),(0,l.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Removes SYMBOLIC alleles from the output VCF of the SeparateMultiallelics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetIds"),(0,l.kt)("td",{parentName:"tr",align:null},"annotate, index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Sorts the alleles in the variant ID from the RemoveSymbolicAllele output VCF so that REF:ALT is lexicographically consistent across IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GatherVcfs"),(0,l.kt)("td",{parentName:"tr",align:null},"GatherVCFs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Gathers the array of imputed VCFs and merges them into one VCF output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ExtractIDs"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the variant IDs from the imputed VCF.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FindSitesUniqueToFileTwoOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the IDs extracted from imputed VCF and those extracted from original VCF to identify missing variant sites from the original VCF; outputs the IDs to a file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SelectVariantsByIds"),(0,l.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Selects from the original input VCF any sites which were not included in the imputed VCF.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveAnnotations"),(0,l.kt)("td",{parentName:"tr",align:null},"annotate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"Removes the FORMAT and INFO annotations from the new VCF generated by the SelectVariantsbyIds task that contains the missing variants.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InterleaveVariants"),(0,l.kt)("td",{parentName:"tr",align:null},"MergeVCFs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,l.kt)("td",{parentName:"tr",align:null},"Combines the missing variants from the original VCF and the imputed variants into a new VCF.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeImputationQCMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},'Uses an R script to calculate the fraction of well-imputed sites and outputs them to a TXT file; the fraction of "well-imputed" sites is based on the minimac reported R2 metric, with R2>0.3 being "well-imputed." Since homomorphic sites lead to an R2 value of 0, we report the fraction of sites with any variation which are well-imputed in addition to the fraction of total sites.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StoreChunksInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses an R script to record the coordinates of each imputation chunk, number of sites in the original array, and number of sites in the original array which are also in the reference panel, for each imputation chunk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SplitMultiSampleVcf"),(0,l.kt)("td",{parentName:"tr",align:null},"split"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,l.kt)("td",{parentName:"tr",align:null},"If boolean is set to true, will split the interleave variants VCF into single sample VCFs.")))),(0,l.kt)("h2",{id:"workflow-outputs"},"Workflow outputs"),(0,l.kt)("p",null,"The table below summarizes the workflow outputs. If running the workflow on Cromwell, these outputs are found in the task execution directory."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imputed_single_sample_vcfs"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of imputed single sample VCFs from the SplitMultiSampleVcf task."),(0,l.kt)("td",{parentName:"tr",align:null},"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imputed_single_sample_vcf_indices"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of indices for the imputed VCFs from the SplitMultiSampleVcf task"),(0,l.kt)("td",{parentName:"tr",align:null},"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imputed_multisample_vcf"),(0,l.kt)("td",{parentName:"tr",align:null},"VCF from the InterleaveVariants task; contains imputed variants as well as missing variants from the input VCF."),(0,l.kt)("td",{parentName:"tr",align:null},"VCF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imputed_multisample_vcf_index"),(0,l.kt)("td",{parentName:"tr",align:null},"Index file for VCF from the InterleaveVariants task."),(0,l.kt)("td",{parentName:"tr",align:null},"Index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregated_imputation_metrics"),(0,l.kt)("td",{parentName:"tr",align:null},'Aggregated QC metrics from the MergeImputationQcMetrics task; reports the fraction of sites well-imputed and outputs to TXT file; fraction of "well-imputed" is based on the minimac reported R2 metric, with R2>0.3 being "well-imputed." Since homomorphic sites lead to an R2 value of 0, we report the fraction of sites with any variation which are well-imputed in addition to the fraction of total sites.'),(0,l.kt)("td",{parentName:"tr",align:null},"TXT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunks_info"),(0,l.kt)("td",{parentName:"tr",align:null},"TSV from StoreChunksInfo task; contains the chunk intervals as well as the number of variants in the array."),(0,l.kt)("td",{parentName:"tr",align:null},"TSV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failed_chunks"),(0,l.kt)("td",{parentName:"tr",align:null},"File with the failed chunks from the StoreChunksInfo task."),(0,l.kt)("td",{parentName:"tr",align:null},"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_failed_chunks"),(0,l.kt)("td",{parentName:"tr",align:null},"File with the number of failed chunks from the StoreChunksInfo task."),(0,l.kt)("td",{parentName:"tr",align:null},"File")))),(0,l.kt)("h2",{id:"important-notes"},"Important notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Runtime parameters are optimized for Broad's Google Cloud Platform implementation.")),(0,l.kt)("h2",{id:"price-estimates"},"Price estimates"),(0,l.kt)("p",null,"The pipeline is cost-optimized for between 100 and 1,000 samples, where the cost per sample continues to decrease until 1,000 samples are run. Cost estimates per sample are provided below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cohort size ( # samples)"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost per sample ($)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"0.11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13.5 K"),(0,l.kt)("td",{parentName:"tr",align:null},"0.025")))),(0,l.kt)("h2",{id:"contact-us"},"Contact us"),(0,l.kt)("p",null,"Help us make our tools better by contacting ",(0,l.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano")," for pipeline-related suggestions or questions."),(0,l.kt)("h2",{id:"licensing"},"Licensing"),(0,l.kt)("p",null,"Copyright Broad Institute, 2020 | BSD-3"),(0,l.kt)("p",null,"The workflow script is released under the ",(0,l.kt)("strong",{parentName:"p"},"WDL open source code license (BSD-3)")," (full license text at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/LICENSE"},"https://github.com/broadinstitute/warp/blob/master/LICENSE"),"). However, please note that the programs it calls may be subject to different licenses. Users are responsible for checking that they are authorized to run all programs before running this script."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/gatk/blob/master/LICENSE.TXT"},"GATK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/picard/blob/master/LICENSE.txt"},"Picard")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alkesgroup.broadinstitute.org/Eagle/#x1-340007"},"Eagle2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/statgen/Minimac4/blob/master/LICENSE"},"minimac4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/samtools/bcftools/blob/develop/LICENSE"},"bcftools"),"\n-",(0,l.kt)("a",{parentName:"li",href:"http://vcftools.sourceforge.net/license.html"},"vcftools"))))}d.isMDXComponent=!0},6499:function(t,e,a){e.Z=a.p+"assets/images/imputation-fa25d2e8cbb65cb07b1da17932ca6be7.png"}}]);