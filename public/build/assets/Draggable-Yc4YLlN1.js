import{r,j as t}from"./app-BMXDJVyd.js";import{u as v}from"./core.esm-hzQN0OPo.js";import{y as i}from"./react-tooltip.min-DZcZWJaY.js";const y=({id:l,label:d,color:e,nodeNum:s,maxNodeNum:c})=>{const{setNodeRef:g,listeners:x,attributes:b,transform:o,isDragging:n}=v({id:l}),m="bg-gray-700 text-gray-500 border-gray-500",f=r.useMemo(()=>i(`hover:bg-${e}-600 text-${e}-500 border-${e}-500 hover:text-stone-300 hover:border-slate-200 hover:shadow-xl`),[e]),h="bg-gray-500",u=r.useMemo(()=>i(`bg-${e}-500`),[e]),p=o?`translate(${o.x}px, ${o.y}px)`:void 0,a=r.useMemo(()=>s>=c,[s]);return t.jsx("div",{ref:g,...b,...a?{}:x,style:{transform:p,height:"fit-content"},className:"w-[80%]",children:t.jsxs("div",{className:`flex justify-center items-center bg-stone-200 h-16  font-extrabold border-4  rounded-lg shadow transition-all duration-300
          relative 
          ${a?m:f}`,style:{cursor:n?"grabbing":"grab",opacity:n?.5:void 0},children:[t.jsx("p",{className:"text-center select-none",children:d}),t.jsx("div",{className:`absolute -top-3 -right-3 w-5 h-5 text-[14px] p-3 text-white font-thin rounded-full flex justify-center items-center select-none 
          ${a?h:u}`,children:s})]})})},N=r.memo(y);export{N as default};
