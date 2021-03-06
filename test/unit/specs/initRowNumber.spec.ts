/* eslint-disable no-undef */
import { createVue } from '@/util';
import { setFoot } from '@/tool';
import { expect } from 'chai';
import Vue from 'vue';

const aTestList: FlexTableColumnOption[] = [];
const aTestData: string[] = [];
for (let i = 0; i < 10; i += 1) {
    const oTestData: FlexTableColumnOption = {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03',
    };
    aTestList.push(oTestData);
    Object.keys(oTestData).forEach((k) => {
        const sValue = oTestData[k].toString();
        if (k === 'age') {
            aTestData.push(`age: ${sValue}`);
        } else {
            aTestData.push(sValue);
        }
    });
}

describe('Flex-Table', () => {
    describe('asyncRender', () => {
        const vm: Vue = createVue({
            template: `
                <flex-table
                    resizable
                    :loading="loading"
                    :columns="columns"
                    :data="list"
                    :sum="sum"
                    :asyncRender="asyncRender"
                ></flex-table>
            `,
            data() {
                return {
                    columns: [
                        {
                            title: 'Name',
                            key: 'name',
                            renderHeader(h: Vue.CreateElement, params: FlexTableRow) {
                                return h('span', `Custom Title : ${params.column.title}`);
                            },
                            width: 100,
                        },
                        {
                            title: 'Age',
                            key: 'age',
                            render(h: Vue.CreateElement, params: FlexTableRow) {
                                return h('span', `age: ${params.row.age}`);
                            },
                            width: 100,
                        },
                        {
                            title: 'Address',
                            key: 'address',
                            width: 100,
                        },
                        {
                            title: 'Date',
                            key: 'date',
                            width: 100,
                        },
                    ],
                    loading: false,
                    list: aTestList,
                    sum: {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London',
                        date: '2016-10-01',
                    },
                    asyncRender: 5,
                };
            },
        });
        // 检测 输入的内容
        it('check body', (done) => {
            const aBodyRow = vm.$el.querySelectorAll('.flex-table-body .flex-table-row');
            const aBodyData: string[] = [];
            aBodyRow.forEach((node) => {
                const aCol = node.querySelectorAll('.flex-table-col');
                aCol.forEach((elem) => {
                    if (elem && elem.textContent) {
                        aBodyData.push(elem.textContent.trim());
                    }
                });
            });
            expect(aBodyData).to.eql(aTestData);
            done();
        });
    });
});
