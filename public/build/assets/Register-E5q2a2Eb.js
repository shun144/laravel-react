import{W as c,j as e,Y as p,a as g}from"./app-CBaPd7Dh.js";import{G as x}from"./GuestLayout-DXI-bHQm.js";import{T as t,I as o}from"./TextInput-De8yH8IG.js";import{I as n}from"./InputLabel-Cz6-usYx.js";import{P as f}from"./PrimaryButton-C1wTws-t.js";import"./ApplicationLogo-B4iDVVlo.js";function C(){const{data:a,setData:r,post:l,processing:i,errors:m,reset:d}=c({name:"",english_name:"",email:"",password:"",password_confirmation:""}),u=s=>{s.preventDefault(),l(route("register"),{onFinish:()=>d("password","password_confirmation")})};return e.jsxs(x,{children:[e.jsx(p,{title:"Register"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"name",value:"Name"}),e.jsx(t,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:m.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"english_name",value:"英語名"}),e.jsx(t,{id:"english_name",name:"english_name",value:a.english_name,className:"mt-1 block w-full",autoComplete:"english_name",isFocused:!0,onChange:s=>r("english_name",s.target.value),required:!0}),e.jsx(o,{message:m.english_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(t,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(t,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:m.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:m.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(f,{className:"ms-4",disabled:i,children:"Register"})]})]})]})}export{C as default};
