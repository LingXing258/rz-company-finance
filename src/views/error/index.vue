<template>
    <div class="error-page">
        <div class="error-show">
            <van-empty image="network" :description="errorTip"></van-empty>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorTip: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-page {
  width: 100vw;
  height: 100vh;;
  position: relative;
  overflow: hidden;
  }
  .error-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  }
</style>
