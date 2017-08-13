<template lang="html">
  <div class="leftMenu">
    <div class="logo">
      云车邦
    </div>
    <div class="nav">
      <ul>
        <li :class="curLeftMenu == 'tradingQuotations' ? 'selected' : ''" @click="leftNavSelect('tradingQuotations')">交易行情</li>
        <li :class="curLeftMenu == 'cheyuanInfo' ? 'selected' : ''" @click="leftNavSelect('cheyuanInfo')">车源信息</li>
        <li :class="curLeftMenu == 'fahuo' ? 'selected' : ''" @click="leftNavSelect('fahuo')">我要发货</li>
        <li :class="curLeftMenu == 'wode' ? 'selected' : ''" @click="leftNavSelect('wode')">我的</li>
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
    height: 120px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }
  .nav li{
    height: 55px;
    line-height: 55px;
    padding: 0 18px;
    cursor: pointer;
  }
  .nav li.selected {
    background: #fff;
    color: #2391e2;
  }

</style>
