"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>O,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$getApplicationCommandOptions",description:"$getApplicationCommandOptions devolver\xe1 las opciones de la aplicaci\xf3n de un comando determinado.",id:"getApplicationCommandOptions"},g=void 0,O={unversionedId:"functions/misc-related/getApplicationCommandOptions",id:"version-6.4.0/functions/misc-related/getApplicationCommandOptions",title:"$getApplicationCommandOptions",description:"$getApplicationCommandOptions devolver\xe1 las opciones de la aplicaci\xf3n de un comando determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/getApplicationCommandOptions.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/getApplicationCommandOptions",permalink:"/es/docs/functions/misc-related/getApplicationCommandOptions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 jul 2023",frontMatter:{title:"$getApplicationCommandOptions",description:"$getApplicationCommandOptions devolver\xe1 las opciones de la aplicaci\xf3n de un comando determinado.",id:"getApplicationCommandOptions"},sidebar:"docs",previous:{title:"$getApplicationCommandID",permalink:"/es/docs/functions/misc-related/getApplicationCommandID"},next:{title:"$getCacheData",permalink:"/es/docs/functions/misc-related/getCacheData"}},b={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],y={toc:v},k="wrapper";function C(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(k,s(m(m({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"$getApplicationCommandOptions devolver\xe1 el ID de un comando de aplicaci\xf3n determinado."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$getApplicationCommandOptions[nombre;tipo?]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Nombre del comando de la aplicaci\xf3n."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"tipo?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"guildID")," (ID de gremio espec\xedfico)"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))))}C.isMDXComponent=!0}}]);