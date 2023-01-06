<template>
   <div class="login">
    <van-nav-bar :title="title" />
<van-form ref="formName"  @submit="onSubmit">
      <van-field
        v-model="loginForm.phone"
        label="手机号码"
        placeholder="手机号"
        type="tel"
        name="tel"
        clearable
        maxlength="11"
        :rules="validateForm.tel"
      />
      <van-field
        v-model="loginForm.code"
        center
        name="code"
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
        :rules="validateForm.code"
      >
        <template #button>
          <van-button size="small" type="primary"  @click="sendSmsCode" :disabled="isSendCode">{{  sendBtnText }}</van-button>
        </template>
    </van-field>
    <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
    </van-form>
   </div>
</template>

<script>
import { getCode, sendLoginForm } from '@/services/login-services'
export default {
  name:'Login',
  data() {
    return {
        validateForm:{
             tel:[
            { required:true,message: '手机号不能为空'},
            { validator: (val) => { 
            return  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val) }, 
            message: '手机格式不正确' }
             ],
             code:[
              { required: true, 
                message: '验证码不能为空！'
               },

              {
               validator: (val) => {
              return val.length === 6
            },
            message: '验证码格式不对！'
              }
            
            ],
         


             },
        loginForm:{
          phone:'',
          code:'',
        },
        title: '登录',
        isSendCode: false,
    // 文本
        sendBtnText: '点击发送验证码',
    // 计时器对象
        timer: null,
    // 倒数60秒
        counter: 60

    }
  },
  methods:{
    
    countDown: function() {
      this.timer = setInterval(() => {
          // 替换文本，用es6里面的``这个来创建字符串模板，让秒实时改变
          this.sendBtnText = `(${this.counter}秒)后重新发送`
          this.counter--
          if (this.counter < 0) {
            // 当计时小于零时，取消该计时器
           this.reset()
          }
        }, 1000)
    },
    reset () {
        // 重置按钮可用
        this.isSendCode = false
        // 重置文本内容
        this.sendBtnText = '点击发送验证码'
        if (this.timer) {
          // 存在计时器对象，则清除
          clearInterval(this.timer)
          // 重置秒数，防止下次混乱
          this.counter = 60
          // 计时器对象重置为空
          this.timer = null
        }
      },
    validatePhone: function(){
        let phoneValidator = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        let validatorResult = phoneValidator.test(this.loginForm.phone)
        if (this.loginForm.phone == '') {
          this.$notify('请输入手机号')
          return false
        }
        if (!validatorResult) {
          this.$notify('手机格式不正确')
          return false
        }
        return true
    },
    code_operation_response:function(response) {
     if(response.code === 200) {
      this.$notify({ type: 'success', message: response.msg })
     }else {
      this.$notify({type: 'danger', message: response.msg })
     }
    },
    login_operation_response:function(response){
      if(response.code === 200) {
      this.$toast.success( response.msg)
     }else {
      this.$toast.fail( response.msg)
     }
    },
    sendSmsCode: async function() {
      if(this.validatePhone()) {
        this.isSendCode = true
        this.countDown()
        let { data } = await getCode({phone:this.phone})
        this.code_operation_response(data)
      }
    },
    onSubmit:async function(val) {
          let { data } = await sendLoginForm()
        
    }
  }
}
</script>

<style lang="scss" scoped>
 .login {

 }
</style>