import{r as i,j as e,Y as N}from"./app-BJoOWkfI.js";import H from"./CityHeavenQuestion-JdXn7OJA.js";import R from"./CityHeavenResult-CJjv1gAi.js";import S from"./NotFinished-BLIg-vVM.js";import w from"./Header-BYrE_iWQ.js";import E from"./Footer-DD1Tb9m7.js";import{u as o}from"./store-Bw8cfv6S.js";import{Q as I}from"./useQuery-APCecA-R.js";import{Q as q}from"./queryClient-DKWOIpKH.js";import"./index-Bkc3E89o.js";import"./iconBase-BMYX6rd5.js";import"./react-BLAIrpwY.js";import"./ResetButton-Devtjryp.js";import"./index-DARiELRi.js";/* empty css                */import"./Skelton-DMRscdUP.js";import"./GirlsView-D6Vbf51o.js";import"./utils-BXvl0IaV.js";import"./ApiError-aQbcTKc1.js";const J=new q,O=({ownerName:d,title:u,questions:c,results:p,edges:l,firstQuestionId:a})=>{const f=o(t=>t.setQuestionnarieDatas),g=o(t=>t.setCurrentQuestionnarie),n=o(t=>t.currentQuestionnarie),Q=o(t=>t.setFirstQuestionId),[x,j]=i.useState(!0);return i.useEffect(()=>{const t=JSON.parse(c),y=JSON.parse(p),h=JSON.parse(l),C=t.map(s=>({id:s.id,topic:s.data.topic,choices:s.data.choices.map(r=>{var m;return{id:r.id,content:r.content,salesPoints:r.salePoints,nextId:(m=h.find(F=>F.sourceHandle===r.id))==null?void 0:m.targetHandle}}),category:"question"})),v=y.map(s=>({id:s.id,result:s.data.result,message:s.data.message,img:s.data.img,url:s.data.url,category:"result"}));f([...C,...v]),Q(a),g(a),j(!1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"診断"}),e.jsxs("div",{className:"w-screen min-h-screen h-screen flex flex-col md:overflow-x-hidden",children:[e.jsx(w,{title:u}),e.jsx("div",{className:" bg-slate-100 grow",children:!x&&e.jsx(e.Fragment,{children:e.jsxs(I,{client:J,children:[n.category==="question"&&e.jsx(H,{}),n.category==="result"&&e.jsx(R,{}),n.category==="none"&&e.jsx(S,{})]})})}),e.jsx(E,{ownerName:d})]})]})},$=i.memo(O);export{$ as default};