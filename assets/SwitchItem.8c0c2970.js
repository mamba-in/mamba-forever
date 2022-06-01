import{w as P,t as $,b as V,r as t,az as j,bv as D,ay as _,v as S,e as b,ae as U,s as A,aK as E,ar as G,z as s,l as r,G as g,aY as H,ai as L,x as B,cB as W,aZ as I,a as R,u as Y,aB as Z,o as q,h as J,i as Q,aG as X,ba as ee,n as ne,b8 as ae}from"./index.718c4dd7.js";import{b as te}from"./index.6bc3644a.js";import"./index.d9440c55.js";import"./useContentViewHeight.c4120ce3.js";import"./index.c688e2e2.js";import"./ArrowLeftOutlined.ad74aa42.js";import"./index.8601c59e.js";var le=$("small","default"),ce=function(){return{id:String,prefixCls:String,size:t.oneOf(le),disabled:{type:Boolean,default:void 0},checkedChildren:t.any,unCheckedChildren:t.any,tabindex:t.oneOfType([t.string,t.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:t.oneOfType([t.string,t.number,t.looseBool]),checkedValue:t.oneOfType([t.string,t.number,t.looseBool]).def(!0),unCheckedValue:t.oneOfType([t.string,t.number,t.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},oe=V({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:ce(),slots:["checkedChildren","unCheckedChildren"],setup:function(e,u){var o=u.attrs,h=u.slots,v=u.expose,d=u.emit,p=j();D(function(){_(!("defaultChecked"in o),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),_(!("value"in o),"Switch","`value` is not validate prop, do you mean `checked`?")});var C=S(e.checked!==void 0?e.checked:o.defaultChecked),k=b(function(){return C.value===e.checkedValue});U(function(){return e.checked},function(){C.value=e.checked});var m=A("switch",e),c=m.prefixCls,x=m.direction,F=m.size,f=S(),w=function(){var n;(n=f.value)===null||n===void 0||n.focus()},T=function(){var n;(n=f.value)===null||n===void 0||n.blur()};v({focus:w,blur:T}),E(function(){G(function(){e.autofocus&&!e.disabled&&f.value.focus()})});var y=function(n,i){e.disabled||(d("update:checked",n),d("change",n,i),p.onFieldChange())},z=function(n){d("blur",n)},N=function(n){w();var i=k.value?e.unCheckedValue:e.checkedValue;y(i,n),d("click",i,n)},K=function(n){n.keyCode===I.LEFT?y(e.unCheckedValue,n):n.keyCode===I.RIGHT&&y(e.checkedValue,n),d("keydown",n)},M=function(n){var i;(i=f.value)===null||i===void 0||i.blur(),d("mouseup",n)},O=b(function(){var a;return a={},s(a,"".concat(c.value,"-small"),F.value==="small"),s(a,"".concat(c.value,"-loading"),e.loading),s(a,"".concat(c.value,"-checked"),k.value),s(a,"".concat(c.value,"-disabled"),e.disabled),s(a,c.value,!0),s(a,"".concat(c.value,"-rtl"),x.value==="rtl"),a});return function(){var a;return r(W,{insertExtraNode:!0},{default:function(){return[r("button",g(g(g({},H(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),o),{},{id:(a=e.id)!==null&&a!==void 0?a:p.id.value,onKeydown:K,onClick:N,onBlur:z,onMouseup:M,type:"button",role:"switch","aria-checked":C.value,disabled:e.disabled||e.loading,class:[o.class,O.value],ref:f}),[r("div",{class:"".concat(c.value,"-handle")},[e.loading?r(L,{class:"".concat(c.value,"-loading-icon")},null):null]),r("span",{class:"".concat(c.value,"-inner")},[k.value?B(h,e,"checkedChildren"):B(h,e,"unCheckedChildren")])])]}})}}}),de=P(oe);const ie=V({name:"SwitchItem",components:{Switch:de},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(l){const{prefixCls:e}=Y("setting-switch-item"),{t:u}=ae(),o=b(()=>l.def?{checked:l.def}:{});function h(v){l.event&&te(l.event,v)}return{prefixCls:e,t:u,handleChange:h,getBindValue:o}}});function ue(l,e,u,o,h,v){const d=Z("Switch");return q(),J("div",{class:ne(l.prefixCls)},[Q("span",null,X(l.title),1),r(d,ee(l.getBindValue,{onChange:l.handleChange,disabled:l.disabled,checkedChildren:l.t("layout.setting.on"),unCheckedChildren:l.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var me=R(ie,[["render",ue],["__scopeId","data-v-440e72fd"]]);export{me as default};
