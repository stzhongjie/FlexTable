(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(e,t,n){"use strict";function a(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("固定表头")]),e._v(" "),e._m(0),e._v(" "),n("flex-table",{attrs:{loading:e.loading,columns:e.columns,data:e.list,sum:e.sum,height:e.height}}),e._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("flex-table",{attrs:{loading:e.loading,columns:e.columns,data:[],height:e.height}})],1)],1)}var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("固定表头 "),n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/fixedHeader.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},72:function(e,t,n){"use strict";n.r(t);var a=n(121),r=n(85);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n(0),u=Object(i.a)(r.default,a.a,a.b,!1,null,null,null);t.default=u.exports},85:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var a=[],r=0;r<20;r++)a.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var o={data:function(){return{columns:[{title:"Name",key:"name",width:100},{title:"Age",key:"age"},{title:"Address",key:"address",width:300},{title:"Date",key:"date"}],loading:!1,list:a,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"},height:250}},methods:{onSortChange:function(e){console.log(e)}}};t.default=o}}]);