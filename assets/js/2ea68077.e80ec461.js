"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74623],{3905:(A,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>l});var t=n(67294);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function M(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function o(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function D(A,e){if(null==A)return{};var n,t,r=function(A,e){if(null==A)return{};var n,t,r={},M=Object.keys(A);for(t=0;t<M.length;t++)n=M[t],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);for(t=0;t<M.length;t++)n=M[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var s=t.createContext({}),a=function(A){var e=t.useContext(s),n=e;return A&&(n="function"==typeof A?A(e):o(o({},e),A)),n},i=function(A){var e=a(A.components);return t.createElement(s.Provider,{value:e},A.children)},g="mdxType",f={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(A,e){var n=A.components,r=A.mdxType,M=A.originalType,s=A.parentName,i=D(A,["components","mdxType","originalType","parentName"]),g=a(n),u=r,l=g["".concat(s,".").concat(u)]||g[u]||f[u]||M;return n?t.createElement(l,o(o({ref:e},i),{},{components:n})):t.createElement(l,o({ref:e},i))}));function l(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var M=n.length,o=new Array(M);o[0]=u;var D={};for(var s in e)hasOwnProperty.call(e,s)&&(D[s]=e[s]);D.originalType=A,D[g]="string"==typeof A?A:r,o[1]=D;for(var a=2;a<M;a++)o[a]=n[a];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70483:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>M,metadata:()=>D,toc:()=>a});var t=n(87462),r=(n(67294),n(3905));const M={title:"$systemChannelID",description:"Return the system channel ID"},o=void 0,D={unversionedId:"functions/systemchannelid",id:"version-5.5.5/functions/systemchannelid",title:"$systemChannelID",description:"Return the system channel ID",source:"@site/versioned_docs/version-5.5.5/functions/systemchannelid.md",sourceDirName:"functions",slug:"/functions/systemchannelid",permalink:"/docs/5.5.5/functions/systemchannelid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687251060,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$systemChannelID",description:"Return the system channel ID"},sidebar:"docs",previous:{title:"$suppressErrors",permalink:"/docs/5.5.5/functions/suppresserrors"},next:{title:"$takeRole",permalink:"/docs/5.5.5/functions/takerole"}},s={},a=[],i={toc:a},g="wrapper";function f(A){let{components:e,...M}=A;return(0,r.kt)(g,(0,t.Z)({},i,M,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the id for the server's system channel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$systemChannelID[guildID (optional)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "system",\ncode: `$systemChannelID`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This is this system channel",src:n(89740).Z,width:"788",height:"82"})))}f.isMDXComponent=!0},89740:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);