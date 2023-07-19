"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,s=u["".concat(d,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(s,l(l({ref:t},c),{},{components:n})):r.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>N,frontMatter:()=>s,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const s={title:"$modifyWebhook",description:"$modifyWebhook \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0435\u0431\u0445\u0443\u043a.",id:"modifyWebhook"},k=void 0,b={unversionedId:"functions/guild-related/modifyWebhook",id:"version-6.4.0/functions/guild-related/modifyWebhook",title:"$modifyWebhook",description:"$modifyWebhook \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0435\u0431\u0445\u0443\u043a.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyWebhook",permalink:"/ru/docs/functions/guild-related/modifyWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$modifyWebhook",description:"$modifyWebhook \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0435\u0431\u0445\u0443\u043a.",id:"modifyWebhook"},sidebar:"docs",previous:{title:"$modifyRolePerms",permalink:"/ru/docs/functions/guild-related/modifyRolePerms"},next:{title:"$ownerID",permalink:"/ru/docs/functions/guild-related/ownerID"}},y={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],h={toc:g},v="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,m(u(u({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyWebhook")," \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0435\u0431\u0445\u0443\u043a."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$modifyWebhook[webhookID;name;avatar;channelID?;reason?]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"webhookID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 webhook \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u0432\u0435\u0431\u0445\u0443\u043a\u0430."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0430\u0432\u0430\u0442\u0430\u0440"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440 \u0432\u0435\u0431\u0445\u0443\u043a\u0430."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f webhook."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0435 \u0430\u0443\u0434\u0438\u0442\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0432\u0435\u0431\u0445\u0443\u043a \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0435\u0433\u043e \u0430\u0432\u0430\u0442\u0430\u0440 \u043d\u0430 \u0432\u0430\u0448 \u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifyWebhook',\n    code: `\n  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]\n  \xab\n});\n")))}N.isMDXComponent=!0}}]);