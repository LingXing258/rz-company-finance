<template>
  <div class="titles">
    <van-nav-bar
  :title="titles"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
>
</van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
        titles:''
    }
  },
  methods: {
    onClickLeft: function () {
      this.$router.push({ name: 'home' })
    },
    chargeTitles: function() {
        console.log(this.$route.path)
      if(this.$route.path == '/newschange') {
         this.titles = '投资人信息变更表'
      }else if(this.$route.path == '/edit') {
        this.titles = '编辑'
      }else if(this.$route.path == '/registration') {
        this.titles = '意向登记表'
      }else if(this.$route.path == '/detail') {
        this.titles = '详情页面'
      }else if(this.$route.path == '/stock') {
        this.titles = '我的存量'
      }else if(this.$route.path == '/item') {
        this.titles = '参与项目'
      }
    },
  },
  mounted() {
    this.chargeTitles()
  }
}
</script>

<style lang="scss" scoped>
//  .title {
//     width: 100%;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: $newschange-bg;
//  }
 h1{
    font-weight: 700;
 }
</style>
