import{_ as V,r as c,k as b,b as E,o as u,c as k,a as o,d,e as n,u as S,l as f,F as h,m as x,f as p,n as B,q as T,s as $,E as I,p as N,g as z}from"./index-_Od8McrU.js";import{E as R,_ as F}from"./UserStats-DfgNSkpH.js";import"./event-y9GKukHp.js";const L=l=>(N("data-v-cbc1577f"),l=l(),z(),l),q={class:"screen-wrapper"},D={class:"div1"},H=L(()=>o("span",null,"This is a message",-1)),M={class:"dialog-footer"},U={__name:"ScreenScale",setup(l){let r=c();const _=c();let m=c();const g=b();let s=c(!1);const y=()=>{_.value.option.series[0].data[0]+=100};E(()=>{r.value.style.transform=`scale(${v()}) translate(-50%,-50%)`,window.addEventListener("resize",C)});function C(){r.value&&(clearTimeout(m.value),m.value=setTimeout(()=>{r.value.style.transform=`scale(${v()}) translate(-50%,-50%)`},200))}function v(w=1920,t=1080){const a=window.innerWidth/w,i=window.innerHeight/t;return a<i?a:i}return(w,t)=>{const a=I,i=R;return u(),k("div",null,[o("div",q,[o("div",{class:"screen parent",ref_key:"screen",ref:r},[o("div",D,[d(F,{onClick:y,ref_key:"userStats",ref:_},null,512),d(i,{modelValue:S(s),"onUpdate:modelValue":t[2]||(t[2]=e=>f(s)?s.value=e:s=e),title:"Tips",width:"500"},{footer:n(()=>[o("div",M,[d(a,{onClick:t[0]||(t[0]=e=>f(s)?s.value=!1:s=!1)},{default:n(()=>[p("Cancel")]),_:1}),d(a,{type:"primary",onClick:t[1]||(t[1]=e=>f(s)?s.value=!1:s=!1)},{default:n(()=>[p(" Confirm ")]),_:1})])]),default:n(()=>[H]),_:1},8,["modelValue"])]),(u(),k(h,null,x(6,e=>o("div",{class:B({div2:e==1,div3:e==2,div4:e==3,div5:e==4,div6:e==5,div7:e==6})},[e==4?(u(),T(a,{key:0,type:"primary",class:"btn1",onClick:t[3]||(t[3]=W=>S(g).replace("/"))},{default:n(()=>[p("返回工作台")]),_:1})):$("",!0)],2)),64))],512)])])}}},J=V(U,[["__scopeId","data-v-cbc1577f"]]);export{J as default};
