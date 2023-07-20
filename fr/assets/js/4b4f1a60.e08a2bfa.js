"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79604],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39400:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=t(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))d.call(r,t)&&u(e,t,r[t]);return e},c=(e,r)=>l(e,i(r)),g=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",id:"guildShard"},f=void 0,h={unversionedId:"functions/guild-related/guildShard",id:"version-6.4.0/functions/guild-related/guildShard",title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShard.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShard",permalink:"/fr/docs/functions/guild-related/guildShard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",id:"guildShard"},sidebar:"docs",previous:{title:"$guildSafetyChannelID",permalink:"/fr/docs/functions/guild-related/guildSafetyChannelID"},next:{title:"$guildShardID",permalink:"/fr/docs/functions/guild-related/guildShardID"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Notez que cela ne fonctionnera pas sans sharding. Si vous n&#39;\xeates pas s\xfbr, consultez le guide sharding.",id:"notez-que-cela-ne-fonctionnera-pas-sans-sharding-si-vous-n\xeates-pas-s\xfbr-consultez-le-guide-sharding",level:4},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},k="wrapper";function O(e){var r=e,{components:t}=r,a=g(r,["components"]);return(0,n.kt)(k,c(p(p({},y),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShard")," renverra le nombre de serveurs dans un shard sp\xe9cifique."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildShard[option?;s\xe9parateur?;IDshard]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Comment renvoyer les serveurs? ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"id")," (par d\xe9faut) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"name")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"S\xe9parateur pour s\xe9parer les serveurs qui seront renvoy\xe9s."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDshard"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"L'ID du shard."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h4",p({},{id:"notez-que-cela-ne-fonctionnera-pas-sans-sharding-si-vous-n\xeates-pas-s\xfbr-consultez-le-guide-sharding"}),"Notez que cela ne fonctionnera pas sans sharding. Si vous n'\xeates pas s\xfbr, consultez ",(0,n.kt)("a",p({parentName:"h4"},{href:"/fr/docs/guides/client/sharding"}),"le guide sharding"),"."),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra le nombre de serveurs d'un shard:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'serveurShard',\n    code: `\n  $guildShard[name;, ;$shardID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);