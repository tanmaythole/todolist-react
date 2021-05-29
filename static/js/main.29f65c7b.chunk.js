(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),l=c.n(s),o=(c(25),c(11)),r=c(20),i=(c(26),c(8)),d=c(0);function b(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/todolist-react/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/todolist-react/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/todolist-react/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):Object(d.jsx)("p",{className:"text-light",children:"SearchBar not added"})]})]})})})}b.defaultProps={title:"Title"};var j=function(e){var t=e.todo,c=e.onDelete;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.sno}),Object(d.jsx)("td",{children:t.title}),Object(d.jsx)("td",{children:t.description}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){c(t)},children:"Delete"})})]})},h=function(e){return Object(d.jsxs)("div",{className:"container col-md-8 mb-5",children:[Object(d.jsx)("h1",{className:"my-2",children:"ToDo List"}),0===e.todos.length?"No ToDos to display":Object(d.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"S. No."}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))})]})]})},m=function(e){var t=e.addTodo,c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],l=n[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),b=i[0],j=i[1];return Object(d.jsxs)("div",{className:"container col-md-8 my-3",children:[Object(d.jsx)("h3",{className:"",children:"Add ToDo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&b?(t(s,b),l(""),j("")):alert("Fill All Fields")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(e){l(e.target.value)},id:"title",name:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",value:b,onChange:function(e){j(e.target.value)},id:"desc",name:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary",children:"Submit"})]})]})},u=function(){return Object(d.jsx)("div",{className:"bg-dark text-light my-0",style:{position:"relative",width:"100%"},children:Object(d.jsx)("p",{className:"text-center py-3",children:"Copyright \xa9 Tanmay Thole"})})},x=function(){return Object(d.jsx)("div",{className:"container",children:"This is about page."})},O=c(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(a.useState)(e),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"My To-Do",searchBar:!0}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/todolist-react/",children:Object(d.jsxs)("div",{className:"container",style:{minHeight:"85vh"},children:[Object(d.jsx)(m,{addTodo:function(e,t){console.log(e,t);var c={sno:0===n.length?1:n[n.length-1].sno+1,title:e,description:t};console.log(c),s([].concat(Object(r.a)(n),[c]))}}),Object(d.jsx)(h,{todos:n,onDelete:function(e){console.log("Delete",e),s(n.filter((function(t){return t!==e}))),localStorage.getItem("todos")}})]})}),Object(d.jsx)(O.a,{exact:!0,path:"/todolist-react/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(u,{})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.29f65c7b.chunk.js.map