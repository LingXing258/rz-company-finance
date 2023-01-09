<template>
   <div class="stock-index">
    <!-- <table-of-titles></table-of-titles> -->
     <common-nav></common-nav>
     <table-of-stock></table-of-stock>
   </div>
</template>

<script>
// import TableOfTitles from '@/components/nav/CommonNav.vue'
import CommonNav from '@/components/nav/CommonNav.vue'
import TableOfStock from '@/views/my-stock/components/tables.vue'
export default {
  name:'stock',
  components:{
    CommonNav,
    TableOfStock,
    // TableOfTitles,
  }
}
</script>

<style lang="scss" scoped>

</style>