"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$fileSize",description:"$fileSize will return the size of a given file.",id:"fileSize"},g=void 0,k={unversionedId:"functions/misc-related/fileSize",id:"version-6.4.0/functions/misc-related/fileSize",title:"$fileSize",description:"$fileSize will return the size of a given file.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/fileSize.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/fileSize",permalink:"/uk/docs/functions/misc-related/fileSize",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$fileSize",description:"$fileSize will return the size of a given file.",id:"fileSize"},sidebar:"docs",previous:{title:"$fileExists",permalink:"/uk/docs/functions/misc-related/fileExists"},next:{title:"$findInCache",permalink:"/uk/docs/functions/misc-related/findInCache"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},h="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(h,f(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$fileSize")," will return the size of a given file."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$fileSize[path;unit?]\n")),(0,n.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"File path."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"unit?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"In which unit the size will be returned in. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"B")," (byte / default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"KB")," (kiloByte) ",(0,n.kt)("br",null),"  3. ",(0,n.kt)("strong",{parentName:"td"},"MB")," (megaByte) ",(0,n.kt)("br",null)," 4. ",(0,n.kt)("strong",{parentName:"td"},"GB")," (gigaByte) ",(0,n.kt)("br",null)," 5. ",(0,n.kt)("strong",{parentName:"td"},"b")," (bit) ",(0,n.kt)("br",null)," 6. ",(0,n.kt)("strong",{parentName:"td"},"kb")," (kiloBit) ",(0,n.kt)("br",null)," 7. ",(0,n.kt)("strong",{parentName:"td"},"mb")," (megaBit) ",(0,n.kt)("br",null)," 8. ",(0,n.kt)("strong",{parentName:"td"},"GB")," (gigaBit)"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the size of your ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"GB"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "fileSize",\n    code: `\n  $fileSize[./index.js;GB]\n  `\n});\n')))}O.isMDXComponent=!0}}]);