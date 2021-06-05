<template>
    <el-card>
        <el-table :data="data">
            <el-table-column v-for="column of columns" :key="column.name" :label="column.title" :prop='column.name'></el-table-column>
        </el-table>
    </el-card>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
    @Component({
        name: "ProTable",
    })
    export default class extends Vue {
        @Prop({
           type: Array,
           required: true,
           default: () => []
        })
        private columns !: Array<any>;

        @Prop({
           type: Array,
           required: true,
           default: () => []
        })
        private data !: Array<any>;


        mounted () {
            console.log(this.columns)
        }
    }
</script>

<style>

</style>