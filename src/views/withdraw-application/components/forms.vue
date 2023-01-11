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
      v-model="balan"
      name="balance"
      readonly
      label="当前期存量投资额（万元）"
    />


  <van-field
  v-model="typeText"
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

<div class="back">
  <van-field
  v-model="partText"
   name="partText"
    label="请输入当前期存量投资额（万元）"
    :rules="[{ required: true, message: '输入不能为空,请填写请输入当前期存量投资额（万元）(合法数字)' }]"
    v-if="show"
    placeholder="输入不能为空,请填写请输入当前期存量投资额"
  @blur="toFix2"
/>
<van-field
  v-model="amount1"
   name="partText"
    label="请输入当前期存量投资额（大写万元）"
    :rules="[{ required: true, message: '输入不能为空,请填写请输入当前期存量投资额（万元）(合法数字)' }]"
    v-if="show"
    placeholder="输入不能为空,请填写请输入当前期存量投资额"
  @blur="toFix2"
/>
</div>


<van-field
      v-model="association_invest"
      name="association_invest"
      label="本期拟投资额（万元）"
      :rules="[{ required: true, message: '输入不能为空,请填写本期拟投资额（万元）(合法数字)' }]"
      @blur="toFix"
      />
    <van-field
      v-model="amount"
      name="up_association_invest"
      readonly
      type="textarea"
      autosize
      label="本期拟投资额（大写）"
    />
 <van-field
 v-model="leave_word"
    name="leave_word"
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
  name: 'StopForm',
  data () {
    return {
      association_invest: '',
      balance: 2556288,
      up_association_invest: '',
      type: '',
      name: '',
      leave_word: '',
      name_id:1,

    
      partText: '',
      up_partText: '',
      show:false,

      typeText: '',

      loading:true,
      showPicker2: false,
      notice: '提示: 根据本期规则，退资后同期存量投资额不少于20万元，若剩余不足，请选择全额退资',
      columns :[
      { text: '全款', value: 1 },
      { text: '部分', value: 2 },
    ]
    }
  },
  methods: {
    toFix: function() {
       var reg=/^\D/;//定义正则表达式，检查第一个字符是否为数字；
        var patrn = /^\d+(.\d+)?$/;
        if(patrn.test(this.association_invest)){
          this.association_invest=this.toFixed(this.association_invest,4)
        }
      },

      toFix2: function() {
       var reg=/^\D/;//定义正则表达式，检查第一个字符是否为数字；
        var patrn = /^\d+(.\d+)?$/;
        if(patrn.test(this.partText)){
          this.partText=this.toFixed(this.partText,4)
        }
        let par = parseFloat(this.partText)
         console.log(par)
            par=par*10000
            console.log(par)
        if(this.type==2 && par > this.balance) {
          this.$notify("你输入的金额大于当前期存量投资额");
        } else if(this.balance - par < 200000){
          this.$notify("退资后同期存量投资额不少于20万元，剩余不足，请选择全额退资");
        }
      },


   toFixed(num,decimal) {
	     num = num.toString();
	     let index = num.indexOf('.');
	     if (index !== -1) {
	     	num = num.substring(0, decimal + index + 1)
	     } else {
	     	num = num.substring(0)
	     }
	  return parseFloat(num).toFixed(decimal)
},
    onConfirm1:function(val) {
      this.type =val.value
      this.typeText =val.text
     this.showPicker2=false
     },
    onSubmit: function () {
      this.
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
      association_invest: this.association_invest*10000,
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
    dealBigMoney(rmb) {  
        var reg=/^\D/;//定义正则表达式，检查第一个字符是否为数字；
        var patrn = /^\d+(.\d+)?$/;
        if(patrn.test(rmb)){
          rmb=this.toFixed(rmb,4)
        }
         if((reg.test(rmb))||(rmb.length>=17)){//同时检查输入小写金额是否大于16位数？
                 return (reg.test(rmb))?"对不起，您输入的金额不正确！":"请输入小于九千万亿以下的数据！";
         }else{
                 var number=parseInt(rmb*10000);//大于16位数是这里会直接转为科学计算法，后面取余时计算不准确；
                 var str=[];//定义一个接受转换结果额字符串数组；
                 var cn=["","拾","佰","仟"];//配合 j 使用
                 var cns=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];//用余数作为该数组的下标，返回对应的大写；
                 var temp=number;//创建临时变量temp；为了便于理解，假设temp为 54321
                 for (var j=0,n=0;temp!=0;j++,n++){// j 用于判断 个 拾 佰 仟 万 ，n 用于判断 亿 位；
                         //下面一步取余，如果余数为零，则不需要加cn=["","拾","佰","仟"]
                         temp%10==0?str=cns[temp%10]+str:str=cns[temp%10]+cn[j]+str;//
                         temp=(temp-temp%10)/10;//54321减去54321%10后为54320，除以十（54320/10）后为5432，
                         if(j%3==0&&j!=0){//当 j 为3时表示已经到了第四位，下次循环时到了 万 位
                                 if(temp!=0) n%7!=0?str="万"+str:str="亿"+str;// 54321到这个时候str应该为   万肆仟叁佰二拾一
                                 j-=4;//重置  j   为0；
                         }
                 }
                 str=str.toString().replace(/[零]+/g,"零");//去掉重复的零
                 str=str.toString().replace(/[零][亿]+/g,"亿");
                 str=str.toString().replace(/[零][万]+/g,"万");
                 str=str.toString().replace(/[零][仟]+/g,"仟");
                 str=str.toString().replace(/[零][佰]+/g,"佰");
                 str=str.toString().replace(/[零][拾]+/g,"拾");
                 str=str.toString().replace(/[万][仟]+/g,"万");
                 str=str.toString().replace(/[亿][万]+/g,"亿");
                 str=str.toString().replace(/[壹][拾]/,"拾");//如果第一位为 壹拾万····，则改为十万······
                 if(str[str.length-1]=="零") str=str.slice(0,str.length-1);//去掉末尾的零
                 return str+"元整";//返回结果
         }//else结束
		   
		} 
  
  },
  computed:{
    amount() {
              let  invest=this.dealBigMoney(this.association_invest)
              this.up_association_invest=invest
      return  invest
    },
    amount1() {
              let  invest=this.dealBigMoney(this.partText)
              this.up_partText=invest
      return  invest
    },
    balan(){
        if(this.balance != '')  {
          this.balance=parseFloat(this.balance)
           if(isNaN(this.balance)){
             return this.balance 
           }else {
            return (this.balance)+'￥'
           }
        }
       },
    
  },
  watch:{
    type(newval,oldVal){
      console.log(newval)
      if(newval == 2) {
       this.show = true
      }else {
        this.show = false,
        this.partText = '',
        this.up_partText=''
      }
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
 .back>.van-cell{
  background-color: rgb(232, 242, 242);
  border-bottom:2px;
 }
 </style>
