(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88732c54"],{"13d5":function(t,a,e){"use strict";var s=e("23e7"),i=e("d58f").left,o=e("a640"),c=e("ae40"),n=o("reduce"),r=c("reduce",{1:0});s({target:"Array",proto:!0,forced:!n||!r},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],o={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},c=o,n=(e("5eaf"),e("2877")),r=Object(n["a"])(c,s,i,!1,null,null,null);a["a"]=r.exports},"2aa4":function(t,a,e){},"5eaf":function(t,a,e){"use strict";var s=e("2aa4"),i=e.n(s);i.a},"81b1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[e("div",{staticClass:"d-flex mb-3"},[e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":""},on:{click:function(a){return t.getProducts(1,"")}}},[t._v(" 全部("+t._s(this.totalProducts)+") ")]),e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":"麵包/點心"},on:{click:function(a){return t.getProducts(1,"麵包/點心")}}},[t._v(" 麵包/點心("+t._s(this.totalBreadProducts)+") ")]),e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":"咖啡"},on:{click:function(a){return t.getProducts(1,"咖啡")}}},[t._v(" 咖啡("+t._s(this.totalCoffeeProducts)+") ")]),e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":"茶"},on:{click:function(a){return t.getProducts(1,"茶")}}},[t._v(" 茶("+t._s(this.totalTeaProducts)+") ")]),e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":"茶那堤"},on:{click:function(a){return t.getProducts(1,"茶那堤")}}},[t._v(" 茶那堤("+t._s(this.totalCTProducts)+") ")]),e("button",{staticClass:"btn btn-outline-dark mr-3 filter",attrs:{"data-filter":"特調"},on:{click:function(a){return t.getProducts(1,"特調")}}},[t._v(" 特調("+t._s(this.totalSPProducts)+") ")])]),e("div",{staticClass:"row"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"col-md-3"},[e("div",{staticClass:"card mb-4 position-relative position-relative"},[e("div",{staticClass:"card-mash"},[e("img",{staticClass:"card-img-top rounded",attrs:{src:a.imageUrl[0],alt:"..."}})]),e("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[e("div",{staticClass:"position-absolute",staticStyle:{right:"16px",top:"16px"}},[e("span",{staticClass:"badge badge-light float-right ml-2",attrs:{"data-filter":a.category},on:{click:function(e){return t.getProducts(1,a.category)}}},[t._v(t._s(a.category))])])]),e("div",{staticClass:"card-body p-0"},[e("h4",{staticClass:"mb-0 mt-3"},[e("router-link",{attrs:{to:"/product/"+a.id}},[t._v(t._s(a.title))])],1),e("del",{staticClass:"text-muted mt-3"},[t._v("NT$ "+t._s(a.origin_price))]),e("p",{staticClass:"text-muted mt-3 h4 font-weight-bold"},[t._v("NT$ "+t._s(a.price))]),e("button",{staticClass:"btn btn-outline-danger btn-sm w-100",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(e){return t.addtoCart(a)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),e("nav",{staticClass:"d-flex justify-content-center"},[t.filterFlag?t._e():e("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProducts}})],1)])],1)},i=[],o=(e("99af"),e("4de4"),e("4160"),e("13d5"),e("159b"),e("1799")),c={name:"Products",components:{Pagination:o["a"]},data:function(){return{products:[],pagination:{},status:{loadingItem:""},totalProducts:0,totalBreadProducts:0,totalCoffeeProducts:0,totalTeaProducts:0,totalCTProducts:0,totalSPProducts:0,filterFlag:!1,tmpPaged:8}},methods:{goPage:function(t){console.log(this.$router),this.$router.push("/product/".concat(t.id))},getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s="";this.filterFlag=""!==e,s=this.filterFlag?"".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?paged=").concat(this.totalProducts,"&orderBy=category&sort=desc"):"".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?page=").concat(a,"&paged=12&orderBy=category&sort=desc"),this.$http.get(s).then((function(a){t.products=""!==e?a.data.data.filter((function(t){return t.category===e})):t.products=a.data.data,$(".filter").removeClass("active"),$("[data-filter='".concat(e,"']")).addClass("active"),t.pagination=a.data.meta.pagination,t.isLoading=!1}))},addtoCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/shopping"),i={product:t.id,quantity:e};this.$http.post(s,i).then((function(){a.status.loadingItem="",a.$bus.$emit("get-cart"),a.$bus.$emit("message:push","加入成功","success"),a.getCart()})).catch((function(t){a.status.loadingItem="";var e=t.response.data.errors;e.forEach((function(t){a.$bus.$emit("message:push","加入失敗\n            ".concat(t),"danger")}))}))},getCart:function(){var t=this;this.cartTotal=0,this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))})),this.isLoading=!1},getAllProducts:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?paged=").concat(this.totalProducts,"&orderBy=category&sort=desc");this.$http.get(a).then((function(a){var e=a.data.data.reduce((function(t,a){return a.category in t?t[a.category]++:t[a.category]=1,t}),{});t.totalBreadProducts=e["麵包/點心"],t.totalCoffeeProducts=e["咖啡"],t.totalTeaProducts=e["茶"],t.totalCTProducts=e["茶那堤"],t.totalSPProducts=e["特調"],t.totalProducts=a.data.meta.pagination.total}))}},created:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?");this.$http.get(a).then((function(a){t.totalProducts=a.data.meta.pagination.total,t.getAllProducts(),t.getProducts(1)}))},mounted:function(){}},n=c,r=(e("b60a"),e("2877")),u=Object(r["a"])(n,s,i,!1,null,null,null);a["default"]=u.exports},b60a:function(t,a,e){"use strict";var s=e("bdc6"),i=e.n(s);i.a},bdc6:function(t,a,e){},d58f:function(t,a,e){var s=e("1c0b"),i=e("7b0b"),o=e("44ad"),c=e("50c4"),n=function(t){return function(a,e,n,r){s(e);var u=i(a),d=o(u),l=c(u.length),f=t?l-1:0,g=t?-1:1;if(n<2)while(1){if(f in d){r=d[f],f+=g;break}if(f+=g,t?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:l>f;f+=g)f in d&&(r=e(r,d[f],f,u));return r}};t.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-88732c54.37bb537b.js.map