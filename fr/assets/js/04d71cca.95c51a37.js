"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30112],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51479:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&p(t,a,e[a]);if(o)for(var a of o(e))u.call(e,a)&&p(t,a,e[a]);return t},s=(t,e)=>l(t,i(e)),c=(t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a};const k={title:"$editChannel",description:"$editChannel modifiera un salon.",id:"editChannel"},g=void 0,N={unversionedId:"functions/guild-related/editChannel",id:"version-6.4.0/functions/guild-related/editChannel",title:"$editChannel",description:"$editChannel modifiera un salon.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/editChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/editChannel",permalink:"/fr/docs/functions/guild-related/editChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{title:"$editChannel",description:"$editChannel modifiera un salon.",id:"editChannel"},sidebar:"docs",previous:{title:"$deleteWebhook",permalink:"/fr/docs/functions/guild-related/deleteWebhook"},next:{title:"$fetchActiveThreads",permalink:"/fr/docs/functions/guild-related/fetchActiveThreads"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},h="wrapper";function v(t){var e=t,{components:a}=e,r=c(e,["components"]);return(0,n.kt)(h,s(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$editChannel")," modifiera un salon."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$editChannel[IDsalon;nom?;type?;position?;sujet?;nsfw?;d\xe9bit?;limiteUtilisateur?;cat\xe9gorie?;permissionsBloqu\xe9es?;permissionEcras\xe9es?;modeLent?;dur\xe9eAutoArchiveParD\xe9faut?;r\xe9gionRtc?;raison?]\n")),(0,n.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type de texte"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Libell\xe9"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ID du canal"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L'ID du salon qui sera notifi\xe9."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nom?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Le nouveau nom du salon."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"type?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Le nouveau type de salon. (list\xe9 ci-dessous)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"position?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"La nouvelle position du salon."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"sujet?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Le nouveau sujet du salon."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nsfw?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bool\xe9en"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Si elle doit marquer le salon comme NSFW ou non."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"d\xe9bit?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"D\xe9bit du salon vocal"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"limiteUtilisateur?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Limite utilisateur du salon vocal."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"categorie?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"La nouvelle cat\xe9gorie du salon. (ID de la cat\xe9gorie)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"permissionsBloqu\xe9es?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Les nouvelles permissions bloqu\xe9es du salon."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PermissionsEcras\xe9es?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Les nouvelles permissions \xe9cras\xe9es du salon."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"modeLent?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Le mode ralenti du salon modifi\xe9."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Dur\xe9eAutoArchiveParD\xe9faut"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Dur\xe9e de l'archive Thread/Forum. (en ms)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"r\xe9gionRtc"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"R\xe9gion RTC du salon vocal."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"raison?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Raison qui sera affich\xe9e dans les logs du serveur."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remarque : vous pouvez utiliser ",(0,n.kt)("inlineCode",{parentName:"strong"},"$default")," pour conserver la propri\xe9t\xe9 actuelle.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",null," Types de canaux ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type de canal"),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Salon textuel"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Texte du texte")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Salon vocal"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Voix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cat\xe9gorie"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Canal d'Etape"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xc9tape")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sujet priv\xe9"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sujet priv\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Fil public"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PublicThread")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Forums"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Forums")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Fil d'annonce"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Fil d'annonce")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cha\xeene d'annonce"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Annonce")))),(0,n.kt)("p",null,"Remarque : tous les types de canaux sont ",(0,n.kt)("strong",{parentName:"p"},"sensibles \xe0 la casse"),".")),(0,n.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,'Cela changera le nom du salon actuel en "jadore-aoijs":'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'editChannel',\n    code: `\n  $editChannel[$channelID;jadore-aoijs]\n  `\n});\n")))}v.isMDXComponent=!0}}]);