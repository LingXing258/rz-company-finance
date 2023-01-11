<template>
   <div class="stock-index">
    <layout-index>

       <template #header>
            <common-nav></common-nav>
            <tittle-of-stock></tittle-of-stock>
       </template>

       <template #body>
           <table-of-stock></table-of-stock>
       </template>

    </layout-index>
    
     
   </div>
</template>

<script>
//页面布局
import LayoutIndex from '@/components/layout/LayoutIndex.vue';
//通用导航栏
import CommonNav from '@/components/nav/CommonNav.vue'
//页面table
import TableOfStock from '@/views/join-item/components/tables.vue'

export default {
  name:'stock',
  components:{
    CommonNav,
    LayoutIndex,
    TableOfStock 
  }
}
</script>

<style lang="scss" scoped>

</style>