"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"bot.onRoleUpdate",description:"An event that gets executed, if the bot sees a role updated in one of it's servers. To let the bot listen to the event, add one bot.onRoleUpdate() callback inside your main file."},l=void 0,i={unversionedId:"events/bot.onroleupdate",id:"version-5.5.5/events/bot.onroleupdate",title:"bot.onRoleUpdate",description:"An event that gets executed, if the bot sees a role updated in one of it's servers. To let the bot listen to the event, add one bot.onRoleUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onroleupdate.md",sourceDirName:"events",slug:"/events/bot.onroleupdate",permalink:"/docs/5.5.5/events/bot.onroleupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"bot.onRoleUpdate",description:"An event that gets executed, if the bot sees a role updated in one of it's servers. To let the bot listen to the event, add one bot.onRoleUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onRoleDelete",permalink:"/docs/5.5.5/events/bot.onroledelete"},next:{title:"bot.onTypingStart",permalink:"/docs/5.5.5/events/bot.ontypingstart"}},s={},p=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback triggers every time a role gets updated"),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.roleUpdateCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.roleUpdateCommand({ \nchannel: "772414449839636490", \ncode: `\nRole Name Updated:\nOld Name: $oldRole[name]\nNew Name: $newRole[name]\n`\n})\n')),(0,r.kt)("h4",{id:"options"},"Options:"),(0,r.kt)("p",null,"You can use these functions ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/oldrole"},"$oldRole","[","]")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/newrole"},"$newRole","[","]")," with the options below to return old and new role data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," =",">"," The ID of the role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),' "The name of the role'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position")," =",">"," The position of this role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rawPosition")," =",">"," The position of this role given by the API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hexColor")," =",">"," The hex color for this role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color")," =",">"," The color of this role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hoist")," =",">"," Whether the role is hoisted or not"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mentionable")," =",">"," Whether the role is mentionable or not"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," The ID of the guild the role belongs to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"editable")," =",">"," Whether the role is editable by the client or not"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"managed:")," =",">"," Whether this role is managed by discord or not ","(","bot- & booster-roles",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleted:")," =",">"," Whether the role was deleted or not"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions")," =",">"," The permissions for this role")))}u.isMDXComponent=!0}}]);