
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dfce78b"],{"1b20":function(t,e,o){},"4df2":function(t,e,o){"use strict";o("1b20")},"95e8":function(t,e,o){"use strict";o.r(e);var n=o("7a23"),a=o("a8ff"),r=o.n(a),i=o("da65");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(t,e){var o=e.options,n=e.callbacks,a=e.map,r=e.useObjectManager,i=e.objectManagerClusterize,s=e.useHtmlInLayout?'\n    <div v-html="properties.balloonContentHeader"></div>\n    <div v-html="properties.balloonContentBody"></div>\n    <div v-html="properties.balloonContentFooter"></div>\n  ':"\n    <div>{{ properties.balloonContentHeader }}</div>\n    <div>{{ properties.balloonContentBody }}</div>\n    <div>{{ properties.balloonContentFooter }}</div>\n  ",c={},l=[];if(t.forEach((function(t){t.clusterName?c[t.clusterName]=c[t.clusterName]?[].concat(u(c[t.clusterName]),[t]):[t]:l.push(t)})),Object.keys(c).forEach((function(t){var e=o[t]||{},l=n[t]||{},u=e.layout||s;e.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(u);var p=e.clusterBalloonLayout||e.clusterLayout;delete e.clusterBalloonLayout;var d=p?ymaps.templateLayoutFactory.createClass(p):e.clusterBalloonContentLayout||"cluster#balloonTwoColumns";e.clusterBalloonContentLayout=d;var m=e.clusterIconContentLayout;if(e.clusterIconContentLayout=m&&ymaps.templateLayoutFactory.createClass(m),r){var h=new ymaps.ObjectManager(Object.assign({clusterize:i},e));Object.keys(l).forEach((function(t){h.clusters.events.add(t,l[t])})),h.add(c[t]),a.geoObjects.add(h)}else{var f=new ymaps.Clusterer(e);Object.keys(l).forEach((function(t){f.events.add(t,l[t])})),e.createCluster&&(f.createCluster=e.createCluster),f.add(c[t]),a.geoObjects.add(f)}})),l.length){var p=r?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach((function(t){return p.add(t)})),a.geoObjects.add(p)}}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function m(t){return(t.icon.color||"blue")+(t.icon.glyph?d(t.icon.glyph):t.icon.content?"Stretchy":"")}function h(t){return t.map((function(t){return Array.isArray(t)?h(t):+t}))}function f(t,e){var o=[];return function t(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date)return+e==+n;if("object"!==s(e)||"object"!==s(n))return!1;if(function(t,e){for(var n=o.length;n--;)if(!(o[n][0]!==t&&o[n][0]!==e||o[n][1]!==e&&o[n][1]!==t))return!0;return!1}(e,n))return!0;o.push([e,n]);var a=Object.keys(e),r=a.length;if(Object.keys(n).length!==r)return!1;for(;r--;)if(!t(e[a[r]],n[a[r]]))return!1;return!0}(t,e)}var b=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var e,o,n;return e=t,(o=[{key:"$on",value:function(t,e){var o=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){o.events[t]=o.events[t].filter((function(t){return e!==t}))}}},{key:"$emit",value:function(t,e){var o=this.events[t];o&&o.forEach((function(t){return t(e)}))}}])&&c(e.prototype,o),n&&c(e,n),t}()),y=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function k(t){return 0===t.filter((function(t){return![].concat(y,["default"]).includes(t)})).length}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,o){if(window.ymaps)return e();if(document.getElementById("vue-yandex-maps"))b.$on("scriptIsLoaded",e);else{var n=document.createElement("SCRIPT"),a=t.apiKey,r=void 0===a?"":a,i=t.lang,s=void 0===i?"ru_RU":i,c=t.version,l=void 0===c?"2.1":c,u=t.coordorder,p=void 0===u?"latlong":u,d=t.debug,m=void 0!==d&&d,h=t.enterprise,f=void 0!==h&&h,y=m?"debug":"release",k="lang=".concat(s).concat(r&&"&apikey=".concat(r),"&mode=").concat(y,"&coordorder=").concat(p),v="https://".concat(f?"enterprise.":"","api-maps.yandex.ru/").concat(l,"/?").concat(k);n.setAttribute("src",v),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),b.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready((function(){b.ymapReady=!0,b.$emit("scriptIsLoaded"),e()}))},n.onerror=o}}))}var g,O=1,j=b,C=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],M={pluginOptions:{},provide:function(){var t,e,o,n,a,r,i=this,s=[],c=[];return null!=this.balloonComponent&&(n=this.balloonComponent,a=null,r="vue-balloon-".concat(O),O+=1,o=function(t,e){var o=ymaps.templateLayoutFactory.createClass('<div id="'.concat(r,'"><div>'),{build:function(){o.superclass.build.call(this),(a=new g({parent:t.$root,data:function(){return{props:t.$props,listeners:t.$listeners}},propsData:{marker:e,component:n}})).$mount("#".concat(r))},clear:function(){a.$destroy(),a=null,o.superclass.clear.call(this)}});return o}),{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){i.$options.static.myMap.geoObjects&&(s.push(e),t&&clearTimeout(t),t=setTimeout((function(){i.deleteMarkers(s),s=[]}),0))},compareValues:function(t){var o=t.newVal,n=t.oldVal,a=t.marker;f(o,n)||(c.push(a),e&&clearTimeout(e),e=setTimeout((function(){i.setMarkers(c),c=[]}),0))},makeComponentBalloonTemplate:o}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null}},static:{myMap:{},markers:[]},props:{coords:{type:Array,required:!0},zoom:{validator:function(t){return!Number.isNaN(t)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return k(t)}},detailedControls:{type:Object,validator:function(t){return k(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},mapEvents:{type:Array,default:function(){return[]}},showAllMarkers:Boolean,disablePan:Boolean,balloonComponent:{type:[Object,Function],default:function(){return null}},useHtmlInLayout:Boolean},computed:{coordinates:function(){return this.coords.map((function(t){return+t}))}},methods:{init:function(){var t=this;window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default()||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.$options.static.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),(this.mapEvents.length?this.mapEvents:C).forEach((function(e){return t.$options.static.myMap.events.add(e,(function(o){return t.$emit(e,o)}))})),this.$options.static.myMap.events.add("boundschange",(function(e){var o=e.originalEvent,n=o.newZoom,a=o.newCenter,r=o.newBounds;t.$emit("boundschange",e),t.$emit("update:zoom",n),t.$emit("update:coords",a),t.$emit("update:bounds",r)})),this.detailedControls&&Object.keys(this.detailedControls).forEach((function(e){t.$options.static.myMap.controls.remove(e),t.$options.static.myMap.controls.add(e,t.detailedControls[e])})),!1===this.scrollZoom&&this.$options.static.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.$options.static.myMap))},addMarker:function(t){var e=this;this.$options.static.markers.push(t),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.setMarkers(e.$options.static.markers)}),0)},setMarkers:function(t){var e=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.$options.static.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize,useHtmlInLayout:this.useHtmlInLayout};if(this.$options.static.markers!==t){var n=t.map((function(t){return e.useObjectManager?t.id:t.properties.get("markerId")}));this.deleteMarkers(n),p(t,o),this.$emit("markers-was-change",n)}else p(t,o);this.$options.static.markers=[],this.showAllMarkers&&this.$options.static.myMap.setBounds(this.$options.static.myMap.geoObjects.getBounds())},deleteMarkers:function(t){var e=this;this.$options.static.myMap.geoObjects.each((function(o){var n=[];if(e.useObjectManager)o.remove(t);else{var a,r=function(e){var o=e.properties.get("markerId");t.includes(o)&&n.push(e)};if(o.each)o.each(r),a=o.getLength();else if(o.getGeoObjects){var i=o.getGeoObjects();i.forEach(r),a=i.length}0===a||a===n.length?e.$options.static.myMap.geoObjects.remove(o):n.length&&n.forEach((function(t){return o.remove(t)}))}})),this.$emit("markers-was-delete",t)}},watch:{coordinates:function(t){this.disablePan?this.$options.static.myMap.setCenter&&this.$options.static.myMap.setCenter(t):this.$options.static.myMap.panTo&&this.$options.static.myMap.getZoom()&&this.$options.static.myMap.panTo(t,{checkZoomRange:!0})},zoom:function(){this.$options.static.myMap.setZoom(this.zoom)},bounds:function(t){this.$options.static.myMap.setBounds&&this.$options.static.myMap.setBounds(t)}},render:function(){return Object(n["n"])("section",{class:"ymap-container",ref:"mapContainer"},[Object(n["n"])("div",{id:this.ymapId,class:this.ymapClass,style:this.style}),this.isReady&&Object(n["n"])("div",[this.$slots.default()])])},mounted:function(){var t=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver((function(){t.$options.static.myMap.container&&t.$options.static.myMap.container.fitToViewport()}));var e=this.$refs.mapContainer;if(this.mapObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),j.scriptIsNotAttached){var o=this.debug;v(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){l(t,e,o[e])}))}return t}({},this.$options.pluginOptions,this.settings,{debug:o}))}j.ymapReady?ymaps.ready(this.init):j.$on("scriptIsLoaded",this.init)},beforeUnmount:function(){this.$options.static.myMap.geoObjects&&this.$options.static.myMap.geoObjects.removeAll()}},w=["placemark","polyline","rectangle","polygon","circle"],$=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],L={inject:["useObjectManager","addMarker","deleteMarker","compareValues","makeComponentBalloonTemplate"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return w.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(t){return!Number.isNaN(t)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object,balloonComponentProps:{type:Object,default:function(){return{}}},markerEvents:{type:Array,default:function(){return[]}}},data:function(){return{unwatchArr:[]}},render:function(){return this.$slots.balloon&&Object(n["n"])("div",{style:"display: none;"},[this.$slots.balloon()])},mounted:function(){var t=this;Object.keys(this.$props).forEach((function(e){"balloonComponentProps"!==e&&t.unwatchArr.push(t.$watch(e,(function(e,o){return t.compareValues({newVal:e,oldVal:o,marker:t.defineMarker()})})))})),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var t=this,e={markerId:this.markerId,markerType:this.markerType||"placemark",coords:h(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:{}},o=null;this.balloonTemplate&&(o=ymaps.templateLayoutFactory.createClass(this.balloonTemplate)),this.$slots.balloon&&(o=ymaps.templateLayoutFactory.createClass(this.$slots.balloon()[0].elm.outerHTML)),this.makeComponentBalloonTemplate&&(o=this.makeComponentBalloonTemplate(this,e)),null!=o&&(e.balloonOptions.balloonContentLayout=o),this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(e.iconContent=this.icon.content,e.iconLayout=this.icon.layout,e.iconImageHref=this.icon.imageHref,e.iconImageSize=this.icon.imageSize,e.iconImageOffset=this.icon.imageOffset,e.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(e.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):e.icon=this.icon;var n=function(t,e){var o=d(t);if(!e)return o;switch(o){case"Placemark":return"Point";case"Polyline":return"LineString";default:return o}}(e.markerType,this.useObjectManager),a={hintContent:e.hintContent,iconContent:e.icon?e.icon.content:e.iconContent,markerId:e.markerId},r=e.balloon?{balloonContentHeader:e.balloon.header,balloonContentBody:e.balloon.body,balloonContentFooter:e.balloon.footer}:{},i=Object.assign(a,r,e.properties),s=e.iconLayout?{iconLayout:e.iconLayout,iconImageHref:e.iconImageHref,iconImageSize:e.iconImageSize,iconImageOffset:e.iconImageOffset,iconContentOffset:e.iconContentOffset,iconContentLayout:e.iconContentLayout}:{preset:e.icon&&"islands#".concat(m(e),"Icon")},c=e.markerStroke?{strokeColor:e.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(e.markerStroke.opacity)>=0?parseFloat(e.markerStroke.opacity):1,strokeStyle:e.markerStroke.style,strokeWidth:parseFloat(e.markerStroke.width)>=0?parseFloat(e.markerStroke.width):1}:{},l=e.markerFill?{fill:e.markerFill.enabled||!0,fillColor:e.markerFill.color||"0066ff99",fillOpacity:parseFloat(e.markerFill.opacity)>=0?parseFloat(e.markerFill.opacity):1,fillImageHref:e.markerFill.imageHref||""}:{},u=Object.assign(s,c,l,e.balloonOptions,e.options);"Circle"===n&&(e.coords=[e.coords,e.circleRadius]);var p=function(t,e){var o=e?{type:"Feature",id:t.properties.markerId,geometry:{type:t.markerType,coordinates:t.coords},properties:t.properties,options:t.options}:new ymaps[t.markerType](t.coords,t.properties,t.options);return o.clusterName=t.clusterName,o}({properties:i,options:u,markerType:n,coords:e.coords,clusterName:e.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||(this.markerEvents.length?this.markerEvents:$).forEach((function(e){return p.events.add(e,(function(o){return t.$emit(e,o)}))})),p}},beforeUnmount:function(){this.unwatchArr.forEach((function(t){return t()})),this.deleteMarker(this.markerId)}};M.install=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,M.pluginOptions=o,e.component("yandex-map",M),e.component("ymap-marker",L))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(M);var I=M,z=L,A=o("47e2"),S={class:"page"},F={class:"content-outer"},T={class:"info"},E={class:"title"},B={class:"speciality"},_={class:"link-list"},N={class:"link"},R=["href"],H={class:"link"},P=["href"],V={class:"info"},x={class:"title"},K={class:"link-list"},J={class:"link"},Z=["href"],D={class:"link"},U=["href"],W={class:"link"},G=["href"],Y=Object(n["l"])({setup:function(t){var e=Object(A["b"])(),o=e.t,a=Object(n["C"])({manager:!0,laboratory:!0}),s={phone:"+7 (968) 082-53-63",mail:"iykhasanshin@fa.ru"},c={vk:"https://vk.com/robotics_laboratory",mail:"fa.robotics.laboratory@gmail.com",address:{coords:[55.7179,37.7955],href:"https://yandex.ru/maps/213/moscow/house/4_y_veshnyakovskiy_proyezd_4s3/Z04YcQ5lT0ADQFtvfXtweX9mYA==/?ll=37.795608%2C55.718049&z=18.52"}},l={header:o("balloon.header"),body:o("balloon.body"),footer:o("balloon.footer")};return function(t,e){return Object(n["y"])(),Object(n["g"])("div",S,[Object(n["h"])("div",F,[Object(n["h"])("div",{class:Object(n["r"])([{loading:Object(n["K"])(a).manager},"block manager"])},[Object(n["h"])("img",{alt:"manager photo",class:"overview",src:r.a,onLoad:e[0]||(e[0]=function(t){return Object(n["K"])(a).manager=!1})},null,32),Object(n["h"])("div",T,[Object(n["h"])("span",E,Object(n["J"])(Object(n["K"])(o)("manager.name")),1),Object(n["h"])("span",B,Object(n["J"])(Object(n["K"])(o)("manager.spec")),1),Object(n["h"])("div",_,[Object(n["h"])("span",N,[Object(n["h"])("a",{href:"tel:".concat(s.phone),class:"icon-outer",target:"_blank"},[Object(n["k"])(i["a"],{class:"icon",icon:"phone",sprite:"contacts"})],8,R),Object(n["j"])(" "+Object(n["J"])(s.phone),1)]),Object(n["h"])("span",H,[Object(n["h"])("a",{href:"mailto:".concat(s.mail),class:"icon-outer",target:"_blank"},[Object(n["k"])(i["a"],{class:"icon",icon:"mail",sprite:"contacts"})],8,P),Object(n["j"])(" "+Object(n["J"])(s.mail),1)])])])],2),Object(n["h"])("div",{class:Object(n["r"])([{loading:Object(n["K"])(a).laboratory},"block laboratory"])},[Object(n["h"])("div",V,[Object(n["h"])("span",x,Object(n["J"])(Object(n["K"])(o)("laboratory.title")),1),Object(n["h"])("div",K,[Object(n["h"])("span",J,[Object(n["h"])("a",{href:c.vk,class:"icon-outer",target:"_blank"},[Object(n["k"])(i["a"],{class:"icon",icon:"vk",sprite:"contacts"})],8,Z),Object(n["j"])(" "+Object(n["J"])(c.vk),1)]),Object(n["h"])("span",D,[Object(n["h"])("a",{href:"mailto:".concat(c.mail),class:"icon-outer",target:"_blank"},[Object(n["k"])(i["a"],{class:"icon",icon:"mail",sprite:"contacts"})],8,U),Object(n["j"])(" "+Object(n["J"])(c.mail),1)]),Object(n["h"])("span",W,[Object(n["h"])("a",{href:c.address.href,class:"icon-outer",target:"_blank"},[Object(n["k"])(i["a"],{class:"icon",icon:"location",sprite:"contacts"})],8,G),Object(n["j"])(" "+Object(n["J"])(Object(n["K"])(o)("laboratory.address")),1)])])]),Object(n["k"])(Object(n["K"])(I),{coords:c.address.coords,class:"overview",zoom:"16",onMapWasInitialized:e[1]||(e[1]=function(t){return Object(n["K"])(a).laboratory=!1})},{default:Object(n["N"])((function(){return[Object(n["k"])(Object(n["K"])(z),{balloon:l,coords:c.address.coords,"hint-content":"FA Robotics Laboratory","marker-id":"FA Robotics Laboratory"},null,8,["coords"])]})),_:1},8,["coords"])],2)])])}}}),q=(o("4df2"),function(t){t.__i18n=t.__i18n||[],t.__i18n.push({locale:"en",resource:{manager:{name:t=>{const{normalize:e}=t;return e(["Ilshat Yadykarovich Khasanshin"])},spec:t=>{const{normalize:e}=t;return e(["Head of Robotics Laboratory"])}},laboratory:{title:t=>{const{normalize:e}=t;return e(["Laboratory"])},address:t=>{const{normalize:e}=t;return e(["Moscow, 4th Veshnyakovsky pr., 4, building 3, 5th floor, room 3510"])}},balloon:{header:t=>{const{normalize:e}=t;return e(["Financial University Laboratory"])},body:t=>{const{normalize:e}=t;return e(["Educational and scientific laboratory of robotics, Internet of things\nand embedded systems was created on the basis of the Faculty of IT & ABD"])},footer:t=>{const{normalize:e}=t;return e(["building 3, floor 5, room 3510"])}}}})}),Q=function(t){t.__i18n=t.__i18n||[],t.__i18n.push({locale:"ru",resource:{manager:{name:t=>{const{normalize:e}=t;return e(["Ильшат Ядыкарович Хасаншин"])},spec:t=>{const{normalize:e}=t;return e(["Руководитель Лаборатории Робототехники"])}},laboratory:{title:t=>{const{normalize:e}=t;return e(["Лаборатория"])},address:t=>{const{normalize:e}=t;return e(["г. Москва, 4-й Вешняковский пр., 4, стр. 3, 5-й этаж, ауд. 3510"])}},balloon:{header:t=>{const{normalize:e}=t;return e(["Лаборатория Финансового Университета"])},body:t=>{const{normalize:e}=t;return e(["Учебно-научная лаборатория робототехники, интернета вещей\nи встраиваемых систем создана на базе Факультета ИТиАБД"])},footer:t=>{const{normalize:e}=t;return e(["3 корпус, 5 этаж, 3510 аудитория"])}}}})},X=o("6b0d"),tt=o.n(X);"function"===typeof q&&q(Y),"function"===typeof Q&&Q(Y);const et=tt()(Y,[["__scopeId","data-v-3994079e"]]);e["default"]=et},a8ff:function(t,e,o){t.exports=o.p+"img/manager.f6a7fedd.webp"}}]);
//# sourceMappingURL=chunk-2dfce78b.eac82907.js.map
