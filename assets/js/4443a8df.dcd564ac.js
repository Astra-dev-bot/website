"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"$getTextSplitLength",description:"Retrieves, split length."},a=void 0,l={unversionedId:"functions/gettextsplitlength",id:"version-5.5.5/functions/gettextsplitlength",title:"$getTextSplitLength",description:"Retrieves, split length.",source:"@site/versioned_docs/version-5.5.5/functions/gettextsplitlength.md",sourceDirName:"functions",slug:"/functions/gettextsplitlength",permalink:"/docs/5.5.5/functions/gettextsplitlength",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$getTextSplitLength",description:"Retrieves, split length."},sidebar:"docs",previous:{title:"$getServerVar",permalink:"/docs/5.5.5/functions/getservervar"},next:{title:"$getUserBadges",permalink:"/docs/5.5.5/functions/getuserbadges"}},c={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the amount of values in $textSplit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "text", \ncode: `\n$getTextSplitLength \n$textSplit[hi1/hi2/hi3;/]`\n//Bot would return: 3\n})\n')),(0,o.kt)("p",null,"Text Split functions may be hard to understand. Click ",(0,o.kt)("a",{parentName:"p",href:"https://ptb.discordapp.com/channels/773352845738115102/784626845059383316/786996112098590720"},"here")," to view"))}f.isMDXComponent=!0}}]);