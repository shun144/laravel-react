function q(t){return vt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vt(t){return t instanceof Node||t instanceof R(t).Node}function O(t){return t instanceof Element||t instanceof R(t).Element}function L(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function Q(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Dt(t){return["table","td","th"].includes(q(t))}function st(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ut(t){const e=dt(),o=O(t)?C(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function kt(t){let e=N(t);for(;L(e)&&!j(e);){if(ut(e))return e;if(st(e))return null;e=N(e)}return null}function dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(q(t))}function C(t){return R(t).getComputedStyle(t)}function rt(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function N(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||P(t);return pt(e)?e.host:e}function bt(t){const e=N(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&Q(e)?e:bt(e)}function J(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=bt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=R(i);if(r){const c=lt(s);return e.concat(s,s.visualViewport||[],Q(i)?i:[],c&&o?J(c):[])}return e.concat(i,J(i,[],o))}function lt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}const X=Math.min,H=Math.max,nt=Math.round,et=Math.floor,B=t=>({x:t,y:t}),Ft={left:"right",right:"left",bottom:"top",top:"bottom"},Nt={start:"end",end:"start"};function ft(t,e,o){return H(t,X(e,o))}function Z(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function At(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function Y(t){return["top","bottom"].includes($(t))?"y":"x"}function gt(t){return At(Y(t))}function Bt(t,e,o){o===void 0&&(o=!1);const n=tt(t),i=gt(t),r=mt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ot(s)),[s,ot(s)]}function Mt(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Nt[e])}function Vt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Wt(t,e,o,n){const i=tt(t);let r=Vt($(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(at)))),r}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Ft[e])}function Ht(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rt(t){return typeof t!="number"?Ht(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function wt(t,e,o){let{reference:n,floating:i}=t;const r=Y(e),s=gt(e),c=mt(s),l=$(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let a;switch(l){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(tt(e)){case"start":a[s]-=g*(o&&f?-1:1);break;case"end":a[s]+=g*(o&&f?-1:1);break}return a}const $t=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=wt(f,n,l),g=n,a={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=wt(f,g,l)),h=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function Ot(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=Z(e,t),m=Rt(a),w=c[g?u==="floating"?"reference":"floating":u],p=it(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),x=u==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const zt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:d=0}=Z(t,e)||{};if(f==null)return{};const u=Rt(d),g={x:o,y:n},a=gt(i),m=mt(a),h=await s.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-g[a]-r.floating[m],v=g[a]-r.reference[a],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let M=E?E[y]:0;(!M||!await(s.isElement==null?void 0:s.isElement(E)))&&(M=c.floating[y]||r.floating[m]);const U=b/2-v/2,V=M/2-h[m]/2-1,D=X(u[p],V),K=X(u[x],V),W=D,G=M-h[m]-K,A=M/2-h[m]/2+U,_=ft(W,A,G),S=!l.arrow&&tt(i)!=null&&A!==_&&r.reference[m]/2-(A<W?D:K)-h[m]/2<0,T=S?A<W?A-W:A-G:0;return{[a]:g[a]+T,data:{[a]:_,centerOffset:A-_-T,...S&&{alignmentOffset:T}},reset:S}}}),_t=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=Z(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const p=$(i),x=Y(c),y=$(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(f.floating)),v=g||(y||!h?[ot(c)]:Mt(c)),E=m!=="none";!g&&E&&v.push(...Wt(c,h,m,b));const M=[c,...v],U=await Ot(e,w),V=[];let D=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&V.push(U[p]),u){const A=Bt(i,s,b);V.push(U[A[0]],U[A[1]])}if(D=[...D,{placement:i,overflows:V}],!V.every(A=>A<=0)){var K,W;const A=(((K=r.flip)==null?void 0:K.index)||0)+1,_=M[A];if(_)return{data:{index:A,overflows:D},reset:{placement:_}};let S=(W=D.filter(T=>T.overflows[0]<=0).sort((T,k)=>T.overflows[1]-k.overflows[1])[0])==null?void 0:W.placement;if(!S)switch(a){case"bestFit":{var G;const T=(G=D.filter(k=>{if(E){const F=Y(k.placement);return F===x||F==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(F=>F>0).reduce((F,Pt)=>F+Pt,0)]).sort((k,F)=>k[1]-F[1])[0])==null?void 0:G[0];T&&(S=T);break}case"initialPlacement":S=c;break}if(i!==S)return{reset:{placement:S}}}return{}}}};async function It(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=$(o),c=tt(o),l=Y(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=Z(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(a=c==="end"?m*-1:m),l?{x:a*d,y:g*f}:{x:g*f,y:a*d}}const jt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await It(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},Xt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=Z(t,e),f={x:o,y:n},d=await Ot(e,l),u=Y($(i)),g=At(u);let a=f[g],m=f[u];if(r){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=ft(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=m+d[w],y=m-d[p];m=ft(x,m,y)}const h=c.fn({...e,[g]:a,[u]:m});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function Ct(t){const e=C(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=L(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=nt(o)!==r||nt(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function ht(t){return O(t)?t:t.contextElement}function I(t){const e=ht(t);if(!L(e))return B(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Ct(e);let s=(r?nt(o.width):o.width)/n,c=(r?nt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Yt=B(0);function Et(t){const e=R(t);return!dt()||!e.visualViewport?Yt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=ht(t);let s=B(1);e&&(n?O(n)&&(s=I(n)):s=I(t));const c=qt(r,o,n)?Et(r):B(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=R(r),a=n&&O(n)?R(n):n;let m=g,h=lt(m);for(;h&&n&&a!==m;){const w=I(h),p=h.getBoundingClientRect(),x=C(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,f*=w.y,d*=w.x,u*=w.y,l+=y,f+=b,m=R(h),h=lt(m)}}return it({width:d,height:u,x:l,y:f})}function Ut(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=P(n),c=e?st(e.floating):!1;if(n===s||c&&r)return o;let l={scrollLeft:0,scrollTop:0},f=B(1);const d=B(0),u=L(n);if((u||!u&&!r)&&((q(n)!=="body"||Q(s))&&(l=rt(n)),L(n))){const g=z(n);f=I(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-l.scrollLeft*f.x+d.x,y:o.y*f.y-l.scrollTop*f.y+d.y}}function Kt(t){return Array.from(t.getClientRects())}function Tt(t){return z(P(t)).left+rt(t).scrollLeft}function Gt(t){const e=P(t),o=rt(t),n=t.ownerDocument.body,i=H(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=H(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Tt(t);const c=-o.scrollTop;return C(n).direction==="rtl"&&(s+=H(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Jt(t,e){const o=R(t),n=P(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=dt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function Qt(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=L(t)?I(t):B(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=n*r.y;return{width:s,height:c,x:l,y:f}}function xt(t,e,o){let n;if(e==="viewport")n=Jt(t,o);else if(e==="document")n=Gt(P(t));else if(O(e))n=Qt(e,o);else{const i=Et(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return it(n)}function Lt(t,e){const o=N(t);return o===e||!O(o)||j(o)?!1:C(o).position==="fixed"||Lt(o,e)}function Zt(t,e){const o=e.get(t);if(o)return o;let n=J(t,[],!1).filter(c=>O(c)&&q(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?N(t):t;for(;O(s)&&!j(s);){const c=C(s),l=ut(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Q(s)&&!l&&Lt(t,s))?n=n.filter(d=>d!==s):i=c,s=N(s)}return e.set(t,n),n}function te(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?st(e)?[]:Zt(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((f,d)=>{const u=xt(e,d,i);return f.top=H(u.top,f.top),f.right=X(u.right,f.right),f.bottom=X(u.bottom,f.bottom),f.left=H(u.left,f.left),f},xt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ee(t){const{width:e,height:o}=Ct(t);return{width:e,height:o}}function ne(t,e,o){const n=L(e),i=P(e),r=o==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=B(0);if(n||!n&&!r)if((q(e)!=="body"||Q(i))&&(c=rt(e)),n){const u=z(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Tt(i));const f=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:f,y:d,width:s.width,height:s.height}}function ct(t){return C(t).position==="static"}function yt(t,e){return!L(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function St(t,e){const o=R(t);if(st(t))return o;if(!L(t)){let i=N(t);for(;i&&!j(i);){if(O(i)&&!ct(i))return i;i=N(i)}return o}let n=yt(t,e);for(;n&&Dt(n)&&ct(n);)n=yt(n,e);return n&&j(n)&&ct(n)&&!ut(n)?o:n||kt(t)||o}const oe=async function(t){const e=this.getOffsetParent||St,o=this.getDimensions,n=await o(t.floating);return{reference:ne(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ie(t){return C(t).direction==="rtl"}const se={convertOffsetParentRelativeRectToViewportRelativeRect:Ut,getDocumentElement:P,getClippingRect:te,getOffsetParent:St,getElementRects:oe,getClientRects:Kt,getDimensions:ee,getScale:I,isElement:O,isRTL:ie};function re(t,e){let o=null,n;const i=P(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const a=et(d),m=et(i.clientWidth-(f+u)),h=et(i.clientHeight-(d+g)),w=et(f),x={rootMargin:-a+"px "+-m+"px "+-h+"px "+-w+"px",threshold:H(0,X(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):n=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function ce(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=ht(t),d=i||r?[...f?J(f):[],...J(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),r&&p.addEventListener("resize",o)});const u=f&&c?re(f,o):null;let g=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),o()}),f&&!l&&a.observe(f),a.observe(e));let m,h=l?z(t):null;l&&w();function w(){const p=z(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,m=requestAnimationFrame(w)}return o(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,l&&cancelAnimationFrame(m)}}const le=jt,fe=Xt,ae=_t,ue=zt,de=(t,e,o)=>{const n=new Map,i={platform:se,...o},r={...i.platform,_c:n};return $t(t,e,{...i,platform:r})};export{ce as a,ue as b,de as c,ae as f,le as o,fe as s};
