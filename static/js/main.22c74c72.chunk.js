(this.webpackJsonpmedia=this.webpackJsonpmedia||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),i=t.n(r),c=(t(12),t(3)),l=t(4),s=t(6),u=t(5),d=(t(13),function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={reqSrc:"/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1"},e.handleTheElementClick=function(){fetch("/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1").then((function(e){return e})).then((function(n){e.setState({resSrc:n.url}),console.log("res",n)}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,n=e.reqSrc,t=e.resSrc;return o.a.createElement("div",{className:"App",onClick:this.handleTheElementClick},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,"Request from server",o.a.createElement("img",{src:n,alt:""}),o.a.createElement("span",null,n)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,"Response from server",o.a.createElement("img",{src:t,alt:""}),o.a.createElement("span",null,t))))}}]),t}(a.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/media",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/media","/sw.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(n,e)}))}}()},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.22c74c72.chunk.js.map