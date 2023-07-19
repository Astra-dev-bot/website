"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$getMessageVar",description:"$getMessageVar devolver\xe1 el valor de una variable de mensaje determinada.",id:"getMessageVar"},v=void 0,f={unversionedId:"functions/variables-related/getMessageVar",id:"version-6.4.0/functions/variables-related/getMessageVar",title:"$getMessageVar",description:"$getMessageVar devolver\xe1 el valor de una variable de mensaje determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/getMessageVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getMessageVar",permalink:"/es/docs/functions/variables-related/getMessageVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$getMessageVar",description:"$getMessageVar devolver\xe1 el valor de una variable de mensaje determinada.",id:"getMessageVar"},sidebar:"docs",previous:{title:"$getLeaderboardInfo",permalink:"/es/docs/functions/variables-related/getLeaderboardInfo"},next:{title:"$getUserVar",permalink:"/es/docs/functions/variables-related/getUserVar"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function j(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(O,u(c(c({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getMessageVar")," devolver\xe1 el valor de una variable de mensaje determinada."),(0,a.kt)("h2",c({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getMessageVar[varname;guildID?;table?]\n")),(0,a.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ID de mensaje?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"mensaje ID"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"tabla?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Tabla variable."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto devolver\xe1 el valor de una variable llamada "Ejemplo":'),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getMessageVar",\n    code: `\n    $getMessageVar[Example;$messageID;main]\n    `\n});\n')))}j.isMDXComponent=!0}}]);