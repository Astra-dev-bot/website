"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$map",description:"$map will execute awaited commands for given elements.",id:"map"},g=void 0,y={unversionedId:"functions/misc-related/map",id:"version-6.4.0/functions/misc-related/map",title:"$map",description:"$map will execute awaited commands for given elements.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/map.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/map",permalink:"/fr/docs/functions/misc-related/map",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{title:"$map",description:"$map will execute awaited commands for given elements.",id:"map"},sidebar:"docs",previous:{title:"$loop",permalink:"/fr/docs/functions/misc-related/loop"},next:{title:"$minute",permalink:"/fr/docs/functions/misc-related/minute"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],v={toc:k},O="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,u(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$map")," will execute awaited commands for given elements."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$map[text;split;awaitedCmds;sep?]\n")),(0,n.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"split"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"awaitedCmds"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Awaited Commands to execute."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"sep?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Separator."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))))}N.isMDXComponent=!0}}]);