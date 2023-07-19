"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73005],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88523:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>f,default:()=>v,frontMatter:()=>k,metadata:()=>y,toc:()=>N});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&s(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&s(t,n,e[n]);return t},c=(t,e)=>l(t,o(e)),m=(t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const k={title:"$allChannelsCount",description:"$allChannelsCount retournera la quantit\xe9 de tous les salons mis en cache d'un type donn\xe9.",id:"allChannelsCount"},f=void 0,y={unversionedId:"functions/info-related/allChannelsCount",id:"version-6.4.0/functions/info-related/allChannelsCount",title:"$allChannelsCount",description:"$allChannelsCount retournera la quantit\xe9 de tous les salons mis en cache d'un type donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/allChannelsCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/allChannelsCount",permalink:"/fr/docs/functions/info-related/allChannelsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$allChannelsCount",description:"$allChannelsCount retournera la quantit\xe9 de tous les salons mis en cache d'un type donn\xe9.",id:"allChannelsCount"},sidebar:"docs",previous:{title:"$unlockThread",permalink:"/fr/docs/functions/guild-related/unlockThread"},next:{title:"$allEmojisCount",permalink:"/fr/docs/functions/info-related/allEmojisCount"}},g={},N=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:N},h="wrapper";function v(t){var e=t,{components:n}=e,r=m(e,["components"]);return(0,a.kt)(h,c(d(d({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$allChannelsCount")," retournera la quantit\xe9 de tous les salons mis en cache d'un type donn\xe9."),(0,a.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$allChannelsCount[type?]\n")),(0,a.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Type que vous voulez que le montant soit retourn\xe9."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"faux")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Types de salon ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type de salon"),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Salon Textuel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Salon vocal"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Voice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Cat\xe9gorie"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Category")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Salon de conf\xe9rence"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Stage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Fil de discussion priv\xe9"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PrivateThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Fil de discussion public"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PublicThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Forum"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Forum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Fil de discussion d'annonce"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Salon d'Annonce"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Announcement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Accueil"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"GuildDirectory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Salon NSFW"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"NSFW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Message direct"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"DM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Tous les types de salons"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"all"))))),(0,a.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Cela retournera le nombre de salons vocaux dans votre serveur :"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'allChannelsCount',\n    code: `\n  $allChannelsCount[Voice]\n  `\n});\n")))}v.isMDXComponent=!0}}]);