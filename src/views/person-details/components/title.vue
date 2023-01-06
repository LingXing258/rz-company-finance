<template>
    <div class="titles">
      <van-nav-bar
    left-text="返回"
    :title = 'title'
    left-arrow
    @click-left="onClickLeft"
  />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Title',
    data() {
      return {
        title:'详情页'
      }
    },
    methods: {
      onClickLeft: function () {
        this.$router.push({ name: 'home' })
      }
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
  