<template>
  <div class="titles">
    <van-nav-bar
  :title="Detailtitle"
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
  props:['Detailtitle'],
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
