"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77512],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>k});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&d(e,r,t[r]);return e},c=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$getUserVar",description:"$getUserVar devolver\xe1 el valor de una variable de usuario determinada.",id:"getUserVar"},v=void 0,f={unversionedId:"functions/variables-related/getUserVar",id:"version-6.4.0/functions/variables-related/getUserVar",title:"$getUserVar",description:"$getUserVar devolver\xe1 el valor de una variable de usuario determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/getUserVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getUserVar",permalink:"/es/docs/functions/variables-related/getUserVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$getUserVar",description:"$getUserVar devolver\xe1 el valor de una variable de usuario determinada.",id:"getUserVar"},sidebar:"docs",previous:{title:"$getMessageVar",permalink:"/es/docs/functions/variables-related/getMessageVar"},next:{title:"$getVar",permalink:"/es/docs/functions/variables-related/getVar"}},b={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:k},N="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(N,c(u(u({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getUserVar")," devolver\xe1 el valor de una variable de usuario determinada."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getUserVar[varname;userID?;id?;table?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"usarioID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID de usuario."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\xbfid?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string, integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"1. ",(0,a.kt)("strong",{parentName:"td"},"id de guild espec\xedfico")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"dm")),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tabla?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Tabla variable."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto devolver\xe1 el valor de una variable llamada "Ejemplo":'),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getUserVar",\n    code: `\n    $getUserVar[Example;$authorID;$guildID;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);