<template>
   <div class="stock-index">
     <common-nav></common-nav>
     <table-of-stock></table-of-stock>
   </div>
</template>

<script>
import CommonNav from '@/components/nav/CommonNav.vue'
import TableOfStock from '@/views/my-stock/components/tables.vue'
export default {
  name:'stock',
  components:{
    CommonNav,
    TableOfStock,
  },
}
</script>

<style lang="scss" scoped>

</style>