webpackJsonp([1],{"+arp":function(t,e){},"4cJy":function(t,e){},"9bBU":function(t,e,n){n("mClu");var a=n("FeBl").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},Cj8Q:function(t,e,n){"use strict";var a=n("Zrlr"),i=n.n(a),r=n("wxAW"),o=n.n(r),s=n("d2gY"),u=n("hrn7"),l=function(){function t(e){i()(this,t),c.call(this),this.commonUrl=null!==e&&void 0!==e?e:this.commonUrl}return o()(t,[{key:"_getData",value:function(t,e){for(var n in t+="?authentication="+u.a.getLocalToken(),e)e.hasOwnProperty(n)&&(t+=n+"="+e[n]+"&");return t=t.split("").splice(0,t.length-1).join(""),t=this.commonUrl+t,console.log("get method",t),fetch(t,{method:"get"})}},{key:"_postData",value:function(t,e){t+="?Authorization="+u.a.getLocalToken();var n=new FormData;for(var a in e)e.hasOwnProperty(a)&&n.append(a,e[a]);return fetch(this.commonUrl+t,{method:"post",body:e,fd:n})}},{key:"getJsonData",value:function(t,e){return this._getData(t,e).then(function(t){return t.json()})}},{key:"getTextData",value:function(t,e){return this._getData(t,e).then(function(t){return t.text()})}},{key:"postJsonData",value:function(t,e){return this._postData(t,e).then(function(t){return t.json()})}},{key:"postTextData",value:function(t,e){return this._postData(t,e).then(function(t){return t.text()})}}]),t}(),c=function(){this.commonUrl=s.a},d=l,f=function(){function t(e,n){i()(this,t),this.uploadUrl="/upload/file",this.httpRequest=new d(e),this.uploadUrl=null!==n&&void 0!==n?n:this.uploadUrl}return o()(t,[{key:"fetchFile",value:function(t,e,n){var a=(n=null!==n&&void 0!==n?n:document).createElement("form");a.appendChild(t.cloneNode());var i=new FormData(a);return"text"===e?this.httpRequest.postTextData(this.uploadUrl,i).then(function(t){return h+"/"+t.data}):this.httpRequest.postJsonData(this.uploadUrl,i).then(function(t){return h+"/"+t.data})}}]),t}();n.d(e,"c",function(){return v}),n.d(e,"b",function(){return h});var h="http://yb.upc.edu.cn/file/image",p=new d("http://yb.upc.edu.cn:8085"),v=new f("http://yb.upc.edu.cn:8084");e.a=p},FCGo:function(t,e){},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},d2gY:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r});var a="http://yb.upc.edu.cn:8084/",i="yb_uid",r="verify_request"},egpO:function(t,e,n){"use strict";var a={name:"Header",data:function(){return{token:123}},beforeMount:function(){null!==this._props.title&&void 0!==this._props.title&&(document.querySelector("title").innerHTML=this._props.title);var t=this._props.yibanAuth;t&&t.fetchVq(),t&&t.refreshToken()},props:["title","yibanAuth"]},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("fveg")},null,null);e.a=r.exports},fveg:function(t,e){},h6Bq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("egpO"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"InputBox"},[e("label",[e("input",{class:this.classes,attrs:{type:this.type,placeholder:this.placeholder}})])])},staticRenderFns:[]};var r=n("VU/8")({name:"InputBox",props:["type","placeholder","classes"],data:function(){return{}}},i,!1,function(t){n("izIZ")},null,null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"TextBox"},[e("label",[e("textarea",{class:this.classes,attrs:{name:"textarea",cols:"10",rows:"5",placeholder:this.placeholder}})])])},staticRenderFns:[]};var s=n("VU/8")({name:"TextBox",props:["placeholder","classes"],data:function(){return{}}},o,!1,function(t){n("4cJy")},null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Upload"},[e("input",{attrs:{type:"file",name:"file"},on:{change:this.upload}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"add-button absolute-center"},[e("div",{staticClass:"add box-center"},[this._v("+")]),this._v(" "),e("p",[this._v("添加")])])}]};var l=n("VU/8")({name:"Upload",data:function(){return{}},methods:{upload:function(t){this.$emit("addFile",t.target)}}},u,!1,function(t){n("+arp")},null,null).exports,c=n("Cj8Q"),d={name:"PublishPage",data:function(){return{managerName:"",managerTitle:"",managerMessage:"",fileList:[]}},components:{HeaderSection:a.a,InputBox:r,TextBox:s,Upload:l},methods:{addFile:function(t){var e=this;c.c.fetchFile(t).then(function(t){console.log(t),e.fileList.push(t)})},deleteImage:function(t){console.log(t.target.dataset.index);var e=parseInt(t.target.dataset.index);this.fileList=this.fileList.filter(function(t,n){return n!==e})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PublishPage box-center"},[n("header-section",{attrs:{title:"发布"}},[n("p",[t._v("发布")])]),t._v(" "),n("input-box",{staticClass:"input-box box-center",attrs:{type:"text",placeholder:"标题"},model:{value:t.managerTitle,callback:function(e){t.managerTitle=e},expression:"managerTitle"}}),t._v(" "),n("input-box",{staticClass:"input-box box-center",attrs:{type:"text",placeholder:"宝贝"},model:{value:t.managerName,callback:function(e){t.managerName=e},expression:"managerName"}}),t._v(" "),n("text-box",{staticClass:"input-box box-center",attrs:{placeholder:"宝贝描述"},model:{value:t.managerMessage,callback:function(e){t.managerMessage=e},expression:"managerMessage"}}),t._v(" "),n("div",{staticClass:"file-list input-box box-center"},[t._l(t.fileList,function(e,a){return n("div",{staticClass:"file-item"},[n("div",{staticClass:"add-icon text-center",attrs:{"data-index":a},on:{click:t.deleteImage}},[t._v("+")]),t._v(" "),n("img",{attrs:{src:e,alt:"图片加载失败"}}),t._v(" "),n("div",{staticClass:"file-item-footer text-center"},[t._v(t._s(0===a?"主图":"附图"))])])}),t._v(" "),n("upload",{staticClass:"upload file-item",on:{addFile:t.addFile}})],2)],1)},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("FCGo")},null,null);e.default=h.exports},hrn7:function(t,e,n){"use strict";var a=n("Zrlr"),i=n.n(a),r=n("wxAW"),o=n.n(r),s=n("d2gY"),u=function(){function t(e){i()(this,t),this.httpRequest=e}return o()(t,[{key:"fetchTokenByeText",value:function(t,e,n){var a=new FormData;return a.append("appName",t),a.append("vq",n),a.append("device",e),fetch(this.httpRequest.commonUrl+"/auth",{method:"POST",body:a}).then(function(t){return window.a=t,t.json()}).then(function(t){window.sessionStorage.token=t.token})}}]),t}();n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l});var l=function(){function t(e,n,a,r){i()(this,t),this.yibanIdKey=s.c,this.vqKey=s.b,this.vqUrl=e,this.httpRequest=n,this.appName=a,this.device=r}return o()(t,[{key:"fetchVq",value:function(){!1===this.haveVq()&&(window.location=this.vqUrl)}},{key:"haveVq",value:function(){var t=this.getVq();return null!==t&&void 0!==t}},{key:"getVq",value:function(){var e=this.getVqByUrl();return null!==e&&void 0!==e?(t.setVq(e),e):window.sessionStorage.vq}},{key:"refreshToken",value:function(){new u(this.httpRequest).fetchTokenByeText(this.appName,this.device,this.getVq())}},{key:"getVqByUrl",value:function(){var t=window.location.href;if(!t.includes("?")&&!t.includes("=")&&!t.includes(this.vqKey))return null;var e=t.split("?"),n=e[1].split("="),a={yibanId:n[2],vq:n[1].substr(0,n[1].lastIndexOf("&"+this.yibanIdKey))};return window.sessionStorage.yibanId=a.yibanId,window.history.pushState({},"",e[0]),a.vq}}],[{key:"setVq",value:function(t){window.sessionStorage.vq=t}}]),t}(),c=function(){function t(){i()(this,t)}return o()(t,null,[{key:"haveLocalToken",value:function(){var t=window.sessionStorage.token;return null!==t&&void 0!==t}},{key:"getLocalToken",value:function(){return window.sessionStorage.token}},{key:"haveLocalUserData",value:function(){var t=window.localStorage.userData;return null!==t&&void 0!==t&&""!==t}},{key:"getLocalUserData",value:function(){return JSON.parse(window.localStorage.userData)}}]),t}()},izIZ:function(t,e){},mClu:function(t,e,n){var a=n("kM2E");a(a.S+a.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n("C4MV"),r=(a=i)&&a.__esModule?a:{default:a};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}()}});
//# sourceMappingURL=1.29d13f6a5f56cbc698c5.js.map