"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||u;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const u={title:"$shuffleQueue"},a=void 0,i={unversionedId:"functions/shufflequeue",id:"version-5.5.5/functions/shufflequeue",title:"$shuffleQueue",description:"This function shuffles the queue to play in a randomized list",source:"@site/versioned_docs/version-5.5.5/functions/shufflequeue.md",sourceDirName:"functions",slug:"/functions/shufflequeue",permalink:"/docs/5.5.5/functions/shufflequeue",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$shuffleQueue"},sidebar:"docs",previous:{title:"$shardID",permalink:"/docs/5.5.5/functions/shardid"},next:{title:"$skipSong",permalink:"/docs/5.5.5/functions/skipsong"}},s={},c=[],l={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function shuffles the queue to play in a randomized list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "shuffle",\ncode: `$shuffleQueue I\'ve shuffled the queue!`\n})\n')))}p.isMDXComponent=!0}}]);