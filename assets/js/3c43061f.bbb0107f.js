(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[3250],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2105:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o={sidebar_position:2},s="Optimus v4.2.4 Methods",l={unversionedId:"Pipelines/Optimus_Pipeline/optimus.methods",id:"Pipelines/Optimus_Pipeline/optimus.methods",isDocsHomePage:!1,title:"Optimus v4.2.4 Methods",description:"Below we provide a sample methods sections for a publication, separated into single-cell or single-nucleus use cases. For the complete pipeline documentation, see the Optimus Overview.",source:"@site/docs/Pipelines/Optimus_Pipeline/optimus.methods.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/optimus.methods",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/optimus.methods",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/optimus.methods.md",version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1624568779,formattedLastUpdatedAt:"6/24/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Optimus Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/README"},next:{title:"What tags are included in an Optimus BAM file?",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Bam_tags"}},p=[{value:"Single-cell (sc_rna mode)",id:"single-cell-sc_rna-mode",children:[]},{value:"Single-nucleus (sn_rna mode)",id:"single-nucleus-sn_rna-mode",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimus-v424-methods"},"Optimus v4.2.4 Methods"),(0,a.kt)("p",null,"Below we provide a sample methods sections for a publication, separated into single-cell or single-nucleus use cases. For the complete pipeline documentation, see the ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Optimus_Pipeline/README"},"Optimus Overview"),"."),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("h2",{id:"single-cell-sc_rna-mode"},"Single-cell (sc_rna mode)"),(0,a.kt)("p",null,"Data preprocessing and count matrix construction were performed using the Optimus v4.2.4 Pipeline (RRID:SCR_018908). Briefly, FASTQ files were converted to unaligned BAM (uBAM) using Picard v2.10.10 and reads were appended with raw UMI and corrected cell barcode sequences using Single Cell Tools (sctools) v0.3.12 and the 10x Genomics barcodes whitelist, allowing for up to one edit distance (Levenshtein distance)."),(0,a.kt)("p",null,"uBAMs were then aligned to GENCODE mouse (M21) or human (V27) references using STAR v2.5.3a with default parameters in addition to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--BAM unsorted --outSAMattributes all --outSAMunmapped --readFilestype SAM SE\n")),(0,a.kt)("p",null,"Genes were annotated and reads were tagged with Drop-seq Tools v1.12 using the TagReadwithGeneExon function."),(0,a.kt)("p",null,"UMIs were then corrected and duplicate reads marked using UMI-tools v0.0.1 with default parameters in addition to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--extract-umi-method=tag --umi-tag UR --cell-tag CB --gene-tag GE --umi-group-tag UB --per-gene --per-cell --no-sort-output\n")),(0,a.kt)("p",null,"All reads (UMI-corrected, duplicate, and untagged) were merged into a single BAM file and tagged. Gene and cell-specific metrics were calculated using the sctools v0.3.11 functions ",(0,a.kt)("inlineCode",{parentName:"p"},"CalculateGeneMetrics")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CalculateCellMetrics"),"."),(0,a.kt)("p",null,"Empty droplets were identified, but not removed to enable downstream filtering, using the DropletUtils v.1.2.1 with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--fdr-cutoff 0.01 --emptydrops-niters 10000 --min-molecules 100 --emptydrops-lower 100\n")),(0,a.kt)("p",null,"UMI-aware count matrices for exon-only alignments were produced using the sctools v0.3.11.\nAll cell and gene metrics (alignment, mitochondrial, and other QC metrics), count matrices and DropletUtils results were then aggregated into a final Loom file for downstream processing. The final outputs included the unfiltered Loom and unfiltered (but tagged) BAM files."),(0,a.kt)("p",null,"An example of the pipeline and outputs is available on the Terra HCA Optimus Pipeline Featured Workspace (",(0,a.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"},"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"),"), and additional documentation is available on GitHub (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/HumanCellAtlas/skylab/blob/master/pipelines/optimus/README.md"},"https://github.com/HumanCellAtlas/skylab/blob/master/pipelines/optimus/README.md"),"). Examples of genomic references, whitelists, and other inputs are available in the Skylab repository (see example JSONs)."),(0,a.kt)("h2",{id:"single-nucleus-sn_rna-mode"},"Single-nucleus (sn_rna mode)"),(0,a.kt)("p",null,"Data preprocessing and count matrix construction were performed using the Optimus v4.1.7 Pipeline (RRID:SCR_018908). Briefly, FASTQ files were converted to unaligned BAM (uBAM) using Picard v2.10.10 and reads were appended with raw UMI and corrected cell barcode sequences using Single Cell Tools (sctools) v0.3.11 and the 10x Genomics barcodes whitelist, allowing for up to one edit distance (Levenshtein distance)."),(0,a.kt)("p",null,"uBAMs were aligned to GENCODE mouse (M21) or human (V27) references using STAR v2.5.3a with default parameters in addition to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--BAM unsorted --outSAMattributes all --outSAMunmapped --readFilestype SAM SE\n")),(0,a.kt)("p",null,"Genes were annotated and reads were tagged with Drop-seq Tools v2.3.0 using TagReadWithGeneFunction."),(0,a.kt)("p",null,"UMIs were then corrected using UMI-tools v0.0.1 with default parameters in addition to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--extract-umi-method=tag --umi-tag UR --cell-tag CB --gene-tag GE --umi-group-tag UB --per-gene --per-cell --no-sort-output\n")),(0,a.kt)("p",null,"All reads (UMI-corrected, duplicate, and untagged) were merged into a single BAM file. Gene and cell-specific metrics were calculated using the sctools v0.3.11 functions ",(0,a.kt)("inlineCode",{parentName:"p"},"CalculateGeneMetrics")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CalculateCellMetrics"),". UMI-aware count matrices for all alignments (introns, exons, UTRs) were produced using the sctools v0.3.11."),(0,a.kt)("p",null,"All cell and gene metrics (alignment, mitochondrial, and other QC metrics), annotations, and count matrices were aggregated into a final Loom file for downstream processing. The final outputs included the unfiltered Loom and unfiltered (but tagged) BAM files."),(0,a.kt)("p",null,"An example of the pipeline and outputs is available on the ",(0,a.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"},"Terra HCA Optimus Pipeline Featured Workspace"),", and additional documentation is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/HumanCellAtlas/skylab/blob/master/pipelines/optimus/README.md"},"GitHub"),". Examples of genomic references, whitelists, and other inputs are available in the Skylab repository (see the *_example.json files at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/HumanCellAtlas/skylab/tree/master/pipelines/optimus"},"here"),"."))}c.isMDXComponent=!0}}]);