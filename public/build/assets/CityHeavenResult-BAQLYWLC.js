import{q as G,r as _,b as v,j as r}from"./app-DIYWiWnJ.js";import{u as y}from"./store-64y17SyP.js";import S from"./ResetButton-BocPI3yh.js";/* empty css                */import R from"./Skelton-BQoP7ySH.js";import{u as E}from"./useQuery-CdlrYMA-.js";import F from"./GirlsView-DIaBs_uQ.js";import P from"./ApiError-BNA-uU8R.js";import"./react-CHUvA2Hc.js";import"./index-Dkqk6IBe.js";import"./iconBase-Ch15NSg1.js";import"./utils-CQ5dHyhR.js";import"./index-BhKL-TRo.js";const $=({answerHistories:n})=>{var m,d;const{url:a}=G(),{id:l}=y(s=>s.currentQuestionnarie),i=async()=>{const s=window.location.origin;return(await v.get(`${s}${a}/cityheaven`)).data.girlsData},c=s=>{const o={};n.forEach(({salesPointNos:t})=>{t.forEach(e=>{o[e]=(o[e]||0)+1})});const x=new Set(Object.keys(o)),g=s.map(t=>{const e=t.salespoint_ids.reduce((p,k)=>p+(o[k]||0),0),D=new Set(t.salespoint_ids.filter(p=>p!==null)),j=x.isSubsetOf(D);return{...t,earn_point:e,isAllContain:j}});return g.sort((t,e)=>e.today_work_flg!==t.today_work_flg?e.today_work_flg?1:-1:e.earn_point!==t.earn_point?e.earn_point-t.earn_point:e.diary_flg!==t.diary_flg?e.diary_flg?1:-1:e.review_flg!==t.review_flg?e.review_flg?1:-1:e.w_shukkin.filter(Boolean).length-t.w_shukkin.filter(Boolean).length),g},{data:u,isFetching:w,error:f}=E({queryKey:[`RespondentGirlsData${l}`],queryFn:i,staleTime:1e3*60*5,retry:!1}),h=(d=(m=f==null?void 0:f.response)==null?void 0:m.data)==null?void 0:d.message;return{processedGirlsData:_.useMemo(()=>u?c(u):[],[u,n]),isFetching:w,errorMessage:h}},q=()=>{const n=y(c=>c.answerHistories),{processedGirlsData:a,isFetching:l,errorMessage:i}=$({answerHistories:n});return i?r.jsx(P,{errorMessage:i}):l?r.jsx(R,{}):r.jsx(r.Fragment,{children:r.jsxs("div",{className:"h-full w-full flex flex-col justify-start items-center",children:[r.jsx(F,{girlsData:a}),r.jsx(S,{})]})})},I=_.memo(q);export{I as default};
