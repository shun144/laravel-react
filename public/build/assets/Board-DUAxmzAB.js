import{r as t,j as o}from"./app-DpxkVMrK.js";import{u as S,a as q,c as D,d as I,r as A,i as B,S as T,B as Q,b as V,C as F}from"./index-CLsSsi3L.js";/* empty css              */import{g as M,Q as X,a as Y,b as u}from"./QuizeNode-vT2oXHAq.js";import G from"./ResultNode-DQq1ms_Y.js";import{D as L}from"./core.esm-Fkv0BRu6.js";import{Draggable as g}from"./Draggable-W0oBBfYO.js";import{Droppable as O}from"./Droppable-CWfM4yO4.js";import"./ChoiceSourceHandleProps-BekoWYbT.js";import"./DraggableBlockSource-uysq9xOH.js";const P=M(),_=Y(),te=()=>{const[p,$,m]=S(P),[f,i,x]=q(_),{screenToFlowPosition:N,getNodes:r,addNodes:c}=D(),b=t.useMemo(()=>({quizeNode:X,resultNode:G}),[]),d=t.useRef(!0),h=t.useCallback(s=>{i(e=>I({...s,type:"smoothstep"},e))},[]),j=t.useCallback(()=>{d.current=!1},[]),E=t.useCallback((s,e)=>{d.current=!0,i(n=>A(s,e,n))},[]),w=t.useCallback((s,e)=>{d.current||i(n=>n.filter(a=>a.id!==e.id)),d.current=!0},[]),C=s=>{const e=u(r(),"quize-");c({id:e,data:{quizeNo:e,topic:"",choices:[{choiceNo:`${e}-1`,content:""}]},position:s,type:"quizeNode"})},R=s=>{const e=u(r(),"result-");c({id:e,data:{resultNo:e,message:""},position:s,type:"resultNode"})},z=t.useCallback(({active:s,over:e,delta:n,activatorEvent:a})=>{if(!(e==null||e.id!="droppableA")&&a instanceof MouseEvent){const k=a.pageX+n.x,y=a.pageY+n.y,l=N({x:k,y});s.id==="draggable-quize"&&C(l),s.id==="draggable-result"&&R(l)}},[]);return o.jsx("div",{className:"flex h-full",children:o.jsxs(L,{onDragEnd:z,children:[o.jsxs("div",{className:"flex flex-col bg-green-200",children:[o.jsx("div",{className:"w-[10%] min-w-40",children:o.jsx(g,{id:"draggable-quize",label:"質問追加"})}),o.jsx("div",{className:"w-[10%] min-w-40",children:o.jsx(g,{id:"draggable-result",label:"結果追加"})})]}),o.jsx(O,{id:"droppableA",children:o.jsxs(B,{nodes:p,edges:f,nodeTypes:b,edgeTypes:{smoothstep:T},onEdgesChange:x,onNodesChange:m,fitView:!0,fitViewOptions:{padding:.4},snapToGrid:!0,onReconnect:E,onReconnectStart:j,onReconnectEnd:w,onConnect:h,children:[o.jsx(Q,{color:"#222",variant:V.Lines}),o.jsx(F,{})]})})]})})};export{te as default};
