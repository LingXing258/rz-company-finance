<template>
  <div class="table">
     <div class="table-item" v-for="item in items" :key="item.id">
      <van-form>
              <van-cell-group inset>
                  <van-field v-model="item.itemName" label="项目名"  readonly/>
                  <van-field v-model="item.periods" label="期数"  readonly/>
                  <van-field v-model="item.intention_amount"     label="意向金额" readonly/>
              </van-cell-group>
     </van-form>
     <gap-with-ten-px></gap-with-ten-px>
     </div>
  </div>
  
</template>

<script>
import GapWithTenPx from '@/components/gap/GapWithTenPx.vue';
export default {
  name: 'table',
  components:{
    GapWithTenPx
  },
   data(){
    return {
            items:[
              {id:1, periods:'3',intention_amount:'66555544788', itemName:''},
              {id:2, periods:'3',intention_amount:'66555544788', itemName:''},
              {id:3, periods:'3',intention_amount:'66555544788', itemName:''},
              {id:4, periods:'3',intention_amount:'66555544788', itemName:''},
              {id:5, periods:'3',intention_amount:'66555544788', itemName:''},
            ]
                  }
   }
  
}
</script>

<style lang="scss" scoped>
 .van-cell-group--inset {
  margin: 0;
 }
</style>
