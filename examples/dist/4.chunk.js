(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{123:function(t,e,n){"use strict";var o=n(96);n.n(o).a},124:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n.flex-table-foot .flex-table-col:first-child .flex-table-slot-foot + .foot-label {\n    display: none;\n}\n",""])},133:function(t,e,n){"use strict";function o(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flex-table",{attrs:{loading:t.loading,columns:t.columns,data:t.list,sum:t.sum},scopedSlots:t._u([{key:"age",fn:function(e){var o=e.row;return[n("p",[t._v(t._s(o.age))])]}},{key:t.firstColumn,fn:function(e){var o=e.row,a=e.type,r=e.key;return[n("p","foot"===a?[t._v("汇总")]:[t._v(t._s(o[r]))])]}}],null,!0)})}var a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},76:function(t,e,n){"use strict";n.r(e);var o=n(133),a=n(94);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(123);var u=n(0),s=Object(u.a)(a.default,o.a,o.b,!1,null,null,null);e.default=s.exports},94:function(t,e,n){"use strict";n.r(e);var o=n(95),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;for(var o=[],a=0;a<10;a++)o.push({name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"});var r={data:function(){return{columns:[{title:"Name",key:"name",width:100,type:"slot"},{title:"Age",key:"age",type:"slot"},{title:"Address",key:"address",width:300},{title:"Date",key:"date"}],loading:!1,list:o,sum:{name:"Jim Green",age:24,address:"London",date:"2016-10-01"},firstColumn:"name"}}};e.default=r},96:function(t,e,n){var o=n(124);"string"==typeof o&&(o=[[t.i,o,""]]);n(27)(o,{sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)}}]);