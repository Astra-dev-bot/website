"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99553],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(a),s=r,k=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},54929:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>N,default:()=>h,frontMatter:()=>k,metadata:()=>g,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&c(t,a,e[a]);if(o)for(var a of o(e))m.call(e,a)&&c(t,a,e[a]);return t},u=(t,e)=>l(t,i(e)),s=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a};const k={title:"$createApplicationCommand",description:"$createApplicationCommand va cr\xe9er une commande d'application.",id:"createApplicationCommand"},N=void 0,g={unversionedId:"functions/interaction-related/createApplicationCommand",id:"version-6.4.0/functions/interaction-related/createApplicationCommand",title:"$createApplicationCommand",description:"$createApplicationCommand va cr\xe9er une commande d'application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/createApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/createApplicationCommand",permalink:"/fr/docs/functions/interaction-related/createApplicationCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$createApplicationCommand",description:"$createApplicationCommand va cr\xe9er une commande d'application.",id:"createApplicationCommand"},sidebar:"docs",previous:{title:"$color",permalink:"/fr/docs/functions/interaction-related/color"},next:{title:"$createFile",permalink:"/fr/docs/functions/interaction-related/createFile"}},f={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},v="wrapper";function h(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,n.kt)(v,u(d(d({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$createApplicationCommand")," va cr\xe9er une commande d'application."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createApplicationCommand[IDserveur/global;nom;description;permissionD\xe9faut;type?;options?]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"IDserveur/global"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res entier"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Type de commande de l'application. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"global")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"ID sp\xe9cifique de serveur")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Le nom de la commande de l'application, doit \xeatre en minuscule."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Description de la commande de l'application."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"permissionsD\xe9faut"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Si la commande doit suivre les permissions par d\xe9faut."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Le type de commande de l'application. (slash/user/message)"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"options?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Options de la commande de l'application."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",null," Types d'options de commandes d'application ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"ID"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"NOTE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND_GROUP"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"STRING"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"INTEGER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Tout entier entre -2^53 et 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"BOOLEAN"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"USER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"CHANNEL"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Inclut tous les types de salons + cat\xe9gories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ROLE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"MENTIONABLE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Inclut les utilisateurs et les r\xf4les")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"NUMBER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"N'importe quel double entre -2^53 et 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ATTACHMENT"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Objet ",(0,n.kt)("a",d({parentName:"td"},{href:"https://discord.com/developers/docs/resources/channel#attachment-object"}),"pi\xe8ce jointe"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Vous pouvez trouver plus d'informations dans la ",(0,n.kt)("a",d({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"}),"documentation officielle de l'API de Discord"),"."))),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consultez le guide commande slash/interaction pour plus d'informations sur les commandes slash !")),(0,n.kt)("p",null,"Cela va cr\xe9er une commande slash sans options :"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID/global;exemple;Description de la commande slahs !;true;slash]`\n});\n// Cr\xe9era une commande slash sans aucune entr\xe9e utilisateur, vous pouvez choisir entre global/$guildID pour cr\xe9er une commande globalement ou uniquement pour un serveur sp\xe9cifique.\n')))}h.isMDXComponent=!0}}]);