"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"$createRole",description:"Creates a new role"},i=void 0,l={unversionedId:"functions/createrole",id:"version-5.5.5/functions/createrole",title:"$createRole",description:"Creates a new role",source:"@site/versioned_docs/version-5.5.5/functions/createrole.md",sourceDirName:"functions",slug:"/functions/createrole",permalink:"/docs/5.5.5/functions/createrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062715,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$createRole",description:"Creates a new role"},sidebar:"docs",previous:{title:"$createObject",permalink:"/docs/5.5.5/functions/createobject"},next:{title:"$createStageInstance",permalink:"/docs/5.5.5/functions/createstageinstance"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function allows the bot to create a new role in the current guild"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"This function has 2 required fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Guild ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Return Role ID ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Color ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Hoisted ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Position ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Mentionable ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Permission ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Permission 2 ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Etc")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$createRole[guildid;returnID (yes/no);name;color (optional);hoisted (yes/no)(optional);position (optional);mentionable (yes/no)(optional);permission;permission;...]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GuildID - The ID of the guild "),(0,o.kt)("li",{parentName:"ul"},"ReturnID - Returns the id of the role created "),(0,o.kt)("li",{parentName:"ul"},"Name - The name of the role"),(0,o.kt)("li",{parentName:"ul"},"Color - The color of the role ","(","in hex",")"),(0,o.kt)("li",{parentName:"ul"},"Hoisted - Whether or not the role will be hoisted"),(0,o.kt)("li",{parentName:"ul"},"Position - The position of the role"),(0,o.kt)("li",{parentName:"ul"},"Mentionable - Whether or not the role will be mentionable"),(0,o.kt)("li",{parentName:"ul"},"Permissions ","(","1,2,3,etc",")"," - The allowed permissions for the role")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "createRole",\ncode: `$createRole[$guildID;no;Administrator;FF0000;yes;2;no;admin]`\n}) // Creates new role named "Administrator"\n')))}d.isMDXComponent=!0}}]);