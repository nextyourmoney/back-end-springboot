"use strict";(self["webpackChunkfront_end_vue"]=self["webpackChunkfront_end_vue"]||[]).push([[732],{1732:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var l=e(3396),s=e(7139),a=e(4870);const c={class:"card"},o=(0,l._)("div",{class:"card-header"}," Exam01AsyncControl ",-1),u={class:"card-body"},r={key:0,class:"mt-3"},i={key:0,class:"spinner-border mt-2",role:"status"},v=(0,l._)("span",{class:"sr-only"},"Loading...",-1),d=[v];var f={setup(n){const t=(0,a.iH)(""),e=(0,a.iH)(!1);function v(){e.value=!0,b().then((n=>{t.value=n})).catch((n=>{console.log(n)})).finally((()=>{e.value=!1}))}async function f(){try{e.value=!0;const n=await b();t.value=n}catch(n){console.log("error")}finally{e.value=!1}}function b(){const n=new Promise(((n,t)=>{setTimeout((()=>{n("value")}),3e3)}));return n}return(n,a)=>((0,l.wg)(),(0,l.iD)("div",c,[o,(0,l._)("div",u,[(0,l._)("div",null,[(0,l._)("button",{onClick:v,class:"btn btn-info btn-sm mr-2"}," 비동기 작업1 "),(0,l._)("button",{onClick:f,class:"btn btn-info btn-sm mr-2"}," 비동기 작업2 ")]),e.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",null," result: "+(0,s.zw)(t.value),1)])),(0,l._)("div",null,[e.value?((0,l.wg)(),(0,l.iD)("div",i,d)):(0,l.kq)("",!0)])])]))}};const b=f;var _=b}}]);
//# sourceMappingURL=732.0c6b8511.js.map