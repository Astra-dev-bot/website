"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=n,g=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},89125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>g,metadata:()=>k,toc:()=>f});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),s=(e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const g={title:"$guildLeaderBoard",description:"$guildLeaderboard devolver\xe1 una tabla de clasificaci\xf3n de una variable de gremio.",id:"guildLeaderBoard"},b=void 0,k={unversionedId:"functions/variables-related/guildLeaderBoard",id:"version-6.4.0/functions/variables-related/guildLeaderBoard",title:"$guildLeaderBoard",description:"$guildLeaderboard devolver\xe1 una tabla de clasificaci\xf3n de una variable de gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/guildLeaderBoard.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/guildLeaderBoard",permalink:"/es/docs/functions/variables-related/guildLeaderBoard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 jul 2023",frontMatter:{title:"$guildLeaderBoard",description:"$guildLeaderboard devolver\xe1 una tabla de clasificaci\xf3n de una variable de gremio.",id:"guildLeaderBoard"},sidebar:"docs",previous:{title:"$guildCooldown",permalink:"/es/docs/functions/variables-related/guildCooldown"},next:{title:"$rawLeaderboard",permalink:"/es/docs/functions/variables-related/rawLeaderboard"}},v={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:f},y="wrapper";function O(e){var t=e,{components:a}=t,n=s(t,["components"]);return(0,r.kt)(y,c(m(m({},N),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildLeaderboard")," devolver\xe1 una tabla de clasificaci\xf3n de una variable del gremio."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$guildLeaderboard[variable;type?;custom?;list?;page?;table?]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"variable"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Nombre variable."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"En qu\xe9 orden ser\xe1 devuelto ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"ascender")," (ascendente / predeterminado) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"dsc")," (descendiendo)"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\xbfpersonalizado?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Formateando."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"lista?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Cu\xe1ntos listar."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\xbfp\xe1gina?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Qu\xe9 p\xe1gina listar."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Tabla variable."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Opciones"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Devuelve"),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{top}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve la posici\xf3n del usuario del gremio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{name}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve el nombre de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{id}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve el ID del gremio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{value}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero, entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve el valor de la variable.")))),(0,r.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto devolver\xe1 una tabla de clasificaci\xf3n de la variable "Ejemplo":'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "guildLeaderboard",\n    code: `\n    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);