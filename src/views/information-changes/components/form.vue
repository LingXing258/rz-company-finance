<template>
  <div class="containers">
    <div class="form">
    <van-form   @submit="submitForm" ref="myForm">
    <van-cell-group inset >
    <div class="title-text"> <van-nav-bar title="基础信息" class="title-left" /></div>
    <van-field v-model="code" name="code" label="编号" placeholder="编号" clearable  :rules="userFrom.code" />
     <van-field v-model="name" name="name" label="姓名" placeholder="姓名" clearable  :rules="userFrom.name"/>
    <van-field v-model="claim_num" name="claim_num" label="认筹识别号" placeholder="认筹识别号" clearable  :rules="[{ required: true, message: '输入不能为空,请填写认筹识别号' }]" />
    <van-field  v-model="phone"  name="phone"  label="手机号码"  placeholder="手机号码"  clearable :rules="userFrom.tel" type="tel"/>
    <van-field v-model="email" name="email" label="登记邮箱" placeholder="登记邮箱" clearable  :rules="userFrom.email" type="email"/>
    <van-field v-model="remarks" name="remarks" rows="2" autosize label="备注" type="textarea" placeholder="请输入备注" clearable  show-word-limit />

       <div class="title-text"> <van-nav-bar title="银行信息" class="title-left" /></div>
       <van-field v-model="bank" name="bank" label="开户银行" placeholder="开户银行" clearable  :rules="[{ required: true, message: '输入不能为空,请填写开户银行' }]"/>
       <van-field v-model="bank_account_name" name="bank_account_nam" label="开户名称" placeholder="开户名称" clearable  :rules="[{ required: true, message: '输入不能为空,请填写开户名称' }]"/>
       <van-field v-model="account" name="account" label="银行账户" placeholder="银行账户" clearable  :rules="[{ required: true, message: '输入不能为空,请填写银行账户' }]"/>


           <div class="title-text"> <van-nav-bar title="学历信息" class="title-left" /></div>
         <van-field clickable name="enrollment_year" label="入学年份" readonly is-link :min-date="minDate" v-model="enrollment_year" placeholder="点击选择时间" @click="enrollmentPicker = true" clearable />
         <van-popup :show="enrollmentPicker" position="bottom" style="height: 50%">
           <van-datetime-picker type="date" :min-date="minDate" :max-date="maxDate"  @confirm="timeonConfirm"  @cancel="enrollmentPicker = false"  clearable></van-datetime-picker>
         </van-popup>
         <van-field v-model="facultyText" name="facultyText" is-link readonly label="所属院系" placeholder="所属院系" clearable  @click="facultyPicker = true"/>
         <van-popup :show="facultyPicker" round position="bottom">
           <van-picker  :columns="facultyColumns"  @cancel="facultyPicker = false"  @confirm="facultyOnConfirm"/>
         </van-popup>
         <van-field v-model="professional_class" name="professional_class" label="专业班级"  placeholder="专业班级" :rules="[{ required: true, message: '输入不能为空,请填写专业班级' }]" clearable />
         <van-field v-model="educationText"  name="educationText" is-link readonly label="学历" placeholder="学历" @click="educationPicker = true"  clearable />
         <van-popup :show="educationPicker" round position="bottom">
           <van-picker :columns="educationColumns" @cancel="educationPicker = false" @confirm="educationConfirm"/>
         </van-popup> 


          <div class="title-text"> <van-nav-bar title="地址信息" class="title-left" /></div>
          <van-field is-link readonly label="长居所在地区" placeholder="长居所在地区" @click="showPicker3 = true" v-model="carmodel" name="carmodel"/>
          <van-popup  :show="showPicker3"  position="bottom" :style="{ height: '50%' }">
            <van-area :area-list="areaList1" :columns-num="3" ref="myArea"  @change="onChange" @confirm="onConfirm" @cancel="onCancel"/>
          </van-popup>
          <van-field label="具体地址" placeholder="具体地址" v-model="address" rows="2" autosize type="textarea" clearable name="address" />


               <div class="title-text"> <van-nav-bar title="邮寄信息" class="title-left" /></div>
               <van-field  v-model="addressee"  name="addressee"  label="收件人"  placeholder="收件人"  clearable />
               <van-field  v-model="addr_mobile"  type="tel" name="addr_mobile"  label="收件人手机号码"  placeholder="收件人手机号码"  clearable  :rules="userFrom.tel"  />
               <van-field  v-model="carmodel1" name="carmodel1" is-link readonly label="收件人所在地区" placeholder="收件人所在地区" @click="showPicker4 = true" :rules="[{ required: true, message: '输入不能为空,收件所在地区' }]"/>
               <van-popup  :show="showPicker4"  position="bottom" :style="{ height: '50%' }">
                 <van-area :area-list="areaList1" :columns-num="3" ref="myArea"  @change="onChange" @confirm="onConfirm1" @cancel="onCancel"/>
               </van-popup>
               <van-field  v-model="addr_address" name="addr_address" label="具体地址"  placeholder="具体地址"   rows="2"   autosize   type="textarea" clearable /> 
               
               </van-cell-group>
            
</van-form>
   
