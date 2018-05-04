webpackJsonp([0],{"/qaa":function(t,e,n){"use strict";var i=n("AA3o"),o=n.n(i),r=n("xSur"),a=n.n(r),u="yb_uid",s="verify_request",c=function(){function t(e){o()(this,t),this.httpRequest=e}return a()(t,[{key:"fetchTokenByText",value:function(t,e,n){var i=new FormData;return i.append("appName",t),i.append("vq",n),i.append("device",e),fetch(this.httpRequest.commonUrl+"/auth",{method:"POST",body:i}).then(function(t){return t.json()}).then(function(t){return window.sessionStorage.token=t.token,t.token})}}]),t}();var h=function(){var t={},e=window.location.href.split("?")[1].split("&");console.log(e);for(var n=0;n<e.length;n++)t[e[n].split("=")[0]]=e[n].split("=")[1];return t},f=function(){function t(e,n,i,r){o()(this,t),this.yibanIdKey=u,this.vqKey=s,this.vqUrl=e,this.httpRequest=n,this.appName=i,this.device=r}return a()(t,[{key:"fetchVq",value:function(){!1===this.haveVq()&&(window.localStorage.backUrl=window.location.href,window.location=this.vqUrl)}},{key:"haveVq",value:function(){var t=this.getVq();return null!==t&&void 0!==t}},{key:"getVq",value:function(){var t=this.getVqByUrl();return null!==t&&void 0!==t?(this.setVq(t),t):window.sessionStorage.vq}},{key:"setVq",value:function(t){window.sessionStorage.vq=t}},{key:"refreshToken",value:function(){return new c(this.httpRequest).fetchTokenByText(this.appName,this.device,this.getVq())}},{key:"getVqByUrl",value:function(){var t=window.location.href;if(!t.includes("?")&&!t.includes("=")&&!t.includes(this.vqKey))return null;var e=h();return console.log(e),window.sessionStorage.yibanId=e[u],window.sessionStorage.vq=e[s],window.location=window.localStorage.backUrl,e[s]}}]),t}(),l=function(){function t(){o()(this,t)}return a()(t,null,[{key:"haveLocalToken",value:function(){var t=window.sessionStorage.token;return null!==t&&void 0!==t&&"null"!==t&&"undefined"!==t}},{key:"getLocalToken",value:function(){return window.sessionStorage.token}}]),t}(),d=function(){function t(e){var n=this;o()(this,t),p.call(this),this.commonUrl=null!==e&&void 0!==e?e:this.commonUrl,this.addFetchListen("error",function(t){window.r=t,"TypeError: Failed to fetch"===t.toString()&&n.yibanAuth&&n.yibanAuth.haveVq()&&alert("请检查链接")})}return a()(t,[{key:"addFetchListen",value:function(t,e){"before"===t?this._fetchBefore.push(e):"after"===t?this._fetchAfter.push(e):this._fetchError.push(e)}},{key:"removeFetchListen",value:function(t,e){var n=void 0;"before"===t?-1!==(n=this._fetchBefore.indexOf(e))&&this._fetchBefore.splice(n,1):"after"===t?-1!==(n=this._fetchAfter.indexOf(e))&&this._fetchAfter.splice(n,1):-1!==(n=this._fetchError.indexOf(e))&&this._fetchError.splice(n,1)}},{key:"_fetchCheckToken",value:function(t,e,n){var i=this;return!l.haveLocalToken()&&this.yibanAuth?this.yibanAuth.refreshToken().then(function(){return i._fetchWithListener(t,e,n)}):this._fetchWithListener(t,e,n)}},{key:"_fetchWithListener",value:function(t,e,n){var i=this,o=void 0;if("GET"===t.toUpperCase())o=this._getData.bind(this);else{if("POST"!==t.toUpperCase())return console.log("不支持提交put与delete方法");o=this._postData.bind(this)}return this._fetchBefore&&this._fetchBefore.forEach(function(t){return t(e,n)}),o(e,n).catch(function(t){return i._fetchError&&i._fetchError.forEach(function(e){return e(t)})}).then(function(t){return i._fetchAfter&&i._fetchAfter.forEach(function(e){return e(t)}),t})}},{key:"_getData",value:function(t,e){for(var n in t+="?",e)e.hasOwnProperty(n)&&(t+=n+"="+e[n]+"&");return t+="Authorization="+l.getLocalToken(),t=this.commonUrl+t,console.log("get method",t),fetch(t,{method:"get"})}},{key:"_postData",value:function(t,e){t+="?Authorization="+l.getLocalToken();var n=new FormData;if(e instanceof FormData)n=e;else for(var i in e)e.hasOwnProperty(i)&&n.append(i,e[i]);return console.log("POST method",this.commonUrl+t),console.log("formData",e),fetch(this.commonUrl+t,{method:"post",body:n})}},{key:"checkJsonData",value:function(t){return t.status&&500===t.status}},{key:"getJsonData",value:function(t,e){var n=this;return this._fetchCheckToken("get",t,e).then(function(t){return t.json()}).then(function(i){return n.checkJsonData(i)&&console.log("与后端交互出错","GET "+t,e),i})}},{key:"getTextData",value:function(t,e){return this._fetchCheckToken("get",t,e).then(function(t){return t.text()})}},{key:"postJsonData",value:function(t,e){var n=this;return this._fetchCheckToken("post",t,e).then(function(t){return t.json()}).then(function(i){return n.checkJsonData(i)&&console.log("与后端交互出错","POST "+t,e),i})}},{key:"postTextData",value:function(t,e){return this._fetchCheckToken("post",t,e).then(function(t){return t.text()})}}]),t}(),p=function(){this.commonUrl="http://yb.upc.edu.cn:8084/",this._fetchBefore=[],this._fetchAfter=[],this._fetchError=[]},v=d;var y=function(t,e,n,i){var o=new v(t),r=new f(e,new v(t),n,i);return o.yibanAuth=r,{httpRequest:o,yibanAuth:r}},g=function(){function t(e,n,i){o()(this,t),this.uploadUrl="/upload/file",this.filePrefix="http://yb.upc.edu.cn",this.httpRequest=e,n&&(this.filePrefix=n),this.uploadUrl=null!==i&&void 0!==i?i:this.uploadUrl}return a()(t,[{key:"fetchFile",value:function(t,e,n){var i=this,o=(n=null!==n&&void 0!==n?n:document).createElement("form");o.appendChild(t.cloneNode());var r=new FormData(o);return"text"===e?this.httpRequest.postTextData(this.uploadUrl,r).then(function(t){return i.filePrefix+"/"+t.data}):this.httpRequest.postJsonData(this.uploadUrl,r).then(function(t){return i.filePrefix+"/"+t.data})}}]),t}();n.d(e,"a",function(){return m}),n.d(e,"c",function(){return w}),n.d(e,"b",function(){return b});var k=y("http://yb.upc.edu.cn:8085","https://openapi.yiban.cn/oauth/authorize?client_id=ee3cf6b53f16b07f&redirect_uri=http://f.yiban.cn/iapp218463","second","mobile"),m=k.httpRequest,w=k.yibanAuth,_=new v("http://yb.upc.edu.cn:8084");_.yibanAuth=w;var b=new g(_,"http://yb.upc.edu.cn")},AA3o:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Dmm8:function(t,e,n){var i=n("34sJ");i(i.S+i.F*!n("GdxE"),"Object",{defineProperty:n("QYYr").f})},EjFo:function(t,e){},IaMB:function(t,e,n){t.exports=n.p+"static/img/loading.e450664.gif"},IxCu:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},staticRenderFns:[]};var o=n("Z0/y")({name:"Header",data:function(){return{}}},i,!1,function(t){n("EjFo")},"data-v-777a4c9e",null);e.a=o.exports},OIM7:function(t,e,n){"use strict";var i={name:"LoadImage",data:function(){return{loading:n("IaMB")}},props:["loadState"]},o={render:function(){var t=this.$createElement,e=this._self._c||t;return this.loadState?e("div",{staticClass:"box-center text-center"},[e("img",{staticStyle:{width:"133px",height:"80px"},attrs:{src:this.loading,alt:"正在加载中"}})]):this._e()},staticRenderFns:[]},r=n("Z0/y")(i,o,!1,null,null,null);e.a=r.exports},c7dQ:function(t,e,n){"use strict";e.a=function(t){return{data:function(){return{title:"没有设置title,请详细阅读代码文档",yibanAuth:t}},created:function(){this.yibanAuth&&this.yibanAuth.fetchVq()},beforeMount:function(){null!==this.title&&void 0!==this.title&&(document.querySelector("title").innerHTML=this.title)}}}},liLe:function(t,e,n){t.exports={default:n("zg6Y"),__esModule:!0}},mi6u:function(t,e,n){"use strict";e.a=function(t){return{data:function(){return{loadState:!1,fetch:t}},methods:{showLoading:function(){this.loadState=!0},hiddenLoading:function(){this.loadState=!1}},created:function(){this.fetch.addFetchListen("before",this.showLoading),this.fetch.addFetchListen("after",this.hiddenLoading)},beforeDestroy:function(){this.fetch.removeFetchListen("before",this.showLoading),this.fetch.removeFetchListen("after",this.hiddenLoading)}}}},nuAC:function(t,e,n){"use strict";var i={methods:{updateData:function(t){console.log(t),this[t.key]=t.value}}};e.a=i},xSur:function(t,e,n){"use strict";e.__esModule=!0;var i,o=n("liLe"),r=(i=o)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},zg6Y:function(t,e,n){n("Dmm8");var i=n("yDNk").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}}});
//# sourceMappingURL=0.4b2904c8777f63f7844c.js.map