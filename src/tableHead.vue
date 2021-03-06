<template>
    <div class="flex-table-head" :style="{ height: height }">
        <div class="flex-table-row">
            <div
                v-for="(item, index) in headRow"
                :key="item.key + '_' + index"
                :class="{
                    'flex-table-col': true,
                    'flex-table-hidden': isInvisible(item),
                }"
                :style="setCellStyle(item)"
            >
                <template v-if="!isHidden(item)">
                    <template v-if="item.type === 'selection'"
                        ><Checkbox
                            :checked="isSelectAll"
                            :disabled="!data.length || !isRenderDone"
                            @input="selectAll"
                        ></Checkbox
                    ></template>
                    <template v-else>
                        <Expand
                            v-if="item.renderHeader"
                            :column="item"
                            :index="index"
                            :render="item.renderHeader"
                        ></Expand>
                        <span v-else>{{ item.title }}</span>
                        <span class="flex-table-sort" v-if="item.sortable">
                            <i
                                @click="handleSort(index, 'asc')"
                                :class="{
                                    on: getColumns(index)._sort === 'asc',
                                }"
                                class="flex-table-arrow-dropup"
                            ></i>
                            <i
                                @click="handleSort(index, 'desc')"
                                :class="{
                                    on: getColumns(index)._sort === 'desc',
                                }"
                                class="flex-table-arrow-dropdown"
                            ></i>
                        </span>
                        <div
                            v-if="isColResizable(item)"
                            @mousedown="onColResize($event, index)"
                            class="flex-table-col-resize j-col-resize"
                        ></div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { Checkbox } from 'vue-checkbox-radio';
import Mixin from './mixin.js';
import Expand from './expand.js';

export default {
    name: 'TableHead',
    components: { Expand, Checkbox },
    mixins: [Mixin],
    props: {
        data: {
            type: Array,
        },
        allData: {
            type: Array,
            default() {
                return [];
            },
        },
        virtualScroll: {
            type: Number,
        },
        columns: {
            type: Array,
        },
        onlyFixed: {
            type: String,
            default: '',
        },
        resizable: Boolean,
        rowHeight: {
            type: Number,
            default: 0,
        },
        isRenderDone: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            headRow: this.columns.map((item) => {
                item._sort = item.sortType || 'normal'; // 可选值 'desc','asc','normal'
                return item;
            }),
        };
    },
    computed: {
        isVirtualScroll() {
            return this.virtualScroll && this.virtualScroll < this.data.length;
        },
        isSelectAll() {
            let isSelectAll = true;
            if (!this.data.length) isSelectAll = false;
            if (!this.data.find((item) => !item._disabled)){
                isSelectAll = false;
            }
            if (this.isVirtualScroll) {
                // 虚拟滚动时，需要判断到所有数据，即allData
                for (let i = 0; i < this.allData.length; i++) {
                    if (!this.allData[i]._isChecked && !this.allData[i]._isDisabled) {
                        isSelectAll = false;
                        break;
                    }
                }
            } else {
                for (let i = 0; i < this.data.length; i++) {
                    if (!this.data[i]._isChecked && !this.data[i]._isDisabled) {
                        isSelectAll = false;
                        break;
                    }
                }
            }

            return isSelectAll;
        },
        height() {
            if (this.onlyFixed && this.rowHeight) {
                return `${this.rowHeight}px`;
            } else {
                return 'auto';
            }
        },
    },
    watch: {
        columns: function (val) {
            this.headRow = val.map((item) => {
                item._sort = item.sortType || 'normal';
                return item;
            });
        },
    },
    mounted() {
        this.onRowHeightChange();
    },
    updated() {
        this.$nextTick(() => {
            this.onRowHeightChange();
        });
    },
    methods: {
        isColResizable(col) {
            return this.resizable && col.resizable !== false;
        },
        selectAll() {
            const status = !this.isSelectAll;
            this.$emit('on-select-all', status);
        },
        onColResize(e, index) {
            this.$emit('on-col-resize', e, index);
        },
        handleSort(index, type) {
            this.headRow = this.headRow.map((item, i) => {
                if (index === i) {
                    item._sort = item._sort == type ? 'normal' : type;
                } else {
                    item._sort = 'normal';
                }
                return item;
            });
            const item = this.headRow[index];
            this.$emit('on-sort-change', {
                order: item._sort,
                key: item.key,
                row: item,
            });
        },
        getColumns(index) {
            return this.headRow[index];
        },
        onRowHeightChange() {
            if (!this.onlyFixed) {
                this.owner.onRowHeightChange({
                    rowIndex: 'header',
                    height: this.$el.offsetHeight,
                });
            }
        },
        isHidden(item) {
            return this.onlyFixed && item.fixed !== this.onlyFixed;
        },
        isInvisible(col) {
            // 非固定层的固定列应不可见
            return col.fixed && !this.onlyFixed;
        },
    },
};
</script>

