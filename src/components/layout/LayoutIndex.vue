<template>
    <div class="container-out">   
         <div class="layout">
            <div class="header">
               <slot name="header"></slot>
             </div>
             <div class="body">
                 <div class="scroll-y">
                <slot name="body"></slot>
                 </div>
              </div>
              <div class="footer" >
                <slot name="footer"></slot>
             </div>
        </div>
    </div>
 </template>
 <script>

 export default {
   name: 'layout',
}
 </script>
 <style lang="scss" scoped>
 .container-out {
     height: 100vh;
     width: 100vw;
     overflow: hidden;
 }
 .layout {
     height: 100%;
     display: flex;
     flex-direction: column;
     display: flex;
 }
 .body {
    flex: 1;
    overflow: hidden;
 }
 .body .scroll-y {
     overflow-y: auto;
     height: 100%;
 } 
 </style>
 