<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"> 到最后啦</van-divider>
   </div>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import dayjs from 'dayjs'
import { sendNewsChangeForm }  from '@/services/information-changes-services.js'
export default {
  name: 'newsChangeForm',
  props:['newsChange'],
  data () {
    return {
      // id: '',
      // username: '',
      // password: '',
      // recognitionID: '',
      // telephone: '',
      // email: '',
      // opinion: '',
      // bankDeposit: '',
      // accountName: '',
      // bankAccount: '',
      // enrollmentYear: '',
      //  showPicker:false, 
      //  projectNameValue:'', 
      //  showPicker1:false,
      //  showPicker2: false,
      //  fieldValue: '',
     
userFrom:{
   code:[
      { required: true, message: '输入不能为空,请填写编号' }
   ],
   name:[
      { required: true, message: '输入不能为空,请填写姓名' }
   ],
    tel:[
        { required: true, message: '手机号码不能为空' },
        { validator: (val) => {
              return  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)
         },
         message: '手机格式不正确'
         }
         ],
     email:[
        { required: true, message: '邮箱不能为空！' },
        { validator: (val) => {
              return   /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(val)
         },
         message: '邮箱格式不正确'
         }
         ]
         },

       code: '',
       name:'',
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
       
       enrollmentPicker: false,
       facultyText: '',
       facultyPicker:false,
       minDate:new Date(1900,0,1),
       maxDate:new Date,
       areaList1:areaList,
       facultyColumns :[
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' },
    ],
    
    

     educationText: '',
     educationPicker: false,
     educationColumns :[
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' },
    ],

      province: '',
      city: '',
      area: '',
      address: '',
      carmodel: '',
      showPicker3:false,

      addressee:'',
      addr_mobile:'',
      addr_province: '',
      addr_city: '',
      addr_area: '',
      addr_address: '',
      carmodel1 :'',
      showPicker4: false,
       
      creator:this.newsChange.creator,
      investor_id:this.newsChange.investor_id,
      creatorID: this.newsChange.creatorID,
      create_time: this.newsChange.create_time,
      loading:true
    }

  },
  methods: {
    onSubmits: function () {
      this.$refs.myForm.submit()
    },
    submitForm: async function() {
     let field= {
          code: this.code,
          name: this.name,
          claim_num: this.claim_num,
          phone: this.phone,
          email: this.email,
          remarks: this.remarks,

          bank:this.bank,
          bank_account_name: this.bank_account_name,
          account: this.account,

          enrollment_year:this.enrollment_year,
          faculty: this.faculty,
          professional_class: this.professional_class,
          education:this.education,

          province: this.province,
          city: this.city,
          area: this.area,
          address: this.address,

          addressee:this.addressee,
          addr_mobile: this.addr_mobile,
          addr_province: this.addr_province,
          addr_city: this.addr_city,
          addr_area: this.addr_area,
          addr_address: this.addr_address ,

          creator:this.creator,
          investor_id:this.investor_id,
          creatorID: this.creatorID,
          create_time: this.create_time
        }
     let subs=[ {tableName:'update_contacts',fields:[]} ]
     let forms = {
        fromMobile: 1,
        flowKey: 'investor_updat',
        formData:{main:{"fields":field},sub:subs},
        runId: ''
    }
      this.$emit('buttonLoading',this.loading)
      let  { data } = await sendNewsChangeForm(forms)
      if(data.result == 1 ) {
        this.loading =false
        this.$emit('buttonLoading',this.loading)
        this.$toast.success(data.message)
      }else {
        this.loading =true
        this.$toast.fail(data.message);
      }
    },
  showPopup() {
    this.show = true;
     
  },
  educationConfirm(val) {
     this.education =val.value
     this.educationText =val.text
     this.educationPicker=false
  },

  facultyOnConfirm(val) {
        this.faculty=val.value
        this.facultyText=val.text
        this.facultyPicker=false
  },
 
  timeonConfirm(val) {
    this.enrollment_year = dayjs(val).format('YYYY')
    this.enrollmentPicker = false
  },

  onConfirm(val){
      this.province =  val[0].name
      this.city= val[1].name
      this.area=val[2].name
      this.carmodel =this.province+" "+this.city+" "+ this.area
      this.showPicker3 = false//关闭弹框
  },
  onConfirm1(val){
      this.addr_province =  val[0].name
      this.addr_city= val[1].name
      this.addr_area=val[2].name
      this.carmodel1 = this.addr_province + " "+ this.addr_city+" "+this.addr_area
      this.showPicker4 = false//关闭弹框
  },
  //取消选中城市
  onCancel(){
     this.showPicker4 = false
     this.showPicker3 = false
     this.$refs.myArea.reset()// 重置城市列表
  }
 
  },
}
</script>

<style lang="scss" scoped>
:deep(.van-datetime-picker ){
    .van-picker__columns :nth-child(2) {
        display: none;
    }
    .van-picker__columns :nth-child(3) {
        display: none;
    }
}
.van-cell-group--inset {
    margin:0px;
}
.title-left :deep(.van-nav-bar__title) {
    margin-left: 15px !important;
}
.title-text .van-nav-bar{
    background-color: rgb(232, 242, 242);
}
</style>
