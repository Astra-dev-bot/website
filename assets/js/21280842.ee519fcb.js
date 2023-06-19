"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Hyperlinks",description:"This page is covering all about hyperlinks.",id:"hyperlinks"},i=void 0,l={unversionedId:"other/hyperlinks",id:"version-6.2.6/other/hyperlinks",title:"Hyperlinks",description:"This page is covering all about hyperlinks.",source:"@site/versioned_docs/version-6.2.6/other/3hyperlinks.md",sourceDirName:"other",slug:"/other/hyperlinks",permalink:"/docs/other/hyperlinks",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147923,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"Hyperlinks",description:"This page is covering all about hyperlinks.",id:"hyperlinks"},sidebar:"docs",previous:{title:"Command Options",permalink:"/docs/other/commandoptions"},next:{title:"Message Formatting",permalink:"/docs/other/msgformatting"}},p={},s=[{value:"Embedding Links",id:"embedding-links",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This page is about hyperlinks, what they do and how to use them.")),(0,o.kt)("p",null,"Hyperlinks are useful to hide long links in text, this has limitation as it only works in Interactions (application\ncommands) and embeds."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"embedding-links"},"Embedding Links"),(0,o.kt)("p",null,"First of all you require a link you want to embed, let's take ",(0,o.kt)("inlineCode",{parentName:"p"},"https://aoi.js.org")," for example."),(0,o.kt)("p",null,"Then do the following;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Surround the link with brackets, looking like this;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"(https://aoi.js.org)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Choose the text you want to be clickable and put that one in-front of the link looking like this;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"[Awesome Hyperlink!](https://aoi.js.org)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1084893609385533481/wNX6ebB93qrPgAAAABJRU5ErkJggg.png",alt:"img"})),(0,o.kt)("p",null,"That works the same way for embeds as for application commands."),(0,o.kt)("p",null,'If you want to customize the "hovertag", then do the following;'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'[Awesome Hyperlink!](https://aoi.js.org "Hover Text")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1084896685303529482/1eVj5z3u6UAAAAAElFTkSuQmCC.png",alt:"img"})))}m.isMDXComponent=!0}}]);