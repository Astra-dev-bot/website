"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=l,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),l=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$roleId",description:"$roleId devolver\xe1 el ID de un rol.",id:"roleId"},v=void 0,y={unversionedId:"functions/util-related/roleId",id:"version-6.4.0/functions/util-related/roleId",title:"$roleId",description:"$roleId devolver\xe1 el ID de un rol.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/roleId.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/roleId",permalink:"/es/docs/functions/util-related/roleId",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$roleId",description:"$roleId devolver\xe1 el ID de un rol.",id:"roleId"},sidebar:"docs",previous:{title:"$roleExists",permalink:"/es/docs/functions/util-related/roleExists"},next:{title:"$spliceTextJoin",permalink:"/es/docs/functions/util-related/spliceTextJoin"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function j(e){var t=e,{components:r}=t,l=m(t,["components"]);return(0,n.kt)(O,s(u(u({},k),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$roleId")," devolver\xe1 el ID de un rol."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$roleId[roleResolver;guildID?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"resolver rol"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Nombre del rol."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID del gremio en el que se cre\xf3 el rol."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 el ID de rol de un rol llamado ",(0,n.kt)("inlineCode",{parentName:"p"},"Propietario")," (este ejemplo no funcionar\xe1 si no tienes ese rol):"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'roleId',\n    code: `\n  $roleId[Owner;$guildID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);