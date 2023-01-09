<template>
   <div class="information-changes">
    <layout-index>
       <template #header>

        <titles :Detailtitle="titles"> </titles>

       </template>
       <template #body>

       <forms ref="chilrenForm" :newsChange="main" @buttonLoading="getChildrenNews"></forms>

      </template>
      <template #footer>
        
        <van-button round block type="primary" @click="touchChildWays"  :loading="loading" > 提交</van-button>
        
      </template>
    </layout-index>
       
       </div>
</template>
<script>
import LayoutIndex from '@/views/information-changes//layout/LayoutIndex.vue'
import Titles from '@/views/information-changes/components/title.vue'
import Forms from '@/views/information-changes/components/form.vue'
import newsError from '@/views/error/index.vue'
import { sendStartForm }  from '@/services/information-changes-services.js'
export default {
  name: 'newsIndex',
  components: { Titles, Forms, newsError ,LayoutIndex},
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
</style>
