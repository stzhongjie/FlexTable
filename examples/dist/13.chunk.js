(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{111:function(e,t,n){"use strict";function a(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("排序")]),e._v(" "),e._m(0),e._v(" "),n("flex-table",{attrs:{loading:e.loading,columns:e.columns,data:e.list},on:{"on-sort-change":e.onSortChange}})],1)}var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/sortable.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},69:function(e,t,n){"use strict";n.r(t);var a=n(111),r=n(85);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var u=n(0),l=Object(u.a)(r.default,a.a,a.b,!1,null,null,null);t.default=l.exports},85:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var a=[],r=0;r<10;r++)a.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var o={data:function(){return{columns:[{title:"Name",key:"name",width:100,sortable:!0},{title:"Age",key:"age",sortable:!0},{title:"Address",key:"address",width:300},{title:"Date",key:"date",sortable:!0}],loading:!1,list:a}},methods:{onSortChange:function(e){console.log(e)}}};t.default=o}}]);