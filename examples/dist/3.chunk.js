(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{107:function(e,t,n){"use strict";n.r(t);var a=n(108),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t.default=i.a},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var a=[],i=0;i<10;i++)a.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var s={data:function(){return{columns:[{title:"Name",key:"name"},{title:"Age",key:"age",render:function(e,t){return e("span","age: "+t.row.age)}},{title:"Address",key:"address"},{title:"Date",key:"date"}],loading:!1,list:a,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"},size:"",theme:""}},mounted:function(){},methods:{}};t.default=s},109:function(e,t,n){var a=n(112);"string"==typeof a&&(a=[[e.i,a,""]]);n(27)(a,{sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},111:function(e,t,n){"use strict";var a=n(109);n.n(a).a},112:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,".table {\n  padding: 10px;\n}\n.table.dark {\n  background: #333;\n}\n",""])},114:function(e,t,n){"use strict";function a(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("风格样式")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"btn-box"},[n("button",{attrs:{disabled:""===e.size},on:{click:function(t){e.size=""}}},[e._v("Default")]),e._v(" "),n("button",{attrs:{disabled:"big"===e.size},on:{click:function(t){e.size="big"}}},[e._v("Big")]),e._v(" "),n("button",{attrs:{disabled:"small"===e.size},on:{click:function(t){e.size="small"}}},[e._v("Small")]),e._v(" "),n("button",{attrs:{disabled:""===e.theme},on:{click:function(t){e.theme=""}}},[e._v("Light")]),e._v(" "),n("button",{attrs:{disabled:"dark"===e.theme},on:{click:function(t){e.theme="dark"}}},[e._v("Dark")])]),e._v(" "),n("div",{class:"dark"===e.theme?"table dark":"table"},[n("flex-table",{attrs:{resizable:"",loading:e.loading,columns:e.columns,data:e.list,sum:e.sum,size:e.size,theme:e.theme}})],1)])}var i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("风格样式展示 "),n("a",{attrs:{href:"https://github.com/tm-fe/FlexTable/blob/master/examples/features/style.vue"}},[e._v("source code")])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},82:function(e,t,n){"use strict";n.r(t);var a=n(114),i=n(107);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n(111);var r=n(0),o=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);t.default=o.exports}}]);