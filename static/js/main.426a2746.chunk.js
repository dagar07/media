(this.webpackJsonpmedia=this.webpackJsonpmedia||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),c=(t(12),t(3)),l=t(4),s=t(6),d=t(5),u=(t(13),function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={reqSrc:"/media/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1"},e.handleTheElementClick=function(){fetch("/media/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1").then((function(e){return e})).then((function(n){e.setState({resSrc:n.url})}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,n=e.reqSrc,t=e.resSrc;return r.a.createElement("div",{className:"App",onClick:this.handleTheElementClick},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,"Request from server",r.a.createElement("img",{src:n,alt:""}),r.a.createElement("span",{className:"word-break"},n)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Response from server",r.a.createElement("img",{src:t,alt:""}),r.a.createElement("span",{className:"word-break"},t))))}}]),t}(a.Component)),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/media",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/media","/sw.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.426a2746.chunk.js.map