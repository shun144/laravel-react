import{r as o,j as e}from"./app-y0r--580.js";import{u as b,H as j,P as v}from"./index-BCZbkCPO.js";import N from"./ChoiceSourceHandle-Chm9NzCk.js";import{showContextMenu as w}from"./QuestionSubMenu-BGw9m5sD.js";import{g as y}from"./utils-Db5yM8C7.js";import{u as C}from"./store-BqtqZhrr.js";import{c as n,q as m,a as x}from"./constants-C6cNm0Qv.js";import{F as k,a as L}from"./index-VtTQg6qs.js";import{B as P}from"./index-BbVJhn9w.js";import H from"./SalesPointSelect-Dq4hUwJn.js";import"./index-BOMyyJ_j.js";import"./react-Dv2D0eET.js";import"./iconBase--Lo5cxxQ.js";import"./floating-ui.dom-D0k0YRlw.js";const F=({id:l,data:s})=>{const d=C(t=>t.firstNodeId),{setEdges:h,updateNodeData:r}=b(),u=o.useCallback(t=>{r(l,{...s,topic:t.currentTarget.value})},[r,l,s]),f=()=>{const t=y();r(l,{...s,choices:[...s.choices,{id:t,content:"",salePoints:[]}]})},p=o.useCallback((t,i)=>{if(s.choices.length>n)return;const a=t.currentTarget.value;r(l,{...s,choices:s.choices.map(c=>c.id===i.id?{...c,content:a}:c)})},[r,l,s]),g=o.useCallback(t=>{s.choices.length<=1||(r(l,{...s,choices:s.choices.filter(i=>i.id!=t.id)}),h(i=>i.filter(a=>a.sourceHandle!=t.id)))},[r,l,s]);return e.jsxs("div",{className:`rounded-md w-96 bg-slate-900 shadow-cyan-100/50 relative  ${d===l?" border-yellow-300 border-4":" border-slate-300 border-2"}`,children:[d===l&&e.jsx("div",{className:"absolute bg-amber-500 w-12 h-8 rounded-full -top-4 -left-6 flex justify-center items-center shadow-lg border-2 border-yellow-300",children:e.jsx("div",{className:"text-white font-bold text-md",children:"1st"})}),e.jsx("div",{className:"h-10 dhandle rounded-t-md bg-indigo-500 flex justify-end items-center px-2 transition-all hover:bg-indigo-600",children:e.jsx(P,{className:"w-6 h-full text-slate-200 text-md cursor-pointer transition-all hover:text-slate-50 hover:bg-indigo-400",onClick:t=>w(t,l)})}),e.jsxs("div",{className:"flex flex-col justify-center items-center cursor-default pt-3 pb-6 px-3",children:[e.jsxs("div",{className:"w-full flex flex-col justify-center items-center relative",children:[e.jsx("label",{htmlFor:"message",className:"self-start block text-md font-semibold text-indigo-500",children:`質 問（${m}文字）`}),e.jsx("textarea",{id:"message",rows:3,className:"nowheel block resize-none p-2.5 w-full text-md text-slate-200 placeholder-slate-500 bg-slate-800 rounded-sm border-1 ring-0 border-slate-400 focus:ring-0 focus:border-slate-200",value:s.topic,placeholder:"質問内容を入力してください",onChange:t=>u(t),maxLength:m}),e.jsx(j,{id:l,position:v.Left,type:"target",style:{cursor:"pointer",top:18,left:-25}})]}),e.jsxs("div",{className:"w-full flex flex-col justify-center items-center pt-6",children:[e.jsx("div",{className:"self-start block text-md font-semibold text-indigo-500",children:`選 択 肢（${x}文字/${n}項目）`}),s.choices.map(t=>e.jsxs("div",{className:"w-full relative",children:[e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx("input",{className:"w-full text-lg hover:shadow text-slate-200  placeholder-slate-500 bg-slate-800 rounded-sm border-1 ring-0 border-slate-400 focus:ring-0 focus:border-slate-200",value:t.content,placeholder:"選択肢を入力してください",maxLength:x,onChange:i=>p(i,t)}),e.jsx("button",{className:"text-center text-slate-600 transition-all hover:text-red-300 px-1",type:"button",onClick:()=>g(t),children:e.jsx(k,{className:"text-sm"})})]}),e.jsx(H,{nodeId:l,choiceId:t.id,salePoints:t.salePoints}),e.jsx(N,{id:t.id,connectionLimit:1,style:{top:18,right:-25}})]},t.id))]}),e.jsx("div",{className:"w-full mt-4",children:s.choices.length<n&&e.jsxs("button",{className:"text-indigo-600 border border-indigo-600 hover:text-indigo-300 hover:border-indigo-300 font-bold mt-1 w-full text-[0.8rem] py-1 flex justify-center items-center gap-1 transition-all",onClick:()=>f(),children:[e.jsx(L,{}),e.jsx("p",{children:"選択肢追加"})]})})]})]})},G=o.memo(F);export{G as default};
