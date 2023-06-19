"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"$textInputValue",description:"$textInputValue returns data of a context menu option.",id:"textInputValue"},l=void 0,i={unversionedId:"functions/event-related/textInputValue",id:"version-6.2.6/functions/event-related/textInputValue",title:"$textInputValue",description:"$textInputValue returns data of a context menu option.",source:"@site/versioned_docs/version-6.2.6/functions/event-related/textInputValue.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/textInputValue",permalink:"/docs/functions/event-related/textInputValue",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147923,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$textInputValue",description:"$textInputValue returns data of a context menu option.",id:"textInputValue"},sidebar:"docs",previous:{title:"$slashOption",permalink:"/docs/functions/event-related/slashOption"},next:{title:"$timeoutData",permalink:"/docs/functions/event-related/timeoutData"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$textInputValue")," returns data of a context menu option."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$textInputValue[option]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Option ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"name (of the option)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will create a button and modal which will send the entered data to the same channel and give an ephemeral response\nto the user who submitted the form:"),(0,r.kt)("p",null,'Please note that you require "',(0,r.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" in your main file (also known as, in\nmost cases, index.js)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "interactionModal",\n    code: `\n$addButton[1;Press Me!;primary;exampleID;false]\nPretty Example!`\n}); // Create a button which will trigger the modal.\n\nbot.interactionCommand({\n    name: "exampleID",\n    prototype: "button",  // Using "prototype" as this interaction belongs to a button.\n    code: `\n$interactionModal[Example!;customID;\n  {actionRow:\n    {textInput:What\'s your name?:1:nameInput:true:Your pretty name!:2:200}\n  }\n  {actionRow:\n    {textInput:What\'s your age?:1:ageInput:true:You young soul!:1:3}\n  }\n  {actionRow:\n    {textInput:What\'s your gender?:2:genderInput:true:Anything will work!:1:10}\n  }\n]`\n}); /* The modal itself, we use {textInput} to accept user input.\n\nThe correct usage of {textInput} would be:\n\n{textInput:title:type (1 : small text field, 2 : big text field):customID:required ( true, false ):placeholder:minVal:maxVal}\n\n*/\n\nbot.interactionCommand({\n    name: "customID",\n    prototype: "modal", // Using "prototype" as this interaction belongs to a modal.\n    code: `\n$interactionReply[Thanks for submitting this form!;;;;everyone;true]\n\n$title[$username submitted a form!;$userAvatar]\n$addField[Their name is..;$textInputValue[nameInput]]\n$addField[Their age is..;$textInputValue[ageInput]]\n$addField[Their gender is..;$textInputValue[genderInput]]`\n}); /* Will return the values entered earlier from the modal. Using $textInputValue to retrieve those.\n\nAlternatively you could use $channelSendMessage[channelID;content] to send the data to another channel.\n$channelSendMessage[$channelID;{newEmbed:{title:$username submitted a form!:$userAvatar}{field:Their name is..:$textInputValue[nameInput]}{field:Their age is..:$textInputValue[ageInput]}{field:Their gender is..:$textInputValue[genderInput]}}]\n*/\n')))}c.isMDXComponent=!0}}]);