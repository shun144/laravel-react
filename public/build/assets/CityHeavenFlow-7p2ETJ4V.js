import{r as n,q as P,y as Q,j as a}from"./app-CyNCDwWg.js";import{b as l}from"./utils-D2lx6gjy.js";import{u as c}from"./store-CjS5bljB.js";import B from"./CityHeavenQuestionNode-es96X24y.js";import U from"./CityHeavenResultNode-NIHZIdUG.js";import{D as V}from"./core.esm-DuCBUhpM.js";import f from"./Draggable-CjqEtK7-.js";import W from"./Droppable-Dnt_cYge.js";import{u as X,h as Y,j as G,r as _,d as $,i as z,k as J,l as K,e as Z,f as ee,C as te}from"./index-B3CYN_YB.js";/* empty css             *//* empty css                           */import"./react-Csa2F1B_.js";import"./ChoiceSourceHandle-DA6wSPfX.js";import"./index-7BrvDhJv.js";import"./iconBase-tXk4xBmB.js";import"./index-D1SFxYbE.js";import"./SalesPointSelect-CSvb0bo8.js";import"./QuestionSubMenu-7TbeaAAu.js";import"./index-Dv_MM4KC.js";import"./ResultSubMenu-Dx1KHGM4.js";const oe=({initialNodes:C,initialEdges:b,defaultViewport:h})=>{const[y,u]=n.useState(C),[x,r]=n.useState(b),i=n.useRef(!0),p=c(e=>e.isDirty),d=c(e=>e.setIsDirty),k=c(e=>e.setFirstNodeId),{screenToFlowPosition:N,addNodes:m,setViewport:ne,getNodes:E}=X(),{url:w}=P(),j=n.useMemo(()=>({qNode:B,rNode:U}),[]);n.useEffect(()=>{const e=Q.on("before",t=>{const o=t.detail.visit;return o.url.pathname===w&&o.method==="post"?!0:p?confirm("変更が保存されていませんがページを離れてもよろしいですか？"):!0});return()=>{e()}},[p]);const D=n.useCallback(e=>{u(t=>Y(e,t)),d(!0)},[u,d]),S=n.useCallback(e=>{r(t=>G(e,t)),d(!0)},[r,d]),R=e=>{const t=l(),o=l();E().length===0&&k(t),m({id:t,data:{topic:"",choices:[{id:o,content:"",salePoints:[]}]},position:e,type:"qNode",dragHandle:".dhandle"})},v=e=>{const t=l();m({id:t,data:{result:""},position:e,type:"rNode",dragHandle:".dhandle"})},F=n.useCallback(({active:e,over:t,delta:o,activatorEvent:s})=>{if(!(t==null||t.id!="droppableArea")&&s instanceof MouseEvent){const L=s.pageX+o.x,O=s.pageY+o.y,g=N({x:L,y:O});e.id==="draggable-question"&&R(g),e.id==="draggable-result"&&v(g)}},[]),H=n.useCallback((e,t)=>{i.current=!0,r(o=>_(e,t,o))},[]),I=n.useCallback(()=>{i.current=!1},[]),M=n.useCallback(e=>{i.current||r(t=>t.filter(o=>o.id!==e.id)),i.current=!0},[]),q=n.useCallback(e=>{r(t=>$({...e,type:"smoothstep"},t))},[r]),T=n.useCallback((e,t)=>{r(o=>o.map(s=>s.id===t.id?{...s,animated:!s.animated,style:s.animated?{stroke:"gray",strokeWidth:2}:{stroke:"gold",strokeWidth:3}}:{...s,animated:!1,style:{}}))},[r]),A=n.useCallback((e,t)=>{e.preventDefault(),r(o=>o.filter(s=>s.id!==t.id))},[r]);return a.jsx("div",{className:"grow w-full flex",children:a.jsxs(V,{onDragEnd:F,children:[a.jsxs("div",{className:"h-full w-[5%] flex items-center flex-col gap-y-6 pt-12 bg-slate-800",children:[a.jsx(f,{id:"draggable-question",label:"質問",btnColor:"indigo"}),a.jsx(f,{id:"draggable-result",label:"結果",btnColor:"rose"})]}),a.jsx(W,{id:"droppableArea",children:a.jsxs(z,{nodes:y,edges:x,nodeTypes:j,onNodesChange:D,onEdgesChange:S,snapToGrid:!0,connectionLineType:J.SmoothStep,onReconnect:H,onReconnectStart:I,onReconnectEnd:(e,t)=>M(t),onConnect:q,onEdgeClick:T,onEdgeContextMenu:A,elevateEdgesOnSelect:!0,defaultViewport:h,panOnScroll:!0,elementsSelectable:!0,selectionMode:K.Partial,children:[a.jsx(Z,{color:"#222",variant:ee.Lines,gap:20}),a.jsx(te,{})]})})]})})},we=n.memo(oe);export{we as default};
