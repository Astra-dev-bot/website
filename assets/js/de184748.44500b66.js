"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"$cacheMembers",description:"Updates the cache for the current guild members"},o=void 0,c={unversionedId:"functions/cachemembers",id:"version-5.5.5/functions/cachemembers",title:"$cacheMembers",description:"Updates the cache for the current guild members",source:"@site/versioned_docs/version-5.5.5/functions/cachemembers.md",sourceDirName:"functions",slug:"/functions/cachemembers",permalink:"/docs/5.5.5/functions/cachemembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688518756,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{title:"$cacheMembers",description:"Updates the cache for the current guild members"},sidebar:"docs",previous:{title:"$broadcastEval",permalink:"/docs/5.5.5/functions/broadcasteval"},next:{title:"$categoryChannels",permalink:"/docs/5.5.5/functions/categorychannels"}},i={},s=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function is responsible for saving each new user that has not been registered before in your bot's database."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$cacheMembers[guildID?;returnCount?]\n")),(0,a.kt)("h3",{id:"field"},"Field"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The guild we're caching the members for"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"return count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The amount of members cached"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Without optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "update",\n    code: `\n    Members cached.\n    $cacheMembers\n    `\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "update",\n    code: `\n    $cacheMembers[773352845738115102;yes] members cached.\n    \n    `\n});\n')))}m.isMDXComponent=!0}}]);