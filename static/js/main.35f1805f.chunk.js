(this.webpackJsonplikewater=this.webpackJsonplikewater||[]).push([[0],{198:function(e,t,n){e.exports=n(372)},208:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),i=n(23),l=n.n(i),c=n(77),s=n(187),u=(n(207),n(110)),m=n(381),d=(n(208),n(79)),p=Object(d.c)({accessToken:"pk.eyJ1IjoicmVrdGRlY2thcmQiLCJhIjoiY2theWJ4OXM0MGhiejJ3cnkzcmk0andiYyJ9.IinlG0vyUvcWhvlAREJXeA"}),v=[10],h=[{mentions:4.96,lastMention:1591135064030,location:[-73.978698,40.685457]},{mentions:1.22,lastMention:159113501e4,location:[-74.011379,40.708201]},{mentions:2.4,lastMention:1591134911238,location:[-73.987529,40.752137]}],b={"heatmap-weight":{property:"mentions",type:"exponential",stops:[[0,0],[5,2]]},"heatmap-intensity":{stops:[[0,0],[5,1.2]]},"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.25,"rgb(103,169,207)",.5,"rgb(209,229,240)",.8,"rgb(253,219,199)",1,"rgb(239,138,98)",2,"rgb(178,24,43)"],"heatmap-radius":{stops:[[0,1],[5,50]]}},g=function(e){var t=e.position,n=e.onClick;return t?r.a.createElement("div",{style:{height:"100vh",width:"100vw"}},r.a.createElement(p,{style:"mapbox://styles/rektdeckard/ckayd52rb0xzg1imcbyek0g4y",center:t,zoom:v,containerStyle:{height:"100%",width:"100%"},onDragStart:n,onDragEnd:n},r.a.createElement(d.b,{type:"heatmap",paint:b},h.map((function(e,t){return r.a.createElement(d.a,{key:t,coordinates:e.location,properties:e})}))))):null},f=n(383),E=n(379),y=n(382),w=function(e){var t=e.visible;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{as:f.a,animation:"overlay",icon:"labeled",direction:"top",inverted:!0,vertical:!0,visible:t,width:"thin"},r.a.createElement(E.a,null)),r.a.createElement(m.a,{as:y.a,animation:"overlay",icon:"labeled",direction:"bottom",inverted:!0,size:"small",visible:t,width:"thin"},r.a.createElement(y.a.Item,null,"Map"),r.a.createElement(y.a.Item,null,"Events"),r.a.createElement(y.a.Item,null,"Report"),r.a.createElement(y.a.Item,null,"Filter"),r.a.createElement(y.a.Item,null,"SOS")))},O=Object(c.b)((function(e){return{preferences:e.preferences,events:e.events}}),{})((function(e){e.events;var t=e.preferences,n=Object(o.useState)(t.defaultPosition),a=Object(u.a)(n,2),i=a[0],l=a[1],c=Object(o.useState)(!0),s=Object(u.a)(c,2),d=s[0],p=s[1];Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.longitude,a=t.latitude;l([n,a])}),console.error,{enableHighAccuracy:!1,maximumAge:15e3,timeout:3e4})}),[]);return r.a.createElement(m.a.Pushable,{className:"no-overflow"},r.a.createElement(w,{visible:d}),r.a.createElement(m.a.Pusher,null,r.a.createElement(g,{position:i,onClick:function(e){console.log(e),p((function(e){return!e}))}})))})),k=n(37),j=n(185),_=n(57),I=(n(58),n(107),n(186)),S=(n.n(I).a.create({baseURL:""}),{dangerClose:!1,nearbyEvents:[]}),J={defaultPosition:null!==(a=JSON.parse(localStorage.getItem("update_default_position")))&&void 0!==a?a:[-78.9715041,40.7311599],eventFilter:[]},M=Object(k.c)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"fetch_events":return Object(_.a)({},e,{nearbyEvents:a});default:return e}},preferences:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"update_default_position":return Object(_.a)({},e,{defaultPosition:a});case"update_event_filter":return Object(_.a)({},e,{eventFilter:a});default:return e}}}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,C=Object(k.e)(M,{},P(Object(k.a)(j.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(s.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.35f1805f.chunk.js.map