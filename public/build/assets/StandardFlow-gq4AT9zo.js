import{r as o,q as X,y as Y,j as d}from"./app-Po51A7Cn.js";import{g as u}from"./utils-CPrzkggY.js";import{u as a}from"./store-C6o4wHu7.js";import G from"./StandardQuestionNode-B7l2F-A9.js";import _ from"./StandardResultNode-q7tdsCOK.js";import{D as $}from"./core.esm-BqKIChNy.js";import N from"./Draggable-C3AVXzek.js";import z from"./Droppable-g0qBU8N3.js";import{u as J,b as K,c as Z,r as ee,d as te,i as oe,C as ne,S as se,e as re,f as de,h as ae}from"./index-YXVZuvUv.js";/* empty css             *//* empty css                           */import"./react-bkPmn1Wh.js";import"./ChoiceSourceHandle-DM1pmZBs.js";import"./index-Ch1e9os8.js";import"./iconBase-CtQAnfA3.js";import"./index-2kQLW4ql.js";import"./QuestionSubMenu-DiUlF8S7.js";import"./index-DjcWFvNW.js";import"./ResultSubMenu-BD--7g52.js";const ce=({initialNodes:l,initialEdges:h,defaultViewport:b})=>{const[x,m]=o.useState(l),[y,r]=o.useState(h),c=o.useRef(!0),p=a(e=>e.isDirty),i=a(e=>e.setIsDirty),C=a(e=>e.setFirstNodeId),k=a(e=>e.qNodeNum),S=a(e=>e.setQnodeNum),E=a(e=>e.addQnodeNum),R=a(e=>e.rNodeNum),j=a(e=>e.setRnodeNum),w=a(e=>e.addRnodeNum),{screenToFlowPosition:D,addNodes:g,setViewport:ie,getNodes:q}=J(),{url:Q}=X(),F=o.useMemo(()=>({qNode:G,rNode:_}),[]);o.useEffect(()=>{S(l.filter(e=>e.type==="qNode").length),j(l.filter(e=>e.type==="rNode").length)},[]),o.useEffect(()=>{const e=Y.on("before",t=>{const n=t.detail.visit;return n.url.pathname===Q&&n.method==="post"?!0:p?confirm("変更が保存されていませんがページを離れてもよろしいですか？"):!0});return()=>{e()}},[p]);const I=o.useCallback(e=>{m(t=>K(e,t)),i(!0)},[m,i]),M=o.useCallback(e=>{r(t=>Z(e,t)),i(!0)},[r,i]),T=e=>{const t=u(),n=u();q().filter(s=>s.type==="qNode").length===0&&C(t),g({id:t,data:{topic:"",choices:[{id:n,content:""}]},position:e,type:"qNode",dragHandle:".dhandle"}),E(1)},A=e=>{const t=u();g({id:t,data:{result:""},position:e,type:"rNode",dragHandle:".dhandle"}),w(1)},v=o.useCallback(({active:e,over:t,delta:n,activatorEvent:s})=>{if(!(t==null||t.id!="droppableArea")&&s instanceof MouseEvent){const V=s.pageX+n.x,W=s.pageY+n.y,f=D({x:V,y:W});e.id==="draggable-question"&&T(f),e.id==="draggable-result"&&A(f)}},[]),L=o.useCallback((e,t)=>{e.source===t.target||t.source===e.target||(c.current=!0,r(n=>ee(e,t,n)))},[]),O=o.useCallback(()=>{c.current=!1},[]),B=o.useCallback(e=>{c.current||r(t=>t.filter(n=>n.id!==e.id)),c.current=!0},[]),H=o.useCallback(e=>{e.source!==e.target&&r(t=>te({...e,type:"smoothstep"},t))},[r]),P=o.useCallback((e,t)=>{r(n=>n.map(s=>s.id===t.id?{...s,animated:!s.animated,style:s.animated?{stroke:"gray",strokeWidth:2}:{stroke:"gold",strokeWidth:3}}:{...s,animated:!1,style:{}}))},[r]),U=o.useCallback((e,t)=>{e.preventDefault(),r(n=>n.filter(s=>s.id!==t.id))},[r]);return d.jsx("div",{className:"grow w-full flex",children:d.jsxs($,{onDragEnd:v,children:[d.jsxs("div",{className:"h-full w-[5%] flex items-center flex-col gap-y-10 pt-12 bg-slate-800",children:[d.jsx(N,{id:"draggable-question",label:"質問",color:"indigo",nodeNum:k,maxNodeNum:15}),d.jsx(N,{id:"draggable-result",label:"結果",color:"orange",nodeNum:R,maxNodeNum:10})]}),d.jsx(z,{id:"droppableArea",children:d.jsxs(oe,{nodes:x,edges:y,nodeTypes:F,onNodesChange:I,onEdgesChange:M,snapToGrid:!0,connectionLineType:ne.SmoothStep,onReconnect:L,onReconnectStart:O,onReconnectEnd:(e,t)=>B(t),onConnect:H,onEdgeClick:P,onEdgeContextMenu:U,elevateEdgesOnSelect:!0,defaultViewport:b,panOnScroll:!0,elementsSelectable:!0,selectionMode:se.Partial,children:[d.jsx(re,{color:"#222",variant:de.Lines,gap:20}),d.jsx(ae,{})]})})]})})},qe=o.memo(ce);export{qe as default};
