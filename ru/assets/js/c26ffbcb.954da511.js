"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$findRoles",description:"$findRoles \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u043e\u043b\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",id:"findRoles"},k=void 0,g={unversionedId:"functions/util-related/findRoles",id:"version-6.4.0/functions/util-related/findRoles",title:"$findRoles",description:"$findRoles \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u043e\u043b\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findRoles",permalink:"/ru/docs/functions/util-related/findRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$findRoles",description:"$findRoles \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u043e\u043b\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",id:"findRoles"},sidebar:"docs",previous:{title:"$findRole",permalink:"/ru/docs/functions/util-related/findRole"},next:{title:"$findSpecialChars",permalink:"/ru/docs/functions/util-related/findSpecialChars"}},y={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 <code>\u0444\u043e\u0440\u043c\u0430\u0442\u0430</code>",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:b},N="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(N,s(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findRoles")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u043e\u043b\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,r.kt)("h2",c({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$findRoles[roleResolver;limit?;type?;format?]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u0435\u0437\u043e\u043b\u0432\u0435\u0440 \u0440\u043e\u043b\u0435\u0439"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043b\u0438\u043c\u0438\u0442?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u043e\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u043e\u0442 \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"nbg?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0422\u0438\u043f \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0444\u043e\u0440\u043c\u0430\u0442?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0432\u043e\u0434\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h3",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u0444\u043e\u0440\u043c\u0430\u0442\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{position} -> \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u044e"),(0,r.kt)("li",{parentName:"ul"},"{id} -> \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ID \u0440\u043e\u043b\u0438"),(0,r.kt)("li",{parentName:"ul"},"{username} -> \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043c\u044f \u0440\u043e\u043b\u0438")),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0451\u0442 \u0432\u0441\u0435 \u0440\u043e\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findRoles',\n    code: `\n  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]\n  `\n});\n")))}O.isMDXComponent=!0}}]);