"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98720],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"$onlyIf",description:"Checks if a condition is true"},l=void 0,i={unversionedId:"functions/onlyif",id:"version-5.5.5/functions/onlyif",title:"$onlyIf",description:"Checks if a condition is true",source:"@site/versioned_docs/version-5.5.5/functions/onlyif.md",sourceDirName:"functions",slug:"/functions/onlyif",permalink:"/docs/5.5.5/functions/onlyif",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687253143,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$onlyIf",description:"Checks if a condition is true"},sidebar:"docs",previous:{title:"$onlyForServers",permalink:"/docs/5.5.5/functions/onlyforservers"},next:{title:"$onlyIfMessageContains",permalink:"/docs/5.5.5/functions/onlyifmessagecontains"}},s={},c=[{value:"Examples:",id:"examples",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function checks if the condition is true or not"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$onlyIf[value(!=/==/>=/<=/>/<)value2;error message]\n")),(0,o.kt)("h3",{id:"examples"},"Examples:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value==value2;error message]")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value!=value2;error message]")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&gt;value2;error message]")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&lt;value2;error message]")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&gt;=value2;error message]")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&lt;=value2;error message]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "special",\ncode: `Special Command\n$onlyIf[15==6;:x: 15 doesn\'t equal 6!]`\n})\n')))}f.isMDXComponent=!0}}]);