(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{115:function(e,n,t){"use strict";function o(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("多选")]),e._v(" "),e._m(0),e._v(" "),t("flex-table",{attrs:{loading:e.loading,columns:e.columns,data:e.list,sum:e.sum},on:{"on-selection-change":e.onSelectionChange,"on-selection-cancel":e.onSelectionCancel,"on-all-cancel":e.onAllCancel}})],1)}var a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("选择行 "),t("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/selectable.vue"}},[e._v("source code")])])}];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},73:function(e,n,t){"use strict";t.r(n);var o=t(115),a=t(93);for(var l in a)"default"!==l&&function(e){t.d(n,e,function(){return a[e]})}(l);var c=t(0),r=Object(c.a)(a.default,o.a,o.b,!1,null,null,null);n.default=r.exports},93:function(e,n,t){"use strict";t.r(n);var o=t(94),a=t.n(o);for(var l in o)"default"!==l&&function(e){t.d(n,e,function(){return o[e]})}(l);n.default=a.a},94:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;for(var o=[],a=0;a<10;a++)o.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var l={data:function(){return{columns:[{type:"selection",width:20,align:"center",fixed:"left"},{title:"Name",key:"name"},{title:"Age",key:"age",render:function(e,n){return e("span","age: "+n.row.age)}},{title:"Address",key:"address"},{title:"Date",key:"date"}],loading:!1,list:o,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"}}},mounted:function(){},methods:{onSelectionChange:function(e,n){console.log("onSelectionChange",e,n)},onSelectionCancel:function(e){console.log("onSelectionCancel",e)},onAllCancel:function(e){console.log("onAllCancel",e)}}};n.default=l}}]);