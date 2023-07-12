"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5256],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(a),u=o,f=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const r={title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",id:"addcmdreactions"},i=void 0,d={unversionedId:"functions/addcmdreactions",id:"version-5.5.5/functions/addcmdreactions",title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",source:"@site/versioned_docs/version-5.5.5/functions/addcmdreactions.md",sourceDirName:"functions",slug:"/functions/addcmdreactions",permalink:"/docs/5.5.5/functions/addcmdreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689191023,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",id:"addcmdreactions"},sidebar:"docs",previous:{title:"$addButton",permalink:"/docs/5.5.5/functions/addbutton"},next:{title:"$addEmoji",permalink:"/docs/5.5.5/functions/addemoji"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Custom Emoji Information",id:"custom-emoji-information",level:2},{value:"Animated emoji ID",id:"animated-emoji-id",level:3},{value:"Static emoji ID",id:"static-emoji-id",level:3},{value:"Examples",id:"examples",level:2},{value:"With custom emoji:",id:"with-custom-emoji",level:3},{value:"With default emoji",id:"with-default-emoji",level:3}],s={toc:m},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$addCmdReactions")," adds single or multiple reactions to author's message."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$addCmdReactions[emoji;emoji;...]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"emoji"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A default Discord emoji or a custom emoji with ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,o.kt)("h2",{id:"custom-emoji-information"},"Custom Emoji Information"),(0,o.kt)("h3",{id:"animated-emoji-id"},"Animated emoji ID"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<a:emoji:1234567890>")),(0,o.kt)("h3",{id:"static-emoji-id"},"Static emoji ID"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<:emoji:1234567890>")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"with-custom-emoji"},"With custom emoji:"),(0,o.kt)("p",null,"This adds emojis to author's message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-cmd-reactions",\n  code: `\n  $addCmdReactions[<:mns_neoXD:961249981107413022>;<:mns_lolie:966349758203559977>]\n  `\n});\n')),(0,o.kt)("h3",{id:"with-default-emoji"},"With default emoji"),(0,o.kt)("p",null,"This also adds emojis to author's message as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-cmd-reactions",\n  code: `\n  $addCmdReactions[\ud83d\ude0b;\ud83e\udd20]\n  `\n});\n')))}p.isMDXComponent=!0}}]);