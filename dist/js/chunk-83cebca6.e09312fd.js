(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83cebca6"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},r=n,c=e("2877"),o=Object(c["a"])(r,i,s,!1,null,null,null);a["a"]=o.exports},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),n=e("e8b5"),r=e("861d"),c=e("7b0b"),o=e("50c4"),d=e("8418"),u=e("65f0"),l=e("1dde"),p=e("b622"),g=e("2d00"),h=p("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",m=g>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=l("concat"),b=function(t){if(!r(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},y=!m||!_;i({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,i,s,n,r=c(this),l=u(r,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?r:arguments[a],b(n)){if(s=o(n.length),p+s>f)throw TypeError(v);for(e=0;e<s;e++,p++)e in n&&d(l,p,n[e])}else{if(p>=f)throw TypeError(v);d(l,p++,n)}return l.length=p,l}})},efd9:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table mt-4"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,i){return e("tr",{key:i,class:{"text-secondary":!a.is_paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(" "+t._s(a.payment)+" ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("round")(a.amount))+" ")]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,n=!!s.checked;if(Array.isArray(i)){var r=null,c=t._i(i,r);s.checked?c<0&&t.$set(a,"paid",i.concat([r])):c>-1&&t.$set(a,"paid",i.slice(0,c).concat(i.slice(c+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])])])})),0):t._e()]),e("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),r={name:"Orders",components:{Pagination:n["a"]},data:function(){return{orders:{user:{}},isNew:!1,pagination:{},isLoading:!1,uuid:"69d7fd56-1f0f-42c9-b209-51c359d76a0b"}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},setOrderPaid:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.$bus.$emit("message:push","付款狀態已修改，好棒ヽ(＾Д＾)ﾉ ","success"),a.getOrders()}))}}},c=r,o=e("2877"),d=Object(o["a"])(c,i,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-83cebca6.e09312fd.js.map