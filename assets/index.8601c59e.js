import{w as S,b as _,s as p,e as r,z as a,_ as d,aO as w,l as f}from"./index.718c4dd7.js";var D=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},P=_({name:"ADivider",props:D(),setup:function(n,g){var l=g.slots,u=p("divider",n),o=u.prefixCls,h=u.direction,c=r(function(){return n.orientation==="left"&&n.orientationMargin!=null}),v=r(function(){return n.orientation==="right"&&n.orientationMargin!=null}),m=r(function(){var t,i=n.type,C=n.dashed,M=n.plain,e=o.value;return t={},a(t,e,!0),a(t,"".concat(e,"-").concat(i),!0),a(t,"".concat(e,"-dashed"),!!C),a(t,"".concat(e,"-plain"),!!M),a(t,"".concat(e,"-rtl"),h.value==="rtl"),a(t,"".concat(e,"-no-default-orientation-margin-left"),c.value),a(t,"".concat(e,"-no-default-orientation-margin-right"),v.value),t}),x=r(function(){var t=typeof n.orientationMargin=="number"?"".concat(n.orientationMargin,"px"):n.orientationMargin;return d(d({},c.value&&{marginLeft:t}),v.value&&{marginRight:t})}),y=r(function(){return n.orientation.length>0?"-"+n.orientation:n.orientation});return function(){var t,i=w((t=l.default)===null||t===void 0?void 0:t.call(l));return f("div",{class:[m.value,i.length?"".concat(o.value,"-with-text ").concat(o.value,"-with-text").concat(y.value):""],role:"separator"},[i.length?f("span",{class:"".concat(o.value,"-inner-text"),style:x.value},[i]):null])}}}),I=S(P);export{I as D};
