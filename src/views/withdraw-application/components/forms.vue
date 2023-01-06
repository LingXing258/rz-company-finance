<template>
 <div class="fomr-page">
  <van-form @submit="onSubmits" ref="formData">
 <van-cell-group inset>
 <div class="title-text"> <van-nav-bar title="项目信息" class="title-left" /></div>
  <van-field
    v-model="name"
    readonly
    name="name"
    label="姓名"
  />
  <van-field
      v-model="balance"
      name="balance"
      readonly
      label="当前期存量投资额（万元）"
    />
  <van-field
  v-model="fieldValue"
  is-link
   name="type"
    label="退资类型"
    readonly
  @click="showPicker2 = true"
/>
<van-popup :show="showPicker2" round position="bottom">
  <van-picker
   v-model="selectedValues"
    :columns="columns"
    @cancel="showPicker2 = false"
    @confirm="onConfirm1"
  />
</van-popup>
<van-field
      v-model="association_invest"
      name="association_invest"
      label="本期拟投资额（万元）"
      :rules="[{ required: true, message: '输入不能为空,请填写本期拟投资额（万元）(合法数字)' }]"
    />
    <van-field
      v-model="up_association_invest"
      name="up_association_invest"
      readonly
      type="textarea"
      autosize
      label="本期拟投资额（大写）"
    />
 <van-field
 v-model="opinion"
    name="opinion"
    rows="2"
    autosize
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    show-word-limit
  />
  <div class="light_red">
    <van-field
    class="light_red"
    v-model="notice"
    rows="1"
    autosize
    type="textarea"
    readonly
  />
   </div>
   <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"> 到最后啦</van-divider>

  </van-cell-group>
</van-form>
</div>
</template>

<script>
import { sendStopForm } from '@/services/withdraw-application-services.js'
export default {
  name: 'form',
  data () {
    return {
      association_invest: '',
      balance: '',
      up_association_invest: '',
      type: '',
      name: '',
      leave_word: '',
      name_id:1,
      loading:true,
      showPicker2: false,
      inform: '填表人请确认已于填表前知晓有限合伙的各项细节,并愿意以自有资金投资建大成序列合伙企业，成为对应合伙企业有限合伙人 。',
      notice: '说明：本期新增入资不低于5万元，且入资后财智总存量金额不低于25万元。您目前的存量投资额为',
      columns :[
      { text: '全款', value: 'Hangzhou' },
      { text: '部分', value: 'Ningbo' },
    ]
    }
  },
  methods: {
    onSubmit: function () {
      this.$refs.formData.submit()
    },
    pullParentloaingTrue:function() {
      this.loading=true,
      this.$emit('loadingButton',this.loading)
    },
    pullParentloaingFalse:function() {
      this.loading=false,
      this.$emit('loadingButton',this.loading)
    },
    onSubmits:async function () {
      let field= {
      association_invest: this.association_invest,
      balance: this.balance,
      up_association_invest: this.up_association_invest,
      type: this.type,
      name: this.name,
      leave_word: this.leave_word,
      name_id:this.name_id,
        }
    let subs=[]
    let forms = {
        fromMobile: 1,
        flowKey: 'yxdc',
        formData:{main:{"fields":field},sub:subs},
        runId: ''
    }
      this.pullParentloaingTrue()
      let  { data } = await sendStopForm(forms)
      if(data.result == 1 ) {
        this.pullParentloaingFalse()
        this.$toast.success(data.message)
      }else {
        this.pullParentloaingTrue()
        this.$toast.fail(data.message);
      } 
    },
    dealBigMoney(n) {  
        var reg = /^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/;
         if(reg.test(n) ){
            n=n*10000
          var fraction = ['角', '分'];  
		    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];  
		    var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];  
		    var head = n < 0? '欠': '';  
  
		    n = Math.abs(n);  
		   
		    var s = '';  
		 
		    for (var i = 0; i < fraction.length; i++)   
		    {  
		        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');  
		    }  
		    s = s || '整';  
		    n = Math.floor(n);  
		 
		    for (var i = 0; i < unit[0].length && n > 0; i++)   
		    {  
		        var p = '';  
		        for (var j = 0; j < unit[1].length && n > 0; j++)   
		        {  
		            p = digit[n % 10] + unit[1][j] + p;  
		            n = Math.floor(n / 10);  
		        }  
		        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;  
		    }  
		    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');  
         }else {
            return ''
         }
		   
		} 
  },
  watch: {
    current_period_investment (newVal, oldVal) {
      this.current_period_investment_I=this.dealBigMoney(newVal)
      console.log(this.dealBigMoney(newVal))
    }
  }
}
</script>

<style>
 .van-cell-group--inset{
    margin: 0px;
}
.title-text .title-left .van-nav-bar__title {
    margin-left: 15px !important;
}
 .title-text .van-nav-bar{
     background-color: rgb(232, 242, 242);
 }
 .light_red  .van-field__control{
     color:red;
 }
 </style>
