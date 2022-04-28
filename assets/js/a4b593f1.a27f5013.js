"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o={sidebar_position:2},l="Pipeline Requirements",s={unversionedId:"About_WARP/PipelineRequirements",id:"About_WARP/PipelineRequirements",isDocsHomePage:!1,title:"Pipeline Requirements",description:"All released WARP pipelines should meet the following criteria:",source:"@site/docs/About_WARP/PipelineRequirements.md",sourceDirName:"About_WARP",slug:"/About_WARP/PipelineRequirements",permalink:"/warp/docs/About_WARP/PipelineRequirements",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/PipelineRequirements.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1651170436,formattedLastUpdatedAt:"4/28/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Best Practices for Building Data Processing Pipelines",permalink:"/warp/docs/About_WARP/BestPractices"},next:{title:"Testing Pipelines",permalink:"/warp/docs/About_WARP/TestingPipelines"}},p=[],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipeline-requirements"},"Pipeline Requirements"),(0,a.kt)("p",null,"All released WARP pipelines should meet the following criteria:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pipelines are written in WDL, modular, and optimized for Google cloud. The pipelines are often portable to other environments."),(0,a.kt)("li",{parentName:"ol"},"Pipelines have plumbing (fast) tests and scientific tests for catching any unintended changes in data processing."),(0,a.kt)("li",{parentName:"ol"},"Pipelines are semantically versioned, have a changelog, and are packaged into a release with all dependencies."),(0,a.kt)("li",{parentName:"ol"},"Pipelines are released to Dockstore automatically upon release and are available in the cloud-based ",(0,a.kt)("a",{parentName:"li",href:"https://app.terra.bio/"},"Terra platform"),"."),(0,a.kt)("li",{parentName:"ol"},"Pipelines have example inputs alongside the pipeline."),(0,a.kt)("li",{parentName:"ol"},"Pipelines have a Readme.md describing the pipeline."),(0,a.kt)("li",{parentName:"ol"},"Pipelines use public docker containers and only open source tools."),(0,a.kt)("li",{parentName:"ol"},"Pipelines are developed in a collaboration between software engineers and a scientific owner of each pipeline who must approve all changes to the code and verify that any resulting changes in outputs are scientifically valid."),(0,a.kt)("li",{parentName:"ol"},"Pipelines have a publication-style methods section to enable easy citation.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Read more about our pipeline development in our ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/BestPractices"},"Best Practices")," documentation."))))}u.isMDXComponent=!0}}]);