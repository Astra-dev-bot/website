"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Prefix custom function",description:"Returns the prefix you used to call the command.",authors:{name:"@erichanuwu",title:"Member - 1077733015846932530",userid:"1077733015846932530",url:"https://discord.com/users/1077733015846932530",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1077733015846932530.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/1077733015846932530/iitgox",source:"@site/forums/posts/1077733015846932530/iitgox.md",title:"Prefix custom function",description:"Returns the prefix you used to call the command.",date:"2023-07-14T17:38:23.000Z",formattedDate:"July 14, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@erichanuwu",title:"Member - 1077733015846932530",userid:"1077733015846932530",url:"https://discord.com/users/1077733015846932530",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1077733015846932530.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1077733015846932530.png"}],frontMatter:{title:"Prefix custom function",description:"Returns the prefix you used to call the command.",authors:{name:"@erichanuwu",title:"Member - 1077733015846932530",userid:"1077733015846932530",url:"https://discord.com/users/1077733015846932530",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1077733015846932530.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1077733015846932530.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Random memes",permalink:"/wikis/posts/1029818509364047933/ryko5y"},nextItem:{title:"msgAfter function",permalink:"/wikis/posts/1096717977304453160/v71q0o"}},c={authorsImageUrls:[void 0]},u=[{value:"Usage",id:"usage",level:3},{value:"Code",id:"code",level:3}],p={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$prefix\n")),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n    name: "$prefix",\n    type: "djs",\n    async code(d) {\n        const data = d.util.aoiFunc(d);\n        const Interpreter = require("aoi.js/src/interpreter.js");\n        const prefixes = Array.isArray(d.client.aoiOptions.prefix) ? d.client.aoiOptions.prefix : [d.client.aoiOptions.prefix];\n        const prefix = d.message.content.split(/ +/g).shift().trim();\n        const interpreted = [];\n        for (const pr of prefixes) {\n            const result = (await Interpreter(d.client, d.message, d.args, { name: "PrefixParser", code: pr }, d.client.db, true)).code;\n            interpreted.push(result)\n        }\n        data.result = interpreted.filter(pr => prefix.startsWith(pr));\n        return {\n            code: d.util.setCode(data)\n        }\n    }\n});\n')))}m.isMDXComponent=!0}}]);