<template lang="html">
  <div class="leftMenu">
    <div class="logo">
      <img src="/images/logo@2x.png" alt="" style="height: 34px;margin-top: 20px;">
    </div>
    <div class="nav">
      <ul>
        <li :class="curLeftMenu == 'tradingQuotations' ? 'selected' : ''" @click="leftNavSelect('tradingQuotations')">交易行情</li>
        <li :class="curLeftMenu == 'cheyuanInfo' ? 'selected' : ''" @click="leftNavSelect('cheyuanInfo')">车源信息</li>
        <li :class="curLeftMenu == 'fahuo' ? 'selected' : ''" @click="leftNavSelect('fahuo')">我要发货</li>
        <li :class="curLeftMenu == 'orderForm' ? 'selected' : ''" @click="leftNavSelect('orderForm')">订单</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    curLeftMenu: 'curLeftMenu'
  }),
  methods: mapActions([
    'leftNavSelect'
  ])
}
</script>

<style lang="css" scoped>
  .leftMenu {
    color: #fff;
    font-size: 16px;
  }
  .logo {
    height: 110px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }
  .nav li{
    height: 55px;
    line-height: 55px;
    padding: 0 18px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    margin: 14px 0;
  }
  .nav li.selected {
    background: #fff;
    color: #2391e2;
  }

</style>
