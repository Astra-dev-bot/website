"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),k=r,g=p["".concat(m,".").concat(k)]||p[k]||u[k]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>P,frontMatter:()=>g,metadata:()=>N,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&o.call(e,a)&&(n[a]=e[a]);return n};const g={title:"$hasPermsInChannel",description:"$hasPermsInChannel will check if the user has one of the required permission in the given channel.",id:"hasPermsInChannel"},c=void 0,N={unversionedId:"functions/util-related/hasPermsInChannel",id:"version-6.4.0/functions/util-related/hasPermsInChannel",title:"$hasPermsInChannel",description:"$hasPermsInChannel will check if the user has one of the required permission in the given channel.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/hasPermsInChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasPermsInChannel",permalink:"/fr/docs/functions/util-related/hasPermsInChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433276,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$hasPermsInChannel",description:"$hasPermsInChannel will check if the user has one of the required permission in the given channel.",id:"hasPermsInChannel"},sidebar:"docs",previous:{title:"$hasPerms",permalink:"/fr/docs/functions/util-related/hasPerms"},next:{title:"$hasRoles",permalink:"/fr/docs/functions/util-related/hasRoles"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},f="wrapper";function P(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(f,u(p(p({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$hasPermsInChannel")," will check if the user has one of the required permission in the given channel."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$hasPermsInChannel[channelID;userOrRoleID;...perms]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"channelD"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID of the channel where the client checks the permissions."),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userOrRoleID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID of the user or role."),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"...perms"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions."),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"true")))),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("h3",null," Discord API Permissions ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Permission"),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create guild invites")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to kick guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to ban guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Administrator Permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managechannels"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage guild channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageguild"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to modify server settings")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to add reactions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view the guild's audit log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Priority Speaker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to stream in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send Text-To-Speech messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to embed links")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to attach files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to read the message history within a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mention ",(0,a.kt)("inlineCode",{parentName:"td"},"@everyone")," and all roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useexternalemojis"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use external emojis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view guild insights")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to connect to voice channels and stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mute members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to deafen members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to move members between voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use voice-activity-detection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to change your own nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage other members nicknames")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage webhooks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage emojis and stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useapplicationcommands"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use application commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use request-to-speak in stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usepublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useexternalstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use extrernal stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessagesinthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useembeddedactivities"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to start activities within voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to timeout and remove timeouts from guild members"))))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when the author has ",(0,a.kt)("inlineCode",{parentName:"p"},"send messages")," permissions and return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when they don't have those:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasPermsInChannel',\n    code: `\n  $hasPermsInChannel[$channelID;$authorID;sendmessages]\n  `\n});\n")))}P.isMDXComponent=!0}}]);