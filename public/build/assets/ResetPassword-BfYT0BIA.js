import{W as w,j as s,Y as x}from"./app-DIYWiWnJ.js";import{G as f}from"./GuestLayout-AYCFW0BX.js";import{T as t,I as m}from"./TextInput-CXEci-MW.js";import{I as l}from"./InputLabel-DLvsLHBI.js";import{P as j}from"./PrimaryButton-BMHGFa4j.js";import"./Logo-Cs8wt8MY.js";function C({token:i,email:n}){const{data:e,setData:o,post:d,processing:p,errors:r,reset:c}=w({token:i,email:n,password:"",password_confirmation:""}),u=a=>{a.preventDefault(),d(route("password.store"),{onFinish:()=>c("password","password_confirmation")})};return s.jsxs(f,{children:[s.jsx(x,{title:"パスワードリセット"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(l,{htmlFor:"email",value:"メールアドレス"}),s.jsx(t,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(m,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"password",value:"パスワード"}),s.jsx(t,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(m,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"password_confirmation",value:"パスワード（確認用）"}),s.jsx(t,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(m,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(j,{className:"ms-4",disabled:p,children:"Reset Password"})})]})]})}export{C as default};