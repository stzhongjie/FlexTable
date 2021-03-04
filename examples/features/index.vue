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
            :virtualScroll="5"
        ></flex-table>
        <button @click="add">按钮</button>
        <button @click="del">删除</button>
    </div>
</template>
<script>
// import flexTable from '../../index.js';

const aTestList = [];
for (let i = 0; i < 2; i++) {
    const oTestData = {
        name: 'John Brown' + `${i}`,
        age: 18,
        sex: '男',
        school: 'high school',
        color: 'red',
        address: 'New York',
        date: '2016-10-03',
        num: i,
    };
    aTestList.push(oTestData);
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
                },
                {
                    title: 'Number',
                    key: 'num',
                },
                {
                    title: 'Age',
                    key: 'age',
                    render(h, params) {
                        return h('span', 'age: ' + params.row.age);
                    },
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Sex',
                    key: 'sex',
                },
                {
                    title: 'School',
                    key: 'school',
                },
                {
                    title: 'Color',
                    key: 'color',
                },
                {
                    title: 'Date',
                    key: 'date',
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
        };
    },
    mounted() {},
    methods: {
        onTableScroll(event) {
            console.log(event.target.scrollLeft);
        },
        add() {
            aTestList.unshift({
                name: '666' + `   ${aTestList.length}`,
                age: 18,
                sex: '男',
                school: 'high school',
                color: 'red',
                address: 'New York No',
                date: '2016-10-03',
                num: 21,
            });
        },
        del() {

            aTestList.splice(0,1)
            console.log('aTestList: ', aTestList);

        },
    },
};
</script>