import{j as r}from"./app-BE4q0agm.js";import{u as m}from"./core.esm-6rDriREk.js";import{DraggableBlockSource as f}from"./DraggableBlockSource-NX-DDk3P.js";const c=({id:e,label:s})=>{const{setNodeRef:o,listeners:a,attributes:i,transform:t,isDragging:n}=m({id:e}),g=t?`translate(${t.x}px, ${t.y}px)`:void 0;return r.jsx("div",{ref:o,...i,...a,style:{transform:g,height:"fit-content",width:"130px"},children:r.jsx(f,{isDragging:n,label:s})})};export{c as Draggable};