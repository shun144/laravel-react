import{r as t,j as r}from"./app-Bijlf0Wl.js";const d=({file:l})=>{const[s,a]=t.useState("");return t.useEffect(()=>{if(!l)return;let e=new FileReader;return e.onloadend=()=>{const n=e&&e.result;n&&typeof n=="string"&&a(n)},e.readAsDataURL(l),()=>{e=null}},[l]),{imageUrl:s}},i="imageId",m=()=>{const[l,s]=t.useState(null),a=t.useRef(null),{imageUrl:e}=d({file:l}),n=t.useCallback(o=>{const c=o.currentTarget;!c||!c.files||s(c.files[0])},[]),u=t.useCallback(o=>{o.preventDefault(),s(null),a.current&&(a.current.value="")},[]);return r.jsx(r.Fragment,{children:r.jsx("label",{className:"w-full h-10 border border-dashed border-slate-300 rounded-md flex justify-center items-center overflow-hidden cursor-pointer",htmlFor:i,children:e&&l?r.jsx("img",{className:"w-full h-full object-cover",src:e,alt:"アップロード画像",onClick:u}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"+ 画像をアップロード"}),r.jsx("input",{ref:a,id:i,type:"file",accept:"image/jpeg, image/png",onChange:n,hidden:!0})]})})})},g=t.memo(m);export{g as default};