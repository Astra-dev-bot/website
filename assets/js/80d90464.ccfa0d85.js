"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"$message",description:"Returns the message, from the Author."},s=void 0,i={unversionedId:"functions/message",id:"version-5.5.5/functions/message",title:"$message",description:"Returns the message, from the Author.",source:"@site/versioned_docs/version-5.5.5/functions/message.md",sourceDirName:"functions",slug:"/functions/message",permalink:"/docs/5.5.5/functions/message",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062715,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$message",description:"Returns the message, from the Author."},sidebar:"docs",previous:{title:"$mentionType",permalink:"/docs/5.5.5/functions/mentiontype"},next:{title:"$messageAttachment",permalink:"/docs/5.5.5/functions/messageattachment"}},m={},l=[{value:"Example Commands:",id:"example-commands",level:4}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns/repeats the author's message ","(","the content of the command's message",")","."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$message[arg (optional)]")),(0,a.kt)("h4",{id:"example-commands"},"Example Commands:"),(0,a.kt)("p",null,"Without optional argument: If I do: ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind the command the bot would return ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "say",\ncode: `\n$message\n`\n})\n')),(0,a.kt)("p",null,"With argument: If I do: ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind my command the bot would return: ",(0,a.kt)("inlineCode",{parentName:"p"},"Aoijs")," , because it's the second argument of my message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "say",\ncode: `\n$message[2]\n`\n})\n')),(0,a.kt)("p",null,"Getting the last argument ","(","last word",")"," of the message: ",(0,a.kt)("inlineCode",{parentName:"p"},"$message[last]")," would return the last argument of the author's message.  If I do: ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind my command the bot would return: ",(0,a.kt)("inlineCode",{parentName:"p"},"awesome")," , because it's the lastargument of my message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "say",\ncode: `\n$message[last]\n`\n})\n')))}u.isMDXComponent=!0}}]);