<template>
    <div>
        <h3>基础用法</h3>
        <p>
            表格的简单用法
            <a
                href="https://github.com/tm-fe/FlexTable/blob/master/examples/features/index.vue"
                >source code</a
            >
        </p>
        <flex-table
            resizable
            :loading="loading"
            :columns="columns"
            :data="list"
            :sum="sum"
            :minWidth="80"
            :maxWidth="600"
            @on-scroll-x="onTableScroll"
            :virtualScroll="6"
        ></flex-table>
        <button @click="add">按钮</button>
    </div>
</template>
<script>
// import flexTable from '../../index.js';

const aTestList = [];
const aTestList2 = [];
for (let i = 0; i < 2; i++) {
    const oTestData = {
        name: 'John Brown',
        age: 18,
        sex: '男',
        school: 'high school',
        color: 'red',
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03',
        num: i,
    };
    aTestList.push(oTestData);
}

for (let i = 0; i < 7; i++) {
    const oTestData = {
        name: 'John Brown',
        age: 18,
        sex: '男',
        school: 'high school',
        color: 'red',
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew Y',
        date: '2016-10-03',
        num: i,
    };
    aTestList2.push(oTestData);
}

export default {
    // components:{
    //     flexTable
    // },
    data() {
        return {
            aTestList: aTestList,
            columns: [
                {
                    title: 'Name',
                    key: 'name',
                    width: 240,
                },
                {
                    title: 'Number',
                    key: 'num',
                    width: 240,
                },
                {
                    title: 'Age',
                    key: 'age',
                    width: 140,
                    render(h, params) {
                        return h('span', 'age: ' + params.row.age);
                    },
                },
                {
                    title: 'Address',
                    key: 'address',
                    width: 240,
                },
                {
                    title: 'Sex',
                    key: 'sex',
                    width: 140,
                },
                {
                    title: 'School',
                    key: 'school',
                    width: 240,
                },
                {
                    title: 'Color',
                    key: 'color',
                    width: 140,
                },
                {
                    title: 'Date',
                    key: 'date',
                    width: 240,
                },
            ],
            loading: false,
            list: aTestList,
            list2: aTestList2,
            sum: {
                name: 'Jim Green',
                age: 24,
                address: 'London',
                date: '2016-10-01',
            },
        };
    },
    mounted() {},
    methods: {
        onTableScroll(event) {
            console.log(event.target.scrollLeft);
        },
        add() {
            aTestList.unshift({
                name: '666',
                age: 18,
                sex: '男',
                school: 'high school',
                color: 'red',
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03',
                num: 21,
            });
        },
    },
};
</script>