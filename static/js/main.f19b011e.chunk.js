(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),l=n.n(c),r=n(6),s=n.n(r),j=(n(13),n(2)),i=n(7),u=(n(14),function(e){var t=e.label,n=e.name,c=e.placeholder,l=e.type,r=e.value,s=e.handleOnChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:n,children:t}),"cash"===l?Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"$"}),Object(a.jsx)("input",{placeholder:c,value:r,onChange:function(e){return s(e.target.value)},name:n,type:"number"})]}):"percentage"===l?Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{placeholder:c,value:r,onChange:function(e){return s(e.target.value)},name:n,type:"number",min:"0",max:"100"}),Object(a.jsx)("span",{children:"%"})]}):Object(a.jsx)("input",{placeholder:c,value:r,onChange:function(e){return s(e.target.value)},name:n,type:"number"})]})}),o=function(e){var t=e.label,n=e.name,c=e.value,l=e.handleOnChange,r=e.options;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:n,children:t}),Object(a.jsx)("select",{value:c,onChange:function(e){return l(e.target.value)},name:n,children:r.map((function(e){return Object(a.jsx)("option",{value:e.value,label:e.label},e.value)}))})]})},b=function(){for(var e=[],t=0;t<30;t++)e=[].concat(Object(i.a)(e),[{label:t+1,value:t+1}]);return e},h=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],l=t[1],r=Object(c.useState)(0),s=Object(j.a)(r,2),i=s[0],h=s[1],d=Object(c.useState)(0),O=Object(j.a)(d,2),m=O[0],p=O[1],v=Object(c.useState)(0),x=Object(j.a)(v,2),g=x[0],f=x[1],C=Object(c.useState)(null),y=Object(j.a)(C,2),P=y[0],S=y[1];return Object(a.jsxs)("div",{className:"mortgageCalculator",children:[Object(a.jsx)("h1",{children:"Mortgage Calculator"}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){return function(e){var t=i/1200,a=(n-m)*t/(1-Math.pow(1+t,-1*g));S((a/12).toFixed(2)),e.preventDefault()}(e)},children:[Object(a.jsxs)("div",{className:"form",children:[Object(a.jsxs)("div",{className:"half",children:[Object(a.jsx)("h3",{children:"Payment Plan"}),Object(a.jsx)(u,{name:"mortgageAmount",label:"Mortgage Amount:",placeholder:"100,000.00",type:"cash",value:n,handleOnChange:l}),Object(a.jsx)(u,{name:"interestRate",label:"Interest Rate:",placeholder:"5.00",type:"percentage",value:i,handleOnChange:h}),Object(a.jsx)(o,{name:"amortizationPeriod",label:"Amortization Period:",options:b(),value:g,handleOnChange:f})]}),Object(a.jsxs)("div",{className:"half",children:[Object(a.jsx)("h3",{children:"Prepayment Plan"}),Object(a.jsx)(u,{name:"prepaymentAmount",label:"Prepayment Amount:",placeholder:"0.00",type:"cash",value:m,handleOnChange:p})]})]}),Object(a.jsx)("div",{className:"submitButton",children:Object(a.jsx)("button",{type:"submit",children:"Calculate"})})]})}),P&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Calculation Summary"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Monthly payment :"}),"$",P]})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};s.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.f19b011e.chunk.js.map