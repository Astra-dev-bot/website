"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$addThreadMember",description:"$addThreadMember ajoutera un membre \xe0 un fil.",id:"addThreadMember"},b=void 0,g={unversionedId:"functions/guild-related/addThreadMember",id:"version-6.4.0/functions/guild-related/addThreadMember",title:"$addThreadMember",description:"$addThreadMember ajoutera un membre \xe0 un fil.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/addThreadMember.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/addThreadMember",permalink:"/fr/docs/functions/guild-related/addThreadMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{title:"$addThreadMember",description:"$addThreadMember ajoutera un membre \xe0 un fil.",id:"addThreadMember"},sidebar:"docs",previous:{title:"$addEmoji",permalink:"/fr/docs/functions/guild-related/addEmoji"},next:{title:"$archiveThread",permalink:"/fr/docs/functions/guild-related/archiveThread"}},v={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,s(c(c({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addThreadMember")," ajoutera un membre \xe0 un fil."),(0,a.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$addThreadMember[IDsalon;IDfil;IDutilisateur;raison]\n")),(0,a.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"IDsalon"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ID du salon o\xf9 se trouve le fil."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"IDfil"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"L'ID du fil."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"IDutilisateur"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"L'utilisateur qui doit \xeatre ajout\xe9 au fil."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"raison"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"La raison qui sera affich\xe9e dans les logs du serveur."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Ceci va cr\xe9er un fil de discussion et ajouter un utilisateur al\xe9atoire \xe0 celui-ci :"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'filAjouterMembre',\n    code: `\n  $addThreadMember[$channelID;$get[id];$randomUserID;test]\n  $let[id;$createThread[$channelID;exemple;1440;public;$messageID;true]]  \n  `\n});\n")))}O.isMDXComponent=!0}}]);