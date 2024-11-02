import{r as a,j as e}from"./app-BMXDJVyd.js";import{u as f,H as p,P as g}from"./index-DYGodSJL.js";import b from"./ChoiceSourceHandle-BMumkVGJ.js";import{g as j}from"./utils-D5TGypcN.js";import{u as v}from"./store-C-TAy8r_.js";import{F as N,a as w}from"./index-BL9t5Psi.js";import{B as y}from"./index-CdkyqLyN.js";import{showContextMenu as C}from"./QuestionSubMenu-D_Tdl26P.js";import"./react-BQFNYpn0.js";import"./iconBase-DyeLHBi8.js";import"./index-Ch_NWwRx.js";const k=({id:l,data:s})=>{const n=v(t=>t.firstNodeId),{setEdges:d,updateNodeData:r}=f(),m=a.useCallback(t=>{r(l,{...s,topic:t.currentTarget.value})},[r,l,s]),x=()=>{const t=j();r(l,{...s,choices:[...s.choices,{id:t,content:""}]})},h=a.useCallback((t,i)=>{if(s.choices.length>5)return;const o=t.currentTarget.value;r(l,{...s,choices:s.choices.map(c=>c.id===i.id?{...c,content:o}:c)})},[r,l,s]),u=a.useCallback(t=>{s.choices.length<=1||(r(l,{...s,choices:s.choices.filter(i=>i.id!=t.id)}),d(i=>i.filter(o=>o.sourceHandle!=t.id)))},[r,l,s]);return e.jsxs("div",{className:`rounded-md w-96 bg-slate-900 shadow-cyan-100/50 relative  ${n===l?" border-yellow-300 border-4":" border-slate-300 border-2"}`,children:[n===l&&e.jsx("div",{className:"absolute bg-amber-500 w-12 h-8  rounded-full -top-4 -left-6 flex justify-center items-center shadow-lg border-2 border-yellow-300",children:e.jsx("div",{className:"text-white font-bold text-md",children:"1st"})}),e.jsx("div",{className:"h-10 dhandle rounded-t-md bg-indigo-500 flex justify-end items-center px-2 transition-all hover:bg-indigo-600",children:e.jsx(y,{className:"w-6 h-full text-slate-200 text-md cursor-pointer transition-all hover:text-slate-50 hover:bg-indigo-400",onClick:t=>C(t,l)})}),e.jsxs("div",{className:"flex flex-col justify-center items-center cursor-default pt-3 pb-6 px-3",children:[e.jsxs("div",{className:"w-full flex flex-col justify-center items-center relative",children:[e.jsx("label",{htmlFor:"message",className:"self-start block text-md font-semibold text-indigo-500",children:"質 問"}),e.jsx("textarea",{id:"message",rows:3,className:"block resize-none p-2.5 w-full text-md text-slate-200 placeholder-slate-500 bg-slate-800 rounded-sm border-1 ring-0 border-slate-400 focus:ring-0 focus:border-slate-200",value:s.topic,maxLength:100,placeholder:"質問内容を入力してください",onChange:t=>m(t)}),e.jsx(p,{id:l,position:g.Left,type:"target",style:{cursor:"pointer",top:18,left:-25}})]}),e.jsxs("div",{className:"w-full flex flex-col justify-center items-center pt-6",children:[e.jsx("div",{className:"self-start block text-md font-semibold text-indigo-500",children:"選 択 肢"}),s.choices.map((t,i)=>e.jsxs("div",{className:`w-full relative ${i!=s.choices.length-1&&"pb-6"}`,children:[e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx("input",{className:"w-full text-lg hover:shadow text-slate-200  placeholder-slate-500 bg-slate-800 rounded-sm border-1 ring-0 border-slate-400 focus:ring-0 focus:border-slate-200",value:t.content,placeholder:"選択肢を入力してください",maxLength:50,onChange:o=>h(o,t)}),e.jsx("button",{className:"text-center text-slate-600 transition-all hover:text-red-300 px-1",type:"button",onClick:()=>u(t),children:e.jsx(N,{className:"text-sm"})})]}),e.jsx(b,{id:t.id,connectionLimit:1,style:{top:18,right:-25}})]},t.id))]}),e.jsx("div",{className:"w-full mt-4",children:s.choices.length<5&&e.jsxs("button",{className:"text-indigo-600 border border-indigo-600 hover:text-indigo-300 hover:border-indigo-300 font-bold mt-1 w-full text-[0.8rem] py-1 flex justify-center items-center gap-1 transition-all",onClick:()=>x(),children:[e.jsx(w,{}),e.jsx("p",{children:"選択肢追加"})]})})]})]})},Q=a.memo(k);export{Q as default};
