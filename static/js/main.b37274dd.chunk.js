(this["webpackJsonpweather-map"]=this["webpackJsonpweather-map"]||[]).push([[0],{114:function(e,t,r){e.exports={preloader:"preloader_preloader__NrsZe"}},131:function(e,t,r){},253:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),c=r(54),i=r.n(c),s=(r(131),r(132),function(e){e&&e instanceof Function&&Promise.resolve().then(r.bind(null,132)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))}),o=(r(81),r(11)),u=r(28),d=r(260),h=r(256),j=function(e){var t=e.viewCity,r=e.weatherForViewMode,a=e.searchCity;return r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.b,{to:"/",onClick:function(){return t(!1,"")},children:"X"}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(h.a,{variant:"flush",children:[Object(n.jsxs)(h.a.Item,{children:["City: ",a]}),Object(n.jsxs)(h.a.Item,{children:["Weather: ",r.weather[0].description]}),Object(n.jsxs)(h.a.Item,{children:["Temp: ",r.main.temp]}),Object(n.jsx)(h.a.Item,{children:r.main.feels_like}),Object(n.jsxs)(h.a.Item,{children:["Wind: ",r.wind.speed," m/s"]}),Object(n.jsxs)(h.a.Item,{children:["Humidity: ",r.main.humidity," %"]}),Object(n.jsxs)(h.a.Item,{children:["Pressure: ",r.main.pressure," hPa"]}),Object(n.jsxs)(h.a.Item,{children:["Temp max: ",r.main.temp_max]}),Object(n.jsxs)(h.a.Item,{children:["Temp min: ",r.main.temp_min]})]})})]}):Object(n.jsx)(u.b,{to:"/",onClick:function(){return t(!1,"")},children:"X"})},l=r(14),b=r(25),w=r.n(b),O=r(124),p=r(37),f=r(43),m=r(13),x=r(113).create({baseURL:"http://api.openweathermap.org/data/2.5/"}),C=function(e){return Object(p.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("weather?q=".concat(e,"&appid=30ab1cf26f05bfc030ca991aa18e3b43&lang=ru&mode=json&units=metric")).catch((function(e){return console.error(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},y="weather_card_SET_CURRENT_CITY",v="weather_card_SET_CURRENT_CITY_WEATHER",g="weather_card_SET_IS_FETCHING",_="weather_card_UPDATE_WEATHER_CARD",I="weather_card_DELETE_WEATHER_CARD",E="weather_card_TOGGLE_VIEW_MODE",T="weather_card_SET_VIEW_CITY",F="weather_card_SET_WEATHER_FOR_VIEW_MODE",W="weather_card_SET_ERROR",M={currentCity:[],weatherInCurrentCities:[],isFetching:!1,viewMode:!1,viewCityName:"",weatherForViewMode:null,error:""},k=function(e){return{type:y,city:e}},R=function(e){return{type:v,weather:e}},S=function(e,t){return{type:_,id:e,weather:t}},N=function(e){return{type:g,isFetching:e}},V=function(e){return{type:W,error:e}},D=function(e,t){return function(r){r(function(e){return{type:E,viewMode:e}}(e)),r({type:T,viewCityName:t})}},A=function(e){return function(){var t=Object(p.a)(w.a.mark((function t(r){var n,a,c,i,s,o,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(N(!0)),t.next=3,C(e).catch((function(e){return r(V("error - no data"))}));case 3:n=t.sent,a=n.statusText,c=n.data,i=c.weather,s=c.wind,o=c.main,u=c.id,"OK"===a?(r(k(e)),r(R({weather:i,wind:s,main:o,city:e,id:u})),r(N(!1))):r(V("error - no data"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)(Object(m.a)({},e),{},{currentCity:[].concat(Object(f.a)(e.currentCity),[t.city])});case v:return Object(m.a)(Object(m.a)({},e),{},{weatherInCurrentCities:[].concat(Object(f.a)(e.weatherInCurrentCities),[t.weather])});case _:return Object(m.a)(Object(m.a)({},e),{},{weatherInCurrentCities:Object(f.a)(e.weatherInCurrentCities.map((function(e){return e.id===t.id?Object(m.a)({},t.weather):e})))});case g:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case I:return Object(m.a)(Object(m.a)({},e),{},{weatherInCurrentCities:Object(f.a)(e.weatherInCurrentCities.filter((function(e){return e.id!==t.id})))});case E:return Object(m.a)(Object(m.a)({},e),{},{viewMode:t.viewMode});case T:return Object(m.a)(Object(m.a)({},e),{},{viewCityName:t.viewCityName});case F:return Object(m.a)(Object(m.a)({},e),{},{weatherForViewMode:t.weatherForViewMode});case W:return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},P=Object(l.b)((function(e){return{viewMode:e.weatherCard.viewMode,weatherForViewMode:e.weatherCard.weatherForViewMode}}),{viewCity:D,getWeatherForViewMode:function(e){return function(){var t=Object(p.a)(w.a.mark((function t(r){var n,a,c,i,s,o,u,d;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(N(!0)),t.next=3,C(e);case 3:n=t.sent,a=n.statusText,c=n.data,i=c.weather,s=c.wind,o=c.main,u=c.id,d=Object(O.a)(c,["weather","wind","main","id"]),console.log(d),"OK"===a&&r({type:F,weatherForViewMode:{weather:i,wind:s,main:o,id:u}}),r(N(!1));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getWeatherForViewMode,r=e.viewCity,c=e.viewMode,i=e.weatherForViewMode,s=Object(o.g)().location.search.replace("?","");return Object(a.useEffect)((function(){c&&s&&t(s)}),[s,t,c,i]),Object(n.jsx)(j,{weatherForViewMode:i,viewCity:r,searchCity:s})})),L=r(114),G=r.n(L),U=r.p+"static/media/preloader.9bb0fb74.svg",B=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:G.a.preloader,src:U,alt:"preloader"})})},K=r(115),Y=r(258),J=r(257),X=r(120),q=r(259),Z=r(254),z=r(121);function Q(){var e=Object(K.a)(["\n  .search_city {\n    margin-top: 50px;\n  }\n  .submit_button {\n    margin: 0 auto;\n    display: block;\n    vertical-align: middle;\n    line-height: ;\n    padding: 6px;\n    outline: none;\n    border-radius: 5px;\n    background: none;\n    color: lightslategray;\n    border: 1px solid gray;\n    transition: 1s;\n    &:hover {\n      background: grey;\n      color: #fff\n    }\n  }\n"]);return Q=function(){return e},e}var $=r(116).a.div(Q()),ee=function(e){var t=e.input,r=e.type,a=e.placeholder;return Object(n.jsx)(X.a,{type:r,placeholder:a,value:t.value,onChange:t.onChange})},te=Object(J.a)({form:"search"})((function(e){var t=e.handleSubmit;return Object(n.jsx)($,{children:Object(n.jsx)("div",{className:"search_city",children:Object(n.jsx)(q.a,{onSubmit:t,className:"search_form",children:Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(z.a,{md:7,children:Object(n.jsx)(q.a.Group,{controlId:"formBasicEmail",children:Object(n.jsx)(Y.a,{placeholder:"Enter the name of the city",name:"search",type:"text",component:ee})})}),Object(n.jsx)(z.a,{md:5,children:Object(n.jsx)("button",{className:"submit_button",children:"watch weather"})})]})})})})})),re=function(e){return Object(n.jsx)(te,{onSubmit:function(t){e.getWeather(t.search)}})},ne=Object(l.b)(null,{getWeather:A})((function(e){var t=e.getWeather;return Object(n.jsx)(re,{getWeather:t})})),ae=r(262),ce=function(e){var t=e.weather,r=t.main,a=t.weather,c=t.city,i=t.id,s=e.updateWeather,u=e.deleteCard,j=e.viewCity,l=Object(o.g)();return Object(n.jsx)(z.a,{children:Object(n.jsx)("div",{style:{width:"18rem",marginTop:"25px"},className:"weather_card",children:Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(h.a,{onClick:function(){return l.push("/view/?".concat(c)),void j(!0,c)},variant:"flush",children:[Object(n.jsxs)(h.a.Item,{style:{cursor:"pointer"},children:["City: ",c]}),Object(n.jsxs)(h.a.Item,{style:{cursor:"pointer"},children:["Weather: ",a[0].description]}),Object(n.jsxs)(h.a.Item,{style:{cursor:"pointer"},children:["Temp: ",r.temp]}),Object(n.jsxs)(h.a.Item,{style:{cursor:"pointer"},children:["Feels like: ",r.feels_like]})]}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)(ae.a,{variant:"secondary",onClick:function(){return s(c)},children:"Refresh"}),Object(n.jsx)(ae.a,{variant:"secondary",onClick:function(){return u(i,c)},children:"Delete"})]})]})})})},ie=Object(l.b)(null,{updateWeather:function(e){return function(){var t=Object(p.a)(w.a.mark((function t(r){var n,a,c,i,s,o,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:n=t.sent,a=n.statusText,c=n.data,i=c.weather,s=c.wind,o=c.main,u=c.id,"OK"===a&&r(S(u,{weather:i,wind:s,main:o,city:e,id:u}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteCard:function(e,t){return function(r){r(function(e){return{type:I,id:e}}(e));var n=localStorage.getItem("currentCity").split(",").filter((function(e){return e!==t})).join();localStorage.setItem("currentCity",n)}},viewCity:D})((function(e){var t=e.deleteCard,r=e.updateWeather,a=e.weather,c=e.viewCity;return Object(n.jsx)(ce,{deleteCard:t,updateWeather:r,weather:a,viewCity:c})})),se=Object(l.b)((function(e){return{weatherInCurrentCities:e.weatherCard.weatherInCurrentCities,isFetching:e.weatherCard.isFetching,error:e.weatherCard.error}}),{getWeather:A})((function(e){var t=e.getWeather,r=e.isFetching,c=e.weatherInCurrentCities,i=e.error;return Object(a.useEffect)((function(){var e=localStorage.getItem("currentCity");e&&!i&&e.split(",").map((function(e,r,n){n.length>c.length&&t(e)}))}),[t,c,i]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ne,{}),r?Object(n.jsx)(B,{}):null,Object(n.jsx)(Z.a,{children:c?c.map((function(e,t){return Object(n.jsx)(ie,{weather:e},t)})):null})]})})),oe=(r(252),r(255)),ue=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(oe.a,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/",component:se}),Object(n.jsx)(o.b,{path:"/view",component:P}),Object(n.jsx)(o.a,{to:"/"})]})})})},de=Object(l.b)((function(e){return{currentCity:e.weatherCard.currentCity}}))((function(e){var t=e.currentCity;return Object(a.useEffect)((function(){t.length&&localStorage.setItem("currentCity",t)}),[t]),Object(n.jsx)(ue,{})})),he=r(10),je=r(261),le=r(123),be=Object(he.c)({weatherCard:H,form:je.a}),we=Object(he.e)(be,Object(he.d)(Object(he.a)(le.a)));i.a.render(Object(n.jsx)(u.a,{children:Object(n.jsx)(l.a,{store:we,children:Object(n.jsx)(de,{})})}),document.getElementById("root")),s()},81:function(e,t,r){}},[[253,1,2]]]);
//# sourceMappingURL=main.b37274dd.chunk.js.map