(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{115:function(e,t,n){"use strict";n.r(t);var r=n(116),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=a.a},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var r=[],a=0;a<10;a++)r.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var i={data:function(){return{columns:[{title:"Name",key:"name"},{title:"Age",key:"age",render:function(e,t){return e("span","age: "+t.row.age)}},{title:"Address",key:"address"},{title:"Date",key:"date"}],loading:!1,list:r,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"},size:"",theme:"",isBorder:!0,stripe:!0}},mounted:function(){},methods:{}};t.default=i},117:function(e,t,n){var r=n(127);"string"==typeof r&&(r=[[e.i,r,""]]);n(27)(r,{sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},126:function(e,t,n){"use strict";var r=n(117);n.n(r).a},127:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,".table {\n  padding: 10px;\n}\n.table.dark {\n  background: #333;\n}\n",""])},142:function(e,t,n){"use strict";function r(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("风格样式")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"btn-box"},[n("button",{attrs:{disabled:""===e.size},on:{click:function(t){e.size=""}}},[e._v("Default")]),e._v(" "),n("button",{attrs:{disabled:"big"===e.size},on:{click:function(t){e.size="big"}}},[e._v("Big")]),e._v(" "),n("button",{attrs:{disabled:"small"===e.size},on:{click:function(t){e.size="small"}}},[e._v("Small")]),e._v(" "),n("button",{attrs:{disabled:""===e.theme},on:{click:function(t){e.theme=""}}},[e._v("Light")]),e._v(" "),n("button",{attrs:{disabled:"dark"===e.theme},on:{click:function(t){e.theme="dark"}}},[e._v("Dark")]),e._v(" "),n("button",{on:{click:function(t){e.isBorder=!e.isBorder}}},[e._v(e._s(e.isBorder?"None Border":"Has Border"))]),e._v(" "),n("button",{on:{click:function(t){e.stripe=!e.stripe}}},[e._v(e._s(e.stripe?"None Stripe":"Has Stripe"))])]),e._v(" "),n("div",{class:"dark"===e.theme?"table dark":"table"},[n("flex-table",{attrs:{resizable:"",loading:e.loading,columns:e.columns,data:e.list,sum:e.sum,size:e.size,theme:e.theme,border:e.isBorder,stripe:e.stripe}})],1)])}var a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("风格样式展示 "),n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/style.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},85:function(e,t,n){"use strict";n.r(t);var r=n(142),a=n(115);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n(126);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,null,null);t.default=o.exports}}]);