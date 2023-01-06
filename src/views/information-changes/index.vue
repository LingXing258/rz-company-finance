<template>
   <div class="container">   
       <template  v-if="show">
        <div class="title">
           <div class="header">
               <titles :Detailtitle="titles">
               </titles>
            </div>
            <div class="body">
                <div class="scroll-y">
                   <forms ref="chilrenForm" :newsChange="main" @buttonLoading="getChildrenNews"></forms>
                </div>
             </div>
             <div class="footer" >
                <van-button round block type="primary" @click="touchChildWays"  :loading="loading" >
               提交
             </van-button>
            </div>
       </div>
       </template> 
       <template v-else>
        <news-error></news-error>
       </template>
       </div>
</template>
<script>
import Titles from '@/views/information-changes/components/title.vue'
import Forms from '@/views/information-changes/components/form.vue'
import newsError from '@/views/error/index.vue'
import { sendStartForm }  from '@/services/information-changes-services.js'
export default {
  name: 'newsIndex',
  components: { Titles, Forms, newsError },
  data() {
    return {
      show:true,
      loading:false,
      titles:'',
      main: {
      },
      forms:{
      defid:'',
      formKey:'',
      version: 0,
      pk: '',
      }
    }
  },
  methods: {
    touchChildWays: function () {
    this.$refs.chilrenForm.onSubmits()
    },
    chargeTitles: function() {
      if(this.$route.path == '/newschange') {
         this.titles = '投资人信息变更表'
      } else if(this.$route.path == '/edit') {
        this.titles = '编辑'
      }
    },
    getChildrenNews: function(loading) {
        this.loading=loading
    },
    getStartForm:async function() {
      let  data    = await sendStartForm(this.forms)
      if(data.result == 'true') {
         this.main = data.data.main
         this.show = true
      }else {
        // this.show = false
      }
    }
  },
 
  created(){
      this.chargeTitles()
      this.getStartForm()
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
.footer {
   height: 50px;
}
</style>
