import{r as u,j as e}from"./app-BJoOWkfI.js";import{u as j,g as b,B as f,E as w}from"./index-BnmHmR98.js";const F=({id:t,sourceX:s,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,style:i={},markerEnd:d})=>{const{setEdges:c}=j(),[x,g,m]=b({sourceX:s,sourceY:a,sourcePosition:r,targetX:o,targetY:n,targetPosition:l}),p=()=>{c(E=>E.filter(h=>h.id!==t))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{path:x,markerEnd:d,style:i}),e.jsx(w,{children:e.jsx("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${g}px,${m}px)`,fontSize:20,pointerEvents:"all"},className:"nodrag nopan",children:e.jsx("button",{className:"edgebutton text-white",onClick:p,children:"x"})})})]})},$=u.memo(F);export{$ as default};