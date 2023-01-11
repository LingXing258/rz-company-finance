<template>
    <div class="inter-error">
     <div class="container">
         <van-empty description="网络错误！" />
     </div>
    </div>
 </template>
 
 <script>
 export default {
  name:'InterError'
 }
 </script>
 
 <style lang="scss" scoped>
 .inter-error {
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 </style>