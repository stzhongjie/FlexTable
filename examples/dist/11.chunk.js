(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){"use strict";n.r(t);var o=n(101),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t.default=r.a},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var o=[],r=0;r<10;r++)o.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var a={data:function(){return{columns:[{title:"Name",key:"name"},{title:"Age",key:"age",render:function(e,t){return e("span","age: "+t.row.age)}},{title:"Address",key:"address"},{title:"Date",key:"date"},{title:"operation",key:"operation",type:"slot"}],loading:!1,list:o,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"}}},mounted:function(){},methods:{show:function(e){alert("show "+e)},remove:function(e){alert("remove "+e)}}};t.default=a},110:function(e,t,n){"use strict";function o(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("scoped-slot")]),e._v(" "),e._m(0),e._v(" "),n("flex-table",{attrs:{resizable:"",loading:e.loading,columns:e.columns,data:e.list,sum:e.sum},scopedSlots:e._u([{key:"operation",fn:function(t){t.row;var o=t.index;return[n("button",{staticStyle:{"margin-right":"5px"},on:{click:function(t){return e.show(o)}}},[e._v("View")]),e._v(" "),n("button",{on:{click:function(t){return e.remove(o)}}},[e._v("Delete")])]}}])})],1)}var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("scoped-slot "),n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/scopedSlot.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},76:function(e,t,n){"use strict";n.r(t);var o=n(110),r=n(100);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var u=n(0),i=Object(u.a)(r.default,o.a,o.b,!1,null,null,null);t.default=i.exports}}]);