System.register("chunks:///_virtual/resources", ['./SpineAnimaController.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SpineAnimaController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "999dffAr8BN3IsezJjRUpAx", "SpineAnimaController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpineAnimaController = exports('SpineAnimaController', (_dec = ccclass('SpineController'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inherits(SpineAnimaController, _Component);
        var _super = _createSuper(SpineAnimaController);
        function SpineAnimaController() {
          var _this;
          _classCallCheck(this, SpineAnimaController);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        _createClass(SpineAnimaController, [{
          key: "start",
          value: function start() {
            this.spine.setAnimation(0, "01-start", false);
            this.spine.addAnimation(0, "02-idle", true);
          }
        }]);
        return SpineAnimaController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});