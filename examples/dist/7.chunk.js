(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,t,n){"use strict";function o(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("基础用法")]),e._v(" "),e._m(0),e._v(" "),n("flex-table",{attrs:{resizable:"",loading:e.loading,columns:e.columns,data:e.list,sum:e.sum,minWidth:80,maxWidth:600},on:{"on-scroll-x":e.onTableScroll}})],1)}var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("表格的简单用法 "),n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/index.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},71:function(e,t,n){"use strict";n.r(t);var o=n(120),r=n(83);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var l=n(0),i=Object(l.a)(r.default,o.a,o.b,!1,null,null,null);t.default=i.exports},83:function(e,t,n){"use strict";n.r(t);var o=n(84),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t.default=r.a},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var o=[],r=0;r<10;r++)o.push({name:"John Brown",age:18,sex:"男",school:"high school",color:"red",address:"New York No. 1 Lake Park",date:"2016-10-03"});var a={data:function(){return{columns:[{title:"Name",key:"name",width:240},{title:"Age",key:"age",width:140,render:function(e,t){return e("span","age: "+t.row.age)}},{title:"Address",key:"address",width:240},{title:"Sex",key:"sex",width:140},{title:"School",key:"school",width:240},{title:"Color",key:"color",width:140},{title:"Date",key:"date",width:240}],loading:!1,list:o,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"}}},mounted:function(){},methods:{onTableScroll:function(e){console.log(e.target.scrollLeft)}}};t.default=a}}]);