<template>
   <div class="stock-index">
    <layout-index>

       <template #header>
        <!-- <tittle-of-stock></tittle-of-stock> -->
        <common-nav></common-nav>
        
       </template>

       <template #body>
        <table-of-stock></table-of-stock>
       </template>

    </layout-index>
    
     
   </div>
</template>

<script>
import CommonNav from '@/components/nav/CommonNav.vue'
import LayoutIndex from '@/components/layout/LayoutIndex.vue';
// import TittleOfStock from '@/views/join-item/components/titles.vue'
import TableOfStock from '@/views/join-item/components/tables.vue'

export default {
  name:'stock',
  components:{
    CommonNav,
    LayoutIndex,
    // TittleOfStock,
    TableOfStock 
  }
}
</script>

<style lang="scss" scoped>

</style>