import{a as p,b as c,dk as m,u as d,aB as u,o as n,h as r,ad as C,bc as _,n as i,bs as f,l as k}from"./index.e80d0e01.js";import{b as h}from"./index.da5ddd9f.js";import"./index.31111678.js";import"./useContentViewHeight.a9e7b8aa.js";import"./index.8a77dbce.js";import"./ArrowLeftOutlined.74b8db77.js";import"./index.6f2a6b3a.js";const v=c({name:"ThemeColorPicker",components:{CheckOutlined:m},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:s}=d("setting-theme-picker");function o(a){e.event&&h(e.event,a)}return{prefixCls:s,handleClick:o}}}),y=["onClick"];function b(e,s,o,a,$,g){const l=u("CheckOutlined");return n(),r("div",{class:i(e.prefixCls)},[(n(!0),r(C,null,_(e.colorList||[],t=>(n(),r("span",{key:t,onClick:B=>e.handleClick(t),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(l)],14,y))),128))],2)}var S=p(v,[["render",b]]);export{S as default};
