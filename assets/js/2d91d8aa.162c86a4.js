"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(r),d=s,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const i={title:"$userExists",description:"Checks if the given user ID exists"},o=void 0,a={unversionedId:"functions/userexists",id:"version-5.5.5/functions/userexists",title:"$userExists",description:"Checks if the given user ID exists",source:"@site/versioned_docs/version-5.5.5/functions/userexists.md",sourceDirName:"functions",slug:"/functions/userexists",permalink:"/docs/5.5.5/functions/userexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687251060,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$userExists",description:"Checks if the given user ID exists"},sidebar:"docs",previous:{title:"$userAvatar",permalink:"/docs/5.5.5/functions/useravatar"},next:{title:"$userID",permalink:"/docs/5.5.5/functions/userid"}},c={},u=[],p={toc:u},l="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function checks if the given user ID exists in discord"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$userExists[user ID]\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "userExists",\ncode: `Does 608358453580136499 exist? $userExists[608358453580136499]`\n})\n')))}f.isMDXComponent=!0}}]);