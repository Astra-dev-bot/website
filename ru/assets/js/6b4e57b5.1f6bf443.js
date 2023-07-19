"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>C,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$addClientReactions",description:"$addClientReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e \u0431\u043e\u0442\u0430.",id:"addClientReactions"},y=void 0,b={unversionedId:"functions/interaction-related/addClientReactions",id:"version-6.4.0/functions/interaction-related/addClientReactions",title:"$addClientReactions",description:"$addClientReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e \u0431\u043e\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addClientReactions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addClientReactions",permalink:"/ru/docs/functions/interaction-related/addClientReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$addClientReactions",description:"$addClientReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e \u0431\u043e\u0442\u0430.",id:"addClientReactions"},sidebar:"docs",previous:{title:"$addButton",permalink:"/ru/docs/functions/interaction-related/addButton"},next:{title:"$addCmdReactions",permalink:"/ru/docs/functions/interaction-related/addCmdReactions"}},v={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:g},k="wrapper";function C(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,u(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addClientReactions")," \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u0430."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$addClientReactions[...reactions]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u0435\u0430\u043a\u0446\u0438\u0438"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,'\u042d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438 \u0432 \u043e\u0442\u0432\u0435\u0442 \u0431\u043e\u0442\u0430 ("\u041f\u0440\u0438\u0432\u0435\u0442!"):'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addClientReactions',\n    code: `\n    Hello!\n    $addClientReactions[\ud83e\udde1;\u2764]\n  `\n});\n")))}C.isMDXComponent=!0}}]);