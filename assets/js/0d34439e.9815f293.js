"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"$deleteApplicationCommand",description:"Delete an application command."},i=void 0,o={unversionedId:"functions/deleteapplicationcommand",id:"version-5.5.5/functions/deleteapplicationcommand",title:"$deleteApplicationCommand",description:"Delete an application command.",source:"@site/versioned_docs/version-5.5.5/functions/deleteapplicationcommand.md",sourceDirName:"functions",slug:"/functions/deleteapplicationcommand",permalink:"/docs/5.5.5/functions/deleteapplicationcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147923,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$deleteApplicationCommand",description:"Delete an application command."},sidebar:"docs",previous:{title:"$defaultMessageNotifications",permalink:"/docs/5.5.5/functions/defaultmessagenotifications"},next:{title:"$deleteChannels",permalink:"/docs/5.5.5/functions/deletechannels"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Delete an application command which is can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slash type"),(0,l.kt)("li",{parentName:"ul"},"Message type"),(0,l.kt)("li",{parentName:"ul"},"User type")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$deleteApplicationCommand[guildID/global;application id]\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"guildID/global"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The field, which we're going to delete on ",(0,l.kt)("inlineCode",{parentName:"td"},"guild")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"global")),(0,l.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"application id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The application command that we're going to delete"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deleting on a server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "delete-application-command",\n  code: `\n  $deleteApplicationCommand[$guildID;$getApplicationCommandID[help;$guildID]]\n  \n  Deleted help command, since it was unnecessary...\n  `\n});\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deleting global application command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "delete-application-command",\n  code: `\n  $deleteApplicationCommand[global;$getApplicationCommandID[help;global]]\n  \n  Deleted help command, since it was unnecessary...\n  `\n});\n')))}s.isMDXComponent=!0}}]);