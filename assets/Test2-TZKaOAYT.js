import{ai as i,W as l,am as d,an as m,k as u,G as h}from"./three.module-CPfLXA0W.js";import{M as _,E as p,F as w,a4 as o}from"./index-L-s10F-j.js";class B{constructor(e){let n=new i;const t=new l(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;const r=new d;r.setSize(800,400),this.scene=n,this.camera=t,this.renderer=r,this.addBox(),e.appendChild(this.renderer.domElement)}addBox(){const e=new m(1,1,1),n=new u({color:65280});let t=new h(e,n);this.scene.add(t),this.cube=t}}const f=o("h1",null,"封装threejs",-1),x=o("div",{id:"test1"},null,-1),y=[f,x],k={__name:"Test2",setup(c){let e=null,n=null,t=null,r=null,s=null;function a(){requestAnimationFrame(a),n.rotation.x+=.01,n.rotation.y+=.01,t.render(r,s)}return _(()=>{e=new B(document.getElementById("test1")),r=e.scene,n=e.cube,s=e.camera,t=e.renderer,a()}),(M,b)=>(p(),w("div",null,y))}};export{k as default};
