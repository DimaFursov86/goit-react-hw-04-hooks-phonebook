(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,function(t,e,n){t.exports={formContact:"ContactForm_formContact__17-UQ",contactFormItem:"ContactForm_contactFormItem__3Uxgx",formButton:"ContactForm_formButton__2XqgV"}},function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__37acu",contactItemText:"ContactItem_contactItemText__3hCzu"}},,,,,,function(t,e,n){t.exports={section:"Section_section__3iCzr"}},function(t,e,n){t.exports={contactList:"ContactList_contactList__XqmMr"}},function(t,e,n){t.exports={filterBox:"Filter_filterBox__2P1yr"}},function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={box:"App_box__3TEmg"}},,,,,,function(t,e,n){},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(9),r=n.n(o),i=(n(21),n(16)),s=n(2),u=n(10),m=n.n(u),l=n(11),b=n.n(l),j=n(0);function d(t){var e=t.children;return Object(j.jsx)("div",{className:b.a.section,children:e})}var x=n(4),f=n.n(x);function O(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),m=u[0],l=u[1],b=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}};return Object(j.jsxs)("form",{className:f.a.formContact,onSubmit:function(t){t.preventDefault(),e({name:o,number:m}),r(""),l("")},children:[Object(j.jsxs)("label",{className:f.a.contactFormItem,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:o,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:f.a.contactFormItem,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:m,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:f.a.formButton,type:"submit",children:"Add contact"})]})}var h=n(12),p=n.n(h),C=n(5),v=n.n(C);function _(t){var e=t.id,n=t.name,c=t.number,a=t.onDeleteContact;return Object(j.jsxs)("div",{className:v.a.contactItem,children:[Object(j.jsx)("p",{className:v.a.contactItemText,children:n}),Object(j.jsx)("p",{className:v.a.contactItemText,children:c}),Object(j.jsx)("button",{type:"button",className:v.a.contactItemText,onClick:function(){return a(e)},children:"Delete"})]})}function g(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:p.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(j.jsx)("li",{children:Object(j.jsx)(_,{id:e,name:c,number:a,onDeleteContact:n})},e)}))})}var I=n(13),N=n.n(I),S=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:N.a.filterBox,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},w=n(14),y=n(15),F=n.n(y);function k(){var t=Object(c.useState)(w),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),u=r[0],l=r[1];Object(c.useEffect)((function(){var t=window.localStorage.getItem("contacts"),e=JSON.parse(t);e&&a(e)}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var b=function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))};return Object(j.jsx)(d,{children:Object(j.jsxs)("div",{className:F.a.box,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onSubmit:function(t){var e=t.name,c=t.number,o={id:m.a.generate(),name:e,number:c};b().map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacts")):a([].concat(Object(i.a)(n),[o]))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(S,{value:u,onChange:function(t){l(t.currentTarget.value)}}),Object(j.jsx)(g,{contacts:b(),onDeleteContact:function(t){a(n.filter((function(e){return e.id!==t})))}})]})})}n(31);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.99d2bbe2.chunk.js.map