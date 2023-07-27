"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=n,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return a?r.createElement(v,o(o({ref:t},d),{},{components:a})):r.createElement(v,o({ref:t},d))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>v,metadata:()=>b,toc:()=>y});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>l(e,o(t)),m=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const v={title:"$getChannelVar",description:"$getChannelVar devolver\xe1 el valor de una variable de canal determinada.",id:"getChannelVar"},f=void 0,b={unversionedId:"functions/variables-related/getChannelVar",id:"version-6.4.0/functions/variables-related/getChannelVar",title:"$getChannelVar",description:"$getChannelVar devolver\xe1 el valor de una variable de canal determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/getChannelVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getChannelVar",permalink:"/es/docs/functions/variables-related/getChannelVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$getChannelVar",description:"$getChannelVar devolver\xe1 el valor de una variable de canal determinada.",id:"getChannelVar"},sidebar:"docs",previous:{title:"$deleteVar",permalink:"/es/docs/functions/variables-related/deleteVar"},next:{title:"$getGlobalUserVar",permalink:"/es/docs/functions/variables-related/getGlobalUserVar"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},h="wrapper";function O(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(h,u(s(s({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getChannelVar")," devolver\xe1 el valor de una variable de canal determinada."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getChannelVar[varname;channelID?;table?]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"varname"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Nombre variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID del canal."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Tabla variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto devolver\xe1 el valor de una variable llamada "Ejemplo":'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getChannelVar",\n    code: `\n    $getChannelVar[Example;$channelID;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);