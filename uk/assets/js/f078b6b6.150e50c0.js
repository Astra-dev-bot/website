"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30711],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81846:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var t=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))s.call(n,r)&&p(e,r,n[r]);if(i)for(var r of i(n))c.call(n,r)&&p(e,r,n[r]);return e},m=(e,n)=>l(e,o(n)),d=(e,n)=>{var r={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&c.call(e,t)&&(r[t]=e[t]);return r};const f={title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",id:"channelPermissionsFor"},h=void 0,g={unversionedId:"functions/guild-related/channelPermissionsFor",id:"version-6.4.0/functions/guild-related/channelPermissionsFor",title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/channelPermissionsFor.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/channelPermissionsFor",permalink:"/uk/docs/functions/guild-related/channelPermissionsFor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"19 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",id:"channelPermissionsFor"},sidebar:"docs",previous:{title:"$ban",permalink:"/uk/docs/functions/guild-related/ban"},next:{title:"$cloneChannel",permalink:"/uk/docs/functions/guild-related/cloneChannel"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},v="wrapper";function O(e){var n=e,{components:r}=n,a=d(n,["components"]);return(0,t.kt)(v,m(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$channelPermissionsFor")," will return the channel permissions of a specific user or role."),(0,t.kt)("h2",u({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelPermissionsFor[userOrRoleID?;channelID?;sep?]\n")),(0,t.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,t.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"userOrRoleID"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"The user or role ID whose permissions shall be returned."),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"channelID"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"The channel ID of the channel of which the permissions should be returned of."),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"sep?"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),'The separator which will be used to separate the permissions, by default ",".'),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,t.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,t.kt)("p",null,"This will return your permissions in the channel where you execute the command:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelPermissionsFor',\n    code: `\n  $channelPermissionsFor[$authorID;$channelID;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);