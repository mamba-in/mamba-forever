import{a as p,b as m,aE as d,br as _,m as f,dn as E,e as g,aB as e,o as C,aD as L,aC as a,l as c,b8 as h,aU as B}from"./index.718c4dd7.js";import{B as b}from"./index.d9609498.js";const T=m({name:"ErrorAction",components:{Icon:d,Tooltip:_,Badge:b},setup(){const{t:o}=h(),{push:n}=f(),t=E(),r=g(()=>t.getErrorLogListCount);function s(){n(B.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,I){const u=e("Icon"),i=e("Badge"),l=e("Tooltip");return C(),L(l,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var v=p(T,[["render",k]]);export{v as default};
