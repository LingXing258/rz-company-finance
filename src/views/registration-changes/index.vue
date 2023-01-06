<template>
  <div class="container">
     <div class="title">
           <div class="header">
              <titles></titles>
           </div>
       <div class="body">
           <div class="scroll-y">
               <forms ref="form" @loadingButton="getChildrenLoading"></forms>
           </div>
       </div>
      <div class="footer">
            <van-button round block type="primary" native-type="submit" @click="submit" :loading=loading>
            提交
             </van-button>
         </div>
     </div>
  </div>
</template>
<script>
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
  components: { Titles, Forms },
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
.container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.title {
    height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
}
.body {
   flex: 1;
   overflow: hidden;
}
.body .scroll-y {
    overflow-y: auto;
    height: 100%;
}

.body {
   flex: 1;
   overflow: hidden;
}
.body .scroll-y {
    overflow-y: auto;
    height: 100%;
}
.footer {
   height: 50px;
}

</style>
