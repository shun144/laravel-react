import{r as o,j as t,Y as n,a as c}from"./app-DqVqaljI.js";import{A as d}from"./AuthenticatedLayout-CO_ojlul.js";import{g as m}from"./utils-Ca-100RQ.js";import f from"./AddFlowButton-1IyppR2P.js";import"./ApplicationLogo-IvNSgNqF.js";import"./transition-CLivogAp.js";const g=()=>{const[e,r]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const s=await m();r(s)}catch{r([])}})()},[]),t.jsxs(d,{header:!0,children:[t.jsx(n,{title:"Board"}),t.jsx("div",{className:"flex justify-center items-start h-full pt-20",children:t.jsx("div",{className:"grid grid-cols-5 gap-8",children:t.jsxs(t.Fragment,{children:[e.map(({id:s,category:a,title:i,url:l})=>t.jsxs(c,{className:"w-56 h-28 rounded-lg shadow border bg-slate-500 relative inline-block",href:`flow/${a}/${s}`,as:"button",type:"button",children:[i," ",a," ",l]},s)),e&&t.jsx(f,{})]})})})]})};export{g as default};