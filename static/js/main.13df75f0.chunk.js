(this.webpackJsonpprojectreact=this.webpackJsonpprojectreact||[]).push([[0],{237:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(82),i=a.n(r),s=(a(88),a(22)),o=a.n(s),l=a(23);a(90);var u=function(e){var t,a,n=e.title,r=e.calories,i=e.image,s=e.ingredients,o=e.url;return c.a.createElement("div",{className:"recipe"},c.a.createElement("h1",null,n),c.a.createElement("p",null,"Calories: ",(t=r,a=0,Number(Math.round(t+"e"+a)+"e-"+a))),c.a.createElement("div",{className:"ingredients"},"Ingredients"),c.a.createElement("ul",{className:"ingredient"},s.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("img",{className:"image",src:i,alt:""}),c.a.createElement("a",{className:"recipe-link",href:o},"Recipe"))},m=(a(91),a(92),a(93),a(101),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)(""),f=Object(l.a)(d,2),h=f[0],b=f[1];Object(n.useEffect)((function(){g()}),[h]);var g=function(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("92c867da","&app_key=").concat("430b2e13b5f74eeda561b7536e06b5e6")));case 2:return e=a.sent,a.next=5,o.a.awrap(e.json());case 5:t=a.sent,r(t.hits),console.log(t.hits);case 8:case"end":return a.stop()}}))};return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(m),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("h1",{className:"header"},"Search above to find great new recipes!"),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(u,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,a){e.exports=a(237)},88:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},92:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.13df75f0.chunk.js.map