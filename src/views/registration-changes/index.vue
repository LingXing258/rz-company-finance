<template>
  <div class="registration">

   <layout-index>
      <template #header>
        <titles></titles>
       </template>

        <template #body>
          <forms ref="form" @loadingButton="getChildrenLoading"></forms>
       </template>

       <template #footer>
        <van-button round block type="primary" native-type="submit" @click="submit" :loading=loading>提交</van-button>
       </template>
   </layout-index>

  </div>
</template>
<script>
import LayoutIndex from '@/views/registration-changes/layout/LayoutIndex.vue'
import Titles from '@/views/registration-changes/components/titles.vue'
import Forms from '@/views/registration-changes/components/form.vue'
export default {
  name: 'registration',
  data () {
    return {
      show: true,
      loading:false
    }
  },
  components: { Titles, Forms,LayoutIndex },
  methods: {
    submit: function () {
      this.$refs.form.onSubmits()
    },
    getChildrenLoading: function(loading) {
      this.loading = loading
    }   
  }
}
</script>
<style lang="scss" scoped>
</style>
