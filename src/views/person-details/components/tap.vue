<template>
   <div class="tap">
    <van-collapse v-model="basicActiveName" accordion >
        <van-collapse-item :title="basicTitle" :name="1" ref="basicActiveName">
              <van-form @submit="onSubmit">
              <van-cell-group inset>
                  <van-field v-model="uesrForm.code"      label="编号"  readonly/>
                  <van-field v-model="uesrForm.name"      label="姓名" readonly/>
                  <van-field v-model="uesrForm.claim_num" label="认筹识别号"  readonly/>
                  <van-field v-model="uesrForm.phone"     label="手机号码" readonly/>
                  <van-field v-model="uesrForm.email"     label="登记邮箱" readonly/>
                  <van-field v-model="uesrForm.remarks"   rows="2" autosize label="备注" type="textarea" readonly  />
              </van-cell-group>
            </van-form>
        </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="bankActiveName" accordion >
        <van-collapse-item :title="bankTitle" :name="2">
                  <van-field v-model="uesrForm.bank"  label="开户银行"  readonly/>
                  <van-field v-model="uesrForm.bank_account_name"  label="开户名称"  readonly/>
                  <van-field v-model="uesrForm.account" label="银行账户"  readonly/>
        </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="educationActiveName" accordion >
        <van-collapse-item :title="educationTitle" :name="3">
          <van-field v-model="enrollment_year" label="入学年份" readonly  />
         <van-field v-model="faculty" name="facultyText"  label="所属院系" readonly/>
         <van-field v-model="professional_class" name="professional_class" label="专业班级"  />
         <van-field v-model="education"  name="educationText" readonly label="学历" />
        </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="addressActiveName" accordion >
        <van-collapse-item :title="addressTitle" :name="4">
             <van-cell title="长居所在地区">
              <template #value>
                 {{  uesrForm.province }} {{  uesrForm.city }} {{  uesrForm.area }}
              </template>
            </van-cell>
          <van-field label="具体地址"  v-model="address" rows="2" autosize type="textarea" readonly/>
        </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="mailActiveName" accordion >
        <van-collapse-item :title="mailTitle" :name="5">
               <van-field  v-model="uesrForm.addressee"     label="收件人" readonly/>
               <van-field  v-model="uesrForm.addr_mobile"   label="收件人手机号码" readonly />
               <van-cell title="收件人所在地区">
              <template #value>
                 {{ uesrForm.addr_province }} {{  uesrForm.addr_city }} {{   uesrForm.addr_area }}
              </template>
            </van-cell>
               <van-field  v-model="uesrForm.addr_address" label="具体地址"   rows="2"   autosize   type="textarea" readonly /> 
        </van-collapse-item>
    </van-collapse>
   </div>
</template>

<script>
export default {
  name: 'Tap',
  data() {
    return {
      basicActiveName: 1 ,
      bankActiveName: 2,
      educationActiveName: 3,
      addressActiveName: false,
      mailActiveName:false,
      basicTitle: '基础信息',
      bankTitle: '银行信息',
      educationTitle: '教育信息',
      addressTitle: '地址信息',
      mailTitle: '邮寄信息',
      
     uesrForm:{
      code: '222',
      name:'关羽',
      claim_num: '',
      phone: '',
      email: '',
      remarks: '',

      bank:'',
      bank_account_name: '',
      account: '',

      enrollment_year:'',
      faculty: '',
      professional_class:'',
      education:'',    
    
      province: '',
      city: '',
      area: '',
      address: '',

      addressee:'',
      addr_mobile:'',
      addr_province: '',
      addr_city: '',
      addr_area: '',
      addr_address: 'a地方玩分为非违法违规',

     }
    }
  },
  methods:{
    basicActiveOpen(){
  //  console.log( this.$refs.basicActiveName)
      // this.bankActiveName=! this.bankActiveName
    }
  },
  mounted(){
    this.basicActiveOpen()
  }
}
</script>

<style lang="scss" scoped>
  .tap .van-nav-bar__text {
     color: #969799;; 
}
  .van-nav-bar .van-icon {
    color: #969799;;
}
  ::v-deep(.van-collapse-item__content ){
   padding:0px
 }
 ::v-deep(.van-cell-group--inset) {
   margin: 0px;
 }
 ::v-deep(.van-field__control){
   text-align: right;
 }
 .content {
   width: 100%;
   }
   .detail{
     height: 100vh;
     width: 100vw;
   }
</style>