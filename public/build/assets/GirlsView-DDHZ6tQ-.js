import{r as l,q as P,j as e}from"./app-y0r--580.js";import{c as C}from"./utils-Do8MiNf7.js";import{u as _}from"./store-8oO2D1Mz.js";import{R as E}from"./index-O9mdErJP.js";import"./react-Dv2D0eET.js";const o=10,c=3,R=({girlsData:n})=>{const[t,x]=l.useState(1),[i,h]=l.useState([]),[p,f]=l.useState(0),{message:u}=_(s=>s.currentQuestionnarie),{url:g}=P();l.useEffect(()=>{f(Math.ceil(n.length/o))},[n]),l.useEffect(()=>{h(n.slice((t-1)*o,t*o))},[t]);const b=s=>{x(s),window.scrollTo({top:0,behavior:"instant"})},j=l.useCallback((s,r,d)=>{s.preventDefault,d.match(/^https?:\/\//)&&(C(g,r),window.open(d,"_blank","noopener,noreferrer"))},[]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12",children:e.jsx("div",{className:" text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8 whitespace-pre-wrap",children:u})}),e.jsxs("div",{className:"w-full px-1 md:w-11/12",children:[e.jsx("div",{className:`grid mb-4 grid-cols-2 gap-x-3 gap-y-4\r
          md:mb-10 md:grid-cols-5 md:gap-x-6 md:gap-y-8`,children:i&&i.map(({id:s,name:r,catchphrase:d,w_shukkin:S,diary_flg:G,review_flg:I,earn_point:T,today_work_flg:V,picture_url:v,mypage_url:w,bwh:a,age:N,height:y,cup:k},m)=>e.jsxs("div",{className:`flex flex-col items-center bg-white border  border-gray-200 rounded-lg shadow relative \r
                  pt-2 px-1\r
                  md:max-w-xl md:pt-4 md:px-2`,children:[e.jsx("div",{className:"absolute -top-2 -left-1 md:-top-3 md:-left-3",children:e.jsx("div",{className:`${m+1+(t-1)*10<=c?"bg-amber-400":"bg-violet-300"} rounded-full shadow flex justify-center items-center border-2 md:border-4 border-slate-100 w-6 h-6 md:w-10 md:h-10`,children:e.jsx("div",{className:"text-white text-sm md:text-xl md:font-semibold",children:m+1+(t-1)*10})})}),e.jsx("div",{className:"rounded-lg pb-2",children:e.jsx("img",{className:`${m+1+(t-1)*10<=c?"border-yellow-200":"border-violet-100"}  rounded-lg border-4 shadow-xl object-cover h-36 md:h-60`,src:v,alt:r})}),e.jsxs("div",{className:"w-full flex flex-col justify-between leading-normal",children:[e.jsx("div",{className:"font-bold tracking-tight text-gray-900 text-md md:text-xl",children:`${r}(${N})`}),e.jsxs("div",{className:"font-normal text-gray-700 pb-1 min-h-8 md:pb-2 md:min-h-12 ",children:[e.jsx("div",{className:"text-sm md:text-lg",children:d}),e.jsx("div",{className:"text-sm md:text-md",children:`【${y}cm / ${a[0]}(${k}):${a[1]}:${a[2]}】`})]}),e.jsx("div",{className:"w-full flex justify-end items-center md:min-h-7",children:e.jsx("a",{className:"block px-2 py-2 underline text-end text-violet-500 text-sm md:text-md md:cursor-pointer md:trainstion-all md:duration-200 hover:text-violet-300",onClick:$=>j($,r,w),children:"女の子のマイページ"})})]})]},s))}),e.jsx("div",{className:"w-full flex justify-center items-start h-14 mb-3 md:h-20 md:mb-4",children:e.jsx(E,{current:t,total:p,onPageChange:b,maxWidth:350,className:"pagination select-none md:flex md:space-x-2"})})]})]})},Q=l.memo(R);export{Q as default};