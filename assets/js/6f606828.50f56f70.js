"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"$uptime",description:"$uptime will return the bot's uptime.",id:"uptime"},i=void 0,o={unversionedId:"functions/info-related/uptime",id:"version-6.2.6/functions/info-related/uptime",title:"$uptime",description:"$uptime will return the bot's uptime.",source:"@site/versioned_docs/version-6.2.6/functions/info-related/uptime.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/uptime",permalink:"/docs/functions/info-related/uptime",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147774,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$uptime",description:"$uptime will return the bot's uptime.",id:"uptime"},sidebar:"docs",previous:{title:"$rolePosition",permalink:"/docs/functions/info-related/rolePosition"},next:{title:"$uri",permalink:"/docs/functions/info-related/uri"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$uptime")," will return the bot's uptime."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$uptime[option?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"How the uptime will be returned (listed below)."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Output"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"full ",(0,a.kt)("strong",{parentName:"td"},"(default)")),(0,a.kt)("td",{parentName:"tr",align:null},"19 minutes, 21 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"humanize"),(0,a.kt)("td",{parentName:"tr",align:null},"19m 21s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"1165980")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the time of how long your bot is online for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'uptime',\n    code: `\n  I've been up for $uptime[full]!\n  `\n});\n")))}c.isMDXComponent=!0}}]);