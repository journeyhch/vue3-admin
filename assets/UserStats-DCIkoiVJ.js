import{i as G,M as ne,aE as fe,N as ve,W as K,aC as me,L as ye,y as J,f as M,aF as ee,w as j,aG as pe,aH as ge,aI as he,aJ as be,aq as X,k as Q,m as x,v as W,Q as Y,aK as V,G as b,aL as Ce,aa as we,aM as Ee,J as oe,aN as ke,E as F,F as q,a4 as U,H as w,I as t,a2 as Me,Y as E,Z as H,$ as Se,am as Te,a3 as Z,a0 as ae,_ as le,aO as Be,aP as Ie,q as Le,g as De,aQ as Ae,U as te,r as k,aR as Pe,aS as Fe,n as $e,aT as Oe,aU as se,T as _e,aV as Ne,A as ze,aW as Ye,ay as We,aX as Re,an as Ue,aY as xe,az as He,aZ as Xe,a6 as Ve,aA as qe}from"./index-O-KPv_bY.js";import{U as ie}from"./event-y9GKukHp.js";let R;const Ke=e=>{var n;if(!G)return 0;if(R!==void 0)return R;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const c=o.offsetWidth;o.style.overflow="scroll";const a=document.createElement("div");a.style.width="100%",o.appendChild(a);const l=a.offsetWidth;return(n=o.parentNode)==null||n.removeChild(o),R=c-l,R},je=(e,n,o,c)=>{let a={offsetX:0,offsetY:0};const l=u=>{const y=u.clientX,h=u.clientY,{offsetX:g,offsetY:v}=a,m=e.value.getBoundingClientRect(),C=m.left,d=m.top,$=m.width,S=m.height,N=document.documentElement.clientWidth,z=document.documentElement.clientHeight,O=-C+g,T=-d+v,B=N-C-$+g,I=z-d-S+v,L=s=>{let A=g+s.clientX-y,_=v+s.clientY-h;c!=null&&c.value||(A=Math.min(Math.max(A,O),B),_=Math.min(Math.max(_,T),I)),a={offsetX:A,offsetY:_},e.value&&(e.value.style.transform=`translate(${K(A)}, ${K(_)})`)},D=()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",D)},r=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",l)},f=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",l)},i=()=>{a={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ne(()=>{fe(()=>{o.value?r():f()})}),ve(()=>{f()}),{resetPosition:i}},Ze=(e,n={})=>{me(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const o=n.ns||J("popup"),c=M(()=>o.bm("parent","hidden"));if(!G||ee(document.body,c.value))return;let a=0,l=!1,r="0";const f=()=>{setTimeout(()=>{be(document==null?void 0:document.body,c.value),l&&document&&(document.body.style.width=r)},200)};j(e,i=>{if(!i){f();return}l=!ee(document.body,c.value),l&&(r=document.body.style.width),a=Ke(o.namespace.value);const u=document.documentElement.clientHeight<document.body.scrollHeight,y=pe(document.body,"overflowY");a>0&&(u||y==="scroll")&&l&&(document.body.style.width=`calc(100% - ${a}px)`),ge(document.body,c.value)}),he(()=>f())},re=e=>{if(!e)return{onClick:X,onMousedown:X,onMouseup:X};let n=!1,o=!1;return{onClick:r=>{n&&o&&e(r),n=o=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{o=r.target===r.currentTarget}}},Ge=Q({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:x([String,Array,Object])},zIndex:{type:x([String,Number])}}),Je={click:e=>e instanceof MouseEvent},Qe="overlay";var eo=W({name:"ElOverlay",props:Ge,emits:Je,setup(e,{slots:n,emit:o}){const c=J(Qe),a=i=>{o("click",i)},{onClick:l,onMousedown:r,onMouseup:f}=re(e.customMaskEvent?void 0:a);return()=>e.mask?Y("div",{class:[c.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:l,onMousedown:r,onMouseup:f},[b(n,"default")],V.STYLE|V.CLASS|V.PROPS,["onClick","onMouseup","onMousedown"]):Ce("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[b(n,"default")])}});const oo=eo,ce=Symbol("dialogInjectionKey"),ue=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:we},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),to={close:()=>!0},so=W({name:"ElDialogContent"}),no=W({...so,props:ue,emits:to,setup(e,{expose:n}){const o=e,{t:c}=Ee(),{Close:a}=Be,{dialogRef:l,headerRef:r,bodyId:f,ns:i,style:u}=oe(ce),{focusTrapRef:y}=oe(ke),h=M(()=>[i.b(),i.is("fullscreen",o.fullscreen),i.is("draggable",o.draggable),i.is("align-center",o.alignCenter),{[i.m("center")]:o.center}]),g=Ie(y,l),v=M(()=>o.draggable),m=M(()=>o.overflow),{resetPosition:C}=je(l,r,v,m);return n({resetPosition:C}),(d,$)=>(F(),q("div",{ref:t(g),class:w(t(h)),style:ae(t(u)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:r,class:w([t(i).e("header"),{"show-close":d.showClose}])},[b(d.$slots,"header",{},()=>[U("span",{role:"heading","aria-level":d.ariaLevel,class:w(t(i).e("title"))},Me(d.title),11,["aria-level"])]),d.showClose?(F(),q("button",{key:0,"aria-label":t(c)("el.dialog.close"),class:w(t(i).e("headerbtn")),type:"button",onClick:S=>d.$emit("close")},[Y(t(Te),{class:w(t(i).e("close"))},{default:E(()=>[(F(),H(Se(d.closeIcon||t(a))))]),_:1},8,["class"])],10,["aria-label","onClick"])):Z("v-if",!0)],2),U("div",{id:t(f),class:w(t(i).e("body"))},[b(d.$slots,"default")],10,["id"]),d.$slots.footer?(F(),q("footer",{key:0,class:w(t(i).e("footer"))},[b(d.$slots,"footer")],2)):Z("v-if",!0)],6))}});var ao=le(no,[["__file","dialog-content.vue"]]);const lo=Q({...ue,appendToBody:Boolean,appendTo:{type:x([String,Object]),default:"body"},beforeClose:{type:x(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),io={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ie]:e=>Le(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ro=(e,n)=>{var o;const a=De().emit,{nextZIndex:l}=Ae();let r="";const f=te(),i=te(),u=k(!1),y=k(!1),h=k(!1),g=k((o=e.zIndex)!=null?o:l());let v,m;const C=Pe("namespace",Oe),d=M(()=>{const p={},P=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(p[`${P}-margin-top`]=e.top),e.width&&(p[`${P}-width`]=K(e.width))),p}),$=M(()=>e.alignCenter?{display:"flex"}:{});function S(){a("opened")}function N(){a("closed"),a(ie,!1),e.destroyOnClose&&(h.value=!1)}function z(){a("close")}function O(){m==null||m(),v==null||v(),e.openDelay&&e.openDelay>0?{stop:v}=se(()=>L(),e.openDelay):L()}function T(){v==null||v(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=se(()=>D(),e.closeDelay):D()}function B(){function p(P){P||(y.value=!0,u.value=!1)}e.beforeClose?e.beforeClose(p):T()}function I(){e.closeOnClickModal&&B()}function L(){G&&(u.value=!0)}function D(){u.value=!1}function s(){a("openAutoFocus")}function A(){a("closeAutoFocus")}function _(p){var P;((P=p.detail)==null?void 0:P.focusReason)==="pointer"&&p.preventDefault()}e.lockScroll&&Ze(u);function de(){e.closeOnPressEscape&&B()}return j(()=>e.modelValue,p=>{p?(y.value=!1,O(),h.value=!0,g.value=Fe(e.zIndex)?l():g.value++,$e(()=>{a("open"),n.value&&(n.value.scrollTop=0)})):u.value&&T()}),j(()=>e.fullscreen,p=>{n.value&&(p?(r=n.value.style.transform,n.value.style.transform=""):n.value.style.transform=r)}),ne(()=>{e.modelValue&&(u.value=!0,h.value=!0,O())}),{afterEnter:S,afterLeave:N,beforeLeave:z,handleClose:B,onModalClick:I,close:T,doClose:D,onOpenAutoFocus:s,onCloseAutoFocus:A,onCloseRequested:de,onFocusoutPrevented:_,titleId:f,bodyId:i,closed:y,style:d,overlayDialogStyle:$,rendered:h,visible:u,zIndex:g}},co=W({name:"ElDialog",inheritAttrs:!1}),uo=W({...co,props:lo,emits:io,setup(e,{expose:n}){const o=e,c=_e();Ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},M(()=>!!c.title));const a=J("dialog"),l=k(),r=k(),f=k(),{visible:i,titleId:u,bodyId:y,style:h,overlayDialogStyle:g,rendered:v,zIndex:m,afterEnter:C,afterLeave:d,beforeLeave:$,handleClose:S,onModalClick:N,onOpenAutoFocus:z,onCloseAutoFocus:O,onCloseRequested:T,onFocusoutPrevented:B}=ro(o,l);ze(ce,{dialogRef:l,headerRef:r,bodyId:y,ns:a,rendered:v,style:h});const I=re(N),L=M(()=>o.draggable&&!o.fullscreen);return n({visible:i,dialogContentRef:f,resetPosition:()=>{var s;(s=f.value)==null||s.resetPosition()}}),(s,A)=>(F(),H(t(Xe),{to:s.appendTo,disabled:s.appendTo!=="body"?!1:!s.appendToBody},{default:E(()=>[Y(Ye,{name:"dialog-fade",onAfterEnter:t(C),onAfterLeave:t(d),onBeforeLeave:t($),persisted:""},{default:E(()=>[We(Y(t(oo),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":t(m)},{default:E(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:t(u),"aria-describedby":t(y),class:w(`${t(a).namespace.value}-overlay-dialog`),style:ae(t(g)),onClick:t(I).onClick,onMousedown:t(I).onMousedown,onMouseup:t(I).onMouseup},[Y(t(Re),{loop:"",trapped:t(i),"focus-start-el":"container",onFocusAfterTrapped:t(z),onFocusAfterReleased:t(O),onFocusoutPrevented:t(B),onReleaseRequested:t(T)},{default:E(()=>[t(v)?(F(),H(ao,Ue({key:0,ref_key:"dialogContentRef",ref:f},s.$attrs,{center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:t(L),overflow:s.overflow,fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,"aria-level":s.headerAriaLevel,onClose:t(S)}),xe({header:E(()=>[s.$slots.title?b(s.$slots,"title",{key:1}):b(s.$slots,"header",{key:0,close:t(S),titleId:t(u),titleClass:t(a).e("title")})]),default:E(()=>[b(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:E(()=>[b(s.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):Z("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[He,t(i)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var fo=le(uo,[["__file","dialog.vue"]]);const yo=Ve(fo),po={__name:"UserStats",setup(e,{expose:n}){const o=k({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]});return n({option:o}),(c,a)=>{const l=qe("e-charts");return F(),H(l,{autoresize:"",class:"chart",option:o.value},null,8,["option"])}}};export{yo as E,po as _};
