import{g as ee,r as f,c as D,R as y,q as te,j as u}from"./app-j4_siqDD.js";import{c as ne}from"./utils-CwdsAyi-.js";import{u as re}from"./store-DrGrwY8p.js";import"./react-BwD22Srs.js";var V={exports:{}},ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",se=ae,ie=se;function U(){}function H(){}H.resetWarningCache=U;var oe=function(){function e(n,a,s,o,i,c){if(c!==ie){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:H,resetWarningCache:U};return r.PropTypes=r,r};V.exports=oe();var le=V.exports;const l=ee(le);function _(e){return typeof e=="number"&&Number.isInteger(e)?e:void 0}function ce(e){return typeof e=="boolean"?e:void 0}function T(e){return{type:"active",page:e}}function W(e){return{type:"page",page:e}}function S(e){return{type:"<",page:e}}function I(e){return{type:">",page:e}}function K(e){return{type:`…${e}`,page:void 0}}function*ue(e,t){for(;;){const r=e.next(),n=t.next();if(r.done&&n.done)break;yield[r.value,n.value]}}function de(e,t){let r;for(const n of e){if(!t(n))break;r=n}return r}function G(e){const t=e.next();return t.done?void 0:t.value}function*B(e,t,r){for(const n of fe(e,t,r))yield n.map(a=>a==="…"?K(r):W(a))}function*fe(e,t,r){const n=t-e+1;for(let a=1;a<n;a++){const s=me(e,t,a,r);s&&(yield s)}yield $(e,t)}function me(e,t,r,n){if(r<3)return;const a=r-2;return n==="L"?[e,"…",...$(t-(a-1),t)]:[...$(e,e+(a-1)),"…",t]}function $(e,t){return t<e?[]:Array.from(Array(t-e+1).keys(),r=>r+e)}function*ge({current:e,total:t,narrowBehaviour:r,renderNav:n}){if(t<1)return;const a=Math.max(1,Math.min(e,t)),s=he(a,t,n);for(const o of s)r&&(yield*r(o)),yield o,yield*s}function*he(e,t,r){const n=S(e>1?e-1:void 0),a=I(e<t?e+1:void 0),s=T(e),o=B(1,e-1,"L"),i=B(e+1,t,"R"),c=pe(o,i);for(const{leftRange:g,rightRange:p}of c)r?yield[n,...g,s,...p,a]:yield[...g,s,...p]}function*pe(e,t){const r=ue(e,t),n=r.next();if(n.done)return;let[a=[],s=[]]=n.value;yield{leftRange:a,rightRange:s};for(const[o,i]of r)i&&(s=i,yield{leftRange:a,rightRange:s}),o&&(a=o,yield{leftRange:a,rightRange:s})}function xe(e,t){const r=(t==null?void 0:t.previousLabel)||"«",n=(t==null?void 0:t.ariaPreviousLabel)||"Previous",a=(t==null?void 0:t.nextLabel)||"»",s=(t==null?void 0:t.ariaNextLabel)||"Next";return e.map(({type:o,page:i})=>{switch(o){case"<":return{type:"previous",key:`previous${i===void 0?"_disabled":""}`,label:r,a11yLabel:r===n?void 0:n,gotoPage:i};case">":return{type:"next",key:`next${i===void 0?"_disabled":""}`,label:a,a11yLabel:a===s?void 0:s,gotoPage:i};case"…L":case"…R":return{type:"ellipsis",key:`ellipsis_${o==="…L"?"l":"r"}`,label:"…",a11yHidden:!0,gotoPage:void 0};default:return{type:"page",key:`${o}_${i}`,label:i.toString(),gotoPage:i,active:o==="active"}}})}function be(e){const t=getComputedStyle(e),r=t.getPropertyValue("--pagination-override-margin-inline-start"),n=t.getPropertyValue("--pagination-override-margin-inline-end");return x(r||t.marginLeft)+A(e)+x(n||t.marginRight)}function ve(e){const t=getComputedStyle(e);return e.getBoundingClientRect().width-x(t.borderLeftWidth)-x(t.paddingLeft)-x(t.paddingRight)-x(t.borderRightWidth)}function ye(e){const t=getComputedStyle(e);return x(t.marginLeft)+x(t.borderLeftWidth)+x(t.paddingLeft)+x(t.paddingRight)+x(t.borderRightWidth)+x(t.marginRight)}function A(e){return e.getBoundingClientRect().width}function x(e){return e?parseInt(e):0}const Q=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Ce(e){const[t,r]=f.useState(),n=f.useRef(),a=f.useCallback(()=>{const s=e?ve(e):void 0;n.current!==s&&(n.current=s,r(s))},[e]);return Q(a),f.useEffect(()=>{if(!e)return;const s=new ResizeObserver(Ne(()=>D.flushSync(a)));return s.observe(e),()=>{s.disconnect()}},[e,a]),t}function Ne(e){return(t,r)=>{const n=t.map(i=>i.target),a=n.map(i=>i.getBoundingClientRect());e();const s=n.map(i=>i.getBoundingClientRect());n.filter((i,c)=>!Re(a[c],s[c])).forEach(i=>we(i,r))}}function we(e,t){t.unobserve(e),requestAnimationFrame(()=>{t.observe(e)})}function Re(e,t){return e.width===t.width&&e.height===t.height}function Le(e){const[t,r]=f.useState(null),n=(t==null?void 0:t.parentElement)??void 0,a=Ce(e===void 0?n:void 0);return{width:e??a,ref:r}}function Pe(e,t){const r=f.useRef(null);return Q(()=>{const n=e(r.current);if(!n)return;const a=new Map(n.map(o=>[o,A(o)])),s=new ResizeObserver(o=>{o.map(c=>a.get(c.target)-A(c.target)).some(c=>c<-.5||c>.5)&&D.flushSync(t)});return n.forEach(o=>s.observe(o)),()=>s.disconnect()}),r}function je(){const[e,t]=f.useState(void 0),r=f.useCallback(()=>t(void 0),[]);return e?{widthCalculator:e,clearCache:r}:{metricsRender:{items:Te,ref(n){const a=Ee(n);a&&t(()=>ke(a))}},clearCache:r}}function Ee(e){if(e)return[ye(e),...Array.from(e.children).map(be)]}function ke([e,t,r,n,a,s,o,i,c,g]){const p=({type:d,page:m})=>{switch(d){case"page":return t+(r-t)*(m.toString().length-1);case"active":return n+(a-n)*(m.toString().length-1);case"<":return m!==void 0?s:o;case">":return m!==void 0?i:c;case"…L":case"…R":return g;default:return d}};return d=>e+d.reduce((m,b)=>m+p(b),0)}const Te=[W(8),W(88),T(8),T(88),S(0),S(void 0),I(0),I(void 0),K("L")];function We(e,t){const{widthCalculator:r,metricsRender:n,clearCache:a}=je(),s=Pe(Ie,a),{width:o=0,ref:i}=Le(t),c=f.useCallback(d=>{s.current=d,i==null||i(d)},[s,i]),[g,p]=f.useState(!0);return g?{visible:!1,items:G(e())??[],ref(m){p(!1),c(m)},clearCache:a}:n?{visible:!1,items:n.items,ref(d){n.ref(d),c(d)},clearCache:a}:{visible:!0,items:Se(e,r,o),ref:c,clearCache:a}}function Se(e,t,r){const n=e(),a=G(n)??[];return de(n,o=>t(o)<r)??a}function Ie(e){return e&&Array.from(e.children)}function $e(e,t,r,n){const a=()=>ge({current:_(e)??0,total:_(t)??0,narrowBehaviour:n==null?void 0:n.narrowBehaviour,renderNav:ce(n==null?void 0:n.renderNav)??!0}),{visible:s,items:o,ref:i,clearCache:c}=We(a,r),g=M(n==null?void 0:n.previousLabel),p=M(n==null?void 0:n.nextLabel);f.useEffect(()=>()=>c(),[c,g,p]);const d=xe(o,n);return{visible:s,items:d,ref:i,clearCache:c}}function M(e){if(f.isValidElement(e))switch(typeof e.type){case"string":return`element-str-${e.type}`;case"function":return`element-fn-${e.type.name}`;default:return"element"}else return Array.isArray(e)?"element-array":e}function Ae(e){return t=>{t.preventDefault(),e()}}function Fe({a11yLabel:e,label:t}){return e?y.createElement("span",{"aria-hidden":"true"},t):t}const Oe=f.memo(Y);function Y(e){const{current:t,total:r,onPageChange:n,maxWidth:a,narrowBehaviour:s,className:o,extraClassName:i="justify-content-center",pageItemClassName:c="page-item",pageLinkClassName:g="page-link",activeItemClassName:p="active",disabledItemClassName:d="disabled",navClassName:m,previousClassName:b,nextClassName:C,previousLabel:L,nextLabel:N,ariaPreviousLabel:P,ariaNextLabel:j,renderNav:E=!0,ariaCurrentAttr:v=!0,linkHref:w="hash",labelBehaviour:R=Fe}=e,{visible:J,items:F,ref:X,clearCache:O}=$e(t,r,a,{narrowBehaviour:s,previousLabel:L,nextLabel:N,ariaPreviousLabel:P,ariaNextLabel:j,renderNav:E});if(f.useEffect(()=>()=>O(),[O,o,c,g,p,d,m,b,C]),F.length===0)return null;function Z(){return o!==void 0?o:i?`pagination ${i}`:"pagination"}return y.createElement("ul",{className:Z(),ref:X,...!J&&{style:{visibility:"hidden"}}},F.map(h=>h.gotoPage!==void 0?y.createElement("li",{key:h.key,className:z([c,h.active&&p,h.type==="next"&&(C??m),h.type==="previous"&&(b??m)]),"aria-current":h.active&&v?"page":void 0},y.createElement("a",{className:g,href:_e(w,h.gotoPage),onClick:Ae(()=>n(h.gotoPage)),"aria-label":h.a11yLabel},R(h))):y.createElement("li",{key:h.key,className:z([c,d,h.type==="next"&&(C??m),h.type==="previous"&&(b??m)]),"aria-hidden":h.a11yHidden},y.createElement("span",{className:g,"aria-label":h.a11yLabel},R(h)))))}function z(e){return e.filter(t=>t).join(" ")}function _e(e,t){return typeof e=="function"?e(t):e==="hash"?"#":void 0}Y.propTypes={current:l.number.isRequired,total:l.number.isRequired,onPageChange:l.func.isRequired,maxWidth:l.number,narrowBehaviour:l.func,className:l.string,extraClassName:l.string,pageItemClassName:l.string,pageLinkClassName:l.string,activeItemClassName:l.string,disabledItemClassName:l.string,disabledLinkClassName:l.string,navClassName:l.string,previousClassName:l.string,nextClassName:l.string,previousLabel:l.oneOfType([l.string,l.element]),nextLabel:l.oneOfType([l.string,l.element]),ariaPreviousLabel:l.string,ariaNextLabel:l.string,renderNav:l.bool,ariaCurrentAttr:l.bool,linkHref:l.oneOfType([l.func,l.oneOf(["hash","omit"])]),labelBehaviour:l.func};const k=10,q=3,Be=({girlsData:e})=>{const[t,r]=f.useState(1),[n,a]=f.useState([]),[s,o]=f.useState(0),{message:i}=re(d=>d.currentQuestionnarie),{url:c}=te();f.useEffect(()=>{o(Math.ceil(e.length/k))},[e]),f.useEffect(()=>{a(e.slice((t-1)*k,t*k))},[t]);const g=d=>{r(d),window.scrollTo({top:0,behavior:"instant"})},p=f.useCallback((d,m,b)=>{d.preventDefault,b.match(/^https?:\/\//)&&(ne(c,m),window.open(b,"_blank","noopener,noreferrer"))},[]);return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12",children:u.jsx("div",{className:" text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8 whitespace-pre-wrap",children:i})}),u.jsxs("div",{className:"w-full px-1 md:w-11/12",children:[u.jsx("div",{className:"grid mb-4 grid-cols-2 gap-x-3 gap-y-4 md:mb-10 md:grid-cols-5 md:gap-x-6 md:gap-y-8",children:n&&n.map(({id:d,name:m,catchphrase:b,picture_url:C,mypage_url:L,bwh:N,age:P,height:j,cup:E,matchType:v},w)=>u.jsxs("div",{children:[u.jsx("div",{className:`select-none px-1 md:px-2 w-full flex justify-center items-center 
                                            ${v==="ALL"?"text-amber-500 font-bold":v==="PART"?"text-violet-500 font-bold":"text-violet-500"}`,children:u.jsx("div",{className:"md:text-sm min-h-7 md:min-h-6 text-[8px] flex justify-center items-center",children:u.jsx("div",{className:`relative text-sm md:text-base
                                                            before:content-['|']  before:-rotate-30 before:absolute before:-top-0 before:-left-3
                                                            after:content-['|']  after:rotate-30 after:absolute after:-top-0 after:-right-3`,children:v==="ALL"?"あなたにピッタリ":v==="PART"?"こちらもオススメ":"店長オススメ"})})}),u.jsxs("div",{className:"flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow relative pt-0 px-1 md:max-w-xl md:pt-4 md:px-2 md:min-h-[400px] min-h-[300px]",children:[u.jsx("div",{className:"absolute -top-2 -left-1 md:-top-5 md:-left-3",children:u.jsx("div",{className:`${w+1+(t-1)*10<=q?"bg-amber-400":"bg-violet-300"} rounded-full shadow flex justify-center items-center border-2 md:border-4 border-slate-100 w-6 h-6 md:w-10 md:h-10`,children:u.jsx("div",{className:"text-white text-sm md:text-xl md:font-semibold",children:w+1+(t-1)*10})})}),u.jsxs("div",{className:"w-full flex flex-col items-center gap-y-2 pt-2",children:[u.jsx("div",{className:"rounded-lg pb-2",children:u.jsx("img",{className:`${w+1+(t-1)*10<=q?"border-yellow-200":"border-violet-100"}  rounded-lg border-4 shadow-xl object-cover h-36 md:h-60`,src:C,alt:m})}),u.jsxs("div",{className:"w-full flex flex-col justify-between leading-normal",children:[u.jsx("div",{className:"font-bold tracking-tight text-gray-900 text-md md:text-xl break-all overflow-hidden pb-2",children:`${m}(${P})`}),u.jsxs("div",{className:"font-normal text-gray-700 min-h-8 md:min-h-14",children:[u.jsx("div",{className:"md:text-lg text-sm break-all",children:b}),u.jsx("div",{className:"md:text-md text-sm mt-2",children:`【${j}cm / ${N[0]}(${E}):${N[1]}:${N[2]}】`})]})]})]}),u.jsx("div",{className:"w-full flex flex-row justify-end items-end md:items-center md:mb-2 my-2",children:u.jsx("button",{className:"bg-violet-400 shadow-md  text-white rounded-lg hover:bg-violet-500 transition-all duration-200 text-[12px] px-2 py-1 md:text-base md:py-1",onClick:R=>p(R,m,L),children:"女の子ページへ"})})]})]},d))}),u.jsx("div",{className:"w-full flex justify-center items-start h-14 mb-3 md:h-20 md:mb-4",children:u.jsx(Oe,{current:t,total:s,onPageChange:g,maxWidth:350,className:"pagination select-none md:flex md:space-x-2"})})]})]})},Ve=f.memo(Be);export{Ve as default};
