"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),v=o,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},34928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile."},l=void 0,i={unversionedId:"events/bot.onguildleave",id:"version-5.5.5/events/bot.onguildleave",title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onguildleave.md",sourceDirName:"events",slug:"/events/bot.onguildleave",permalink:"/docs/5.5.5/events/bot.onguildleave",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687253143,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onGuildJoin",permalink:"/docs/5.5.5/events/bot.onguildjoin"},next:{title:"bot.onInteractionCreate",permalink:"/docs/5.5.5/events/bot.oninteractioncreate"}},c={},s=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback will allow the bot to log a message whenever it leaves a server."),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.guildLeaveCommand({//command\nchannel: "channel id",//the channel where <code> will be sent to\ncode: `your code`//message sent to <channel>\n})\n')),(0,o.kt)("h4",{id:"example-command"},"Example command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.guildLeaveCommand({\nchannel: "772414449839636490",\ncode: `\nI have left $serverName!\n`\n})\n')),(0,o.kt)("p",null,"You can use all guild based functions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/servername"},"$serverName")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/guildid"},"$guildID")," in these commands but functions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/getserverinvite"},"$getServerInvite")," won't work here."))}p.isMDXComponent=!0}}]);