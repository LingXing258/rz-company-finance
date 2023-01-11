<template>
  <div class="detail-page">
    <layout-index>

       <template #header>
        <common-nav></common-nav>
        <header-intro></header-intro>
       </template>

        <template #body>
        <tap></tap>
       </template>

    </layout-index>
    
  
   
  </div>
</template>
<script>
import LayoutIndex from '@/views/person-details/layout/LayoutIndex'
import HeaderIntro from '@/components/head-intro/HeadIntro.vue'
//通用导航栏
import CommonNav from '@/components/nav/CommonNav.vue'
import tap from '@/views/person-details/components/tap.vue'
export default {
  name: ' DetailIndex',
  data () {
    return {
      // activeName: 1,
      // activeName1: 1,
      // activeName2: 1,
      // activeName3: 1,
      // activeName4: 1,
      // show: true,
      // radio: 'male',
      // birthday: '',
      // age: '',
      // showPicker: false,
      // showPicker1: false,
      // currentDate: new Date(),
      // currentDate1: new Date(),
      // resultDate: '',
      // resultDate1: '',
      // minDate: new Date(1900, 0, 1), // 最小的可选的日期
      // phonenumber: ''
    }
  },
  components: {
    HeaderIntro,tap,LayoutIndex, CommonNav
  },
  methods: {
    // shows: function () {
    //   this.show = !this.show
    // },
    onConfirm: function () {
      this.resultDate = dayjs(this.currentDate).format('YYYY-MM-DD')
      this.showPicker = false
    },
    onConfirm1: function () {
      this.resultDate1 = dayjs(this.currentDate1).format('YYYY-MM-DD')
      this.showPicker1 = false
    }
  },
  watch: {
    resultDate (newVal, oldVal) {
      const today = dayjs().format('YYYY-MM-DD')
      const todays = dayjs(today)
      const birthday = dayjs(newVal)
      const year = todays.diff(birthday, 'year', true)
      if (year > 0) {
        this.age = parseInt(year)
      } else {
        this.age = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-page {
  
}
// html ,body{
//   height: 100%;
//   width: 100%;
// }
//  ::v-deep(.van-collapse-item__content ){
//   padding:0px
// }
// ::v-deep(.van-cell-group--inset) {
//   margin: 0px;
// }
// ::v-deep(.van-field__control){
//   text-align: right;
// }
// .content {
//   width: 100%;
//   }
//   .detail{
//     height: 100vh;
//     width: 100vw;
//   }
</style>
