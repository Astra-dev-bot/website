"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessages",description:"$awaitMessages responder\xe1 una vez que el mensaje dado haya sido enviado por el usuario dado.",id:"awaitMessages"},f=void 0,k={unversionedId:"functions/awaited-related/awaitMessages",id:"version-6.4.0/functions/awaited-related/awaitMessages",title:"$awaitMessages",description:"$awaitMessages responder\xe1 una vez que el mensaje dado haya sido enviado por el usuario dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitMessages.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitMessages",permalink:"/es/docs/functions/awaited-related/awaitMessages",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689873826,formattedLastUpdatedAt:"20 jul 2023",frontMatter:{title:"$awaitMessages",description:"$awaitMessages responder\xe1 una vez que el mensaje dado haya sido enviado por el usuario dado.",id:"awaitMessages"},sidebar:"docs",previous:{title:"$awaitMessageReactions",permalink:"/es/docs/functions/awaited-related/awaitMessageReactions"},next:{title:"$componentCollector",permalink:"/es/docs/functions/awaited-related/componentCollector"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:y},v="wrapper";function w(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(v,c(u(u({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitMessages")," responder\xe1 una vez que el mensaje dado haya sido enviado por el usuario dado."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$awaitMessages[CanalID;filtro de usuario;tiempo;respuestas;comandos;mensaje de error?;esperar datos?;mensaje directo?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID del canal."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"filtro de usuario"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Filtro de usuario ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"todos ")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"ID de usuario espec\xedfico")," - cualquier ID de usuario"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo durar\xe1 el comando / cu\xe1ndo caduca el comando."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"respuestas"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'A lo que responder\xe1 el bot, m\xfaltiples palabras pueden separarse con una coma (o usar "todo" para responder a todo)'),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"comandos"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Comandos que ser\xe1n ejecutados, m\xfaltiples comandos pueden ser separados con una coma."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\xbfMensaje de error?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Mensaje de error cuando caduca el comando."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"esperar datos?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"mensaje directo?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID de usuario de donde se puede ejecutar el comando."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto responder\xe1 a cualquier mensaje que env\xede despu\xe9s de ejecutar el comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitMessages",\n    code: `\n  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? \xbfNo quieres hablar conmigo...?]\n \n  \xbfC\xf3mo te llamas?\n\n  `\n    // Aseg\xfarese de que el nombre del comando esperado est\xe9 TODO en min\xfasculas o, de lo contrario, no funcionar\xe1.\n});\n\nbot.awaitedCommand({\n    name: "awaitedcommandexample",\n    code: `\n  Encantado de conocerte, $message!\n  `\n});\n')))}w.isMDXComponent=!0}}]);