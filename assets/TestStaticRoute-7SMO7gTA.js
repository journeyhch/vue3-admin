const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChangeRoute-Dmec9FdF.js","assets/index-O-KPv_bY.js","assets/index-BqEWPntm.css"])))=>i.map(i=>d[i]);
import{au as _,at as l,aA as i,E as d,F as p,a1 as t,Q as o,Y as a,a4 as m,a2 as f,I as h,bG as k,av as v}from"./index-O-KPv_bY.js";const S={__name:"TestStaticRoute",setup(C){const r=_();let e=l();function u(){r.addRoute("Route1",{path:"test2change",component:()=>k(()=>import("./ChangeRoute-Dmec9FdF.js"),__vite__mapDeps([0,1,2]))}),e.routeShow.value=!0}function s(){e.increment()}return(R,g)=>{const n=v,c=i("router-link");return d(),p("div",null,[t(" 我是一个静态路由 "),o(n,{onClick:u},{default:a(()=>[t("添加一个动态的路由")]),_:1}),o(c,{to:"/route/test2change"},{default:a(()=>[t("访问动态路由test2change")]),_:1}),o(n,{onClick:s},{default:a(()=>[t("修改store的数据")]),_:1}),m("span",null,f(h(e).count),1)])}}};export{S as default};
