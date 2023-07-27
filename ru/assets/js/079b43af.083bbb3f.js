"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23755],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),u=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=u(t),y=n,d=p["".concat(c,".").concat(y)]||p[y]||s[y]||l;return t?a.createElement(d,o(o({ref:r},f),{},{components:t})):a.createElement(d,o({ref:r},f))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11311:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&f(e,t,r[t]);return e},s=(e,r)=>l(e,o(r)),y=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const d={title:"$arrayShuffle",description:"$arrayShuffle \u043f\u0435\u0440\u0435\u043c\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430.",id:"arrayShuffle"},m=void 0,b={unversionedId:"functions/array-related/arrayShuffle",id:"version-6.4.0/functions/array-related/arrayShuffle",title:"$arrayShuffle",description:"$arrayShuffle \u043f\u0435\u0440\u0435\u043c\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayShuffle.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShuffle",permalink:"/ru/docs/functions/array-related/arrayShuffle",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$arrayShuffle",description:"$arrayShuffle \u043f\u0435\u0440\u0435\u043c\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430.",id:"arrayShuffle"},sidebar:"docs",previous:{title:"$arrayShift",permalink:"/ru/docs/functions/array-related/arrayShift"},next:{title:"$arraySome",permalink:"/ru/docs/functions/array-related/arraySome"}},h={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:v},O="wrapper";function k(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,s(p(p({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayShuffle")," \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u0443\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438\u0437 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayShuffle[name]\n")),(0,a.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Nbg"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,a.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-shuffle",\n    code: `\n  $arrayJoin[array;, ]\n  $arrayShuffle[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);