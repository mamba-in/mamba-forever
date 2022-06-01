import{v as F,aK as P,aL as M,aa as T,e as l,a9 as W,t as I,b as B,s as K,aM as A,V as y,ao as $,aN as G,y as L,z as c,l as V,_ as O}from"./index.e80d0e01.js";var U=function(){var o=F(!1);return P(function(){o.value=M()}),o},E=Symbol("rowContextKey"),k=function(r){W(E,r)},q=function(){return T(E,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};I("top","middle","bottom","stretch");I("start","end","center","space-around","space-between");var z=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array],default:0},wrap:{type:Boolean,default:void 0}}},D=B({name:"ARow",props:z(),setup:function(r,h){var m=h.slots,p=K("row",r),d=p.prefixCls,C=p.direction,w,x=F({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),j=U();P(function(){w=A.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),$(function(){A.unsubscribe(w)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<G.length;a++){var v=G[a];if(x.value[v]&&i[v]!==void 0){e[b]=i[v];break}}else e[b]=i||0}),e});k({gutter:S,supportFlexGap:j,wrap:l(function(){return r.wrap})});var _=l(function(){var e;return L(d.value,(e={},c(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),c(e,"".concat(d.value,"-").concat(r.justify),r.justify),c(e,"".concat(d.value,"-").concat(r.align),r.align),c(e,"".concat(d.value,"-rtl"),C.value==="rtl"),e))}),R=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),j.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return V("div",{class:_.value,style:R.value},[(e=m.default)===null||e===void 0?void 0:e.call(m)])}}}),X=D;function H(o){return typeof o=="number"?"".concat(o," ").concat(o," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(o)?"0 0 ".concat(o):o}var J=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}},Y=B({name:"ACol",props:J(),setup:function(r,h){var m=h.slots,p=q(),d=p.gutter,C=p.supportFlexGap,w=p.wrap,x=K("col",r),j=x.prefixCls,S=x.direction,_=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=j.value,v={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(g){var f,u={},N=r[g];typeof N=="number"?u.span=N:y(N)==="object"&&(u=N||{}),v=O(O({},v),(f={},c(f,"".concat(a,"-").concat(g,"-").concat(u.span),u.span!==void 0),c(f,"".concat(a,"-").concat(g,"-order-").concat(u.order),u.order||u.order===0),c(f,"".concat(a,"-").concat(g,"-offset-").concat(u.offset),u.offset||u.offset===0),c(f,"".concat(a,"-").concat(g,"-push-").concat(u.push),u.push||u.push===0),c(f,"".concat(a,"-").concat(g,"-pull-").concat(u.pull),u.pull||u.pull===0),c(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),L(a,(e={},c(e,"".concat(a,"-").concat(t),t!==void 0),c(e,"".concat(a,"-order-").concat(n),n),c(e,"".concat(a,"-offset-").concat(s),s),c(e,"".concat(a,"-push-").concat(i),i),c(e,"".concat(a,"-pull-").concat(b),b),e),v)}),R=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!C.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=H(e),w.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return V("div",{class:_.value,style:R.value},[(e=m.default)===null||e===void 0?void 0:e.call(m)])}}});export{Y as C,X as R};
