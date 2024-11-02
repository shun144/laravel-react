import{r as a,j as e}from"./app-BMXDJVyd.js";import b from"./HorizontalBarChart-DOXwbTwb.js";import j from"./DebouncedInput-CGwMWczI.js";import{I as S}from"./index-pJFSUfkV.js";import{u as f,f as d,c as N,g as y,a as C,b as v,d as w}from"./index-CwZQ-O3E.js";import"./useQuery-DiE9S0Se.js";import"./utils-D5TGypcN.js";import"./iconBase-DyeLHBi8.js";const n=N(),R=({flows:g})=>{var c;const[r,m]=a.useState({}),[x,u]=a.useState([]),[i,p]=a.useState(""),h=t=>{m(s=>({...s,[t]:!s[t]}))},o=a.useMemo(()=>[n.accessor("id",{header:"ID",size:10,minSize:10,maxSize:10}),n.accessor("category",{header:"カテゴリ",size:10,minSize:10,maxSize:10}),n.accessor("title",{header:"タイトル"}),n.accessor("total",{header:"合計",size:10,minSize:10,maxSize:10}),n.display({id:"viewGraph",header:"内訳",size:10,minSize:10,maxSize:10,cell:({row:t})=>e.jsx("button",{onClick:()=>{h(t.index)},className:`select-none ${r[t.index]?"text-red-400":"text-indigo-400"}`,children:r[t.index]?"閉じる":"表示"})})],[r]),l=f({data:g,columns:o,getCoreRowModel:y(),onSortingChange:u,getSortedRowModel:C(),getFilteredRowModel:v(),getPaginationRowModel:w(),state:{sorting:x,globalFilter:i}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-full w-11/12 mx-auto sm:px-6 lg:py-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs("div",{className:"pb-3 px-6",children:[e.jsxs("div",{className:"flex justify-start items-center h-24",children:[e.jsx("div",{className:"h-12 bg-slate-600 px-2 rounded-l",children:e.jsx(S,{className:"h-full block text-white"})}),e.jsx("div",{className:"h-full flex justify-center items-center",children:e.jsx(j,{value:i??"",handleChange:t=>p(String(t)),className:"w-96 h-12 bg-transparent outline-none border rounded-r border-slate-300 focus:ring-0 focus:border-blue-500 placeholder:text-slate-400",placeholder:"検索"})})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[e.jsx("thead",{className:"text-sm text-gray-700 uppercase bg-gray-200 ",children:l.getHeaderGroups().map(t=>e.jsx("tr",{children:t.headers.map(s=>e.jsx("th",{colSpan:s.colSpan,children:s.isPlaceholder?null:e.jsxs("div",{className:`
                                px-3 py-3
                                ${s.column.getCanSort()?"cursor-pointer select-none":""}`,onClick:s.column.getToggleSortingHandler(),title:s.column.getCanSort()?s.column.getNextSortingOrder()==="asc"?"Sort ascending":s.column.getNextSortingOrder()==="desc"?"Sort descending":"Clear sort":void 0,children:[d(s.column.columnDef.header,s.getContext()),{asc:"↑",desc:"↓"}[s.column.getIsSorted()]??null]})},s.id))},t.id))}),e.jsx("tbody",{children:(c=l.getRowModel().rows)!=null&&c.length?l.getRowModel().rows.map(t=>e.jsxs(a.Fragment,{children:[e.jsx("tr",{"data-state":t.getIsSelected()&&"selected",className:"bg-white border-b ",children:t.getVisibleCells().map(s=>e.jsx("td",{className:"px-3 py-4 text-base",style:{width:`${s.column.getSize()}px`},children:d(s.column.columnDef.cell,s.getContext())},s.id))},t.id),r[t.index]&&e.jsx("tr",{children:e.jsx("td",{colSpan:o.length,className:"p-4",children:e.jsx(b,{flowId:t.original.id},t.id)})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:o.length,className:"h-24 text-center",children:"対象レコード0件"})})})]}),e.jsxs("div",{className:"flex items-center justify-center mt-4 gap-8",children:[e.jsxs("div",{className:"w-12 flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>l.previousPage(),disabled:!l.getCanPreviousPage(),className:"p-1 border border-gray-300 px-2 disabled:opacity-30 select-none cursor-pointer",children:"<"}),e.jsx("button",{onClick:()=>l.nextPage(),disabled:!l.getCanNextPage(),className:"p-1 border border-gray-300 px-2 disabled:opacity-30 select-none cursor-pointer",children:">"})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"text-gray-500",children:`${l.getState().pagination.pageIndex+1} / ${l.getPageCount()}`})}),e.jsx("select",{value:l.getState().pagination.pageSize,onChange:t=>l.setPageSize(Number(t.currentTarget.value)),className:"py-2 pr-8 bg-transparent cursor-pointer select-none border-1 border-slate-200 focus:ring-0 focus:border-blue-500 text-sm",children:[10,20,30,50].map(t=>e.jsx("option",{value:t,children:`${t} 行表示`},t))})]})]})})})})},H=a.memo(R);export{H as default};
