"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file."},o=void 0,l={unversionedId:"events/bot.onmemberupdate",id:"version-5.5.5/events/bot.onmemberupdate",title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmemberupdate.md",sourceDirName:"events",slug:"/events/bot.onmemberupdate",permalink:"/docs/5.5.5/events/bot.onmemberupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688518756,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onLeave",permalink:"/docs/5.5.5/events/bot.onleave"},next:{title:"bot.onMessage",permalink:"/docs/5.5.5/events/bot.onmessage"}},s={},m=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This callback triggers every time a member gets updated, e.g. role given/removed or nickname changed."),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.memberUpdateCommand({ //command\nchannel: "channel id", //the channel where the bot will log\ncode: `your code` //Message that will be sent to <channel>\n})\n')),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.memberUpdateCommand({ \nchannel: "772414449839636490", \ncode: `$newMember[name]\'s permissions has been updated from \n$oldMember[permissions] to $newMember[permissions]\n`\n})\n')),(0,a.kt)("h4",{id:"options"},"Options:"),(0,a.kt)("p",null,"You can use these functions $newMember","[","]"," and $oldMember with the options below to return new and old member data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The name of this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this member was updated on "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nick")," - The nickname of this user before it was updated, if any "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"roles")," - The role names of the user before it was updated "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"partial")," - Whether the member structure is cached or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"premiumStamp")," - The timestamp this user started boosting the server, or 0 if they're not boosting "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"joinedStamp")," - The timestamp when this user joined the server "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"voiceID")," - The ID of the voice channel this user's in "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"displayHex")," - Returns the hex color of this user's highest role "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"highestRoleID")," - The ID of the highest role of this user in the guild "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"permissions")," - The permissions for this member "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bannable")," - Whether if the user is bannable by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kickable")," - Whether if the user is kickable by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether if the user can be managed by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"displayColor")," - Displays the color of the highest role in this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status")," - The status for this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"activities")," - The activities for this user")))}u.isMDXComponent=!0}}]);