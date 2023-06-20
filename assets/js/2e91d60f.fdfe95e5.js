"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API"},i=void 0,s={unversionedId:"other/gateway-intents",id:"version-5.5.5/other/gateway-intents",title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API",source:"@site/versioned_docs/version-5.5.5/other/gateway-intents.md",sourceDirName:"other",slug:"/other/gateway-intents",permalink:"/docs/5.5.5/other/gateway-intents",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687251060,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API"},sidebar:"docs",previous:{title:"Permissions",permalink:"/docs/5.5.5/other/permissions"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gateways are Discord's form of real-time communication over secure WebSockets. Clients will receive events and data over the gateway they are connected to and send data over the REST API."),(0,o.kt)("p",null,"This will be needed for us to interact with the Discord API and the functions that are prepared to build your bot."),(0,o.kt)("p",null,"You can enable this in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal through your Bot Application")),(0,o.kt)("p",null,"And there we go, You're now able to access their API and you shouldn't have any errors or bugs ",(0,o.kt)("em",{parentName:"p"},"besides the errors in your own code")),(0,o.kt)("p",null,"If your bot is verified and you don't have the intents but you want to enable them you will need to ",(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360005592534"},"Submit a request")," and explain what intents you want to use in your bot and for what."))}d.isMDXComponent=!0}}]);