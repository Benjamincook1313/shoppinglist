(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(4)),l=n(1);n(6);var u=function(e){var t=Object(a.useState)(1),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"item"},r.a.createElement("li",{className:"item",cursor:"pointer"},e.Items[e.Key]),r.a.createElement("button",{onClick:function(){o(c-1)}},"-"),r.a.createElement("input",{className:"quantity",value:c,readOnly:!0}),r.a.createElement("button",{onClick:function(){return e.Key,void o(c+1)}},"+"),r.a.createElement("button",{style:{margin:"5px"},onClick:function(){return e.deleteItem(e.Key)}},"remove"))};var s=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(["Apples","Bananas","Cherries","Tomatoes","Potatoes"]),s=Object(l.a)(o,2),m=s[0],p=s[1],v=Object(a.useState)(null),d=Object(l.a)(v,2),b=d[0],f=d[1],h=m.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(u,{deleteItem:function(){return function(e){var t=Object(i.a)(m);t.splice(e,1),p(t)}(t)},handleMove:function(){return function(e){var t=Object(i.a)(m),n=t[e];b&&(t[e]=t[b],t[b]=n,f(e),p(t))}(t)},setGrabbed:function(){return f(t)},Items:m,Key:t}))}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Shopping list"),r.a.createElement("ol",null,h),r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(e){return p([].concat(Object(i.a)(m),[n]))/c("")}},"Add")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7fd3cd66.chunk.js.map