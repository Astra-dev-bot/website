"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>T,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,a(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$clientTyping",description:"$clientTyping har\xe1 que su bot escriba en un canal (mostrar\xe1 que est\xe1 escribiendo).",id:"clientTyping"},m=void 0,b={unversionedId:"functions/client-related/clientTyping",id:"version-6.4.0/functions/client-related/clientTyping",title:"$clientTyping",description:"$clientTyping har\xe1 que su bot escriba en un canal (mostrar\xe1 que est\xe1 escribiendo).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientTyping.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientTyping",permalink:"/es/docs/functions/client-related/clientTyping",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$clientTyping",description:"$clientTyping har\xe1 que su bot escriba en un canal (mostrar\xe1 que est\xe1 escribiendo).",id:"clientTyping"},sidebar:"docs",previous:{title:"$clientToken",permalink:"/es/docs/functions/client-related/clientToken"},next:{title:"$fetchClientValues",permalink:"/es/docs/functions/client-related/fetchClientValues"}},g={},v=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:v},j="wrapper";function T(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(j,d(u(u({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientTyping")," har\xe1 que su bot escriba en un canal (mostrar\xe1 que est\xe1 escribiendo)."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clientTyping\n")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto mostrar\xe1 su bot como escribiendo y enviando "\xa1Hola!" como mensaje:'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientTyping',\n    code: `\n  \xa1Hola!\n  $clientTyping\n  `\n});\n")))}T.isMDXComponent=!0}}]);