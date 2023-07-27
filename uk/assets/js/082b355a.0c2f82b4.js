"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(f,p(p({ref:t},s),{},{components:r})):a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:n,p[1]=i;for(var c=2;c<l;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>x});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>l(e,p(t)),u=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$replaceText",description:"$replaceText will replace specific segments of text.",id:"replaceText"},k=void 0,g={unversionedId:"functions/util-related/replaceText",id:"version-6.4.0/functions/util-related/replaceText",title:"$replaceText",description:"$replaceText will replace specific segments of text.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/replaceText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceText",permalink:"/uk/docs/functions/util-related/replaceText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$replaceText",description:"$replaceText will replace specific segments of text.",id:"replaceText"},sidebar:"docs",previous:{title:"$repeatMessage",permalink:"/uk/docs/functions/util-related/repeatMessage"},next:{title:"$replaceTextWithRegex",permalink:"/uk/docs/functions/util-related/replaceTextWithRegex"}},y={},x=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],b={toc:x},v="wrapper";function N(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(v,m(d(d({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText")," will replace specific segments of text."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$replaceText[text;replacer;replaceTo;times?]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Text you want to modify."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"replacer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The text that will be replaced."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"replaceTo"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The text that will replace ",(0,a.kt)("inlineCode",{parentName:"td"},"replacer"),"."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"times?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"How many times ",(0,a.kt)("inlineCode",{parentName:"td"},"replaceTo")," replaces ",(0,a.kt)("inlineCode",{parentName:"td"},"replacer"),". / Use ",(0,a.kt)("inlineCode",{parentName:"td"},"-1")," for the last one."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"D")," and the output will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Donkey"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Monkey;M;D]\n  `\n});\n")),(0,a.kt)("h3",d({},{id:"advanced-example"}),"Advanced Example"),(0,a.kt)("p",null,"This will replace the word ",(0,a.kt)("inlineCode",{parentName:"p"},"coffee")," two times using the last ",(0,a.kt)("a",d({parentName:"p"},{href:"#parameters"}),"field")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[I love drinking Coffee, Coffee gives me power! Coffee is bad for my health.;Coffee;orange juice;2]\n  `\n});\n")),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"Ferel")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"are")," using multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are not]\n  `\n});\n")))}N.isMDXComponent=!0}}]);