"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"setup",title:"Setup"},i=void 0,s={unversionedId:"guides/setup",id:"guides/setup",title:"Setup",description:"Installation",source:"@site/docs/guides/setup.md",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1672445197,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"setup",title:"Setup"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"$abbreviate",permalink:"/docs/functions/util/abbreviate"}},l={},p=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install aoi.js\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.AoiClient({\ntoken: "Discord Bot Token",\nprefix: "Discord Bot Prefix",\nintents: ["MessageContent", "Guilds", "GuildMessages"]\n})\n\n//Events\nbot.onMessage()\n\n//Command Example (ping)\nbot.command({\nname: "ping",\ncode: `Pong! $pingms`\n})\n\n//Slash Interaction Command Example (ping)\n/*MUST EXECUTE FUNCTION FOR IT TO WORK\n$createApplicationCommand[$guildID;ping;Pong!;true;slash]\n*/\nbot.interactionCommand({\n  name: "ping",\n  prototype: \'slash\',\n  code: `$interactionReply[Pong! $pingms]`\n})\n')))}u.isMDXComponent=!0}}]);