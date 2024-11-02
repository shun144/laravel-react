import{r as l,j as e,y as d}from"./app-BMXDJVyd.js";import{_ as j}from"./index-BqrmyCi8.js";import N from"./DebouncedInput-CmIaqiKx.js";import{u as S,f as m,c as v,g as C,a as w,b as y,d as R}from"./index-CwZQ-O3E.js";import{I as M}from"./index-pJFSUfkV.js";import"./iconBase-DyeLHBi8.js";const r=v(),I=({initialUsers:g,success:n})=>{var c;const[x,u]=l.useState([]),[o,h]=l.useState("");l.useEffect(()=>{n&&j.success(n,{duration:4e3})},[n]);const p=(s,t)=>{s.preventDefault(),d.get(`/admin/user/${t}`)},b=(s,t,f)=>{s.preventDefault(),d.delete(`/admin/user/${t}`,{onBefore:()=>confirm(`${f}さんを削除してよろしいですか？`)})},i=l.useMemo(()=>[r.accessor("id",{header:"ID",size:10,minSize:10,maxSize:10}),r.accessor("name",{header:"ユーザ名"}),r.accessor("english_name",{header:"店舗URL名"}),r.accessor("email",{header:"メールアドレス"}),r.accessor("first_password",{header:"初回パスワード"}),r.display({id:"Action",header:"Action",size:10,minSize:10,maxSize:10,cell:({row:s})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"font-medium text-blue-600 hover:bg-blue-500 hover:text-white mx-1 transiton-all duration-150 p-1 rounded",onClick:t=>p(t,s.original.id),children:"編集"}),e.jsx("button",{className:"font-medium text-red-600 hover:bg-red-500 hover:text-white mx-1 transiton-all duration-150 p-1 rounded",onClick:t=>b(t,s.original.id,s.original.name),children:"削除"})]})})],[]),a=S({data:g,columns:i,getCoreRowModel:C(),onSortingChange:u,getSortedRowModel:w(),getFilteredRowModel:y(),getPaginationRowModel:R(),state:{sorting:x,globalFilter:o}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-full w-11/12 mx-auto sm:px-6 lg:py-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs("div",{className:"pb-3 px-6",children:[e.jsxs("div",{className:"flex justify-start items-center h-24",children:[e.jsx("div",{className:"h-12 bg-slate-600 px-2 rounded-l",children:e.jsx(M,{className:"h-full block text-white"})}),e.jsx("div",{className:"h-full flex justify-center items-center",children:e.jsx(N,{value:o??"",handleChange:s=>h(String(s)),className:"w-96 h-12 bg-transparent outline-none border rounded-r border-slate-300 focus:ring-0 focus:border-blue-500 placeholder:text-slate-400",placeholder:"検索"})})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[e.jsx("thead",{className:"text-sm text-gray-700 bg-gray-200 ",children:a.getHeaderGroups().map(s=>e.jsx("tr",{children:s.headers.map(t=>e.jsx("th",{colSpan:t.colSpan,children:t.isPlaceholder?null:e.jsxs("div",{className:`
                                px-3 py-3
                                ${t.column.getCanSort()?"cursor-pointer select-none":""}`,onClick:t.column.getToggleSortingHandler(),title:t.column.getCanSort()?t.column.getNextSortingOrder()==="asc"?"Sort ascending":t.column.getNextSortingOrder()==="desc"?"Sort descending":"Clear sort":void 0,children:[m(t.column.columnDef.header,t.getContext()),{asc:"↑",desc:"↓"}[t.column.getIsSorted()]??null]})},t.id))},s.id))}),e.jsx("tbody",{children:(c=a.getRowModel().rows)!=null&&c.length?a.getRowModel().rows.map(s=>e.jsx(l.Fragment,{children:e.jsx("tr",{"data-state":s.getIsSelected()&&"selected",className:"bg-white border-b ",children:s.getVisibleCells().map(t=>e.jsx("td",{className:"px-3 py-4 text-base",style:{width:`${t.column.getSize()}px`},children:m(t.column.columnDef.cell,t.getContext())},t.id))},s.id)},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:i.length,className:"h-24 text-center",children:"対象レコード0件"})})})]}),e.jsxs("div",{className:"flex items-center justify-center mt-4 gap-8",children:[e.jsxs("div",{className:"w-12 flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>a.previousPage(),disabled:!a.getCanPreviousPage(),className:"p-1 border border-gray-300 px-2 disabled:opacity-30 select-none cursor-pointer",children:"<"}),e.jsx("button",{onClick:()=>a.nextPage(),disabled:!a.getCanNextPage(),className:"p-1 border border-gray-300 px-2 disabled:opacity-30 select-none cursor-pointer",children:">"})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"text-gray-500",children:`${a.getState().pagination.pageIndex+1} / ${a.getPageCount()}`})}),e.jsx("select",{value:a.getState().pagination.pageSize,onChange:s=>a.setPageSize(Number(s.currentTarget.value)),className:"py-2 pr-8 bg-transparent cursor-pointer select-none border-1 border-slate-200 focus:ring-0 focus:border-blue-500 text-sm",children:[10,20,30,50].map(s=>e.jsx("option",{value:s,children:`${s} 行表示`},s))})]})]})})})})};export{I as default};
