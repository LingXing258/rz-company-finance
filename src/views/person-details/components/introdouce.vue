<template>
   <div class="container">
    <div class="intro">
    <div class="intro-img">
          <slot name="leftImg"></slot>
          <van-image fit round icon-prefix="icon icon-bianzubeifen3" class="iconfont"></van-image>
    </div>
    <div class="intro-text">
     <div class="intro-line">
           <p>
           关羽
        </p>
     </div>
    </div>
    <div class="intro-button">
    <slot name="rightButton"></slot>
    <van-button type="primary" round size="mini" to="/edit" @click="openchildActive">编辑</van-button>
   </div>
    </div>
    </div>
    </template>
    <script>
    export default {
    name: 'intro',
    data () {
      return {
     }
    }
    }
    </script>
    <style lang="scss" scoped>
    .intro-img :deep(.van-image__loading-icon) {
      font-size: 35px;
    }
    .intro {
      height: 150px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: $introduce-bg;
    }
    .intro-img .van-image {
      width: 70px;
      height: 70px;
     }
    .intro .intro-img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 30%;
    }
    .intro .intro-text {
      flex-basis: 50%;
      padding:20px 20px 0 20px;
    }
    .intro  .intro-button {
      flex-basis: 20%;
    }
    .van-button {
    padding: 0px 10px;
    }
    .van-image {
       width: 80px;
      height: 80px;
    }
    p{
       font-size: 16px;
       color: #fff;
       margin-bottom: 2px
    }
    </style>