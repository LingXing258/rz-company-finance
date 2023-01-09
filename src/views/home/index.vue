<template>
   <div class="home-page" >

    <template v-if="show">
    <introdouce-home :intro="home"></introdouce-home>
    
    <titles-home>
      <template v-slot:showData> 数据展示  </template>
    </titles-home>
    <present-data-home :Balance="home"></present-data-home>
    <gap-with-ten-px></gap-with-ten-px>


    <titles-home>
      <template v-slot:oparate> 我的应用 </template>
    </titles-home>
    <operate-home :operate="home"></operate-home>
    <gap-with-ten-px></gap-with-ten-px>
  
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
</template>

<script>
import IntrodouceHome from '@/views/home/components/IntrodouceOfHome.vue'
import PresentDataHome from '@/views/home/components/PresentDataHome.vue'
import GapWithTenPx from '@/components/gap/GapWithTenPx.vue';
import OperateHome from '@/views/home/components/OperateOfHome.vue'
import TitlesHome from '@/views/home/components/TitleOfHome.vue'
import ApplyHome from '@/views/home/components/ApplyOfHome.vue'
import ErrorHome from '@/views/error/index.vue'
import { getGZTPZ } from '@/services/home-service.js'
export default {
  name: 'homeIndex',
  components: {
    IntrodouceHome, 
    PresentDataHome,
    GapWithTenPx,
    OperateHome,
    TitlesHome,
    ApplyHome,
    ErrorHome
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
       
  }
}
</script>

<style>
</style>
