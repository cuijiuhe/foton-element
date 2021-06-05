<template>
    <div>
        <ProForm :items="items" @finish="handleFinish">
            <template #buttons>
                <slot name="buttons"></slot>
            </template>
        </ProForm>
        <ProTable style="margin-top: 20px" :columns="columns" :data="data" />
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import ProForm from '../ProForm/index.vue';
import ProTable from '../ProTable/index.vue'
    @Component({
        name: "PageList",
        components: {
            ProForm,
            ProTable
        }
    })
    export default class extends Vue {
        @Prop({
           type: Array,
           required: true,
           default: []
        })
        private items !: Array<any>;

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

        @Prop({
           required: true,
           default: ''
        })
        private server !: any;

         async handleFinish (vals: Object) {
             let data:Array<any> = [];
            //  if (typeof this.server === 'string') {
            //     ({ data } = await request({
            //         url: '/iot/user/getFactoryList',
            //         method: 'get'
            //     }))
            //  } else if ( typeof this.server === 'function') {
            //      ({ data } = await this.server());
            //  }
             ({ data } = await this.server())
                 this.data = data;
            
        }

        mounted () {
            console.log(this.$slots)
        }
    }
</script>

<style>

</style>