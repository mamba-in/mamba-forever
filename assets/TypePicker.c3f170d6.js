import{a as r,b as i,br as l,u as c,aB as d,o as s,h as a,ad as _,bc as u,n as o,aD as f,aC as m,i as n,p as y,q as v}from"./index.29a286bf.js";const C=i({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(y("data-v-119d0732"),e=e(),v(),e),k=["onClick"],$=h(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function b(e,g,B,x,I,S){const p=d("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:L=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,k)]),_:2},1032,["title"]))),128))],2)}var w=r(C,[["render",b],["__scopeId","data-v-119d0732"]]);export{w as default};