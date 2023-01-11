<template>
   <div class="pathError">
    <div class="container">
        <van-empty description="code:404 你所访问的页面不存在" />
    </div>
   </div>
</template>

<script>
export default {
 name:'pathError'
}
</script>

<style lang="scss" scoped>
.pathError {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>