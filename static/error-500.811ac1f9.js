import{b as i,X as a,o as r,I as n,J as t,L as s,Z as l,$ as d}from"./entry.5937f267.js";const c=e=>(l("data-v-eabfe04e"),e=e(),d(),e),p={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},f=c(()=>t("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),h={class:"max-w-520px text-center"},g=["textContent"],b=["textContent"],m={__name:"error-500",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:500},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(e){const o=e;return a({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(x,u)=>(r(),n("div",p,[f,t("div",h,[t("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:s(e.statusCode)},null,8,g),t("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:s(e.description)},null,8,b)])]))}},w=i(m,[["__scopeId","data-v-eabfe04e"]]);export{w as default};