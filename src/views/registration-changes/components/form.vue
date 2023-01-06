<template>
   <div class="fomr-page">
    <van-form @submit="onSubmit" ref="formData">
   <van-cell-group inset>
   <div class="light_red">
    <van-field
    class="light_red"
    v-model="inform"
    autosize
    type="textarea"
    readonly
  />
   </div>
   <div class="title-text"> <van-nav-bar title="项目信息" class="title-left" /></div>
    <van-field
      v-model="project_name"
      readonly
      name="project_name"
      label="项目名称"
    />
    <van-field
      v-model="periods"
      readonly
      name="periods"
      label="期数"
      placeholder="期数"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <div class="title-text"> <van-nav-bar title="登记信息" class="title-left" /></div>
    <van-field
      v-model="register"
      name="register"
      label="登记人"
      readonly
      placeholder="登记人"
    />
    <van-field
      v-model="balance"
      name="balance"
      readonly
      label="当前期存量投资额（万元）"
    />
    <van-field
      v-model="register_amount"
      name=" register_amount"
      label="本期拟投资额（万元）"
      :rules="userFrom.register_amount"
    />
    <van-field
      v-model="amount"
      name="up_association_invest"
      readonly
      label="本期拟投资额（大写）"
    />
    <van-field
      v-model="register_time"
      name="register_time"
      label="登记时间"
      readonly
    />
    <van-field
    v-model="leave_word"
    name="leave_word"
    rows="2"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    show-word-limit
  />
  <div class="light_red">
    <van-field
    class="light_red"
    v-model="leave_word"
    rows="1"
    autosize
    type="textarea"
    readonly
  />
   </div>
  </van-cell-group>
</van-form>
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  到最后啦
</van-divider>
</div>
</template>

<script>
import { sendRegistForm } from '@/services/registration-changes-services.js'
export default {
  name: 'registorForm',
  data () {
    return {
      userFrom:{
        register_amount:[
        { required: true, message: '本期拟投资额不能为空！' },
        { validator: (val) => {
              return  /^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/.test(val)
         },
         message: '请输入合法的数字'
         }
         ]
         },
      name_id: '',
      project_name: '财智项目',
      periods: '财智2301期',
      register: '超级管理员',
      register_amount: '',
      balance: '',
      // current_period_investment: '',
      up_association_invest: '',
      register_time: '2012-12-3:18:6:5',
      leave_word: '',
      // opinion: '',
      inform: '填表人请确认已于填表前知晓有限合伙的各项细节,并愿意以自有资金投资建大成序列合伙企业，成为对应合伙企业有限合伙人 。',
      notice: '说明：本期新增入资不低于5万元，且入资后财智总存量金额不低于25万元。您目前的存量投资额为',
     
      subject: '',
      register_start_date: '',
      register_end_date: '',
      name_id:'',
      subscription_end_date: '',
      balance:'',
      project_ID: '',
      subscription_start_date:'',
      loading:'',
    }
  },
  methods: {
    onSubmits: function () {
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
    onSubmit: async function() {
      let field= {
        subject:this.subject,
        up_association_invest: this.up_association_invest,
        register_amount: this.register_amount,
        leave_word:this.leave_word,
        project_name:this.project_name,
        register_start_date:this.register_start_date,
        name_id: this.name_id,
        register_time: this.register_time,
        subscription_end_date:this.subscription_end_date,
        balance: this.balance,
        project_ID:this.project_ID,
        subscription_start_date:this.subscription_start_date,
        periods: this.periods,
        register_end_date:this.register_end_date,
        register:this.register, 
        }
    let subs=[ ]
    let forms = {
        fromMobile: 1,
        flowKey: 'investment_register',
        formData:{main:{"fields":field},sub:subs},
        runId: ''
    }
      this.pullParentloaingTrue()
      let  { data } = await sendRegistForm(forms)
      if(data.result == 1 ) {
      this.pullParentloaingFalse()
        this.$toast.success(data.message)
      }else {
        this.pullParentloaingTrue()
        this.$toast.fail(data.message);
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
              let  invest=this.dealBigMoney(this.register_amount)
              this.up_association_invest=invest
      return  invest
    }
  }
}
</script>

<style>
 /* ::v-deep(.title-text.van-cell-group--inset){
    margin: 0px;
}
::v-deep(.title-text .title-left.van-nav-bar__title) {
    margin-left: 15px !important;
}
.title-text .van-nav-bar{
    background-color: rgb(232, 242, 242);
} */
.van-cell-group--inset {
    margin:0px;
}
.title-left .van-nav-bar__title {
    margin-left: 15px !important;
}
.title-text .van-nav-bar{
    background-color: rgb(232, 242, 242);
}
.light_red  .van-field__control{
    color:red;
}
</style>
