System.register("chunks:///_virtual/resources",["./SpineAnimaController.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SpineAnimaController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,r,t,i,a,o,l,s,c,p,u;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inherits,t=e.createSuper,i=e.classCallCheck,a=e.initializerDefineProperty,o=e.assertThisInitialized,l=e.createClass},function(e){s=e.cclegacy,c=e._decorator,p=e.sp,u=e.Component}],execute:function(){var f,h,y,d,v;s._RF.push({},"999dffAr8BN3IsezJjRUpAx","SpineAnimaController",void 0);var m=c.ccclass,A=c.property;e("SpineAnimaController",(f=m("SpineController"),h=A({type:p.Skeleton}),f((v=n((d=function(e){r(s,e);var n=t(s);function s(){var e;i(this,s);for(var r=arguments.length,t=new Array(r),l=0;l<r;l++)t[l]=arguments[l];return e=n.call.apply(n,[this].concat(t)),a(o(e),"spine",v,o(e)),e}return l(s,[{key:"start",value:function(){this.spine.setAnimation(0,"01-start",!1),this.spine.addAnimation(0,"02-idle",!0)}}]),s}(u)).prototype,"spine",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=d))||y));s._RF.pop()}}}));

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