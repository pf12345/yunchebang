webpackJsonp([1],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(52);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(379);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _leftMenu = __webpack_require__(369);

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _top = __webpack_require__(370);

var _top2 = _interopRequireDefault(_top);

var _Index = __webpack_require__(366);

var _Index2 = _interopRequireDefault(_Index);

var _tradingQuotations = __webpack_require__(371);

var _tradingQuotations2 = _interopRequireDefault(_tradingQuotations);

var _fahuo = __webpack_require__(368);

var _fahuo2 = _interopRequireDefault(_fahuo);

var _cheyuanInfo = __webpack_require__(367);

var _cheyuanInfo2 = _interopRequireDefault(_cheyuanInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Index',
    components: {
      content: _Index2.default
    }
  }, {
    path: '/tradingQuotations',
    name: '交易行情',
    components: {
      left: _leftMenu2.default,
      content: _tradingQuotations2.default,
      top: _top2.default
    }
  }, {
    path: '/fahuo',
    name: '我要发货',
    components: {
      left: _leftMenu2.default,
      content: _fahuo2.default,
      top: _top2.default
    }
  }, {
    path: '/cheyuanInfo',
    name: '车源信息',
    components: {
      left: _leftMenu2.default,
      content: _cheyuanInfo2.default,
      top: _top2.default
    }
  }]
});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(52);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(32);

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__(147);

var actions = _interopRequireWildcard(_actions);

var _getters = __webpack_require__(148);

var getters = _interopRequireWildcard(_getters);

var _tradingQuotations = __webpack_require__(153);

var _tradingQuotations2 = _interopRequireDefault(_tradingQuotations);

var _common = __webpack_require__(150);

var _common2 = _interopRequireDefault(_common);

var _map = __webpack_require__(152);

var _map2 = _interopRequireDefault(_map);

var _fahuo = __webpack_require__(151);

var _fahuo2 = _interopRequireDefault(_fahuo);

var _cheyuanInfo = __webpack_require__(149);

var _cheyuanInfo2 = _interopRequireDefault(_cheyuanInfo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var debug = "production" !== 'production';

exports.default = new _vuex2.default.Store({
  actions: actions,
  getters: getters,
  modules: {
    tradingQuotations: _tradingQuotations2.default,
    common: _common2.default,
    map: _map2.default,
    fahuo: _fahuo2.default,
    cheyuanInfo: _cheyuanInfo2.default
  }
});

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(360)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(375),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
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
  created() {
    this.$store.dispatch('leftNavSelect', 'cheyuanInfo');
    if (!this.commonConfig.vehicle_types) {
      this.$store.dispatch('getConfig');
    }
    this.$store.dispatch('getCheyuanList', this.cheyuanFilter);
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
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
    };
  },
  methods: {
    radioTypeChange(value) {
      if (value == '拼车') {
        this.addInfo.vehicle_num = 1;
      } else {
        this.addInfo.vehicle_num = '';
      }
    },
    getCityFromCode(codeArr) {
      var province = null,
          city = null,
          country = null;
      if (this.provinceCityList && codeArr) {
        this.provinceCityList.forEach(function (_p) {
          if (_p.district_code == codeArr[0]) {
            province = _p;
          }
        });
        if (province && province.children) {
          province.children.forEach(function (_c) {
            if (_c.district_code == codeArr[1]) {
              city = _c;
            }
          });
        }
        if (city && city.children) {
          city.children.forEach(function (_c) {
            if (_c.district_code == codeArr[2]) {
              country = _c;
            }
          });
        }
        var noneAdrr = ['县', '市辖区'];
        var returAdrr = (province ? province.label : '') + (city && noneAdrr.indexOf(city.label) == -1 ? city.label : '') + (country && noneAdrr.indexOf(country.label) == -1 ? country.label : '');
        if (returAdrr == '澳门特别行政区') {
          returAdrr = '澳门';
        }
        if (returAdrr == '香港特别行政区') {
          returAdrr = '香港';
        }
        return returAdrr;
      }
      return '';
    },
    changeCargoWeightType(type) {
      this.$store.dispatch('changeCargoWeightType', type);
    },
    previewImgAction({ previewImgVisible, url }) {
      this.$store.dispatch('previewImgAction', { previewImgVisible, url });
    },
    removeFile(index) {
      var _this = this;
      this.$Modal.confirm({
        title: '确认',
        content: '<p>确认删除图片？</p>',
        onOk: () => {
          _this.$store.dispatch('removeFile', index);
        }
      });
    },
    submit() {
      this.$store.dispatch('checkAddinfo', this);

      if (!this.submitCheck) {
        return false;
      }

      this.$store.dispatch('submitOrder', this);
    },
    areaChose(_key) {
      this.addInfo[_key] = '';
      if (_key == 'cargo_address') {
        this.addInfo.cargo_address_xy = '';
      } else if (_key == 'consignee_address') {
        this.addInfo.consignee_address_xy = '';
      }
    },
    getDetailedAddress(_key) {
      var addr = '';
      if (_key == 'cargo_address') {
        addr = this.getCityFromCode(this.addInfo.cargo_area_code);
      } else if (_key == 'consignee_address') {
        addr = this.getCityFromCode(this.addInfo.consignee_area_code);
      }
      if (!addr) {
        this.$Message.warning('请先选择所在区域');
        return false;
      }
      var _this = this;
      this.map.visible = true;
      this.selectMapType = _key;
      setTimeout(function () {
        _this.$store.dispatch('initMap', {
          mapContainer: 'mapContainer',
          result: 'r-result',
          addr: addr
        });
      }, 300);
    },
    mapSearch() {
      this.$store.dispatch('mapLocalSearch');
    },
    selectMapItem(item) {
      this.map.selectMapItem = item;
      var marker2 = new BMap.Marker(item.point);
      this.map.instance.centerAndZoom(item.point, 16);
      this.map.instance.addOverlay(marker2);
      this.map.resultVisible = false;
    },
    confirmAdress() {
      if (this.map.selectMapItem) {
        if (this.selectMapType == 'cargo_address') {
          this.addInfo.cargo_address_xy = this.map.selectMapItem.point.lng + ',' + this.map.selectMapItem.point.lat;
        } else if (this.selectMapType == 'consignee_address') {
          this.addInfo.consignee_address_xy = this.map.selectMapItem.point.lng + ',' + this.map.selectMapItem.point.lat;
        }
        this.addInfo[this.selectMapType] = this.map.selectMapItem.address;
      }
    }
  },
  created() {
    var _this = this;
    this.$store.dispatch('leftNavSelect', 'fahuo');
    this.$store.dispatch('getConfig');
    this.$store.dispatch('getUploadConfig', function (config) {
      var browse_button = 'uploadFile';
      _this.$root.uploadFile({ config, browse_button }, function (fileUrl) {
        _this.addInfo.cargo_images.push(fileUrl);
      });
    });
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
    curLeftMenu: 'curLeftMenu'
  }),
  methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['leftNavSelect'])
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
    userInfo: 'userInfo'
  }),
  created() {
    this.$store.dispatch('getUserInfo');
  }
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(32);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
    tradingQuotationsList: 'tradingQuotationsList',
    columns: 'columns'
  }),
  created() {
    this.$store.dispatch('leftNavSelect', 'tradingQuotations');
    this.$store.dispatch('getTradingQuotationsList');
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = __webpack_require__(53);

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getList: function getList(_ref, cb) {
    var cargo_area_code = _ref.cargo_area_code,
        consignee_area_code = _ref.consignee_area_code,
        vehicle_type = _ref.vehicle_type;

    var paramStr = 'cargo_area_code=' + cargo_area_code + '&consignee_area_code＝' + consignee_area_code + '&vehicle_type=' + vehicle_type;
    _query2.default.ajaxGet({
      url: '/vehicle/route/list?' + paramStr
    }, cb);
  }
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = __webpack_require__(53);

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addOrder: function addOrder(addInfo, cb) {
    _query2.default.ajaxPost({
      url: '/order/add',
      params: addInfo
    }, cb);
  }
};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = __webpack_require__(53);

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getComfirmedList: function getComfirmedList(cb) {
    _query2.default.ajaxGet({
      url: '/users/order/list'
    }, cb);
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

var _vue = __webpack_require__(52);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(32);

var _vuex2 = _interopRequireDefault(_vuex);

var _App = __webpack_require__(135);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(130);

var _router2 = _interopRequireDefault(_router);

var _iview = __webpack_require__(134);

var _iview2 = _interopRequireDefault(_iview);

__webpack_require__(133);

var _store = __webpack_require__(131);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vuex2.default); // 使用 CSS


