(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3QRFt",total:"Cart_total__Z_b5H",actions:"Cart_actions__INb4K","button--alt":"Cart_button--alt__2nRqK",button:"Cart_button__2gHp9"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3BTH0",summary:"CartItem_summary__2979S",price:"CartItem_price__2gITU",amount:"CartItem_amount__FXSRk",actions:"CartItem_actions__bOSyq"}},,function(e,t,n){e.exports={button:"HeaderButton_button__MqQ_Q",icon:"HeaderButton_icon__2HmFG",badge:"HeaderButton_badge__dgAyX",bump:"HeaderButton_bump__2mblX"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1LXZy",description:"MealItem_description__vQYdm",price:"MealItem_price__24UJq"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3WZbD",modal:"Modal_modal__cDKub","slide-down":"Modal_slide-down__3uH1k"}},function(e,t,n){e.exports={header:"Header_header__3rTb-","main-image":"Header_main-image__3ME0A"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__ydmNb","meals-appear":"AvailableMeals_meals-appear__TFIHy"}},function(e,t,n){e.exports={input:"Input_input__3MIaC"}},function(e,t,n){e.exports={form:"MealForm_form__3KaQS"}},function(e,t,n){e.exports={card:"Card_card__2f3ry"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3YQjj"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(13),l=n(2),m=o.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),u=n(0),d={items:[],totalAmount:0},j=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.amount*t.item.price,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(l.a)(Object(l.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(s.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,m=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[m],j=e.totalAmount-u.price;if(1===u.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(o=Object(s.a)(e.items))[m]=b}return{items:o,totalAmount:j}}return d},b=function(e){var t=Object(r.useReducer)(j,d),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(m.Provider,{value:o,children:e.children})},O=n(12),p=n.n(O),x=n.p+"static/media/meals.2971f633.jpg",_=n(7),h=n.n(_),f=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},v=function(e){var t=Object(r.useContext)(m),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1],s=t.items,l=s.reduce((function(e,t){return e+t.amount}),0),d="".concat(h.a.button," ").concat(c?h.a.bump:"");return Object(r.useEffect)((function(){if(0!==l){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[s,l]),Object(u.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(u.jsx)("span",{className:h.a.icon,children:Object(u.jsx)(f,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:h.a.badge,children:l})]})},C=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("h1",{className:p.a.header,children:["ReactMeals",Object(u.jsx)(v,{onClick:e.onShow})]}),Object(u.jsx)("div",{className:p.a["main-image"],children:Object(u.jsx)("img",{src:x,alt:"A table full of delicious food"})})]})},g=n(16),y=n.n(g),A=n(17),N=n.n(A),I=o.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:N.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(l.a)({ref:t},e.input))]})})),M=n(18),H=n.n(M),k=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsxs)("form",{className:H.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?o(!1):e.onAddToCart(c)},children:[Object(u.jsx)(I,{ref:t,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!c&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},w=n(10),F=n.n(w),S=function(e){var t=Object(r.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:F.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:F.a.description,children:e.description}),Object(u.jsx)("div",{className:F.a.price,children:n})]}),Object(u.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})]})},R=n(19),B=n.n(R),T=function(e){return Object(u.jsx)("div",{className:B.a.card,children:e.children})},D=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(){var e=D.map((function(e){return Object(u.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("div",{className:y.a.meals,children:Object(u.jsx)(T,{children:Object(u.jsx)("ul",{children:e})})})},Q=n(20),q=n.n(Q),z=function(){return Object(u.jsxs)("section",{className:q.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},K=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(z,{}),Object(u.jsx)(E,{})]})},P=n(4),X=n.n(P),Y=n(11),J=n.n(Y),V=n(8),Z=n.n(V),$=document.getElementById("overlays"),G=function(e){return Object(u.jsx)("div",{className:J.a.backdrop,onClick:e.onClose})},U=function(e){return Object(u.jsx)("div",{className:J.a.modal,children:Object(u.jsx)("div",{className:J.a.children,children:e.children})})},L=function(e){return Object(u.jsxs)(r.Fragment,{children:[Z.a.createPortal(Object(u.jsx)(G,{onClose:e.onClose}),$),Z.a.createPortal(Object(u.jsx)(U,{children:e.children}),$)]})},W=n(5),ee=n.n(W),te=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:ee.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:ee.a.summary,children:[Object(u.jsx)("span",{className:ee.a.price,children:t}),Object(u.jsxs)("span",{className:ee.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:ee.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ne=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=function(e){t.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},c=t.items.length>0,i=Object(u.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(te,{amount:e.amount,name:e.name,price:e.price,onRemove:function(){return n=e.id,void t.removeItem(n);var n},onAdd:a.bind(null,e)},e.id)}))});return Object(u.jsxs)(L,{onClose:e.onClose,children:[i,Object(u.jsxs)("div",{className:X.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:X.a.actions,children:[Object(u.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(u.jsx)("button",{className:X.a.button,children:"Order"})]})]})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(b,{children:[n&&Object(u.jsx)(ne,{onClose:function(){a(!1)}}),Object(u.jsx)(C,{onShow:function(){a(!0)}}),Object(u.jsx)(K,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.464c3e9a.chunk.js.map