<template lang="html">
  <div class="" style="min-height: 500px;">
    <h3>订单</h3>
    <div v-show="!showOrderFormDetail" class="">
      <div class="border" style="padding-bottom: 0;">
        <Tabs value="all" type="line" :animated="false" @on-click="changeTabs">
           <Tab-pane label="待接单" name="all">
             <div style="padding: 0 20px">
               <Form :label-width="60" >
                 <Row>
                   <Col span="6">
                     <Form-item label="装车类型" class="pr20">
                       <Select v-model="orderFormFilter.type">
                           <Option :value="option.name" :key="option.name" v-for="option in orderFormFilterTypeOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>

                   </Col>
                   <Col span="6">
                     <Form-item label="时间类型" class="pr20">
                       <Select v-model="orderFormFilter.status">
                           <Option :value="option.name" :key="option.name" v-for="option in orderFormFilterStatusOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>
                   </Col>
                   <Col span="12">
                     <div class="" style="padding-left: 10px;text-align: right">
                       <Button type="ghost" @click="clear('all')">清除</Button>  <Button style="margin-left: 10px;" type="primary" @click="search('all')">查询</Button>
                     </div>
                   </Col>

                 </Row>
               </Form>
             </div>
           </Tab-pane>
           <Tab-pane label="进行中" name="process">
             <div style="padding: 0 20px">
               <Form :label-width="60" >
                 <Row>
                   <Col span="6">
                     <Form-item label="收发类型" class="pr20">
                       <Select v-model="orderFormProcessFilter.with_consignee">
                           <Option :value="option.name" :key="option.name" v-for="option in orderFormFilterWithConsigneeOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>

                   </Col>
                   <Col span="6">
                     <Form-item label="订单状态" class="pr20">
                       <Select v-model="orderFormProcessFilter.status">
                           <Option :value="option.name" :key="option.name" v-for="option in orderFormProcessFilterStatusOptions">{{option.desc}}</Option>

                       </Select>
                     </Form-item>
                   </Col>
                   <Col span="12">
                     <div class="" style="padding-left: 10px;text-align: right">
                       <Button type="ghost" @click="clear('process')">清除</Button>  <Button style="margin-left: 10px;" type="primary" @click="search('process')">查询</Button>
                     </div>
                   </Col>

                 </Row>
               </Form>
             </div>
           </Tab-pane>
           <Tab-pane label="已交付" name="comfirmed">
             <div style="padding: 0 20px">
               <Form :label-width="60" >
                 <Row>
                   <Col span="6">
                     <Form-item label="时间范围" class="pr20">
                       <Select v-model="orderFormComfirmedFilter.time_option">
                          <Option :value="option.name" :key="option.name" v-for="option in  orderFormComfirmedFilterTimeOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>

                   </Col>
                   <Col span="6">
                     <Form-item label="装车类型" class="pr20">
                       <Select v-model="orderFormComfirmedFilter.type">
                           <Option :value="option.name" :key="option.name" v-for="option in  orderFormComfirmedFilterTypeOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>
                   </Col>
                   <Col span="6">
                     <Form-item label="收发类型" class="pr20">
                       <Select v-model="orderFormComfirmedFilter.with_consignee">
                            <Option :value="option.name" :key="option.name" v-for="option in orderFormFilterWithConsigneeOptions">{{option.desc}}</Option>
                       </Select>
                     </Form-item>

                   </Col>
                   <Col span="6">
                     <div class="" style="padding-left: 10px;text-align: right">
                       <Button type="ghost" @click="clear('comfirmed')">清除</Button>  <Button style="margin-left: 10px;" type="primary" @click="search('comfirmed')">查询</Button>
                     </div>
                   </Col>

                 </Row>
               </Form>
             </div>
           </Tab-pane>
       </Tabs>

     </div>
     <div class="itemsContainer">
       <div class="" v-if="listType == 'all'">
         <ul>
           <li v-for="item in orderFormList">
             <div class="item_top">
               <span>{{item.publish_time}}</span><span>待接单</span>
             </div>
             <div class="item_content" style="flex-grow: 1">
               <div class="item_left">
                 {{item.cargo_city}} —— {{item.consignee_city}}
               </div>
               <div class="" style="flex-grow: 2; text-align: left; min-width: 300px;">
                {{item.desc}}
               </div>
               <div class="item_right" style="flex-grow: 1">
                 <span>
                   <Button type="error" size="small" v-if="item.status_desc == '已过期'">过期</Button>
                   <Button type="primary" style="margin-left: 10px;" size="small">{{item.type === 2 ? '拼车' : '整车'}}</Button>
                 </span>
                 心意运价：<label>{{item.freight}}元/{{item.freight_unit}}</label>
               </div>
             </div>
           </li>
         </ul>
         <Page style="margin: 10px 0" :total="orderFormListTotal" @on-change="pageChange"></Page>
       </div>
       <div class="" v-if="listType == 'process'">
         <ul>
           <li v-for="item in orderFormProcessList">
             <div class="item_top">
               <span>{{item.publish_time}}</span><span>进行中</span>
             </div>
             <div class="item_content" style="flex-grow: 1">
               <div class="item_left">
                 {{item.cargo_city}} —— {{item.consignee_city}}
               </div>
               <div class="" style="flex-grow: 2; text-align: left; min-width: 300px;">
                {{item.desc}}
               </div>
               <div class="item_right" style="flex-grow: 1">
                 <span>
                   <Button type="error" size="small" v-if="item.status_desc == '已过期'">过期</Button>
                   <Button type="primary" style="margin-left: 10px;" size="small">{{item.type === 2 ? '拼车' : '整车'}}</Button>
                 </span>
                 心意运价：<label>{{item.freight}}元/{{item.freight_unit}}</label>
               </div>
               <div class="item_right" style="flex-grow: 1">
                 <span>|</span><span class="showDetail" @click="showDetail(item)">查看订单详情</span>
               </div>
             </div>
           </li>
         </ul>
         <Page style="margin: 10px 0" :total="orderFormListProcessTotal" @on-change="pageProcessChange"></Page>
       </div>
       <div class="" v-if="listType == 'comfirmed'">
         <ul>
           <li v-for="item in orderFormComfirmedList">
             <div class="item_top">
               <span>{{item.publish_time}}</span><span>已交付</span>
             </div>
             <div class="item_content" style="flex-grow: 1">
               <div class="item_left">
                 {{item.cargo_city}} —— {{item.consignee_city}}
               </div>
               <div class="" style="flex-grow: 2; text-align: left; min-width: 300px;">
                {{item.desc}}
               </div>
               <div class="item_right" style="flex-grow: 1">
                 <span>
                   <Button type="error" size="small" v-if="item.status_desc == '已过期'">过期</Button>
                   <Button type="primary" style="margin-left: 10px;" size="small">{{item.type === 2 ? '拼车' : '整车'}}</Button>
                 </span>
                 心意运价：<label>{{item.freight}}元/{{item.freight_unit}}</label>
               </div>
               <div class="item_right" style="flex-grow: 1">
                 <span>|</span><span class="showDetail" @click="showDetail(item)">查看订单详情</span>
               </div>
             </div>
           </li>
         </ul>
         <Page style="margin: 10px 0" :total="orderFormListComfirmedTotal" @on-change="pageConfirmChange"></Page>
       </div>
     </div>
    </div>

    <div v-if="showOrderFormDetail" class="detail">
      <div class="border d_top" style="padding: 10px;">
        <span>{{orderFormDetail.status_desc}}</span>
        <span class="orderBianhao">订单编号：{{orderFormDetail.id}}</span>
        <a style="float: right;margin-right: 10px;">打印合同</a>
      </div>
      <div class="border d_upload" v-if="orderFormDetail.order_rating">
        <div class="item_top">
          <span>交付上传资料</span>
        </div>
        <div class="d_upload_items" >
          <div>
            <label>入库单</label>
            <img v-for="img in orderFormDetail.order_rating.warehouse_cargo_images" :src="img" alt="">
          </div>
          <div class="">
            <label>货物入库单</label>
            <img v-for="img in orderFormDetail.order_rating.warehouse_receipt_images" :src="img" alt="">
          </div>
        </div>
      </div>
      <div class="border d_upload">
        <div class="item_top">
          <span>车源信息</span>
        </div>
        <div class="d_upload_items d_cheyuanInfo">
          <div class="">
            <span style="margin-right: 80px;">司机姓名：{{orderFormDetail.vehicle_owner.name}}  {{orderFormDetail.vehicle_owner.cellphone}}</span><span>司机确认吨位：{{orderFormDetail.cargo_weight}}吨</span>
          </div>
          <div class="">
            <span>车牌号：{{orderFormDetail.vehicle.plate_number}}</span><span>车辆品牌：{{orderFormDetail.vehicle.brand}}</span><span>车辆类型：{{orderFormDetail.vehicle.type}}</span>
            <span>车辆长度：{{orderFormDetail.vehicle.length}}米</span><span>车辆载重：{{orderFormDetail.vehicle.load}}吨</span><span>装货体积：{{orderFormDetail.vehicle.volume}}m³</span>
          </div>
        </div>
      </div>
      <div class="border d_upload" style="margin-bottom: 20px;">
        <div class="item_top">
          <span>我的货源</span>
        </div>
        <div class="d_upload_items d_cheyuanInfo">
          <div class="">
            <span style="margin-right40px;">配送类型：{{orderFormDetail.type === 2 ? '拼车' : '整车'}}</span>
          </div>
          <div class="">
            <h2>{{orderFormDetail.cargo_area}}—— {{orderFormDetail.consignee_area}}</h2>
          </div>
          <div class="">
            <span>发货人：{{orderFormDetail.cargo_owner_name}}  {{orderFormDetail.cargo_owner_cellphone}}</span><span>发货详细地址：{{orderFormDetail.cargo_address}}</span>
          </div>
          <div class="">
            <span>收货人：{{orderFormDetail.consignee}}  {{orderFormDetail.consignee_cellphone}}</span><span>收货详细地址：{{orderFormDetail.consignee_address}}</span>
          </div>
          <p class="line"></p>
          <div class="">
            <span>货物类型：{{orderFormDetail.cargo_type}}</span><span>货物重量：{{orderFormDetail.cargo_weight}}吨</span><span>货物件数：{{orderFormDetail.cargo_num}}件</span><span>货物体积：{{orderFormDetail.cargo_volume}}m³</span>
          </div>
          <div class="">
            <span>期望运价：{{orderFormDetail.freight}}元/{{orderFormDetail.freight_unit}}</span>
          </div>
          <p class="line"></p>
          <div class="">
            <span>车辆类型：{{orderFormDetail.vehicle_type}}</span><span>车辆长度：{{orderFormDetail.vehicle_length}}米</span>
          </div>
          <p class="line"></p>
          <div class="">
            <span>支付方式：{{orderFormDetail.payer}}支付</span>
          </div>
          <p class="line"></p>
          <div class="">
            <span>货主备注：{{orderFormDetail.note}}</span>
          </div>
          <div class="d_upload_items">
            <img style="margin: 0 10px 0 0" v-for="img in orderFormDetail.cargo_images" :src="img" alt="">
          </div>
        </div>
      </div>
      <div class="" style="margin-bottom: 40px; text-align: center;">
        <Button type="ghost" style="width: 100px;height: 40px;font-size: 16px;" @click="returnList">返回</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    listType: 'listType',
    orderFormFilter: 'orderFormFilter',
    showOrderFormDetail: 'showOrderFormDetail',
    orderFormList: 'orderFormList',
    orderFormProcessList: 'orderFormProcessList',
    orderFormComfirmedList: 'orderFormComfirmedList',
    orderFormProcessFilter: 'orderFormProcessFilter',
    orderFormProcessFilterStatusOptions: 'orderFormProcessFilterStatusOptions',
    orderFormComfirmedFilter: 'orderFormComfirmedFilter',
    orderFormComfirmedFilterTypeOptions: 'orderFormComfirmedFilterTypeOptions',
    orderFormComfirmedFilterTimeOptions: 'orderFormComfirmedFilterTimeOptions',
    orderFormFilterTypeOptions: 'orderFormFilterTypeOptions',
    orderFormFilterStatusOptions: 'orderFormFilterStatusOptions',
    orderFormFilterWithConsigneeOptions: 'orderFormFilterWithConsigneeOptions',
    orderFormListTotal: 'orderFormListTotal',
    orderFormListProcessTotal: 'orderFormListProcessTotal',
    orderFormListComfirmedTotal: 'orderFormListComfirmedTotal',
    orderFormDetail: 'orderFormDetail'
  }),
  methods: {
    changeTabs(name) {
      if(name === 'process') {
        this.$store.dispatch('getOrderFormProcessList');
      } else if(name === 'comfirmed'){
        this.$store.dispatch('getOrderFormComfirmedList');
      }else {
        this.$store.dispatch('getOrderFormList');
      }
    },
    clear(name) {
      if(name === 'process') {
        this.$store.dispatch('resetOrderFormFilter', 'process');
        this.$store.dispatch('getOrderFormProcessList');
      } else if(name === 'comfirmed'){
        this.$store.dispatch('resetOrderFormFilter', 'comfirmed');
        this.$store.dispatch('getOrderFormComfirmedList');
      }else {
        this.$store.dispatch('resetOrderFormFilter', 'all');
        this.$store.dispatch('getOrderFormList');
      }
    },
    search(name) {
      if(name === 'process') {
        this.$store.dispatch('getOrderFormProcessList');
      } else if(name === 'comfirmed'){
        this.$store.dispatch('getOrderFormComfirmedList');
      }else {
        this.$store.dispatch('getOrderFormList');
      }
    },
    pageChange(page) {
      this.orderFormFilter.page = page;
      this.$store.dispatch('getOrderFormList');
    },
    pageProcessChange(page) {
      this.orderFormProcessFilter.page = page;
      this.$store.dispatch('getOrderFormProcessList');
    },
    pageConfirmChange(page) {
      this.orderFormComfirmedFilter.page = page;
      this.$store.dispatch('getOrderFormComfirmedList');
    },
    showDetail(item) {
      this.$store.dispatch('showOrderFormDetail', item);
    },
    returnList() {
      this.$store.dispatch('returnList');
    }
  },
  created () {
    this.$store.dispatch('leftNavSelect', 'orderForm');
    this.$store.dispatch('getOrderFormList');
  }
}
</script>

