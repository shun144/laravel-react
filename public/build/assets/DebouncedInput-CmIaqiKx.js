import{r as u,j as o}from"./app-BMXDJVyd.js";const l=({value:c,handleChange:r,debounce:a=500,...s})=>{const[e,n]=u.useState("");return u.useEffect(()=>{const t=setTimeout(()=>{r(e)},a);return()=>clearTimeout(t)},[e]),o.jsx("input",{...s,value:e,onChange:t=>n(t.currentTarget.value)})};export{l as default};