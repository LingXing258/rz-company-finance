<template>
  <div class="table">
    <van-form>
              <van-cell-group inset>
                  <van-field v-model="Identification"      label="识别号"  readonly/>
                  <van-field v-model="investor"      label="投资人" readonly/>
                  <van-field v-model="balance" label="现有余额"  readonly/>
                  <van-field v-model="periods" label="期数"  readonly/>
                  <van-field v-model="stock"     label="存量" readonly/>
                  <van-field v-model="interest"     label="累计已发放利息" readonly/>
              </van-cell-group>
     </van-form>
  </div>
</template>

<script>
export default {
  name: 'table',
   data(){
    return {
        Identification:'123',
              investor:'456',
              balance:'789',
              interest:'365',

              periods:'3',
              stock:'66555544788',
                  }
   }
  
}
</script>

<style lang="scss" scoped>
 .van-cell-group--inset {
  margin: 0;
 }
</style>
