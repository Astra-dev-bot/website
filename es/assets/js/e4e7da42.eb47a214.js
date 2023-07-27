"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$authorAvatar",description:"$authorAvatar devolver\xe1 la imagen del perfil del autor del comando.",id:"authorAvatar"},v=void 0,g={unversionedId:"functions/user-related/authorAvatar",id:"version-6.4.0/functions/user-related/authorAvatar",title:"$authorAvatar",description:"$authorAvatar devolver\xe1 la imagen del perfil del autor del comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/authorAvatar.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorAvatar",permalink:"/es/docs/functions/user-related/authorAvatar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$authorAvatar",description:"$authorAvatar devolver\xe1 la imagen del perfil del autor del comando.",id:"authorAvatar"},sidebar:"docs",previous:{title:"$year",permalink:"/es/docs/functions/misc-related/year"},next:{title:"$authorBannerColor",permalink:"/es/docs/functions/user-related/authorBannerColor"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:b},h="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(h,s(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$authorAvatar")," devolver\xe1 la imagen de perfil del autor del comando."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$authorAvatar[tama\xf1o?;din\xe1mico?;formato?]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"tama\xf1o?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El tama\xf1o del archivo de la imagen."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"din\xe1mico?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"booleano"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1. ",(0,a.kt)("strong",{parentName:"td"},"true")," (por defecto) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"formato?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El formato de la imagen devuelta."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto reiniciar\xe1 la imagen de perfil del usuario"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'authorAvatar',\n    code: `\n  $authorAvatar[2048;true;webp]\n  `\n});\n")))}O.isMDXComponent=!0}}]);