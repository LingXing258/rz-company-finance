<template>
  <div class="operate">
    <van-grid  :border="false" square :column-num="3" icon-size="40px">
      <!-- <van-grid-item v-for="gridItem in item" :key="gridItem.id"
                 :class="gridItem.cl"
                 :icon="gridItem.icon"
                 :text="gridItem.text"
                 :to="gridItem.to+'?id='+gridItem.id"
                 :icon-prefix="gridItem.icon_prefix"
                 @click="toEachVue"
                 >
        </van-grid-item> -->
         <van-grid-item
                 class="iconfont"
                 icon="icon  icon-xiancunliangchaxun"
                 text="我的存量"
                 to="/stock"
                 icon-prefix="icon">
        </van-grid-item> 
        <van-grid-item
                 class="iconfont"
                 icon="icon  icon-zibenshichang"
                 text="参与项目"
                 to="/item"
                 icon-prefix="icon">
        </van-grid-item>
        </van-grid>
  </div>
</template>
<script>
export default {
  name: 'Operate',
  props:['operate'],
  methods:{
    toEachVue() {

    }
  },
  data () {
    return {
      //  item:[
      //        {id:1,cl:"iconfont",icon:'icon  icon-xiancunliangchaxun',text:"我的存量", icon_prefix:"icon",to: '/data', uid:55},
      //        {id:2,cl:"iconfont",icon:'icon  icon-xiancunliangchaxun',text:"我的存量", icon_prefix:"icon",to: '/data', uid:55},
      //        {id:3,cl:"iconfont",icon:'icon  icon-xiancunliangchaxun',text:"我的存量", icon_prefix:"icon",to: '/data', uid:55},
      //        {id:4,cl:"iconfont",icon:'icon  icon-xiancunliangchaxun',text:"我的存量", icon_prefix:"icon",to: '/data', uid:55},
      //        {id:5,cl:"iconfont",icon:'icon  icon-xiancunliangchaxun',text:"我的存量", icon_prefix:"icon",to: '/data', uid:55}
      // ], 
    }
  }
}
</script>
<style lang="scss" scoped>
.van-grid {
  background-color: $home-body-bg;
}
</style>
