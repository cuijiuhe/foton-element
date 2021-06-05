<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
    @Component({
        name: "ProFormItem",
        render(h) {
            const { type } = this.$attrs;
            console.log(this.$attrs)
            return h(`el-${type}`)
        }
    })
    export default class extends Vue {
        
    }
</script>

<style>

</style>