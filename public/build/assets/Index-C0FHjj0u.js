import{r as a,j as e,Y as R}from"./app-CyNCDwWg.js";import E from"./NotFinished-Ct97QhC-.js";import I from"./StandardQuestion-B-hSDMsk.js";import v from"./StandardResult-CuiYGOSz.js";import w from"./Header-BqlvpuaK.js";import H from"./Footer-D-gMwaGc.js";import{u as r}from"./store-CuIqXcZ4.js";import"./index-uNW7yAPe.js";import"./iconBase-tXk4xBmB.js";import"./react-Csa2F1B_.js";import"./index-DbRnqvPB.js";/* empty css                */const J=({ownerName:u,title:m,questions:c,results:p,edges:l,firstQuestionId:i})=>{const g=r(t=>t.setQuestionnarieDatas),f=r(t=>t.setCurrentQuestionnarie),o=r(t=>t.currentQuestionnarie),x=r(t=>t.setFirstQuestionId),[j,Q]=a.useState(!0);return a.useEffect(()=>{const t=JSON.parse(c),h=JSON.parse(p),S=JSON.parse(l),F=t.map(s=>({id:s.id,topic:s.data.topic,choices:s.data.choices.map(n=>{var d;return{id:n.id,content:n.content,salesPoints:[],nextId:(d=S.find(y=>y.sourceHandle===n.id))==null?void 0:d.targetHandle}}),category:"question"})),N=h.map(s=>({id:s.id,result:s.data.result,message:s.data.message,img:s.data.img,url:s.data.url,category:"result"}));g([...F,...N]),x(i),f(i),Q(!1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"診断"}),e.jsxs("div",{className:"w-screen min-h-screen h-screen flex flex-col md:overflow-x-hidden",children:[e.jsx(w,{title:m}),e.jsx("div",{className:" bg-slate-100 grow",children:!j&&e.jsxs(e.Fragment,{children:[o.category==="question"&&e.jsx(I,{}),o.category==="result"&&e.jsx(v,{}),o.category==="none"&&e.jsx(E,{})]})}),e.jsx(H,{ownerName:u})]})]})},G=a.memo(J);export{G as default};
