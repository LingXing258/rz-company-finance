<template>
  <div class="title">
    <van-nav-bar>
      <template #left>
        <slot name="showData"></slot>
        <slot name="oparate"></slot>
        <slot name="myApply"></slot>
     </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'LeftTitleHome'
}
</script>

<style lang="scss" scoped>
 .title :deep(.van-nav-bar__left) {
  left: -5px;
  font-size: 15px;
 }
</style>
