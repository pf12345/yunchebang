<template lang="html">
  <div class="">
    <h3>我要发货</h3>
    <div class="p20 border">
      <Radio-group v-model="addInfo.type" @on-change="radioTypeChange">
        <Radio label="整车"></Radio>
        <Radio label="拼车"></Radio>
      </Radio-group>
    </div>
    <div class="mt20">
      <Row>
        <Col span="11">
          <div class="border p20">
            <h4>发货人信息</h4>
            <Form :label-width="80">
              <Form-item label="发货人姓名">
                  <Input type="text" v-model="addInfo.cargo_owner_name"></Input>
              </Form-item>
              <Form-item label="联系电话">
                  <Input type="text" v-model="addInfo.cargo_owner_cellphone"></Input>
              </Form-item>
              <Form-item label="所在区域">
                  <Cascader @on-change="areaChose('cargo_address')" :data="provinceCityList" v-model="addInfo.cargo_area_code" change-on-select></Cascader>
              </Form-item>
              <Form-item label="详细地址">
                <div class="mapItem" @click="getDetailedAddress('cargo_address')">
                  {{addInfo.cargo_address}}
                </div>
                  <!-- <Input type="text" readonly v-model="addInfo.cargo_address" @click="getDetailedAddress('cargo_address')"></Input> -->
              </Form-item>
            </Form>
          </div>
        </Col>
        <Col span="2" style="text-align: center">
          <img style="position: relative;top: 120px;" src="http://localhost:8033/images/leftpoint.png" alt="">
        </Col>
        <Col span="11">
          <div class="border p20">
            <h4>收货人信息</h4>
            <Form :label-width="80">
              <Form-item label="收货人姓名">
                  <Input type="text" v-model="addInfo.consignee"></Input>
              </Form-item>
              <Form-item label="联系电话">
                  <Input type="text" v-model="addInfo.consignee_cellphone"></Input>
              </Form-item>
              <Form-item label="所在区域">
                  <Cascader @on-change="areaChose('consignee_address')" :data="provinceCityList" v-model="addInfo.consignee_area_code" change-on-select></Cascader>
              </Form-item>
              <Form-item label="详细地址">
                  <div class="mapItem" @click="getDetailedAddress('consignee_address')">
                    {{addInfo.consignee_address}}
                  </div>
                  <!-- <Input type="text" readonly v-model="addInfo.consignee_address" @click="getDetailedAddress('consignee_address')"></Input> -->
              </Form-item>
            </Form>
          </div>
        </Col>
    </Row>
    </div>
    <div class="mt20 border">
      <div class="p20">
        <h4>货源信息</h4>
        <Form :label-width="80">
          <Row>
            <Col span="8">
              <Form-item label="货物类型">
                <Select v-model="addInfo.cargo_type">
                    <Option v-for="item in commonConfig.cargo_types" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </Form-item>

            </Col>
            <Col span="8">
              <Form-item label="货物件数">
                  <Input type="text" v-model="addInfo.cargo_num"></Input>
                  <span slot="append">件</span>
              </Form-item>
            </Col>
            <Col span="8">
              <Form-item label="货物吨位" v-if="cargo_weight_type == 'fixed'">
                <Row>
                  <Col span="16">
                    <Input type="text" v-model="addInfo.cargo_weight">
                      <span slot="append">吨</span>
                    </Input>
                  </Col>
                  <Col span="8" style="text-align: right;">
                    <Button @click="changeCargoWeightType('range')" style="margin-left: 5px;" type="primary">范围</Button>
                  </Col>
                </Row>
              </Form-item>
              <Form-item label="货物吨位" v-if="cargo_weight_type == 'range'">
                <Row>
                  <Col span="16">
                    <Row>
                      <Col span="11">
                        <Input type="text" v-model="addInfo.cargo_weight_min">
                          <span slot="append">吨</span>
                        </Input>
                      </Col>
                      <Col span="2" style="text-align: center;">
                        -
                      </Col>
                      <Col span="11">
                        <Input type="text" v-model="addInfo.cargo_weight_max">
                          <span slot="append">吨</span>
                        </Input>
                      </Col>
                    </Row>
                  </Col>
                  <Col span="8" style="text-align: right;">
                    <Button @click="changeCargoWeightType('fixed')" style="margin-left: 5px;" type="primary">固定值</Button>
                  </Col>
                </Row>
              </Form-item>
            </Col>
          </Row>
          <Row>
            <Col span="8">
              <Form-item label="货物体积">
                  <Input type="text" v-model="addInfo.cargo_volume">
                    <span slot="append">m³</span>
                  </Input>
              </Form-item>

            </Col>
            <Col span="8">
              <Form-item label="货物运价">
                <Row>
                  <Col span="16">
                    <Input type="text" v-model="addInfo.freight"></Input>
                  </Col>
                  <Col span="8" style="padding-left: 5px;">
                    <Select v-model="addInfo.freight_unit">
                        <Option v-for="item in commonConfig.unit" :value="item" :key="item">{{ '元/'+item }}</Option>
                    </Select>
                  </Col>
                </Row>
              </Form-item>
            </Col>
            <Col span="8">
              <Form-item label="发货车数">
                  <Input type="text" v-show="addInfo.type == '拼车'" readonly v-model="addInfo.vehicle_num">
                    <span slot="append">车</span>
                  </Input>
                  <Input type="text" v-show="addInfo.type == '整车'" v-model="addInfo.vehicle_num">
                    <span slot="append">车</span>
                  </Input>
              </Form-item>
            </Col>
          </Row>
          <Row>
            <Col span="8">
              <Form-item label="车辆类型">
                <Select v-model="addInfo.vehicle_type">
                    <Option v-for="item in commonConfig.vehicle_types" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </Form-item>
            </Col>
            <Col span="8">
              <Form-item label="车辆长度">
                <Select v-model="addInfo.vehicle_length">
                    <Option v-for="item in commonConfig.vehicle_lengths" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </Form-item>
            </Col>
            <Col span="8">
              <Form-item label="支付方式">
                <Select v-model="addInfo.payer">
                    <Option v-for="item in payer_list" :value="item.value" :key="item.value">{{ item.name }}</Option>
                </Select>
              </Form-item>
            </Col>
          </Row>
          <Form-item>
            <div class="demo-upload-list" v-for="(_img, index) in addInfo.cargo_images">
              <img :src="_img">
              <div class="demo-upload-list-cover">
                <i class="ivu-icon ivu-icon-ios-eye-outline" @click="previewImgAction({url: _img, previewImgVisible: true})"></i>
                <i class="ivu-icon ivu-icon-ios-trash-outline" @click="removeFile(index)"></i>
              </div>
            </div>
            <div class="ivu-upload" style="display: inline-block; width: 58px;">
              <div class="ivu-upload ivu-upload-drag">
                <div id="uploadFile" style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="camera" size="20"></Icon>
                </div>
              </div>
            </div>
            <Modal title="查看图片" v-model="previewImg.visible">
                <img :src="previewImg.url" v-if="previewImg.visible" style="width: 100%">
            </Modal>
          </Form-item>
        </Form>
        <Modal title="详细地址" v-model="map.visible" width="740" @on-ok="confirmAdress">
            <div class="mapSearchContainer">
              <Input type="text" v-model="map.mapKey" @on-enter="mapSearch"></Input>
              <div v-show="map.resultVisible" id="r-result">
                <div class="ivu-select-dropdown" style="width: 300px; position: absolute; left: 0; top: 30px; transform-origin: center top 0px;" x-placement="bottom">
                  <ul class="ivu-select-not-found" v-if="!mapSearchResults.length"><li>无匹配数据</li></ul>
                  <ul class="ivu-select-dropdown-list">
                    <li class="ivu-select-item" v-for="item in mapSearchResults" @click.stop="selectMapItem(item)">
                      <p style="color: #00c">{{item.title}}</p>
                      <p>地址：{{item.address}}</p>
                    </li>
                  </ul>
                  <ul class="ivu-select-loading" style="display: none;">加载中</ul>
                </div>
              </div>
            </div>
            <div v-if="map.visible" id="mapContainer" style="height: 400px;width: 700px;">

            </div>
        </Modal>
      </div>
    </div>
    <div class="mt20 border">
      <div class="p20">
        <h4>备注</h4>
        <Input v-model="addInfo.note" type="textarea" :rows="4" placeholder="请输入备注"></Input>
      </div>
    </div>
    <div class="mt20 submit">
      <Button type="success" long @click="submit">确认发货</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    addInfo: 'addInfo',
    provinceCityList: 'provinceCityList',
    commonConfig: 'commonConfig',
    cargo_weight_type: 'cargo_weight_type',
    payer_list: 'payer_list',
    previewImg: 'previewImg',
    previewImgUrl: 'previewImgUrl',
    mapSearchResults: 'mapSearchResults',
    map: 'map',
    mapKey: 'mapKey',
    submitCheck: 'submitCheck'
  }),
  data() {
    return {
      selectMapType: ''
    }
  },
  methods: {
    radioTypeChange(value) {
      if(value == '拼车') {
        this.addInfo.vehicle_num = 1;
      } else {
        this.addInfo.vehicle_num = '';
      }
    },
    getCityFromCode(codeArr) {
      var province = null, city = null, country = null;
      if(this.provinceCityList && codeArr) {
        this.provinceCityList.forEach(function(_p) {
          if(_p.district_code == codeArr[0]) {
            province = _p;
          }
        })
        if(province && province.children) {
          province.children.forEach(function(_c) {
            if(_c.district_code == codeArr[1]) {
              city = _c;
            }
          })
        }
        if(city && city.children) {
          city.children.forEach(function(_c) {
            if(_c.district_code == codeArr[2]) {
              country = _c;
            }
          })
        }
        var noneAdrr = ['县', '市辖区']
        var returAdrr = (province ? province.label : '') + (city && noneAdrr.indexOf(city.label) == -1 ? city.label : '') + (country && noneAdrr.indexOf(country.label) == -1 ? country.label : '');
        if(returAdrr == '澳门特别行政区') {
          returAdrr = '澳门';
        }
        if(returAdrr == '香港特别行政区') {
          returAdrr = '香港';
        }
        return returAdrr
      }
      return '';
    },
    changeCargoWeightType(type) {
      this.$store.dispatch('changeCargoWeightType',type)
    },
    previewImgAction({previewImgVisible, url}) {
      this.$store.dispatch('previewImgAction',{previewImgVisible, url})
    },
    removeFile(index) {
      var _this = this;
      this.$Modal.confirm({
        title: '确认',
        content: '<p>确认删除图片？</p>',
        onOk: function(){
          _this.$store.dispatch('removeFile',index)
        }
      });
    },
    submit() {
      this.$store.dispatch('checkAddinfo', this);

      if(!this.submitCheck) {
        return false;
      }

      this.$store.dispatch('submitOrder', this);
    },
    areaChose(_key) {
      this.addInfo[_key] = '';
      if(_key == 'cargo_address') {
        this.addInfo.cargo_address_xy = '';
      }else if(_key == 'consignee_address') {
        this.addInfo.consignee_address_xy = '';
      }
    },
    getDetailedAddress(_key) {
      var addr = '';
      if(_key == 'cargo_address') {
        addr = this.getCityFromCode(this.addInfo.cargo_area_code);
      } else if(_key == 'consignee_address') {
        addr = this.getCityFromCode(this.addInfo.consignee_area_code);
      }
      if(!addr) {
        this.$Message.warning('请先选择所在区域');
        return false;
      }
      var _this = this;
      this.map.visible = true;
      this.selectMapType = _key;
      setTimeout(function() {
        _this.$store.dispatch('initMap', {
          mapContainer: 'mapContainer',
          result: 'r-result',
          addr: addr
        })
      }, 300)
    },
    mapSearch() {
      this.$store.dispatch('mapLocalSearch');
    },
    selectMapItem(item) {
      this.map.selectMapItem = item;
      var marker2 = new BMap.Marker(item.point);
      this.map.instance.centerAndZoom(item.point, 16);
      this.map.instance.addOverlay(marker2)
      this.map.resultVisible = false;
    },
    confirmAdress() {
      if(this.map.selectMapItem) {
        if(this.selectMapType == 'cargo_address') {
          this.addInfo.cargo_address_xy = this.map.selectMapItem.point.lng + ',' + this.map.selectMapItem.point.lat;
        }else if(this.selectMapType == 'consignee_address') {
          this.addInfo.consignee_address_xy = this.map.selectMapItem.point.lng + ',' + this.map.selectMapItem.point.lat;
        }
        this.addInfo[this.selectMapType] = this.map.selectMapItem.address;
      }
    }
  },
  created () {
    var _this = this;
    this.$store.dispatch('leftNavSelect', 'fahuo');
    this.$store.dispatch('getConfig');
    this.$store.dispatch('getUploadConfig', function(config) {
      var browse_button = 'uploadFile';
      _this.$root.uploadFile({config, browse_button}, function(fileUrl) {
        _this.addInfo.cargo_images.push(fileUrl);
      })
    })
  }
}
</script>

<style lang="css" scoped>

.typeRadios {
  padding: 20px;
}
.submit {
  padding: 0 40px 40px;
}
.demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img {
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.ivu-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.mapItem {
  height: 30px;
  border: 1px solid #dadada;
  border-radius: 3px;
  white-space: nowrap;
    overflow: hidden;
    padding: 0 5px;
}
.mapSearchContainer {
  position: absolute;
  top: 72px;
  z-index: 100;
  left: 30px;
  width: 300px;
}
.ivu-select-item p{
  white-space: initial;
}
</style>
