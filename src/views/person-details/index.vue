<template>
  <div class="detail">
    <layout-detail-vue>
       <template name="header">
        8
       </template>
       
       <!-- <template slot="body">
        <tap></tap>
       </template> -->

    </layout-detail-vue>
    
  
   
  </div>
</template>
<script>
import LayoutDetailVue from './layout/LayoutDetail.vue'
import intro from '@/views/person-details/components/introdouce.vue'
import titles from '@/views/person-details/components/title.vue'
import tap from '@/views/person-details/components/tap.vue'
// import dayjs from 'dayjs'
export default {
  name: ' personDetailIndex',
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
    intro,titles,tap, LayoutDetailVue
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
html ,body{
  height: 100%;
  width: 100%;
}
 ::v-deep(.van-collapse-item__content ){
  padding:0px
}
::v-deep(.van-cell-group--inset) {
  margin: 0px;
}
::v-deep(.van-field__control){
  text-align: right;
}
.content {
  width: 100%;
  }
  .detail{
    height: 100vh;
    width: 100vw;
  }
</style>