_vue2.default.use(_iview2.default);

_vue2.default.config.productionTip = false;

_router2.default.beforeEach(function (to, from, next) {
  _iview2.default.LoadingBar.start();
  next();
});

_router2.default.afterEach(function (to, from, next) {
  _iview2.default.LoadingBar.finish();
});

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  template: '<App/>',
  methods: {
    uploadFile: function uploadFile(_ref, cb) {
      var config = _ref.config,
          browse_button = _ref.browse_button;

      if (!config) {
        return false;
      }
      var _this = this;
      var msg = null;
      var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4', //上传模式,依次退化
        browse_button: browse_button, //上传选择的点选按钮，**必需**
        // uptoken_url: 'http://39.108.113.222/api/v1/file/token/get', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        uptoken: config.uptoken, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
        save_key: true, // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
        domain: config.base_url, //bucket 域名，下载资源时用到，**必需**
        get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
        // container: 'container', //上传区域DOM ID，默认是browser_button的父元素，
        max_file_size: '100mb', //最大文件体积限制
        flash_swf_url: 'http://localhost:8033/static/plupload/Moxie.swf', //引入flash,相对路径
        max_retries: 3, //上传失败最大重试次数
        dragdrop: true, //开启可拖曳上传
        // drop_element: 'container', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb', //分块上传时，每片的体积
        auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
          'FilesAdded': function FilesAdded(up, files) {
            // plupload.each(files, function(file) {
            //   // console.log(file);
            //   // 文件添加进队列后,处理相关的事情
            // });
          },
          'BeforeUpload': function BeforeUpload(up, file) {
            if (!msg) {
              msg = _this.$Message.loading({
                content: '正在上传中...',
                duration: 0
              });
            }
            // 每个文件上传前,处理相关的事情
          },
          'UploadProgress': function UploadProgress(up, file) {
            // 每个文件上传时,处理相关的事情
          },
          'FileUploaded': function FileUploaded(up, file, info) {
            if (cb && typeof cb === 'function') {
              var info = JSON.parse(info.response);
              var domain = up.getOption('domain');
              var fileUrl = domain + info.key;
              cb(fileUrl);
            }
            // 每个文件上传成功后,处理相关的事情
            // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
            // {
            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
            //    "key": "gogopher.jpg"
            //  }
            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

            // var domain = up.getOption('domain');
            // var res = parseJSON(info.response);
            // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
          },
          'Error': function Error(up, err, errTip) {
            console.log(err);
            //上传出错时,处理相关的事情
          },
          'UploadComplete': function UploadComplete() {
            if (msg) {
              msg();
              msg = null;
            }
            // console.log('UploadComplete');
            //队列文件处理完毕后,处理相关的事情
          }
        }
      });
    }
  },
  components: {
    App: _App2.default
  }
});

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftNavSelect = undefined;

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var leftNavSelect = exports.leftNavSelect = function leftNavSelect(_ref, type) {
  var commit = _ref.commit;

  commit(types.LEFT_NAE_SELECT, type);
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cartProducts = exports.cartProducts = function cartProducts(state) {};

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

var _cheyuanInfo = __webpack_require__(143);

var _cheyuanInfo2 = _interopRequireDefault(_cheyuanInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  cheyuanList: [],
  cheyuanData: {},
  cheyuanFilter: {
    cargo_area_code: [], //货物省市区代码
    consignee_area_code: [], //收货省市区代码
    vehicle_type: '不限' //车辆类型
  },
  cheyuanColumns: [{
    title: '发布时间',
    key: 'publish_time',
    width: 100,
    render: function render(h, _ref) {
      var row = _ref.row,
          column = _ref.column,
          index = _ref.index;

      return '' + (row.publish_time ? row.publish_time.split(' ')[0] : '');
    }
  }, {
    title: '路线',
    key: 'address',
    render: function render(h, _ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          index = _ref2.index;

      return '' + (row.consignee_city + '-' + row.cargo_city);
    }
  }, {
    title: '车辆类型',
    key: 'type',
    width: 100
  }, {
    title: '车辆长度',
    key: 'length',
    width: 150,
    render: function render(h, _ref3) {
      var row = _ref3.row,
          column = _ref3.column,
          index = _ref3.index;

      return '' + (row.length + '米');
    }
  }, {
    title: '车辆载重',
    width: 120,
    render: function render(h, _ref4) {
      var row = _ref4.row,
          column = _ref4.column,
          index = _ref4.index;

      return '' + (row.load + '吨');
    }
  }, {
    title: '装货体积',
    width: 120,
    render: function render(h, _ref5) {
      var row = _ref5.row,
          column = _ref5.column,
          index = _ref5.index;

      return row.volume + 'm\xB3';
    }
  }, {
    title: '车辆车牌',
    key: 'plate_number',
    width: 100
  }, {
    title: '心意运价',
    key: 'freight',
    width: 100,
    render: function render(h, _ref6) {
      var row = _ref6.row,
          column = _ref6.column,
          index = _ref6.index;

      return '' + (row.freight + row.freight_unit);
    }
  }]

  // getters
};var getters = {
  cheyuanList: function cheyuanList(state) {
    return state.cheyuanList;
  },
  cheyuanColumns: function cheyuanColumns(state) {
    return state.cheyuanColumns;
  },
  cheyuanFilter: function cheyuanFilter(state) {
    return state.cheyuanFilter;
  }

  // actions
};var actions = {
  getCheyuanList: function getCheyuanList(_ref7, cheyuanFilter) {
    var commit = _ref7.commit;

    _cheyuanInfo2.default.getList(cheyuanFilter, function (res) {
      var _cheyuanList = res.data;
      commit(types.GET_CHEYUAN_LIST, _cheyuanList);
    });
    // tradingQuotations.getComfirmedList()
  },
  clearCheyuanFilter: function clearCheyuanFilter(_ref8) {
    var commit = _ref8.commit;

    commit(types.CLEAR_CHEYUAN_FILTER);
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, types.GET_CHEYUAN_LIST, function (state, cheyuanList) {
  state.cheyuanData = cheyuanList;
  state.cheyuanList = cheyuanList.data;
}), _defineProperty(_mutations, types.CLEAR_CHEYUAN_FILTER, function (state) {
  state.cheyuanFilter = {
    cargo_area_code: [], //货物省市区代码
    consignee_area_code: [], //收货省市区代码
    vehicle_type: '不限' //车辆类型
  };
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

var _common = __webpack_require__(69);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  curLeftMenu: 'jiaoyihangqing',
  userInfo: {},
  provinceCityList: [],
  commonConfig: {}

  // getters
};var getters = {
  curLeftMenu: function curLeftMenu(state) {
    return state.curLeftMenu;
  },
  userInfo: function userInfo(state) {
    return state.userInfo;
  },
  provinceCityList: function provinceCityList(state) {
    return state.provinceCityList;
  },
  commonConfig: function commonConfig(state) {
    return state.commonConfig;
  }

  // actions
};var actions = {
  getUserInfo: function getUserInfo(_ref) {
    var commit = _ref.commit;

    _common2.default.getUserInfo(function (res) {
      var userInfo = res.data;
      commit(types.GET_USER_INFO, { userInfo: userInfo });
    });
  },
  getUploadConfig: function getUploadConfig(_ref2, cb) {
    var commit = _ref2.commit;

    _common2.default.getUploadConfig(function (res) {
      var config = res.data;
      if (cb && typeof cb == 'function' && config) {
        // console.log(config);
        cb(config);
      }
    });
  },
  getConfig: function getConfig(_ref3) {
    var commit = _ref3.commit;

    _common2.default.getConfig(function (res) {
      commit(types.GET_CONFIG, res);
    });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, types.GET_USER_INFO, function (state, _ref4) {
  var userInfo = _ref4.userInfo;

  state.userInfo = userInfo;
}), _defineProperty(_mutations, types.LEFT_NAE_SELECT, function (state, type) {
  state.curLeftMenu = type;
  window.location.href = '/#/' + type;
}), _defineProperty(_mutations, types.GET_CONFIG, function (state, _ref5) {
  var data = _ref5.data;

  state.commonConfig = data;
  var province = [];
  var cities = [];
  var countys = [];
  if (data && data.area && data.area.length) {
    data.area.forEach(function (area) {
      area.value = area.district_code;
      area.label = area.name;
      if (area.code < 100 && !area.name.match('台湾')) {
        area.children = [];
        province.push(area);
      }
      if (area.code > 1000 && area.code < 10000) {
        area.children = [];
        cities.push(area);
      }
      if (area.code > 100000 && area.code < 1000000) {
        countys.push(area);
      }
    });
    cities.forEach(function (city) {
      countys.forEach(function (county) {
        if (county.city_code === city.city_code) {
          city.children.push(county);
        }
      });
    });
    province.forEach(function (_province) {
      cities.forEach(function (city) {
        if (_province.province_code === city.province_code) {
          _province.children.push(city);
        }
      });
    });
  }
  state.provinceCityList = province;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

var _common = __webpack_require__(69);

var _common2 = _interopRequireDefault(_common);

var _fahuo = __webpack_require__(144);

var _fahuo2 = _interopRequireDefault(_fahuo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  previewImg: {
    visible: false,
    url: ''
  },
  freight_units: [],
  payer_list: [{
    name: '发货人付款',
    value: '1'
  }, {
    name: '收货人付款',
    value: '2'
  }],
  submitCheck: false,
  cargo_weight_type: 'fixed', //'range' or 'fixed'
  addInfo: {
    type: '整车', //1整车, 2拼车
    vehicle_num: '', //车辆数, 整车时候需要填入
    consignee: '', //收货人
    consignee_area_code: [], //收货省市区代码
    consignee_address: '', //收货详细地址
    consignee_address_xy: '', //收货详细地址经纬度 格式: 经度，维度 192,20
    consignee_cellphone: '', //手机号
    cargo_name: '', //货物名称
    cargo_type: '', //货物类别
    cargo_weight: '', //货物吨位
    cargo_weight_min: '', //货物吨位， 最小值
    cargo_weight_max: '', //货物吨位, 最大值
    cargo_volume: '', //货物体积， 立方米
    cargo_num: '', //货物件数
    freight: '', //货物运价
    freight_unit: '', //货物运价单位， 见配置信息unit字段
    payer: '', //支付人, 1 发货人 2 收货人
    buy_insurance: '', //是否购买保险 1 是 0 否
    insurance_type: '', //保险类型, 支持多个[type1, type2], 类型见配置信息
    vehicle_type: '', //车辆类型
    vehicle_length: '', //车辆长度, 米
    note: '', //备注
    cargo_images: [], //货物相片 json 数组 [src1, src2]
    cargo_area_code: [], //货物省市区代码
    cargo_address: '', //货物详细地址
    cargo_address_xy: '', //货物详细地址经纬度 格式: 经度，维度 192,20
    cargo_owner_name: '', //发货人姓名
    cargo_owner_cellphone: '', //发货人手机
    confirm_code: '' //确认收货验证码
  }
};

var getters = {
  addInfo: function addInfo(state) {
    return state.addInfo;
  },
  cargo_weight_type: function cargo_weight_type(state) {
    return state.cargo_weight_type;
  },
  payer_list: function payer_list(state) {
    return state.payer_list;
  },
  previewImg: function previewImg(state) {
    return state.previewImg;
  },
  previewImgUrl: function previewImgUrl(state) {
    return state.previewImgUrl;
  },
  submitCheck: function submitCheck(state) {
    return state.submitCheck;
  }

  // actions
};var actions = {
  changeCargoWeightType: function changeCargoWeightType(_ref, type) {
    var commit = _ref.commit;

    commit(types.CHANGE_CARGO_WEIGHT_TYPE, type);
  },
  previewImgAction: function previewImgAction(_ref2, _ref3) {
    var commit = _ref2.commit;
    var previewImgVisible = _ref3.previewImgVisible,
        url = _ref3.url;

    commit(types.PREVIEW_IMG, {
      previewImgVisible: previewImgVisible,
      url: url
    });
  },
  removeFile: function removeFile(_ref4, index) {
    var commit = _ref4.commit;

    commit(types.REMOVE_FILE, index);
  },
  checkAddinfo: function checkAddinfo(_ref5, vue) {
    var commit = _ref5.commit;

    var waringFun = function waringFun(str) {
      vue.$Message.warning(str);
      commit(types.SET_CHECK_FAHUO_STATUS, false);
      return false;
    };
    if (!state.addInfo.cargo_owner_name) {
      return waringFun('请填写发货人');
    }
    if (!state.addInfo.cargo_owner_cellphone) {
      return waringFun('请填写发货人手机');
    }
    if (!state.addInfo.cargo_area_code.length) {
      return waringFun('请填写发货货物省市');
    }
    if (!state.addInfo.cargo_address || !state.addInfo.cargo_address_xy) {
      return waringFun('请填写发货货物详细地址');
    }

    if (!state.addInfo.consignee) {
      return waringFun('请填写收货人');
    }
    if (!state.addInfo.consignee_cellphone) {
      return waringFun('请填写收货人手机');
    }
    if (!state.addInfo.consignee_area_code.length) {
      return waringFun('请填写收货货物省市');
    }
    if (!state.addInfo.consignee_address || !state.addInfo.consignee_address_xy) {
      return waringFun('请填写收货货物详细地址');
    }

    if (!state.addInfo.cargo_type) {
      return waringFun('请填写货物类型');
    }
    if (!state.addInfo.cargo_num) {
      return waringFun('请填写货物件数');
    }
    if (!state.addInfo.cargo_weight && !state.addInfo.cargo_weight_min && !state.addInfo.cargo_weight_max) {
      return waringFun('请填写货物吨位');
    }
    if (!state.addInfo.cargo_volume) {
      return waringFun('请填写货物体积');
    }
    if (!state.addInfo.freight) {
      return waringFun('请填写货物运价');
    }
    if (!state.addInfo.freight_unit) {
      return waringFun('请选择货物运价单位');
    }
    if (state.addInfo.type == '整车' && !state.addInfo.vehicle_num) {
      return waringFun('请填写车辆数');
    }
    if (!state.addInfo.vehicle_type) {
      return waringFun('请填写车辆类型');
    }
    if (!state.addInfo.vehicle_length) {
      return waringFun('请填写车辆长度');
    }
    if (!state.addInfo.payer) {
      return waringFun('请选择支付方式');
    }

    commit(types.SET_CHECK_FAHUO_STATUS, true);
  },
  submitOrder: function submitOrder(_ref6, vue) {
    var commit = _ref6.commit;

    var params = {};
    for (var key in state.addInfo) {
      if (state.addInfo[key]) {
        params[key] = state.addInfo[key];
      }
    }
    if (params.cargo_area_code && _typeof(params.cargo_area_code) == 'object') {
      params.cargo_area_code = params.cargo_area_code[params.cargo_area_code.length - 1];
    }
    if (params.consignee_area_code && _typeof(params.consignee_area_code) == 'object') {
      params.consignee_area_code = params.consignee_area_code[params.consignee_area_code.length - 1];
    }
    if (params.cargo_images) {
      params.cargo_images = JSON.stringify(params.cargo_images);
    }

    if (params.type == '整车') {
      params.type = 1;
    } else if (params.type == '拼车') {
      params.type = 2;
    }

    _fahuo2.default.addOrder(params, function (res) {
      if (vue) {
        vue.$Message.success(res.message);
      }
    });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, types.CHANGE_CARGO_WEIGHT_TYPE, function (state, type) {
  state.cargo_weight_type = type;
}), _defineProperty(_mutations, types.PREVIEW_IMG, function (state, _ref7) {
  var previewImgVisible = _ref7.previewImgVisible,
      url = _ref7.url;

  state.previewImg.visible = previewImgVisible;
  state.previewImg.url = url;
}), _defineProperty(_mutations, types.REMOVE_FILE, function (state, index) {
  state.addInfo.cargo_images.splice(index, 1);
}), _defineProperty(_mutations, types.SET_CHECK_FAHUO_STATUS, function (state, status) {
  state.submitCheck = status;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

var _common = __webpack_require__(69);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  mapSearchResults: [],
  map: {
    visible: false,
    mapKey: '',
    resultVisible: false,
    instance: null,
    selectMapItem: null
  },
  local: null
};

var getters = {
  mapSearchResults: function mapSearchResults(state) {
    return state.mapSearchResults;
  },
  map: function map(state) {
    return state.map;
  },
  mapKey: function mapKey(state) {
    return state.mapKey;
  }

  // actions
};var actions = {
  initMap: function initMap(_ref, obj) {
    var commit = _ref.commit;

    var map = new BMap.Map(obj.mapContainer);
    map.centerAndZoom(obj.addr); // 初始化地图,设置城市和地图级别。
    var options = {
      // renderOptions: {map: map},
      onSearchComplete: function onSearchComplete(results) {
        if (local.getStatus() == BMAP_STATUS_SUCCESS) {
          commit(types.GET_MAP_SEARCH_RESULTS, results);
        }
      }
    };
    var local = new BMap.LocalSearch(map, options);
    commit(types.SET_MAP_LOCAL, { local: local, map: map });
    // local.search("锦江逸家");
    // setTimeout(function() {
    //   local.search("天府新谷");
    // }, 2000)
  },
  mapLocalSearch: function mapLocalSearch(_ref2) {
    var commit = _ref2.commit;

    commit(types.GET_MAP_SEARCH_RESULTS, { ki: [] });
    var local = state.local;
    var key = state.map.mapKey;
    local.search(key);
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, types.GET_MAP_SEARCH_RESULTS, function (state, results) {
  // console.log(results.ki);
  state.mapSearchResults = results.ki;
  state.map.resultVisible = true;
}), _defineProperty(_mutations, types.SET_MAP_LOCAL, function (state, _ref3) {
  var local = _ref3.local,
      map = _ref3.map;

  state.local = local;
  state.map.instance = map;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutationTypes = __webpack_require__(44);

var types = _interopRequireWildcard(_mutationTypes);

var _tradingQuotations = __webpack_require__(145);

var _tradingQuotations2 = _interopRequireDefault(_tradingQuotations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  tradingQuotationsList: [],
  tradingQuotationsData: {},
  columns: [{
    title: '成交时间',
    key: 'order_time',
    width: 100,
    render: function render(h, _ref) {
      var row = _ref.row,
          column = _ref.column,
          index = _ref.index;

      return '' + (row.order_time ? row.order_time.split(' ')[0] : '');
    }
  }, {
    title: '订单号码',
    key: 'age',
    width: 100
  }, {
    title: '发货－收获地',
    key: 'address',
    render: function render(h, _ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          index = _ref2.index;

      return '' + (row.consignee_city + '-' + row.cargo_city);
    }
  }, {
    title: '货物类型',
    key: 'cargo_type',
    width: 100
  }, {
    title: '货物品名',
    key: 'cargo_name',
    width: 150
  }, {
    title: '货物重量',
    width: 100,
    render: function render(h, _ref3) {
      var row = _ref3.row,
          column = _ref3.column,
          index = _ref3.index;

      return '' + (row.cargo_weight + '吨');
    }
  }, {
    title: '货物体积',
    width: 100,
    render: function render(h, _ref4) {
      var row = _ref4.row,
          column = _ref4.column,
          index = _ref4.index;

      return row.cargo_volume + 'm\xB3';
    }
  }, {
    title: '运价',
    width: 80,
    render: function render(h, _ref5) {
      var row = _ref5.row,
          column = _ref5.column,
          index = _ref5.index;

      return '' + (row.freight + '/' + row.freight_unit);
    }
  }, {
    title: '车辆类型',
    key: 'vehicle_type',
    width: 100
  }, {
    title: '车辆车牌',
    key: 'plate_number',
    width: 100
  }]

  // getters
};var getters = {
  tradingQuotationsList: function tradingQuotationsList(state) {
    return state.tradingQuotationsList;
  },
  columns: function columns(state) {
    return state.columns;
  }

  // actions
};var actions = {
  getTradingQuotationsList: function getTradingQuotationsList(_ref6) {
    var commit = _ref6.commit;

    _tradingQuotations2.default.getComfirmedList(function (res) {
      var _tradingQuotationsList = res.data;
      commit(types.GET_TRADING_QUOTATIONS, _tradingQuotationsList);
    });
    // tradingQuotations.getComfirmedList()
  }
};

// mutations
var mutations = _defineProperty({}, types.GET_TRADING_QUOTATIONS, function (state, tradingQuotationsList) {
  state.tradingQuotationsData = tradingQuotationsList;
  state.tradingQuotationsList = tradingQuotationsList.data;
});

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(362)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(377),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e0a92362",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(363)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(378),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fe4676d8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(357)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(372),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-03645d84",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(359)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(374),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4554a779",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(361)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(376),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-471f2ab2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(358)
}
var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(373),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42829385",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("我要发货")]), _vm._v(" "), _c('div', {
    staticClass: "p20 border"
  }, [_c('Radio-group', {
    on: {
      "on-change": _vm.radioTypeChange
    },
    model: {
      value: (_vm.addInfo.type),
      callback: function($$v) {
        _vm.addInfo.type = $$v
      },
      expression: "addInfo.type"
    }
  }, [_c('Radio', {
    attrs: {
      "label": "整车"
    }
  }), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "拼车"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt20"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('div', {
    staticClass: "border p20"
  }, [_c('h4', [_vm._v("发货人信息")]), _vm._v(" "), _c('Form', {
    attrs: {
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "发货人姓名"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_owner_name),
      callback: function($$v) {
        _vm.addInfo.cargo_owner_name = $$v
      },
      expression: "addInfo.cargo_owner_name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "联系电话"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_owner_cellphone),
      callback: function($$v) {
        _vm.addInfo.cargo_owner_cellphone = $$v
      },
      expression: "addInfo.cargo_owner_cellphone"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "所在区域"
    }
  }, [_c('Cascader', {
    attrs: {
      "data": _vm.provinceCityList,
      "change-on-select": ""
    },
    on: {
      "on-change": function($event) {
        _vm.areaChose('cargo_address')
      }
    },
    model: {
      value: (_vm.addInfo.cargo_area_code),
      callback: function($$v) {
        _vm.addInfo.cargo_area_code = $$v
      },
      expression: "addInfo.cargo_area_code"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "详细地址"
    }
  }, [_c('div', {
    staticClass: "mapItem",
    on: {
      "click": function($event) {
        _vm.getDetailedAddress('cargo_address')
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.addInfo.cargo_address) + "\n              ")])])], 1)], 1)]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": "2"
    }
  }, [_c('img', {
    staticStyle: {
      "position": "relative",
      "top": "120px"
    },
    attrs: {
      "src": "http://localhost:8033/images/leftpoint.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('div', {
    staticClass: "border p20"
  }, [_c('h4', [_vm._v("收货人信息")]), _vm._v(" "), _c('Form', {
    attrs: {
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "收货人姓名"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.consignee),
      callback: function($$v) {
        _vm.addInfo.consignee = $$v
      },
      expression: "addInfo.consignee"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "联系电话"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.consignee_cellphone),
      callback: function($$v) {
        _vm.addInfo.consignee_cellphone = $$v
      },
      expression: "addInfo.consignee_cellphone"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "所在区域"
    }
  }, [_c('Cascader', {
    attrs: {
      "data": _vm.provinceCityList,
      "change-on-select": ""
    },
    on: {
      "on-change": function($event) {
        _vm.areaChose('consignee_address')
      }
    },
    model: {
      value: (_vm.addInfo.consignee_area_code),
      callback: function($$v) {
        _vm.addInfo.consignee_area_code = $$v
      },
      expression: "addInfo.consignee_area_code"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "详细地址"
    }
  }, [_c('div', {
    staticClass: "mapItem",
    on: {
      "click": function($event) {
        _vm.getDetailedAddress('consignee_address')
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.addInfo.consignee_address) + "\n                ")])])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt20 border"
  }, [_c('div', {
    staticClass: "p20"
  }, [_c('h4', [_vm._v("货源信息")]), _vm._v(" "), _c('Form', {
    attrs: {
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "货物类型"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.addInfo.cargo_type),
      callback: function($$v) {
        _vm.addInfo.cargo_type = $$v
      },
      expression: "addInfo.cargo_type"
    }
  }, _vm._l((_vm.commonConfig.cargo_types), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item
      }
    }, [_vm._v(_vm._s(item))])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "货物件数"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_num),
      callback: function($$v) {
        _vm.addInfo.cargo_num = $$v
      },
      expression: "addInfo.cargo_num"
    }
  }), _vm._v(" "), _c('span', {
    slot: "append"
  }, [_vm._v("件")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [(_vm.cargo_weight_type == 'fixed') ? _c('Form-item', {
    attrs: {
      "label": "货物吨位"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_weight),
      callback: function($$v) {
        _vm.addInfo.cargo_weight = $$v
      },
      expression: "addInfo.cargo_weight"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("吨")])])], 1), _vm._v(" "), _c('Col', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "8"
    }
  }, [_c('Button', {
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.changeCargoWeightType('range')
      }
    }
  }, [_vm._v("范围")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.cargo_weight_type == 'range') ? _c('Form-item', {
    attrs: {
      "label": "货物吨位"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_weight_min),
      callback: function($$v) {
        _vm.addInfo.cargo_weight_min = $$v
      },
      expression: "addInfo.cargo_weight_min"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("吨")])])], 1), _vm._v(" "), _c('Col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                      -\n                    ")]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_weight_max),
      callback: function($$v) {
        _vm.addInfo.cargo_weight_max = $$v
      },
      expression: "addInfo.cargo_weight_max"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("吨")])])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "8"
    }
  }, [_c('Button', {
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.changeCargoWeightType('fixed')
      }
    }
  }, [_vm._v("固定值")])], 1)], 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "货物体积"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.cargo_volume),
      callback: function($$v) {
        _vm.addInfo.cargo_volume = $$v
      },
      expression: "addInfo.cargo_volume"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("m³")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "货物运价"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.freight),
      callback: function($$v) {
        _vm.addInfo.freight = $$v
      },
      expression: "addInfo.freight"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "span": "8"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.addInfo.freight_unit),
      callback: function($$v) {
        _vm.addInfo.freight_unit = $$v
      },
      expression: "addInfo.freight_unit"
    }
  }, _vm._l((_vm.commonConfig.unit), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item
      }
    }, [_vm._v(_vm._s('元/' + item))])
  }))], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "发货车数"
    }
  }, [_c('Input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.addInfo.type == '拼车'),
      expression: "addInfo.type == '拼车'"
    }],
    attrs: {
      "type": "text",
      "readonly": ""
    },
    model: {
      value: (_vm.addInfo.vehicle_num),
      callback: function($$v) {
        _vm.addInfo.vehicle_num = $$v
      },
      expression: "addInfo.vehicle_num"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("车")])]), _vm._v(" "), _c('Input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.addInfo.type == '整车'),
      expression: "addInfo.type == '整车'"
    }],
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.addInfo.vehicle_num),
      callback: function($$v) {
        _vm.addInfo.vehicle_num = $$v
      },
      expression: "addInfo.vehicle_num"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v("车")])])], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "车辆类型"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.addInfo.vehicle_type),
      callback: function($$v) {
        _vm.addInfo.vehicle_type = $$v
      },
      expression: "addInfo.vehicle_type"
    }
  }, _vm._l((_vm.commonConfig.vehicle_types), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item
      }
    }, [_vm._v(_vm._s(item))])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "车辆长度"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.addInfo.vehicle_length),
      callback: function($$v) {
        _vm.addInfo.vehicle_length = $$v
      },
      expression: "addInfo.vehicle_length"
    }
  }, _vm._l((_vm.commonConfig.vehicle_lengths), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item
      }
    }, [_vm._v(_vm._s(item))])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "支付方式"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.addInfo.payer),
      callback: function($$v) {
        _vm.addInfo.payer = $$v
      },
      expression: "addInfo.payer"
    }
  }, _vm._l((_vm.payer_list), function(item) {
    return _c('Option', {
      key: item.value,
      attrs: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Form-item', [_vm._l((_vm.addInfo.cargo_images), function(_img, index) {
    return _c('div', {
      staticClass: "demo-upload-list"
    }, [_c('img', {
      attrs: {
        "src": _img
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "demo-upload-list-cover"
    }, [_c('i', {
      staticClass: "ivu-icon ivu-icon-ios-eye-outline",
      on: {
        "click": function($event) {
          _vm.previewImgAction({
            url: _img,
            previewImgVisible: true
          })
        }
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "ivu-icon ivu-icon-ios-trash-outline",
      on: {
        "click": function($event) {
          _vm.removeFile(index)
        }
      }
    })])])
  }), _vm._v(" "), _c('div', {
    staticClass: "ivu-upload",
    staticStyle: {
      "display": "inline-block",
      "width": "58px"
    }
  }, [_c('div', {
    staticClass: "ivu-upload ivu-upload-drag"
  }, [_c('div', {
    staticStyle: {
      "width": "58px",
      "height": "58px",
      "line-height": "58px"
    },
    attrs: {
      "id": "uploadFile"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "camera",
      "size": "20"
    }
  })], 1)])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "查看图片"
    },
    model: {
      value: (_vm.previewImg.visible),
      callback: function($$v) {
        _vm.previewImg.visible = $$v
      },
      expression: "previewImg.visible"
    }
  }, [(_vm.previewImg.visible) ? _c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": _vm.previewImg.url
    }
  }) : _vm._e()])], 2)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "详细地址",
      "width": "740"
    },
    on: {
      "on-ok": _vm.confirmAdress
    },
    model: {
      value: (_vm.map.visible),
      callback: function($$v) {
        _vm.map.visible = $$v
      },
      expression: "map.visible"
    }
  }, [_c('div', {
    staticClass: "mapSearchContainer"
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    on: {
      "on-enter": _vm.mapSearch
    },
    model: {
      value: (_vm.map.mapKey),
      callback: function($$v) {
        _vm.map.mapKey = $$v
      },
      expression: "map.mapKey"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.map.resultVisible),
      expression: "map.resultVisible"
    }],
    attrs: {
      "id": "r-result"
    }
  }, [_c('div', {
    staticClass: "ivu-select-dropdown",
    staticStyle: {
      "width": "300px",
      "position": "absolute",
      "left": "0",
      "top": "30px",
      "transform-origin": "center top 0px"
    },
    attrs: {
      "x-placement": "bottom"
    }
  }, [(!_vm.mapSearchResults.length) ? _c('ul', {
    staticClass: "ivu-select-not-found"
  }, [_c('li', [_vm._v("无匹配数据")])]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "ivu-select-dropdown-list"
  }, _vm._l((_vm.mapSearchResults), function(item) {
    return _c('li', {
      staticClass: "ivu-select-item",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectMapItem(item)
        }
      }
    }, [_c('p', {
      staticStyle: {
        "color": "#00c"
      }
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("地址：" + _vm._s(item.address))])])
  })), _vm._v(" "), _c('ul', {
    staticClass: "ivu-select-loading",
    staticStyle: {
      "display": "none"
    }
  }, [_vm._v("加载中")])])])], 1), _vm._v(" "), (_vm.map.visible) ? _c('div', {
    staticStyle: {
      "height": "400px",
      "width": "700px"
    },
    attrs: {
      "id": "mapContainer"
    }
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mt20 border"
  }, [_c('div', {
    staticClass: "p20"
  }, [_c('h4', [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 4,
      "placeholder": "请输入备注"
    },
    model: {
      value: (_vm.addInfo.note),
      callback: function($$v) {
        _vm.addInfo.note = $$v
      },
      expression: "addInfo.note"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mt20 submit"
  }, [_c('Button', {
    attrs: {
      "type": "success",
      "long": ""
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("确认发货")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("交易行情")]), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.tradingQuotationsList
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "leftMenu"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("\n    云车邦\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [_c('ul', [_c('li', {
    class: _vm.curLeftMenu == 'tradingQuotations' ? 'selected' : '',
    on: {
      "click": function($event) {
        _vm.leftNavSelect('tradingQuotations')
      }
    }
  }, [_vm._v("交易行情")]), _vm._v(" "), _c('li', {
    class: _vm.curLeftMenu == 'cheyuanInfo' ? 'selected' : '',
    on: {
      "click": function($event) {
        _vm.leftNavSelect('cheyuanInfo')
      }
    }
  }, [_vm._v("车源信息")]), _vm._v(" "), _c('li', {
    class: _vm.curLeftMenu == 'fahuo' ? 'selected' : '',
    on: {
      "click": function($event) {
        _vm.leftNavSelect('fahuo')
      }
    }
  }, [_vm._v("我要发货")]), _vm._v(" "), _c('li', {
    class: _vm.curLeftMenu == 'wode' ? 'selected' : '',
    on: {
      "click": function($event) {
        _vm.leftNavSelect('wode')
      }
    }
  }, [_vm._v("我的")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "layout"
  }, [_c('router-view', {
    staticClass: "view left",
    attrs: {
      "name": "left"
    }
  }), _vm._v(" "), _c('router-view', {
    staticClass: "view content",
    attrs: {
      "name": "content"
    }
  }), _vm._v(" "), _c('router-view', {
    staticClass: "view top",
    attrs: {
      "name": "top"
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('div', {
    staticClass: "user"
  }, [_c('span', [_vm._v(_vm._s(_vm.userInfo.cellphone))]), _vm._v(" "), _c('span', [_vm._v("退出")])])])
},staticRenderFns: []}

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "indexContainer"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("\n      云车邦\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [_c('ul', [_c('li', [_vm._v("首页")]), _vm._v(" "), _c('li', [_vm._v("企业流程")]), _vm._v(" "), _c('li', [_vm._v("关于我们")]), _vm._v(" "), _c('li', [_vm._v("货主登录")]), _vm._v(" "), _c('li', [_c('Icon', {
    staticStyle: {
      "margin-right": "5px"
    },
    attrs: {
      "type": "android-phone-portrait"
    }
  }), _vm._v("进入APP")], 1)])])])])
},staticRenderFns: []}

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("车源信息")]), _vm._v(" "), _c('div', {
    staticClass: "p20 border",
    staticStyle: {
      "padding-bottom": "0"
    }
  }, [_c('Form', {
    attrs: {
      "label-width": 60
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Form-item', {
    staticClass: "pr20",
    attrs: {
      "label": "出发地",
      "label-width": 50
    }
  }, [_c('Cascader', {
    attrs: {
      "data": _vm.provinceCityList,
      "change-on-select": ""
    },
    model: {
      value: (_vm.cheyuanFilter.cargo_area_code),
      callback: function($$v) {
        _vm.cheyuanFilter.cargo_area_code = $$v
      },
      expression: "cheyuanFilter.cargo_area_code"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Form-item', {
    staticClass: "pr20",
    attrs: {
      "label": "收货地",
      "label-width": 50
    }
  }, [_c('Cascader', {
    attrs: {
      "data": _vm.provinceCityList,
      "change-on-select": ""
    },
    model: {
      value: (_vm.cheyuanFilter.consignee_area_code),
      callback: function($$v) {
        _vm.cheyuanFilter.consignee_area_code = $$v
      },
      expression: "cheyuanFilter.consignee_area_code"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Form-item', {
    staticClass: "pr20",
    attrs: {
      "label": "车辆类型"
    }
  }, [_c('Select', {
    model: {
      value: (_vm.cheyuanFilter.vehicle_type),
      callback: function($$v) {
        _vm.cheyuanFilter.vehicle_type = $$v
      },
      expression: "cheyuanFilter.vehicle_type"
    }
  }, _vm._l((_vm.commonConfig.vehicle_types), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item
      }
    }, [_vm._v(_vm._s(item))])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "6"
    }
  }, [_c('div', {
    staticStyle: {
      "padding-left": "10px",
      "text-align": "right"
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("清除")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("查询")])], 1)])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt20"
  }, [_c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.cheyuanColumns,
      "data": _vm.cheyuanList
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_USER_INFO = exports.GET_USER_INFO = 'GET_USER_INFO'; //获取用户信息
var LEFT_NAE_SELECT = exports.LEFT_NAE_SELECT = 'LEFT_NAE_SELECT'; //左侧应用选择
var GET_UPLOAD_CONFIG = exports.GET_UPLOAD_CONFIG = 'GET_UPLOAD_CONFIG'; //上传附件配置信息
var GET_CONFIG = exports.GET_CONFIG = 'GET_CONFIG'; //获取公共配置数据

var GET_MAP_SEARCH_RESULTS = exports.GET_MAP_SEARCH_RESULTS = 'GET_MAP_SEARCH_RESULTS'; //地图搜索结果
var SET_MAP_LOCAL = exports.SET_MAP_LOCAL = 'SET_MAP_LOCAL'; //设置地图local对象

var GET_TRADING_QUOTATIONS = exports.GET_TRADING_QUOTATIONS = 'GET_TRADING_QUOTATIONS'; //获取交易详情

//发货
var CHANGE_CARGO_WEIGHT_TYPE = exports.CHANGE_CARGO_WEIGHT_TYPE = 'CHANGE_CARGO_WEIGHT_TYPE';
var PREVIEW_IMG = exports.PREVIEW_IMG = 'PREVIEW_IMG';
var REMOVE_FILE = exports.REMOVE_FILE = 'REMOVE_FILE';

var GET_CHEYUAN_LIST = exports.GET_CHEYUAN_LIST = 'GET_CHEYUAN_LIST'; //获取车源信息
var CLEAR_CHEYUAN_FILTER = exports.CLEAR_CHEYUAN_FILTER = 'CLEAR_CHEYUAN_FILTER'; //清除车源列表筛选条件数据
var SET_CHECK_FAHUO_STATUS = exports.SET_CHECK_FAHUO_STATUS = 'SET_CHECK_FAHUO_STATUS'; //设置 submitCheck 值

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(364);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domain = 'http://39.108.113.222/api/v1';
var ajaxDomain = 'http://127.0.0.1:8033';

exports.default = {
  ajaxPost: function ajaxPost(_ref, succ, err) {
    var url = _ref.url,
        params = _ref.params;

    console.log(params);
    _jquery2.default.ajax({
      url: ajaxDomain + '/query/queryDataPost',
      type: 'POST',
      data: {
        url: domain + url,
        params: JSON.stringify(params)
      },
      timeout: 10000,
      success: function success(res) {
        if (succ && typeof succ === 'function') {
          try {
            succ(JSON.parse(res));
          } catch (e) {
            succ(res);
          }
        }
      },
      error: function error(err) {
        if (err && typeof err === 'function') {
          err(err);
        }
        console.log(err);
      }
    });
  },
  ajaxGet: function ajaxGet(_ref2, succ, err) {
    var url = _ref2.url,
        params = _ref2.params;

    _jquery2.default.ajax({
      url: ajaxDomain + '/query/queryDataGet',
      type: 'POST',
      data: {
        url: domain + url
      },
      success: function success(res) {
        if (succ && typeof succ === 'function') {
          try {
            succ(JSON.parse(res));
          } catch (e) {
            succ(res);
          }
        }
      },
      error: function error(err) {
        if (err && typeof err === 'function') {
          err(err);
        }
        console.log(err);
      }
    });
  }
};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = __webpack_require__(53);

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getUserInfo: function getUserInfo(cb) {
    _query2.default.ajaxGet({
      url: '/users/info'
    }, cb);
  },
  getConfig: function getConfig(cb) {
    _query2.default.ajaxGet({
      url: '/config?version=1'
    }, cb);
  },
  getUploadConfig: function getUploadConfig(cb) {
    _query2.default.ajaxGet({
      url: '/file/token/get'
    }, cb);
  }
};

/***/ })

},[146]);
//# sourceMappingURL=app.js.map