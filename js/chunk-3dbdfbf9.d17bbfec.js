(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dbdfbf9"],{"0ba8":function(e,t,n){e.exports=n.p+"img/1.1bada758.webp"},"118a":function(e,t,n){"use strict";n("db44")},"282f":function(e,t,n){e.exports=n.p+"img/0.b86aef74.webp"},"2da0":function(e,t,n){e.exports=n.p+"img/bg.0c516e0f.webp"},"356d":function(e,t,n){e.exports=n.p+"img/bg.b44b594c.webp"},"39d2":function(e,t,n){e.exports=n.p+"img/0.b86aef74.webp"},"43e6":function(e,t,n){var c={"./project1/bg.webp":"356d","./project1/slides/0.webp":"39d2","./project1/slides/1.webp":"0ba8","./project1/slides/2.webp":"546d","./project2/bg.webp":"ba82","./project2/slides/0.webp":"f4de","./project2/slides/1.webp":"ecf7","./project2/slides/2.webp":"73de","./project3/bg.webp":"2da0","./project3/slides/0.webp":"62ac","./project3/slides/1.webp":"599d","./project3/slides/2.webp":"ee7c","./project4/bg.webp":"4dbc","./project4/slides/0.webp":"282f","./project4/slides/1.webp":"859c","./project4/slides/2.webp":"6c01"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="43e6"},"4dbc":function(e,t,n){e.exports=n.p+"img/bg.2c66fedf.webp"},"546d":function(e,t,n){e.exports=n.p+"img/2.549f5acd.webp"},"599d":function(e,t,n){e.exports=n.p+"img/1.1bada758.webp"},"62ac":function(e,t,n){e.exports=n.p+"img/0.b86aef74.webp"},"6c01":function(e,t,n){e.exports=n.p+"img/2.549f5acd.webp"},"6e27":function(e,t,n){"use strict";n("9cd8")},"73de":function(e,t,n){e.exports=n.p+"img/2.549f5acd.webp"},"7c50":function(e,t,n){},"84d4":function(e,t,n){var c={"./project1/bg.webp":"356d","./project2/bg.webp":"ba82","./project3/bg.webp":"2da0","./project4/bg.webp":"4dbc"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="84d4"},"859c":function(e,t,n){e.exports=n.p+"img/1.1bada758.webp"},"96bf":function(e,t,n){"use strict";n.r(t);var c=n("7a23");n("d81d"),n("a630"),n("3ca3"),n("d3b7"),n("ddb0"),n("99af"),n("b0c0");function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(c["E"])(0);function r(){n.value=t?(n.value+e)%(e+1):Math.max(n.value-1,0)}function o(){n.value=t?(n.value+1)%(e+1):Math.min(n.value+1,e)}return{selected:n,prev:r,next:o}}var o={class:"img"},s=["alt","src"],i={class:"control"},a={class:"progress"},b=["onMousedown"],p=Object(c["l"])({props:{srcs:null},setup:function(e){var t=e,n=r(t.srcs.length-1),p=n.selected,u=n.prev,l=n.next;return function(t,n){return Object(c["y"])(),Object(c["g"])("div",{class:"body",onKeypress:[n[2]||(n[2]=Object(c["P"])((function(){return t.left&&t.left.apply(t,arguments)}),["left"])),n[3]||(n[3]=Object(c["P"])((function(){return t.right&&t.right.apply(t,arguments)}),["right"]))]},[Object(c["h"])("div",o,[Object(c["h"])("div",{style:Object(c["s"])({"--selected":Object(c["K"])(p)}),class:"slide-list"},[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(e.srcs,(function(e){return Object(c["y"])(),Object(c["g"])("img",{key:e,alt:"slide ".concat(e),src:e,class:"slide"},null,8,s)})),128))],4)]),Object(c["h"])("div",i,[Object(c["h"])("div",{class:"arrow",onMousedown:n[0]||(n[0]=function(){return Object(c["K"])(u)&&Object(c["K"])(u).apply(void 0,arguments)})},null,32),Object(c["h"])("div",a,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(e.srcs,(function(e,t){return Object(c["y"])(),Object(c["g"])("span",{key:e,class:Object(c["r"])([{selected:t===Object(c["K"])(p)},"point"]),onMousedown:function(e){return p.value=t}},null,42,b)})),128))]),Object(c["h"])("div",{class:"arrow",onMousedown:n[1]||(n[1]=function(){return Object(c["K"])(l)&&Object(c["K"])(l).apply(void 0,arguments)})},null,32)])],32)}}}),u=(n("6e27"),n("6b0d")),l=n.n(u);const d=l()(p,[["__scopeId","data-v-b21ab3ba"]]);var j=d,f={class:"info"},O={class:"desc"},g={class:"title"},m=["alt","src"],w=Object(c["l"])({props:{name:null,desc:null,dir:null},setup:function(e){var t=e,r=Object(c["E"])(!0),o=Object(c["c"])((function(){return n("84d4")("./".concat(t.dir,"/bg.webp"))})),s=Object(c["c"])((function(){return Array.from(Array(3).keys()).map((function(e){return n("43e6")("./".concat(t.dir,"/slides/").concat(e,".webp"))}))}));return function(e,n){return Object(c["y"])(),Object(c["g"])("div",{class:Object(c["r"])([{loading:r.value},"sector"]),style:Object(c["s"])({"--src":"url(".concat(Object(c["K"])(o),")")})},[Object(c["h"])("div",f,[Object(c["k"])(j,{srcs:Object(c["K"])(s),class:"carousel"},null,8,["srcs"]),Object(c["h"])("div",O,Object(c["J"])(t.desc),1)]),Object(c["h"])("div",g,Object(c["J"])(t.name),1),r.value?(Object(c["y"])(),Object(c["g"])("img",{key:0,alt:"project ".concat(t.name),src:Object(c["K"])(o),class:"cover",hidden:"",onLoad:n[0]||(n[0]=function(e){return r.value=!1})},null,40,m)):Object(c["f"])("",!0)],6)}}});n("f8a4");const h=l()(w,[["__scopeId","data-v-2d6dcbcc"]]);var v=h,y=n("47e2"),_={class:"page"},x=Object(c["l"])({setup:function(e){var t=Object(y["b"])(),n=t.t,r=["project1","project2","project3","project4"];return function(e,t){return Object(c["y"])(),Object(c["g"])("div",_,[(Object(c["y"])(),Object(c["g"])(c["a"],null,Object(c["F"])(r,(function(e){return Object(c["k"])(v,{key:e,desc:Object(c["K"])(n)("".concat(e,".desc")),dir:e,name:Object(c["K"])(n)("".concat(e,".name")),class:"sector"},null,8,["desc","dir","name"])})),64))])}}}),z=(n("118a"),function(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"en",resource:{project1:{name:e=>{const{normalize:t}=e;return t(["Project 1"])},desc:e=>{const{normalize:t}=e;return t(["Really interesting description of the no less interesting project.\nDescription is longer then the short one, but shorter then the long one"])}},project2:{name:e=>{const{normalize:t}=e;return t(["Project 2"])},desc:e=>{const{normalize:t}=e;return t(["Really interesting description of the no less interesting project.\nDescription is longer then the short one, but shorter then the long one"])}},project3:{name:e=>{const{normalize:t}=e;return t(["Project 3"])},desc:e=>{const{normalize:t}=e;return t(["Really interesting description of the no less interesting project.\nDescription is longer then the short one, but shorter then the long one"])}},project4:{name:e=>{const{normalize:t}=e;return t(["Project 4"])},desc:e=>{const{normalize:t}=e;return t(["Really interesting description of the no less interesting project.\nDescription is longer then the short one, but shorter then the long one"])}}}})}),k=function(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"ru",resource:{project1:{name:e=>{const{normalize:t}=e;return t(["Проект 1"])},desc:e=>{const{normalize:t}=e;return t(["Очень интересное описание не менее интересного проекта.\nОписание длиннее короткого, но короче длинного"])}},project2:{name:e=>{const{normalize:t}=e;return t(["Проект 2"])},desc:e=>{const{normalize:t}=e;return t(["Очень интересное описание не менее интересного проекта.\nОписание длиннее короткого, но короче длинного"])}},project3:{name:e=>{const{normalize:t}=e;return t(["Проект 3"])},desc:e=>{const{normalize:t}=e;return t(["Очень интересное описание не менее интересного проекта.\nОписание длиннее короткого, но короче длинного"])}},project4:{name:e=>{const{normalize:t}=e;return t(["Проект 4"])},desc:e=>{const{normalize:t}=e;return t(["Очень интересное описание не менее интересного проекта.\nОписание длиннее короткого, но короче длинного"])}}}})};"function"===typeof z&&z(x),"function"===typeof k&&k(x);const K=l()(x,[["__scopeId","data-v-5f0598c8"]]);t["default"]=K},"9cd8":function(e,t,n){},ba82:function(e,t,n){e.exports=n.p+"img/bg.8c3669d0.webp"},db44:function(e,t,n){},ecf7:function(e,t,n){e.exports=n.p+"img/1.1bada758.webp"},ee7c:function(e,t,n){e.exports=n.p+"img/2.549f5acd.webp"},f4de:function(e,t,n){e.exports=n.p+"img/0.b86aef74.webp"},f8a4:function(e,t,n){"use strict";n("7c50")}}]);
//# sourceMappingURL=chunk-3dbdfbf9.d17bbfec.js.map