"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),u=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},a=void 0,l={unversionedId:"functions/emojicount",id:"version-5.5.5/functions/emojicount",title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/emojicount.md",sourceDirName:"functions",slug:"/functions/emojicount",permalink:"/docs/5.5.5/functions/emojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},sidebar:"docs",previous:{title:"$emoji",permalink:"/docs/5.5.5/functions/emoji"},next:{title:"$emojiExists",permalink:"/docs/5.5.5/functions/emojiexists"}},m={},u=[{value:"Types:",id:"types",level:2},{value:"Total emoji count:",id:"total-emoji-count",level:2},{value:"Animated Emojis:",id:"animated-emojis",level:2},{value:"normal Emojis:",id:"normal-emojis",level:2},{value:"Emoji count of another server:",id:"emoji-count-of-another-server",level:2}],s={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the amount of emojis in a guild"),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$emojiCount[type (optional);guildID (optional)]")),(0,r.kt)("h2",{id:"types"},"Types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," or empty field =",">"," returns total amount of custom emojis the bot has access to ","(","animated and normal",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"animated")," =",">"," returns amount of animated custom emojis"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normal")," =",">"," returns amount of non-animated custom emojis")),(0,r.kt)("h2",{id:"total-emoji-count"},"Total emoji count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$emojiCount emojis`\n})\n')),(0,r.kt)("h2",{id:"animated-emojis"},"Animated Emojis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[animated] emojis`\n})\n')),(0,r.kt)("h2",{id:"normal-emojis"},"normal Emojis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[normal] emojis`\n})\n')),(0,r.kt)("h2",{id:"emoji-count-of-another-server"},"Emoji count of another server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[all;740866341040291840] emojis`\n})\n')))}p.isMDXComponent=!0}}]);