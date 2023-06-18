"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86766],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=o,v=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return t?n.createElement(v,s(s({ref:r},u),{},{components:t})):n.createElement(v,s({ref:r},u))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29763:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={title:"$serverDescription"},s=void 0,c={unversionedId:"functions/serverdescription",id:"version-5.5.5/functions/serverdescription",title:"$serverDescription",description:"This function returns the current server's description. Server description is for guilds on Discord's server discovery program",source:"@site/versioned_docs/version-5.5.5/functions/serverdescription.md",sourceDirName:"functions",slug:"/functions/serverdescription",permalink:"/docs/5.5.5/functions/serverdescription",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062715,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$serverDescription"},sidebar:"docs",previous:{title:"$serverCount",permalink:"/docs/5.5.5/functions/servercount"},next:{title:"$serverEmojiExists",permalink:"/docs/5.5.5/functions/serveremojiexists"}},a={},p=[],u={toc:p},l="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the current server's description. Server description is for guilds on Discord's server discovery program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "description",\ncode: `\n$title[$serverName\'s Description]\n$description[$serverDescription]\n$color[RANDOM]\n$thumnail[$serverIcon]\n`\n})\n')))}d.isMDXComponent=!0}}]);