<style lang="css" scoped>
  .pr20 {
    padding-right: 20px;
  }
  .itemsContainer ul li{
    margin: 10px 0;
    border: 1px solid #dddee1;
    border-radius: 5px;
  }
  .line {
    display: block;
    height: 1px;
    background: #dddee1;
    margin: 10px 20px;
  }
  .item_top {
    background-color: rgba(247, 247, 247, 1);
    font-size: 13px;
    color: #999;
    padding: 5px 10px;
  }
  .item_content {
    padding: 10px;
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row
  }
  .itemsContainer .item_top span {
    margin-right: 20px;
  }
  .item_content > div {
    flex-grow: 1;
  }
  .item_right {
    text-align: right;
  }
  .item_right span {
    margin-right: 20px;
  }
  .item_right label {
    color: #FC9000;
    font-size: 16px;
  }
  .item_left {
    font-size: 16px;
    font-weight: bold;
  }
  .detail .d_top span {
    font-size: 16px;
  }
  .orderBianhao {
    color: #999;
    margin-left: 20px;
  }
  .detail .d_upload {
    margin-top: 20px;
  }
  .detail .d_upload_items > div {
    display: inline-block;
    margin: 10px 20px 10px;
  }
  .detail .d_upload_items img {
    vertical-align: top;
    width: 80px;
    margin-left: 10px;
  }
  .showDetail:hover {
    cursor: pointer;
  }

  .d_cheyuanInfo > div {
    display: block !important;
  }
  .d_cheyuanInfo span{
    margin-right: 40px;
  }
</style>
