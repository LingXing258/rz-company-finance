<template>
  <div class="showdata">
                      <ol>
                        <li >
                         <p><strong>{{ Balance.balance/10000  }}万元</strong></p>
                           <p>我的存量</p>
                        </li>
                        <li>
                          <p><strong>{{ Balance.joinNumber }}</strong></p>
                             <p>参与项目项</p>
                          </li>
                          <li>
                            <p><strong>{{   Balance.registerNumnber }}</strong></p>
                             <p>意向登记项</p>
                          </li>
                    </ol>
  </div>
</template>

<script>

export default {
  name: 'showdata',
  props:['Balance'],
  data() {
    return {
      // balans:this.Balance.balance
    }
  },
  computed:{
    // balans: function(){
    //   return this.balans/10000+'万元' 
    // } 
  },
}
</script>

<style lang="scss" scoped>
.showdata {
  background-color: $showdata-bg;
}
 ol{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 20px 15px
   }
   ol li{
    text-align: center;
    flex: 1;
    min-width: 0; //重点样式
    white-space: nowrap; //重点样式
   }
  strong {
    font-weight: 600;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
   font-size: 14px;
   padding-bottom: 24.58px;
   height: 0;
  //  padding-right: 20px
  }
  .van-col{
    font-size: 18px;
    background-color: $showdata-bg;
  }
</style>
