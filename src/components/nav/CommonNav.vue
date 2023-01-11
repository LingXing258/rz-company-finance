<template>
  <div class="titles">
    <van-nav-bar
      :title="titles"
      left-text="返回"
      left-arrow
      @click-left="evenBack "
>
</van-nav-bar>
  </div>
</template>

<script>
// import { computed, watch } from '@vue/runtime-core'
export default {
  name: 'Title',
  data() {
    return {
        titles:'',
        evenBack:''
    }
  },
  methods: {
    backHome : function () {
      this.$router.push({path:'/home'})
    },
    backDetail : function () {
      this.$router.push({path:'/detail'})
    },
    chargeTitles: function() {
       this.evenBack = this.backHome
      if(this.$route.path == '/newschange') {
         this.titles = '投资人信息变更表'
      }else if(this.$route.path == '/edit') {
        this.evenBack = this.backDetail
        this.titles = '编辑页面'
      }else if(this.$route.path == '/registration') {
        this.titles = '意向登记表'
      }else if(this.$route.path == '/detail') {
        this.titles = '详情页面'
      }else if(this.$route.path == '/stock') {
        this.titles = '我的存量'
      }else if(this.$route.path == '/item') {
        this.titles = '参与项目'
      }else if(this.$route.path == '/stop') {
        this.titles = '退出申请表'
      }
    },
  },
  mounted() {
    this.chargeTitles()
  }
}
</script>

<style lang="scss" scoped>
</style>
