"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"$forEachMember",description:"Loops for every cached guild member executing awaited commands"},i=void 0,c={unversionedId:"functions/foreachmember",id:"version-5.5.5/functions/foreachmember",title:"$forEachMember",description:"Loops for every cached guild member executing awaited commands",source:"@site/versioned_docs/version-5.5.5/functions/foreachmember.md",sourceDirName:"functions",slug:"/functions/foreachmember",permalink:"/docs/5.5.5/functions/foreachmember",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689191023,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"$forEachMember",description:"Loops for every cached guild member executing awaited commands"},sidebar:"docs",previous:{title:"$forEachGuildChannel",permalink:"/docs/5.5.5/functions/foreachguildchannel"},next:{title:"$forEachUser",permalink:"/docs/5.5.5/functions/foreachuser"}},l={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function creates a loop for every user thats' in the current guild"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"This function has 1 required field"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Awaited Command ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Awaited Command 2 ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Etc")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$forEachMember[awaitedCommand1;awaitedCommand2;...]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Awaited Command","(","s",")"," - The awaited command","(","s",")"," we're executing")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "forEachMember",\ncode: "$forEachMember[loop4]"\n})\n\nbot.awaitedCommand({\nname: "loop4",\ncode: `$setUserVar[hello;bye]` //Every user in the current guild value for \'hello\' will be \'bye\'\n\n})\n')))}m.isMDXComponent=!0}}]);