import{r as s,j as r}from"./app-Po51A7Cn.js";const n="診断マスター",a=({ownerName:i})=>{const[l,c]=s.useState(!1),e=s.useRef(null);return s.useEffect(()=>{const t=()=>{e.current&&c(e.current.scrollWidth>e.current.clientWidth)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),r.jsx("div",{className:"bg-indigo-200 min-h-10 max-h-10 md:min-h-14 md:max-h-14",children:r.jsx("div",{ref:e,className:`w-full h-full flex items-center overflow-x-auto ${l?"justify-start px-3":"justify-center"}`,children:r.jsx("div",{className:"text-white whitespace-nowrap text-lg md:text-3xl",children:i?`${i}  / ${n}`:n})})})};export{a as default};
