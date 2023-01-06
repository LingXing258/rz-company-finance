<template>
   <div class="container" >
      <div class="page">
    <template v-if="show">
    
    <introdouce-home :intro="home"></introdouce-home>
    
    <titles-home>
      <template v-slot:showData> 数据展示  </template>
    </titles-home>
    <present-data-home :Balance="home"></present-data-home>
    <space-home></space-home>


    <titles-home>
      <template v-slot:oparate> 我的应用 </template>
    </titles-home>
    <operate-home :operate="home"></operate-home>
    <space-home></space-home>

  
    <titles-home>
      <template v-slot:showData>我的操作</template>
    </titles-home>
      <apply-home></apply-home>
    </template>

    <tempalte v-else>
      <div class='error' >
         <error-home :errorTip="errorTip"></error-home>
      </div>
    </tempalte>
   </div>
  </div>
</template>

<script>
import IntrodouceHome from '@/views/home/components/IntrodouceHome.vue'
import PresentDataHome from '@/views/home/components/PresentDataHome.vue'
import SpaceHome from '@/views/home/components/SpaceHome.vue'
import OperateHome from '@/views/home/components/OperateHome.vue'
import TitlesHome from '@/views/home/components/TitleHome.vue'
import ApplyHome from '@/views/home/components/ApplyHome.vue'
import ErrorHome from '@/views/error/index.vue'
import { getGZTPZ } from '@/services/home-service.js'
export default {
  name: 'Home',
  components: {
    IntrodouceHome , PresentDataHome ,SpaceHome , OperateHome ,TitlesHome, ApplyHome ,ErrorHome
  },
  data () {
    return {
      show: 'true',
      home:{ 
        name:'官宇',
        balance:50000000,
        joinNumber:5,
        registerNumnber:3
      },
      items:[],
      errorTip: '请求错误',
      showData: '数据展示',
     
    }
  },
  methods: {
    getGZTPZId:async function() {
        let { data }=  await getGZTPZ()
        this.items = data
    }
  },
  created () {
      // let  data =  this.getGZTPZId()
       
  }
}
</script>

<style>
.container{

}
</style>
