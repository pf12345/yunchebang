<template lang="html">
  <div class="">
    <h3>车源信息</h3>
    <div class="p20 border" style="padding-bottom: 0;">
      <Form :label-width="60">
        <Row>
          <Col span="6">
            <Form-item label="出发地" class="pr20" :label-width="50">
                <Cascader :data="provinceCityList" v-model="cheyuanFilter.cargo_area_code" change-on-select></Cascader>
            </Form-item>
          </Col>
          <Col span="6">
            <Form-item label="收货地" class="pr20" :label-width="50">
                <Cascader :data="provinceCityList" v-model="cheyuanFilter.consignee_area_code" change-on-select></Cascader>
            </Form-item>
          </Col>

          <Col span="6">
            <Form-item label="车辆类型" class="pr20">
              <Select v-model="cheyuanFilter.vehicle_type">
                  <Option v-for="item in commonConfig.vehicle_types" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="6">
            <div class="" style="padding-left: 10px;text-align: right">
              <Button type="ghost" @click="clear">清除</Button>  <Button style="margin-left: 10px;" type="primary" @click="search">查询</Button>
            </div>
          </Col>

      </Row>
      </Form>

    </div>
    <div class="mt20">
      <Table stripe :columns="cheyuanColumns" :data="cheyuanList"></Table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    cheyuanList: 'cheyuanList',
    cheyuanColumns: 'cheyuanColumns',
    cheyuanFilter: 'cheyuanFilter',
    commonConfig: 'commonConfig',
    provinceCityList: 'provinceCityList'
  }),
  methods: {
    search() {
      this.$store.dispatch('getCheyuanList', this.cheyuanFilter);
    },
    clear() {
      this.$store.dispatch('clearCheyuanFilter');
      this.$store.dispatch('getCheyuanList', this.cheyuanFilter);
    }
  },
  created () {
    this.$store.dispatch('leftNavSelect', 'cheyuanInfo');
    if(!this.commonConfig.vehicle_types) {
      this.$store.dispatch('getConfig');
    }
    this.$store.dispatch('getCheyuanList', this.cheyuanFilter);
  }
}
</script>

<style lang="css" scoped>
  .pr20 {
    padding-right: 20px;
  }
</style>
