"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"$serverContentFilter",description:"Returns the content filter of the guild"},c=void 0,a={unversionedId:"functions/servercontentfilter",id:"version-5.5.5/functions/servercontentfilter",title:"$serverContentFilter",description:"Returns the content filter of the guild",source:"@site/versioned_docs/version-5.5.5/functions/servercontentfilter.md",sourceDirName:"functions",slug:"/functions/servercontentfilter",permalink:"/docs/5.5.5/functions/servercontentfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$serverContentFilter",description:"Returns the content filter of the guild"},sidebar:"docs",previous:{title:"$serverChannelExists",permalink:"/docs/5.5.5/functions/serverchannelexists"},next:{title:"$serverCooldown",permalink:"/docs/5.5.5/functions/servercooldown"}},s={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the content filter of the current guild"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverContentFilter",\ncode: `Server Filter: $serverContentFilter`\n})\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example",src:r(43197).Z,width:"730",height:"357"})))}f.isMDXComponent=!0},43197:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image (55)-6bb4618db69fc207326938a80160fe46.png"}}]);