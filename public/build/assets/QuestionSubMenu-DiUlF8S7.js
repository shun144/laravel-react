import{r as d,j as t}from"./app-Po51A7Cn.js";import{i as m,p as r,F as a}from"./index-DjcWFvNW.js";import{u as n}from"./store-C6o4wHu7.js";import{u as f}from"./index-YXVZuvUv.js";import"./react-bkPmn1Wh.js";const i="question-menu-id",{show:I}=a({id:i}),j=(s,o)=>{I({event:s,props:{nodeId:o}})},N=()=>{const s=n(e=>e.firstNodeId),o=n(e=>e.setFirstNodeId),u=n(e=>e.addQnodeNum),{deleteElements:c}=f(),p=d.useCallback(e=>{e.props&&o(e.props.nodeId)},[o]),l=e=>{e.props&&(c({nodes:[{id:e.props.nodeId}]}),s===e.props.nodeId&&o(""),u(-1))};return t.jsxs(m,{id:i,children:[t.jsx(r,{closeOnClick:!0,onClick:e=>p(e),children:"1問目に設定"}),t.jsx(r,{closeOnClick:!0,onClick:e=>l(e),children:"削除"})]})},k=d.memo(N);export{k as default,j as showContextMenu};
