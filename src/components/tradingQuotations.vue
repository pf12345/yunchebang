<template lang="html">
  <div class="">
    <h3>交易行情</h3>
    <Table stripe :columns="columns" :data="tradingQuotationsList"></Table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    tradingQuotationsList: 'tradingQuotationsList',
    columns: 'columns'
  }),
  created () {
    this.$store.dispatch('leftNavSelect', 'tradingQuotations');
    this.$store.dispatch('getTradingQuotationsList');
  }
}
</script>

<style lang="css" scoped>
h3 {
  padding: 20px 0;
  font-size: 18px;
  font-weight: 300;
}
</style>
