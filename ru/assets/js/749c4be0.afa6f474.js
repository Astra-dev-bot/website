"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>D,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$isGuildDeafened",description:"$isGuildDeafened \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isDeafen`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0434\u0435\u0444\u0438\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",id:"isGuildDeafened"},y=void 0,b={unversionedId:"functions/util-related/isGuildDeafened",id:"version-6.4.0/functions/util-related/isGuildDeafened",title:"$isGuildDeafened",description:"$isGuildDeafened \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isDeafen`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0434\u0435\u0444\u0438\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isGuildDeafened.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isGuildDeafened",permalink:"/ru/docs/functions/util-related/isGuildDeafened",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$isGuildDeafened",description:"$isGuildDeafened \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isDeafen`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0434\u0435\u0444\u0438\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",id:"isGuildDeafened"},sidebar:"docs",previous:{title:"$isEveryoneMentioned",permalink:"/ru/docs/functions/util-related/isEveryoneMentioned"},next:{title:"$isGuildMuted",permalink:"/ru/docs/functions/util-related/isGuildMuted"}},g={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:v},O="wrapper";function D(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,s(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isGuildDeafened")," \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"$isDeafen"),", \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0451\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c."),(0,r.kt)("h2",c({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isGuildDeafened[userID?;guildID?]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d \u043b\u0438 \u043e\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 \u043b\u0438\u0431\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," , \u043b\u0438\u0431\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u043e\u0442\u0431\u0440\u043e\u0448\u0435\u043d \u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438\u043b\u0438 \u043d\u0435\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isGuildDeafened',\n    code: `\n  $isGuildDeafened\n  `\n});\n")))}D.isMDXComponent=!0}}]);