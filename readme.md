# FlexTable
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![codecov][codecov-image]](codecov-url)

[npm-image]: http://img.shields.io/npm/v/tm-flextable.svg?style=flat-square
[npm-url]: http://npmjs.org/package/tm-flextable
[travis-image]: https://img.shields.io/travis/tm-fe/FlexTable.svg?style=flat-square
[travis-url]: https://travis-ci.org/tm-fe/FlexTable
[download-image]: https://img.shields.io/npm/dm/tm-flextable.svg?style=flat-square
[download-url]: https://npmjs.org/package/tm-flextable
[codecov-image]: https://codecov.io/gh/tm-fe/FlexTable/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/tm-fe/FlexTable

An efficiently updated div table Vue component. Compatible with Vue 2.x

- [Why div table?](#why-div-table)
- [Screenshots](#screenshots)
- [Feature](#feature)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Demo](#demo)

## Why div table?

Due to table has rendering performance problems: [表格宽度布局算法](https://www.w3.org/TR/CSS2/tables.html#width-layout)

## Demo
To view a demo online: [https://tm-fe.github.io/FlexTable/examples/dist/](https://tm-fe.github.io/FlexTable/examples/dist/)

To view demo examples locally clone the repo and run `yarn install && yarn dev` or view [local example](./examples) 

## Screenshots

![flextable](https://user-images.githubusercontent.com/6723674/57348072-4db8ef80-7187-11e9-98eb-2b613073f266.gif)

## Feature

- [x] 支持最大高度，超过 fixed header
- [x] 固定列
- [x] footer 展示汇总数据
- [x] 自定义列宽
- [x] 排序
- [x] 拖动调整列宽（resizable）
- [x] selectable
- [x] 子表格嵌套
- [ ] 合并单元格
- [ ] 拖动改变列顺序
- [ ] 行loading(row.loading)

## Install

```bash
npm install --save tm-flextable
// or
yarn add tm-flextable
```
```js
import FlexTable from 'tm-flextable';

export default {
  // ...
  components: {
    FlexTable
  }
  // ...
}
```

## Usage

### CDN 引入
```html
<script src="https://unpkg.com/tm-flextable@latest/dist/index.js" type="text/javascript"></script>
```
然后直接在页面使用
```html
<div id="app">
    <flex-table
        resizable
        :loading="loading" 
        :columns="columns" 
        :data="list"
        :sum="sum">
    </flex-table>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            // ...
        },
        methods: {
            // ...
        }
    })
  </script>
```

### npm 安装(推荐)
```js
// main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import FlexTable from 'tm-flextable';

Vue.use(VueRouter);
Vue.use(FlexTable); // 全局注册组件

//or 
// app.vue
// 局部注册
import { FlexTable } from 'tm-flextable';
export default {
    components:{
        flexTable
    },
    // ...

```

## API

### Table props

| 属性 | 说明 | 类型 | 默认值 |
| ------------ | ------- | ------- | ----------- |
| data | 显示的结构化数据 | Array | [] |
| columns | 表格列的配置描述，具体项见后文 | Array | [] |
| sum | 显示的结构化数据汇总 | Object | {} |
| loading | 是否加载中 | Boolean | false |
| resizable | 是否可拖动调整列宽 | Boolean | false |
| height | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 | Number | - |
| no-data | 数据为空时显示的提示内容 | String | No Data |

### Table events

| 事件名 | 说明 | 返回值 |
| ------------ | ------- | ----------- |
| on-sort-change | 排序时有效，当点击排序时触发 | column：当前列数据； key：排序依据的指标； order：排序的顺序，值为 asc 或 desc |
| on-selection-change | 点击全选时触发 | selection：已选项数据； row: 当前选中行数据 |
| on-all-cancel | 全选取消时触发 | selection：已选项数据 |
| on-selection-cancel | 单选取消时触发 | selection：已选项数据 |

### column
列描述数据对象，是 columns 中的一项

| 属性 | 说明 | 类型 | 默认值 |
| ------------ | ------- | ------- | ----------- |
| title | 列名 | String | - |
| key | 列名 | String | - |
| type | 列类型，可选值为 index、selection | String | - |
| width | 列宽，不设置将自动分配，最小 60px | Number | 60 |
| align | 对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐 | String | Left |
| fixed | 列是否固定在左侧或者右侧，可选值为 left 左侧 | String | - |
| render | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。 | Function | - |
| renderHeader | 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 column 和 index，分别为当前列数据和当前列索引。 | Function | - |
| sortable | 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件 | Boolean | false |
| sortType | 设置初始化排序。值为 asc, desc 和 normal | String | normal |

### Table slot

| 名称 | 说明 |
| ------------ | ------- |
| loading | 加载中 |

## Test
```bash
    yarn test
    or
    npm test
```

## Coverage

## License
`tm-flextable` is released under the MIT license.
