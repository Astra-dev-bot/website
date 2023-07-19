"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayMap",description:"$arrayMap va cr\xe9er une mappe avec le tableau donn\xe9.",id:"arrayMap"},f=void 0,b={unversionedId:"functions/array-related/arrayMap",id:"version-6.4.0/functions/array-related/arrayMap",title:"$arrayMap",description:"$arrayMap va cr\xe9er une mappe avec le tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayMap.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayMap",permalink:"/fr/docs/functions/array-related/arrayMap",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$arrayMap",description:"$arrayMap va cr\xe9er une mappe avec le tableau donn\xe9.",id:"arrayMap"},sidebar:"docs",previous:{title:"$arrayLength",permalink:"/fr/docs/functions/array-related/arrayLength"},next:{title:"$arrayPop",permalink:"/fr/docs/functions/array-related/arrayPop"}},g={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],k={toc:v},O="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(O,s(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayMap")," va cr\xe9er une mappe avec le tableau donn\xe9."),(0,a.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayMap[nom;commandeAttendue;s\xe9parateur?;donn\xe9esAttendues?]\n")),(0,a.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"commandeAttendue"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"La commande \xe0 ex\xe9cuter."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"S\xe9parateur."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"donn\xe9esAttendues?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Donn\xe9es attendues."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))))}N.isMDXComponent=!0}}]);