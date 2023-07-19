"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$forEachGuild",description:"$forEachGuild se ejecutar\xe1 los comandos esperados en cada gremio.",id:"forEachGuild"},g=void 0,b={unversionedId:"functions/misc-related/forEachGuild",id:"version-6.4.0/functions/misc-related/forEachGuild",title:"$forEachGuild",description:"$forEachGuild se ejecutar\xe1 los comandos esperados en cada gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/forEachGuild.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachGuild",permalink:"/es/docs/functions/misc-related/forEachGuild",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$forEachGuild",description:"$forEachGuild se ejecutar\xe1 los comandos esperados en cada gremio.",id:"forEachGuild"},sidebar:"docs",previous:{title:"$forEachChannel",permalink:"/es/docs/functions/misc-related/forEachChannel"},next:{title:"$forEachGuildChannel",permalink:"/es/docs/functions/misc-related/forEachGuildChannel"}},v={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,u(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$forEachGuild")," ejecutar\xe1 determinados comandos esperados en cada gremio."),(0,a.kt)("h2",p({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$forEachGuild[tiempo;esperar datos;...Cmds esperados;finalizar comando]\n")),(0,a.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"tiempo"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo tarda entre cada canal en ejecutar el siguiente."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"awaitData"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"objeto"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Datos esperados."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"...Cmds esperados"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"finalizar comando?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Comando esperado para ejecutar cuando termine el bucle."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto cambiar\xe1 el valor de variable de cada gremio a "test":'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "forEachGuild",\n    code: `\n  $forEachGuild[2s;{"value": "test"};awaitedCommand;]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n  $setGuildVar[varname;$awaitData[value];$guildID]\n  `\n});\n')))}O.isMDXComponent=!0}}]);