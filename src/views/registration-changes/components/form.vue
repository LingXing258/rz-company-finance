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
    />
    <div class="title-text"> <van-nav-bar title="登记信息" class="title-left" /></div>
    <van-field
      v-model="register"
      name="register"
      label="登记人"
      readonly
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
      placeholder="请填写本期拟投资额"
      :rules="userFrom.register_amount"
      @blur="toFix"
    />
    <van-field
      v-model="amount"
      name="up_association_invest"
      readonly
      label="本期拟投资额（大写）"
    >
  </van-field>
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
    v-model="notice"
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
import { dealBigMoney  } from '@/utils/dealBigMoney.js'
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
      register_amount: '',
      up_association_invest: '',
      leave_word: '',
      name_id:       this.$store.state.user.name_id,
      project_name:  this.$store.state.user.project_name,
      periods:       this.$store.state.user.periods,
      register:      this.$store.state.user.register,
      register_time: this.$store.state.user.register_time,

      inform: '填表人请确认已于填表前知晓有限合伙的各项细节,并愿意以自有资金投资建大成序列合伙企业，成为对应合伙企业有限合伙人 。',
      notice: '说明：本期新增入资不低于5万元，且入资后财智总存量金额不低于25万元。您目前的存量投资额为', 
      subject:                 this.$store.state.user.subject,
      register_start_date:     this.$store.state.user.register_start_date,
      register_end_date:       this.$store.state.user.register_end_date, 
      name_id:                 this.$store.state.user.name_id,           
      subscription_end_date:   this.$store.state.user.subscription_end_date, 
      balance:                 this.$store.state.user.balance, 
      project_ID:              this.$store.state.user.project_ID, 
      subscription_start_date: this.$store.state.user.subscription_start_date, 
      loading:'',
    }
  },
  methods: {
    blurtoFix: function() {
       var reg=/^\D/;//定义正则表达式，检查第一个字符是否为数字；
        var patrn = /^\d+(.\d+)?$/;
        if(patrn.test(this.register_amount)){
          this.register_amount=this.toFixed(this.register_amount,4)
        }
    },
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
        register_amount: this.register_amount*10000,
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
    console.log( field.register_amount)
      // this.pullParentloaingTrue()
      // let  { data } = await sendRegistForm(forms)
      // if(data.result == 1 ) {
      // this.pullParentloaingFalse()
      //   this.$toast.success(data.message)
      // }else {
      //   this.pullParentloaingTrue()
      //   this.$toast.fail(data.message);
      // }
    },
    

   
  
  },
  computed:{
    amount() {
          let  invest=dealBigMoney(this.register_amount)
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
