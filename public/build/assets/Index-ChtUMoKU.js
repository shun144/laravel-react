import{r as i,j as e,Y as N}from"./app-DIYWiWnJ.js";import H from"./NotFinished-BQAxzS3L.js";import R from"./CityHeavenQuestion-B4fFt7RA.js";import S from"./CityHeavenResult-BAQLYWLC.js";import w from"./Header-BBA_8bjn.js";import E from"./Footer-WHEdL7wR.js";import{u as o}from"./store-64y17SyP.js";import{Q as I}from"./useQuery-CdlrYMA-.js";import{Q as q}from"./queryClient-D0sV9cat.js";import"./index-BKnRO1SN.js";import"./iconBase-Ch15NSg1.js";import"./react-CHUvA2Hc.js";import"./ResetButton-BocPI3yh.js";import"./index-Dkqk6IBe.js";/* empty css                */import"./Skelton-BQoP7ySH.js";import"./GirlsView-DIaBs_uQ.js";import"./utils-CQ5dHyhR.js";import"./index-BhKL-TRo.js";import"./ApiError-BNA-uU8R.js";const J=new q,O=({ownerName:d,title:u,questions:c,results:p,edges:l,firstQuestionId:a})=>{const f=o(t=>t.setQuestionnarieDatas),g=o(t=>t.setCurrentQuestionnarie),n=o(t=>t.currentQuestionnarie),Q=o(t=>t.setFirstQuestionId),[x,j]=i.useState(!0);return i.useEffect(()=>{const t=JSON.parse(c),y=JSON.parse(p),h=JSON.parse(l),C=t.map(s=>({id:s.id,topic:s.data.topic,choices:s.data.choices.map(r=>{var m;return{id:r.id,content:r.content,salesPoints:r.salePoints,nextId:(m=h.find(F=>F.sourceHandle===r.id))==null?void 0:m.targetHandle}}),category:"question"})),v=y.map(s=>({id:s.id,result:s.data.result,message:s.data.message,img:s.data.img,url:s.data.url,category:"result"}));f([...C,...v]),Q(a),g(a),j(!1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"診断"}),e.jsxs("div",{className:"w-screen min-h-screen h-screen flex flex-col md:overflow-x-hidden",children:[e.jsx(w,{title:u}),e.jsx("div",{className:" bg-slate-100 grow",children:!x&&e.jsx(e.Fragment,{children:e.jsxs(I,{client:J,children:[n.category==="question"&&e.jsx(R,{}),n.category==="result"&&e.jsx(S,{}),n.category==="none"&&e.jsx(H,{})]})})}),e.jsx(E,{ownerName:d})]})]})},ee=i.memo(O);export{ee as default};