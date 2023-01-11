<template>
  <div class="table">
    <van-form>
              <van-cell-group inset>
                  <van-field v-model="stockForm.Identification"      label="识别号"  readonly/>
                  <van-field v-model="stockForm.investor"      label="投资人" readonly/>
                  <van-field v-model="stockForm.periods" label="期数"  readonly/>
                  <van-field v-model="stock"     label="存量(万元)" readonly/>
                  <van-field v-model="balance" label="现有余额(万元)"  readonly/>
                  <van-field v-model="interest"     label="累计已发放利息" readonly/>
              </van-cell-group>
     </van-form>
  </div>
</template>

<script>
import { getStockData  } from '@/services/stock-service'
export default {
  name: 'table',
   data(){
    return {
         stockForm:{
          Identification:'1288888',
          investor:'关羽',
          balance:'789',
          interest:'365',
          periods:'3',
          stock:'66555',
         },
         show:''
   }
   },
   methods:{
  //   getStock:async function(){
  //    let {data} = await  getStockData()
  //       if() {
  //        this.show=false
  //      // this.stockForm= data
  //      }else {
  //       this.show=true
  //     }
  // }
   },
   computed:{
      stock(){
        if(this.stockForm.stock != '')  {
          this.stockForm.stock=parseFloat(this.stockForm.stock)
           if(isNaN(this.stockForm.stock)){
             return this.stockForm.stock
           }else {
            return (this.stockForm.stock)+'￥'
           }
        }
       },
       balance(){
        if(this.stockForm.balance != '')  {
          this.stockForm.balance=parseFloat(this.stockForm.balance)
           if(isNaN(this.stockForm.balance)){
             return this.stockForm.balance 
           }else {
            return (this.stockForm.balance)+'￥'
           }
        }
       },
       interest() {
        if(this.stockForm.interest != '')  {
          this.stockForm.interest=parseFloat(this.stockForm.interest)
           if(isNaN(this.stockForm.interest)){
             return this.stockForm.interest 
           }else {
            return (this.stockForm.interest)+'￥'
           }
        }
        
       },

   },
   created() {
    //  this.getStock()
   }
}
</script>

<style lang="scss" scoped>
 .van-cell-group--inset {
  margin: 0;
 }
</style>
