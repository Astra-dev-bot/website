"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"$isTimeout",description:"$isTimeout will check if the user is timeouted with Discord's built-in timeout feature.",id:"isTimeout"},o=void 0,l={unversionedId:"functions/Util/isTimeout",id:"functions/Util/isTimeout",title:"$isTimeout",description:"$isTimeout will check if the user is timeouted with Discord's built-in timeout feature.",source:"@site/docs/functions/Util/isTimeout.md",sourceDirName:"functions/Util",slug:"/functions/Util/isTimeout",permalink:"/docs/functions/Util/isTimeout",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"$isTimeout",description:"$isTimeout will check if the user is timeouted with Discord's built-in timeout feature.",id:"isTimeout"},sidebar:"docs",previous:{title:"$isThread",permalink:"/docs/functions/Util/isThread"},next:{title:"$isUnicodeEmoji",permalink:"/docs/functions/Util/isUnicodeEmoji"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isTimeout")," will check if the user is timeouted with Discord's built-in timeout feature."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$isTimeout[guildid?;userid?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildid?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"the guild id of where they're timeouted in"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userid?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"the user id of the user that's timeouted"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will check if you're timeouted and either return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'isTimeout',\n  code: `\n  $isTimeout[$guildID;$authorID]\n  `\n});\n")))}p.isMDXComponent=!0}}]);