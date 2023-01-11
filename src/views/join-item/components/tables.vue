<template>
  <div class="table">
     <template v-if="!show">
      <div class="table-item" v-for="item in items" :key="item.id">
      <!-- <van-form>
              <van-cell-group inset>
                  <van-field v-model="item.itemName" label="项目名"  readonly/>
                  <van-field v-model="item.periods" label="期数"  readonly/>
                  <van-field v-model="item.intention_amount"   label="意向金额" readonly/>
              </van-cell-group>
              <gap-with-ten-px></gap-with-ten-px>
     </van-form> -->
     <van-cell title="项目名">
              <template #value>
                 {{ item.itemName  }}     
              </template>
      </van-cell>
      <van-cell title="期数">
              <template #value>
                 {{ item.periods }}   
              </template>
      </van-cell>
      <van-cell title="意向金额" v-if="item.intention_amount !='' ">
              <template #value>
                 {{item.intention_amount }}<span v-if="amountWith$(item.intention_amount)">￥</span> <span v-else></span>
              </template>
      </van-cell>
      <gap-with-ten-px></gap-with-ten-px>
     </div>
     </template>

     <template v-else>
       <inter-error></inter-error>
     </template>
  </div>
  
</template>

<script>
import GapWithTenPx from '@/components/gap/GapWithTenPx.vue';
import InterError from '@/views/error/intererror'
import {  getItemData } from '@/services/join-item-services'
export default {
  name: 'JoinItemTable',
  components:{
    GapWithTenPx, InterError
  },
   data(){
    return {
            items:[
              {id:1, periods:'3',intention_amount:'FDD', itemName:'喜洋洋'},
              {id:2, periods:'3',intention_amount:'66555544788', itemName:'灰太狼'},
              {id:3, periods:'3',intention_amount:'66555544788', itemName:'12345'},
              {id:4, periods:'3',intention_amount:'66555544788', itemName:'895555'},
              {id:5, periods:'3',intention_amount:'66555544788', itemName:'2322445'},
              {id:6, periods:'3',intention_amount:'66555544788', itemName:'895555'},
              {id:7, periods:'3',intention_amount:'66555544788', itemName:'2322445'},
            ],
            show:false,
            show$:false,
                  }
   },
   methods:{
  //   getitems:async function(){
  //     // let {data} = await getItemData()
  //     //    if() {
  //     //     this.show=false
  //      //   this.items = data
  //     //   }else {
  //     //    this.show=true
  //     //  }
    // }
   amountWith$:function(account) {
        if(account != '' ) {
             if(isNaN(account)){
             return false
           }else {
            return true
        }
      }
   }

   },
   created() {
    //  this.getitems()
   },
   computed:{
    intention_amount(){
      // for(item in this.items) {
      //   if(item.intention_amount != '' ) {
      //        if(isNaN(this.stockForm.stock)){
      //        return this.stockForm.stock
      //      }else {
      //       return (this.stockForm.stock)+'￥'
      //      }
      //   }
      // }
        // if(this.items.intention_amount != '')  {
        //   this.stockForm.stock=parseFloat(this.stockForm.stock)
        //    if(isNaN(this.stockForm.stock)){
        //      return this.stockForm.stock
        //    }else {
        //     return (this.stockForm.stock)+'￥'
        //    }
        // }
       },
   },
  
}
</script>

<style lang="scss" scoped>
 .van-cell-group--inset {
  margin: 0;
 }
</style>
