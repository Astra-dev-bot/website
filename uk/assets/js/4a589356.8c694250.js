"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,f=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return r?n.createElement(f,d(d({ref:t},c),{},{components:r})):n.createElement(f,d({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,d=new Array(l);d[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,d[1]=i;for(var p=2;p<l;p++)d[p]=r[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},58478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,d(t)),s=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$addThreadMember",description:"$addThreadMember \u0434\u043e\u0434\u0430\u0441\u0442\u044c \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0430 \u0432 \u0442\u0435\u043c\u0443.",id:"addThreadMember"},b=void 0,g={unversionedId:"functions/guild-related/addThreadMember",id:"version-6.4.0/functions/guild-related/addThreadMember",title:"$addThreadMember",description:"$addThreadMember \u0434\u043e\u0434\u0430\u0441\u0442\u044c \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0430 \u0432 \u0442\u0435\u043c\u0443.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/addThreadMember.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/addThreadMember",permalink:"/uk/docs/functions/guild-related/addThreadMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$addThreadMember",description:"$addThreadMember \u0434\u043e\u0434\u0430\u0441\u0442\u044c \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0430 \u0432 \u0442\u0435\u043c\u0443.",id:"addThreadMember"},sidebar:"docs",previous:{title:"$addEmoji",permalink:"/uk/docs/functions/guild-related/addEmoji"},next:{title:"$archiveThread",permalink:"/uk/docs/functions/guild-related/archiveThread"}},k={},h=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],y={toc:h},v="wrapper";function O(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(v,m(u(u({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addThreadMember")," \u0431\u0443\u0434\u0435 \u0434\u043e\u0434\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0430 \u0434\u043e \u0442\u0435\u043c\u0438."),(0,n.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$addThreadMember[channelID;threadID;userID;reason]\n")),(0,n.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443, \u0434\u0435 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0442\u0435\u043c\u0430."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID \u0433\u0456\u043b\u043a\u0438"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0442\u0435\u043c\u0438 (ID)."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u044f\u043a\u043e\u0433\u043e \u0441\u043b\u0456\u0434 \u0434\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u0442\u0435\u043c\u0438."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u044f\u043a\u0430 \u0431\u0443\u0434\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u0441\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 \u0430\u0443\u0434\u0438\u0442\u0443 \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,n.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"\u0426\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u0456 \u0434\u043e\u0434\u0430\u0441\u0442\u044c \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0434\u043e \u043d\u044c\u043e\u0433\u043e:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    \u0456\u043c'\u044f: 'addThreadMember',\n    \u043a\u043e\u0434: `\n  $addThreadMember[$channelID;$get[id];$randomUserID;testing]\n  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  \n  `\n});\n")))}O.isMDXComponent=!0}}]);