import{q as v,W as N,j as e,a as y}from"./app-Po51A7Cn.js";import{T as r,I as m}from"./TextInput-C9FgZAUy.js";import{I as l}from"./InputLabel-D6Cn5fsG.js";import{P as _}from"./PrimaryButton-7mQSEnM_.js";import{X as b}from"./transition-DSaskIpj.js";const o=50,u=15,c=255;function w({mustVerifyEmail:d,status:h,className:x=""}){const a=v().props.auth.user,{data:t,setData:n,patch:g,errors:i,processing:f,recentlySuccessful:p}=N({id:a.id,name:a.name,english_name:a.english_name,email:a.email}),j=s=>{s.preventDefault(),g(route("profile.update"))};return e.jsxs("section",{className:x,children:[e.jsx("header",{children:e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"ユーザ情報やメールアドレスを更新します"})}),e.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:`ユーザ名（${o}文字）`}),e.jsx(r,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:s=>n("name",s.target.value),required:!0,isFocused:!0,autoComplete:"name",maxLength:o}),e.jsx(m,{className:"mt-2",message:i.name})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"english_name",value:`店舗URL名（${u}文字）`}),e.jsx(r,{id:"english_name",className:"mt-1 block w-full",value:t.english_name,onChange:s=>n("english_name",s.target.value),required:!0,isFocused:!0,autoComplete:"english_name",maxLength:u}),e.jsx(m,{className:"mt-2",message:i.english_name})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:`メールアドレス（${c}文字）`}),e.jsx(r,{id:"email",type:"email",className:"mt-1 block w-full",value:t.email,onChange:s=>n("email",s.target.value),required:!0,autoComplete:"username",maxLength:c}),e.jsx(m,{className:"mt-2",message:i.email})]}),d&&a.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(y,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),h==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(_,{disabled:f,children:"保存"}),e.jsx(b,{show:p,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"保存完了"})})]})]})]})}export{w as default};
