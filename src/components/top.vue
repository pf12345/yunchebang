<template lang="html">
  <div class="">
      <div class="user">
        <span>{{userInfo.cellphone}}</span>
        <span>退出</span>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    userInfo: 'userInfo'
  }),
  created() {
    this.$store.dispatch('getUserInfo');
  }
}
</script>

<style lang="css" scoped>
  .user {
    float: right;
    margin-right: 20px;
  }
  .user span {
    padding-left: 10px;
  }
</style>
