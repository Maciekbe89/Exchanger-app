(this.webpackJsonpexchanger=this.webpackJsonpexchanger||[]).push([[0],[,,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t.p+"static/media/pl.562edca5.svg"},function(e,a,t){e.exports=t.p+"static/media/eu.075aba9c.png"},function(e,a,t){e.exports=t.p+"static/media/usa.05615112.svg"},function(e,a,t){e.exports=t.p+"static/media/gb.d3ddd602.svg"},,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),s=t.n(c),i=(t(20),t(1)),l=t.n(i),o=t(5),u=t(6),m=t(7),p=t(13),d=t(8),h=t(14),f=(t(3),function(e){var a=(e.cash*e.ratio).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"countries"},e.title),r.a.createElement("span",{className:"cash",style:a.toString().length>5?{fontSize:"28px"}:{}},e.cash<=0?"":a))}),g=t(9),v=t.n(g),E=t(10),b=t.n(E),x=t(11),N=t.n(x),y=t(12),w=t.n(y),k=[{name:b.a,alt:"europe flag",class:"flag"},{name:N.a,alt:"usa flag",class:"flag"},{name:w.a,alt:"gb flag",class:"flag"}],j=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).intervalId=0,t.state={amount:"",currencies:[]},t.handleChange=function(e){t.setState({amount:e.target.value})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){clearInterval(this.intervalId),this.intervalId=setInterval(this.updateData.bind(this),15e3),this.updateData.bind(this)()}},{key:"updateData",value:function(){var e=Object(o.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?symbols=EUR,USD,GBP&base=PLN");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({currencies:Object.entries(t.rates).map((function(e,a){return{title:e[0],ratio:e[1],id:a}}))});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.amount,t=e.currencies;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("p",{className:"logo"},"Exchanger ",r.a.createElement("i",{className:"fas fa-comments-dollar"})),r.a.createElement("img",{className:"pl-flag",src:v.a,alt:"poland flag"}),r.a.createElement("p",{className:"pln"},"PLN"),r.a.createElement("input",{className:"input",type:"number",pattern:"\\d*",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"cta-container"},t.map((function(e){return r.a.createElement("div",{className:"currency",key:e.id},r.a.createElement("img",{src:k[e.id].name,alt:k[e.id].alt,className:k[e.id].class}),r.a.createElement(f,{ratio:e.ratio,title:e.title,cash:a}))}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.a9dcf39c.chunk.js.map