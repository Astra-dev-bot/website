"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={title:"$deafenUser",description:"Used to deaf a user."},i=void 0,s={unversionedId:"functions/deafenuser",id:"version-5.5.5/functions/deafenuser",title:"$deafenUser",description:"Used to deaf a user.",source:"@site/versioned_docs/version-5.5.5/functions/deafenuser.md",sourceDirName:"functions",slug:"/functions/deafenuser",permalink:"/docs/5.5.5/functions/deafenuser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147774,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$deafenUser",description:"Used to deaf a user."},sidebar:"docs",previous:{title:"$dbPing",permalink:"/docs/5.5.5/functions/dbping"},next:{title:"$defaultMessageNotifications",permalink:"/docs/5.5.5/functions/defaultmessagenotifications"}},l={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this function you will be able to deaf the selected user with the bot."),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 3 fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Deafen ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Reason ","(","Optional",")")),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$deafenUser[User ID;Deafen (yes/no);Reason (Optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User ID - The user being defeaned"),(0,a.kt)("li",{parentName:"ul"},"Deafen - Whether or not the defean the ","<","user",">"),(0,a.kt)("li",{parentName:"ul"},"Reason - The reason will appear in the audit logs")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Deafening the mentioned user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "deaf",\n    code: `\n    Now $username[$mentioned[1]] can\'t hear\n    $deafenUser[$mentiond[1];yes]\n    `\n})\n')),(0,a.kt)("p",null,"Un-deafening the mentioned user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "undeaf",\n    code: `\n    Now $username[$mentioned[1]] can hear\n    $deafenUser[$mentiond[1];no]\n    `\n})\n')))}p.isMDXComponent=!0}}]);