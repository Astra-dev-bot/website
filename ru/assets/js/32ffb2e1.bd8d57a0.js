"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,g=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>g,metadata:()=>y,toc:()=>v});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getTextSplitLength",description:"$getTextSplitLength \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432 $textSplit",id:"getTextSplitLength"},m=void 0,y={unversionedId:"functions/util-related/getTextSplitLength",id:"version-6.4.0/functions/util-related/getTextSplitLength",title:"$getTextSplitLength",description:"$getTextSplitLength \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432 $textSplit",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/getTextSplitLength.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/getTextSplitLength",permalink:"/ru/docs/functions/util-related/getTextSplitLength",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$getTextSplitLength",description:"$getTextSplitLength \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432 $textSplit",id:"getTextSplitLength"},sidebar:"docs",previous:{title:"$get",permalink:"/ru/docs/functions/util-related/get"},next:{title:"$guildRoleIconURL",permalink:"/ru/docs/functions/util-related/guildRoleIconURL"}},b={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:v},x="wrapper";function h(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(x,d(s(s({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getTextSplitLength")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit"),"."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getTextSplitLength\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0451\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," , \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u044f\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getTextSplitLength',\n    code: `\n  $getTextSplitLength\n  $textSplit[Hello, my, name, is, Leref;, ]\n  `\n});\n")))}h.isMDXComponent=!0}}]);