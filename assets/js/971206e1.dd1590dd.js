"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={title:"$mfaLevel"},a=void 0,i={unversionedId:"functions/mfalevel",id:"version-5.5.5/functions/mfalevel",title:"$mfaLevel",description:"Returns the guild mfa level \\(true or false\\)",source:"@site/versioned_docs/version-5.5.5/functions/mfalevel.md",sourceDirName:"functions",slug:"/functions/mfalevel",permalink:"/docs/5.5.5/functions/mfalevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689191023,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"$mfaLevel"},sidebar:"docs",previous:{title:"$messageWebhookID",permalink:"/docs/5.5.5/functions/messagewebhookid"},next:{title:"$minute",permalink:"/docs/5.5.5/functions/minute"}},s={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field",id:"usage-without-optional-field",level:4},{value:"Usage with optional field",id:"usage-with-optional-field",level:4}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the guild mfa level ","(","true or false",")"),(0,l.kt)("h4",{id:"fields"},"Fields"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Guild ID ","(","Optional",")")),(0,l.kt)("p",null,"Raw usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"$mfaLevel[Guild ID]")),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Guild ID - Guild's mfa level you want to check.")),(0,l.kt)("h4",{id:"usage-without-optional-field"},"Usage without optional field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel`\n})\n')),(0,l.kt)("h4",{id:"usage-with-optional-field"},"Usage with optional field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel[773352845738115102]`\n}) // This will check the mfaLevel of Aoi.js official server\n')))}f.isMDXComponent=!0}}]);