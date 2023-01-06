<template>
    <div class="stop">
        <div class="title">
         <div class="header">
         <titles></titles>
       </div>
       <div class="body">
          <div class="scroll-y">
             <forms ref="form"></forms>
          </div>
       </div>
       <div class="footer">
         <van-button round block type="primary" native-type="submit" @click="submit">
       提交
     </van-button>
       </div>
        </div>
    </div>
</template>
<script>
import Titles from '../stop/components/titles.vue'
import Forms from '../stop/components/forms.vue'
export default {
  name: 'index',
  components: { Titles, Forms },
  methods: {
    submit: function () {
      this.$refs.form.onSubmit()
    }
  }
}
</script>
<style lang="scss" scoped>
.stop{
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
 .footer {
    height: 50px;
}
</style>
