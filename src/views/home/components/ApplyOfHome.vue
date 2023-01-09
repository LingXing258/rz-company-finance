<template>
    <div class="operate">
      <van-grid  :border="false" square :column-num="3" icon-size="35">
              <van-grid-item
                   class="iconfont"
                   icon="icon icon-xiangmukuzixiangmuyusuanxiadashenqingbiao"
                   text="信息变更"
                   icon-prefix="icon"
                   to="/newschange"
                   >
          </van-grid-item>
          <van-grid-item
                   class="iconfont"
                   icon="icon icon-dengjichayue"
                   text="意向登记"
                   icon-prefix="icon"
                   to="/registration"
                   >
          </van-grid-item>
          <van-grid-item
                   class="iconfont"
                   icon="icon icon-xinxi"
                   text="退资申请"
                   icon-prefix="icon"
                   to="/stop"
                   >
          </van-grid-item>
          </van-grid>
    </div>
  </template>
<script>
export default {
  name: 'ApplyHome',
  data () {
    return {
      show: true,
      tabData: [
        { icon: 'icon  icon-xiangmukuzixiangmuyusuanxiadashenqingbiao', text: '信息变更' },
        { icon: 'icon  icon-dengjichayue', text: '意向登记' },
        { icon: 'icon  icon-xinxi', text: '退资申请' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.van-grid {
  background-color: $home-body-bg;
}
</style>
