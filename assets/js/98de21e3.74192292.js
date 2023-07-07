"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},o=void 0,i={unversionedId:"functions/allchannelscount",id:"version-5.5.5/functions/allchannelscount",title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/allchannelscount.md",sourceDirName:"functions",slug:"/functions/allchannelscount",permalink:"/docs/5.5.5/functions/allchannelscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688693697,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/docs/5.5.5/functions/advancecooldown"},next:{title:"$allEmojiCount",permalink:"/docs/5.5.5/functions/allemojicount"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types",id:"types",level:4},{value:"Example",id:"example",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This function returns the amount of channels the bot has access to globally. You can optionally pass types of channels to count."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$allChannelsCount[type?]\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The channel types of specific one to get"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Category")," \u2014 Shows Amount of Categories"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"News")," \u2014 Shows Amount of Announcement Type Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PublicThread")," \u2014 Shows Amount of Public Threads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PrivateThread")," \u2014 Shows Amount of Private Threads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Stage")," \u2014 Shows Amount of Stage Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Text")," \u2014 Shows Amount of Text Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Voice")," \u2014 Shows Amount of Voice Channels")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "all-channel-count",\n  code: `\n  $allChannelsCount Channels\n    \u2192 $allChannelsCount[Category] Categories\n    \u2192 $allChannelsCount[Text] Text Channels\n    \u2192 $allChannelsCount[Voice] Voice Channels\n    \u2192 $allChannelsCount[News] Announcement Channels\n    \u2192 $allChannelsCount[PublicThread] Public Thread Channels\n    \u2192 $allChannelsCount[PrivateThread] Private Thread Channels\n    \u2192 $allChannelsCount[Stage] Stage Channels\n  `\n});\n')))}d.isMDXComponent=!0}}]);