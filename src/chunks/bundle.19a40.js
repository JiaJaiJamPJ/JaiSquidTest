System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs", ['./rollupPluginModLoBabelHelpers.js'], function (exports) {
  var _createClass, _classCallCheck;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }],
    execute: function () {
      var CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          _classCallCheck(this, CjsLoader);
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        _createClass(CjsLoader, [{
          key: "define",
          value: function define(id, factory, resolveMap) {
            this._registry[id] = {
              factory: factory,
              resolveMap: resolveMap
            };
          }

          /**
           * Requires a CommonJS module.
           * @param id Module ID.
           * @returns The module's `module.exports`.
           */
        }, {
          key: "require",
          value: function require(id) {
            return this._require(id);
          }
        }, {
          key: "throwInvalidWrapper",
          value: function throwInvalidWrapper(requestTarget, from) {
            throw new Error("Module '".concat(requestTarget, "' imported from '").concat(from, "' is expected be an ESM-wrapped CommonJS module but it doesn't."));
          }
        }, {
          key: "_require",
          value: function _require(id, parent) {
            var cachedModule = this._moduleCache[id];
            if (cachedModule) {
              return cachedModule.exports;
            }
            var module = {
              id: id,
              exports: {}
            };
            this._moduleCache[id] = module;
            this._tryModuleLoad(module, id);
            return module.exports;
          }
        }, {
          key: "_resolve",
          value: function _resolve(specifier, parent) {
            return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
          }
        }, {
          key: "_resolveFromInfos",
          value: function _resolveFromInfos(specifier, parent) {
            var _cjsInfos$parent$reso, _cjsInfos$parent;
            if (specifier in cjsInfos) {
              return specifier;
            }
            if (!parent) {
              return;
            }
            return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) === null || _cjsInfos$parent === void 0 ? void 0 : _cjsInfos$parent.resolveCache[specifier]) !== null && _cjsInfos$parent$reso !== void 0 ? _cjsInfos$parent$reso : undefined;
          }
        }, {
          key: "_tryModuleLoad",
          value: function _tryModuleLoad(module, id) {
            var threw = true;
            try {
              this._load(module, id);
              threw = false;
            } finally {
              if (threw) {
                delete this._moduleCache[id];
              }
            }
          }
        }, {
          key: "_load",
          value: function _load(module, id) {
            var _this$_loadWrapper = this._loadWrapper(id),
              factory = _this$_loadWrapper.factory,
              resolveMap = _this$_loadWrapper.resolveMap;
            var vendorRequire = this._createRequire(module);
            var require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
            factory(module.exports, require, module);
          }
        }, {
          key: "_loadWrapper",
          value: function _loadWrapper(id) {
            if (id in this._registry) {
              return this._registry[id];
            } else {
              return this._loadHostProvidedModules(id);
            }
          }
        }, {
          key: "_loadHostProvidedModules",
          value: function _loadHostProvidedModules(id) {
            return {
              factory: function factory(_exports, _require, module) {
                if (typeof require === 'undefined') {
                  throw new Error("Current environment does not provide a require() for requiring '".concat(id, "'."));
                }
                try {
                  module.exports = require(id);
                } catch (err) {
                  throw new Error("Exception thrown when calling host defined require('".concat(id, "')."), {
                    cause: err
                  });
                }
              }
            };
          }
        }, {
          key: "_createRequire",
          value: function _createRequire(module) {
            var _this = this;
            return function (specifier) {
              return _this._require(specifier, module);
            };
          }
        }, {
          key: "_createRequireWithResolveMap",
          value: function _createRequireWithResolveMap(requireMap, originalRequire) {
            return function (specifier) {
              var resolved = requireMap[specifier];
              if (resolved) {
                return originalRequire(resolved);
              } else {
                throw new Error('Unresolved specifier ' + specifier);
              }
            };
          }
        }, {
          key: "_throwUnresolved",
          value: function _throwUnresolved(specifier, parentUrl) {
            throw new Error("Unable to resolve ".concat(specifier, " from ").concat(parent, "."));
          }
        }]);
        return CjsLoader;
      }();
      var loader = exports('default', new CjsLoader());
    }
  };
});

System.register("chunks:///_virtual/common.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = common;
        var commonRe = /\/|\./;

        /**
         * Provides common type definitions.
         * Can also be used to provide additional google types or your own custom types.
         * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
         * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
         * @returns {undefined}
         * @property {INamespace} google/protobuf/any.proto Any
         * @property {INamespace} google/protobuf/duration.proto Duration
         * @property {INamespace} google/protobuf/empty.proto Empty
         * @property {INamespace} google/protobuf/field_mask.proto FieldMask
         * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
         * @property {INamespace} google/protobuf/timestamp.proto Timestamp
         * @property {INamespace} google/protobuf/wrappers.proto Wrappers
         * @example
         * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
         * protobuf.common("descriptor", descriptorJson);
         *
         * // manually provides a custom definition (uses my.foo namespace)
         * protobuf.common("my/foo/bar.proto", myFooBarJson);
         */
        function common(name, json) {
          if (!commonRe.test(name)) {
            name = "google/protobuf/" + name + ".proto";
            json = {
              nested: {
                google: {
                  nested: {
                    protobuf: {
                      nested: json
                    }
                  }
                }
              }
            };
          }
          common[name] = json;
        }

        // Not provided because of limited use (feel free to discuss or to provide yourself):
        //
        // google/protobuf/descriptor.proto
        // google/protobuf/source_context.proto
        // google/protobuf/type.proto
        //
        // Stripped and pre-parsed versions of these non-bundled files are instead available as part of
        // the repository or package within the google/protobuf directory.

        common("any", {
          /**
           * Properties of a google.protobuf.Any message.
           * @interface IAny
           * @type {Object}
           * @property {string} [typeUrl]
           * @property {Uint8Array} [bytes]
           * @memberof common
           */
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        });
        var timeType;
        common("duration", {
          /**
           * Properties of a google.protobuf.Duration message.
           * @interface IDuration
           * @type {Object}
           * @property {number|Long} [seconds]
           * @property {number} [nanos]
           * @memberof common
           */
          Duration: timeType = {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        });
        common("timestamp", {
          /**
           * Properties of a google.protobuf.Timestamp message.
           * @interface ITimestamp
           * @type {Object}
           * @property {number|Long} [seconds]
           * @property {number} [nanos]
           * @memberof common
           */
          Timestamp: timeType
        });
        common("empty", {
          /**
           * Properties of a google.protobuf.Empty message.
           * @interface IEmpty
           * @memberof common
           */
          Empty: {
            fields: {}
          }
        });
        common("struct", {
          /**
           * Properties of a google.protobuf.Struct message.
           * @interface IStruct
           * @type {Object}
           * @property {Object.<string,IValue>} [fields]
           * @memberof common
           */
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.Value message.
           * @interface IValue
           * @type {Object}
           * @property {string} [kind]
           * @property {0} [nullValue]
           * @property {number} [numberValue]
           * @property {string} [stringValue]
           * @property {boolean} [boolValue]
           * @property {IStruct} [structValue]
           * @property {IListValue} [listValue]
           * @memberof common
           */
          Value: {
            oneofs: {
              kind: {
                oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          /**
           * Properties of a google.protobuf.ListValue message.
           * @interface IListValue
           * @type {Object}
           * @property {Array.<IValue>} [values]
           * @memberof common
           */
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          }
        });
        common("wrappers", {
          /**
           * Properties of a google.protobuf.DoubleValue message.
           * @interface IDoubleValue
           * @type {Object}
           * @property {number} [value]
           * @memberof common
           */
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.FloatValue message.
           * @interface IFloatValue
           * @type {Object}
           * @property {number} [value]
           * @memberof common
           */
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.Int64Value message.
           * @interface IInt64Value
           * @type {Object}
           * @property {number|Long} [value]
           * @memberof common
           */
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.UInt64Value message.
           * @interface IUInt64Value
           * @type {Object}
           * @property {number|Long} [value]
           * @memberof common
           */
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.Int32Value message.
           * @interface IInt32Value
           * @type {Object}
           * @property {number} [value]
           * @memberof common
           */
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.UInt32Value message.
           * @interface IUInt32Value
           * @type {Object}
           * @property {number} [value]
           * @memberof common
           */
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.BoolValue message.
           * @interface IBoolValue
           * @type {Object}
           * @property {boolean} [value]
           * @memberof common
           */
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.StringValue message.
           * @interface IStringValue
           * @type {Object}
           * @property {string} [value]
           * @memberof common
           */
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          /**
           * Properties of a google.protobuf.BytesValue message.
           * @interface IBytesValue
           * @type {Object}
           * @property {Uint8Array} [value]
           * @memberof common
           */
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        });
        common("field_mask", {
          /**
           * Properties of a google.protobuf.FieldMask message.
           * @interface IDoubleValue
           * @type {Object}
           * @property {number} [value]
           * @memberof common
           */
          FieldMask: {
            fields: {
              paths: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          }
        });

        /**
         * Gets the root definition of the specified common proto file.
         *
         * Bundled definitions are:
         * - google/protobuf/any.proto
         * - google/protobuf/duration.proto
         * - google/protobuf/empty.proto
         * - google/protobuf/field_mask.proto
         * - google/protobuf/struct.proto
         * - google/protobuf/timestamp.proto
         * - google/protobuf/wrappers.proto
         *
         * @param {string} file Proto file name
         * @returns {INamespace|null} Root definition or `null` if not defined
         */
        common.get = function get(file) {
          return common[file] || null;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/converter.js", ['./cjs-loader.mjs', './enum.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * Runtime message from/to plain object converters.
         * @namespace
         */
        var converter = exports;
        var Enum = require("./enum"),
          util = require("./util");

        /**
         * Generates a partial value fromObject conveter.
         * @param {Codegen} gen Codegen instance
         * @param {Field} field Reflected field
         * @param {number} fieldIndex Field index
         * @param {string} prop Property reference
         * @returns {Codegen} Codegen instance
         * @ignore
         */
        function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
          var defaultAlreadyEmitted = false;
          /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
          if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) {
              gen("switch(d%s){", prop);
              for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                // enum unknown values passthrough
                if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
                  gen("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", prop, prop, prop);
                  if (!field.repeated) gen // fallback to default value only for
                  // arrays, to avoid leaving holes.
                  ("break"); // for non-repeated fields, just ignore
                  defaultAlreadyEmitted = true;
                }
                gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
              }
              gen("}");
            } else gen("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
          } else {
            var isUnsigned = false;
            switch (field.type) {
              case "double":
              case "float":
                gen("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"
                break;
              case "uint32":
              case "fixed32":
                gen("m%s=d%s>>>0", prop, prop);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                gen("m%s=d%s|0", prop, prop);
                break;
              case "uint64":
                isUnsigned = true;
              // eslint-disable-next-line no-fallthrough
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)("else if(typeof d%s===\"string\")", prop)("m%s=parseInt(d%s,10)", prop, prop)("else if(typeof d%s===\"number\")", prop)("m%s=d%s", prop, prop)("else if(typeof d%s===\"object\")", prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                break;
              case "bytes":
                gen("if(typeof d%s===\"string\")", prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
                break;
              case "string":
                gen("m%s=String(d%s)", prop, prop);
                break;
              case "bool":
                gen("m%s=Boolean(d%s)", prop, prop);
                break;
              /* default: gen
                  ("m%s=d%s", prop, prop);
                  break; */
            }
          }

          return gen;
          /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
        }

        /**
         * Generates a plain object to runtime message converter specific to the specified message type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        converter.fromObject = function fromObject(mtype) {
          /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
          var fields = mtype.fieldsArray;
          var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!fields.length) return gen("return new this.ctor");
          gen("var m=new this.ctor");
          for (var i = 0; i < fields.length; ++i) {
            var field = fields[i].resolve(),
              prop = util.safeProp(field.name);

            // Map fields
            if (field.map) {
              gen("if(d%s){", prop)("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
              genValuePartial_fromObject(gen, field, /* not sorted */i, prop + "[ks[i]]")("}")("}");

              // Repeated fields
            } else if (field.repeated) {
              gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
              genValuePartial_fromObject(gen, field, /* not sorted */i, prop + "[i]")("}")("}");

              // Non-repeated fields
            } else {
              if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
              ("if(d%s!=null){", prop); // !== undefined && !== null
              genValuePartial_fromObject(gen, field, /* not sorted */i, prop);
              if (!(field.resolvedType instanceof Enum)) gen("}");
            }
          }
          return gen("return m");
          /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
        };

        /**
         * Generates a partial value toObject converter.
         * @param {Codegen} gen Codegen instance
         * @param {Field} field Reflected field
         * @param {number} fieldIndex Field index
         * @param {string} prop Property reference
         * @returns {Codegen} Codegen instance
         * @ignore
         */
        function genValuePartial_toObject(gen, field, fieldIndex, prop) {
          /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
          if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
          } else {
            var isUnsigned = false;
            switch (field.type) {
              case "double":
              case "float":
                gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                break;
              case "uint64":
                isUnsigned = true;
              // eslint-disable-next-line no-fallthrough
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                gen("if(typeof m%s===\"number\")", prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else") // Long-like
                ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
                break;
              case "bytes":
                gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                break;
              default:
                gen("d%s=m%s", prop, prop);
                break;
            }
          }
          return gen;
          /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
        }

        /**
         * Generates a runtime message to plain object converter specific to the specified message type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        converter.toObject = function toObject(mtype) {
          /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
          var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
          if (!fields.length) return util.codegen()("return {}");
          var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var repeatedFields = [],
            mapFields = [],
            normalFields = [],
            i = 0;
          for (; i < fields.length; ++i) if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
          if (repeatedFields.length) {
            gen("if(o.arrays||o.defaults){");
            for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
            gen("}");
          }
          if (mapFields.length) {
            gen("if(o.objects||o.defaults){");
            for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
            gen("}");
          }
          if (normalFields.length) {
            gen("if(o.defaults){");
            for (i = 0; i < normalFields.length; ++i) {
              var field = normalFields[i],
                prop = util.safeProp(field.name);
              if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);else if (field["long"]) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());else if (field.bytes) {
                var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
                gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
              } else gen("d%s=%j", prop, field.typeDefault); // also messages (=null)
            }

            gen("}");
          }
          var hasKs2 = false;
          for (i = 0; i < fields.length; ++i) {
            var field = fields[i],
              index = mtype._fieldsArray.indexOf(field),
              prop = util.safeProp(field.name);
            if (field.map) {
              if (!hasKs2) {
                hasKs2 = true;
                gen("var ks2");
              }
              gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
              genValuePartial_toObject(gen, field, /* sorted */index, prop + "[ks2[j]]")("}");
            } else if (field.repeated) {
              gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
              genValuePartial_toObject(gen, field, /* sorted */index, prop + "[j]")("}");
            } else {
              gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null
              genValuePartial_toObject(gen, field, /* sorted */index, prop);
              if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
            }
            gen("}");
          }
          return gen("return d");
          /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './enum': __cjsMetaURL$1,
          './util': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/decoder.js", ['./cjs-loader.mjs', './enum.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = decoder;
        var Enum = require("./enum"),
          types = require("./types"),
          util = require("./util");
        function missing(field) {
          return "missing required '" + field.name + "'";
        }

        /**
         * Generates a decoder specific to the specified message type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        function decoder(mtype) {
          /* eslint-disable no-unexpected-multiline */
          var gen = util.codegen(["r", "l", "e"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function (field) {
            return field.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){");
          var i = 0;
          for (; i < /* initializes */mtype.fieldsArray.length; ++i) {
            var field = mtype._fieldsArray[i].resolve(),
              type = field.resolvedType instanceof Enum ? "int32" : field.type,
              ref = "m" + util.safeProp(field.name);
            gen("case %i: {", field.id);

            // Map fields
            if (field.map) {
              gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
              if (types.defaults[field.keyType] !== undefined) gen("k=%j", types.defaults[field.keyType]);else gen("k=null");
              if (types.defaults[type] !== undefined) gen("value=%j", types.defaults[type]);else gen("value=null");
              gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
              if (types.basic[type] === undefined) gen("value=types[%i].decode(r,r.uint32())", i); // can't be groups
              else gen("value=r.%s()", type);
              gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (types["long"][field.keyType] !== undefined) gen("%s[typeof k===\"object\"?util.longToHash(k):k]=value", ref);else gen("%s[k]=value", ref);

              // Repeated fields
            } else if (field.repeated) {
              gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);

              // Packable (always check for forward and backward compatiblity)
              if (types.packed[type] !== undefined) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");

              // Non-packed
              if (types.basic[type] === undefined) gen(field.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);else gen("%s.push(r.%s())", ref, type);

              // Non-repeated
            } else if (types.basic[type] === undefined) gen(field.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4))" : "%s=types[%i].decode(r,r.uint32())", ref, i);else gen("%s=r.%s()", ref, type);
            gen("break")("}");
            // Unknown fields
          }

          gen("default:")("r.skipType(t&7)")("break")("}")("}");

          // Field presence
          for (i = 0; i < mtype._fieldsArray.length; ++i) {
            var rfield = mtype._fieldsArray[i];
            if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
          }
          return gen("return m");
          /* eslint-enable no-unexpected-multiline */
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './enum': __cjsMetaURL$1,
          './types': __cjsMetaURL$2,
          './util': __cjsMetaURL$3
        };
      });
    }
  };
});

System.register("chunks:///_virtual/encoder.js", ['./cjs-loader.mjs', './enum.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = encoder;
        var Enum = require("./enum"),
          types = require("./types"),
          util = require("./util");

        /**
         * Generates a partial message type encoder.
         * @param {Codegen} gen Codegen instance
         * @param {Field} field Reflected field
         * @param {number} fieldIndex Field index
         * @param {string} ref Variable reference
         * @returns {Codegen} Codegen instance
         * @ignore
         */
        function genTypePartial(gen, field, fieldIndex, ref) {
          return field.delimited ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
        }

        /**
         * Generates an encoder specific to the specified message type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        function encoder(mtype) {
          /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
          var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
          var i, ref;

          // "when a message is serialized its known fields should be written sequentially by field number"
          var fields = /* initializes */mtype.fieldsArray.slice().sort(util.compareFieldsById);
          for (var i = 0; i < fields.length; ++i) {
            var field = fields[i].resolve(),
              index = mtype._fieldsArray.indexOf(field),
              type = field.resolvedType instanceof Enum ? "int32" : field.type,
              wireType = types.basic[type];
            ref = "m" + util.safeProp(field.name);

            // Map fields
            if (field.map) {
              gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name) // !== undefined && !== null
              ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
              if (wireType === undefined) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
              else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
              gen("}")("}");

              // Repeated fields
            } else if (field.repeated) {
              gen("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null

              // Packed repeated
              if (field.packed && types.packed[type] !== undefined) {
                gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");

                // Non-packed
              } else {
                gen("for(var i=0;i<%s.length;++i)", ref);
                if (wireType === undefined) genTypePartial(gen, field, index, ref + "[i]");else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
              }
              gen("}");

              // Non-repeated
            } else {
              if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name); // !== undefined && !== null

              if (wireType === undefined) genTypePartial(gen, field, index, ref);else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
            }
          }
          return gen("return w");
          /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './enum': __cjsMetaURL$1,
          './types': __cjsMetaURL$2,
          './util': __cjsMetaURL$3
        };
      });
    }
  };
});

System.register("chunks:///_virtual/enum.js", ['./cjs-loader.mjs', './object.js', './namespace.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }],
    execute: function () {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
      }
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Enum;

        // extends ReflectionObject
        var ReflectionObject = require("./object");
        ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
        var Namespace = require("./namespace"),
          util = require("./util");

        /**
         * Constructs a new enum instance.
         * @classdesc Reflected enum.
         * @extends ReflectionObject
         * @constructor
         * @param {string} name Unique name within its namespace
         * @param {Object.<string,number>} [values] Enum values as an object, by name
         * @param {Object.<string,*>} [options] Declared options
         * @param {string} [comment] The comment for this enum
         * @param {Object.<string,string>} [comments] The value comments for this enum
         * @param {Object.<string,Object<string,*>>|undefined} [valuesOptions] The value options for this enum
         */
        function Enum(name, values, options, comment, comments, valuesOptions) {
          ReflectionObject.call(this, name, options);
          if (values && _typeof(values) !== "object") throw TypeError("values must be an object");

          /**
           * Enum values by id.
           * @type {Object.<number,string>}
           */
          this.valuesById = {};

          /**
           * Enum values by name.
           * @type {Object.<string,number>}
           */
          this.values = Object.create(this.valuesById); // toJSON, marker

          /**
           * Enum comment text.
           * @type {string|null}
           */
          this.comment = comment;

          /**
           * Value comment texts, if any.
           * @type {Object.<string,string>}
           */
          this.comments = comments || {};

          /**
           * Values options, if any
           * @type {Object<string, Object<string, *>>|undefined}
           */
          this.valuesOptions = valuesOptions;

          /**
           * Resolved values features, if any
           * @type {Object<string, Object<string, *>>|undefined}
           */
          this._valuesFeatures = {};

          /**
           * Reserved ranges, if any.
           * @type {Array.<number[]|string>}
           */
          this.reserved = undefined; // toJSON

          // Note that values inherit valuesById on their prototype which makes them a TypeScript-
          // compatible enum. This is used by pbts to write actual enum definitions that work for
          // static and reflection code alike instead of emitting generic object definitions.

          if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) if (typeof values[keys[i]] === "number")
            // use forward entries only
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
        }

        /**
         * @override
         */
        Enum.prototype._resolveFeatures = function _resolveFeatures(edition) {
          var _this = this;
          edition = this._edition || edition;
          ReflectionObject.prototype._resolveFeatures.call(this, edition);
          Object.keys(this.values).forEach(function (key) {
            var parentFeaturesCopy = Object.assign({}, _this._features);
            _this._valuesFeatures[key] = Object.assign(parentFeaturesCopy, _this.valuesOptions && _this.valuesOptions[key] && _this.valuesOptions[key].features);
          });
          return this;
        };

        /**
         * Enum descriptor.
         * @interface IEnum
         * @property {Object.<string,number>} values Enum values
         * @property {Object.<string,*>} [options] Enum options
         */

        /**
         * Constructs an enum from an enum descriptor.
         * @param {string} name Enum name
         * @param {IEnum} json Enum descriptor
         * @returns {Enum} Created enum
         * @throws {TypeError} If arguments are invalid
         */
        Enum.fromJSON = function fromJSON(name, json) {
          var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
          enm.reserved = json.reserved;
          if (json.edition) enm._edition = json.edition;
          enm._defaultEdition = "proto3"; // For backwards-compatibility.
          return enm;
        };

        /**
         * Converts this enum to an enum descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IEnum} Enum descriptor
         */
        Enum.prototype.toJSON = function toJSON(toJSONOptions) {
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["edition", this._editionToJSON(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined]);
        };

        /**
         * Adds a value to this enum.
         * @param {string} name Value name
         * @param {number} id Value id
         * @param {string} [comment] Comment, if any
         * @param {Object.<string, *>|undefined} [options] Options, if any
         * @returns {Enum} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If there is already a value with this name or id
         */
        Enum.prototype.add = function add(name, id, comment, options) {
          // utilized by the parser but not by .fromJSON

          if (!util.isString(name)) throw TypeError("name must be a string");
          if (!util.isInteger(id)) throw TypeError("id must be an integer");
          if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
          if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
          if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);
          if (this.valuesById[id] !== undefined) {
            if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
            this.values[name] = id;
          } else this.valuesById[this.values[name] = id] = name;
          if (options) {
            if (this.valuesOptions === undefined) this.valuesOptions = {};
            this.valuesOptions[name] = options || null;
          }
          this.comments[name] = comment || null;
          return this;
        };

        /**
         * Removes a value from this enum
         * @param {string} name Value name
         * @returns {Enum} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If `name` is not a name of this enum
         */
        Enum.prototype.remove = function remove(name) {
          if (!util.isString(name)) throw TypeError("name must be a string");
          var val = this.values[name];
          if (val == null) throw Error("name '" + name + "' does not exist in " + this);
          delete this.valuesById[val];
          delete this.values[name];
          delete this.comments[name];
          if (this.valuesOptions) delete this.valuesOptions[name];
          return this;
        };

        /**
         * Tests if the specified id is reserved.
         * @param {number} id Id to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Enum.prototype.isReservedId = function isReservedId(id) {
          return Namespace.isReservedId(this.reserved, id);
        };

        /**
         * Tests if the specified name is reserved.
         * @param {string} name Name to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Enum.prototype.isReservedName = function isReservedName(name) {
          return Namespace.isReservedName(this.reserved, name);
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './object': __cjsMetaURL$1,
          './namespace': __cjsMetaURL$2,
          './util': __cjsMetaURL$3
        };
      });
    }
  };
});

System.register("chunks:///_virtual/env", [], function (exports) {
  return {
    execute: function () {
      var EDITOR = exports('EDITOR', false);
      var PREVIEW = exports('PREVIEW', false);
    }
  };
});

System.register("chunks:///_virtual/field.js", ['./cjs-loader.mjs', './object.js', './enum.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }],
    execute: function () {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
      }
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Field;

        // extends ReflectionObject
        var ReflectionObject = require("./object");
        ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
        var Enum = require("./enum"),
          types = require("./types"),
          util = require("./util");
        var Type; // cyclic

        var ruleRe = /^required|optional|repeated$/;

        /**
         * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
         * @name Field
         * @classdesc Reflected message field.
         * @extends FieldBase
         * @constructor
         * @param {string} name Unique name within its namespace
         * @param {number} id Unique id within its namespace
         * @param {string} type Value type
         * @param {string|Object.<string,*>} [rule="optional"] Field rule
         * @param {string|Object.<string,*>} [extend] Extended type if different from parent
         * @param {Object.<string,*>} [options] Declared options
         */

        /**
         * Constructs a field from a field descriptor.
         * @param {string} name Field name
         * @param {IField} json Field descriptor
         * @returns {Field} Created field
         * @throws {TypeError} If arguments are invalid
         */
        Field.fromJSON = function fromJSON(name, json) {
          var field = new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
          if (json.edition) field._edition = json.edition;
          field._defaultEdition = "proto3"; // For backwards-compatibility.
          return field;
        };

        /**
         * Not an actual constructor. Use {@link Field} instead.
         * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
         * @exports FieldBase
         * @extends ReflectionObject
         * @constructor
         * @param {string} name Unique name within its namespace
         * @param {number} id Unique id within its namespace
         * @param {string} type Value type
         * @param {string|Object.<string,*>} [rule="optional"] Field rule
         * @param {string|Object.<string,*>} [extend] Extended type if different from parent
         * @param {Object.<string,*>} [options] Declared options
         * @param {string} [comment] Comment associated with this field
         */
        function Field(name, id, type, rule, extend, options, comment) {
          if (util.isObject(rule)) {
            comment = extend;
            options = rule;
            rule = extend = undefined;
          } else if (util.isObject(extend)) {
            comment = options;
            options = extend;
            extend = undefined;
          }
          ReflectionObject.call(this, name, options);
          if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
          if (!util.isString(type)) throw TypeError("type must be a string");
          if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
          if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");

          /**
           * Field rule, if any.
           * @type {string|undefined}
           */
          if (rule === "proto3_optional") {
            rule = "optional";
          }
          this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

          /**
           * Field type.
           * @type {string}
           */
          this.type = type; // toJSON

          /**
           * Unique field id.
           * @type {number}
           */
          this.id = id; // toJSON, marker

          /**
           * Extended type if different from parent.
           * @type {string|undefined}
           */
          this.extend = extend || undefined; // toJSON

          /**
           * Whether this field is repeated.
           * @type {boolean}
           */
          this.repeated = rule === "repeated";

          /**
           * Whether this field is a map or not.
           * @type {boolean}
           */
          this.map = false;

          /**
           * Message this field belongs to.
           * @type {Type|null}
           */
          this.message = null;

          /**
           * OneOf this field belongs to, if any,
           * @type {OneOf|null}
           */
          this.partOf = null;

          /**
           * The field type's default value.
           * @type {*}
           */
          this.typeDefault = null;

          /**
           * The field's default value on prototypes.
           * @type {*}
           */
          this.defaultValue = null;

          /**
           * Whether this field's value should be treated as a long.
           * @type {boolean}
           */
          this["long"] = util.Long ? types["long"][type] !== undefined : /* istanbul ignore next */false;

          /**
           * Whether this field's value is a buffer.
           * @type {boolean}
           */
          this.bytes = type === "bytes";

          /**
           * Resolved type if not a basic type.
           * @type {Type|Enum|null}
           */
          this.resolvedType = null;

          /**
           * Sister-field within the extended type if a declaring extension field.
           * @type {Field|null}
           */
          this.extensionField = null;

          /**
           * Sister-field within the declaring namespace if an extended field.
           * @type {Field|null}
           */
          this.declaringField = null;

          /**
           * Comment for this field.
           * @type {string|null}
           */
          this.comment = comment;
        }

        /**
         * Determines whether this field is required.
         * @name Field#required
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(Field.prototype, "required", {
          get: function get() {
            return this._features.field_presence === "LEGACY_REQUIRED";
          }
        });

        /**
         * Determines whether this field is not required.
         * @name Field#optional
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(Field.prototype, "optional", {
          get: function get() {
            return !this.required;
          }
        });

        /**
         * Determines whether this field uses tag-delimited encoding.  In proto2 this
         * corresponded to group syntax.
         * @name Field#delimited
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(Field.prototype, "delimited", {
          get: function get() {
            return this.resolvedType instanceof Type && this._features.message_encoding === "DELIMITED";
          }
        });

        /**
         * Determines whether this field is packed. Only relevant when repeated.
         * @name Field#packed
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(Field.prototype, "packed", {
          get: function get() {
            return this._features.repeated_field_encoding === "PACKED";
          }
        });

        /**
         * Determines whether this field tracks presence.
         * @name Field#hasPresence
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(Field.prototype, "hasPresence", {
          get: function get() {
            if (this.repeated || this.map) {
              return false;
            }
            return this.partOf ||
            // oneofs
            this.declaringField || this.extensionField ||
            // extensions
            this._features.field_presence !== "IMPLICIT";
          }
        });

        /**
         * @override
         */
        Field.prototype.setOption = function setOption(name, value, ifNotSet) {
          return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
        };

        /**
         * Field descriptor.
         * @interface IField
         * @property {string} [rule="optional"] Field rule
         * @property {string} type Field type
         * @property {number} id Field id
         * @property {Object.<string,*>} [options] Field options
         */

        /**
         * Extension field descriptor.
         * @interface IExtensionField
         * @extends IField
         * @property {string} extend Extended type
         */

        /**
         * Converts this field to a field descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IField} Field descriptor
         */
        Field.prototype.toJSON = function toJSON(toJSONOptions) {
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["edition", this._editionToJSON(), "rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
        };

        /**
         * Resolves this field's type references.
         * @returns {Field} `this`
         * @throws {Error} If any reference cannot be resolved
         */
        Field.prototype.resolve = function resolve() {
          if (this.resolved) return this;
          if ((this.typeDefault = types.defaults[this.type]) === undefined) {
            // if not a basic type, resolve it
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof Type) this.typeDefault = null;else
              // instanceof Enum
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
          } else if (this.options && this.options.proto3_optional) {
            // proto3 scalar value marked optional; should default to null
            this.typeDefault = null;
          }

          // use explicitly set default value if present
          if (this.options && this.options["default"] != null) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
          }

          // remove unnecessary options
          if (this.options) {
            if (this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum)) delete this.options.packed;
            if (!Object.keys(this.options).length) this.options = undefined;
          }

          // convert to internal data type if necesssary
          if (this["long"]) {
            this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

            /* istanbul ignore else */
            if (Object.freeze) Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)
          } else if (this.bytes && typeof this.typeDefault === "string") {
            var buf;
            if (util.base64.test(this.typeDefault)) util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);else util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
            this.typeDefault = buf;
          }

          // take special care of maps and repeated fields
          if (this.map) this.defaultValue = util.emptyObject;else if (this.repeated) this.defaultValue = util.emptyArray;else this.defaultValue = this.typeDefault;

          // ensure proper value on prototype
          if (this.parent instanceof Type) this.parent.ctor.prototype[this.name] = this.defaultValue;
          return ReflectionObject.prototype.resolve.call(this);
        };

        /**
         * Infers field features from legacy syntax that may have been specified differently.
         * in older editions.
         * @param {string|undefined} edition The edition this proto is on, or undefined if pre-editions
         * @returns {object} The feature values to override
         */
        Field.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures(edition) {
          if (edition !== "proto2" && edition !== "proto3") {
            return {};
          }
          var features = {};
          this.resolve();
          if (this.rule === "required") {
            features.field_presence = "LEGACY_REQUIRED";
          }
          if (this.resolvedType instanceof Type && this.resolvedType.group) {
            features.message_encoding = "DELIMITED";
          }
          if (this.getOption("packed") === true) {
            features.repeated_field_encoding = "PACKED";
          } else if (this.getOption("packed") === false) {
            features.repeated_field_encoding = "EXPANDED";
          }
          return features;
        };

        /**
         * @override
         */
        Field.prototype._resolveFeatures = function _resolveFeatures(edition) {
          return ReflectionObject.prototype._resolveFeatures.call(this, this._edition || edition);
        };

        /**
         * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
         * @typedef FieldDecorator
         * @type {function}
         * @param {Object} prototype Target prototype
         * @param {string} fieldName Field name
         * @returns {undefined}
         */

        /**
         * Field decorator (TypeScript).
         * @name Field.d
         * @function
         * @param {number} fieldId Field id
         * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
         * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
         * @param {T} [defaultValue] Default value
         * @returns {FieldDecorator} Decorator function
         * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
         */
        Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
          // submessage: decorate the submessage and use its name as the type
          if (typeof fieldType === "function") fieldType = util.decorateType(fieldType).name;

          // enum reference: create a reflected copy of the enum and keep reuseing it
          else if (fieldType && _typeof(fieldType) === "object") fieldType = util.decorateEnum(fieldType).name;
          return function fieldDecorator(prototype, fieldName) {
            util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
              "default": defaultValue
            }));
          };
        };

        /**
         * Field decorator (TypeScript).
         * @name Field.d
         * @function
         * @param {number} fieldId Field id
         * @param {Constructor<T>|string} fieldType Field type
         * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
         * @returns {FieldDecorator} Decorator function
         * @template T extends Message<T>
         * @variation 2
         */
        // like Field.d but without a default value

        // Sets up cyclic dependencies (called in index-light)
        Field._configure = function configure(Type_) {
          Type = Type_;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './object': __cjsMetaURL$1,
          './enum': __cjsMetaURL$2,
          './types': __cjsMetaURL$3,
          './util': __cjsMetaURL$4
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index-light.js", ['./cjs-loader.mjs', './index-minimal.js', './encoder.js', './decoder.js', './verifier.js', './converter.js', './object.js', './namespace.js', './root.js', './enum.js', './type.js', './field.js', './oneof.js', './mapfield.js', './service.js', './method.js', './message.js', './wrappers.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8, __cjsMetaURL$9, __cjsMetaURL$a, __cjsMetaURL$b, __cjsMetaURL$c, __cjsMetaURL$d, __cjsMetaURL$e, __cjsMetaURL$f, __cjsMetaURL$g, __cjsMetaURL$h, __cjsMetaURL$i, __cjsMetaURL$j;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$9 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$a = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$b = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$c = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$d = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$e = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$f = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$g = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$h = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$i = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$j = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var protobuf = module.exports = require("./index-minimal");
        protobuf.build = "light";

        /**
         * A node-style callback as used by {@link load} and {@link Root#load}.
         * @typedef LoadCallback
         * @type {function}
         * @param {Error|null} error Error, if any, otherwise `null`
         * @param {Root} [root] Root, if there hasn't been an error
         * @returns {undefined}
         */

        /**
         * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
         * @param {string|string[]} filename One or multiple files to load
         * @param {Root} root Root namespace, defaults to create a new one if omitted.
         * @param {LoadCallback} callback Callback function
         * @returns {undefined}
         * @see {@link Root#load}
         */
        function load(filename, root, callback) {
          if (typeof root === "function") {
            callback = root;
            root = new protobuf.Root();
          } else if (!root) root = new protobuf.Root();
          return root.load(filename, callback);
        }

        /**
         * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
         * @name load
         * @function
         * @param {string|string[]} filename One or multiple files to load
         * @param {LoadCallback} callback Callback function
         * @returns {undefined}
         * @see {@link Root#load}
         * @variation 2
         */
        // function load(filename:string, callback:LoadCallback):undefined

        /**
         * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
         * @name load
         * @function
         * @param {string|string[]} filename One or multiple files to load
         * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
         * @returns {Promise<Root>} Promise
         * @see {@link Root#load}
         * @variation 3
         */
        // function load(filename:string, [root:Root]):Promise<Root>

        protobuf.load = load;

        /**
         * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
         * @param {string|string[]} filename One or multiple files to load
         * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
         * @returns {Root} Root namespace
         * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
         * @see {@link Root#loadSync}
         */
        function loadSync(filename, root) {
          if (!root) root = new protobuf.Root();
          return root.loadSync(filename);
        }
        protobuf.loadSync = loadSync;

        // Serialization
        protobuf.encoder = require("./encoder");
        protobuf.decoder = require("./decoder");
        protobuf.verifier = require("./verifier");
        protobuf.converter = require("./converter");

        // Reflection
        protobuf.ReflectionObject = require("./object");
        protobuf.Namespace = require("./namespace");
        protobuf.Root = require("./root");
        protobuf.Enum = require("./enum");
        protobuf.Type = require("./type");
        protobuf.Field = require("./field");
        protobuf.OneOf = require("./oneof");
        protobuf.MapField = require("./mapfield");
        protobuf.Service = require("./service");
        protobuf.Method = require("./method");

        // Runtime
        protobuf.Message = require("./message");
        protobuf.wrappers = require("./wrappers");

        // Utility
        protobuf.types = require("./types");
        protobuf.util = require("./util");

        // Set up possibly cyclic reflection dependencies
        protobuf.ReflectionObject._configure(protobuf.Root);
        protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
        protobuf.Root._configure(protobuf.Type);
        protobuf.Field._configure(protobuf.Type);

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './index-minimal': __cjsMetaURL$1,
          './encoder': __cjsMetaURL$2,
          './decoder': __cjsMetaURL$3,
          './verifier': __cjsMetaURL$4,
          './converter': __cjsMetaURL$5,
          './object': __cjsMetaURL$6,
          './namespace': __cjsMetaURL$7,
          './root': __cjsMetaURL$8,
          './enum': __cjsMetaURL$9,
          './type': __cjsMetaURL$a,
          './field': __cjsMetaURL$b,
          './oneof': __cjsMetaURL$c,
          './mapfield': __cjsMetaURL$d,
          './service': __cjsMetaURL$e,
          './method': __cjsMetaURL$f,
          './message': __cjsMetaURL$g,
          './wrappers': __cjsMetaURL$h,
          './types': __cjsMetaURL$i,
          './util': __cjsMetaURL$j
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index-minimal.js", ['./cjs-loader.mjs', './writer.js', './writer_buffer.js', './reader.js', './reader_buffer.js', './minimal.js', './rpc.js', './roots.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var protobuf = exports;

        /**
         * Build type, one of `"full"`, `"light"` or `"minimal"`.
         * @name build
         * @type {string}
         * @const
         */
        protobuf.build = "minimal";

        // Serialization
        protobuf.Writer = require("./writer");
        protobuf.BufferWriter = require("./writer_buffer");
        protobuf.Reader = require("./reader");
        protobuf.BufferReader = require("./reader_buffer");

        // Utility
        protobuf.util = require("./util/minimal");
        protobuf.rpc = require("./rpc");
        protobuf.roots = require("./roots");
        protobuf.configure = configure;

        /* istanbul ignore next */
        /**
         * Reconfigures the library according to the environment.
         * @returns {undefined}
         */
        function configure() {
          protobuf.util._configure();
          protobuf.Writer._configure(protobuf.BufferWriter);
          protobuf.Reader._configure(protobuf.BufferReader);
        }

        // Set up buffer utility according to the environment
        configure();

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './writer': __cjsMetaURL$1,
          './writer_buffer': __cjsMetaURL$2,
          './reader': __cjsMetaURL$3,
          './reader_buffer': __cjsMetaURL$4,
          './util/minimal': __cjsMetaURL$5,
          './rpc': __cjsMetaURL$6,
          './roots': __cjsMetaURL$7
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index.js", ['./cjs-loader.mjs', './index2.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = require("./src/index");

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './src/index': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index10.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = inquire;

        /**
         * Requires a module only if available.
         * @memberof util
         * @param {string} moduleName Module to require
         * @returns {?Object} Required module if available and not empty, otherwise `null`
         */
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval
            if (mod && (mod.length || Object.keys(mod).length)) return mod;
          } catch (e) {} // eslint-disable-line no-empty
          return null;
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index11.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * A minimal UTF8 implementation for number arrays.
         * @memberof util
         * @namespace
         */
        var utf8 = exports;

        /**
         * Calculates the UTF8 byte length of a string.
         * @param {string} string String
         * @returns {number} Byte length
         */
        utf8.length = function utf8_length(string) {
          var len = 0,
            c = 0;
          for (var i = 0; i < string.length; ++i) {
            c = string.charCodeAt(i);
            if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
              ++i;
              len += 4;
            } else len += 3;
          }
          return len;
        };

        /**
         * Reads UTF8 bytes as a string.
         * @param {Uint8Array} buffer Source buffer
         * @param {number} start Source start
         * @param {number} end Source end
         * @returns {string} String read
         */
        utf8.read = function utf8_read(buffer, start, end) {
          var len = end - start;
          if (len < 1) return "";
          var parts = null,
            chunk = [],
            i = 0,
            // char offset
            t; // temporary
          while (start < end) {
            t = buffer[start++];
            if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
              t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
              chunk[i++] = 0xD800 + (t >> 10);
              chunk[i++] = 0xDC00 + (t & 1023);
            } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
            if (i > 8191) {
              (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
              i = 0;
            }
          }
          if (parts) {
            if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
            return parts.join("");
          }
          return String.fromCharCode.apply(String, chunk.slice(0, i));
        };

        /**
         * Writes a string as UTF8 bytes.
         * @param {string} string Source string
         * @param {Uint8Array} buffer Destination buffer
         * @param {number} offset Destination offset
         * @returns {number} Bytes written
         */
        utf8.write = function utf8_write(string, buffer, offset) {
          var start = offset,
            c1,
            // character 1
            c2; // character 2
          for (var i = 0; i < string.length; ++i) {
            c1 = string.charCodeAt(i);
            if (c1 < 128) {
              buffer[offset++] = c1;
            } else if (c1 < 2048) {
              buffer[offset++] = c1 >> 6 | 192;
              buffer[offset++] = c1 & 63 | 128;
            } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
              c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
              ++i;
              buffer[offset++] = c1 >> 18 | 240;
              buffer[offset++] = c1 >> 12 & 63 | 128;
              buffer[offset++] = c1 >> 6 & 63 | 128;
              buffer[offset++] = c1 & 63 | 128;
            } else {
              buffer[offset++] = c1 >> 12 | 224;
              buffer[offset++] = c1 >> 6 & 63 | 128;
              buffer[offset++] = c1 & 63 | 128;
            }
          }
          return offset - start;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index12.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = pool;

        /**
         * An allocator as used by {@link util.pool}.
         * @typedef PoolAllocator
         * @type {function}
         * @param {number} size Buffer size
         * @returns {Uint8Array} Buffer
         */

        /**
         * A slicer as used by {@link util.pool}.
         * @typedef PoolSlicer
         * @type {function}
         * @param {number} start Start offset
         * @param {number} end End offset
         * @returns {Uint8Array} Buffer slice
         * @this {Uint8Array}
         */

        /**
         * A general purpose buffer pool.
         * @memberof util
         * @function
         * @param {PoolAllocator} alloc Allocator
         * @param {PoolSlicer} slice Slicer
         * @param {number} [size=8192] Slab size
         * @returns {PoolAllocator} Pooled allocator
         */
        function pool(alloc, slice, size) {
          var SIZE = size || 8192;
          var MAX = SIZE >>> 1;
          var slab = null;
          var offset = SIZE;
          return function pool_alloc(size) {
            if (size < 1 || size > MAX) return alloc(size);
            if (offset + size > SIZE) {
              slab = alloc(SIZE);
              offset = 0;
            }
            var buf = slice.call(slab, offset, offset += size);
            if (offset & 7)
              // align to 32 bit
              offset = (offset | 7) + 1;
            return buf;
          };
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index2.js", ['./cjs-loader.mjs', './index-light.js', './tokenize.js', './parse.js', './common.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var protobuf = module.exports = require("./index-light");
        protobuf.build = "full";

        // Parser
        protobuf.tokenize = require("./tokenize");
        protobuf.parse = require("./parse");
        protobuf.common = require("./common");

        // Configure parser
        protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './index-light': __cjsMetaURL$1,
          './tokenize': __cjsMetaURL$2,
          './parse': __cjsMetaURL$3,
          './common': __cjsMetaURL$4
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index3.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = codegen;

        /**
         * Begins generating a function.
         * @memberof util
         * @param {string[]} functionParams Function parameter names
         * @param {string} [functionName] Function name if not anonymous
         * @returns {Codegen} Appender that appends code to the function's body
         */
        function codegen(functionParams, functionName) {
          /* istanbul ignore if */
          if (typeof functionParams === "string") {
            functionName = functionParams;
            functionParams = undefined;
          }
          var body = [];

          /**
           * Appends code to the function's body or finishes generation.
           * @typedef Codegen
           * @type {function}
           * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
           * @param {...*} [formatParams] Format parameters
           * @returns {Codegen|Function} Itself or the generated function if finished
           * @throws {Error} If format parameter counts do not match
           */

          function Codegen(formatStringOrScope) {
            // note that explicit array handling below makes this ~50% faster

            // finish the function
            if (typeof formatStringOrScope !== "string") {
              var source = toString();
              if (codegen.verbose) console.log("codegen: " + source); // eslint-disable-line no-console
              source = "return " + source;
              if (formatStringOrScope) {
                var scopeKeys = Object.keys(formatStringOrScope),
                  scopeParams = new Array(scopeKeys.length + 1),
                  scopeValues = new Array(scopeKeys.length),
                  scopeOffset = 0;
                while (scopeOffset < scopeKeys.length) {
                  scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                  scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                }
                scopeParams[scopeOffset] = source;
                return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
              }

              return Function(source)(); // eslint-disable-line no-new-func
            }

            // otherwise append to body
            var formatParams = new Array(arguments.length - 1),
              formatOffset = 0;
            while (formatOffset < formatParams.length) formatParams[formatOffset] = arguments[++formatOffset];
            formatOffset = 0;
            formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
              var value = formatParams[formatOffset++];
              switch ($1) {
                case "d":
                case "f":
                  return String(Number(value));
                case "i":
                  return String(Math.floor(value));
                case "j":
                  return JSON.stringify(value);
                case "s":
                  return String(value);
              }
              return "%";
            });
            if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
            body.push(formatStringOrScope);
            return Codegen;
          }
          function toString(functionNameOverride) {
            return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
          }
          Codegen.toString = toString;
          return Codegen;
        }

        /**
         * Begins generating a function.
         * @memberof util
         * @function codegen
         * @param {string} [functionName] Function name if not anonymous
         * @returns {Codegen} Appender that appends code to the function's body
         * @variation 2
         */

        /**
         * When set to `true`, codegen will log generated code to console. Useful for debugging.
         * @name util.codegen.verbose
         * @type {boolean}
         */
        codegen.verbose = false;

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index4.js", ['./cjs-loader.mjs', './index6.js', './index10.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = fetch;
        var asPromise = require("@protobufjs/aspromise"),
          inquire = require("@protobufjs/inquire");
        var fs = inquire("fs");

        /**
         * Node-style callback as used by {@link util.fetch}.
         * @typedef FetchCallback
         * @type {function}
         * @param {?Error} error Error, if any, otherwise `null`
         * @param {string} [contents] File contents, if there hasn't been an error
         * @returns {undefined}
         */

        /**
         * Options as used by {@link util.fetch}.
         * @typedef FetchOptions
         * @type {Object}
         * @property {boolean} [binary=false] Whether expecting a binary response
         * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
         */

        /**
         * Fetches the contents of a file.
         * @memberof util
         * @param {string} filename File path or url
         * @param {FetchOptions} options Fetch options
         * @param {FetchCallback} callback Callback function
         * @returns {undefined}
         */
        function fetch(filename, options, callback) {
          if (typeof options === "function") {
            callback = options;
            options = {};
          } else if (!options) options = {};
          if (!callback) return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this

          // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
          if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
          });

          // use the XHR version otherwise.
          return fetch.xhr(filename, options, callback);
        }

        /**
         * Fetches the contents of a file.
         * @name util.fetch
         * @function
         * @param {string} path File path or url
         * @param {FetchCallback} callback Callback function
         * @returns {undefined}
         * @variation 2
         */

        /**
         * Fetches the contents of a file.
         * @name util.fetch
         * @function
         * @param {string} path File path or url
         * @param {FetchOptions} [options] Fetch options
         * @returns {Promise<string|Uint8Array>} Promise
         * @variation 3
         */

        /**/
        fetch.xhr = function fetch_xhr(filename, options, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {
            if (xhr.readyState !== 4) return undefined;

            // local cors security errors return status 0 / empty string, too. afaik this cannot be
            // reliably distinguished from an actually empty file for security reasons. feel free
            // to send a pull request if you are aware of a solution.
            if (xhr.status !== 0 && xhr.status !== 200) return callback(Error("status " + xhr.status));

            // if binary data is expected, make sure that some sort of array is returned, even if
            // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
            if (options.binary) {
              var buffer = xhr.response;
              if (!buffer) {
                buffer = [];
                for (var i = 0; i < xhr.responseText.length; ++i) buffer.push(xhr.responseText.charCodeAt(i) & 255);
              }
              return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
            }
            return callback(null, xhr.responseText);
          };
          if (options.binary) {
            // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
            if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
            xhr.responseType = "arraybuffer";
          }
          xhr.open("GET", filename);
          xhr.send();
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': __cjsMetaURL$1,
          '@protobufjs/inquire': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/index5.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * A minimal path module to resolve Unix, Windows and URL paths alike.
         * @memberof util
         * @namespace
         */
        var path = exports;
        var isAbsolute =
        /**
         * Tests if the specified path is absolute.
         * @param {string} path Path to test
         * @returns {boolean} `true` if path is absolute
         */
        path.isAbsolute = function isAbsolute(path) {
          return /^(?:\/|\w+:)/.test(path);
        };
        var normalize =
        /**
         * Normalizes the specified path.
         * @param {string} path Path to normalize
         * @returns {string} Normalized path
         */
        path.normalize = function normalize(path) {
          path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
          var parts = path.split("/"),
            absolute = isAbsolute(path),
            prefix = "";
          if (absolute) prefix = parts.shift() + "/";
          for (var i = 0; i < parts.length;) {
            if (parts[i] === "..") {
              if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);else if (absolute) parts.splice(i, 1);else ++i;
            } else if (parts[i] === ".") parts.splice(i, 1);else ++i;
          }
          return prefix + parts.join("/");
        };

        /**
         * Resolves the specified include path against the specified origin path.
         * @param {string} originPath Path to the origin file
         * @param {string} includePath Include path relative to origin path
         * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
         * @returns {string} Path to the include file
         */
        path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
          if (!alreadyNormalized) includePath = normalize(includePath);
          if (isAbsolute(includePath)) return includePath;
          if (!alreadyNormalized) originPath = normalize(originPath);
          return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index6.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = asPromise;

        /**
         * Callback as used by {@link util.asPromise}.
         * @typedef asPromiseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {...*} params Additional arguments
         * @returns {undefined}
         */

        /**
         * Returns a promise from a node-style callback function.
         * @memberof util
         * @param {asPromiseCallback} fn Function to call
         * @param {*} ctx Function context
         * @param {...*} params Function arguments
         * @returns {Promise<*>} Promisified function
         */
        function asPromise(fn, ctx /*, varargs */) {
          var params = new Array(arguments.length - 1),
            offset = 0,
            index = 2,
            pending = true;
          while (index < arguments.length) params[offset++] = arguments[index++];
          return new Promise(function executor(resolve, reject) {
            params[offset] = function callback(err /*, varargs */) {
              if (pending) {
                pending = false;
                if (err) reject(err);else {
                  var params = new Array(arguments.length - 1),
                    offset = 0;
                  while (offset < params.length) params[offset++] = arguments[offset];
                  resolve.apply(null, params);
                }
              }
            };
            try {
              fn.apply(ctx || null, params);
            } catch (err) {
              if (pending) {
                pending = false;
                reject(err);
              }
            }
          });
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index7.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * A minimal base64 implementation for number arrays.
         * @memberof util
         * @namespace
         */
        var base64 = exports;

        /**
         * Calculates the byte length of a base64 encoded string.
         * @param {string} string Base64 encoded string
         * @returns {number} Byte length
         */
        base64.length = function length(string) {
          var p = string.length;
          if (!p) return 0;
          var n = 0;
          while (--p % 4 > 1 && string.charAt(p) === "=") ++n;
          return Math.ceil(string.length * 3) / 4 - n;
        };

        // Base64 encoding table
        var b64 = new Array(64);

        // Base64 decoding table
        var s64 = new Array(123);

        // 65..90, 97..122, 48..57, 43, 47
        for (var i = 0; i < 64;) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

        /**
         * Encodes a buffer to a base64 encoded string.
         * @param {Uint8Array} buffer Source buffer
         * @param {number} start Source start
         * @param {number} end Source end
         * @returns {string} Base64 encoded string
         */
        base64.encode = function encode(buffer, start, end) {
          var parts = null,
            chunk = [];
          var i = 0,
            // output index
            j = 0,
            // goto index
            t; // temporary
          while (start < end) {
            var b = buffer[start++];
            switch (j) {
              case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
              case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
              case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
            }
            if (i > 8191) {
              (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
              i = 0;
            }
          }
          if (j) {
            chunk[i++] = b64[t];
            chunk[i++] = 61;
            if (j === 1) chunk[i++] = 61;
          }
          if (parts) {
            if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
            return parts.join("");
          }
          return String.fromCharCode.apply(String, chunk.slice(0, i));
        };
        var invalidEncoding = "invalid encoding";

        /**
         * Decodes a base64 encoded string to a buffer.
         * @param {string} string Source string
         * @param {Uint8Array} buffer Destination buffer
         * @param {number} offset Destination offset
         * @returns {number} Number of bytes written
         * @throws {Error} If encoding is invalid
         */
        base64.decode = function decode(string, buffer, offset) {
          var start = offset;
          var j = 0,
            // goto index
            t; // temporary
          for (var i = 0; i < string.length;) {
            var c = string.charCodeAt(i++);
            if (c === 61 && j > 1) break;
            if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
            switch (j) {
              case 0:
                t = c;
                j = 1;
                break;
              case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
              case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
              case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
            }
          }
          if (j === 1) throw Error(invalidEncoding);
          return offset - start;
        };

        /**
         * Tests if the specified string appears to be base64 encoded.
         * @param {string} string String to test
         * @returns {boolean} `true` if probably base64 encoded, otherwise false
         */
        base64.test = function test(string) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index8.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = EventEmitter;

        /**
         * Constructs a new event emitter instance.
         * @classdesc A minimal event emitter.
         * @memberof util
         * @constructor
         */
        function EventEmitter() {
          /**
           * Registered listeners.
           * @type {Object.<string,*>}
           * @private
           */
          this._listeners = {};
        }

        /**
         * Registers an event listener.
         * @param {string} evt Event name
         * @param {function} fn Listener
         * @param {*} [ctx] Listener context
         * @returns {util.EventEmitter} `this`
         */
        EventEmitter.prototype.on = function on(evt, fn, ctx) {
          (this._listeners[evt] || (this._listeners[evt] = [])).push({
            fn: fn,
            ctx: ctx || this
          });
          return this;
        };

        /**
         * Removes an event listener or any matching listeners if arguments are omitted.
         * @param {string} [evt] Event name. Removes all listeners if omitted.
         * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
         * @returns {util.EventEmitter} `this`
         */
        EventEmitter.prototype.off = function off(evt, fn) {
          if (evt === undefined) this._listeners = {};else {
            if (fn === undefined) this._listeners[evt] = [];else {
              var listeners = this._listeners[evt];
              for (var i = 0; i < listeners.length;) if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
            }
          }
          return this;
        };

        /**
         * Emits an event by calling its listeners with the specified arguments.
         * @param {string} evt Event name
         * @param {...*} args Arguments
         * @returns {util.EventEmitter} `this`
         */
        EventEmitter.prototype.emit = function emit(evt) {
          var listeners = this._listeners[evt];
          if (listeners) {
            var args = [],
              i = 1;
            for (; i < arguments.length;) args.push(arguments[i++]);
            for (i = 0; i < listeners.length;) listeners[i].fn.apply(listeners[i++].ctx, args);
          }
          return this;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index9.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = factory(factory);

        /**
         * Reads / writes floats / doubles from / to buffers.
         * @name util.float
         * @namespace
         */

        /**
         * Writes a 32 bit float to a buffer using little endian byte order.
         * @name util.float.writeFloatLE
         * @function
         * @param {number} val Value to write
         * @param {Uint8Array} buf Target buffer
         * @param {number} pos Target buffer offset
         * @returns {undefined}
         */

        /**
         * Writes a 32 bit float to a buffer using big endian byte order.
         * @name util.float.writeFloatBE
         * @function
         * @param {number} val Value to write
         * @param {Uint8Array} buf Target buffer
         * @param {number} pos Target buffer offset
         * @returns {undefined}
         */

        /**
         * Reads a 32 bit float from a buffer using little endian byte order.
         * @name util.float.readFloatLE
         * @function
         * @param {Uint8Array} buf Source buffer
         * @param {number} pos Source buffer offset
         * @returns {number} Value read
         */

        /**
         * Reads a 32 bit float from a buffer using big endian byte order.
         * @name util.float.readFloatBE
         * @function
         * @param {Uint8Array} buf Source buffer
         * @param {number} pos Source buffer offset
         * @returns {number} Value read
         */

        /**
         * Writes a 64 bit double to a buffer using little endian byte order.
         * @name util.float.writeDoubleLE
         * @function
         * @param {number} val Value to write
         * @param {Uint8Array} buf Target buffer
         * @param {number} pos Target buffer offset
         * @returns {undefined}
         */

        /**
         * Writes a 64 bit double to a buffer using big endian byte order.
         * @name util.float.writeDoubleBE
         * @function
         * @param {number} val Value to write
         * @param {Uint8Array} buf Target buffer
         * @param {number} pos Target buffer offset
         * @returns {undefined}
         */

        /**
         * Reads a 64 bit double from a buffer using little endian byte order.
         * @name util.float.readDoubleLE
         * @function
         * @param {Uint8Array} buf Source buffer
         * @param {number} pos Source buffer offset
         * @returns {number} Value read
         */

        /**
         * Reads a 64 bit double from a buffer using big endian byte order.
         * @name util.float.readDoubleBE
         * @function
         * @param {Uint8Array} buf Source buffer
         * @param {number} pos Source buffer offset
         * @returns {number} Value read
         */

        // Factory function for the purpose of node-based testing in modified global environments
        function factory(exports) {
          // float: typed array
          if (typeof Float32Array !== "undefined") (function () {
            var f32 = new Float32Array([-0]),
              f8b = new Uint8Array(f32.buffer),
              le = f8b[3] === 128;
            function writeFloat_f32_cpy(val, buf, pos) {
              f32[0] = val;
              buf[pos] = f8b[0];
              buf[pos + 1] = f8b[1];
              buf[pos + 2] = f8b[2];
              buf[pos + 3] = f8b[3];
            }
            function writeFloat_f32_rev(val, buf, pos) {
              f32[0] = val;
              buf[pos] = f8b[3];
              buf[pos + 1] = f8b[2];
              buf[pos + 2] = f8b[1];
              buf[pos + 3] = f8b[0];
            }

            /* istanbul ignore next */
            exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
            /* istanbul ignore next */
            exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
            function readFloat_f32_cpy(buf, pos) {
              f8b[0] = buf[pos];
              f8b[1] = buf[pos + 1];
              f8b[2] = buf[pos + 2];
              f8b[3] = buf[pos + 3];
              return f32[0];
            }
            function readFloat_f32_rev(buf, pos) {
              f8b[3] = buf[pos];
              f8b[2] = buf[pos + 1];
              f8b[1] = buf[pos + 2];
              f8b[0] = buf[pos + 3];
              return f32[0];
            }

            /* istanbul ignore next */
            exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
            /* istanbul ignore next */
            exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

            // float: ieee754
          })();else (function () {
            function writeFloat_ieee754(writeUint, val, buf, pos) {
              var sign = val < 0 ? 1 : 0;
              if (sign) val = -val;
              if (val === 0) writeUint(1 / val > 0 ? /* positive */0 : /* negative 0 */2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38)
                // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38)
                // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                  mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
              }
            }
            exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
            exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
            function readFloat_ieee754(readUint, buf, pos) {
              var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
              return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
              ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
            }
            exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
            exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
          })();

          // double: typed array
          if (typeof Float64Array !== "undefined") (function () {
            var f64 = new Float64Array([-0]),
              f8b = new Uint8Array(f64.buffer),
              le = f8b[7] === 128;
            function writeDouble_f64_cpy(val, buf, pos) {
              f64[0] = val;
              buf[pos] = f8b[0];
              buf[pos + 1] = f8b[1];
              buf[pos + 2] = f8b[2];
              buf[pos + 3] = f8b[3];
              buf[pos + 4] = f8b[4];
              buf[pos + 5] = f8b[5];
              buf[pos + 6] = f8b[6];
              buf[pos + 7] = f8b[7];
            }
            function writeDouble_f64_rev(val, buf, pos) {
              f64[0] = val;
              buf[pos] = f8b[7];
              buf[pos + 1] = f8b[6];
              buf[pos + 2] = f8b[5];
              buf[pos + 3] = f8b[4];
              buf[pos + 4] = f8b[3];
              buf[pos + 5] = f8b[2];
              buf[pos + 6] = f8b[1];
              buf[pos + 7] = f8b[0];
            }

            /* istanbul ignore next */
            exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
            /* istanbul ignore next */
            exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
            function readDouble_f64_cpy(buf, pos) {
              f8b[0] = buf[pos];
              f8b[1] = buf[pos + 1];
              f8b[2] = buf[pos + 2];
              f8b[3] = buf[pos + 3];
              f8b[4] = buf[pos + 4];
              f8b[5] = buf[pos + 5];
              f8b[6] = buf[pos + 6];
              f8b[7] = buf[pos + 7];
              return f64[0];
            }
            function readDouble_f64_rev(buf, pos) {
              f8b[7] = buf[pos];
              f8b[6] = buf[pos + 1];
              f8b[5] = buf[pos + 2];
              f8b[4] = buf[pos + 3];
              f8b[3] = buf[pos + 4];
              f8b[2] = buf[pos + 5];
              f8b[1] = buf[pos + 6];
              f8b[0] = buf[pos + 7];
              return f64[0];
            }

            /* istanbul ignore next */
            exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
            /* istanbul ignore next */
            exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

            // double: ieee754
          })();else (function () {
            function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
              var sign = val < 0 ? 1 : 0;
              if (sign) val = -val;
              if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */0 : /* negative 0 */2147483648, buf, pos + off1);
              } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
              } else if (val > 1.7976931348623157e+308) {
                // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
              } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) {
                  // denormal
                  mantissa = val / 5e-324;
                  writeUint(mantissa >>> 0, buf, pos + off0);
                  writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                  var exponent = Math.floor(Math.log(val) / Math.LN2);
                  if (exponent === 1024) exponent = 1023;
                  mantissa = val * Math.pow(2, -exponent);
                  writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                  writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
              }
            }
            exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
            exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
            function readDouble_ieee754(readUint, off0, off1, buf, pos) {
              var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
              var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
              return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
              ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
            }
            exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
            exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
          })();
          return exports;
        }

        // uint helpers

        function writeUintLE(val, buf, pos) {
          buf[pos] = val & 255;
          buf[pos + 1] = val >>> 8 & 255;
          buf[pos + 2] = val >>> 16 & 255;
          buf[pos + 3] = val >>> 24;
        }
        function writeUintBE(val, buf, pos) {
          buf[pos] = val >>> 24;
          buf[pos + 1] = val >>> 16 & 255;
          buf[pos + 2] = val >>> 8 & 255;
          buf[pos + 3] = val & 255;
        }
        function readUintLE(buf, pos) {
          return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
        }
        function readUintBE(buf, pos) {
          return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.writeFloatLE;
        module.exports.writeFloatBE;
        module.exports.readFloatLE;
        module.exports.readFloatBE;
        module.exports.writeDoubleLE;
        module.exports.writeDoubleBE;
        module.exports.readDoubleLE;
        module.exports.readDoubleBE;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/longbits.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = LongBits;
        var util = require("../util/minimal");

        /**
         * Constructs new long bits.
         * @classdesc Helper class for working with the low and high bits of a 64 bit value.
         * @memberof util
         * @constructor
         * @param {number} lo Low 32 bits, unsigned
         * @param {number} hi High 32 bits, unsigned
         */
        function LongBits(lo, hi) {
          // note that the casts below are theoretically unnecessary as of today, but older statically
          // generated converter code might still call the ctor with signed 32bits. kept for compat.

          /**
           * Low bits.
           * @type {number}
           */
          this.lo = lo >>> 0;

          /**
           * High bits.
           * @type {number}
           */
          this.hi = hi >>> 0;
        }

        /**
         * Zero bits.
         * @memberof util.LongBits
         * @type {util.LongBits}
         */
        var zero = LongBits.zero = new LongBits(0, 0);
        zero.toNumber = function () {
          return 0;
        };
        zero.zzEncode = zero.zzDecode = function () {
          return this;
        };
        zero.length = function () {
          return 1;
        };

        /**
         * Zero hash.
         * @memberof util.LongBits
         * @type {string}
         */
        var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

        /**
         * Constructs new long bits from the specified number.
         * @param {number} value Value
         * @returns {util.LongBits} Instance
         */
        LongBits.fromNumber = function fromNumber(value) {
          if (value === 0) return zero;
          var sign = value < 0;
          if (sign) value = -value;
          var lo = value >>> 0,
            hi = (value - lo) / 4294967296 >>> 0;
          if (sign) {
            hi = ~hi >>> 0;
            lo = ~lo >>> 0;
            if (++lo > 4294967295) {
              lo = 0;
              if (++hi > 4294967295) hi = 0;
            }
          }
          return new LongBits(lo, hi);
        };

        /**
         * Constructs new long bits from a number, long or string.
         * @param {Long|number|string} value Value
         * @returns {util.LongBits} Instance
         */
        LongBits.from = function from(value) {
          if (typeof value === "number") return LongBits.fromNumber(value);
          if (util.isString(value)) {
            /* istanbul ignore else */
            if (util.Long) value = util.Long.fromString(value);else return LongBits.fromNumber(parseInt(value, 10));
          }
          return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
        };

        /**
         * Converts this long bits to a possibly unsafe JavaScript number.
         * @param {boolean} [unsigned=false] Whether unsigned or not
         * @returns {number} Possibly unsafe number
         */
        LongBits.prototype.toNumber = function toNumber(unsigned) {
          if (!unsigned && this.hi >>> 31) {
            var lo = ~this.lo + 1 >>> 0,
              hi = ~this.hi >>> 0;
            if (!lo) hi = hi + 1 >>> 0;
            return -(lo + hi * 4294967296);
          }
          return this.lo + this.hi * 4294967296;
        };

        /**
         * Converts this long bits to a long.
         * @param {boolean} [unsigned=false] Whether unsigned or not
         * @returns {Long} Long
         */
        LongBits.prototype.toLong = function toLong(unsigned) {
          return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
          /* istanbul ignore next */ : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: Boolean(unsigned)
          };
        };
        var charCodeAt = String.prototype.charCodeAt;

        /**
         * Constructs new long bits from the specified 8 characters long hash.
         * @param {string} hash Hash
         * @returns {util.LongBits} Bits
         */
        LongBits.fromHash = function fromHash(hash) {
          if (hash === zeroHash) return zero;
          return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
        };

        /**
         * Converts this long bits to a 8 characters long hash.
         * @returns {string} Hash
         */
        LongBits.prototype.toHash = function toHash() {
          return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        };

        /**
         * Zig-zag encodes this long bits.
         * @returns {util.LongBits} `this`
         */
        LongBits.prototype.zzEncode = function zzEncode() {
          var mask = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
          this.lo = (this.lo << 1 ^ mask) >>> 0;
          return this;
        };

        /**
         * Zig-zag decodes this long bits.
         * @returns {util.LongBits} `this`
         */
        LongBits.prototype.zzDecode = function zzDecode() {
          var mask = -(this.lo & 1);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
          this.hi = (this.hi >>> 1 ^ mask) >>> 0;
          return this;
        };

        /**
         * Calculates the length of this longbits when encoded as a varint.
         * @returns {number} Length
         */
        LongBits.prototype.length = function length() {
          var part0 = this.lo,
            part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
            part2 = this.hi >>> 24;
          return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          '../util/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/mapfield.js", ['./cjs-loader.mjs', './field.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }],
    execute: function () {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
      }
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = MapField;

        // extends Field
        var Field = require("./field");
        ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
        var types = require("./types"),
          util = require("./util");

        /**
         * Constructs a new map field instance.
         * @classdesc Reflected map field.
         * @extends FieldBase
         * @constructor
         * @param {string} name Unique name within its namespace
         * @param {number} id Unique id within its namespace
         * @param {string} keyType Key type
         * @param {string} type Value type
         * @param {Object.<string,*>} [options] Declared options
         * @param {string} [comment] Comment associated with this field
         */
        function MapField(name, id, keyType, type, options, comment) {
          Field.call(this, name, id, type, undefined, undefined, options, comment);

          /* istanbul ignore if */
          if (!util.isString(keyType)) throw TypeError("keyType must be a string");

          /**
           * Key type.
           * @type {string}
           */
          this.keyType = keyType; // toJSON, marker

          /**
           * Resolved key type if not a basic type.
           * @type {ReflectionObject|null}
           */
          this.resolvedKeyType = null;

          // Overrides Field#map
          this.map = true;
        }

        /**
         * Map field descriptor.
         * @interface IMapField
         * @extends {IField}
         * @property {string} keyType Key type
         */

        /**
         * Extension map field descriptor.
         * @interface IExtensionMapField
         * @extends IMapField
         * @property {string} extend Extended type
         */

        /**
         * Constructs a map field from a map field descriptor.
         * @param {string} name Field name
         * @param {IMapField} json Map field descriptor
         * @returns {MapField} Created map field
         * @throws {TypeError} If arguments are invalid
         */
        MapField.fromJSON = function fromJSON(name, json) {
          return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
        };

        /**
         * Converts this map field to a map field descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IMapField} Map field descriptor
         */
        MapField.prototype.toJSON = function toJSON(toJSONOptions) {
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
        };

        /**
         * @override
         */
        MapField.prototype.resolve = function resolve() {
          if (this.resolved) return this;

          // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
          if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
          return Field.prototype.resolve.call(this);
        };

        /**
         * Map field decorator (TypeScript).
         * @name MapField.d
         * @function
         * @param {number} fieldId Field id
         * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
         * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
         * @returns {FieldDecorator} Decorator function
         * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
         */
        MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
          // submessage value: decorate the submessage and use its name as the type
          if (typeof fieldValueType === "function") fieldValueType = util.decorateType(fieldValueType).name;

          // enum reference value: create a reflected copy of the enum and keep reuseing it
          else if (fieldValueType && _typeof(fieldValueType) === "object") fieldValueType = util.decorateEnum(fieldValueType).name;
          return function mapFieldDecorator(prototype, fieldName) {
            util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
          };
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './field': __cjsMetaURL$1,
          './types': __cjsMetaURL$2,
          './util': __cjsMetaURL$3
        };
      });
    }
  };
});

System.register("chunks:///_virtual/message.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Message;
        var util = require("./util/minimal");

        /**
         * Constructs a new message instance.
         * @classdesc Abstract runtime message.
         * @constructor
         * @param {Properties<T>} [properties] Properties to set
         * @template T extends object = object
         */
        function Message(properties) {
          // not used internally
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reference to the reflected type.
         * @name Message.$type
         * @type {Type}
         * @readonly
         */

        /**
         * Reference to the reflected type.
         * @name Message#$type
         * @type {Type}
         * @readonly
         */

        /*eslint-disable valid-jsdoc*/

        /**
         * Creates a new message of this type using the specified properties.
         * @param {Object.<string,*>} [properties] Properties to set
         * @returns {Message<T>} Message instance
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.create = function create(properties) {
          return this.$type.create(properties);
        };

        /**
         * Encodes a message of this type.
         * @param {T|Object.<string,*>} message Message to encode
         * @param {Writer} [writer] Writer to use
         * @returns {Writer} Writer
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.encode = function encode(message, writer) {
          return this.$type.encode(message, writer);
        };

        /**
         * Encodes a message of this type preceeded by its length as a varint.
         * @param {T|Object.<string,*>} message Message to encode
         * @param {Writer} [writer] Writer to use
         * @returns {Writer} Writer
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
          return this.$type.encodeDelimited(message, writer);
        };

        /**
         * Decodes a message of this type.
         * @name Message.decode
         * @function
         * @param {Reader|Uint8Array} reader Reader or buffer to decode
         * @returns {T} Decoded message
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.decode = function decode(reader) {
          return this.$type.decode(reader);
        };

        /**
         * Decodes a message of this type preceeded by its length as a varint.
         * @name Message.decodeDelimited
         * @function
         * @param {Reader|Uint8Array} reader Reader or buffer to decode
         * @returns {T} Decoded message
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
          return this.$type.decodeDelimited(reader);
        };

        /**
         * Verifies a message of this type.
         * @name Message.verify
         * @function
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
          return this.$type.verify(message);
        };

        /**
         * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {T} Message instance
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.fromObject = function fromObject(object) {
          return this.$type.fromObject(object);
        };

        /**
         * Creates a plain object from a message of this type. Also converts values to other types if specified.
         * @param {T} message Message instance
         * @param {IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         * @template T extends Message<T>
         * @this Constructor<T>
         */
        Message.toObject = function toObject(message, options) {
          return this.$type.toObject(message, options);
        };

        /**
         * Converts this message to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
          return this.$type.toObject(this, util.toJSONOptions);
        };

        /*eslint-enable valid-jsdoc*/

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './util/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/method.js", ['./cjs-loader.mjs', './object.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Method;

        // extends ReflectionObject
        var ReflectionObject = require("./object");
        ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
        var util = require("./util");

        /**
         * Constructs a new service method instance.
         * @classdesc Reflected service method.
         * @extends ReflectionObject
         * @constructor
         * @param {string} name Method name
         * @param {string|undefined} type Method type, usually `"rpc"`
         * @param {string} requestType Request message type
         * @param {string} responseType Response message type
         * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
         * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
         * @param {Object.<string,*>} [options] Declared options
         * @param {string} [comment] The comment for this method
         * @param {Object.<string,*>} [parsedOptions] Declared options, properly parsed into an object
         */
        function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
          /* istanbul ignore next */
          if (util.isObject(requestStream)) {
            options = requestStream;
            requestStream = responseStream = undefined;
          } else if (util.isObject(responseStream)) {
            options = responseStream;
            responseStream = undefined;
          }

          /* istanbul ignore if */
          if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");

          /* istanbul ignore if */
          if (!util.isString(requestType)) throw TypeError("requestType must be a string");

          /* istanbul ignore if */
          if (!util.isString(responseType)) throw TypeError("responseType must be a string");
          ReflectionObject.call(this, name, options);

          /**
           * Method type.
           * @type {string}
           */
          this.type = type || "rpc"; // toJSON

          /**
           * Request type.
           * @type {string}
           */
          this.requestType = requestType; // toJSON, marker

          /**
           * Whether requests are streamed or not.
           * @type {boolean|undefined}
           */
          this.requestStream = requestStream ? true : undefined; // toJSON

          /**
           * Response type.
           * @type {string}
           */
          this.responseType = responseType; // toJSON

          /**
           * Whether responses are streamed or not.
           * @type {boolean|undefined}
           */
          this.responseStream = responseStream ? true : undefined; // toJSON

          /**
           * Resolved request type.
           * @type {Type|null}
           */
          this.resolvedRequestType = null;

          /**
           * Resolved response type.
           * @type {Type|null}
           */
          this.resolvedResponseType = null;

          /**
           * Comment for this method
           * @type {string|null}
           */
          this.comment = comment;

          /**
           * Options properly parsed into an object
           */
          this.parsedOptions = parsedOptions;
        }

        /**
         * Method descriptor.
         * @interface IMethod
         * @property {string} [type="rpc"] Method type
         * @property {string} requestType Request type
         * @property {string} responseType Response type
         * @property {boolean} [requestStream=false] Whether requests are streamed
         * @property {boolean} [responseStream=false] Whether responses are streamed
         * @property {Object.<string,*>} [options] Method options
         * @property {string} comment Method comments
         * @property {Object.<string,*>} [parsedOptions] Method options properly parsed into an object
         */

        /**
         * Constructs a method from a method descriptor.
         * @param {string} name Method name
         * @param {IMethod} json Method descriptor
         * @returns {Method} Created method
         * @throws {TypeError} If arguments are invalid
         */
        Method.fromJSON = function fromJSON(name, json) {
          return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
        };

        /**
         * Converts this method to a method descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IMethod} Method descriptor
         */
        Method.prototype.toJSON = function toJSON(toJSONOptions) {
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["type", this.type !== "rpc" && /* istanbul ignore next */this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };

        /**
         * @override
         */
        Method.prototype.resolve = function resolve() {
          /* istanbul ignore if */
          if (this.resolved) return this;
          this.resolvedRequestType = this.parent.lookupType(this.requestType);
          this.resolvedResponseType = this.parent.lookupType(this.responseType);
          return ReflectionObject.prototype.resolve.call(this);
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './object': __cjsMetaURL$1,
          './util': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/minimal.js", ['./cjs-loader.mjs', './index6.js', './index7.js', './index8.js', './index9.js', './index10.js', './index11.js', './index12.js', './longbits.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }],
    execute: function () {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
      }
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var util = exports;

        // used to return a Promise where callback is omitted
        util.asPromise = require("@protobufjs/aspromise");

        // converts to / from base64 encoded strings
        util.base64 = require("@protobufjs/base64");

        // base class of rpc.Service
        util.EventEmitter = require("@protobufjs/eventemitter");

        // float handling accross browsers
        util["float"] = require("@protobufjs/float");

        // requires modules optionally and hides the call from bundlers
        util.inquire = require("@protobufjs/inquire");

        // converts to / from utf8 encoded strings
        util.utf8 = require("@protobufjs/utf8");

        // provides a node-like buffer pool in the browser
        util.pool = require("@protobufjs/pool");

        // utility to work with the low and high bits of a 64 bit value
        util.LongBits = require("./longbits");

        /**
         * Whether running within node or not.
         * @memberof util
         * @type {boolean}
         */
        util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);

        /**
         * Global object reference.
         * @memberof util
         * @type {Object}
         */
        util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this

        /**
         * An immuable empty array.
         * @memberof util
         * @type {Array.<*>}
         * @const
         */
        util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */[]; // used on prototypes

        /**
         * An immutable empty object.
         * @type {Object}
         * @const
         */
        util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */{}; // used on prototypes

        /**
         * Tests if the specified value is an integer.
         * @function
         * @param {*} value Value to test
         * @returns {boolean} `true` if the value is an integer
         */
        util.isInteger = Number.isInteger || /* istanbul ignore next */function isInteger(value) {
          return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        };

        /**
         * Tests if the specified value is a string.
         * @param {*} value Value to test
         * @returns {boolean} `true` if the value is a string
         */
        util.isString = function isString(value) {
          return typeof value === "string" || value instanceof String;
        };

        /**
         * Tests if the specified value is a non-null object.
         * @param {*} value Value to test
         * @returns {boolean} `true` if the value is a non-null object
         */
        util.isObject = function isObject(value) {
          return value && _typeof(value) === "object";
        };

        /**
         * Checks if a property on a message is considered to be present.
         * This is an alias of {@link util.isSet}.
         * @function
         * @param {Object} obj Plain object or message instance
         * @param {string} prop Property name
         * @returns {boolean} `true` if considered to be present, otherwise `false`
         */
        util.isset =
        /**
         * Checks if a property on a message is considered to be present.
         * @param {Object} obj Plain object or message instance
         * @param {string} prop Property name
         * @returns {boolean} `true` if considered to be present, otherwise `false`
         */
        util.isSet = function isSet(obj, prop) {
          var value = obj[prop];
          if (value != null && obj.hasOwnProperty(prop))
            // eslint-disable-line eqeqeq, no-prototype-builtins
            return _typeof(value) !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
          return false;
        };

        /**
         * Any compatible Buffer instance.
         * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
         * @interface Buffer
         * @extends Uint8Array
         */

        /**
         * Node's Buffer class if available.
         * @type {Constructor<Buffer>}
         */
        util.Buffer = function () {
          try {
            var Buffer = util.inquire("buffer").Buffer;
            // refuse to use non-node buffers if not explicitly assigned (perf reasons):
            return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */null;
          } catch (e) {
            /* istanbul ignore next */
            return null;
          }
        }();

        // Internal alias of or polyfull for Buffer.from.
        util._Buffer_from = null;

        // Internal alias of or polyfill for Buffer.allocUnsafe.
        util._Buffer_allocUnsafe = null;

        /**
         * Creates a new buffer of whatever type supported by the environment.
         * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
         * @returns {Uint8Array|Buffer} Buffer
         */
        util.newBuffer = function newBuffer(sizeOrArray) {
          /* istanbul ignore next */
          return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
        };

        /**
         * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
         * @type {Constructor<Uint8Array>}
         */
        util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

        /**
         * Any compatible Long instance.
         * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
         * @interface Long
         * @property {number} low Low bits
         * @property {number} high High bits
         * @property {boolean} unsigned Whether unsigned or not
         */

        /**
         * Long.js's Long class if available.
         * @type {Constructor<Long>}
         */
        util.Long = /* istanbul ignore next */util.global.dcodeIO && /* istanbul ignore next */util.global.dcodeIO.Long || /* istanbul ignore next */util.global.Long || util.inquire("long");

        /**
         * Regular expression used to verify 2 bit (`bool`) map keys.
         * @type {RegExp}
         * @const
         */
        util.key2Re = /^true|false|0|1$/;

        /**
         * Regular expression used to verify 32 bit (`int32` etc.) map keys.
         * @type {RegExp}
         * @const
         */
        util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

        /**
         * Regular expression used to verify 64 bit (`int64` etc.) map keys.
         * @type {RegExp}
         * @const
         */
        util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

        /**
         * Converts a number or long to an 8 characters long hash string.
         * @param {Long|number} value Value to convert
         * @returns {string} Hash
         */
        util.longToHash = function longToHash(value) {
          return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
        };

        /**
         * Converts an 8 characters long hash string to a long or number.
         * @param {string} hash Hash
         * @param {boolean} [unsigned=false] Whether unsigned or not
         * @returns {Long|number} Original value
         */
        util.longFromHash = function longFromHash(hash, unsigned) {
          var bits = util.LongBits.fromHash(hash);
          if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
          return bits.toNumber(Boolean(unsigned));
        };

        /**
         * Merges the properties of the source object into the destination object.
         * @memberof util
         * @param {Object.<string,*>} dst Destination object
         * @param {Object.<string,*>} src Source object
         * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
         * @returns {Object.<string,*>} Destination object
         */
        function merge(dst, src, ifNotSet) {
          // used by converters
          for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];
          return dst;
        }
        util.merge = merge;

        /**
         * Converts the first character of a string to lower case.
         * @param {string} str String to convert
         * @returns {string} Converted string
         */
        util.lcFirst = function lcFirst(str) {
          return str.charAt(0).toLowerCase() + str.substring(1);
        };

        /**
         * Creates a custom error constructor.
         * @memberof util
         * @param {string} name Error name
         * @returns {Constructor<Error>} Custom error constructor
         */
        function newError(name) {
          function CustomError(message, properties) {
            if (!(this instanceof CustomError)) return new CustomError(message, properties);

            // Error.call(this, message);
            // ^ just returns a new error instance because the ctor can be called as a function

            Object.defineProperty(this, "message", {
              get: function get() {
                return message;
              }
            });

            /* istanbul ignore next */
            if (Error.captureStackTrace)
              // node
              Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
              value: new Error().stack || ""
            });
            if (properties) merge(this, properties);
          }
          CustomError.prototype = Object.create(Error.prototype, {
            constructor: {
              value: CustomError,
              writable: true,
              enumerable: false,
              configurable: true
            },
            name: {
              get: function get() {
                return name;
              },
              set: undefined,
              enumerable: false,
              // configurable: false would accurately preserve the behavior of
              // the original, but I'm guessing that was not intentional.
              // For an actual error subclass, this property would
              // be configurable.
              configurable: true
            },
            toString: {
              value: function value() {
                return this.name + ": " + this.message;
              },
              writable: true,
              enumerable: false,
              configurable: true
            }
          });
          return CustomError;
        }
        util.newError = newError;

        /**
         * Constructs a new protocol error.
         * @classdesc Error subclass indicating a protocol specifc error.
         * @memberof util
         * @extends Error
         * @template T extends Message<T>
         * @constructor
         * @param {string} message Error message
         * @param {Object.<string,*>} [properties] Additional properties
         * @example
         * try {
         *     MyMessage.decode(someBuffer); // throws if required fields are missing
         * } catch (e) {
         *     if (e instanceof ProtocolError && e.instance)
         *         console.log("decoded so far: " + JSON.stringify(e.instance));
         * }
         */
        util.ProtocolError = newError("ProtocolError");

        /**
         * So far decoded message instance.
         * @name util.ProtocolError#instance
         * @type {Message<T>}
         */

        /**
         * A OneOf getter as returned by {@link util.oneOfGetter}.
         * @typedef OneOfGetter
         * @type {function}
         * @returns {string|undefined} Set field name, if any
         */

        /**
         * Builds a getter for a oneof's present field name.
         * @param {string[]} fieldNames Field names
         * @returns {OneOfGetter} Unbound getter
         */
        util.oneOfGetter = function getOneOf(fieldNames) {
          var fieldMap = {};
          for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;

          /**
           * @returns {string|undefined} Set field name, if any
           * @this Object
           * @ignore
           */
          return function () {
            // eslint-disable-line consistent-return
            for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
          };
        };

        /**
         * A OneOf setter as returned by {@link util.oneOfSetter}.
         * @typedef OneOfSetter
         * @type {function}
         * @param {string|undefined} value Field name
         * @returns {undefined}
         */

        /**
         * Builds a setter for a oneof's present field name.
         * @param {string[]} fieldNames Field names
         * @returns {OneOfSetter} Unbound setter
         */
        util.oneOfSetter = function setOneOf(fieldNames) {
          /**
           * @param {string} name Field name
           * @returns {undefined}
           * @this Object
           * @ignore
           */
          return function (name) {
            for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[fieldNames[i]];
          };
        };

        /**
         * Default conversion options used for {@link Message#toJSON} implementations.
         *
         * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
         *
         * - Longs become strings
         * - Enums become string keys
         * - Bytes become base64 encoded strings
         * - (Sub-)Messages become plain objects
         * - Maps become plain objects with all string keys
         * - Repeated fields become arrays
         * - NaN and Infinity for float and double fields become strings
         *
         * @type {IConversionOptions}
         * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
         */
        util.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: true
        };

        // Sets up buffer utility according to the environment (called in index-minimal)
        util._configure = function () {
          var Buffer = util.Buffer;
          /* istanbul ignore if */
          if (!Buffer) {
            util._Buffer_from = util._Buffer_allocUnsafe = null;
            return;
          }
          // because node 4.x buffers are incompatible & immutable
          // see: https://github.com/dcodeIO/protobuf.js/pull/665
          util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || /* istanbul ignore next */
          function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
          };
          util._Buffer_allocUnsafe = Buffer.allocUnsafe || /* istanbul ignore next */
          function Buffer_allocUnsafe(size) {
            return new Buffer(size);
          };
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': __cjsMetaURL$1,
          '@protobufjs/base64': __cjsMetaURL$2,
          '@protobufjs/eventemitter': __cjsMetaURL$3,
          '@protobufjs/float': __cjsMetaURL$4,
          '@protobufjs/inquire': __cjsMetaURL$5,
          '@protobufjs/utf8': __cjsMetaURL$6,
          '@protobufjs/pool': __cjsMetaURL$7,
          './longbits': __cjsMetaURL$8
        };
      });
    }
  };
});

System.register("chunks:///_virtual/namespace.js", ['./cjs-loader.mjs', './object.js', './field.js', './util.js', './oneof.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Namespace;

        // extends ReflectionObject
        var ReflectionObject = require("./object");
        ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
        var Field = require("./field"),
          util = require("./util"),
          OneOf = require("./oneof");
        var Type,
          // cyclic
          Service, Enum;

        /**
         * Constructs a new namespace instance.
         * @name Namespace
         * @classdesc Reflected namespace.
         * @extends NamespaceBase
         * @constructor
         * @param {string} name Namespace name
         * @param {Object.<string,*>} [options] Declared options
         */

        /**
         * Constructs a namespace from JSON.
         * @memberof Namespace
         * @function
         * @param {string} name Namespace name
         * @param {Object.<string,*>} json JSON object
         * @returns {Namespace} Created namespace
         * @throws {TypeError} If arguments are invalid
         */
        Namespace.fromJSON = function fromJSON(name, json) {
          return new Namespace(name, json.options).addJSON(json.nested);
        };

        /**
         * Converts an array of reflection objects to JSON.
         * @memberof Namespace
         * @param {ReflectionObject[]} array Object array
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
         */
        function arrayToJSON(array, toJSONOptions) {
          if (!(array && array.length)) return undefined;
          var obj = {};
          for (var i = 0; i < array.length; ++i) obj[array[i].name] = array[i].toJSON(toJSONOptions);
          return obj;
        }
        Namespace.arrayToJSON = arrayToJSON;

        /**
         * Tests if the specified id is reserved.
         * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
         * @param {number} id Id to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Namespace.isReservedId = function isReservedId(reserved, id) {
          if (reserved) for (var i = 0; i < reserved.length; ++i) if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id) return true;
          return false;
        };

        /**
         * Tests if the specified name is reserved.
         * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
         * @param {string} name Name to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Namespace.isReservedName = function isReservedName(reserved, name) {
          if (reserved) for (var i = 0; i < reserved.length; ++i) if (reserved[i] === name) return true;
          return false;
        };

        /**
         * Not an actual constructor. Use {@link Namespace} instead.
         * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
         * @exports NamespaceBase
         * @extends ReflectionObject
         * @abstract
         * @constructor
         * @param {string} name Namespace name
         * @param {Object.<string,*>} [options] Declared options
         * @see {@link Namespace}
         */
        function Namespace(name, options) {
          ReflectionObject.call(this, name, options);

          /**
           * Nested objects by name.
           * @type {Object.<string,ReflectionObject>|undefined}
           */
          this.nested = undefined; // toJSON

          /**
           * Cached nested objects as an array.
           * @type {ReflectionObject[]|null}
           * @private
           */
          this._nestedArray = null;
        }
        function clearCache(namespace) {
          namespace._nestedArray = null;
          return namespace;
        }

        /**
         * Nested objects of this namespace as an array for iteration.
         * @name NamespaceBase#nestedArray
         * @type {ReflectionObject[]}
         * @readonly
         */
        Object.defineProperty(Namespace.prototype, "nestedArray", {
          get: function get() {
            return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
          }
        });

        /**
         * Namespace descriptor.
         * @interface INamespace
         * @property {Object.<string,*>} [options] Namespace options
         * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
         */

        /**
         * Any extension field descriptor.
         * @typedef AnyExtensionField
         * @type {IExtensionField|IExtensionMapField}
         */

        /**
         * Any nested object descriptor.
         * @typedef AnyNestedObject
         * @type {IEnum|IType|IService|AnyExtensionField|INamespace|IOneOf}
         */

        /**
         * Converts this namespace to a namespace descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {INamespace} Namespace descriptor
         */
        Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
          return util.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions)]);
        };

        /**
         * Adds nested objects to this namespace from nested object descriptors.
         * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
         * @returns {Namespace} `this`
         */
        Namespace.prototype.addJSON = function addJSON(nestedJson) {
          var ns = this;
          /* istanbul ignore else */
          if (nestedJson) {
            for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
              nested = nestedJson[names[i]];
              ns.add(
              // most to least likely
              (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
            }
          }
          return this;
        };

        /**
         * Gets the nested object of the specified name.
         * @param {string} name Nested object name
         * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
         */
        Namespace.prototype.get = function get(name) {
          return this.nested && this.nested[name] || null;
        };

        /**
         * Gets the values of the nested {@link Enum|enum} of the specified name.
         * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
         * @param {string} name Nested enum name
         * @returns {Object.<string,number>} Enum values
         * @throws {Error} If there is no such enum
         */
        Namespace.prototype.getEnum = function getEnum(name) {
          if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
          throw Error("no such enum: " + name);
        };

        /**
         * Adds a nested object to this namespace.
         * @param {ReflectionObject} object Nested object to add
         * @returns {Namespace} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If there is already a nested object with this name
         */
        Namespace.prototype.add = function add(object) {
          if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
          if (!this.nested) this.nested = {};else {
            var prev = this.get(object.name);
            if (prev) {
              if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                // replace plain namespace but keep existing nested elements and options
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i) object.add(nested[i]);
                this.remove(prev);
                if (!this.nested) this.nested = {};
                object.setOptions(prev.options, true);
              } else throw Error("duplicate name '" + object.name + "' in " + this);
            }
          }
          this.nested[object.name] = object;
          if (!(this instanceof Type || this instanceof Service || this instanceof Enum || this instanceof Field)) {
            // This is a package or a root namespace.
            if (!object._edition) {
              // Make sure that some edition is set if it hasn't already been specified.
              object._edition = object._defaultEdition;
            }
          }
          object.onAdd(this);
          return clearCache(this);
        };

        /**
         * Removes a nested object from this namespace.
         * @param {ReflectionObject} object Nested object to remove
         * @returns {Namespace} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If `object` is not a member of this namespace
         */
        Namespace.prototype.remove = function remove(object) {
          if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
          if (object.parent !== this) throw Error(object + " is not a member of " + this);
          delete this.nested[object.name];
          if (!Object.keys(this.nested).length) this.nested = undefined;
          object.onRemove(this);
          return clearCache(this);
        };

        /**
         * Defines additial namespaces within this one if not yet existing.
         * @param {string|string[]} path Path to create
         * @param {*} [json] Nested types to create from JSON
         * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
         */
        Namespace.prototype.define = function define(path, json) {
          if (util.isString(path)) path = path.split(".");else if (!Array.isArray(path)) throw TypeError("illegal path");
          if (path && path.length && path[0] === "") throw Error("path must be relative");
          var ptr = this;
          while (path.length > 0) {
            var part = path.shift();
            if (ptr.nested && ptr.nested[part]) {
              ptr = ptr.nested[part];
              if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
            } else ptr.add(ptr = new Namespace(part));
          }
          if (json) ptr.addJSON(json);
          return ptr;
        };

        /**
         * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
         * @returns {Namespace} `this`
         */
        Namespace.prototype.resolveAll = function resolveAll() {
          var nested = this.nestedArray,
            i = 0;
          this.resolve();
          while (i < nested.length) if (nested[i] instanceof Namespace) nested[i++].resolveAll();else nested[i++].resolve();
          return this;
        };

        /**
         * @override
         */
        Namespace.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
          edition = this._edition || edition;
          ReflectionObject.prototype._resolveFeaturesRecursive.call(this, edition);
          this.nestedArray.forEach(function (nested) {
            nested._resolveFeaturesRecursive(edition);
          });
          return this;
        };

        /**
         * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
         * @param {string|string[]} path Path to look up
         * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
         * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
         * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
         */
        Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
          /* istanbul ignore next */
          if (typeof filterTypes === "boolean") {
            parentAlreadyChecked = filterTypes;
            filterTypes = undefined;
          } else if (filterTypes && !Array.isArray(filterTypes)) filterTypes = [filterTypes];
          if (util.isString(path) && path.length) {
            if (path === ".") return this.root;
            path = path.split(".");
          } else if (!path.length) return this;

          // Start at root if path is absolute
          if (path[0] === "") return this.root.lookup(path.slice(1), filterTypes);

          // Test if the first part matches any nested object, and if so, traverse if path contains more
          var found = this.get(path[0]);
          if (found) {
            if (path.length === 1) {
              if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
            } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found;

            // Otherwise try each nested namespace
          } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;

          // If there hasn't been a match, try again at the parent
          if (this.parent === null || parentAlreadyChecked) return null;
          return this.parent.lookup(path, filterTypes);
        };

        /**
         * Looks up the reflection object at the specified path, relative to this namespace.
         * @name NamespaceBase#lookup
         * @function
         * @param {string|string[]} path Path to look up
         * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
         * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
         * @variation 2
         */
        // lookup(path: string, [parentAlreadyChecked: boolean])

        /**
         * Looks up the {@link Type|type} at the specified path, relative to this namespace.
         * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
         * @param {string|string[]} path Path to look up
         * @returns {Type} Looked up type
         * @throws {Error} If `path` does not point to a type
         */
        Namespace.prototype.lookupType = function lookupType(path) {
          var found = this.lookup(path, [Type]);
          if (!found) throw Error("no such type: " + path);
          return found;
        };

        /**
         * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
         * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
         * @param {string|string[]} path Path to look up
         * @returns {Enum} Looked up enum
         * @throws {Error} If `path` does not point to an enum
         */
        Namespace.prototype.lookupEnum = function lookupEnum(path) {
          var found = this.lookup(path, [Enum]);
          if (!found) throw Error("no such Enum '" + path + "' in " + this);
          return found;
        };

        /**
         * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
         * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
         * @param {string|string[]} path Path to look up
         * @returns {Type} Looked up type or enum
         * @throws {Error} If `path` does not point to a type or enum
         */
        Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
          var found = this.lookup(path, [Type, Enum]);
          if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
          return found;
        };

        /**
         * Looks up the {@link Service|service} at the specified path, relative to this namespace.
         * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
         * @param {string|string[]} path Path to look up
         * @returns {Service} Looked up service
         * @throws {Error} If `path` does not point to a service
         */
        Namespace.prototype.lookupService = function lookupService(path) {
          var found = this.lookup(path, [Service]);
          if (!found) throw Error("no such Service '" + path + "' in " + this);
          return found;
        };

        // Sets up cyclic dependencies (called in index-light)
        Namespace._configure = function (Type_, Service_, Enum_) {
          Type = Type_;
          Service = Service_;
          Enum = Enum_;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './object': __cjsMetaURL$1,
          './field': __cjsMetaURL$2,
          './util': __cjsMetaURL$3,
          './oneof': __cjsMetaURL$4
        };
      });
    }
  };
});

System.register("chunks:///_virtual/object.js", ['./cjs-loader.mjs', './oneof.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = ReflectionObject;
        ReflectionObject.className = "ReflectionObject";
        var OneOf = require("./oneof");
        var util = require("./util");
        var Root; // cyclic

        /* eslint-disable no-warning-comments */
        // TODO: Replace with embedded proto.
        var editions2023Defaults = {
          enum_type: "OPEN",
          field_presence: "EXPLICIT",
          json_format: "ALLOW",
          message_encoding: "LENGTH_PREFIXED",
          repeated_field_encoding: "PACKED",
          utf8_validation: "VERIFY"
        };
        var proto2Defaults = {
          enum_type: "CLOSED",
          field_presence: "EXPLICIT",
          json_format: "LEGACY_BEST_EFFORT",
          message_encoding: "LENGTH_PREFIXED",
          repeated_field_encoding: "EXPANDED",
          utf8_validation: "NONE"
        };
        var proto3Defaults = {
          enum_type: "OPEN",
          field_presence: "IMPLICIT",
          json_format: "ALLOW",
          message_encoding: "LENGTH_PREFIXED",
          repeated_field_encoding: "PACKED",
          utf8_validation: "VERIFY"
        };

        /**
         * Constructs a new reflection object instance.
         * @classdesc Base class of all reflection objects.
         * @constructor
         * @param {string} name Object name
         * @param {Object.<string,*>} [options] Declared options
         * @abstract
         */
        function ReflectionObject(name, options) {
          if (!util.isString(name)) throw TypeError("name must be a string");
          if (options && !util.isObject(options)) throw TypeError("options must be an object");

          /**
           * Options.
           * @type {Object.<string,*>|undefined}
           */
          this.options = options; // toJSON

          /**
           * Parsed Options.
           * @type {Array.<Object.<string,*>>|undefined}
           */
          this.parsedOptions = null;

          /**
           * Unique name within its namespace.
           * @type {string}
           */
          this.name = name;

          /**
           * The edition specified for this object.  Only relevant for top-level objects.
           * @type {string}
           */
          this._edition = null;

          /**
           * The default edition to use for this object if none is specified.  For legacy reasons,
           * this is proto2 except in the JSON parsing case where it was proto3.
           * @type {string}
           */
          this._defaultEdition = "proto2";

          /**
           * Resolved Features.
           * @type {object}
           */
          this._features = {};

          /**
           * Parent namespace.
           * @type {Namespace|null}
           */
          this.parent = null;

          /**
           * Whether already resolved or not.
           * @type {boolean}
           */
          this.resolved = false;

          /**
           * Comment text, if any.
           * @type {string|null}
           */
          this.comment = null;

          /**
           * Defining file name.
           * @type {string|null}
           */
          this.filename = null;
        }
        Object.defineProperties(ReflectionObject.prototype, {
          /**
           * Reference to the root namespace.
           * @name ReflectionObject#root
           * @type {Root}
           * @readonly
           */
          root: {
            get: function get() {
              var ptr = this;
              while (ptr.parent !== null) ptr = ptr.parent;
              return ptr;
            }
          },
          /**
           * Full name including leading dot.
           * @name ReflectionObject#fullName
           * @type {string}
           * @readonly
           */
          fullName: {
            get: function get() {
              var path = [this.name],
                ptr = this.parent;
              while (ptr) {
                path.unshift(ptr.name);
                ptr = ptr.parent;
              }
              return path.join(".");
            }
          }
        });

        /**
         * Converts this reflection object to its descriptor representation.
         * @returns {Object.<string,*>} Descriptor
         * @abstract
         */
        ReflectionObject.prototype.toJSON = /* istanbul ignore next */function toJSON() {
          throw Error(); // not implemented, shouldn't happen
        };

        /**
         * Called when this object is added to a parent.
         * @param {ReflectionObject} parent Parent added to
         * @returns {undefined}
         */
        ReflectionObject.prototype.onAdd = function onAdd(parent) {
          if (this.parent && this.parent !== parent) this.parent.remove(this);
          this.parent = parent;
          this.resolved = false;
          var root = parent.root;
          if (root instanceof Root) root._handleAdd(this);
        };

        /**
         * Called when this object is removed from a parent.
         * @param {ReflectionObject} parent Parent removed from
         * @returns {undefined}
         */
        ReflectionObject.prototype.onRemove = function onRemove(parent) {
          var root = parent.root;
          if (root instanceof Root) root._handleRemove(this);
          this.parent = null;
          this.resolved = false;
        };

        /**
         * Resolves this objects type references.
         * @returns {ReflectionObject} `this`
         */
        ReflectionObject.prototype.resolve = function resolve() {
          if (this.resolved) return this;
          if (this instanceof Root) {
            this._resolveFeaturesRecursive(this._edition);
            this.resolved = true;
          }
          return this;
        };

        /**
         * Resolves this objects editions features.
         * @param {string} edition The edition we're currently resolving for.
         * @returns {ReflectionObject} `this`
         */
        ReflectionObject.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
          return this._resolveFeatures(this._edition || edition);
        };

        /**
         * Resolves child features from parent features
         * @param {string} edition The edition we're currently resolving for.
         * @returns {undefined}
         */
        ReflectionObject.prototype._resolveFeatures = function _resolveFeatures(edition) {
          var defaults = {};

          /* istanbul ignore if */
          if (!edition) {
            throw new Error("Unknown edition for " + this.fullName);
          }
          var protoFeatures = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(edition));
          if (this._edition) {
            // For a namespace marked with a specific edition, reset defaults.
            /* istanbul ignore else */
            if (edition === "proto2") {
              defaults = Object.assign({}, proto2Defaults);
            } else if (edition === "proto3") {
              defaults = Object.assign({}, proto3Defaults);
            } else if (edition === "2023") {
              defaults = Object.assign({}, editions2023Defaults);
            } else {
              throw new Error("Unknown edition: " + edition);
            }
            this._features = Object.assign(defaults, protoFeatures || {});
            return;
          }

          // fields in Oneofs aren't actually children of them, so we have to
          // special-case it
          /* istanbul ignore else */
          if (this.partOf instanceof OneOf) {
            var lexicalParentFeaturesCopy = Object.assign({}, this.partOf._features);
            this._features = Object.assign(lexicalParentFeaturesCopy, protoFeatures || {});
          } else if (this.declaringField) ;else if (this.parent) {
            var parentFeaturesCopy = Object.assign({}, this.parent._features);
            this._features = Object.assign(parentFeaturesCopy, protoFeatures || {});
          } else {
            throw new Error("Unable to find a parent for " + this.fullName);
          }
          if (this.extensionField) {
            // Sister fields should have the same features as their extensions.
            this.extensionField._features = this._features;
          }
        };

        /**
         * Infers features from legacy syntax that may have been specified differently.
         * in older editions.
         * @param {string|undefined} edition The edition this proto is on, or undefined if pre-editions
         * @returns {object} The feature values to override
         */
        ReflectionObject.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures( /*edition*/
        ) {
          return {};
        };

        /**
         * Gets an option value.
         * @param {string} name Option name
         * @returns {*} Option value or `undefined` if not set
         */
        ReflectionObject.prototype.getOption = function getOption(name) {
          if (this.options) return this.options[name];
          return undefined;
        };

        /**
         * Sets an option.
         * @param {string} name Option name
         * @param {*} value Option value
         * @param {boolean|undefined} [ifNotSet] Sets the option only if it isn't currently set
         * @returns {ReflectionObject} `this`
         */
        ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
          if (!this.options) this.options = {};
          if (/^features\./.test(name)) {
            util.setProperty(this.options, name, value, ifNotSet);
          } else if (!ifNotSet || this.options[name] === undefined) {
            if (this.getOption(name) !== value) this.resolved = false;
            this.options[name] = value;
          }
          return this;
        };

        /**
         * Sets a parsed option.
         * @param {string} name parsed Option name
         * @param {*} value Option value
         * @param {string} propName dot '.' delimited full path of property within the option to set. if undefined\empty, will add a new option with that value
         * @returns {ReflectionObject} `this`
         */
        ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var parsedOptions = this.parsedOptions;
          if (propName) {
            // If setting a sub property of an option then try to merge it
            // with an existing option
            var opt = parsedOptions.find(function (opt) {
              return Object.prototype.hasOwnProperty.call(opt, name);
            });
            if (opt) {
              // If we found an existing option - just merge the property value
              // (If it's a feature, will just write over)
              var newValue = opt[name];
              util.setProperty(newValue, propName, value);
            } else {
              // otherwise, create a new option, set its property and add it to the list
              opt = {};
              opt[name] = util.setProperty({}, propName, value);
              parsedOptions.push(opt);
            }
          } else {
            // Always create a new option when setting the value of the option itself
            var newOpt = {};
            newOpt[name] = value;
            parsedOptions.push(newOpt);
          }
          return this;
        };

        /**
         * Sets multiple options.
         * @param {Object.<string,*>} options Options to set
         * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
         * @returns {ReflectionObject} `this`
         */
        ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
          if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) this.setOption(keys[i], options[keys[i]], ifNotSet);
          return this;
        };

        /**
         * Converts this instance to its string representation.
         * @returns {string} Class name[, space, full name]
         */
        ReflectionObject.prototype.toString = function toString() {
          var className = this.constructor.className,
            fullName = this.fullName;
          if (fullName.length) return className + " " + fullName;
          return className;
        };

        /**
         * Converts the edition this object is pinned to for JSON format.
         * @returns {string|undefined} The edition string for JSON representation
         */
        ReflectionObject.prototype._editionToJSON = function _editionToJSON() {
          if (!this._edition || this._edition === "proto3") {
            // Avoid emitting proto3 since we need to default to it for backwards
            // compatibility anyway.
            return undefined;
          }
          return this._edition;
        };

        // Sets up cyclic dependencies (called in index-light)
        ReflectionObject._configure = function (Root_) {
          Root = Root_;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './oneof': __cjsMetaURL$1,
          './util': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/oneof.js", ['./cjs-loader.mjs', './object.js', './field.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = OneOf;

        // extends ReflectionObject
        var ReflectionObject = require("./object");
        ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
        var Field = require("./field"),
          util = require("./util");

        /**
         * Constructs a new oneof instance.
         * @classdesc Reflected oneof.
         * @extends ReflectionObject
         * @constructor
         * @param {string} name Oneof name
         * @param {string[]|Object.<string,*>} [fieldNames] Field names
         * @param {Object.<string,*>} [options] Declared options
         * @param {string} [comment] Comment associated with this field
         */
        function OneOf(name, fieldNames, options, comment) {
          if (!Array.isArray(fieldNames)) {
            options = fieldNames;
            fieldNames = undefined;
          }
          ReflectionObject.call(this, name, options);

          /* istanbul ignore if */
          if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");

          /**
           * Field names that belong to this oneof.
           * @type {string[]}
           */
          this.oneof = fieldNames || []; // toJSON, marker

          /**
           * Fields that belong to this oneof as an array for iteration.
           * @type {Field[]}
           * @readonly
           */
          this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

          /**
           * Comment for this field.
           * @type {string|null}
           */
          this.comment = comment;
        }

        /**
         * Oneof descriptor.
         * @interface IOneOf
         * @property {Array.<string>} oneof Oneof field names
         * @property {Object.<string,*>} [options] Oneof options
         */

        /**
         * Constructs a oneof from a oneof descriptor.
         * @param {string} name Oneof name
         * @param {IOneOf} json Oneof descriptor
         * @returns {OneOf} Created oneof
         * @throws {TypeError} If arguments are invalid
         */
        OneOf.fromJSON = function fromJSON(name, json) {
          return new OneOf(name, json.oneof, json.options, json.comment);
        };

        /**
         * Converts this oneof to a oneof descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IOneOf} Oneof descriptor
         */
        OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined]);
        };

        /**
         * Adds the fields of the specified oneof to the parent if not already done so.
         * @param {OneOf} oneof The oneof
         * @returns {undefined}
         * @inner
         * @ignore
         */
        function addFieldsToParent(oneof) {
          if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) if (!oneof.fieldsArray[i].parent) oneof.parent.add(oneof.fieldsArray[i]);
        }

        /**
         * Adds a field to this oneof and removes it from its current parent, if any.
         * @param {Field} field Field to add
         * @returns {OneOf} `this`
         */
        OneOf.prototype.add = function add(field) {
          /* istanbul ignore if */
          if (!(field instanceof Field)) throw TypeError("field must be a Field");
          if (field.parent && field.parent !== this.parent) field.parent.remove(field);
          this.oneof.push(field.name);
          this.fieldsArray.push(field);
          field.partOf = this; // field.parent remains null
          addFieldsToParent(this);
          return this;
        };

        /**
         * Removes a field from this oneof and puts it back to the oneof's parent.
         * @param {Field} field Field to remove
         * @returns {OneOf} `this`
         */
        OneOf.prototype.remove = function remove(field) {
          /* istanbul ignore if */
          if (!(field instanceof Field)) throw TypeError("field must be a Field");
          var index = this.fieldsArray.indexOf(field);

          /* istanbul ignore if */
          if (index < 0) throw Error(field + " is not a member of " + this);
          this.fieldsArray.splice(index, 1);
          index = this.oneof.indexOf(field.name);

          /* istanbul ignore else */
          if (index > -1)
            // theoretical
            this.oneof.splice(index, 1);
          field.partOf = null;
          return this;
        };

        /**
         * @override
         */
        OneOf.prototype.onAdd = function onAdd(parent) {
          ReflectionObject.prototype.onAdd.call(this, parent);
          var self = this;
          // Collect present fields
          for (var i = 0; i < this.oneof.length; ++i) {
            var field = parent.get(this.oneof[i]);
            if (field && !field.partOf) {
              field.partOf = self;
              self.fieldsArray.push(field);
            }
          }
          // Add not yet present fields
          addFieldsToParent(this);
        };

        /**
         * @override
         */
        OneOf.prototype.onRemove = function onRemove(parent) {
          for (var i = 0, field; i < this.fieldsArray.length; ++i) if ((field = this.fieldsArray[i]).parent) field.parent.remove(field);
          ReflectionObject.prototype.onRemove.call(this, parent);
        };

        /**
         * Determines whether this field corresponds to a synthetic oneof created for
         * a proto3 optional field.  No behavioral logic should depend on this, but it
         * can be relevant for reflection.
         * @name OneOf#isProto3Optional
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(OneOf.prototype, "isProto3Optional", {
          get: function get() {
            if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
              return false;
            }
            var field = this.fieldsArray[0];
            return field.options != null && field.options["proto3_optional"] === true;
          }
        });

        /**
         * Decorator function as returned by {@link OneOf.d} (TypeScript).
         * @typedef OneOfDecorator
         * @type {function}
         * @param {Object} prototype Target prototype
         * @param {string} oneofName OneOf name
         * @returns {undefined}
         */

        /**
         * OneOf decorator (TypeScript).
         * @function
         * @param {...string} fieldNames Field names
         * @returns {OneOfDecorator} Decorator function
         * @template T extends string
         */
        OneOf.d = function decorateOneOf() {
          var fieldNames = new Array(arguments.length),
            index = 0;
          while (index < arguments.length) fieldNames[index] = arguments[index++];
          return function oneOfDecorator(prototype, oneofName) {
            util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
            Object.defineProperty(prototype, oneofName, {
              get: util.oneOfGetter(fieldNames),
              set: util.oneOfSetter(fieldNames)
            });
          };
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './object': __cjsMetaURL$1,
          './field': __cjsMetaURL$2,
          './util': __cjsMetaURL$3
        };
      });
    }
  };
});

System.register("chunks:///_virtual/pako.esm.mjs", ['./rollupPluginModLoBabelHelpers.js'], function (exports) {
  var _typeof;
  return {
    setters: [function (module) {
      _typeof = module.typeof;
    }],
    execute: function () {
      /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      /* eslint-disable space-unary-ops */

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      //const Z_FILTERED          = 1;
      //const Z_HUFFMAN_ONLY      = 2;
      //const Z_RLE               = 3;
      var Z_FIXED$1 = 4;
      //const Z_DEFAULT_STRATEGY  = 0;

      /* Possible values of the data_type field (though see inflate()) */
      var Z_BINARY = 0;
      var Z_TEXT = 1;
      //const Z_ASCII             = 1; // = Z_TEXT
      var Z_UNKNOWN$1 = 2;

      /*============================================================================*/

      function zero$1(buf) {
        var len = buf.length;
        while (--len >= 0) {
          buf[len] = 0;
        }
      }

      // From zutil.h

      var STORED_BLOCK = 0;
      var STATIC_TREES = 1;
      var DYN_TREES = 2;
      /* The three kinds of block type */

      var MIN_MATCH$1 = 3;
      var MAX_MATCH$1 = 258;
      /* The minimum and maximum match lengths */

      // From deflate.h
      /* ===========================================================================
       * Internal compression state.
       */

      var LENGTH_CODES$1 = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS$1 = 256;
      /* number of literal bytes 0..255 */

      var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES$1 = 30;
      /* number of distance codes */

      var BL_CODES$1 = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
      /* maximum heap size */

      var MAX_BITS$1 = 15;
      /* All codes must not exceed MAX_BITS bits */

      var Buf_size = 16;
      /* size of bit buffer in bi_buf */

      /* ===========================================================================
       * Constants
       */

      var MAX_BL_BITS = 7;
      /* Bit length codes must not exceed MAX_BL_BITS bits */

      var END_BLOCK = 256;
      /* end of block literal code */

      var REP_3_6 = 16;
      /* repeat previous bit length 3-6 times (2 bits of repeat count) */

      var REPZ_3_10 = 17;
      /* repeat a zero length 3-10 times  (3 bits of repeat count) */

      var REPZ_11_138 = 18;
      /* repeat a zero length 11-138 times  (7 bits of repeat count) */

      /* eslint-disable comma-spacing,array-bracket-spacing */
      var extra_lbits = /* extra bits for each length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
      var extra_dbits = /* extra bits for each distance code */
      new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
      var extra_blbits = /* extra bits for each bit length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
      var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      /* eslint-enable comma-spacing,array-bracket-spacing */

      /* The lengths of the bit length codes are sent in order of decreasing
       * probability, to avoid transmitting the lengths for unused bit length codes.
       */

      /* ===========================================================================
       * Local data. These are initialized only once.
       */

      // We pre-fill arrays with 0 to avoid uninitialized gaps

      var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

      // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
      var static_ltree = new Array((L_CODES$1 + 2) * 2);
      zero$1(static_ltree);
      /* The static literal tree. Since the bit lengths are imposed, there is no
       * need for the L_CODES extra codes used during heap construction. However
       * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
       * below).
       */

      var static_dtree = new Array(D_CODES$1 * 2);
      zero$1(static_dtree);
      /* The static distance tree. (Actually a trivial tree since all codes use
       * 5 bits.)
       */

      var _dist_code = new Array(DIST_CODE_LEN);
      zero$1(_dist_code);
      /* Distance codes. The first 256 values correspond to the distances
       * 3 .. 258, the last 256 values correspond to the top 8 bits of
       * the 15 bit distances.
       */

      var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
      zero$1(_length_code);
      /* length code for each normalized match length (0 == MIN_MATCH) */

      var base_length = new Array(LENGTH_CODES$1);
      zero$1(base_length);
      /* First normalized length for each code (0 = MIN_MATCH) */

      var base_dist = new Array(D_CODES$1);
      zero$1(base_dist);
      /* First normalized distance for each code (0 = distance of 1) */

      function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
        this.static_tree = static_tree; /* static tree or NULL */
        this.extra_bits = extra_bits; /* extra bits for each code or NULL */
        this.extra_base = extra_base; /* base index for extra_bits */
        this.elems = elems; /* max number of elements in the tree */
        this.max_length = max_length; /* max bit length for the codes */

        // show if `static_tree` has data or dummy - needed for monomorphic objects
        this.has_stree = static_tree && static_tree.length;
      }
      var static_l_desc;
      var static_d_desc;
      var static_bl_desc;
      function TreeDesc(dyn_tree, stat_desc) {
        this.dyn_tree = dyn_tree; /* the dynamic tree */
        this.max_code = 0; /* largest code with non zero frequency */
        this.stat_desc = stat_desc; /* the corresponding static tree */
      }

      var d_code = function d_code(dist) {
        return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
      };

      /* ===========================================================================
       * Output a short LSB first on the stream.
       * IN assertion: there is enough room in pendingBuf.
       */
      var put_short = function put_short(s, w) {
        //    put_byte(s, (uch)((w) & 0xff));
        //    put_byte(s, (uch)((ush)(w) >> 8));
        s.pending_buf[s.pending++] = w & 0xff;
        s.pending_buf[s.pending++] = w >>> 8 & 0xff;
      };

      /* ===========================================================================
       * Send a value on a given number of bits.
       * IN assertion: length <= 16 and value fits in length bits.
       */
      var send_bits = function send_bits(s, value, length) {
        if (s.bi_valid > Buf_size - length) {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          put_short(s, s.bi_buf);
          s.bi_buf = value >> Buf_size - s.bi_valid;
          s.bi_valid += length - Buf_size;
        } else {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          s.bi_valid += length;
        }
      };
      var send_code = function send_code(s, c, tree) {
        send_bits(s, tree[c * 2] /*.Code*/, tree[c * 2 + 1] /*.Len*/);
      };

      /* ===========================================================================
       * Reverse the first len bits of a code, using straightforward code (a faster
       * method would use a table)
       * IN assertion: 1 <= len <= 15
       */
      var bi_reverse = function bi_reverse(code, len) {
        var res = 0;
        do {
          res |= code & 1;
          code >>>= 1;
          res <<= 1;
        } while (--len > 0);
        return res >>> 1;
      };

      /* ===========================================================================
       * Flush the bit buffer, keeping at most 7 bits in it.
       */
      var bi_flush = function bi_flush(s) {
        if (s.bi_valid === 16) {
          put_short(s, s.bi_buf);
          s.bi_buf = 0;
          s.bi_valid = 0;
        } else if (s.bi_valid >= 8) {
          s.pending_buf[s.pending++] = s.bi_buf & 0xff;
          s.bi_buf >>= 8;
          s.bi_valid -= 8;
        }
      };

      /* ===========================================================================
       * Compute the optimal bit lengths for a tree and update the total bit length
       * for the current block.
       * IN assertion: the fields freq and dad are set, heap[heap_max] and
       *    above are the tree nodes sorted by increasing frequency.
       * OUT assertions: the field len is set to the optimal bit length, the
       *     array bl_count contains the frequencies for each bit length.
       *     The length opt_len is updated; static_len is also updated if stree is
       *     not null.
       */
      var gen_bitlen = function gen_bitlen(s, desc) {
        //    deflate_state *s;
        //    tree_desc *desc;    /* the tree descriptor */

        var tree = desc.dyn_tree;
        var max_code = desc.max_code;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var extra = desc.stat_desc.extra_bits;
        var base = desc.stat_desc.extra_base;
        var max_length = desc.stat_desc.max_length;
        var h; /* heap index */
        var n, m; /* iterate over the tree elements */
        var bits; /* bit length */
        var xbits; /* extra bits */
        var f; /* frequency */
        var overflow = 0; /* number of elements with bit length too large */

        for (bits = 0; bits <= MAX_BITS$1; bits++) {
          s.bl_count[bits] = 0;
        }

        /* In a first pass, compute the optimal bit lengths (which may
         * overflow in the case of the bit length tree).
         */
        tree[s.heap[s.heap_max] * 2 + 1] /*.Len*/ = 0; /* root of the heap */

        for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
          n = s.heap[h];
          bits = tree[tree[n * 2 + 1] /*.Dad*/ * 2 + 1] /*.Len*/ + 1;
          if (bits > max_length) {
            bits = max_length;
            overflow++;
          }
          tree[n * 2 + 1] /*.Len*/ = bits;
          /* We overwrite tree[n].Dad which is no longer needed */

          if (n > max_code) {
            continue;
          } /* not a leaf node */

          s.bl_count[bits]++;
          xbits = 0;
          if (n >= base) {
            xbits = extra[n - base];
          }
          f = tree[n * 2] /*.Freq*/;
          s.opt_len += f * (bits + xbits);
          if (has_stree) {
            s.static_len += f * (stree[n * 2 + 1] /*.Len*/ + xbits);
          }
        }
        if (overflow === 0) {
          return;
        }

        // Tracev((stderr,"\nbit length overflow\n"));
        /* This happens for example on obj2 and pic of the Calgary corpus */

        /* Find the first bit length which could increase: */
        do {
          bits = max_length - 1;
          while (s.bl_count[bits] === 0) {
            bits--;
          }
          s.bl_count[bits]--; /* move one leaf down the tree */
          s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
          s.bl_count[max_length]--;
          /* The brother of the overflow item also moves one step up,
           * but this does not affect bl_count[max_length]
           */
          overflow -= 2;
        } while (overflow > 0);

        /* Now recompute all bit lengths, scanning in increasing frequency.
         * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
         * lengths instead of fixing only the wrong ones. This idea is taken
         * from 'ar' written by Haruhiko Okumura.)
         */
        for (bits = max_length; bits !== 0; bits--) {
          n = s.bl_count[bits];
          while (n !== 0) {
            m = s.heap[--h];
            if (m > max_code) {
              continue;
            }
            if (tree[m * 2 + 1] /*.Len*/ !== bits) {
              // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
              s.opt_len += (bits - tree[m * 2 + 1] /*.Len*/) * tree[m * 2] /*.Freq*/;
              tree[m * 2 + 1] /*.Len*/ = bits;
            }
            n--;
          }
        }
      };

      /* ===========================================================================
       * Generate the codes for a given tree and bit counts (which need not be
       * optimal).
       * IN assertion: the array bl_count contains the bit length statistics for
       * the given tree and the field len is set for all tree elements.
       * OUT assertion: the field code is set for all tree elements of non
       *     zero code length.
       */
      var gen_codes = function gen_codes(tree, max_code, bl_count) {
        //    ct_data *tree;             /* the tree to decorate */
        //    int max_code;              /* largest code with non zero frequency */
        //    ushf *bl_count;            /* number of codes at each bit length */

        var next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
        var code = 0; /* running code value */
        var bits; /* bit index */
        var n; /* code index */

        /* The distribution counts are first used to generate the code values
         * without bit reversal.
         */
        for (bits = 1; bits <= MAX_BITS$1; bits++) {
          code = code + bl_count[bits - 1] << 1;
          next_code[bits] = code;
        }
        /* Check that the bit counts in bl_count are consistent. The last code
         * must be all ones.
         */
        //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        //        "inconsistent bit counts");
        //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

        for (n = 0; n <= max_code; n++) {
          var len = tree[n * 2 + 1] /*.Len*/;
          if (len === 0) {
            continue;
          }
          /* Now reverse the bits */
          tree[n * 2] /*.Code*/ = bi_reverse(next_code[len]++, len);

          //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
          //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
        }
      };

      /* ===========================================================================
       * Initialize the various 'constant' tables.
       */
      var tr_static_init = function tr_static_init() {
        var n; /* iterates over tree elements */
        var bits; /* bit counter */
        var length; /* length value */
        var code; /* code value */
        var dist; /* distance index */
        var bl_count = new Array(MAX_BITS$1 + 1);
        /* number of codes at each bit length for an optimal tree */

        // do check in _tr_init()
        //if (static_init_done) return;

        /* For some embedded targets, global variables are not initialized: */
        /*#ifdef NO_INIT_GLOBAL_POINTERS
          static_l_desc.static_tree = static_ltree;
          static_l_desc.extra_bits = extra_lbits;
          static_d_desc.static_tree = static_dtree;
          static_d_desc.extra_bits = extra_dbits;
          static_bl_desc.extra_bits = extra_blbits;
        #endif*/

        /* Initialize the mapping length (0..255) -> length code (0..28) */
        length = 0;
        for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
          base_length[code] = length;
          for (n = 0; n < 1 << extra_lbits[code]; n++) {
            _length_code[length++] = code;
          }
        }
        //Assert (length == 256, "tr_static_init: length != 256");
        /* Note that the length 255 (match length 258) can be represented
         * in two different ways: code 284 + 5 bits or code 285, so we
         * overwrite length_code[255] to use the best encoding:
         */
        _length_code[length - 1] = code;

        /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
        dist = 0;
        for (code = 0; code < 16; code++) {
          base_dist[code] = dist;
          for (n = 0; n < 1 << extra_dbits[code]; n++) {
            _dist_code[dist++] = code;
          }
        }
        //Assert (dist == 256, "tr_static_init: dist != 256");
        dist >>= 7; /* from now on, all distances are divided by 128 */
        for (; code < D_CODES$1; code++) {
          base_dist[code] = dist << 7;
          for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
            _dist_code[256 + dist++] = code;
          }
        }
        //Assert (dist == 256, "tr_static_init: 256+dist != 512");

        /* Construct the codes of the static literal tree */
        for (bits = 0; bits <= MAX_BITS$1; bits++) {
          bl_count[bits] = 0;
        }
        n = 0;
        while (n <= 143) {
          static_ltree[n * 2 + 1] /*.Len*/ = 8;
          n++;
          bl_count[8]++;
        }
        while (n <= 255) {
          static_ltree[n * 2 + 1] /*.Len*/ = 9;
          n++;
          bl_count[9]++;
        }
        while (n <= 279) {
          static_ltree[n * 2 + 1] /*.Len*/ = 7;
          n++;
          bl_count[7]++;
        }
        while (n <= 287) {
          static_ltree[n * 2 + 1] /*.Len*/ = 8;
          n++;
          bl_count[8]++;
        }
        /* Codes 286 and 287 do not exist, but we must include them in the
         * tree construction to get a canonical Huffman tree (longest code
         * all ones)
         */
        gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

        /* The static distance tree is trivial: */
        for (n = 0; n < D_CODES$1; n++) {
          static_dtree[n * 2 + 1] /*.Len*/ = 5;
          static_dtree[n * 2] /*.Code*/ = bi_reverse(n, 5);
        }

        // Now data ready and we can init static trees
        static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
        static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
        static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);

        //static_init_done = true;
      };

      /* ===========================================================================
       * Initialize a new block.
       */
      var init_block = function init_block(s) {
        var n; /* iterates over tree elements */

        /* Initialize the trees. */
        for (n = 0; n < L_CODES$1; n++) {
          s.dyn_ltree[n * 2] /*.Freq*/ = 0;
        }
        for (n = 0; n < D_CODES$1; n++) {
          s.dyn_dtree[n * 2] /*.Freq*/ = 0;
        }
        for (n = 0; n < BL_CODES$1; n++) {
          s.bl_tree[n * 2] /*.Freq*/ = 0;
        }
        s.dyn_ltree[END_BLOCK * 2] /*.Freq*/ = 1;
        s.opt_len = s.static_len = 0;
        s.sym_next = s.matches = 0;
      };

      /* ===========================================================================
       * Flush the bit buffer and align the output on a byte boundary
       */
      var bi_windup = function bi_windup(s) {
        if (s.bi_valid > 8) {
          put_short(s, s.bi_buf);
        } else if (s.bi_valid > 0) {
          //put_byte(s, (Byte)s->bi_buf);
          s.pending_buf[s.pending++] = s.bi_buf;
        }
        s.bi_buf = 0;
        s.bi_valid = 0;
      };

      /* ===========================================================================
       * Compares to subtrees, using the tree depth as tie breaker when
       * the subtrees have equal frequency. This minimizes the worst case length.
       */
      var smaller = function smaller(tree, n, m, depth) {
        var _n2 = n * 2;
        var _m2 = m * 2;
        return tree[_n2] /*.Freq*/ < tree[_m2] /*.Freq*/ || tree[_n2] /*.Freq*/ === tree[_m2] /*.Freq*/ && depth[n] <= depth[m];
      };

      /* ===========================================================================
       * Restore the heap property by moving down the tree starting at node k,
       * exchanging a node with the smallest of its two sons if necessary, stopping
       * when the heap property is re-established (each father smaller than its
       * two sons).
       */
      var pqdownheap = function pqdownheap(s, tree, k) {
        //    deflate_state *s;
        //    ct_data *tree;  /* the tree to restore */
        //    int k;               /* node to move down */

        var v = s.heap[k];
        var j = k << 1; /* left son of k */
        while (j <= s.heap_len) {
          /* Set j to the smallest of the two sons: */
          if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
            j++;
          }
          /* Exit if v is smaller than both sons */
          if (smaller(tree, v, s.heap[j], s.depth)) {
            break;
          }

          /* Exchange v with the smallest son */
          s.heap[k] = s.heap[j];
          k = j;

          /* And continue down the tree, setting j to the left son of k */
          j <<= 1;
        }
        s.heap[k] = v;
      };

      // inlined manually
      // const SMALLEST = 1;

      /* ===========================================================================
       * Send the block data compressed using the given Huffman trees
       */
      var compress_block = function compress_block(s, ltree, dtree) {
        //    deflate_state *s;
        //    const ct_data *ltree; /* literal tree */
        //    const ct_data *dtree; /* distance tree */

        var dist; /* distance of matched string */
        var lc; /* match length or unmatched char (if dist == 0) */
        var sx = 0; /* running index in sym_buf */
        var code; /* the code to send */
        var extra; /* number of extra bits to send */

        if (s.sym_next !== 0) {
          do {
            dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
            dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
            lc = s.pending_buf[s.sym_buf + sx++];
            if (dist === 0) {
              send_code(s, lc, ltree); /* send a literal byte */
              //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
            } else {
              /* Here, lc is the match length - MIN_MATCH */
              code = _length_code[lc];
              send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
              extra = extra_lbits[code];
              if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */
              }

              dist--; /* dist is now the match distance - 1 */
              code = d_code(dist);
              //Assert (code < D_CODES, "bad d_code");

              send_code(s, code, dtree); /* send the distance code */
              extra = extra_dbits[code];
              if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */
              }
            } /* literal or match pair ? */

            /* Check that the overlay between pending_buf and sym_buf is ok: */
            //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
          } while (sx < s.sym_next);
        }
        send_code(s, END_BLOCK, ltree);
      };

      /* ===========================================================================
       * Construct one Huffman tree and assigns the code bit strings and lengths.
       * Update the total bit length for the current block.
       * IN assertion: the field freq is set for all tree elements.
       * OUT assertions: the fields len and code are set to the optimal bit length
       *     and corresponding code. The length opt_len is updated; static_len is
       *     also updated if stree is not null. The field max_code is set.
       */
      var build_tree = function build_tree(s, desc) {
        //    deflate_state *s;
        //    tree_desc *desc; /* the tree descriptor */

        var tree = desc.dyn_tree;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var elems = desc.stat_desc.elems;
        var n, m; /* iterate over heap elements */
        var max_code = -1; /* largest code with non zero frequency */
        var node; /* new node being created */

        /* Construct the initial heap, with least frequent element in
         * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
         * heap[0] is not used.
         */
        s.heap_len = 0;
        s.heap_max = HEAP_SIZE$1;
        for (n = 0; n < elems; n++) {
          if (tree[n * 2] /*.Freq*/ !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
          } else {
            tree[n * 2 + 1] /*.Len*/ = 0;
          }
        }

        /* The pkzip format requires that at least one distance code exists,
         * and that at least one bit should be sent even if there is only one
         * possible code. So to avoid special checks later on we force at least
         * two codes of non zero frequency.
         */
        while (s.heap_len < 2) {
          node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
          tree[node * 2] /*.Freq*/ = 1;
          s.depth[node] = 0;
          s.opt_len--;
          if (has_stree) {
            s.static_len -= stree[node * 2 + 1] /*.Len*/;
          }
          /* node is 0 or 1 so it does not have extra bits */
        }

        desc.max_code = max_code;

        /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
         * establish sub-heaps of increasing lengths:
         */
        for (n = s.heap_len >> 1 /*int /2*/; n >= 1; n--) {
          pqdownheap(s, tree, n);
        }

        /* Construct the Huffman tree by repeatedly combining the least two
         * frequent nodes.
         */
        node = elems; /* next internal node of the tree */
        do {
          //pqremove(s, tree, n);  /* n = node of least frequency */
          /*** pqremove ***/
          n = s.heap[1 /*SMALLEST*/];
          s.heap[1 /*SMALLEST*/] = s.heap[s.heap_len--];
          pqdownheap(s, tree, 1 /*SMALLEST*/);
          /***/

          m = s.heap[1 /*SMALLEST*/]; /* m = node of next least frequency */

          s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
          s.heap[--s.heap_max] = m;

          /* Create a new node father of n and m */
          tree[node * 2] /*.Freq*/ = tree[n * 2] /*.Freq*/ + tree[m * 2] /*.Freq*/;
          s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
          tree[n * 2 + 1] /*.Dad*/ = tree[m * 2 + 1] /*.Dad*/ = node;

          /* and insert the new node in the heap */
          s.heap[1 /*SMALLEST*/] = node++;
          pqdownheap(s, tree, 1 /*SMALLEST*/);
        } while (s.heap_len >= 2);
        s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/];

        /* At this point, the fields freq and dad are set. We can now
         * generate the bit lengths.
         */
        gen_bitlen(s, desc);

        /* The field len is now set, we can generate the bit codes */
        gen_codes(tree, max_code, s.bl_count);
      };

      /* ===========================================================================
       * Scan a literal or distance tree to determine the frequencies of the codes
       * in the bit length tree.
       */
      var scan_tree = function scan_tree(s, tree, max_code) {
        //    deflate_state *s;
        //    ct_data *tree;   /* the tree to be scanned */
        //    int max_code;    /* and its largest code of non zero frequency */

        var n; /* iterates over all tree elements */
        var prevlen = -1; /* last emitted length */
        var curlen; /* length of current code */

        var nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

        var count = 0; /* repeat count of the current code */
        var max_count = 7; /* max repeat count */
        var min_count = 4; /* min repeat count */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }
        tree[(max_code + 1) * 2 + 1] /*.Len*/ = 0xffff; /* guard */

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            s.bl_tree[curlen * 2] /*.Freq*/ += count;
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              s.bl_tree[curlen * 2] /*.Freq*/++;
            }

            s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
          } else if (count <= 10) {
            s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
          } else {
            s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
          }

          count = 0;
          prevlen = curlen;
          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      };

      /* ===========================================================================
       * Send a literal or distance tree in compressed form, using the codes in
       * bl_tree.
       */
      var send_tree = function send_tree(s, tree, max_code) {
        //    deflate_state *s;
        //    ct_data *tree; /* the tree to be scanned */
        //    int max_code;       /* and its largest code of non zero frequency */

        var n; /* iterates over all tree elements */
        var prevlen = -1; /* last emitted length */
        var curlen; /* length of current code */

        var nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

        var count = 0; /* repeat count of the current code */
        var max_count = 7; /* max repeat count */
        var min_count = 4; /* min repeat count */

        /* tree[max_code+1].Len = -1; */ /* guard already set */
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }
        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            do {
              send_code(s, curlen, s.bl_tree);
            } while (--count !== 0);
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              send_code(s, curlen, s.bl_tree);
              count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
          } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
          } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
          }
          count = 0;
          prevlen = curlen;
          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      };

      /* ===========================================================================
       * Construct the Huffman tree for the bit lengths and return the index in
       * bl_order of the last bit length code to send.
       */
      var build_bl_tree = function build_bl_tree(s) {
        var max_blindex; /* index of last bit length code of non zero freq */

        /* Determine the bit length frequencies for literal and distance trees */
        scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
        scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

        /* Build the bit length tree: */
        build_tree(s, s.bl_desc);
        /* opt_len now includes the length of the tree representations, except
         * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
         */

        /* Determine the number of bit length codes to send. The pkzip format
         * requires that at least 4 bit length codes be sent. (appnote.txt says
         * 3 but the actual value used is 4.)
         */
        for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
          if (s.bl_tree[bl_order[max_blindex] * 2 + 1] /*.Len*/ !== 0) {
            break;
          }
        }
        /* Update opt_len to include the bit length tree and counts */
        s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
        //        s->opt_len, s->static_len));

        return max_blindex;
      };

      /* ===========================================================================
       * Send the header for a block using dynamic Huffman trees: the counts, the
       * lengths of the bit length codes, the literal tree and the distance tree.
       * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
       */
      var send_all_trees = function send_all_trees(s, lcodes, dcodes, blcodes) {
        //    deflate_state *s;
        //    int lcodes, dcodes, blcodes; /* number of codes for each tree */

        var rank; /* index in bl_order */

        //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
        //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
        //        "too many codes");
        //Tracev((stderr, "\nbl counts: "));
        send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
        send_bits(s, dcodes - 1, 5);
        send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */
        for (rank = 0; rank < blcodes; rank++) {
          //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
          send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1] /*.Len*/, 3);
        }
        //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
        //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
        //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
      };

      /* ===========================================================================
       * Check if the data type is TEXT or BINARY, using the following algorithm:
       * - TEXT if the two conditions below are satisfied:
       *    a) There are no non-portable control characters belonging to the
       *       "block list" (0..6, 14..25, 28..31).
       *    b) There is at least one printable character belonging to the
       *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
       * - BINARY otherwise.
       * - The following partially-portable control characters form a
       *   "gray list" that is ignored in this detection algorithm:
       *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
       * IN assertion: the fields Freq of dyn_ltree are set.
       */
      var detect_data_type = function detect_data_type(s) {
        /* block_mask is the bit mask of block-listed bytes
         * set bits 0..6, 14..25, and 28..31
         * 0xf3ffc07f = binary 11110011111111111100000001111111
         */
        var block_mask = 0xf3ffc07f;
        var n;

        /* Check for non-textual ("block-listed") bytes. */
        for (n = 0; n <= 31; n++, block_mask >>>= 1) {
          if (block_mask & 1 && s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
            return Z_BINARY;
          }
        }

        /* Check for textual ("allow-listed") bytes. */
        if (s.dyn_ltree[9 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[10 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[13 * 2] /*.Freq*/ !== 0) {
          return Z_TEXT;
        }
        for (n = 32; n < LITERALS$1; n++) {
          if (s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
            return Z_TEXT;
          }
        }

        /* There are no "block-listed" or "allow-listed" bytes:
         * this stream either is empty or has tolerated ("gray-listed") bytes only.
         */
        return Z_BINARY;
      };
      var static_init_done = false;

      /* ===========================================================================
       * Initialize the tree data structures for a new zlib stream.
       */
      var _tr_init$1 = function _tr_init$1(s) {
        if (!static_init_done) {
          tr_static_init();
          static_init_done = true;
        }
        s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
        s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
        s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
        s.bi_buf = 0;
        s.bi_valid = 0;

        /* Initialize the first block of the first file: */
        init_block(s);
      };

      /* ===========================================================================
       * Send a stored block
       */
      var _tr_stored_block$1 = function _tr_stored_block$1(s, buf, stored_len, last) {
        //DeflateState *s;
        //charf *buf;       /* input block */
        //ulg stored_len;   /* length of input block */
        //int last;         /* one if this is the last block for a file */

        send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */
        bi_windup(s); /* align on byte boundary */
        put_short(s, stored_len);
        put_short(s, ~stored_len);
        if (stored_len) {
          s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
        }
        s.pending += stored_len;
      };

      /* ===========================================================================
       * Send one empty static block to give enough lookahead for inflate.
       * This takes 10 bits, of which 7 may remain in the bit buffer.
       */
      var _tr_align$1 = function _tr_align$1(s) {
        send_bits(s, STATIC_TREES << 1, 3);
        send_code(s, END_BLOCK, static_ltree);
        bi_flush(s);
      };

      /* ===========================================================================
       * Determine the best encoding for the current block: dynamic trees, static
       * trees or store, and write out the encoded block.
       */
      var _tr_flush_block$1 = function _tr_flush_block$1(s, buf, stored_len, last) {
        //DeflateState *s;
        //charf *buf;       /* input block, or NULL if too old */
        //ulg stored_len;   /* length of input block */
        //int last;         /* one if this is the last block for a file */

        var opt_lenb, static_lenb; /* opt_len and static_len in bytes */
        var max_blindex = 0; /* index of last bit length code of non zero freq */

        /* Build the Huffman trees unless a stored block is forced */
        if (s.level > 0) {
          /* Check if the file is binary or text */
          if (s.strm.data_type === Z_UNKNOWN$1) {
            s.strm.data_type = detect_data_type(s);
          }

          /* Construct the literal and distance trees */
          build_tree(s, s.l_desc);
          // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          build_tree(s, s.d_desc);
          // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));
          /* At this point, opt_len and static_len are the total bit lengths of
           * the compressed block data, excluding the tree representations.
           */

          /* Build the bit length tree for the above two trees, and get the index
           * in bl_order of the last bit length code to send.
           */
          max_blindex = build_bl_tree(s);

          /* Determine the best encoding. Compute the block lengths in bytes. */
          opt_lenb = s.opt_len + 3 + 7 >>> 3;
          static_lenb = s.static_len + 3 + 7 >>> 3;

          // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
          //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
          //        s->sym_next / 3));

          if (static_lenb <= opt_lenb) {
            opt_lenb = static_lenb;
          }
        } else {
          // Assert(buf != (char*)0, "lost buf");
          opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
        }

        if (stored_len + 4 <= opt_lenb && buf !== -1) {
          /* 4: two words for the lengths */

          /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
           * Otherwise we can't have processed more than WSIZE input bytes since
           * the last block flush, because compression would have been
           * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
           * transform a block into a stored block.
           */
          _tr_stored_block$1(s, buf, stored_len, last);
        } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
          send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
          compress_block(s, static_ltree, static_dtree);
        } else {
          send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
          send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
          compress_block(s, s.dyn_ltree, s.dyn_dtree);
        }
        // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
        /* The above check is made mod 2^32, for files larger than 512 MB
         * and uLong implemented on 32 bits.
         */
        init_block(s);
        if (last) {
          bi_windup(s);
        }
        // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
        //       s->compressed_len-7*last));
      };

      /* ===========================================================================
       * Save the match info and tally the frequency counts. Return true if
       * the current block must be flushed.
       */
      var _tr_tally$1 = function _tr_tally$1(s, dist, lc) {
        //    deflate_state *s;
        //    unsigned dist;  /* distance of matched string */
        //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

        s.pending_buf[s.sym_buf + s.sym_next++] = dist;
        s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
        s.pending_buf[s.sym_buf + s.sym_next++] = lc;
        if (dist === 0) {
          /* lc is the unmatched char */
          s.dyn_ltree[lc * 2] /*.Freq*/++;
        } else {
          s.matches++;
          /* Here, lc is the match length - MIN_MATCH */
          dist--; /* dist = match distance - 1 */
          //Assert((ush)dist < (ush)MAX_DIST(s) &&
          //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
          //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

          s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2] /*.Freq*/++;
          s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
        }

        return s.sym_next === s.sym_end;
      };
      var _tr_init_1 = _tr_init$1;
      var _tr_stored_block_1 = _tr_stored_block$1;
      var _tr_flush_block_1 = _tr_flush_block$1;
      var _tr_tally_1 = _tr_tally$1;
      var _tr_align_1 = _tr_align$1;
      var trees = {
        _tr_init: _tr_init_1,
        _tr_stored_block: _tr_stored_block_1,
        _tr_flush_block: _tr_flush_block_1,
        _tr_tally: _tr_tally_1,
        _tr_align: _tr_align_1
      };

      // Note: adler32 takes 12% for level 0 and 2% for level 6.
      // It isn't worth it to make additional optimizations as in original.
      // Small size is preferable.

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var adler32 = function adler32(adler, buf, len, pos) {
        var s1 = adler & 0xffff | 0,
          s2 = adler >>> 16 & 0xffff | 0,
          n = 0;
        while (len !== 0) {
          // Set limit ~ twice less than 5552, to keep
          // s2 in 31-bits, because we force signed ints.
          // in other case %= will fail.
          n = len > 2000 ? 2000 : len;
          len -= n;
          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);
          s1 %= 65521;
          s2 %= 65521;
        }
        return s1 | s2 << 16 | 0;
      };
      var adler32_1 = adler32;

      // Note: we can't get significant speed boost here.
      // So write code to minimize size - no pregenerated tables
      // and array tools dependencies.

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      // Use ordinary array, since untyped makes no boost here
      var makeTable = function makeTable() {
        var c,
          table = [];
        for (var n = 0; n < 256; n++) {
          c = n;
          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }
          table[n] = c;
        }
        return table;
      };

      // Create table on load. Just 255 signed longs. Not a problem.
      var crcTable = new Uint32Array(makeTable());
      var crc32 = function crc32(crc, buf, len, pos) {
        var t = crcTable;
        var end = pos + len;
        crc ^= -1;
        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }
        return crc ^ -1; // >>> 0;
      };

      var crc32_1 = crc32;

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var messages = {
        2: 'need dictionary',
        /* Z_NEED_DICT       2  */
        1: 'stream end',
        /* Z_STREAM_END      1  */
        0: '',
        /* Z_OK              0  */
        '-1': 'file error',
        /* Z_ERRNO         (-1) */
        '-2': 'stream error',
        /* Z_STREAM_ERROR  (-2) */
        '-3': 'data error',
        /* Z_DATA_ERROR    (-3) */
        '-4': 'insufficient memory',
        /* Z_MEM_ERROR     (-4) */
        '-5': 'buffer error',
        /* Z_BUF_ERROR     (-5) */
        '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var constants$2 = {
        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        /* Return codes for the compression/decompression functions. Negative values
        * are errors, positive values are used for special but normal events.
        */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,

        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,
        /* The deflate compression method */
        Z_DEFLATED: 8
        //Z_NULL:                 null // Use -1 or null inline, depending on var type
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var _tr_init = trees._tr_init,
        _tr_stored_block = trees._tr_stored_block,
        _tr_flush_block = trees._tr_flush_block,
        _tr_tally = trees._tr_tally,
        _tr_align = trees._tr_align;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      var Z_NO_FLUSH$2 = constants$2.Z_NO_FLUSH,
        Z_PARTIAL_FLUSH = constants$2.Z_PARTIAL_FLUSH,
        Z_FULL_FLUSH$1 = constants$2.Z_FULL_FLUSH,
        Z_FINISH$3 = constants$2.Z_FINISH,
        Z_BLOCK$1 = constants$2.Z_BLOCK,
        Z_OK$3 = constants$2.Z_OK,
        Z_STREAM_END$3 = constants$2.Z_STREAM_END,
        Z_STREAM_ERROR$2 = constants$2.Z_STREAM_ERROR,
        Z_DATA_ERROR$2 = constants$2.Z_DATA_ERROR,
        Z_BUF_ERROR$1 = constants$2.Z_BUF_ERROR,
        Z_DEFAULT_COMPRESSION$1 = constants$2.Z_DEFAULT_COMPRESSION,
        Z_FILTERED = constants$2.Z_FILTERED,
        Z_HUFFMAN_ONLY = constants$2.Z_HUFFMAN_ONLY,
        Z_RLE = constants$2.Z_RLE,
        Z_FIXED = constants$2.Z_FIXED,
        Z_DEFAULT_STRATEGY$1 = constants$2.Z_DEFAULT_STRATEGY,
        Z_UNKNOWN = constants$2.Z_UNKNOWN,
        Z_DEFLATED$2 = constants$2.Z_DEFLATED;

      /*============================================================================*/

      var MAX_MEM_LEVEL = 9;
      /* Maximum value for memLevel in deflateInit2 */
      var MAX_WBITS$1 = 15;
      /* 32K LZ77 window */
      var DEF_MEM_LEVEL = 8;
      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */
      var LITERALS = 256;
      /* number of literal bytes 0..255 */
      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */
      var D_CODES = 30;
      /* number of distance codes */
      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */
      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */
      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
      var PRESET_DICT = 0x20;
      var INIT_STATE = 42; /* zlib header -> BUSY_STATE */
      //#ifdef GZIP
      var GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */
      //#endif
      var EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */
      var NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */
      var COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */
      var HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */
      var BUSY_STATE = 113; /* deflate -> FINISH_STATE */
      var FINISH_STATE = 666; /* stream complete */

      var BS_NEED_MORE = 1; /* block not completed, need more input or more output */
      var BS_BLOCK_DONE = 2; /* block flush performed */
      var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
      var BS_FINISH_DONE = 4; /* finish done, accept no more input or output */

      var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

      var err = function err(strm, errorCode) {
        strm.msg = messages[errorCode];
        return errorCode;
      };
      var rank = function rank(f) {
        return f * 2 - (f > 4 ? 9 : 0);
      };
      var zero = function zero(buf) {
        var len = buf.length;
        while (--len >= 0) {
          buf[len] = 0;
        }
      };

      /* ===========================================================================
       * Slide the hash table when sliding the window down (could be avoided with 32
       * bit values at the expense of memory usage). We slide even when level == 0 to
       * keep the hash table consistent if we switch back to level > 0 later.
       */
      var slide_hash = function slide_hash(s) {
        var n, m;
        var p;
        var wsize = s.w_size;
        n = s.hash_size;
        p = n;
        do {
          m = s.head[--p];
          s.head[p] = m >= wsize ? m - wsize : 0;
        } while (--n);
        n = wsize;
        //#ifndef FASTEST
        p = n;
        do {
          m = s.prev[--p];
          s.prev[p] = m >= wsize ? m - wsize : 0;
          /* If n is not on any hash chain, prev[n] is garbage but
           * its value will never be used.
           */
        } while (--n);
        //#endif
      };

      /* eslint-disable new-cap */
      var HASH_ZLIB = function HASH_ZLIB(s, prev, data) {
        return (prev << s.hash_shift ^ data) & s.hash_mask;
      };
      // This hash causes less collisions, https://github.com/nodeca/pako/issues/135
      // But breaks binary compatibility
      //let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
      var HASH = HASH_ZLIB;

      /* =========================================================================
       * Flush as much pending output as possible. All deflate() output, except for
       * some deflate_stored() output, goes through this function so some
       * applications may wish to modify it to avoid allocating a large
       * strm->next_out buffer and copying into it. (See also read_buf()).
       */
      var flush_pending = function flush_pending(strm) {
        var s = strm.state;

        //_tr_flush_bits(s);
        var len = s.pending;
        if (len > strm.avail_out) {
          len = strm.avail_out;
        }
        if (len === 0) {
          return;
        }
        strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
        strm.next_out += len;
        s.pending_out += len;
        strm.total_out += len;
        strm.avail_out -= len;
        s.pending -= len;
        if (s.pending === 0) {
          s.pending_out = 0;
        }
      };
      var flush_block_only = function flush_block_only(s, last) {
        _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
        s.block_start = s.strstart;
        flush_pending(s.strm);
      };
      var put_byte = function put_byte(s, b) {
        s.pending_buf[s.pending++] = b;
      };

      /* =========================================================================
       * Put a short in the pending buffer. The 16-bit value is put in MSB order.
       * IN assertion: the stream state is correct and there is enough room in
       * pending_buf.
       */
      var putShortMSB = function putShortMSB(s, b) {
        //  put_byte(s, (Byte)(b >> 8));
        //  put_byte(s, (Byte)(b & 0xff));
        s.pending_buf[s.pending++] = b >>> 8 & 0xff;
        s.pending_buf[s.pending++] = b & 0xff;
      };

      /* ===========================================================================
       * Read a new buffer from the current input stream, update the adler32
       * and total number of bytes read.  All deflate() input goes through
       * this function so some applications may wish to modify it to avoid
       * allocating a large strm->input buffer and copying from it.
       * (See also flush_pending()).
       */
      var read_buf = function read_buf(strm, buf, start, size) {
        var len = strm.avail_in;
        if (len > size) {
          len = size;
        }
        if (len === 0) {
          return 0;
        }
        strm.avail_in -= len;

        // zmemcpy(buf, strm->next_in, len);
        buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
        if (strm.state.wrap === 1) {
          strm.adler = adler32_1(strm.adler, buf, len, start);
        } else if (strm.state.wrap === 2) {
          strm.adler = crc32_1(strm.adler, buf, len, start);
        }
        strm.next_in += len;
        strm.total_in += len;
        return len;
      };

      /* ===========================================================================
       * Set match_start to the longest match starting at the given string and
       * return its length. Matches shorter or equal to prev_length are discarded,
       * in which case the result is equal to prev_length and match_start is
       * garbage.
       * IN assertions: cur_match is the head of the hash chain for the current
       *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
       * OUT assertion: the match length is not greater than s->lookahead.
       */
      var longest_match = function longest_match(s, cur_match) {
        var chain_length = s.max_chain_length; /* max hash chain length */
        var scan = s.strstart; /* current string */
        var match; /* matched string */
        var len; /* length of current match */
        var best_len = s.prev_length; /* best match length so far */
        var nice_match = s.nice_match; /* stop if match long enough */
        var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/;

        var _win = s.window; // shortcut

        var wmask = s.w_mask;
        var prev = s.prev;

        /* Stop when cur_match becomes <= limit. To simplify the code,
         * we prevent matches with the string of window index 0.
         */

        var strend = s.strstart + MAX_MATCH;
        var scan_end1 = _win[scan + best_len - 1];
        var scan_end = _win[scan + best_len];

        /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
         * It is easy to get rid of this optimization if necessary.
         */
        // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

        /* Do not waste too much time if we already have a good match: */
        if (s.prev_length >= s.good_match) {
          chain_length >>= 2;
        }
        /* Do not look for matches beyond the end of the input. This is necessary
         * to make deflate deterministic.
         */
        if (nice_match > s.lookahead) {
          nice_match = s.lookahead;
        }

        // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

        do {
          // Assert(cur_match < s->strstart, "no future");
          match = cur_match;

          /* Skip to next match if the match length cannot increase
           * or if the match length is less than 2.  Note that the checks below
           * for insufficient lookahead only occur occasionally for performance
           * reasons.  Therefore uninitialized memory will be accessed, and
           * conditional jumps will be made that depend on those values.
           * However the length of the match is limited to the lookahead, so
           * the output of deflate is not affected by the uninitialized values.
           */

          if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
            continue;
          }

          /* The check at best_len-1 can be removed because it will be made
           * again later. (This heuristic is not always a win.)
           * It is not necessary to compare scan[2] and match[2] since they
           * are always equal when the other bytes match, given that
           * the hash keys are equal and that HASH_BITS >= 8.
           */
          scan += 2;
          match++;
          // Assert(*scan == *match, "match[2]?");

          /* We check for insufficient lookahead only every 8th comparison;
           * the 256th check will be made at strstart+258.
           */
          do {
            /*jshint noempty:false*/
          } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);

          // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

          len = MAX_MATCH - (strend - scan);
          scan = strend - MAX_MATCH;
          if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) {
              break;
            }
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
          }
        } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
        if (best_len <= s.lookahead) {
          return best_len;
        }
        return s.lookahead;
      };

      /* ===========================================================================
       * Fill the window when the lookahead becomes insufficient.
       * Updates strstart and lookahead.
       *
       * IN assertion: lookahead < MIN_LOOKAHEAD
       * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
       *    At least one byte has been read, or avail_in == 0; reads are
       *    performed for at least two bytes (required for the zip translate_eol
       *    option -- not supported here).
       */
      var fill_window = function fill_window(s) {
        var _w_size = s.w_size;
        var n, more, str;

        //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

        do {
          more = s.window_size - s.lookahead - s.strstart;

          // JS ints have 32 bit, block below not needed
          /* Deal with !@#$% 64K limit: */
          //if (sizeof(int) <= 2) {
          //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
          //        more = wsize;
          //
          //  } else if (more == (unsigned)(-1)) {
          //        /* Very unlikely, but possible on 16 bit machine if
          //         * strstart == 0 && lookahead == 1 (input done a byte at time)
          //         */
          //        more--;
          //    }
          //}

          /* If the window is almost full and there is insufficient lookahead,
           * move the upper half to the lower one to make room in the upper half.
           */
          if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */
            s.block_start -= _w_size;
            if (s.insert > s.strstart) {
              s.insert = s.strstart;
            }
            slide_hash(s);
            more += _w_size;
          }
          if (s.strm.avail_in === 0) {
            break;
          }

          /* If there was no sliding:
           *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
           *    more == window_size - lookahead - strstart
           * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
           * => more >= window_size - 2*WSIZE + 2
           * In the BIG_MEM or MMAP case (not yet supported),
           *   window_size == input_size + MIN_LOOKAHEAD  &&
           *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
           * Otherwise, window_size == 2*WSIZE so more >= 2.
           * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
           */
          //Assert(more >= 2, "more < 2");
          n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
          s.lookahead += n;

          /* Initialize the hash value now that we have some input: */
          if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];

            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
            s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while (s.insert) {
              /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
              s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
              s.prev[str & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = str;
              str++;
              s.insert--;
              if (s.lookahead + s.insert < MIN_MATCH) {
                break;
              }
            }
          }
          /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
           * but this is not important since only literal bytes will be emitted.
           */
        } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

        /* If the WIN_INIT bytes after the end of the current data have never been
         * written, then zero those bytes in order to avoid memory check reports of
         * the use of uninitialized (or uninitialised as Julian writes) bytes by
         * the longest match routines.  Update the high water mark for the next
         * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
         * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
         */
        //  if (s.high_water < s.window_size) {
        //    const curr = s.strstart + s.lookahead;
        //    let init = 0;
        //
        //    if (s.high_water < curr) {
        //      /* Previous high water mark below current data -- zero WIN_INIT
        //       * bytes or up to end of window, whichever is less.
        //       */
        //      init = s.window_size - curr;
        //      if (init > WIN_INIT)
        //        init = WIN_INIT;
        //      zmemzero(s->window + curr, (unsigned)init);
        //      s->high_water = curr + init;
        //    }
        //    else if (s->high_water < (ulg)curr + WIN_INIT) {
        //      /* High water mark at or above current data, but below current data
        //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
        //       * to end of window, whichever is less.
        //       */
        //      init = (ulg)curr + WIN_INIT - s->high_water;
        //      if (init > s->window_size - s->high_water)
        //        init = s->window_size - s->high_water;
        //      zmemzero(s->window + s->high_water, (unsigned)init);
        //      s->high_water += init;
        //    }
        //  }
        //
        //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
        //    "not enough room for search");
      };

      /* ===========================================================================
       * Copy without compression as much as possible from the input stream, return
       * the current block state.
       *
       * In case deflateParams() is used to later switch to a non-zero compression
       * level, s->matches (otherwise unused when storing) keeps track of the number
       * of hash table slides to perform. If s->matches is 1, then one hash table
       * slide will be done when switching. If s->matches is 2, the maximum value
       * allowed here, then the hash table will be cleared, since two or more slides
       * is the same as a clear.
       *
       * deflate_stored() is written to minimize the number of times an input byte is
       * copied. It is most efficient with large input and output buffers, which
       * maximizes the opportunites to have a single copy from next_in to next_out.
       */
      var deflate_stored = function deflate_stored(s, flush) {
        /* Smallest worthy block size when not flushing or finishing. By default
         * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
         * large input and output buffers, the stored block size will be larger.
         */
        var min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

        /* Copy as many min_block or larger stored blocks directly to next_out as
         * possible. If flushing, copy the remaining available input to next_out as
         * stored blocks, if there is enough space.
         */
        var len,
          left,
          have,
          last = 0;
        var used = s.strm.avail_in;
        do {
          /* Set len to the maximum size block that we can copy directly with the
           * available input data and output space. Set left to how much of that
           * would be copied from what's left in the window.
           */
          len = 65535 /* MAX_STORED */; /* maximum deflate stored block length */
          have = s.bi_valid + 42 >> 3; /* number of header bytes */
          if (s.strm.avail_out < have) {
            /* need room for header */
            break;
          }
          /* maximum stored block length that will fit in avail_out: */
          have = s.strm.avail_out - have;
          left = s.strstart - s.block_start; /* bytes left in window */
          if (len > left + s.strm.avail_in) {
            len = left + s.strm.avail_in; /* limit len to the input */
          }

          if (len > have) {
            len = have; /* limit len to the output */
          }

          /* If the stored block would be less than min_block in length, or if
           * unable to copy all of the available input when flushing, then try
           * copying to the window and the pending buffer instead. Also don't
           * write an empty block when flushing -- deflate() does that.
           */
          if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) {
            break;
          }

          /* Make a dummy stored block in pending to get the header bytes,
           * including any pending bits. This also updates the debugging counts.
           */
          last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
          _tr_stored_block(s, 0, 0, last);

          /* Replace the lengths in the dummy stored block with len. */
          s.pending_buf[s.pending - 4] = len;
          s.pending_buf[s.pending - 3] = len >> 8;
          s.pending_buf[s.pending - 2] = ~len;
          s.pending_buf[s.pending - 1] = ~len >> 8;

          /* Write the stored block header bytes. */
          flush_pending(s.strm);

          //#ifdef ZLIB_DEBUG
          //    /* Update debugging counts for the data about to be copied. */
          //    s->compressed_len += len << 3;
          //    s->bits_sent += len << 3;
          //#endif

          /* Copy uncompressed bytes from the window to next_out. */
          if (left) {
            if (left > len) {
              left = len;
            }
            //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
            s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
            s.strm.next_out += left;
            s.strm.avail_out -= left;
            s.strm.total_out += left;
            s.block_start += left;
            len -= left;
          }

          /* Copy uncompressed bytes directly from next_in to next_out, updating
           * the check value.
           */
          if (len) {
            read_buf(s.strm, s.strm.output, s.strm.next_out, len);
            s.strm.next_out += len;
            s.strm.avail_out -= len;
            s.strm.total_out += len;
          }
        } while (last === 0);

        /* Update the sliding window with the last s->w_size bytes of the copied
         * data, or append all of the copied data to the existing window if less
         * than s->w_size bytes were copied. Also update the number of bytes to
         * insert in the hash tables, in the event that deflateParams() switches to
         * a non-zero compression level.
         */
        used -= s.strm.avail_in; /* number of input bytes directly copied */
        if (used) {
          /* If any input was used, then no unused input remains in the window,
           * therefore s->block_start == s->strstart.
           */
          if (used >= s.w_size) {
            /* supplant the previous history */
            s.matches = 2; /* clear hash */
            //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
            s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
            s.strstart = s.w_size;
            s.insert = s.strstart;
          } else {
            if (s.window_size - s.strstart <= used) {
              /* Slide the window down. */
              s.strstart -= s.w_size;
              //zmemcpy(s->window, s->window + s->w_size, s->strstart);
              s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
              if (s.matches < 2) {
                s.matches++; /* add a pending slide_hash() */
              }

              if (s.insert > s.strstart) {
                s.insert = s.strstart;
              }
            }
            //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
            s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
            s.strstart += used;
            s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
          }
          s.block_start = s.strstart;
        }
        if (s.high_water < s.strstart) {
          s.high_water = s.strstart;
        }

        /* If the last block was written to next_out, then done. */
        if (last) {
          return BS_FINISH_DONE;
        }

        /* If flushing and all input has been consumed, then done. */
        if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) {
          return BS_BLOCK_DONE;
        }

        /* Fill the window with any remaining input. */
        have = s.window_size - s.strstart;
        if (s.strm.avail_in > have && s.block_start >= s.w_size) {
          /* Slide the window down. */
          s.block_start -= s.w_size;
          s.strstart -= s.w_size;
          //zmemcpy(s->window, s->window + s->w_size, s->strstart);
          s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
          if (s.matches < 2) {
            s.matches++; /* add a pending slide_hash() */
          }

          have += s.w_size; /* more space now */
          if (s.insert > s.strstart) {
            s.insert = s.strstart;
          }
        }
        if (have > s.strm.avail_in) {
          have = s.strm.avail_in;
        }
        if (have) {
          read_buf(s.strm, s.window, s.strstart, have);
          s.strstart += have;
          s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
        }
        if (s.high_water < s.strstart) {
          s.high_water = s.strstart;
        }

        /* There was not enough avail_out to write a complete worthy or flushed
         * stored block to next_out. Write a stored block to pending instead, if we
         * have enough input for a worthy block, or if flushing and there is enough
         * room for the remaining input as a stored block in the pending buffer.
         */
        have = s.bi_valid + 42 >> 3; /* number of header bytes */
        /* maximum stored block length that will fit in pending: */
        have = s.pending_buf_size - have > 65535 /* MAX_STORED */ ? 65535 /* MAX_STORED */ : s.pending_buf_size - have;
        min_block = have > s.w_size ? s.w_size : have;
        left = s.strstart - s.block_start;
        if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
          len = left > have ? have : left;
          last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
          _tr_stored_block(s, s.block_start, len, last);
          s.block_start += len;
          flush_pending(s.strm);
        }

        /* We've done all we can with the available input and output. */
        return last ? BS_FINISH_STARTED : BS_NEED_MORE;
      };

      /* ===========================================================================
       * Compress as much as possible from the input stream, return the current
       * block state.
       * This function does not perform lazy evaluation of matches and inserts
       * new strings in the dictionary only for unmatched strings or for short
       * matches. It is used only for the fast compression options.
       */
      var deflate_fast = function deflate_fast(s, flush) {
        var hash_head; /* head of the hash chain */
        var bflush; /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break; /* flush the current block */
            }
          }

          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */
          hash_head = 0 /*NIL*/;
          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }

          /* Find the longest match, discarding those <= prev_length.
           * At this point we have always match_length < MIN_MATCH
           */
          if (hash_head !== 0 /*NIL*/ && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
             * of window index 0 (in particular we have to avoid a match
             * of the string with itself at the start of the input file).
             */
            s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */
          }

          if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                           s.match_length - MIN_MATCH, bflush); ***/
            bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;

            /* Insert new strings in the hash table only if the match length
             * is not too large. This saves time but degrades compression.
             */
            if (s.match_length <= s.max_lazy_match /*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
              s.match_length--; /* string at strstart already in table */
              do {
                s.strstart++;
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
                /* strstart never exceeds WSIZE-MAX_MATCH, so there are
                 * always MIN_MATCH bytes ahead.
                 */
              } while (--s.match_length !== 0);
              s.strstart++;
            } else {
              s.strstart += s.match_length;
              s.match_length = 0;
              s.ins_h = s.window[s.strstart];
              /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
              s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

              //#if MIN_MATCH != 3
              //                Call UPDATE_HASH() MIN_MATCH-3 more times
              //#endif
              /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
               * matter since it will be recomputed at next deflate call.
               */
            }
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }

        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH$3) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.sym_next) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_BLOCK_DONE;
      };

      /* ===========================================================================
       * Same as above, but achieves better compression. We use a lazy
       * evaluation for matches: a match is finally adopted only if there is
       * no better match at the next window position.
       */
      var deflate_slow = function deflate_slow(s, flush) {
        var hash_head; /* head of hash chain */
        var bflush; /* set if current block must be flushed */

        var max_insert;

        /* Process the input block. */
        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            } /* flush the current block */
          }

          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */
          hash_head = 0 /*NIL*/;
          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }

          /* Find the longest match, discarding those <= prev_length.
           */
          s.prev_length = s.match_length;
          s.prev_match = s.match_start;
          s.match_length = MIN_MATCH - 1;
          if (hash_head !== 0 /*NIL*/ && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD /*MAX_DIST(s)*/) {
            /* To simplify the code, we prevent matches with the string
             * of window index 0 (in particular we have to avoid a match
             * of the string with itself at the start of the input file).
             */
            s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */

            if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/)) {
              /* If prev_match is also MIN_MATCH, match_start is garbage
               * but we will ignore the current match anyway.
               */
              s.match_length = MIN_MATCH - 1;
            }
          }
          /* If there was a match at the previous step and the current
           * match is not better, output the previous match:
           */
          if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */

            //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                           s.prev_length - MIN_MATCH, bflush);***/
            bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
             * strstart-1 and strstart are already inserted. If there is not
             * enough lookahead, the last two strings are not inserted in
             * the hash table.
             */
            s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do {
              if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
              }
            } while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
              /*** FLUSH_BLOCK(s, 0); ***/
              flush_block_only(s, false);
              if (s.strm.avail_out === 0) {
                return BS_NEED_MORE;
              }
              /***/
            }
          } else if (s.match_available) {
            /* If there was no match at the previous position, output a
             * single literal. If there was a match but the current match
             * is longer, truncate the previous match to a single literal.
             */
            //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
            bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) {
              /*** FLUSH_BLOCK_ONLY(s, 0) ***/
              flush_block_only(s, false);
              /***/
            }

            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          } else {
            /* There is no previous match to compare with, wait for
             * the next step to decide.
             */
            s.match_available = 1;
            s.strstart++;
            s.lookahead--;
          }
        }
        //Assert (flush != Z_NO_FLUSH, "no flush?");
        if (s.match_available) {
          //Tracevv((stderr,"%c", s->window[s->strstart-1]));
          /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
          bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
          s.match_available = 0;
        }
        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH$3) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.sym_next) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_BLOCK_DONE;
      };

      /* ===========================================================================
       * For Z_RLE, simply look for runs of bytes, generate matches only of distance
       * one.  Do not maintain a hash table.  (It will be regenerated if this run of
       * deflate switches away from Z_RLE.)
       */
      var deflate_rle = function deflate_rle(s, flush) {
        var bflush; /* set if current block must be flushed */
        var prev; /* byte at distance one to match */
        var scan, strend; /* scan goes up to strend for length of run */

        var _win = s.window;
        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the longest run, plus one for the unrolled loop.
           */
          if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            } /* flush the current block */
          }

          /* See how many times the previous byte repeats */
          s.match_length = 0;
          if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
              strend = s.strstart + MAX_MATCH;
              do {
                /*jshint noempty:false*/
              } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
              s.match_length = MAX_MATCH - (strend - scan);
              if (s.match_length > s.lookahead) {
                s.match_length = s.lookahead;
              }
            }
            //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
          }

          /* Emit match if have run of MIN_MATCH or longer, else emit literal */
          if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);

            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
            bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }

        s.insert = 0;
        if (flush === Z_FINISH$3) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.sym_next) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_BLOCK_DONE;
      };

      /* ===========================================================================
       * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
       * (It will be regenerated if this run of deflate switches away from Huffman.)
       */
      var deflate_huff = function deflate_huff(s, flush) {
        var bflush; /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we have a literal to write. */
          if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
              if (flush === Z_NO_FLUSH$2) {
                return BS_NEED_MORE;
              }
              break; /* flush the current block */
            }
          }

          /* Output a literal byte */
          s.match_length = 0;
          //Tracevv((stderr,"%c", s->window[s->strstart]));
          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
          bflush = _tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }

        s.insert = 0;
        if (flush === Z_FINISH$3) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.sym_next) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_BLOCK_DONE;
      };

      /* Values for max_lazy_match, good_match and max_chain_length, depending on
       * the desired pack level (0..9). The values given below have been tuned to
       * exclude worst case performance for pathological files. Better values may be
       * found for specific files.
       */
      function Config(good_length, max_lazy, nice_length, max_chain, func) {
        this.good_length = good_length;
        this.max_lazy = max_lazy;
        this.nice_length = nice_length;
        this.max_chain = max_chain;
        this.func = func;
      }
      var configuration_table = [/*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored), /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast), /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast), /* 2 */
      new Config(4, 6, 32, 32, deflate_fast), /* 3 */

      new Config(4, 4, 16, 16, deflate_slow), /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow), /* 5 */
      new Config(8, 16, 128, 128, deflate_slow), /* 6 */
      new Config(8, 32, 128, 256, deflate_slow), /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow), /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow) /* 9 max compression */];

      /* ===========================================================================
       * Initialize the "longest match" routines for a new zlib stream
       */
      var lm_init = function lm_init(s) {
        s.window_size = 2 * s.w_size;

        /*** CLEAR_HASH(s); ***/
        zero(s.head); // Fill with NIL (= 0);

        /* Set the default configuration parameters:
         */
        s.max_lazy_match = configuration_table[s.level].max_lazy;
        s.good_match = configuration_table[s.level].good_length;
        s.nice_match = configuration_table[s.level].nice_length;
        s.max_chain_length = configuration_table[s.level].max_chain;
        s.strstart = 0;
        s.block_start = 0;
        s.lookahead = 0;
        s.insert = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        s.ins_h = 0;
      };
      function DeflateState() {
        this.strm = null; /* pointer back to this zlib stream */
        this.status = 0; /* as the name implies */
        this.pending_buf = null; /* output still pending */
        this.pending_buf_size = 0; /* size of pending_buf */
        this.pending_out = 0; /* next pending byte to output to the stream */
        this.pending = 0; /* nb of bytes in the pending buffer */
        this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
        this.gzhead = null; /* gzip header information to write */
        this.gzindex = 0; /* where in extra, name, or comment */
        this.method = Z_DEFLATED$2; /* can only be DEFLATED */
        this.last_flush = -1; /* value of flush param for previous deflate call */

        this.w_size = 0; /* LZ77 window size (32K by default) */
        this.w_bits = 0; /* log2(w_size)  (8..16) */
        this.w_mask = 0; /* w_size - 1 */

        this.window = null;
        /* Sliding window. Input bytes are read into the second half of the window,
         * and move to the first half later to keep a dictionary of at least wSize
         * bytes. With this organization, matches are limited to a distance of
         * wSize-MAX_MATCH bytes, but this ensures that IO is always
         * performed with a length multiple of the block size.
         */

        this.window_size = 0;
        /* Actual size of window: 2*wSize, except when the user input buffer
         * is directly used as sliding window.
         */

        this.prev = null;
        /* Link to older string with same hash index. To limit the size of this
         * array to 64K, this link is maintained only for the last 32K strings.
         * An index in this array is thus a window index modulo 32K.
         */

        this.head = null; /* Heads of the hash chains or NIL. */

        this.ins_h = 0; /* hash index of string to be inserted */
        this.hash_size = 0; /* number of elements in hash table */
        this.hash_bits = 0; /* log2(hash_size) */
        this.hash_mask = 0; /* hash_size-1 */

        this.hash_shift = 0;
        /* Number of bits by which ins_h must be shifted at each input
         * step. It must be such that after MIN_MATCH steps, the oldest
         * byte no longer takes part in the hash key, that is:
         *   hash_shift * MIN_MATCH >= hash_bits
         */

        this.block_start = 0;
        /* Window position at the beginning of the current output block. Gets
         * negative when the window is moved backwards.
         */

        this.match_length = 0; /* length of best match */
        this.prev_match = 0; /* previous match */
        this.match_available = 0; /* set if previous match exists */
        this.strstart = 0; /* start of string to insert */
        this.match_start = 0; /* start of matching string */
        this.lookahead = 0; /* number of valid bytes ahead in window */

        this.prev_length = 0;
        /* Length of the best match at previous step. Matches not greater than this
         * are discarded. This is used in the lazy match evaluation.
         */

        this.max_chain_length = 0;
        /* To speed up deflation, hash chains are never searched beyond this
         * length.  A higher limit improves compression ratio but degrades the
         * speed.
         */

        this.max_lazy_match = 0;
        /* Attempt to find a better match only when the current match is strictly
         * smaller than this value. This mechanism is used only for compression
         * levels >= 4.
         */
        // That's alias to max_lazy_match, don't use directly
        //this.max_insert_length = 0;
        /* Insert new strings in the hash table only if the match length is not
         * greater than this length. This saves time but degrades compression.
         * max_insert_length is used only for compression levels <= 3.
         */

        this.level = 0; /* compression level (1..9) */
        this.strategy = 0; /* favor or force Huffman coding*/

        this.good_match = 0;
        /* Use a faster search when the previous match is longer than this */

        this.nice_match = 0; /* Stop searching when current match exceeds this */

        /* used by trees.c: */

        /* Didn't use ct_data typedef below to suppress compiler warning */

        // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
        // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
        // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

        // Use flat array of DOUBLE size, with interleaved fata,
        // because JS does not support effective
        this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
        this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
        this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
        zero(this.dyn_ltree);
        zero(this.dyn_dtree);
        zero(this.bl_tree);
        this.l_desc = null; /* desc. for literal tree */
        this.d_desc = null; /* desc. for distance tree */
        this.bl_desc = null; /* desc. for bit length tree */

        //ush bl_count[MAX_BITS+1];
        this.bl_count = new Uint16Array(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */

        //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
        this.heap = new Uint16Array(2 * L_CODES + 1); /* heap used to build the Huffman trees */
        zero(this.heap);
        this.heap_len = 0; /* number of elements in the heap */
        this.heap_max = 0; /* element of largest frequency */
        /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
         * The same heap array is used to build all trees.
         */

        this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
        zero(this.depth);
        /* Depth of each subtree used as tie breaker for trees of equal frequency
         */

        this.sym_buf = 0; /* buffer for distances and literals/lengths */

        this.lit_bufsize = 0;
        /* Size of match buffer for literals/lengths.  There are 4 reasons for
         * limiting lit_bufsize to 64K:
         *   - frequencies can be kept in 16 bit counters
         *   - if compression is not successful for the first block, all input
         *     data is still in the window so we can still emit a stored block even
         *     when input comes from standard input.  (This can also be done for
         *     all blocks if lit_bufsize is not greater than 32K.)
         *   - if compression is not successful for a file smaller than 64K, we can
         *     even emit a stored file instead of a stored block (saving 5 bytes).
         *     This is applicable only for zip (not gzip or zlib).
         *   - creating new Huffman trees less frequently may not provide fast
         *     adaptation to changes in the input data statistics. (Take for
         *     example a binary file with poorly compressible code followed by
         *     a highly compressible string table.) Smaller buffer sizes give
         *     fast adaptation but have of course the overhead of transmitting
         *     trees more frequently.
         *   - I can't count above 4
         */

        this.sym_next = 0; /* running index in sym_buf */
        this.sym_end = 0; /* symbol table full when sym_next reaches this */

        this.opt_len = 0; /* bit length of current block with optimal trees */
        this.static_len = 0; /* bit length of current block with static trees */
        this.matches = 0; /* number of string matches in current block */
        this.insert = 0; /* bytes at end of window left to insert */

        this.bi_buf = 0;
        /* Output buffer. bits are inserted starting at the bottom (least
         * significant bits).
         */
        this.bi_valid = 0;
        /* Number of valid bits in bi_buf.  All bits above the last valid bit
         * are always zero.
         */

        // Used for window memory init. We safely ignore it for JS. That makes
        // sense only for pointers and memory check tools.
        //this.high_water = 0;
        /* High water mark offset in window for initialized bytes -- bytes above
         * this are set to zero in order to avoid memory check warnings when
         * longest match routines access bytes past the input.  This is then
         * updated to the new high water mark.
         */
      }

      /* =========================================================================
       * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
       */
      var deflateStateCheck = function deflateStateCheck(strm) {
        if (!strm) {
          return 1;
        }
        var s = strm.state;
        if (!s || s.strm !== strm || s.status !== INIT_STATE &&
        //#ifdef GZIP
        s.status !== GZIP_STATE &&
        //#endif
        s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
          return 1;
        }
        return 0;
      };
      var deflateResetKeep = function deflateResetKeep(strm) {
        if (deflateStateCheck(strm)) {
          return err(strm, Z_STREAM_ERROR$2);
        }
        strm.total_in = strm.total_out = 0;
        strm.data_type = Z_UNKNOWN;
        var s = strm.state;
        s.pending = 0;
        s.pending_out = 0;
        if (s.wrap < 0) {
          s.wrap = -s.wrap;
          /* was made negative by deflate(..., Z_FINISH); */
        }

        s.status =
        //#ifdef GZIP
        s.wrap === 2 ? GZIP_STATE :
        //#endif
        s.wrap ? INIT_STATE : BUSY_STATE;
        strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
        : 1; // adler32(0, Z_NULL, 0)
        s.last_flush = -2;
        _tr_init(s);
        return Z_OK$3;
      };
      var deflateReset = function deflateReset(strm) {
        var ret = deflateResetKeep(strm);
        if (ret === Z_OK$3) {
          lm_init(strm.state);
        }
        return ret;
      };
      var deflateSetHeader = function deflateSetHeader(strm, head) {
        if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
          return Z_STREAM_ERROR$2;
        }
        strm.state.gzhead = head;
        return Z_OK$3;
      };
      var deflateInit2 = function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
        if (!strm) {
          // === Z_NULL
          return Z_STREAM_ERROR$2;
        }
        var wrap = 1;
        if (level === Z_DEFAULT_COMPRESSION$1) {
          level = 6;
        }
        if (windowBits < 0) {
          /* suppress zlib wrapper */
          wrap = 0;
          windowBits = -windowBits;
        } else if (windowBits > 15) {
          wrap = 2; /* write gzip wrapper instead */
          windowBits -= 16;
        }
        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
          return err(strm, Z_STREAM_ERROR$2);
        }
        if (windowBits === 8) {
          windowBits = 9;
        }
        /* until 256-byte window bug fixed */

        var s = new DeflateState();
        strm.state = s;
        s.strm = strm;
        s.status = INIT_STATE; /* to pass state test in deflateReset() */

        s.wrap = wrap;
        s.gzhead = null;
        s.w_bits = windowBits;
        s.w_size = 1 << s.w_bits;
        s.w_mask = s.w_size - 1;
        s.hash_bits = memLevel + 7;
        s.hash_size = 1 << s.hash_bits;
        s.hash_mask = s.hash_size - 1;
        s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
        s.window = new Uint8Array(s.w_size * 2);
        s.head = new Uint16Array(s.hash_size);
        s.prev = new Uint16Array(s.w_size);

        // Don't need mem init magic for JS.
        //s.high_water = 0;  /* nothing written to s->window yet */

        s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */

        /* We overlay pending_buf and sym_buf. This works since the average size
         * for length/distance pairs over any compressed block is assured to be 31
         * bits or less.
         *
         * Analysis: The longest fixed codes are a length code of 8 bits plus 5
         * extra bits, for lengths 131 to 257. The longest fixed distance codes are
         * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
         * possible fixed-codes length/distance pair is then 31 bits total.
         *
         * sym_buf starts one-fourth of the way into pending_buf. So there are
         * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
         * in sym_buf is three bytes -- two for the distance and one for the
         * literal/length. As each symbol is consumed, the pointer to the next
         * sym_buf value to read moves forward three bytes. From that symbol, up to
         * 31 bits are written to pending_buf. The closest the written pending_buf
         * bits gets to the next sym_buf symbol to read is just before the last
         * code is written. At that time, 31*(n-2) bits have been written, just
         * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
         * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
         * symbols are written.) The closest the writing gets to what is unread is
         * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
         * can range from 128 to 32768.
         *
         * Therefore, at a minimum, there are 142 bits of space between what is
         * written and what is read in the overlain buffers, so the symbols cannot
         * be overwritten by the compressed data. That space is actually 139 bits,
         * due to the three-bit fixed-code block header.
         *
         * That covers the case where either Z_FIXED is specified, forcing fixed
         * codes, or when the use of fixed codes is chosen, because that choice
         * results in a smaller compressed block than dynamic codes. That latter
         * condition then assures that the above analysis also covers all dynamic
         * blocks. A dynamic-code block will only be chosen to be emitted if it has
         * fewer bits than a fixed-code block would for the same set of symbols.
         * Therefore its average symbol length is assured to be less than 31. So
         * the compressed data for a dynamic block also cannot overwrite the
         * symbols from which it is being constructed.
         */

        s.pending_buf_size = s.lit_bufsize * 4;
        s.pending_buf = new Uint8Array(s.pending_buf_size);

        // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
        //s->sym_buf = s->pending_buf + s->lit_bufsize;
        s.sym_buf = s.lit_bufsize;

        //s->sym_end = (s->lit_bufsize - 1) * 3;
        s.sym_end = (s.lit_bufsize - 1) * 3;
        /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
         * on 16 bit machines and because stored blocks are restricted to
         * 64K-1 bytes.
         */

        s.level = level;
        s.strategy = strategy;
        s.method = method;
        return deflateReset(strm);
      };
      var deflateInit = function deflateInit(strm, level) {
        return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
      };

      /* ========================================================================= */
      var deflate$2 = function deflate$2(strm, flush) {
        if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
          return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
        }
        var s = strm.state;
        if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) {
          return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
        }
        var old_flush = s.last_flush;
        s.last_flush = flush;

        /* Flush as much pending output as possible */
        if (s.pending !== 0) {
          flush_pending(strm);
          if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
             * more output space, but possibly with both pending and
             * avail_in equal to zero. There won't be anything to do,
             * but this is not an error situation so make sure we
             * return OK instead of BUF_ERROR at next call of deflate:
             */
            s.last_flush = -1;
            return Z_OK$3;
          }

          /* Make sure there is something to do and avoid duplicate consecutive
           * flushes. For repeated and useless calls with Z_FINISH, we keep
           * returning Z_STREAM_END instead of Z_BUF_ERROR.
           */
        } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) {
          return err(strm, Z_BUF_ERROR$1);
        }

        /* User must not provide more input after the first FINISH: */
        if (s.status === FINISH_STATE && strm.avail_in !== 0) {
          return err(strm, Z_BUF_ERROR$1);
        }

        /* Write the header */
        if (s.status === INIT_STATE && s.wrap === 0) {
          s.status = BUSY_STATE;
        }
        if (s.status === INIT_STATE) {
          /* zlib header */
          var header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          putShortMSB(s, header);

          /* Save the adler32 of the preset dictionary: */
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
          }
          strm.adler = 1; // adler32(0L, Z_NULL, 0);
          s.status = BUSY_STATE;

          /* Compression must start with an empty pending buffer */
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
        }
        //#ifdef GZIP
        if (s.status === GZIP_STATE) {
          /* gzip header */
          strm.adler = 0; //crc32(0L, Z_NULL, 0);
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            // s->gzhead == Z_NULL
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;

            /* Compression must start with an empty pending buffer */
            flush_pending(strm);
            if (s.pending !== 0) {
              s.last_flush = -1;
              return Z_OK$3;
            }
          } else {
            put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, s.gzhead.time >> 8 & 0xff);
            put_byte(s, s.gzhead.time >> 16 & 0xff);
            put_byte(s, s.gzhead.time >> 24 & 0xff);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 0xff);
              put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        }
        if (s.status === EXTRA_STATE) {
          if (s.gzhead.extra /* != Z_NULL*/) {
            var beg = s.pending; /* start of bytes to update crc */
            var left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
            while (s.pending + left > s.pending_buf_size) {
              var copy = s.pending_buf_size - s.pending;
              // zmemcpy(s.pending_buf + s.pending,
              //    s.gzhead.extra + s.gzindex, copy);
              s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
              s.pending = s.pending_buf_size;
              //--- HCRC_UPDATE(beg) ---//
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              //---//
              s.gzindex += copy;
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK$3;
              }
              beg = 0;
              left -= copy;
            }
            // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
            //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
            var gzhead_extra = new Uint8Array(s.gzhead.extra);
            // zmemcpy(s->pending_buf + s->pending,
            //     s->gzhead->extra + s->gzindex, left);
            s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
            s.pending += left;
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            //---//
            s.gzindex = 0;
          }
          s.status = NAME_STATE;
        }
        if (s.status === NAME_STATE) {
          if (s.gzhead.name /* != Z_NULL*/) {
            var _beg = s.pending; /* start of bytes to update crc */
            var val;
            do {
              if (s.pending === s.pending_buf_size) {
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > _beg) {
                  strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - _beg, _beg);
                }
                //---//
                flush_pending(strm);
                if (s.pending !== 0) {
                  s.last_flush = -1;
                  return Z_OK$3;
                }
                _beg = 0;
              }
              // JS specific: little magic to add zero terminator to end of string
              if (s.gzindex < s.gzhead.name.length) {
                val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
              } else {
                val = 0;
              }
              put_byte(s, val);
            } while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > _beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - _beg, _beg);
            }
            //---//
            s.gzindex = 0;
          }
          s.status = COMMENT_STATE;
        }
        if (s.status === COMMENT_STATE) {
          if (s.gzhead.comment /* != Z_NULL*/) {
            var _beg2 = s.pending; /* start of bytes to update crc */
            var _val;
            do {
              if (s.pending === s.pending_buf_size) {
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > _beg2) {
                  strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - _beg2, _beg2);
                }
                //---//
                flush_pending(strm);
                if (s.pending !== 0) {
                  s.last_flush = -1;
                  return Z_OK$3;
                }
                _beg2 = 0;
              }
              // JS specific: little magic to add zero terminator to end of string
              if (s.gzindex < s.gzhead.comment.length) {
                _val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
              } else {
                _val = 0;
              }
              put_byte(s, _val);
            } while (_val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > _beg2) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - _beg2, _beg2);
            }
            //---//
          }

          s.status = HCRC_STATE;
        }
        if (s.status === HCRC_STATE) {
          if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK$3;
              }
            }
            put_byte(s, strm.adler & 0xff);
            put_byte(s, strm.adler >> 8 & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
          }

          s.status = BUSY_STATE;

          /* Compression must start with an empty pending buffer */
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
        }
        //#endif

        /* Start a new block or continue the current one.
         */
        if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
          var bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
          if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s.status = FINISH_STATE;
          }
          if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR next call, see above */
            }

            return Z_OK$3;
            /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
             * of deflate should use the same flush parameter to make sure
             * that the flush is complete. So we don't have to output an
             * empty block here, this will be done at next call. This also
             * ensures that for a very small output buffer, we emit at most
             * one empty block.
             */
          }

          if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
              _tr_align(s);
            } else if (flush !== Z_BLOCK$1) {
              /* FULL_FLUSH or SYNC_FLUSH */

              _tr_stored_block(s, 0, 0, false);
              /* For a full flush, this empty block will be recognized
               * as a special marker by inflate_sync().
               */
              if (flush === Z_FULL_FLUSH$1) {
                /*** CLEAR_HASH(s); ***/ /* forget history */
                zero(s.head); // Fill with NIL (= 0);

                if (s.lookahead === 0) {
                  s.strstart = 0;
                  s.block_start = 0;
                  s.insert = 0;
                }
              }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
              s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
              return Z_OK$3;
            }
          }
        }
        if (flush !== Z_FINISH$3) {
          return Z_OK$3;
        }
        if (s.wrap <= 0) {
          return Z_STREAM_END$3;
        }

        /* Write the trailer */
        if (s.wrap === 2) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          put_byte(s, strm.adler >> 16 & 0xff);
          put_byte(s, strm.adler >> 24 & 0xff);
          put_byte(s, strm.total_in & 0xff);
          put_byte(s, strm.total_in >> 8 & 0xff);
          put_byte(s, strm.total_in >> 16 & 0xff);
          put_byte(s, strm.total_in >> 24 & 0xff);
        } else {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }
        flush_pending(strm);
        /* If avail_out is zero, the application will call deflate again
         * to flush the rest.
         */
        if (s.wrap > 0) {
          s.wrap = -s.wrap;
        }
        /* write the trailer only once! */
        return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
      };
      var deflateEnd = function deflateEnd(strm) {
        if (deflateStateCheck(strm)) {
          return Z_STREAM_ERROR$2;
        }
        var status = strm.state.status;
        strm.state = null;
        return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
      };

      /* =========================================================================
       * Initializes the compression dictionary from the given byte
       * sequence without producing any compressed output.
       */
      var deflateSetDictionary = function deflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        if (deflateStateCheck(strm)) {
          return Z_STREAM_ERROR$2;
        }
        var s = strm.state;
        var wrap = s.wrap;
        if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
          return Z_STREAM_ERROR$2;
        }

        /* when using zlib wrappers, compute Adler-32 for provided dictionary */
        if (wrap === 1) {
          /* adler32(strm->adler, dictionary, dictLength); */
          strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
        }
        s.wrap = 0; /* avoid computing Adler-32 in read_buf */

        /* if dictionary would fill window, just replace the history */
        if (dictLength >= s.w_size) {
          if (wrap === 0) {
            /* already empty otherwise */
            /*** CLEAR_HASH(s); ***/
            zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
          /* use the tail */
          // dictionary = dictionary.slice(dictLength - s.w_size);
          var tmpDict = new Uint8Array(s.w_size);
          tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
          dictionary = tmpDict;
          dictLength = s.w_size;
        }
        /* insert dictionary into window and hash */
        var avail = strm.avail_in;
        var next = strm.next_in;
        var input = strm.input;
        strm.avail_in = dictLength;
        strm.next_in = 0;
        strm.input = dictionary;
        fill_window(s);
        while (s.lookahead >= MIN_MATCH) {
          var str = s.strstart;
          var n = s.lookahead - (MIN_MATCH - 1);
          do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
            s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
          } while (--n);
          s.strstart = str;
          s.lookahead = MIN_MATCH - 1;
          fill_window(s);
        }
        s.strstart += s.lookahead;
        s.block_start = s.strstart;
        s.insert = s.lookahead;
        s.lookahead = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        strm.next_in = next;
        strm.input = input;
        strm.avail_in = avail;
        s.wrap = wrap;
        return Z_OK$3;
      };
      var deflateInit_1 = deflateInit;
      var deflateInit2_1 = deflateInit2;
      var deflateReset_1 = deflateReset;
      var deflateResetKeep_1 = deflateResetKeep;
      var deflateSetHeader_1 = deflateSetHeader;
      var deflate_2$1 = deflate$2;
      var deflateEnd_1 = deflateEnd;
      var deflateSetDictionary_1 = deflateSetDictionary;
      var deflateInfo = 'pako deflate (from Nodeca project)';

      /* Not implemented
      module.exports.deflateBound = deflateBound;
      module.exports.deflateCopy = deflateCopy;
      module.exports.deflateGetDictionary = deflateGetDictionary;
      module.exports.deflateParams = deflateParams;
      module.exports.deflatePending = deflatePending;
      module.exports.deflatePrime = deflatePrime;
      module.exports.deflateTune = deflateTune;
      */

      var deflate_1$2 = {
        deflateInit: deflateInit_1,
        deflateInit2: deflateInit2_1,
        deflateReset: deflateReset_1,
        deflateResetKeep: deflateResetKeep_1,
        deflateSetHeader: deflateSetHeader_1,
        deflate: deflate_2$1,
        deflateEnd: deflateEnd_1,
        deflateSetDictionary: deflateSetDictionary_1,
        deflateInfo: deflateInfo
      };
      var _has = function _has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      };
      var assign = function assign(obj /*from1, from2, from3, ...*/) {
        var sources = Array.prototype.slice.call(arguments, 1);
        while (sources.length) {
          var source = sources.shift();
          if (!source) {
            continue;
          }
          if (_typeof(source) !== 'object') {
            throw new TypeError(source + 'must be non-object');
          }
          for (var p in source) {
            if (_has(source, p)) {
              obj[p] = source[p];
            }
          }
        }
        return obj;
      };

      // Join array of chunks to single array.
      var flattenChunks = function flattenChunks(chunks) {
        // calculate data length
        var len = 0;
        for (var i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }

        // join chunks
        var result = new Uint8Array(len);
        for (var _i = 0, pos = 0, _l = chunks.length; _i < _l; _i++) {
          var chunk = chunks[_i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      };
      var common = {
        assign: assign,
        flattenChunks: flattenChunks
      };

      // String encode/decode helpers

      // Quick check if we can use fast array to bin string conversion
      //
      // - apply(Array) can fail on Android 2.2
      // - apply(Uint8Array) can fail on iOS 5.1 Safari
      //
      var STR_APPLY_UIA_OK = true;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (__) {
        STR_APPLY_UIA_OK = false;
      }

      // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff
      var _utf8len = new Uint8Array(256);
      for (var q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }
      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start

      // convert string to array (typed, when possible)
      var string2buf = function string2buf(str) {
        if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
          return new TextEncoder().encode(str);
        }
        var buf,
          c,
          c2,
          m_pos,
          i,
          str_len = str.length,
          buf_len = 0;

        // count binary size
        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        }

        // allocate buffer
        buf = new Uint8Array(buf_len);

        // convert
        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }
        return buf;
      };

      // Helper
      var buf2binstring = function buf2binstring(buf, len) {
        // On Chrome, the arguments in a function call that are allowed is `65534`.
        // If the length of the buffer is smaller than that, we can use this optimization,
        // otherwise we will take a slower path.
        if (len < 65534) {
          if (buf.subarray && STR_APPLY_UIA_OK) {
            return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
          }
        }
        var result = '';
        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }
        return result;
      };

      // convert array to string
      var buf2string = function buf2string(buf, max) {
        var len = max || buf.length;
        if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
          return new TextDecoder().decode(buf.subarray(0, max));
        }
        var i, out;

        // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.
        var utf16buf = new Array(len * 2);
        for (out = 0, i = 0; i < len;) {
          var c = buf[i++];
          // quick process ascii
          if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
          }
          var c_len = _utf8len[c];
          // skip 5 & 6 byte codes
          if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
          }

          // apply mask on first byte
          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
          // join the rest
          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          }

          // terminated by end of string?
          if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
          }
          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        }
        return buf2binstring(utf16buf, out);
      };

      // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);
      var utf8border = function utf8border(buf, max) {
        max = max || buf.length;
        if (max > buf.length) {
          max = buf.length;
        }

        // go back from last position, until start of sequence found
        var pos = max - 1;
        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
          pos--;
        }

        // Very small and broken sequence,
        // return max, because we should return something anyway.
        if (pos < 0) {
          return max;
        }

        // If we came to start of buffer - that means buffer is too small,
        // return max too.
        if (pos === 0) {
          return max;
        }
        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };
      var strings = {
        string2buf: string2buf,
        buf2string: buf2string,
        utf8border: utf8border
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function ZStream() {
        /* next input byte */
        this.input = null; // JS specific, because we have no pointers
        this.next_in = 0;
        /* number of bytes available at input */
        this.avail_in = 0;
        /* total number of input bytes read so far */
        this.total_in = 0;
        /* next output byte should be put there */
        this.output = null; // JS specific, because we have no pointers
        this.next_out = 0;
        /* remaining free space at output */
        this.avail_out = 0;
        /* total number of bytes output so far */
        this.total_out = 0;
        /* last error message, NULL if no error */
        this.msg = '' /*Z_NULL*/;
        /* not visible by applications */
        this.state = null;
        /* best guess about the data type: binary or text */
        this.data_type = 2 /*Z_UNKNOWN*/;
        /* adler32 value of the uncompressed data */
        this.adler = 0;
      }
      var zstream = ZStream;
      var toString$1 = Object.prototype.toString;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      var Z_NO_FLUSH$1 = constants$2.Z_NO_FLUSH,
        Z_SYNC_FLUSH = constants$2.Z_SYNC_FLUSH,
        Z_FULL_FLUSH = constants$2.Z_FULL_FLUSH,
        Z_FINISH$2 = constants$2.Z_FINISH,
        Z_OK$2 = constants$2.Z_OK,
        Z_STREAM_END$2 = constants$2.Z_STREAM_END,
        Z_DEFAULT_COMPRESSION = constants$2.Z_DEFAULT_COMPRESSION,
        Z_DEFAULT_STRATEGY = constants$2.Z_DEFAULT_STRATEGY,
        Z_DEFLATED$1 = constants$2.Z_DEFLATED;

      /* ===========================================================================*/

      /**
       * class Deflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[deflate]],
       * [[deflateRaw]] and [[gzip]].
       **/

      /* internal
       * Deflate.chunks -> Array
       *
       * Chunks of output data, if [[Deflate#onData]] not overridden.
       **/

      /**
       * Deflate.result -> Uint8Array
       *
       * Compressed result, generated by default [[Deflate#onData]]
       * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
       **/

      /**
       * Deflate.err -> Number
       *
       * Error code after deflate finished. 0 (Z_OK) on success.
       * You will not need it in real life, because deflate errors
       * are possible only on wrong options or bad `onData` / `onEnd`
       * custom handlers.
       **/

      /**
       * Deflate.msg -> String
       *
       * Error message, if [[Deflate.err]] != 0
       **/

      /**
       * new Deflate(options)
       * - options (Object): zlib deflate options.
       *
       * Creates new deflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `level`
       * - `windowBits`
       * - `memLevel`
       * - `strategy`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw deflate
       * - `gzip` (Boolean) - create gzip wrapper
       * - `header` (Object) - custom header for gzip
       *   - `text` (Boolean) - true if compressed data believed to be text
       *   - `time` (Number) - modification time, unix timestamp
       *   - `os` (Number) - operation system code
       *   - `extra` (Array) - array of bytes with extra data (max 65536)
       *   - `name` (String) - file name (binary string)
       *   - `comment` (String) - comment (binary string)
       *   - `hcrc` (Boolean) - true if header crc should be added
       *
       * ##### Example:
       *
       * ```javascript
       * const pako = require('pako')
       *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * const deflate = new pako.Deflate({ level: 3});
       *
       * deflate.push(chunk1, false);
       * deflate.push(chunk2, true);  // true -> last chunk
       *
       * if (deflate.err) { throw new Error(deflate.err); }
       *
       * console.log(deflate.result);
       * ```
       **/
      function Deflate$1(options) {
        this.options = common.assign({
          level: Z_DEFAULT_COMPRESSION,
          method: Z_DEFLATED$1,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Z_DEFAULT_STRATEGY
        }, options || {});
        var opt = this.options;
        if (opt.raw && opt.windowBits > 0) {
          opt.windowBits = -opt.windowBits;
        } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
          opt.windowBits += 16;
        }
        this.err = 0; // error code, if happens (0 = Z_OK)
        this.msg = ''; // error message
        this.ended = false; // used to avoid multiple onEnd() calls
        this.chunks = []; // chunks of compressed data

        this.strm = new zstream();
        this.strm.avail_out = 0;
        var status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
        if (status !== Z_OK$2) {
          throw new Error(messages[status]);
        }
        if (opt.header) {
          deflate_1$2.deflateSetHeader(this.strm, opt.header);
        }
        if (opt.dictionary) {
          var dict;
          // Convert data if needed
          if (typeof opt.dictionary === 'string') {
            // If we need to compress text, change encoding to utf8.
            dict = strings.string2buf(opt.dictionary);
          } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
            dict = new Uint8Array(opt.dictionary);
          } else {
            dict = opt.dictionary;
          }
          status = deflate_1$2.deflateSetDictionary(this.strm, dict);
          if (status !== Z_OK$2) {
            throw new Error(messages[status]);
          }
          this._dict_set = true;
        }
      }

      /**
       * Deflate#push(data[, flush_mode]) -> Boolean
       * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
       *   converted to utf8 byte sequence.
       * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
       *
       * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
       * new compressed chunks. Returns `true` on success. The last data block must
       * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
       * buffers and call [[Deflate#onEnd]].
       *
       * On fail call [[Deflate#onEnd]] with error code and return false.
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/
      Deflate$1.prototype.push = function (data, flush_mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var status, _flush_mode;
        if (this.ended) {
          return false;
        }
        if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

        // Convert data if needed
        if (typeof data === 'string') {
          // If we need to compress text, change encoding to utf8.
          strm.input = strings.string2buf(data);
        } else if (toString$1.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        for (;;) {
          if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          // Make sure avail_out > 6 to avoid repeating markers
          if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
          }
          status = deflate_1$2.deflate(strm, _flush_mode);

          // Ended => flush and finish
          if (status === Z_STREAM_END$2) {
            if (strm.next_out > 0) {
              this.onData(strm.output.subarray(0, strm.next_out));
            }
            status = deflate_1$2.deflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return status === Z_OK$2;
          }

          // Flush if out buffer full
          if (strm.avail_out === 0) {
            this.onData(strm.output);
            continue;
          }

          // Flush if requested and has data
          if (_flush_mode > 0 && strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
          }
          if (strm.avail_in === 0) break;
        }
        return true;
      };

      /**
       * Deflate#onData(chunk) -> Void
       * - chunk (Uint8Array): output data.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/
      Deflate$1.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };

      /**
       * Deflate#onEnd(status) -> Void
       * - status (Number): deflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called once after you tell deflate that the input stream is
       * complete (Z_FINISH). By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/
      Deflate$1.prototype.onEnd = function (status) {
        // On success - join
        if (status === Z_OK$2) {
          this.result = common.flattenChunks(this.chunks);
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };

      /**
       * deflate(data[, options]) -> Uint8Array
       * - data (Uint8Array|ArrayBuffer|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * Compress `data` with deflate algorithm and `options`.
       *
       * Supported options are:
       *
       * - level
       * - windowBits
       * - memLevel
       * - strategy
       * - dictionary
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       *
       * ##### Example:
       *
       * ```javascript
       * const pako = require('pako')
       * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
       *
       * console.log(pako.deflate(data));
       * ```
       **/
      function deflate$1(input, options) {
        var deflator = new Deflate$1(options);
        deflator.push(input, true);

        // That will never happens, if you don't cheat with options :)
        if (deflator.err) {
          throw deflator.msg || messages[deflator.err];
        }
        return deflator.result;
      }

      /**
       * deflateRaw(data[, options]) -> Uint8Array
       * - data (Uint8Array|ArrayBuffer|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/
      function deflateRaw$1(input, options) {
        options = options || {};
        options.raw = true;
        return deflate$1(input, options);
      }

      /**
       * gzip(data[, options]) -> Uint8Array
       * - data (Uint8Array|ArrayBuffer|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but create gzip wrapper instead of
       * deflate one.
       **/
      function gzip$1(input, options) {
        options = options || {};
        options.gzip = true;
        return deflate$1(input, options);
      }
      var Deflate_1$1 = Deflate$1;
      var deflate_2 = deflate$1;
      var deflateRaw_1$1 = deflateRaw$1;
      var gzip_1$1 = gzip$1;
      var constants$1 = constants$2;
      var deflate_1$1 = {
        Deflate: Deflate_1$1,
        deflate: deflate_2,
        deflateRaw: deflateRaw_1$1,
        gzip: gzip_1$1,
        constants: constants$1
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      // See state defs from inflate.js
      var BAD$1 = 16209; /* got a data error -- remain here until reset */
      var TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */

      /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.
          Entry assumptions:
               state.mode === LEN
              strm.avail_in >= 6
              strm.avail_out >= 258
              start >= strm.avail_out
              state.bits < 8
          On return, state.mode is one of:
               LEN -- ran out of enough output space or enough available input
              TYPE -- reached end of block code, inflate() to interpret next block
              BAD -- error in block data
          Notes:
           - The maximum input bits used by a length/distance pair is 15 bits for the
            length code, 5 bits for the length extra, 15 bits for the distance code,
            and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
            Therefore if strm.avail_in >= 6, then there is enough input to avoid
            checking for available input while decoding.
           - The maximum bytes that a single length/distance pair can output is 258
            bytes, which is the maximum length that can be coded.  inflate_fast()
            requires strm.avail_out >= 258 for each loop to avoid checking for
            output space.
       */
      var inffast = function inflate_fast(strm, start) {
        var _in; /* local strm.input */
        var last; /* have enough input while in < last */
        var _out; /* local strm.output */
        var beg; /* inflate()'s initial strm.output */
        var end; /* while out < end, enough space available */
        //#ifdef INFLATE_STRICT
        var dmax; /* maximum distance from zlib header */
        //#endif
        var wsize; /* window size or zero if not using window */
        var whave; /* valid bytes in the window */
        var wnext; /* window write index */
        // Use `s_window` instead `window`, avoid conflict with instrumentation tools
        var s_window; /* allocated sliding window, if wsize != 0 */
        var hold; /* local strm.hold */
        var bits; /* local strm.bits */
        var lcode; /* local strm.lencode */
        var dcode; /* local strm.distcode */
        var lmask; /* mask for first level of length codes */
        var dmask; /* mask for first level of distance codes */
        var here; /* retrieved table entry */
        var op; /* code bits, operation, extra bits, or */
        /*  window position, window bytes to copy */
        var len; /* match length, unused bytes */
        var dist; /* match distance */
        var from; /* where to copy match from */
        var from_source;
        var input, output; // JS specific, because we have no pointers

        /* copy state to local variables */
        var state = strm.state;
        //here = state.here;
        _in = strm.next_in;
        input = strm.input;
        last = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257);
        //#ifdef INFLATE_STRICT
        dmax = state.dmax;
        //#endif
        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;

        /* decode literals and length/distances until end-of-block or not enough
           input data or output space */

        top: do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen: for (;;) {
            // Goto emulation
            op = here >>> 24 /*here.bits*/;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/;
            if (op === 0) {
              /* literal */
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              output[_out++] = here & 0xffff /*here.val*/;
            } else if (op & 16) {
              /* length base */
              len = here & 0xffff /*here.val*/;
              op &= 15; /* number of extra bits */
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              //Tracevv((stderr, "inflate:         length %u\n", len));
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];
              dodist: for (;;) {
                // goto emulation
                op = here >>> 24 /*here.bits*/;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 0xff /*here.op*/;

                if (op & 16) {
                  /* distance base */
                  dist = here & 0xffff /*here.val*/;
                  op &= 15; /* number of extra bits */
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  //#ifdef INFLATE_STRICT
                  if (dist > dmax) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD$1;
                    break top;
                  }
                  //#endif
                  hold >>>= op;
                  bits -= op;
                  //Tracevv((stderr, "inflate:         distance %u\n", dist));
                  op = _out - beg; /* max distance in output */
                  if (dist > op) {
                    /* see if copy from window */
                    op = dist - op; /* distance back in window */
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD$1;
                        break top;
                      }

                      // (!) This block is disabled in zlib defaults,
                      // don't enable it for binary compatibility
                      //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                      //                if (len <= op - whave) {
                      //                  do {
                      //                    output[_out++] = 0;
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //                len -= op - whave;
                      //                do {
                      //                  output[_out++] = 0;
                      //                } while (--op > whave);
                      //                if (op === 0) {
                      //                  from = _out - dist;
                      //                  do {
                      //                    output[_out++] = output[from++];
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //#endif
                    }

                    from = 0; // window index
                    from_source = s_window;
                    if (wnext === 0) {
                      /* very common case */
                      from += wsize - op;
                      if (op < len) {
                        /* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      /* wrap around window */
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        /* some from end of window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          /* some from start of window */
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist; /* rest from output */
                          from_source = output;
                        }
                      }
                    } else {
                      /* contiguous in window */
                      from += wnext - op;
                      if (op < len) {
                        /* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist; /* copy direct from output */
                    do {
                      /* minimum length is three */
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  /* 2nd level distance code */
                  here = dcode[(here & 0xffff /*here.val*/) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = 'invalid distance code';
                  state.mode = BAD$1;
                  break top;
                }
                break; // need to emulate goto via "continue"
              }
            } else if ((op & 64) === 0) {
              /* 2nd level length code */
              here = lcode[(here & 0xffff /*here.val*/) + (hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              /* end-of-block */
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.mode = TYPE$1;
              break top;
            } else {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD$1;
              break top;
            }
            break; // need to emulate goto via "continue"
          }
        } while (_in < last && _out < end);

        /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;

        /* update state and return */
        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var MAXBITS = 15;
      var ENOUGH_LENS$1 = 852;
      var ENOUGH_DISTS$1 = 592;
      //const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

      var CODES$1 = 0;
      var LENS$1 = 1;
      var DISTS$1 = 2;
      var lbase = new Uint16Array([/* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
      var lext = new Uint8Array([/* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
      var dbase = new Uint16Array([/* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
      var dext = new Uint8Array([/* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
      var inflate_table = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
        var bits = opts.bits;
        //here = opts.here; /* table entry for duplication */

        var len = 0; /* a code's length in bits */
        var sym = 0; /* index of code symbols */
        var min = 0,
          max = 0; /* minimum and maximum code lengths */
        var root = 0; /* number of index bits for root table */
        var curr = 0; /* number of index bits for current table */
        var drop = 0; /* code bits to drop for sub-table */
        var left = 0; /* number of prefix codes available */
        var used = 0; /* code entries in table used */
        var huff = 0; /* Huffman code */
        var incr; /* for incrementing code, index */
        var fill; /* index for replicating entries */
        var low; /* low bits for current root entry */
        var mask; /* mask for low root bits */
        var next; /* next available space in table */
        var base = null; /* base value table to use */
        //  let shoextra;    /* extra bits table to use */
        var match; /* use base and extra for symbol >= match */
        var count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
        var offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
        var extra = null;
        var here_bits, here_op, here_val;

        /*
         Process a set of code lengths to create a canonical Huffman code.  The
         code lengths are lens[0..codes-1].  Each length corresponds to the
         symbols 0..codes-1.  The Huffman code is generated by first sorting the
         symbols by length from short to long, and retaining the symbol order
         for codes with equal lengths.  Then the code starts with all zero bits
         for the first code of the shortest length, and the codes are integer
         increments for the same length, and zeros are appended as the length
         increases.  For the deflate format, these bits are stored backwards
         from their more natural integer increment ordering, and so when the
         decoding tables are built in the large loop below, the integer codes
         are incremented backwards.
          This routine assumes, but does not check, that all of the entries in
         lens[] are in the range 0..MAXBITS.  The caller must assure this.
         1..MAXBITS is interpreted as that code length.  zero means that that
         symbol does not occur in this code.
          The codes are sorted by computing a count of codes for each length,
         creating from that a table of starting indices for each length in the
         sorted table, and then entering the symbols in order in the sorted
         table.  The sorted table is work[], with that space being provided by
         the caller.
          The length counts are used for other purposes as well, i.e. finding
         the minimum and maximum length codes, determining if there are any
         codes at all, checking for a valid set of lengths, and looking ahead
         at length counts to determine sub-table sizes when building the
         decoding tables.
         */

        /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }
        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }

        /* bound code lengths, force root to be within code lengths */
        root = bits;
        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {
            break;
          }
        }
        if (root > max) {
          root = max;
        }
        if (max === 0) {
          /* no symbols to code at all */
          //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
          //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
          //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;

          //table.op[opts.table_index] = 64;
          //table.bits[opts.table_index] = 1;
          //table.val[opts.table_index++] = 0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;
          opts.bits = 1;
          return 0; /* no symbols, but wait for decoding to report error */
        }

        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {
            break;
          }
        }
        if (root < min) {
          root = min;
        }

        /* check for an over-subscribed or incomplete set of lengths */
        left = 1;
        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];
          if (left < 0) {
            return -1;
          } /* over-subscribed */
        }

        if (left > 0 && (type === CODES$1 || max !== 1)) {
          return -1; /* incomplete set */
        }

        /* generate offsets into symbol table for each length for sorting */
        offs[1] = 0;
        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }

        /* sort symbols by length, by symbol order within each length */
        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }

        /*
         Create and fill in decoding tables.  In this loop, the table being
         filled is at next and has curr index bits.  The code being used is huff
         with length len.  That code is converted to an index by dropping drop
         bits off of the bottom.  For codes where len is less than drop + curr,
         those top drop + curr - len bits are incremented through all values to
         fill the table with replicated entries.
          root is the number of index bits for the root table.  When len exceeds
         root, sub-tables are created pointed to by the root entry with an index
         of the low root bits of huff.  This is saved in low to check for when a
         new sub-table should be started.  drop is zero when the root table is
         being filled, and drop is root when sub-tables are being filled.
          When a new sub-table is needed, it is necessary to look ahead in the
         code lengths to determine what size sub-table is needed.  The length
         counts are used for this, and so count[] is decremented as codes are
         entered in the tables.
          used keeps track of how many table entries have been allocated from the
         provided *table space.  It is checked for LENS and DIST tables against
         the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
         the initial root table size constants.  See the comments in inftrees.h
         for more information.
          sym increments through all symbols, and the loop terminates when
         all codes of length max, i.e. all codes, have been processed.  This
         routine permits incomplete codes, so another loop after this one fills
         in the rest of the decoding tables with invalid code markers.
         */

        /* set up for code type */
        // poor man optimization - use if-else instead of switch,
        // to avoid deopts in old v8
        if (type === CODES$1) {
          base = extra = work; /* dummy value--not used */
          match = 20;
        } else if (type === LENS$1) {
          base = lbase;
          extra = lext;
          match = 257;
        } else {
          /* DISTS */
          base = dbase;
          extra = dext;
          match = 0;
        }

        /* initialize opts for loop */
        huff = 0; /* starting code */
        sym = 0; /* starting code symbol */
        len = min; /* starting code length */
        next = table_index; /* current table to fill in */
        curr = root; /* current table index bits */
        drop = 0; /* current bits to drop from code for index */
        low = -1; /* trigger new sub-table when len > root */
        used = 1 << root; /* use root table entries */
        mask = used - 1; /* mask for comparing low */

        /* check available table space */
        if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
          return 1;
        }

        /* process all codes and make table entries */
        for (;;) {
          /* create table entry */
          here_bits = len - drop;
          if (work[sym] + 1 < match) {
            here_op = 0;
            here_val = work[sym];
          } else if (work[sym] >= match) {
            here_op = extra[work[sym] - match];
            here_val = base[work[sym] - match];
          } else {
            here_op = 32 + 64; /* end of block */
            here_val = 0;
          }

          /* replicate for those indices with low len bits equal to huff */
          incr = 1 << len - drop;
          fill = 1 << curr;
          min = fill; /* save offset to next table */
          do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill !== 0);

          /* backwards increment the len-bit code huff */
          incr = 1 << len - 1;
          while (huff & incr) {
            incr >>= 1;
          }
          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }

          /* go to next symbol, update count, len */
          sym++;
          if (--count[len] === 0) {
            if (len === max) {
              break;
            }
            len = lens[lens_index + work[sym]];
          }

          /* create new sub-table if needed */
          if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */
            if (drop === 0) {
              drop = root;
            }

            /* increment past last table */
            next += min; /* here min is 1 << curr */

            /* determine length of next table */
            curr = len - drop;
            left = 1 << curr;
            while (curr + drop < max) {
              left -= count[curr + drop];
              if (left <= 0) {
                break;
              }
              curr++;
              left <<= 1;
            }

            /* check for enough space */
            used += 1 << curr;
            if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
              return 1;
            }

            /* point entry in root table to sub-table */
            low = huff & mask;
            /*table.op[low] = curr;
            table.bits[low] = root;
            table.val[low] = next - opts.table_index;*/
            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }

        /* fill in remaining table entry if code is incomplete (guaranteed to have
         at most one remaining entry, since if the code is incomplete, the
         maximum code length that was allowed to get this far is one bit) */
        if (huff !== 0) {
          //table.op[next + huff] = 64;            /* invalid code marker */
          //table.bits[next + huff] = len - drop;
          //table.val[next + huff] = 0;
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }

        /* set return parameters */
        //opts.table_index += used;
        opts.bits = root;
        return 0;
      };
      var inftrees = inflate_table;

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      var Z_FINISH$1 = constants$2.Z_FINISH,
        Z_BLOCK = constants$2.Z_BLOCK,
        Z_TREES = constants$2.Z_TREES,
        Z_OK$1 = constants$2.Z_OK,
        Z_STREAM_END$1 = constants$2.Z_STREAM_END,
        Z_NEED_DICT$1 = constants$2.Z_NEED_DICT,
        Z_STREAM_ERROR$1 = constants$2.Z_STREAM_ERROR,
        Z_DATA_ERROR$1 = constants$2.Z_DATA_ERROR,
        Z_MEM_ERROR$1 = constants$2.Z_MEM_ERROR,
        Z_BUF_ERROR = constants$2.Z_BUF_ERROR,
        Z_DEFLATED = constants$2.Z_DEFLATED;

      /* STATES ====================================================================*/
      /* ===========================================================================*/

      var HEAD = 16180; /* i: waiting for magic header */
      var FLAGS = 16181; /* i: waiting for method and flags (gzip) */
      var TIME = 16182; /* i: waiting for modification time (gzip) */
      var OS = 16183; /* i: waiting for extra flags and operating system (gzip) */
      var EXLEN = 16184; /* i: waiting for extra length (gzip) */
      var EXTRA = 16185; /* i: waiting for extra bytes (gzip) */
      var NAME = 16186; /* i: waiting for end of file name (gzip) */
      var COMMENT = 16187; /* i: waiting for end of comment (gzip) */
      var HCRC = 16188; /* i: waiting for header crc (gzip) */
      var DICTID = 16189; /* i: waiting for dictionary check value */
      var DICT = 16190; /* waiting for inflateSetDictionary() call */
      var TYPE = 16191; /* i: waiting for type bits, including last-flag bit */
      var TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */
      var STORED = 16193; /* i: waiting for stored size (length and complement) */
      var COPY_ = 16194; /* i/o: same as COPY below, but only first time in */
      var COPY = 16195; /* i/o: waiting for input or output to copy stored block */
      var TABLE = 16196; /* i: waiting for dynamic block table lengths */
      var LENLENS = 16197; /* i: waiting for code length code lengths */
      var CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */
      var LEN_ = 16199; /* i: same as LEN below, but only first time in */
      var LEN = 16200; /* i: waiting for length/lit/eob code */
      var LENEXT = 16201; /* i: waiting for length extra bits */
      var DIST = 16202; /* i: waiting for distance code */
      var DISTEXT = 16203; /* i: waiting for distance extra bits */
      var MATCH = 16204; /* o: waiting for output space to copy string */
      var LIT = 16205; /* o: waiting for output space to write literal */
      var CHECK = 16206; /* i: waiting for 32-bit check value */
      var LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */
      var DONE = 16208; /* finished check, done -- remain here until reset */
      var BAD = 16209; /* got a data error -- remain here until reset */
      var MEM = 16210; /* got an inflate() memory error -- remain here until reset */
      var SYNC = 16211; /* looking for synchronization bytes to restart inflate() */

      /* ===========================================================================*/

      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      //const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

      var MAX_WBITS = 15;
      /* 32K LZ77 window */
      var DEF_WBITS = MAX_WBITS;
      var zswap32 = function zswap32(q) {
        return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
      };
      function InflateState() {
        this.strm = null; /* pointer back to this zlib stream */
        this.mode = 0; /* current inflate mode */
        this.last = false; /* true if processing last block */
        this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                          bit 2 true to validate check value */
        this.havedict = false; /* true if dictionary provided */
        this.flags = 0; /* gzip header method and flags (0 if zlib), or
                           -1 if raw or no header yet */
        this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */
        this.check = 0; /* protected copy of check value */
        this.total = 0; /* protected copy of output count */
        // TODO: may be {}
        this.head = null; /* where to save gzip header information */

        /* sliding window */
        this.wbits = 0; /* log base 2 of requested window size */
        this.wsize = 0; /* window size or zero if not using window */
        this.whave = 0; /* valid bytes in the window */
        this.wnext = 0; /* window write index */
        this.window = null; /* allocated sliding window, if needed */

        /* bit accumulator */
        this.hold = 0; /* input bit accumulator */
        this.bits = 0; /* number of bits in "in" */

        /* for string and stored block copying */
        this.length = 0; /* literal or length of data to copy */
        this.offset = 0; /* distance back to copy string from */

        /* for table and code decoding */
        this.extra = 0; /* extra bits needed */

        /* fixed and dynamic code tables */
        this.lencode = null; /* starting table for length/literal codes */
        this.distcode = null; /* starting table for distance codes */
        this.lenbits = 0; /* index bits for lencode */
        this.distbits = 0; /* index bits for distcode */

        /* dynamic table building */
        this.ncode = 0; /* number of code length code lengths */
        this.nlen = 0; /* number of length code lengths */
        this.ndist = 0; /* number of distance code lengths */
        this.have = 0; /* number of code lengths in lens[] */
        this.next = null; /* next available space in codes[] */

        this.lens = new Uint16Array(320); /* temporary storage for code lengths */
        this.work = new Uint16Array(288); /* work area for code table building */

        /*
         because we don't have pointers in js, we use lencode and distcode directly
         as buffers so we don't need codes
        */
        //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
        this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */
        this.distdyn = null; /* dynamic table for distance codes (JS specific) */
        this.sane = 0; /* if false, allow invalid distance too far */
        this.back = 0; /* bits back of last unprocessed length/lit */
        this.was = 0; /* initial length of match */
      }

      var inflateStateCheck = function inflateStateCheck(strm) {
        if (!strm) {
          return 1;
        }
        var state = strm.state;
        if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
          return 1;
        }
        return 0;
      };
      var inflateResetKeep = function inflateResetKeep(strm) {
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        var state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = ''; /*Z_NULL*/
        if (state.wrap) {
          /* to support ill-conceived Java test suite */
          strm.adler = state.wrap & 1;
        }
        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.flags = -1;
        state.dmax = 32768;
        state.head = null /*Z_NULL*/;
        state.hold = 0;
        state.bits = 0;
        //state.lencode = state.distcode = state.next = state.codes;
        state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
        state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
        state.sane = 1;
        state.back = -1;
        //Tracev((stderr, "inflate: reset\n"));
        return Z_OK$1;
      };
      var inflateReset = function inflateReset(strm) {
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        var state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);
      };
      var inflateReset2 = function inflateReset2(strm, windowBits) {
        var wrap;

        /* get the state */
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        var state = strm.state;

        /* extract wrap request from windowBits parameter */
        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else {
          wrap = (windowBits >> 4) + 5;
          if (windowBits < 48) {
            windowBits &= 15;
          }
        }

        /* set number of window bits, free window if different */
        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR$1;
        }
        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }

        /* update state and reset the rest of it */
        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      };
      var inflateInit2 = function inflateInit2(strm, windowBits) {
        if (!strm) {
          return Z_STREAM_ERROR$1;
        }
        //strm.msg = Z_NULL;                 /* in case we return an error */

        var state = new InflateState();

        //if (state === Z_NULL) return Z_MEM_ERROR;
        //Tracev((stderr, "inflate: allocated\n"));
        strm.state = state;
        state.strm = strm;
        state.window = null /*Z_NULL*/;
        state.mode = HEAD; /* to pass state test in inflateReset2() */
        var ret = inflateReset2(strm, windowBits);
        if (ret !== Z_OK$1) {
          strm.state = null /*Z_NULL*/;
        }

        return ret;
      };
      var inflateInit = function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      };

      /*
       Return state with length and distance decoding tables and index sizes set to
       fixed code decoding.  Normally this returns fixed tables from inffixed.h.
       If BUILDFIXED is defined, then instead this routine builds the tables the
       first time it's called, and returns those tables the first time and
       thereafter.  This reduces the size of the code by about 2K bytes, in
       exchange for a little execution time.  However, BUILDFIXED should not be
       used for threaded applications, since the rewriting of the tables and virgin
       may not be thread-safe.
       */
      var virgin = true;
      var lenfix, distfix; // We have no pointers in JS, so keep tables separate

      var fixedtables = function fixedtables(state) {
        /* build fixed huffman tables if first call (may not be thread safe) */
        if (virgin) {
          lenfix = new Int32Array(512);
          distfix = new Int32Array(32);

          /* literal/length table */
          var sym = 0;
          while (sym < 144) {
            state.lens[sym++] = 8;
          }
          while (sym < 256) {
            state.lens[sym++] = 9;
          }
          while (sym < 280) {
            state.lens[sym++] = 7;
          }
          while (sym < 288) {
            state.lens[sym++] = 8;
          }
          inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
          });

          /* distance table */
          sym = 0;
          while (sym < 32) {
            state.lens[sym++] = 5;
          }
          inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
          });

          /* do this just once */
          virgin = false;
        }
        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      };

      /*
       Update the window with the last wsize (normally 32K) bytes written before
       returning.  If window does not exist yet, create it.  This is only called
       when a window is already in use, or when output has been written during this
       inflate call, but the end of the deflate stream has not been reached yet.
       It is also called to create a window for dictionary data when a dictionary
       is loaded.
        Providing output buffers larger than 32K to inflate() should provide a speed
       advantage, since only the last 32K of output is copied to the sliding window
       upon return from inflate(), and since all distances after the first 32K of
       output will fall in the output data, making match copies simpler and faster.
       The advantage may be dependent on the size of the processor's data caches.
       */
      var updatewindow = function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;

        /* if it hasn't been done already, allocate space for the window */
        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;
          state.window = new Uint8Array(state.wsize);
        }

        /* copy state->wsize or less output bytes into the circular window */
        if (copy >= state.wsize) {
          state.window.set(src.subarray(end - state.wsize, end), 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else {
          dist = state.wsize - state.wnext;
          if (dist > copy) {
            dist = copy;
          }
          //zmemcpy(state->window + state->wnext, end - copy, dist);
          state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
          copy -= dist;
          if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            state.window.set(src.subarray(end - copy, end), 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) {
              state.wnext = 0;
            }
            if (state.whave < state.wsize) {
              state.whave += dist;
            }
          }
        }
        return 0;
      };
      var inflate$2 = function inflate$2(strm, flush) {
        var state;
        var input, output; // input/output buffers
        var next; /* next input INDEX */
        var put; /* next output INDEX */
        var have, left; /* available input and output */
        var hold; /* bit buffer */
        var bits; /* bits in bit buffer */
        var _in, _out; /* save starting available input and output */
        var copy; /* number of stored or match bytes to copy */
        var from; /* where to copy match bytes from */
        var from_source;
        var here = 0; /* current decoding table entry */
        var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
        //let last;                   /* parent table entry */
        var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
        var len; /* length to copy for repeats, bits to drop */
        var ret; /* return code */
        var hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */
        var opts;
        var n; // temporary variable for NEED_BITS

        var order = /* permutation of code lengths */
        new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR$1;
        }
        state = strm.state;
        if (state.mode === TYPE) {
          state.mode = TYPEDO;
        } /* skip check */

        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        _in = have;
        _out = left;
        ret = Z_OK$1;
        inf_leave:
        // goto emulation
        for (;;) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              //=== NEEDBITS(16);
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.wrap & 2 && hold === 0x8b1f) {
                /* gzip header */
                if (state.wbits === 0) {
                  state.wbits = 15;
                }
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//

                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
              }
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 0xff /*BITS(8)*/) << 8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
              }
              if ((hold & 0x0f /*BITS(4)*/) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              len = (hold & 0x0f /*BITS(4)*/) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              }
              if (len > 15 || len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
              }

              // !!! pako patch. Force use `options.windowBits` if passed.
              // Required to always use max window size by default.
              state.dmax = 1 << state.wbits;
              //state.dmax = 1 << len;

              state.flags = 0; /* indicate zlib header */
              //Tracev((stderr, "inflate:   zlib header ok\n"));
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = hold & 0x200 ? DICTID : TYPE;
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              break;
            case FLAGS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.flags = hold;
              if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = TIME;
            /* falls through */
            case TIME:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32_1(state.check, hbuf, 4, 0);
                //===
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = OS;
            /* falls through */
            case OS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
              }
              if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = EXLEN;
            /* falls through */
            case EXLEN:
              if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 0x0200 && state.wrap & 4) {
                  //=== CRC2(state.check, hold);
                  hbuf[0] = hold & 0xff;
                  hbuf[1] = hold >>> 8 & 0xff;
                  state.check = crc32_1(state.check, hbuf, 2, 0);
                  //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              } else if (state.head) {
                state.head.extra = null /*Z_NULL*/;
              }

              state.mode = EXTRA;
            /* falls through */
            case EXTRA:
              if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      // Use untyped array for more convenient processing later
                      state.head.extra = new Uint8Array(state.head.extra_len);
                    }
                    state.head.extra.set(input.subarray(next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                  }

                  if (state.flags & 0x0200 && state.wrap & 4) {
                    state.check = crc32_1(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            /* falls through */
            case NAME:
              if (state.flags & 0x0800) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  // TODO: 2 or 1 bytes?
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len && state.length < 65536 /*state.head.name_max*/) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) {
                  state.check = crc32_1(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            /* falls through */
            case COMMENT:
              if (state.flags & 0x1000) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len && state.length < 65536 /*state.head.comm_max*/) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) {
                  state.check = crc32_1(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            /* falls through */
            case HCRC:
              if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
                  strm.msg = 'header crc mismatch';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              }

              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              strm.adler = state.check = zswap32(hold);
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = DICT;
            /* falls through */
            case DICT:
              if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT$1;
              }
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = TYPE;
            /* falls through */
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case TYPEDO:
              if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
              }
              //=== NEEDBITS(3); */
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.last = hold & 0x01 /*BITS(1)*/;
              //--- DROPBITS(1) ---//
              hold >>>= 1;
              bits -= 1;
              //---//

              switch (hold & 0x03 /*BITS(2)*/) {
                case 0:
                  /* stored block */
                  //Tracev((stderr, "inflate:     stored block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = STORED;
                  break;
                case 1:
                  /* fixed block */
                  fixedtables(state);
                  //Tracev((stderr, "inflate:     fixed codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = LEN_; /* decode codes */
                  if (flush === Z_TREES) {
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                    break inf_leave;
                  }
                  break;
                case 2:
                  /* dynamic block */
                  //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = 'invalid block type';
                  state.mode = BAD;
              }
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break;
            case STORED:
              //--- BYTEBITS() ---// /* go to byte boundary */
              hold >>>= bits & 7;
              bits -= bits & 7;
              //---//
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
              }
              state.length = hold & 0xffff;
              //Tracev((stderr, "inflate:       stored length %u\n",
              //        state.length));
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case COPY_:
              state.mode = COPY;
            /* falls through */
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                //--- zmemcpy(put, next, copy); ---
                output.set(input.subarray(next, next + copy), put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              //Tracev((stderr, "inflate:       stored end\n"));
              state.mode = TYPE;
              break;
            case TABLE:
              //=== NEEDBITS(14); */
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.nlen = (hold & 0x1f /*BITS(5)*/) + 257;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ndist = (hold & 0x1f /*BITS(5)*/) + 1;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ncode = (hold & 0x0f /*BITS(4)*/) + 4;
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              //#ifndef PKZIP_BUG_WORKAROUND
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracev((stderr, "inflate:       table sizes ok\n"));
              state.have = 0;
              state.mode = LENLENS;
            /* falls through */
            case LENLENS:
              while (state.have < state.ncode) {
                //=== NEEDBITS(3);
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
                //---//
              }

              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              // We have separate tables & no pointers. 2 commented lines below not needed.
              //state.next = state.codes;
              //state.lencode = state.next;
              // Switch to use dynamic table
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = {
                bits: state.lenbits
              };
              ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, "inflate:       code lengths ok\n"));
              state.have = 0;
              state.mode = CODELENS;
            /* falls through */
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (;;) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;
                  if (here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }

                if (here_val < 16) {
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    //=== NEEDBITS(here.bits + 2);
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    if (state.have === 0) {
                      strm.msg = 'invalid bit length repeat';
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 0x03); //BITS(2);
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                  } else if (here_val === 17) {
                    //=== NEEDBITS(here.bits + 3);
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 3 + (hold & 0x07); //BITS(3);
                    //--- DROPBITS(3) ---//
                    hold >>>= 3;
                    bits -= 3;
                    //---//
                  } else {
                    //=== NEEDBITS(here.bits + 7);
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 11 + (hold & 0x7f); //BITS(7);
                    //--- DROPBITS(7) ---//
                    hold >>>= 7;
                    bits -= 7;
                    //---//
                  }

                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }

              /* handle error breaks in while */
              if (state.mode === BAD) {
                break;
              }

              /* check for end-of-block code (better have one) */
              if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
              }

              /* build code tables -- note: do not change the lenbits or distbits
                 values here (9 and 6) without reading the comments in inftrees.h
                 concerning the ENOUGH constants, which depend on those values */
              state.lenbits = 9;
              opts = {
                bits: state.lenbits
              };
              ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.lenbits = opts.bits;
              // state.lencode = state.next;

              if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              //state.distcode.copy(state.codes);
              // Switch to use dynamic table
              state.distcode = state.distdyn;
              opts = {
                bits: state.distbits
              };
              ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.distbits = opts.bits;
              // state.distcode = state.next;

              if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, 'inflate:       codes ok\n'));
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case LEN_:
              state.mode = LEN;
            /* falls through */
            case LEN:
              if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inffast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---

                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (;;) {
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) {
                  break;
                }
                //--- PULLBYTE() ---//
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }

              if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1 /*BITS(last.bits + last.op)*/) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            /* falls through */
            case LENEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //Tracevv((stderr, "inflate:         length %u\n", state.length));
              state.was = state.length;
              state.mode = DIST;
            /* falls through */
            case DIST:
              for (;;) {
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) {
                  break;
                }
                //--- PULLBYTE() ---//
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }

              if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1 /*BITS(last.bits + last.op)*/) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            /* falls through */
            case DISTEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //#ifdef INFLATE_STRICT
              if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
              state.mode = MATCH;
            /* falls through */
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                /* copy from window */
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break;
                  }
                  // (!) This block is disabled in zlib defaults,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //          Trace((stderr, "inflate.c too far\n"));
                  //          copy -= state.whave;
                  //          if (copy > state.length) { copy = state.length; }
                  //          if (copy > left) { copy = left; }
                  //          left -= copy;
                  //          state.length -= copy;
                  //          do {
                  //            output[put++] = 0;
                  //          } while (--copy);
                  //          if (state.length === 0) { state.mode = LEN; }
                  //          break;
                  //#endif
                }

                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                /* copy from output */
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  // Use '|' instead of '+' to make sure that result is signed
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) {
                  strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
                  state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
                }
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = 'incorrect data check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   check matches trailer\n"));
              }

              state.mode = LENGTH;
            /* falls through */
            case LENGTH:
              if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
                  strm.msg = 'incorrect length check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   length matches trailer\n"));
              }

              state.mode = DONE;
            /* falls through */
            case DONE:
              ret = Z_STREAM_END$1;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR$1;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR$1;
            case SYNC:
            /* falls through */
            default:
              return Z_STREAM_ERROR$1;
          }
        }

        // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

        /*
           Return from inflate(), updating the total counts and the check value.
           If there was no progress during the inflate() call, return a buffer
           error.  Call updatewindow() to create and/or update the window state.
           Note: a memory error from inflate() is non-recoverable.
         */

        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---

        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
        }
        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;
        if (state.wrap & 4 && _out) {
          strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
        }
        strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
        if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
          ret = Z_BUF_ERROR;
        }
        return ret;
      };
      var inflateEnd = function inflateEnd(strm) {
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        var state = strm.state;
        if (state.window) {
          state.window = null;
        }
        strm.state = null;
        return Z_OK$1;
      };
      var inflateGetHeader = function inflateGetHeader(strm, head) {
        /* check state */
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        var state = strm.state;
        if ((state.wrap & 2) === 0) {
          return Z_STREAM_ERROR$1;
        }

        /* save header structure */
        state.head = head;
        head.done = false;
        return Z_OK$1;
      };
      var inflateSetDictionary = function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var state;
        var dictid;
        var ret;

        /* check state */
        if (inflateStateCheck(strm)) {
          return Z_STREAM_ERROR$1;
        }
        state = strm.state;
        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR$1;
        }

        /* check for correct dictionary identifier */
        if (state.mode === DICT) {
          dictid = 1; /* adler32(0, null, 0)*/
          /* dictid = adler32(dictid, dictionary, dictLength); */
          dictid = adler32_1(dictid, dictionary, dictLength, 0);
          if (dictid !== state.check) {
            return Z_DATA_ERROR$1;
          }
        }
        /* copy dictionary to window using updatewindow(), which will amend the
         existing dictionary if appropriate */
        ret = updatewindow(strm, dictionary, dictLength, dictLength);
        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR$1;
        }
        state.havedict = 1;
        // Tracev((stderr, "inflate:   dictionary set\n"));
        return Z_OK$1;
      };
      var inflateReset_1 = inflateReset;
      var inflateReset2_1 = inflateReset2;
      var inflateResetKeep_1 = inflateResetKeep;
      var inflateInit_1 = inflateInit;
      var inflateInit2_1 = inflateInit2;
      var inflate_2$1 = inflate$2;
      var inflateEnd_1 = inflateEnd;
      var inflateGetHeader_1 = inflateGetHeader;
      var inflateSetDictionary_1 = inflateSetDictionary;
      var inflateInfo = 'pako inflate (from Nodeca project)';

      /* Not implemented
      module.exports.inflateCodesUsed = inflateCodesUsed;
      module.exports.inflateCopy = inflateCopy;
      module.exports.inflateGetDictionary = inflateGetDictionary;
      module.exports.inflateMark = inflateMark;
      module.exports.inflatePrime = inflatePrime;
      module.exports.inflateSync = inflateSync;
      module.exports.inflateSyncPoint = inflateSyncPoint;
      module.exports.inflateUndermine = inflateUndermine;
      module.exports.inflateValidate = inflateValidate;
      */

      var inflate_1$2 = {
        inflateReset: inflateReset_1,
        inflateReset2: inflateReset2_1,
        inflateResetKeep: inflateResetKeep_1,
        inflateInit: inflateInit_1,
        inflateInit2: inflateInit2_1,
        inflate: inflate_2$1,
        inflateEnd: inflateEnd_1,
        inflateGetHeader: inflateGetHeader_1,
        inflateSetDictionary: inflateSetDictionary_1,
        inflateInfo: inflateInfo
      };

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function GZheader() {
        /* true if compressed data believed to be text */
        this.text = 0;
        /* modification time */
        this.time = 0;
        /* extra flags (not used when writing a gzip file) */
        this.xflags = 0;
        /* operating system */
        this.os = 0;
        /* pointer to extra field or Z_NULL if none */
        this.extra = null;
        /* extra field length (valid if extra != Z_NULL) */
        this.extra_len = 0; // Actually, we don't need it in JS,
        // but leave for few code modifications

        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //

        /* space at extra (only when reading header) */
        // this.extra_max  = 0;
        /* pointer to zero-terminated file name or Z_NULL */
        this.name = '';
        /* space at name (only when reading header) */
        // this.name_max   = 0;
        /* pointer to zero-terminated comment or Z_NULL */
        this.comment = '';
        /* space at comment (only when reading header) */
        // this.comm_max   = 0;
        /* true if there was or will be a header crc */
        this.hcrc = 0;
        /* true when done reading gzip header (not used when writing a gzip file) */
        this.done = false;
      }
      var gzheader = GZheader;
      var toString = Object.prototype.toString;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      var Z_NO_FLUSH = constants$2.Z_NO_FLUSH,
        Z_FINISH = constants$2.Z_FINISH,
        Z_OK = constants$2.Z_OK,
        Z_STREAM_END = constants$2.Z_STREAM_END,
        Z_NEED_DICT = constants$2.Z_NEED_DICT,
        Z_STREAM_ERROR = constants$2.Z_STREAM_ERROR,
        Z_DATA_ERROR = constants$2.Z_DATA_ERROR,
        Z_MEM_ERROR = constants$2.Z_MEM_ERROR;

      /* ===========================================================================*/

      /**
       * class Inflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[inflate]]
       * and [[inflateRaw]].
       **/

      /* internal
       * inflate.chunks -> Array
       *
       * Chunks of output data, if [[Inflate#onData]] not overridden.
       **/

      /**
       * Inflate.result -> Uint8Array|String
       *
       * Uncompressed result, generated by default [[Inflate#onData]]
       * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
       **/

      /**
       * Inflate.err -> Number
       *
       * Error code after inflate finished. 0 (Z_OK) on success.
       * Should be checked if broken data possible.
       **/

      /**
       * Inflate.msg -> String
       *
       * Error message, if [[Inflate.err]] != 0
       **/

      /**
       * new Inflate(options)
       * - options (Object): zlib inflate options.
       *
       * Creates new inflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `windowBits`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw inflate
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       * By default, when no options set, autodetect deflate/gzip data format via
       * wrapper header.
       *
       * ##### Example:
       *
       * ```javascript
       * const pako = require('pako')
       * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
       * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * const inflate = new pako.Inflate({ level: 3});
       *
       * inflate.push(chunk1, false);
       * inflate.push(chunk2, true);  // true -> last chunk
       *
       * if (inflate.err) { throw new Error(inflate.err); }
       *
       * console.log(inflate.result);
       * ```
       **/
      function Inflate$1(options) {
        this.options = common.assign({
          chunkSize: 1024 * 64,
          windowBits: 15,
          to: ''
        }, options || {});
        var opt = this.options;

        // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.
        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;
          if (opt.windowBits === 0) {
            opt.windowBits = -15;
          }
        }

        // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
        if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
          opt.windowBits += 32;
        }

        // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible
        if (opt.windowBits > 15 && opt.windowBits < 48) {
          // bit 3 (16) -> gzipped data
          // bit 4 (32) -> autodetect gzip/deflate
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }
        this.err = 0; // error code, if happens (0 = Z_OK)
        this.msg = ''; // error message
        this.ended = false; // used to avoid multiple onEnd() calls
        this.chunks = []; // chunks of compressed data

        this.strm = new zstream();
        this.strm.avail_out = 0;
        var status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
        if (status !== Z_OK) {
          throw new Error(messages[status]);
        }
        this.header = new gzheader();
        inflate_1$2.inflateGetHeader(this.strm, this.header);

        // Setup dictionary
        if (opt.dictionary) {
          // Convert data if needed
          if (typeof opt.dictionary === 'string') {
            opt.dictionary = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
            opt.dictionary = new Uint8Array(opt.dictionary);
          }
          if (opt.raw) {
            //In raw mode we need to set the dictionary early
            status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== Z_OK) {
              throw new Error(messages[status]);
            }
          }
        }
      }

      /**
       * Inflate#push(data[, flush_mode]) -> Boolean
       * - data (Uint8Array|ArrayBuffer): input data
       * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
       *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
       *   `true` means Z_FINISH.
       *
       * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
       * new output chunks. Returns `true` on success. If end of stream detected,
       * [[Inflate#onEnd]] will be called.
       *
       * `flush_mode` is not needed for normal operation, because end of stream
       * detected automatically. You may try to use it for advanced things, but
       * this functionality was not tested.
       *
       * On fail call [[Inflate#onEnd]] with error code and return false.
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/
      Inflate$1.prototype.push = function (data, flush_mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;
        var status, _flush_mode, last_avail_out;
        if (this.ended) return false;
        if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

        // Convert data if needed
        if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        for (;;) {
          if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }
          status = inflate_1$2.inflate(strm, _flush_mode);
          if (status === Z_NEED_DICT && dictionary) {
            status = inflate_1$2.inflateSetDictionary(strm, dictionary);
            if (status === Z_OK) {
              status = inflate_1$2.inflate(strm, _flush_mode);
            } else if (status === Z_DATA_ERROR) {
              // Replace code with more verbose
              status = Z_NEED_DICT;
            }
          }

          // Skip snyc markers if more data follows and not raw mode
          while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
            inflate_1$2.inflateReset(strm);
            status = inflate_1$2.inflate(strm, _flush_mode);
          }
          switch (status) {
            case Z_STREAM_ERROR:
            case Z_DATA_ERROR:
            case Z_NEED_DICT:
            case Z_MEM_ERROR:
              this.onEnd(status);
              this.ended = true;
              return false;
          }

          // Remember real `avail_out` value, because we may patch out buffer content
          // to align utf8 strings boundaries.
          last_avail_out = strm.avail_out;
          if (strm.next_out) {
            if (strm.avail_out === 0 || status === Z_STREAM_END) {
              if (this.options.to === 'string') {
                var next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                var tail = strm.next_out - next_out_utf8;
                var utf8str = strings.buf2string(strm.output, next_out_utf8);

                // move tail & realign counters
                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;
                if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
                this.onData(utf8str);
              } else {
                this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
              }
            }
          }

          // Must repeat iteration if out buffer is full
          if (status === Z_OK && last_avail_out === 0) continue;

          // Finalize if end of stream reached.
          if (status === Z_STREAM_END) {
            status = inflate_1$2.inflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return true;
          }
          if (strm.avail_in === 0) break;
        }
        return true;
      };

      /**
       * Inflate#onData(chunk) -> Void
       * - chunk (Uint8Array|String): output data. When string output requested,
       *   each chunk will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/
      Inflate$1.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };

      /**
       * Inflate#onEnd(status) -> Void
       * - status (Number): inflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called either after you tell inflate that the input stream is
       * complete (Z_FINISH). By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/
      Inflate$1.prototype.onEnd = function (status) {
        // On success - join
        if (status === Z_OK) {
          if (this.options.to === 'string') {
            this.result = this.chunks.join('');
          } else {
            this.result = common.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };

      /**
       * inflate(data[, options]) -> Uint8Array|String
       * - data (Uint8Array|ArrayBuffer): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Decompress `data` with inflate/ungzip and `options`. Autodetect
       * format via wrapper header by default. That's why we don't provide
       * separate `ungzip` method.
       *
       * Supported options are:
       *
       * - windowBits
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       *
       * ##### Example:
       *
       * ```javascript
       * const pako = require('pako');
       * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
       * let output;
       *
       * try {
       *   output = pako.inflate(input);
       * } catch (err) {
       *   console.log(err);
       * }
       * ```
       **/
      function inflate$1(input, options) {
        var inflator = new Inflate$1(options);
        inflator.push(input);

        // That will never happens, if you don't cheat with options :)
        if (inflator.err) throw inflator.msg || messages[inflator.err];
        return inflator.result;
      }

      /**
       * inflateRaw(data[, options]) -> Uint8Array|String
       * - data (Uint8Array|ArrayBuffer): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * The same as [[inflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/
      function inflateRaw$1(input, options) {
        options = options || {};
        options.raw = true;
        return inflate$1(input, options);
      }

      /**
       * ungzip(data[, options]) -> Uint8Array|String
       * - data (Uint8Array|ArrayBuffer): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Just shortcut to [[inflate]], because it autodetects format
       * by header.content. Done for convenience.
       **/

      var Inflate_1$1 = Inflate$1;
      var inflate_2 = inflate$1;
      var inflateRaw_1$1 = inflateRaw$1;
      var ungzip$1 = inflate$1;
      var constants = constants$2;
      var inflate_1$1 = {
        Inflate: Inflate_1$1,
        inflate: inflate_2,
        inflateRaw: inflateRaw_1$1,
        ungzip: ungzip$1,
        constants: constants
      };
      var gzip = deflate_1$1.gzip;
      var inflate = inflate_1$1.inflate;
      var gzip_1 = exports('gzip', gzip);
      var inflate_1 = exports('inflate', inflate);
    }
  };
});

System.register("chunks:///_virtual/parse.js", ['./cjs-loader.mjs', './tokenize.js', './root.js', './type.js', './field.js', './mapfield.js', './oneof.js', './enum.js', './service.js', './method.js', './object.js', './types.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8, __cjsMetaURL$9, __cjsMetaURL$a, __cjsMetaURL$b, __cjsMetaURL$c;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$9 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$a = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$b = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$c = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = parse;
        parse.filename = null;
        parse.defaults = {
          keepCase: false
        };
        var tokenize = require("./tokenize"),
          Root = require("./root"),
          Type = require("./type"),
          Field = require("./field"),
          MapField = require("./mapfield"),
          OneOf = require("./oneof"),
          Enum = require("./enum"),
          Service = require("./service"),
          Method = require("./method"),
          ReflectionObject = require("./object"),
          types = require("./types"),
          util = require("./util");
        var base10Re = /^[1-9][0-9]*$/,
          base10NegRe = /^-?[1-9][0-9]*$/,
          base16Re = /^0[x][0-9a-fA-F]+$/,
          base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
          base8Re = /^0[0-7]+$/,
          base8NegRe = /^-?0[0-7]+$/,
          numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
          nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;

        /**
         * Result object returned from {@link parse}.
         * @interface IParserResult
         * @property {string|undefined} package Package name, if declared
         * @property {string[]|undefined} imports Imports, if any
         * @property {string[]|undefined} weakImports Weak imports, if any
         * @property {Root} root Populated root instance
         */

        /**
         * Options modifying the behavior of {@link parse}.
         * @interface IParseOptions
         * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
         * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
         * @property {boolean} [preferTrailingComment=false] Use trailing comment when both leading comment and trailing comment exist.
         */

        /**
         * Options modifying the behavior of JSON serialization.
         * @interface IToJSONOptions
         * @property {boolean} [keepComments=false] Serializes comments.
         */

        /**
         * Parses the given .proto source and returns an object with the parsed contents.
         * @param {string} source Source contents
         * @param {Root} root Root to populate
         * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
         * @returns {IParserResult} Parser result
         * @property {string} filename=null Currently processing file name for error reporting, if known
         * @property {IParseOptions} defaults Default {@link IParseOptions}
         */
        function parse(source, root, options) {
          /* eslint-disable callback-return */
          if (!(root instanceof Root)) {
            options = root;
            root = new Root();
          }
          if (!options) options = parse.defaults;
          var preferTrailingComment = options.preferTrailingComment || false;
          var tn = tokenize(source, options.alternateCommentMode || false),
            next = tn.next,
            push = tn.push,
            peek = tn.peek,
            skip = tn.skip,
            cmnt = tn.cmnt;
          var head = true,
            pkg,
            imports,
            weakImports,
            edition = "proto2";
          var ptr = root;
          var topLevelObjects = [];
          var topLevelOptions = {};
          var applyCase = options.keepCase ? function (name) {
            return name;
          } : util.camelCase;
          function resolveFileFeatures() {
            topLevelObjects.forEach(function (obj) {
              obj._edition = edition;
              Object.keys(topLevelOptions).forEach(function (opt) {
                if (obj.getOption(opt) !== undefined) return;
                obj.setOption(opt, topLevelOptions[opt], true);
              });
            });
          }

          /* istanbul ignore next */
          function illegal(token, name, insideTryCatch) {
            var filename = parse.filename;
            if (!insideTryCatch) parse.filename = null;
            return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
          }
          function readString() {
            var values = [],
              token;
            do {
              /* istanbul ignore if */
              if ((token = next()) !== "\"" && token !== "'") throw illegal(token);
              values.push(next());
              skip(token);
              token = peek();
            } while (token === "\"" || token === "'");
            return values.join("");
          }
          function readValue(acceptTypeRef) {
            var token = next();
            switch (token) {
              case "'":
              case "\"":
                push(token);
                return readString();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return parseNumber(token, /* insideTryCatch */true);
            } catch (e) {
              /* istanbul ignore else */
              if (acceptTypeRef && typeRefRe.test(token)) return token;

              /* istanbul ignore next */
              throw illegal(token, "value");
            }
          }
          function readRanges(target, acceptStrings) {
            var token, start;
            do {
              if (acceptStrings && ((token = peek()) === "\"" || token === "'")) {
                var str = readString();
                target.push(str);
                if (edition >= 2023) {
                  throw illegal(str, "id");
                }
              } else {
                try {
                  target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
                } catch (err) {
                  if (acceptStrings && typeRefRe.test(token) && edition >= 2023) {
                    target.push(token);
                  } else {
                    throw err;
                  }
                }
              }
            } while (skip(",", true));
            var dummy = {
              options: undefined
            };
            dummy.setOption = function (name, value) {
              if (this.options === undefined) this.options = {};
              this.options[name] = value;
            };
            ifBlock(dummy, function parseRange_block(token) {
              /* istanbul ignore else */
              if (token === "option") {
                parseOption(dummy, token); // skip
                skip(";");
              } else throw illegal(token);
            }, function parseRange_line() {
              parseInlineOptions(dummy); // skip
            });
          }

          function parseNumber(token, insideTryCatch) {
            var sign = 1;
            if (token.charAt(0) === "-") {
              sign = -1;
              token = token.substring(1);
            }
            switch (token) {
              case "inf":
              case "INF":
              case "Inf":
                return sign * Infinity;
              case "nan":
              case "NAN":
              case "Nan":
              case "NaN":
                return NaN;
              case "0":
                return 0;
            }
            if (base10Re.test(token)) return sign * parseInt(token, 10);
            if (base16Re.test(token)) return sign * parseInt(token, 16);
            if (base8Re.test(token)) return sign * parseInt(token, 8);

            /* istanbul ignore else */
            if (numberRe.test(token)) return sign * parseFloat(token);

            /* istanbul ignore next */
            throw illegal(token, "number", insideTryCatch);
          }
          function parseId(token, acceptNegative) {
            switch (token) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }

            /* istanbul ignore if */
            if (!acceptNegative && token.charAt(0) === "-") throw illegal(token, "id");
            if (base10NegRe.test(token)) return parseInt(token, 10);
            if (base16NegRe.test(token)) return parseInt(token, 16);

            /* istanbul ignore else */
            if (base8NegRe.test(token)) return parseInt(token, 8);

            /* istanbul ignore next */
            throw illegal(token, "id");
          }
          function parsePackage() {
            /* istanbul ignore if */
            if (pkg !== undefined) throw illegal("package");
            pkg = next();

            /* istanbul ignore if */
            if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");
            ptr = ptr.define(pkg);
            skip(";");
          }
          function parseImport() {
            var token = peek();
            var whichImports;
            switch (token) {
              case "weak":
                whichImports = weakImports || (weakImports = []);
                next();
                break;
              case "public":
                next();
              // eslint-disable-next-line no-fallthrough
              default:
                whichImports = imports || (imports = []);
                break;
            }
            token = readString();
            skip(";");
            whichImports.push(token);
          }
          function parseSyntax() {
            skip("=");
            edition = readString();

            /* istanbul ignore if */
            if (edition < 2023) throw illegal(edition, "syntax");
            skip(";");
          }
          function parseEdition() {
            skip("=");
            edition = readString();
            var supportedEditions = ["2023"];

            /* istanbul ignore if */
            if (!supportedEditions.includes(edition)) throw illegal(edition, "edition");
            skip(";");
          }
          function parseCommon(parent, token) {
            switch (token) {
              case "option":
                parseOption(parent, token);
                skip(";");
                return true;
              case "message":
                parseType(parent, token);
                return true;
              case "enum":
                parseEnum(parent, token);
                return true;
              case "service":
                parseService(parent, token);
                return true;
              case "extend":
                parseExtension(parent, token);
                return true;
            }
            return false;
          }
          function ifBlock(obj, fnIf, fnElse) {
            var trailingLine = tn.line;
            if (obj) {
              if (typeof obj.comment !== "string") {
                obj.comment = cmnt(); // try block-type comment
              }

              obj.filename = parse.filename;
            }
            if (skip("{", true)) {
              var token;
              while ((token = next()) !== "}") fnIf(token);
              skip(";", true);
            } else {
              if (fnElse) fnElse();
              skip(";");
              if (obj && (typeof obj.comment !== "string" || preferTrailingComment)) obj.comment = cmnt(trailingLine) || obj.comment; // try line-type comment
            }
          }

          function parseType(parent, token) {
            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "type name");
            var type = new Type(token);
            ifBlock(type, function parseType_block(token) {
              if (parseCommon(type, token)) return;
              switch (token) {
                case "map":
                  parseMapField(type);
                  break;
                case "required":
                  if (edition !== "proto2") throw illegal(token);
                /* eslint-disable no-fallthrough */
                case "repeated":
                  parseField(type, token);
                  break;
                case "optional":
                  /* istanbul ignore if */
                  if (edition === "proto3") {
                    parseField(type, "proto3_optional");
                  } else if (edition !== "proto2") {
                    throw illegal(token);
                  } else {
                    parseField(type, "optional");
                  }
                  break;
                case "oneof":
                  parseOneOf(type, token);
                  break;
                case "extensions":
                  readRanges(type.extensions || (type.extensions = []));
                  break;
                case "reserved":
                  readRanges(type.reserved || (type.reserved = []), true);
                  break;
                default:
                  /* istanbul ignore if */
                  if (edition === "proto2" || !typeRefRe.test(token)) {
                    throw illegal(token);
                  }
                  push(token);
                  parseField(type, "optional");
                  break;
              }
            });
            parent.add(type);
            if (parent === ptr) {
              topLevelObjects.push(type);
            }
          }
          function parseField(parent, rule, extend) {
            var type = next();
            if (type === "group") {
              parseGroup(parent, rule);
              return;
            }
            // Type names can consume multiple tokens, in multiple variants:
            //    package.subpackage   field       tokens: "package.subpackage" [TYPE NAME ENDS HERE] "field"
            //    package . subpackage field       tokens: "package" "." "subpackage" [TYPE NAME ENDS HERE] "field"
            //    package.  subpackage field       tokens: "package." "subpackage" [TYPE NAME ENDS HERE] "field"
            //    package  .subpackage field       tokens: "package" ".subpackage" [TYPE NAME ENDS HERE] "field"
            // Keep reading tokens until we get a type name with no period at the end,
            // and the next token does not start with a period.
            while (type.endsWith(".") || peek().startsWith(".")) {
              type += next();
            }

            /* istanbul ignore if */
            if (!typeRefRe.test(type)) throw illegal(type, "type");
            var name = next();

            /* istanbul ignore if */

            if (!nameRe.test(name)) throw illegal(name, "name");
            name = applyCase(name);
            skip("=");
            var field = new Field(name, parseId(next()), type, rule, extend);
            ifBlock(field, function parseField_block(token) {
              /* istanbul ignore else */
              if (token === "option") {
                parseOption(field, token);
                skip(";");
              } else throw illegal(token);
            }, function parseField_line() {
              parseInlineOptions(field);
            });
            if (rule === "proto3_optional") {
              // for proto3 optional fields, we create a single-member Oneof to mimic "optional" behavior
              var oneof = new OneOf("_" + name);
              field.setOption("proto3_optional", true);
              oneof.add(field);
              parent.add(oneof);
            } else {
              parent.add(field);
            }
            if (parent === ptr) {
              topLevelObjects.push(field);
            }
          }
          function parseGroup(parent, rule) {
            if (edition >= 2023) {
              throw illegal("group");
            }
            var name = next();

            /* istanbul ignore if */
            if (!nameRe.test(name)) throw illegal(name, "name");
            var fieldName = util.lcFirst(name);
            if (name === fieldName) name = util.ucFirst(name);
            skip("=");
            var id = parseId(next());
            var type = new Type(name);
            type.group = true;
            var field = new Field(fieldName, id, name, rule);
            field.filename = parse.filename;
            ifBlock(type, function parseGroup_block(token) {
              switch (token) {
                case "option":
                  parseOption(type, token);
                  skip(";");
                  break;
                case "required":
                case "repeated":
                  parseField(type, token);
                  break;
                case "optional":
                  /* istanbul ignore if */
                  if (edition === "proto3") {
                    parseField(type, "proto3_optional");
                  } else {
                    parseField(type, "optional");
                  }
                  break;
                case "message":
                  parseType(type, token);
                  break;
                case "enum":
                  parseEnum(type, token);
                  break;

                /* istanbul ignore next */
                default:
                  throw illegal(token);
                // there are no groups with proto3 semantics
              }
            });

            parent.add(type).add(field);
          }
          function parseMapField(parent) {
            skip("<");
            var keyType = next();

            /* istanbul ignore if */
            if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");
            skip(",");
            var valueType = next();

            /* istanbul ignore if */
            if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");
            skip(">");
            var name = next();

            /* istanbul ignore if */
            if (!nameRe.test(name)) throw illegal(name, "name");
            skip("=");
            var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
            ifBlock(field, function parseMapField_block(token) {
              /* istanbul ignore else */
              if (token === "option") {
                parseOption(field, token);
                skip(";");
              } else throw illegal(token);
            }, function parseMapField_line() {
              parseInlineOptions(field);
            });
            parent.add(field);
          }
          function parseOneOf(parent, token) {
            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");
            var oneof = new OneOf(applyCase(token));
            ifBlock(oneof, function parseOneOf_block(token) {
              if (token === "option") {
                parseOption(oneof, token);
                skip(";");
              } else {
                push(token);
                parseField(oneof, "optional");
              }
            });
            parent.add(oneof);
          }
          function parseEnum(parent, token) {
            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");
            var enm = new Enum(token);
            ifBlock(enm, function parseEnum_block(token) {
              switch (token) {
                case "option":
                  parseOption(enm, token);
                  skip(";");
                  break;
                case "reserved":
                  readRanges(enm.reserved || (enm.reserved = []), true);
                  if (enm.reserved === undefined) enm.reserved = [];
                  break;
                default:
                  parseEnumValue(enm, token);
              }
            });
            parent.add(enm);
            if (parent === ptr) {
              topLevelObjects.push(enm);
            }
          }
          function parseEnumValue(parent, token) {
            /* istanbul ignore if */
            if (!nameRe.test(token)) throw illegal(token, "name");
            skip("=");
            var value = parseId(next(), true),
              dummy = {
                options: undefined
              };
            dummy.getOption = function (name) {
              return this.options[name];
            };
            dummy.setOption = function (name, value) {
              ReflectionObject.prototype.setOption.call(dummy, name, value);
            };
            dummy.setParsedOption = function () {
              return undefined;
            };
            ifBlock(dummy, function parseEnumValue_block(token) {
              /* istanbul ignore else */
              if (token === "option") {
                parseOption(dummy, token); // skip
                skip(";");
              } else throw illegal(token);
            }, function parseEnumValue_line() {
              parseInlineOptions(dummy); // skip
            });

            parent.add(token, value, dummy.comment, dummy.parsedOptions || dummy.options);
          }
          function parseOption(parent, token) {
            var option;
            var propName;
            var isOption = true;
            if (token === "option") {
              token = next();
            }
            while (token !== "=") {
              if (token === "(") {
                var parensValue = next();
                skip(")");
                token = "(" + parensValue + ")";
              }
              if (isOption) {
                isOption = false;
                if (token.includes(".") && !token.includes("(")) {
                  var tokens = token.split(".");
                  option = tokens[0] + ".";
                  token = tokens[1];
                  continue;
                }
                option = token;
              } else {
                propName = propName ? propName += token : token;
              }
              token = next();
            }
            var name = propName ? option.concat(propName) : option;
            var optionValue = parseOptionValue(parent, name);
            propName = propName && propName[0] === "." ? propName.slice(1) : propName;
            option = option && option[option.length - 1] === "." ? option.slice(0, -1) : option;
            setParsedOption(parent, option, optionValue, propName);
          }
          function parseOptionValue(parent, name) {
            // { a: "foo" b { c: "bar" } }
            if (skip("{", true)) {
              var objectResult = {};
              while (!skip("}", true)) {
                /* istanbul ignore if */
                if (!nameRe.test(token = next())) {
                  throw illegal(token, "name");
                }
                if (token === null) {
                  throw illegal(token, "end of input");
                }
                var value;
                var propName = token;
                skip(":", true);
                if (peek() === "{") {
                  // option (my_option) = {
                  //     repeated_value: [ "foo", "bar" ]
                  // };
                  value = parseOptionValue(parent, name + "." + token);
                } else if (peek() === "[") {
                  value = [];
                  var lastValue;
                  if (skip("[", true)) {
                    do {
                      lastValue = readValue(true);
                      value.push(lastValue);
                    } while (skip(",", true));
                    skip("]");
                    if (typeof lastValue !== "undefined") {
                      setOption(parent, name + "." + token, lastValue);
                    }
                  }
                } else {
                  value = readValue(true);
                  setOption(parent, name + "." + token, value);
                }
                var prevValue = objectResult[propName];
                if (prevValue) value = [].concat(prevValue).concat(value);
                objectResult[propName] = value;

                // Semicolons and commas can be optional
                skip(",", true);
                skip(";", true);
              }
              return objectResult;
            }
            var simpleValue = readValue(true);
            setOption(parent, name, simpleValue);
            return simpleValue;
            // Does not enforce a delimiter to be universal
          }

          function setOption(parent, name, value) {
            if (ptr === parent && /^features\./.test(name)) {
              topLevelOptions[name] = value;
              return;
            }
            if (parent.setOption) parent.setOption(name, value);
          }
          function setParsedOption(parent, name, value, propName) {
            if (parent.setParsedOption) parent.setParsedOption(name, value, propName);
          }
          function parseInlineOptions(parent) {
            if (skip("[", true)) {
              do {
                parseOption(parent, "option");
              } while (skip(",", true));
              skip("]");
            }
            return parent;
          }
          function parseService(parent, token) {
            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "service name");
            var service = new Service(token);
            ifBlock(service, function parseService_block(token) {
              if (parseCommon(service, token)) {
                return;
              }

              /* istanbul ignore else */
              if (token === "rpc") parseMethod(service, token);else throw illegal(token);
            });
            parent.add(service);
            if (parent === ptr) {
              topLevelObjects.push(service);
            }
          }
          function parseMethod(parent, token) {
            // Get the comment of the preceding line now (if one exists) in case the
            // method is defined across multiple lines.
            var commentText = cmnt();
            var type = token;

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");
            var name = token,
              requestType,
              requestStream,
              responseType,
              responseStream;
            skip("(");
            if (skip("stream", true)) requestStream = true;

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token);
            requestType = token;
            skip(")");
            skip("returns");
            skip("(");
            if (skip("stream", true)) responseStream = true;

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token);
            responseType = token;
            skip(")");
            var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
            method.comment = commentText;
            ifBlock(method, function parseMethod_block(token) {
              /* istanbul ignore else */
              if (token === "option") {
                parseOption(method, token);
                skip(";");
              } else throw illegal(token);
            });
            parent.add(method);
          }
          function parseExtension(parent, token) {
            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token, "reference");
            var reference = token;
            ifBlock(null, function parseExtension_block(token) {
              switch (token) {
                case "required":
                case "repeated":
                  parseField(parent, token, reference);
                  break;
                case "optional":
                  /* istanbul ignore if */
                  if (edition === "proto3") {
                    parseField(parent, "proto3_optional", reference);
                  } else {
                    parseField(parent, "optional", reference);
                  }
                  break;
                default:
                  /* istanbul ignore if */
                  if (edition === "proto2" || !typeRefRe.test(token)) throw illegal(token);
                  push(token);
                  parseField(parent, "optional", reference);
                  break;
              }
            });
          }
          var token;
          while ((token = next()) !== null) {
            switch (token) {
              case "package":
                /* istanbul ignore if */
                if (!head) throw illegal(token);
                parsePackage();
                break;
              case "import":
                /* istanbul ignore if */
                if (!head) throw illegal(token);
                parseImport();
                break;
              case "syntax":
                /* istanbul ignore if */
                if (!head) throw illegal(token);
                parseSyntax();
                break;
              case "edition":
                /* istanbul ignore if */
                if (!head) throw illegal(token);
                parseEdition();
                break;
              case "option":
                parseOption(ptr, token);
                skip(";", true);
                break;
              default:
                /* istanbul ignore else */
                if (parseCommon(ptr, token)) {
                  head = false;
                  continue;
                }

                /* istanbul ignore next */
                throw illegal(token);
            }
          }
          resolveFileFeatures();
          parse.filename = null;
          return {
            "package": pkg,
            "imports": imports,
            weakImports: weakImports,
            root: root
          };
        }

        /**
         * Parses the given .proto source and returns an object with the parsed contents.
         * @name parse
         * @function
         * @param {string} source Source contents
         * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
         * @returns {IParserResult} Parser result
         * @property {string} filename=null Currently processing file name for error reporting, if known
         * @property {IParseOptions} defaults Default {@link IParseOptions}
         * @variation 2
         */

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './tokenize': __cjsMetaURL$1,
          './root': __cjsMetaURL$2,
          './type': __cjsMetaURL$3,
          './field': __cjsMetaURL$4,
          './mapfield': __cjsMetaURL$5,
          './oneof': __cjsMetaURL$6,
          './enum': __cjsMetaURL$7,
          './service': __cjsMetaURL$8,
          './method': __cjsMetaURL$9,
          './object': __cjsMetaURL$a,
          './types': __cjsMetaURL$b,
          './util': __cjsMetaURL$c
        };
      });
    }
  };
});

System.register("chunks:///_virtual/reader_buffer.js", ['./cjs-loader.mjs', './reader.js', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = BufferReader;

        // extends Reader
        var Reader = require("./reader");
        (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
        var util = require("./util/minimal");

        /**
         * Constructs a new buffer reader instance.
         * @classdesc Wire format reader using node buffers.
         * @extends Reader
         * @constructor
         * @param {Buffer} buffer Buffer to read from
         */
        function BufferReader(buffer) {
          Reader.call(this, buffer);

          /**
           * Read buffer.
           * @name BufferReader#buf
           * @type {Buffer}
           */
        }

        BufferReader._configure = function () {
          /* istanbul ignore else */
          if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
        };

        /**
         * @override
         */
        BufferReader.prototype.string = function read_string_buffer() {
          var len = this.uint32(); // modifies pos
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
        };

        /**
         * Reads a sequence of bytes preceeded by its length as a varint.
         * @name BufferReader#bytes
         * @function
         * @returns {Buffer} Value read
         */

        BufferReader._configure();

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './reader': __cjsMetaURL$1,
          './util/minimal': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/reader.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Reader;
        var util = require("./util/minimal");
        var BufferReader; // cyclic

        var LongBits = util.LongBits,
          utf8 = util.utf8;

        /* istanbul ignore next */
        function indexOutOfRange(reader, writeLength) {
          return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
        }

        /**
         * Constructs a new reader instance using the specified buffer.
         * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
         * @constructor
         * @param {Uint8Array} buffer Buffer to read from
         */
        function Reader(buffer) {
          /**
           * Read buffer.
           * @type {Uint8Array}
           */
          this.buf = buffer;

          /**
           * Read buffer position.
           * @type {number}
           */
          this.pos = 0;

          /**
           * Read buffer length.
           * @type {number}
           */
          this.len = buffer.length;
        }
        var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
          if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
          throw Error("illegal buffer");
        }
        /* istanbul ignore next */ : function create_array(buffer) {
          if (Array.isArray(buffer)) return new Reader(buffer);
          throw Error("illegal buffer");
        };
        var create = function create() {
          return util.Buffer ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
              return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
              /* istanbul ignore next */ : create_array(buffer);
            })(buffer);
          }
          /* istanbul ignore next */ : create_array;
        };

        /**
         * Creates a new reader using the specified buffer.
         * @function
         * @param {Uint8Array|Buffer} buffer Buffer to read from
         * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
         * @throws {Error} If `buffer` is not a valid buffer
         */
        Reader.create = create();
        Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */util.Array.prototype.slice;

        /**
         * Reads a varint as an unsigned 32 bit value.
         * @function
         * @returns {number} Value read
         */
        Reader.prototype.uint32 = function read_uint32_setup() {
          var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
          return function read_uint32() {
            value = (this.buf[this.pos] & 127) >>> 0;
            if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
            if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
            if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
            if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
            if (this.buf[this.pos++] < 128) return value;

            /* istanbul ignore if */
            if ((this.pos += 5) > this.len) {
              this.pos = this.len;
              throw indexOutOfRange(this, 10);
            }
            return value;
          };
        }();

        /**
         * Reads a varint as a signed 32 bit value.
         * @returns {number} Value read
         */
        Reader.prototype.int32 = function read_int32() {
          return this.uint32() | 0;
        };

        /**
         * Reads a zig-zag encoded varint as a signed 32 bit value.
         * @returns {number} Value read
         */
        Reader.prototype.sint32 = function read_sint32() {
          var value = this.uint32();
          return value >>> 1 ^ -(value & 1) | 0;
        };

        /* eslint-disable no-invalid-this */

        function readLongVarint() {
          // tends to deopt with local vars for octet etc.
          var bits = new LongBits(0, 0);
          var i = 0;
          if (this.len - this.pos > 4) {
            // fast route (lo)
            for (; i < 4; ++i) {
              // 1st..4th
              bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
            // 5th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
            i = 0;
          } else {
            for (; i < 3; ++i) {
              /* istanbul ignore if */
              if (this.pos >= this.len) throw indexOutOfRange(this);
              // 1st..3th
              bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
            // 4th
            bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
            return bits;
          }
          if (this.len - this.pos > 4) {
            // fast route (hi)
            for (; i < 5; ++i) {
              // 6th..10th
              bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
          } else {
            for (; i < 5; ++i) {
              /* istanbul ignore if */
              if (this.pos >= this.len) throw indexOutOfRange(this);
              // 6th..10th
              bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
          }
          /* istanbul ignore next */
          throw Error("invalid varint encoding");
        }

        /* eslint-enable no-invalid-this */

        /**
         * Reads a varint as a signed 64 bit value.
         * @name Reader#int64
         * @function
         * @returns {Long} Value read
         */

        /**
         * Reads a varint as an unsigned 64 bit value.
         * @name Reader#uint64
         * @function
         * @returns {Long} Value read
         */

        /**
         * Reads a zig-zag encoded varint as a signed 64 bit value.
         * @name Reader#sint64
         * @function
         * @returns {Long} Value read
         */

        /**
         * Reads a varint as a boolean.
         * @returns {boolean} Value read
         */
        Reader.prototype.bool = function read_bool() {
          return this.uint32() !== 0;
        };
        function readFixed32_end(buf, end) {
          // note that this uses `end`, not `pos`
          return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
        }

        /**
         * Reads fixed 32 bits as an unsigned 32 bit integer.
         * @returns {number} Value read
         */
        Reader.prototype.fixed32 = function read_fixed32() {
          /* istanbul ignore if */
          if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
          return readFixed32_end(this.buf, this.pos += 4);
        };

        /**
         * Reads fixed 32 bits as a signed 32 bit integer.
         * @returns {number} Value read
         */
        Reader.prototype.sfixed32 = function read_sfixed32() {
          /* istanbul ignore if */
          if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
          return readFixed32_end(this.buf, this.pos += 4) | 0;
        };

        /* eslint-disable no-invalid-this */

        function readFixed64( /* this: Reader */
        ) {
          /* istanbul ignore if */
          if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
          return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
        }

        /* eslint-enable no-invalid-this */

        /**
         * Reads fixed 64 bits.
         * @name Reader#fixed64
         * @function
         * @returns {Long} Value read
         */

        /**
         * Reads zig-zag encoded fixed 64 bits.
         * @name Reader#sfixed64
         * @function
         * @returns {Long} Value read
         */

        /**
         * Reads a float (32 bit) as a number.
         * @function
         * @returns {number} Value read
         */
        Reader.prototype["float"] = function read_float() {
          /* istanbul ignore if */
          if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
          var value = util["float"].readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return value;
        };

        /**
         * Reads a double (64 bit float) as a number.
         * @function
         * @returns {number} Value read
         */
        Reader.prototype["double"] = function read_double() {
          /* istanbul ignore if */
          if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
          var value = util["float"].readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return value;
        };

        /**
         * Reads a sequence of bytes preceeded by its length as a varint.
         * @returns {Uint8Array} Value read
         */
        Reader.prototype.bytes = function read_bytes() {
          var length = this.uint32(),
            start = this.pos,
            end = this.pos + length;

          /* istanbul ignore if */
          if (end > this.len) throw indexOutOfRange(this, length);
          this.pos += length;
          if (Array.isArray(this.buf))
            // plain array
            return this.buf.slice(start, end);
          if (start === end) {
            // fix for IE 10/Win8 and others' subarray returning array of size 1
            var nativeBuffer = util.Buffer;
            return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, start, end);
        };

        /**
         * Reads a string preceeded by its byte length as a varint.
         * @returns {string} Value read
         */
        Reader.prototype.string = function read_string() {
          var bytes = this.bytes();
          return utf8.read(bytes, 0, bytes.length);
        };

        /**
         * Skips the specified number of bytes if specified, otherwise skips a varint.
         * @param {number} [length] Length if known, otherwise a varint is assumed
         * @returns {Reader} `this`
         */
        Reader.prototype.skip = function skip(length) {
          if (typeof length === "number") {
            /* istanbul ignore if */
            if (this.pos + length > this.len) throw indexOutOfRange(this, length);
            this.pos += length;
          } else {
            do {
              /* istanbul ignore if */
              if (this.pos >= this.len) throw indexOutOfRange(this);
            } while (this.buf[this.pos++] & 128);
          }
          return this;
        };

        /**
         * Skips the next element of the specified wire type.
         * @param {number} wireType Wire type received
         * @returns {Reader} `this`
         */
        Reader.prototype.skipType = function (wireType) {
          switch (wireType) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
              }
              break;
            case 5:
              this.skip(4);
              break;

            /* istanbul ignore next */
            default:
              throw Error("invalid wire type " + wireType + " at offset " + this.pos);
          }
          return this;
        };
        Reader._configure = function (BufferReader_) {
          BufferReader = BufferReader_;
          Reader.create = create();
          BufferReader._configure();
          var fn = util.Long ? "toLong" : /* istanbul ignore next */"toNumber";
          util.merge(Reader.prototype, {
            int64: function read_int64() {
              return readLongVarint.call(this)[fn](false);
            },
            uint64: function read_uint64() {
              return readLongVarint.call(this)[fn](true);
            },
            sint64: function read_sint64() {
              return readLongVarint.call(this).zzDecode()[fn](false);
            },
            fixed64: function read_fixed64() {
              return readFixed64.call(this)[fn](true);
            },
            sfixed64: function read_sfixed64() {
              return readFixed64.call(this)[fn](false);
            }
          });
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './util/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        arrayLikeToArray: _arrayLikeToArray,
        arrayWithHoles: _arrayWithHoles,
        arrayWithoutHoles: _arrayWithoutHoles,
        assertThisInitialized: _assertThisInitialized,
        asyncToGenerator: _asyncToGenerator,
        classCallCheck: _classCallCheck,
        createClass: _createClass,
        createForOfIteratorHelper: _createForOfIteratorHelper,
        createSuper: _createSuper,
        defineProperty: _defineProperty,
        get: _get,
        getPrototypeOf: _getPrototypeOf,
        inherits: _inherits,
        initializerDefineProperty: _initializerDefineProperty,
        isNativeReflectConstruct: _isNativeReflectConstruct,
        iterableToArray: _iterableToArray,
        iterableToArrayLimit: _iterableToArrayLimit,
        nonIterableRest: _nonIterableRest,
        nonIterableSpread: _nonIterableSpread,
        possibleConstructorReturn: _possibleConstructorReturn,
        regeneratorRuntime: _regeneratorRuntime,
        setPrototypeOf: _setPrototypeOf,
        slicedToArray: _slicedToArray,
        superPropBase: _superPropBase,
        toConsumableArray: _toConsumableArray,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey,
        typeof: _typeof,
        unsupportedIterableToArray: _unsupportedIterableToArray
      });
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = !1;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
          } catch (r) {
            o = !0, n = r;
          } finally {
            try {
              if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('regeneratorRuntime', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = exports('typeof', "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }), _typeof(o);
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('getPrototypeOf', Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }
        return object;
      }
      function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = exports('get', Reflect.get.bind());
        } else {
          _get = exports('get', function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
              return desc.get.call(arguments.length < 3 ? target : receiver);
            }
            return desc.value;
          });
        }
        return _get.apply(this, arguments);
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("chunks:///_virtual/root.js", ['./cjs-loader.mjs', './namespace.js', './field.js', './enum.js', './oneof.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Root;

        // extends Namespace
        var Namespace = require("./namespace");
        ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
        var Field = require("./field"),
          Enum = require("./enum"),
          OneOf = require("./oneof"),
          util = require("./util");
        var Type,
          // cyclic
          parse,
          // might be excluded
          common; // "

        /**
         * Constructs a new root namespace instance.
         * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
         * @extends NamespaceBase
         * @constructor
         * @param {Object.<string,*>} [options] Top level options
         */
        function Root(options) {
          Namespace.call(this, "", options);

          /**
           * Deferred extension fields.
           * @type {Field[]}
           */
          this.deferred = [];

          /**
           * Resolved file names of loaded files.
           * @type {string[]}
           */
          this.files = [];

          // Default to proto2 if unspecified.
          this._edition = "proto2";
        }

        /**
         * Loads a namespace descriptor into a root namespace.
         * @param {INamespace} json Namespace descriptor
         * @param {Root} [root] Root namespace, defaults to create a new one if omitted
         * @returns {Root} Root namespace
         */
        Root.fromJSON = function fromJSON(json, root) {
          if (!root) root = new Root();
          if (json.options) root.setOptions(json.options);
          return root.addJSON(json.nested).resolveAll();
        };

        /**
         * Resolves the path of an imported file, relative to the importing origin.
         * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
         * @function
         * @param {string} origin The file name of the importing file
         * @param {string} target The file name being imported
         * @returns {string|null} Resolved path to `target` or `null` to skip the file
         */
        Root.prototype.resolvePath = util.path.resolve;

        /**
         * Fetch content from file path or url
         * This method exists so you can override it with your own logic.
         * @function
         * @param {string} path File path or url
         * @param {FetchCallback} callback Callback function
         * @returns {undefined}
         */
        Root.prototype.fetch = util.fetch;

        // A symbol-like function to safely signal synchronous loading
        /* istanbul ignore next */
        function SYNC() {} // eslint-disable-line no-empty-function

        /**
         * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
         * @param {string|string[]} filename Names of one or multiple files to load
         * @param {IParseOptions} options Parse options
         * @param {LoadCallback} callback Callback function
         * @returns {undefined}
         */
        Root.prototype.load = function load(filename, options, callback) {
          if (typeof options === "function") {
            callback = options;
            options = undefined;
          }
          var self = this;
          if (!callback) {
            return util.asPromise(load, self, filename, options);
          }
          var sync = callback === SYNC; // undocumented

          // Finishes loading by calling the callback (exactly once)
          function finish(err, root) {
            /* istanbul ignore if */
            if (!callback) {
              return;
            }
            if (sync) {
              throw err;
            }
            var cb = callback;
            callback = null;
            if (root) {
              root.resolveAll();
            }
            cb(err, root);
          }

          // Bundled definition existence checking
          function getBundledFileName(filename) {
            var idx = filename.lastIndexOf("google/protobuf/");
            if (idx > -1) {
              var altname = filename.substring(idx);
              if (altname in common) return altname;
            }
            return null;
          }

          // Processes a single file
          function process(filename, source) {
            try {
              if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
              if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
                parse.filename = filename;
                var parsed = parse(source, self, options),
                  resolved,
                  i = 0;
                if (parsed.imports) for (; i < parsed.imports.length; ++i) if (resolved = getBundledFileName(parsed.imports[i]) || self.resolvePath(filename, parsed.imports[i])) fetch(resolved);
                if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) if (resolved = getBundledFileName(parsed.weakImports[i]) || self.resolvePath(filename, parsed.weakImports[i])) fetch(resolved, true);
              }
            } catch (err) {
              finish(err);
            }
            if (!sync && !queued) {
              finish(null, self); // only once anyway
            }
          }

          // Fetches a single file
          function fetch(filename, weak) {
            filename = getBundledFileName(filename) || filename;

            // Skip if already loaded / attempted
            if (self.files.indexOf(filename) > -1) {
              return;
            }
            self.files.push(filename);

            // Shortcut bundled definitions
            if (filename in common) {
              if (sync) {
                process(filename, common[filename]);
              } else {
                ++queued;
                setTimeout(function () {
                  --queued;
                  process(filename, common[filename]);
                });
              }
              return;
            }

            // Otherwise fetch from disk or network
            if (sync) {
              var source;
              try {
                source = util.fs.readFileSync(filename).toString("utf8");
              } catch (err) {
                if (!weak) finish(err);
                return;
              }
              process(filename, source);
            } else {
              ++queued;
              self.fetch(filename, function (err, source) {
                --queued;
                /* istanbul ignore if */
                if (!callback) {
                  return; // terminated meanwhile
                }

                if (err) {
                  /* istanbul ignore else */
                  if (!weak) finish(err);else if (!queued)
                    // can't be covered reliably
                    finish(null, self);
                  return;
                }
                process(filename, source);
              });
            }
          }
          var queued = 0;

          // Assembling the root namespace doesn't require working type
          // references anymore, so we can load everything in parallel
          if (util.isString(filename)) {
            filename = [filename];
          }
          for (var i = 0, resolved; i < filename.length; ++i) if (resolved = self.resolvePath("", filename[i])) fetch(resolved);
          self.resolveAll();
          if (sync) {
            return self;
          }
          if (!queued) {
            finish(null, self);
          }
          return self;
        };
        // function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

        /**
         * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
         * @function Root#load
         * @param {string|string[]} filename Names of one or multiple files to load
         * @param {LoadCallback} callback Callback function
         * @returns {undefined}
         * @variation 2
         */
        // function load(filename:string, callback:LoadCallback):undefined

        /**
         * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
         * @function Root#load
         * @param {string|string[]} filename Names of one or multiple files to load
         * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
         * @returns {Promise<Root>} Promise
         * @variation 3
         */
        // function load(filename:string, [options:IParseOptions]):Promise<Root>

        /**
         * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
         * @function Root#loadSync
         * @param {string|string[]} filename Names of one or multiple files to load
         * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
         * @returns {Root} Root namespace
         * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
         */
        Root.prototype.loadSync = function loadSync(filename, options) {
          if (!util.isNode) throw Error("not supported");
          return this.load(filename, options, SYNC);
        };

        /**
         * @override
         */
        Root.prototype.resolveAll = function resolveAll() {
          if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
          }).join(", "));
          return Namespace.prototype.resolveAll.call(this);
        };

        // only uppercased (and thus conflict-free) children are exposed, see below
        var exposeRe = /^[A-Z]/;

        /**
         * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
         * @param {Root} root Root instance
         * @param {Field} field Declaring extension field witin the declaring type
         * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
         * @inner
         * @ignore
         */
        function tryHandleExtension(root, field) {
          var extendedType = field.parent.lookup(field.extend);
          if (extendedType) {
            var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
            //do not allow to extend same field twice to prevent the error
            if (extendedType.get(sisterField.name)) {
              return true;
            }
            sisterField.declaringField = field;
            field.extensionField = sisterField;
            extendedType.add(sisterField);
            return true;
          }
          return false;
        }

        /**
         * Called when any object is added to this root or its sub-namespaces.
         * @param {ReflectionObject} object Object added
         * @returns {undefined}
         * @private
         */
        Root.prototype._handleAdd = function _handleAdd(object) {
          if (object instanceof Field) {
            if ( /* an extension field (implies not part of a oneof) */object.extend !== undefined && /* not already handled */!object.extensionField) if (!tryHandleExtension(this, object)) this.deferred.push(object);
          } else if (object instanceof Enum) {
            if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
          } else if (!(object instanceof OneOf)) /* everything else is a namespace */{
              if (object instanceof Type)
                // Try to handle any deferred extensions
                for (var i = 0; i < this.deferred.length;) if (tryHandleExtension(this, this.deferred[i])) this.deferred.splice(i, 1);else ++i;
              for (var j = 0; j < /* initializes */object.nestedArray.length; ++j)
              // recurse into the namespace
              this._handleAdd(object._nestedArray[j]);
              if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
            }

          // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
          // properties of namespaces just like static code does. This allows using a .d.ts generated for
          // a static module with reflection-based solutions where the condition is met.
        };

        /**
         * Called when any object is removed from this root or its sub-namespaces.
         * @param {ReflectionObject} object Object removed
         * @returns {undefined}
         * @private
         */
        Root.prototype._handleRemove = function _handleRemove(object) {
          if (object instanceof Field) {
            if ( /* an extension field */object.extend !== undefined) {
              if ( /* already handled */object.extensionField) {
                // remove its sister field
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
              } else {
                // cancel the extension
                var index = this.deferred.indexOf(object);
                /* istanbul ignore else */
                if (index > -1) this.deferred.splice(index, 1);
              }
            }
          } else if (object instanceof Enum) {
            if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
          } else if (object instanceof Namespace) {
            for (var i = 0; i < /* initializes */object.nestedArray.length; ++i)
            // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);
            if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
          }
        };

        // Sets up cyclic dependencies (called in index-light)
        Root._configure = function (Type_, parse_, common_) {
          Type = Type_;
          parse = parse_;
          common = common_;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './namespace': __cjsMetaURL$1,
          './field': __cjsMetaURL$2,
          './enum': __cjsMetaURL$3,
          './oneof': __cjsMetaURL$4,
          './util': __cjsMetaURL$5
        };
      });
    }
  };
});

System.register("chunks:///_virtual/roots.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = {};

        /**
         * Named roots.
         * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
         * Can also be used manually to make roots available across modules.
         * @name roots
         * @type {Object.<string,Root>}
         * @example
         * // pbjs -r myroot -o compiled.js ...
         *
         * // in another module:
         * require("./compiled.js");
         *
         * // in any subsequent module:
         * var root = protobuf.roots["myroot"];
         */

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/rpc.js", ['./cjs-loader.mjs', './service2.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * Streaming RPC helpers.
         * @namespace
         */
        var rpc = exports;

        /**
         * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
         * @typedef RPCImpl
         * @type {function}
         * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
         * @param {Uint8Array} requestData Request data
         * @param {RPCImplCallback} callback Callback function
         * @returns {undefined}
         * @example
         * function rpcImpl(method, requestData, callback) {
         *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
         *         throw Error("no such method");
         *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
         *         callback(err, responseData);
         *     });
         * }
         */

        /**
         * Node-style callback as used by {@link RPCImpl}.
         * @typedef RPCImplCallback
         * @type {function}
         * @param {Error|null} error Error, if any, otherwise `null`
         * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
         * @returns {undefined}
         */

        rpc.Service = require("./rpc/service");

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './rpc/service': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/service.js", ['./cjs-loader.mjs', './namespace.js', './method.js', './util.js', './rpc.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Service;

        // extends Namespace
        var Namespace = require("./namespace");
        ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
        var Method = require("./method"),
          util = require("./util"),
          rpc = require("./rpc");

        /**
         * Constructs a new service instance.
         * @classdesc Reflected service.
         * @extends NamespaceBase
         * @constructor
         * @param {string} name Service name
         * @param {Object.<string,*>} [options] Service options
         * @throws {TypeError} If arguments are invalid
         */
        function Service(name, options) {
          Namespace.call(this, name, options);

          /**
           * Service methods.
           * @type {Object.<string,Method>}
           */
          this.methods = {}; // toJSON, marker

          /**
           * Cached methods as an array.
           * @type {Method[]|null}
           * @private
           */
          this._methodsArray = null;
        }

        /**
         * Service descriptor.
         * @interface IService
         * @extends INamespace
         * @property {Object.<string,IMethod>} methods Method descriptors
         */

        /**
         * Constructs a service from a service descriptor.
         * @param {string} name Service name
         * @param {IService} json Service descriptor
         * @returns {Service} Created service
         * @throws {TypeError} If arguments are invalid
         */
        Service.fromJSON = function fromJSON(name, json) {
          var service = new Service(name, json.options);
          /* istanbul ignore else */
          if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) service.add(Method.fromJSON(names[i], json.methods[names[i]]));
          if (json.nested) service.addJSON(json.nested);
          if (json.edition) service._edition = json.edition;
          service.comment = json.comment;
          service._defaultEdition = "proto3"; // For backwards-compatibility.
          return service;
        };

        /**
         * Converts this service to a service descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IService} Service descriptor
         */
        Service.prototype.toJSON = function toJSON(toJSONOptions) {
          var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["edition", this._editionToJSON(), "options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */{}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
        };

        /**
         * Methods of this service as an array for iteration.
         * @name Service#methodsArray
         * @type {Method[]}
         * @readonly
         */
        Object.defineProperty(Service.prototype, "methodsArray", {
          get: function get() {
            return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
          }
        });
        function clearCache(service) {
          service._methodsArray = null;
          return service;
        }

        /**
         * @override
         */
        Service.prototype.get = function get(name) {
          return this.methods[name] || Namespace.prototype.get.call(this, name);
        };

        /**
         * @override
         */
        Service.prototype.resolveAll = function resolveAll() {
          Namespace.prototype.resolve.call(this);
          var methods = this.methodsArray;
          for (var i = 0; i < methods.length; ++i) methods[i].resolve();
          return this;
        };

        /**
         * @override
         */
        Service.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
          edition = this._edition || edition;
          Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
          this.methodsArray.forEach(function (method) {
            method._resolveFeaturesRecursive(edition);
          });
          return this;
        };

        /**
         * @override
         */
        Service.prototype.add = function add(object) {
          /* istanbul ignore if */
          if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
          if (object instanceof Method) {
            this.methods[object.name] = object;
            object.parent = this;
            return clearCache(this);
          }
          return Namespace.prototype.add.call(this, object);
        };

        /**
         * @override
         */
        Service.prototype.remove = function remove(object) {
          if (object instanceof Method) {
            /* istanbul ignore if */
            if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
            delete this.methods[object.name];
            object.parent = null;
            return clearCache(this);
          }
          return Namespace.prototype.remove.call(this, object);
        };

        /**
         * Creates a runtime service using the specified rpc implementation.
         * @param {RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
         */
        Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
          var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
          for (var i = 0, method; i < /* initializes */this.methodsArray.length; ++i) {
            var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
            rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
              m: method,
              q: method.resolvedRequestType.ctor,
              s: method.resolvedResponseType.ctor
            });
          }
          return rpcService;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './namespace': __cjsMetaURL$1,
          './method': __cjsMetaURL$2,
          './util': __cjsMetaURL$3,
          './rpc': __cjsMetaURL$4
        };
      });
    }
  };
});

System.register("chunks:///_virtual/service2.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Service;
        var util = require("../util/minimal");

        // Extends EventEmitter
        (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

        /**
         * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
         *
         * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
         * @typedef rpc.ServiceMethodCallback
         * @template TRes extends Message<TRes>
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TRes} [response] Response message
         * @returns {undefined}
         */

        /**
         * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
         * @typedef rpc.ServiceMethod
         * @template TReq extends Message<TReq>
         * @template TRes extends Message<TRes>
         * @type {function}
         * @param {TReq|Properties<TReq>} request Request message or plain object
         * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
         * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
         */

        /**
         * Constructs a new RPC service instance.
         * @classdesc An RPC service as returned by {@link Service#create}.
         * @exports rpc.Service
         * @extends util.EventEmitter
         * @constructor
         * @param {RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Service(rpcImpl, requestDelimited, responseDelimited) {
          if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
          util.EventEmitter.call(this);

          /**
           * RPC implementation. Becomes `null` once the service is ended.
           * @type {RPCImpl|null}
           */
          this.rpcImpl = rpcImpl;

          /**
           * Whether requests are length-delimited.
           * @type {boolean}
           */
          this.requestDelimited = Boolean(requestDelimited);

          /**
           * Whether responses are length-delimited.
           * @type {boolean}
           */
          this.responseDelimited = Boolean(responseDelimited);
        }

        /**
         * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
         * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
         * @param {Constructor<TReq>} requestCtor Request constructor
         * @param {Constructor<TRes>} responseCtor Response constructor
         * @param {TReq|Properties<TReq>} request Request message or plain object
         * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
         * @returns {undefined}
         * @template TReq extends Message<TReq>
         * @template TRes extends Message<TRes>
         */
        Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
          if (!request) throw TypeError("request must be specified");
          var self = this;
          if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
          if (!self.rpcImpl) {
            setTimeout(function () {
              callback(Error("already ended"));
            }, 0);
            return undefined;
          }
          try {
            return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
              if (err) {
                self.emit("error", err, method);
                return callback(err);
              }
              if (response === null) {
                self.end( /* endedByRPC */true);
                return undefined;
              }
              if (!(response instanceof responseCtor)) {
                try {
                  response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                } catch (err) {
                  self.emit("error", err, method);
                  return callback(err);
                }
              }
              self.emit("data", response, method);
              return callback(null, response);
            });
          } catch (err) {
            self.emit("error", err, method);
            setTimeout(function () {
              callback(err);
            }, 0);
            return undefined;
          }
        };

        /**
         * Ends this service and emits the `end` event.
         * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
         * @returns {rpc.Service} `this`
         */
        Service.prototype.end = function end(endedByRPC) {
          if (this.rpcImpl) {
            if (!endedByRPC)
              // signal end to rpcImpl
              this.rpcImpl(null, null, null);
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          '../util/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/tokenize.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = tokenize;
        var delimRe = /[\s{}=;:[\],'"()<>]/g,
          stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
          stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var setCommentRe = /^ *[*/]+ */,
          setCommentAltRe = /^\s*\*?\/*/,
          setCommentSplitRe = /\n/g,
          whitespaceRe = /\s/,
          unescapeRe = /\\(.?)/g;
        var unescapeMap = {
          "0": "\0",
          "r": "\r",
          "n": "\n",
          "t": "\t"
        };

        /**
         * Unescapes a string.
         * @param {string} str String to unescape
         * @returns {string} Unescaped string
         * @property {Object.<string,string>} map Special characters map
         * @memberof tokenize
         */
        function unescape(str) {
          return str.replace(unescapeRe, function ($0, $1) {
            switch ($1) {
              case "\\":
              case "":
                return $1;
              default:
                return unescapeMap[$1] || "";
            }
          });
        }
        tokenize.unescape = unescape;

        /**
         * Gets the next token and advances.
         * @typedef TokenizerHandleNext
         * @type {function}
         * @returns {string|null} Next token or `null` on eof
         */

        /**
         * Peeks for the next token.
         * @typedef TokenizerHandlePeek
         * @type {function}
         * @returns {string|null} Next token or `null` on eof
         */

        /**
         * Pushes a token back to the stack.
         * @typedef TokenizerHandlePush
         * @type {function}
         * @param {string} token Token
         * @returns {undefined}
         */

        /**
         * Skips the next token.
         * @typedef TokenizerHandleSkip
         * @type {function}
         * @param {string} expected Expected token
         * @param {boolean} [optional=false] If optional
         * @returns {boolean} Whether the token matched
         * @throws {Error} If the token didn't match and is not optional
         */

        /**
         * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
         * @typedef TokenizerHandleCmnt
         * @type {function}
         * @param {number} [line] Line number
         * @returns {string|null} Comment text or `null` if none
         */

        /**
         * Handle object returned from {@link tokenize}.
         * @interface ITokenizerHandle
         * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
         * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
         * @property {TokenizerHandlePush} push Pushes a token back to the stack
         * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
         * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
         * @property {number} line Current line number
         */

        /**
         * Tokenizes the given .proto source and returns an object with useful utility functions.
         * @param {string} source Source contents
         * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
         * @returns {ITokenizerHandle} Tokenizer handle
         */
        function tokenize(source, alternateCommentMode) {
          /* eslint-disable callback-return */
          source = source.toString();
          var offset = 0,
            length = source.length,
            line = 1,
            lastCommentLine = 0,
            comments = {};
          var stack = [];
          var stringDelim = null;

          /* istanbul ignore next */
          /**
           * Creates an error for illegal syntax.
           * @param {string} subject Subject
           * @returns {Error} Error created
           * @inner
           */
          function illegal(subject) {
            return Error("illegal " + subject + " (line " + line + ")");
          }

          /**
           * Reads a string till its end.
           * @returns {string} String read
           * @inner
           */
          function readString() {
            var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
            re.lastIndex = offset - 1;
            var match = re.exec(source);
            if (!match) throw illegal("string");
            offset = re.lastIndex;
            push(stringDelim);
            stringDelim = null;
            return unescape(match[1]);
          }

          /**
           * Gets the character at `pos` within the source.
           * @param {number} pos Position
           * @returns {string} Character
           * @inner
           */
          function charAt(pos) {
            return source.charAt(pos);
          }

          /**
           * Sets the current comment text.
           * @param {number} start Start offset
           * @param {number} end End offset
           * @param {boolean} isLeading set if a leading comment
           * @returns {undefined}
           * @inner
           */
          function setComment(start, end, isLeading) {
            var comment = {
              type: source.charAt(start++),
              lineEmpty: false,
              leading: isLeading
            };
            var lookback;
            if (alternateCommentMode) {
              lookback = 2; // alternate comment parsing: "//" or "/*"
            } else {
              lookback = 3; // "///" or "/**"
            }

            var commentOffset = start - lookback,
              c;
            do {
              if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
                comment.lineEmpty = true;
                break;
              }
            } while (c === " " || c === "\t");
            var lines = source.substring(start, end).split(setCommentSplitRe);
            for (var i = 0; i < lines.length; ++i) lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
            comment.text = lines.join("\n").trim();
            comments[line] = comment;
            lastCommentLine = line;
          }
          function isDoubleSlashCommentLine(startOffset) {
            var endOffset = findEndOfLine(startOffset);

            // see if remaining line matches comment pattern
            var lineText = source.substring(startOffset, endOffset);
            var isComment = /^\s*\/\//.test(lineText);
            return isComment;
          }
          function findEndOfLine(cursor) {
            // find end of cursor's line
            var endOffset = cursor;
            while (endOffset < length && charAt(endOffset) !== "\n") {
              endOffset++;
            }
            return endOffset;
          }

          /**
           * Obtains the next token.
           * @returns {string|null} Next token or `null` on eof
           * @inner
           */
          function next() {
            if (stack.length > 0) return stack.shift();
            if (stringDelim) return readString();
            var repeat,
              prev,
              curr,
              start,
              isDoc,
              isLeadingComment = offset === 0;
            do {
              if (offset === length) return null;
              repeat = false;
              while (whitespaceRe.test(curr = charAt(offset))) {
                if (curr === "\n") {
                  isLeadingComment = true;
                  ++line;
                }
                if (++offset === length) return null;
              }
              if (charAt(offset) === "/") {
                if (++offset === length) {
                  throw illegal("comment");
                }
                if (charAt(offset) === "/") {
                  // Line
                  if (!alternateCommentMode) {
                    // check for triple-slash comment
                    isDoc = charAt(start = offset + 1) === "/";
                    while (charAt(++offset) !== "\n") {
                      if (offset === length) {
                        return null;
                      }
                    }
                    ++offset;
                    if (isDoc) {
                      setComment(start, offset - 1, isLeadingComment);
                      // Trailing comment cannot not be multi-line,
                      // so leading comment state should be reset to handle potential next comments
                      isLeadingComment = true;
                    }
                    ++line;
                    repeat = true;
                  } else {
                    // check for double-slash comments, consolidating consecutive lines
                    start = offset;
                    isDoc = false;
                    if (isDoubleSlashCommentLine(offset - 1)) {
                      isDoc = true;
                      do {
                        offset = findEndOfLine(offset);
                        if (offset === length) {
                          break;
                        }
                        offset++;
                        if (!isLeadingComment) {
                          // Trailing comment cannot not be multi-line
                          break;
                        }
                      } while (isDoubleSlashCommentLine(offset));
                    } else {
                      offset = Math.min(length, findEndOfLine(offset) + 1);
                    }
                    if (isDoc) {
                      setComment(start, offset, isLeadingComment);
                      isLeadingComment = true;
                    }
                    line++;
                    repeat = true;
                  }
                } else if ((curr = charAt(offset)) === "*") {
                  /* Block */
                  // check for /** (regular comment mode) or /* (alternate comment mode)
                  start = offset + 1;
                  isDoc = alternateCommentMode || charAt(start) === "*";
                  do {
                    if (curr === "\n") {
                      ++line;
                    }
                    if (++offset === length) {
                      throw illegal("comment");
                    }
                    prev = curr;
                    curr = charAt(offset);
                  } while (prev !== "*" || curr !== "/");
                  ++offset;
                  if (isDoc) {
                    setComment(start, offset - 2, isLeadingComment);
                    isLeadingComment = true;
                  }
                  repeat = true;
                } else {
                  return "/";
                }
              }
            } while (repeat);

            // offset !== length if we got here

            var end = offset;
            delimRe.lastIndex = 0;
            var delim = delimRe.test(charAt(end++));
            if (!delim) while (end < length && !delimRe.test(charAt(end))) ++end;
            var token = source.substring(offset, offset = end);
            if (token === "\"" || token === "'") stringDelim = token;
            return token;
          }

          /**
           * Pushes a token back to the stack.
           * @param {string} token Token
           * @returns {undefined}
           * @inner
           */
          function push(token) {
            stack.push(token);
          }

          /**
           * Peeks for the next token.
           * @returns {string|null} Token or `null` on eof
           * @inner
           */
          function peek() {
            if (!stack.length) {
              var token = next();
              if (token === null) return null;
              push(token);
            }
            return stack[0];
          }

          /**
           * Skips a token.
           * @param {string} expected Expected token
           * @param {boolean} [optional=false] Whether the token is optional
           * @returns {boolean} `true` when skipped, `false` if not
           * @throws {Error} When a required token is not present
           * @inner
           */
          function skip(expected, optional) {
            var actual = peek(),
              equals = actual === expected;
            if (equals) {
              next();
              return true;
            }
            if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
            return false;
          }

          /**
           * Gets a comment.
           * @param {number} [trailingLine] Line number if looking for a trailing comment
           * @returns {string|null} Comment text
           * @inner
           */
          function cmnt(trailingLine) {
            var ret = null;
            var comment;
            if (trailingLine === undefined) {
              comment = comments[line - 1];
              delete comments[line - 1];
              if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
                ret = comment.leading ? comment.text : null;
              }
            } else {
              /* istanbul ignore else */
              if (lastCommentLine < trailingLine) {
                peek();
              }
              comment = comments[trailingLine];
              delete comments[trailingLine];
              if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
                ret = comment.leading ? null : comment.text;
              }
            }
            return ret;
          }
          return Object.defineProperty({
            next: next,
            peek: peek,
            push: push,
            skip: skip,
            cmnt: cmnt
          }, "line", {
            get: function get() {
              return line;
            }
          });
          /* eslint-enable callback-return */
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/type.js", ['./cjs-loader.mjs', './namespace.js', './enum.js', './oneof.js', './field.js', './mapfield.js', './service.js', './message.js', './reader.js', './writer.js', './util.js', './encoder.js', './decoder.js', './verifier.js', './converter.js', './wrappers.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8, __cjsMetaURL$9, __cjsMetaURL$a, __cjsMetaURL$b, __cjsMetaURL$c, __cjsMetaURL$d, __cjsMetaURL$e, __cjsMetaURL$f;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$9 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$a = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$b = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$c = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$d = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$e = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$f = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Type;

        // extends Namespace
        var Namespace = require("./namespace");
        ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
        var Enum = require("./enum"),
          OneOf = require("./oneof"),
          Field = require("./field"),
          MapField = require("./mapfield"),
          Service = require("./service"),
          Message = require("./message"),
          Reader = require("./reader"),
          Writer = require("./writer"),
          util = require("./util"),
          encoder = require("./encoder"),
          decoder = require("./decoder"),
          verifier = require("./verifier"),
          converter = require("./converter"),
          wrappers = require("./wrappers");

        /**
         * Constructs a new reflected message type instance.
         * @classdesc Reflected message type.
         * @extends NamespaceBase
         * @constructor
         * @param {string} name Message name
         * @param {Object.<string,*>} [options] Declared options
         */
        function Type(name, options) {
          Namespace.call(this, name, options);

          /**
           * Message fields.
           * @type {Object.<string,Field>}
           */
          this.fields = {}; // toJSON, marker

          /**
           * Oneofs declared within this namespace, if any.
           * @type {Object.<string,OneOf>}
           */
          this.oneofs = undefined; // toJSON

          /**
           * Extension ranges, if any.
           * @type {number[][]}
           */
          this.extensions = undefined; // toJSON

          /**
           * Reserved ranges, if any.
           * @type {Array.<number[]|string>}
           */
          this.reserved = undefined; // toJSON

          /*?
           * Whether this type is a legacy group.
           * @type {boolean|undefined}
           */
          this.group = undefined; // toJSON

          /**
           * Cached fields by id.
           * @type {Object.<number,Field>|null}
           * @private
           */
          this._fieldsById = null;

          /**
           * Cached fields as an array.
           * @type {Field[]|null}
           * @private
           */
          this._fieldsArray = null;

          /**
           * Cached oneofs as an array.
           * @type {OneOf[]|null}
           * @private
           */
          this._oneofsArray = null;

          /**
           * Cached constructor.
           * @type {Constructor<{}>}
           * @private
           */
          this._ctor = null;
        }
        Object.defineProperties(Type.prototype, {
          /**
           * Message fields by id.
           * @name Type#fieldsById
           * @type {Object.<number,Field>}
           * @readonly
           */
          fieldsById: {
            get: function get() {
              /* istanbul ignore if */
              if (this._fieldsById) return this._fieldsById;
              this._fieldsById = {};
              for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                var field = this.fields[names[i]],
                  id = field.id;

                /* istanbul ignore if */
                if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
                this._fieldsById[id] = field;
              }
              return this._fieldsById;
            }
          },
          /**
           * Fields of this message as an array for iteration.
           * @name Type#fieldsArray
           * @type {Field[]}
           * @readonly
           */
          fieldsArray: {
            get: function get() {
              return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
            }
          },
          /**
           * Oneofs of this message as an array for iteration.
           * @name Type#oneofsArray
           * @type {OneOf[]}
           * @readonly
           */
          oneofsArray: {
            get: function get() {
              return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
            }
          },
          /**
           * The registered constructor, if any registered, otherwise a generic constructor.
           * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
           * @name Type#ctor
           * @type {Constructor<{}>}
           */
          ctor: {
            get: function get() {
              return this._ctor || (this.ctor = Type.generateConstructor(this)());
            },
            set: function set(ctor) {
              // Ensure proper prototype
              var prototype = ctor.prototype;
              if (!(prototype instanceof Message)) {
                (ctor.prototype = new Message()).constructor = ctor;
                util.merge(ctor.prototype, prototype);
              }

              // Classes and messages reference their reflected type
              ctor.$type = ctor.prototype.$type = this;

              // Mix in static methods
              util.merge(ctor, Message, true);
              this._ctor = ctor;

              // Messages have non-enumerable default values on their prototype
              var i = 0;
              for (; i < /* initializes */this.fieldsArray.length; ++i) this._fieldsArray[i].resolve(); // ensures a proper value

              // Messages have non-enumerable getters and setters for each virtual oneof field
              var ctorProperties = {};
              for (i = 0; i < /* initializes */this.oneofsArray.length; ++i) ctorProperties[this._oneofsArray[i].resolve().name] = {
                get: util.oneOfGetter(this._oneofsArray[i].oneof),
                set: util.oneOfSetter(this._oneofsArray[i].oneof)
              };
              if (i) Object.defineProperties(ctor.prototype, ctorProperties);
            }
          }
        });

        /**
         * Generates a constructor function for the specified type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        Type.generateConstructor = function generateConstructor(mtype) {
          /* eslint-disable no-unexpected-multiline */
          var gen = util.codegen(["p"], mtype.name);
          // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype
          for (var i = 0, field; i < mtype.fieldsArray.length; ++i) if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
          return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
          ("this[ks[i]]=p[ks[i]]");
          /* eslint-enable no-unexpected-multiline */
        };

        function clearCache(type) {
          type._fieldsById = type._fieldsArray = type._oneofsArray = null;
          delete type.encode;
          delete type.decode;
          delete type.verify;
          return type;
        }

        /**
         * Message type descriptor.
         * @interface IType
         * @extends INamespace
         * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
         * @property {Object.<string,IField>} fields Field descriptors
         * @property {number[][]} [extensions] Extension ranges
         * @property {Array.<number[]|string>} [reserved] Reserved ranges
         * @property {boolean} [group=false] Whether a legacy group or not
         */

        /**
         * Creates a message type from a message type descriptor.
         * @param {string} name Message name
         * @param {IType} json Message type descriptor
         * @returns {Type} Created message type
         */
        Type.fromJSON = function fromJSON(name, json) {
          var type = new Type(name, json.options);
          type.extensions = json.extensions;
          type.reserved = json.reserved;
          var names = Object.keys(json.fields),
            i = 0;
          for (; i < names.length; ++i) type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
          if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
          if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add(
            // most to least likely
            (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
          }
          if (json.extensions && json.extensions.length) type.extensions = json.extensions;
          if (json.reserved && json.reserved.length) type.reserved = json.reserved;
          if (json.group) type.group = true;
          if (json.comment) type.comment = json.comment;
          if (json.edition) type._edition = json.edition;
          type._defaultEdition = "proto3"; // For backwards-compatibility.
          return type;
        };

        /**
         * Converts this message type to a message type descriptor.
         * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
         * @returns {IType} Message type descriptor
         */
        Type.prototype.toJSON = function toJSON(toJSONOptions) {
          var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
          var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
          return util.toObject(["edition", this._editionToJSON(), "options", inherited && inherited.options || undefined, "oneofs", Namespace.arrayToJSON(this.oneofsArray, toJSONOptions), "fields", Namespace.arrayToJSON(this.fieldsArray.filter(function (obj) {
            return !obj.declaringField;
          }), toJSONOptions) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
        };

        /**
         * @override
         */
        Type.prototype.resolveAll = function resolveAll() {
          Namespace.prototype.resolveAll.call(this);
          var oneofs = this.oneofsArray;
          i = 0;
          while (i < oneofs.length) oneofs[i++].resolve();
          var fields = this.fieldsArray,
            i = 0;
          while (i < fields.length) fields[i++].resolve();
          return this;
        };

        /**
         * @override
         */
        Type.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
          edition = this._edition || edition;
          Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
          this.oneofsArray.forEach(function (oneof) {
            oneof._resolveFeatures(edition);
          });
          this.fieldsArray.forEach(function (field) {
            field._resolveFeatures(edition);
          });
          return this;
        };

        /**
         * @override
         */
        Type.prototype.get = function get(name) {
          return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
        };

        /**
         * Adds a nested object to this type.
         * @param {ReflectionObject} object Nested object to add
         * @returns {Type} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
         */
        Type.prototype.add = function add(object) {
          if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
          if (object instanceof Field && object.extend === undefined) {
            // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
            // The root object takes care of adding distinct sister-fields to the respective extended
            // type instead.

            // avoids calling the getter if not absolutely necessary because it's called quite frequently
            if (this._fieldsById ? /* istanbul ignore next */this._fieldsById[object.id] : this.fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
            if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
            if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
            if (object.parent) object.parent.remove(object);
            this.fields[object.name] = object;
            object.message = this;
            object.onAdd(this);
            return clearCache(this);
          }
          if (object instanceof OneOf) {
            if (!this.oneofs) this.oneofs = {};
            this.oneofs[object.name] = object;
            object.onAdd(this);
            return clearCache(this);
          }
          return Namespace.prototype.add.call(this, object);
        };

        /**
         * Removes a nested object from this type.
         * @param {ReflectionObject} object Nested object to remove
         * @returns {Type} `this`
         * @throws {TypeError} If arguments are invalid
         * @throws {Error} If `object` is not a member of this type
         */
        Type.prototype.remove = function remove(object) {
          if (object instanceof Field && object.extend === undefined) {
            // See Type#add for the reason why extension fields are excluded here.

            /* istanbul ignore if */
            if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
            delete this.fields[object.name];
            object.parent = null;
            object.onRemove(this);
            return clearCache(this);
          }
          if (object instanceof OneOf) {
            /* istanbul ignore if */
            if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
            delete this.oneofs[object.name];
            object.parent = null;
            object.onRemove(this);
            return clearCache(this);
          }
          return Namespace.prototype.remove.call(this, object);
        };

        /**
         * Tests if the specified id is reserved.
         * @param {number} id Id to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Type.prototype.isReservedId = function isReservedId(id) {
          return Namespace.isReservedId(this.reserved, id);
        };

        /**
         * Tests if the specified name is reserved.
         * @param {string} name Name to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        Type.prototype.isReservedName = function isReservedName(name) {
          return Namespace.isReservedName(this.reserved, name);
        };

        /**
         * Creates a new message of this type using the specified properties.
         * @param {Object.<string,*>} [properties] Properties to set
         * @returns {Message<{}>} Message instance
         */
        Type.prototype.create = function create(properties) {
          return new this.ctor(properties);
        };

        /**
         * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
         * @returns {Type} `this`
         */
        Type.prototype.setup = function setup() {
          // Sets up everything at once so that the prototype chain does not have to be re-evaluated
          // multiple times (V8, soft-deopt prototype-check).

          var fullName = this.fullName,
            types = [];
          for (var i = 0; i < /* initializes */this.fieldsArray.length; ++i) types.push(this._fieldsArray[i].resolve().resolvedType);

          // Replace setup methods with type-specific generated functions
          this.encode = encoder(this)({
            Writer: Writer,
            types: types,
            util: util
          });
          this.decode = decoder(this)({
            Reader: Reader,
            types: types,
            util: util
          });
          this.verify = verifier(this)({
            types: types,
            util: util
          });
          this.fromObject = converter.fromObject(this)({
            types: types,
            util: util
          });
          this.toObject = converter.toObject(this)({
            types: types,
            util: util
          });

          // Inject custom wrappers for common types
          var wrapper = wrappers[fullName];
          if (wrapper) {
            var originalThis = Object.create(this);
            // if (wrapper.fromObject) {
            originalThis.fromObject = this.fromObject;
            this.fromObject = wrapper.fromObject.bind(originalThis);
            // }
            // if (wrapper.toObject) {
            originalThis.toObject = this.toObject;
            this.toObject = wrapper.toObject.bind(originalThis);
            // }
          }

          return this;
        };

        /**
         * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
         * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
         * @param {Writer} [writer] Writer to encode to
         * @returns {Writer} writer
         */
        Type.prototype.encode = function encode_setup(message, writer) {
          return this.setup().encode(message, writer); // overrides this method
        };

        /**
         * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
         * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
         * @param {Writer} [writer] Writer to encode to
         * @returns {Writer} writer
         */
        Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a message of this type.
         * @param {Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Length of the message, if known beforehand
         * @returns {Message<{}>} Decoded message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {util.ProtocolError<{}>} If required fields are missing
         */
        Type.prototype.decode = function decode_setup(reader, length) {
          return this.setup().decode(reader, length); // overrides this method
        };

        /**
         * Decodes a message of this type preceeded by its byte length as a varint.
         * @param {Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message<{}>} Decoded message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {util.ProtocolError} If required fields are missing
         */
        Type.prototype.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof Reader)) reader = Reader.create(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies that field values are valid and that required fields are present.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {null|string} `null` if valid, otherwise the reason why it is not
         */
        Type.prototype.verify = function verify_setup(message) {
          return this.setup().verify(message); // overrides this method
        };

        /**
         * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object to convert
         * @returns {Message<{}>} Message instance
         */
        Type.prototype.fromObject = function fromObject(object) {
          return this.setup().fromObject(object);
        };

        /**
         * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
         * @interface IConversionOptions
         * @property {Function} [longs] Long conversion type.
         * Valid values are `String` and `Number` (the global types).
         * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
         * @property {Function} [enums] Enum value conversion type.
         * Only valid value is `String` (the global type).
         * Defaults to copy the present value, which is the numeric id.
         * @property {Function} [bytes] Bytes value conversion type.
         * Valid values are `Array` and (a base64 encoded) `String` (the global types).
         * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
         * @property {boolean} [defaults=false] Also sets default values on the resulting object
         * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
         * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
         * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
         * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
         */

        /**
         * Creates a plain object from a message of this type. Also converts values to other types if specified.
         * @param {Message<{}>} message Message instance
         * @param {IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Type.prototype.toObject = function toObject(message, options) {
          return this.setup().toObject(message, options);
        };

        /**
         * Decorator function as returned by {@link Type.d} (TypeScript).
         * @typedef TypeDecorator
         * @type {function}
         * @param {Constructor<T>} target Target constructor
         * @returns {undefined}
         * @template T extends Message<T>
         */

        /**
         * Type decorator (TypeScript).
         * @param {string} [typeName] Type name, defaults to the constructor's name
         * @returns {TypeDecorator<T>} Decorator function
         * @template T extends Message<T>
         */
        Type.d = function decorateType(typeName) {
          return function typeDecorator(target) {
            util.decorateType(target, typeName);
          };
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './namespace': __cjsMetaURL$1,
          './enum': __cjsMetaURL$2,
          './oneof': __cjsMetaURL$3,
          './field': __cjsMetaURL$4,
          './mapfield': __cjsMetaURL$5,
          './service': __cjsMetaURL$6,
          './message': __cjsMetaURL$7,
          './reader': __cjsMetaURL$8,
          './writer': __cjsMetaURL$9,
          './util': __cjsMetaURL$a,
          './encoder': __cjsMetaURL$b,
          './decoder': __cjsMetaURL$c,
          './verifier': __cjsMetaURL$d,
          './converter': __cjsMetaURL$e,
          './wrappers': __cjsMetaURL$f
        };
      });
    }
  };
});

System.register("chunks:///_virtual/types.js", ['./cjs-loader.mjs', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * Common type constants.
         * @namespace
         */
        var types = exports;
        var util = require("./util");
        var s = ["double",
        // 0
        "float",
        // 1
        "int32",
        // 2
        "uint32",
        // 3
        "sint32",
        // 4
        "fixed32",
        // 5
        "sfixed32",
        // 6
        "int64",
        // 7
        "uint64",
        // 8
        "sint64",
        // 9
        "fixed64",
        // 10
        "sfixed64",
        // 11
        "bool",
        // 12
        "string",
        // 13
        "bytes" // 14
        ];

        function bake(values, offset) {
          var i = 0,
            o = {};
          offset |= 0;
          while (i < values.length) o[s[i + offset]] = values[i++];
          return o;
        }

        /**
         * Basic type wire types.
         * @type {Object.<string,number>}
         * @const
         * @property {number} double=1 Fixed64 wire type
         * @property {number} float=5 Fixed32 wire type
         * @property {number} int32=0 Varint wire type
         * @property {number} uint32=0 Varint wire type
         * @property {number} sint32=0 Varint wire type
         * @property {number} fixed32=5 Fixed32 wire type
         * @property {number} sfixed32=5 Fixed32 wire type
         * @property {number} int64=0 Varint wire type
         * @property {number} uint64=0 Varint wire type
         * @property {number} sint64=0 Varint wire type
         * @property {number} fixed64=1 Fixed64 wire type
         * @property {number} sfixed64=1 Fixed64 wire type
         * @property {number} bool=0 Varint wire type
         * @property {number} string=2 Ldelim wire type
         * @property {number} bytes=2 Ldelim wire type
         */
        types.basic = bake([/* double   */1, /* float    */5, /* int32    */0, /* uint32   */0, /* sint32   */0, /* fixed32  */5, /* sfixed32 */5, /* int64    */0, /* uint64   */0, /* sint64   */0, /* fixed64  */1, /* sfixed64 */1, /* bool     */0, /* string   */2, /* bytes    */2]);

        /**
         * Basic type defaults.
         * @type {Object.<string,*>}
         * @const
         * @property {number} double=0 Double default
         * @property {number} float=0 Float default
         * @property {number} int32=0 Int32 default
         * @property {number} uint32=0 Uint32 default
         * @property {number} sint32=0 Sint32 default
         * @property {number} fixed32=0 Fixed32 default
         * @property {number} sfixed32=0 Sfixed32 default
         * @property {number} int64=0 Int64 default
         * @property {number} uint64=0 Uint64 default
         * @property {number} sint64=0 Sint32 default
         * @property {number} fixed64=0 Fixed64 default
         * @property {number} sfixed64=0 Sfixed64 default
         * @property {boolean} bool=false Bool default
         * @property {string} string="" String default
         * @property {Array.<number>} bytes=Array(0) Bytes default
         * @property {null} message=null Message default
         */
        types.defaults = bake([/* double   */0, /* float    */0, /* int32    */0, /* uint32   */0, /* sint32   */0, /* fixed32  */0, /* sfixed32 */0, /* int64    */0, /* uint64   */0, /* sint64   */0, /* fixed64  */0, /* sfixed64 */0, /* bool     */false, /* string   */"", /* bytes    */util.emptyArray, /* message  */null]);

        /**
         * Basic long type wire types.
         * @type {Object.<string,number>}
         * @const
         * @property {number} int64=0 Varint wire type
         * @property {number} uint64=0 Varint wire type
         * @property {number} sint64=0 Varint wire type
         * @property {number} fixed64=1 Fixed64 wire type
         * @property {number} sfixed64=1 Fixed64 wire type
         */
        types["long"] = bake([/* int64    */0, /* uint64   */0, /* sint64   */0, /* fixed64  */1, /* sfixed64 */1], 7);

        /**
         * Allowed types for map keys with their associated wire type.
         * @type {Object.<string,number>}
         * @const
         * @property {number} int32=0 Varint wire type
         * @property {number} uint32=0 Varint wire type
         * @property {number} sint32=0 Varint wire type
         * @property {number} fixed32=5 Fixed32 wire type
         * @property {number} sfixed32=5 Fixed32 wire type
         * @property {number} int64=0 Varint wire type
         * @property {number} uint64=0 Varint wire type
         * @property {number} sint64=0 Varint wire type
         * @property {number} fixed64=1 Fixed64 wire type
         * @property {number} sfixed64=1 Fixed64 wire type
         * @property {number} bool=0 Varint wire type
         * @property {number} string=2 Ldelim wire type
         */
        types.mapKey = bake([/* int32    */0, /* uint32   */0, /* sint32   */0, /* fixed32  */5, /* sfixed32 */5, /* int64    */0, /* uint64   */0, /* sint64   */0, /* fixed64  */1, /* sfixed64 */1, /* bool     */0, /* string   */2], 2);

        /**
         * Allowed types for packed repeated fields with their associated wire type.
         * @type {Object.<string,number>}
         * @const
         * @property {number} double=1 Fixed64 wire type
         * @property {number} float=5 Fixed32 wire type
         * @property {number} int32=0 Varint wire type
         * @property {number} uint32=0 Varint wire type
         * @property {number} sint32=0 Varint wire type
         * @property {number} fixed32=5 Fixed32 wire type
         * @property {number} sfixed32=5 Fixed32 wire type
         * @property {number} int64=0 Varint wire type
         * @property {number} uint64=0 Varint wire type
         * @property {number} sint64=0 Varint wire type
         * @property {number} fixed64=1 Fixed64 wire type
         * @property {number} sfixed64=1 Fixed64 wire type
         * @property {number} bool=0 Varint wire type
         */
        types.packed = bake([/* double   */1, /* float    */5, /* int32    */0, /* uint32   */0, /* sint32   */0, /* fixed32  */5, /* sfixed32 */5, /* int64    */0, /* uint64   */0, /* sint64   */0, /* fixed64  */1, /* sfixed64 */1, /* bool     */0]);

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './util': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/util.js", ['./cjs-loader.mjs', './minimal.js', './roots.js', './index3.js', './index4.js', './index5.js', './type.js', './enum.js', './root.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }],
    execute: function () {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
      }
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * Various utility functions.
         * @namespace
         */
        var util = module.exports = require("./util/minimal");
        var roots = require("./roots");
        var Type,
          // cyclic
          Enum;
        util.codegen = require("@protobufjs/codegen");
        util.fetch = require("@protobufjs/fetch");
        util.path = require("@protobufjs/path");

        /**
         * Node's fs module if available.
         * @type {Object.<string,*>}
         */
        util.fs = util.inquire("fs");

        /**
         * Converts an object's values to an array.
         * @param {Object.<string,*>} object Object to convert
         * @returns {Array.<*>} Converted array
         */
        util.toArray = function toArray(object) {
          if (object) {
            var keys = Object.keys(object),
              array = new Array(keys.length),
              index = 0;
            while (index < keys.length) array[index] = object[keys[index++]];
            return array;
          }
          return [];
        };

        /**
         * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
         * @param {Array.<*>} array Array to convert
         * @returns {Object.<string,*>} Converted object
         */
        util.toObject = function toObject(array) {
          var object = {},
            index = 0;
          while (index < array.length) {
            var key = array[index++],
              val = array[index++];
            if (val !== undefined) object[key] = val;
          }
          return object;
        };
        var safePropBackslashRe = /\\/g,
          safePropQuoteRe = /"/g;

        /**
         * Tests whether the specified name is a reserved word in JS.
         * @param {string} name Name to test
         * @returns {boolean} `true` if reserved, otherwise `false`
         */
        util.isReserved = function isReserved(name) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
        };

        /**
         * Returns a safe property accessor for the specified property name.
         * @param {string} prop Property name
         * @returns {string} Safe accessor
         */
        util.safeProp = function safeProp(prop) {
          if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop)) return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
          return "." + prop;
        };

        /**
         * Converts the first character of a string to upper case.
         * @param {string} str String to convert
         * @returns {string} Converted string
         */
        util.ucFirst = function ucFirst(str) {
          return str.charAt(0).toUpperCase() + str.substring(1);
        };
        var camelCaseRe = /_([a-z])/g;

        /**
         * Converts a string to camel case.
         * @param {string} str String to convert
         * @returns {string} Converted string
         */
        util.camelCase = function camelCase(str) {
          return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function ($0, $1) {
            return $1.toUpperCase();
          });
        };

        /**
         * Compares reflected fields by id.
         * @param {Field} a First field
         * @param {Field} b Second field
         * @returns {number} Comparison value
         */
        util.compareFieldsById = function compareFieldsById(a, b) {
          return a.id - b.id;
        };

        /**
         * Decorator helper for types (TypeScript).
         * @param {Constructor<T>} ctor Constructor function
         * @param {string} [typeName] Type name, defaults to the constructor's name
         * @returns {Type} Reflected type
         * @template T extends Message<T>
         * @property {Root} root Decorators root
         */
        util.decorateType = function decorateType(ctor, typeName) {
          /* istanbul ignore if */
          if (ctor.$type) {
            if (typeName && ctor.$type.name !== typeName) {
              util.decorateRoot.remove(ctor.$type);
              ctor.$type.name = typeName;
              util.decorateRoot.add(ctor.$type);
            }
            return ctor.$type;
          }

          /* istanbul ignore next */
          if (!Type) Type = require("./type");
          var type = new Type(typeName || ctor.name);
          util.decorateRoot.add(type);
          type.ctor = ctor; // sets up .encode, .decode etc.
          Object.defineProperty(ctor, "$type", {
            value: type,
            enumerable: false
          });
          Object.defineProperty(ctor.prototype, "$type", {
            value: type,
            enumerable: false
          });
          return type;
        };
        var decorateEnumIndex = 0;

        /**
         * Decorator helper for enums (TypeScript).
         * @param {Object} object Enum object
         * @returns {Enum} Reflected enum
         */
        util.decorateEnum = function decorateEnum(object) {
          /* istanbul ignore if */
          if (object.$type) return object.$type;

          /* istanbul ignore next */
          if (!Enum) Enum = require("./enum");
          var enm = new Enum("Enum" + decorateEnumIndex++, object);
          util.decorateRoot.add(enm);
          Object.defineProperty(object, "$type", {
            value: enm,
            enumerable: false
          });
          return enm;
        };

        /**
         * Sets the value of a property by property path. If a value already exists, it is turned to an array
         * @param {Object.<string,*>} dst Destination object
         * @param {string} path dot '.' delimited path of the property to set
         * @param {Object} value the value to set
         * @param {boolean|undefined} [ifNotSet] Sets the option only if it isn't currently set
         * @returns {Object.<string,*>} Destination object
         */
        util.setProperty = function setProperty(dst, path, value, ifNotSet) {
          function setProp(dst, path, value) {
            var part = path.shift();
            if (part === "__proto__" || part === "prototype") {
              return dst;
            }
            if (path.length > 0) {
              dst[part] = setProp(dst[part] || {}, path, value);
            } else {
              var prevValue = dst[part];
              if (prevValue && ifNotSet) return dst;
              if (prevValue) value = [].concat(prevValue).concat(value);
              dst[part] = value;
            }
            return dst;
          }
          if (_typeof(dst) !== "object") throw TypeError("dst must be an object");
          if (!path) throw TypeError("path must be specified");
          path = path.split(".");
          return setProp(dst, path, value);
        };

        /**
         * Decorator root (TypeScript).
         * @name util.decorateRoot
         * @type {Root}
         * @readonly
         */
        Object.defineProperty(util, "decorateRoot", {
          get: function get() {
            return roots["decorated"] || (roots["decorated"] = new (require("./root"))());
          }
        });

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './util/minimal': __cjsMetaURL$1,
          './roots': __cjsMetaURL$2,
          '@protobufjs/codegen': __cjsMetaURL$3,
          '@protobufjs/fetch': __cjsMetaURL$4,
          '@protobufjs/path': __cjsMetaURL$5,
          './type': __cjsMetaURL$6,
          './enum': __cjsMetaURL$7,
          './root': __cjsMetaURL$8
        };
      });
    }
  };
});

System.register("chunks:///_virtual/verifier.js", ['./cjs-loader.mjs', './enum.js', './util.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = verifier;
        var Enum = require("./enum"),
          util = require("./util");
        function invalid(field, expected) {
          return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
        }

        /**
         * Generates a partial value verifier.
         * @param {Codegen} gen Codegen instance
         * @param {Field} field Reflected field
         * @param {number} fieldIndex Field index
         * @param {string} ref Variable reference
         * @returns {Codegen} Codegen instance
         * @ignore
         */
        function genVerifyValue(gen, field, fieldIndex, ref) {
          /* eslint-disable no-unexpected-multiline */
          if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) {
              gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
              for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
              gen("break")("}");
            } else {
              gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
            }
          } else {
            switch (field.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
                break;
              case "float":
              case "double":
                gen("if(typeof %s!==\"number\")", ref)("return%j", invalid(field, "number"));
                break;
              case "bool":
                gen("if(typeof %s!==\"boolean\")", ref)("return%j", invalid(field, "boolean"));
                break;
              case "string":
                gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
                break;
              case "bytes":
                gen("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)("return%j", invalid(field, "buffer"));
                break;
            }
          }
          return gen;
          /* eslint-enable no-unexpected-multiline */
        }

        /**
         * Generates a partial key verifier.
         * @param {Codegen} gen Codegen instance
         * @param {Field} field Reflected field
         * @param {string} ref Variable reference
         * @returns {Codegen} Codegen instance
         * @ignore
         */
        function genVerifyKey(gen, field, ref) {
          /* eslint-disable no-unexpected-multiline */
          switch (field.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
              ("return%j", invalid(field, "integer|Long key"));
              break;
            case "bool":
              gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
              break;
          }
          return gen;
          /* eslint-enable no-unexpected-multiline */
        }

        /**
         * Generates a verifier specific to the specified message type.
         * @param {Type} mtype Message type
         * @returns {Codegen} Codegen instance
         */
        function verifier(mtype) {
          /* eslint-disable no-unexpected-multiline */

          var gen = util.codegen(["m"], mtype.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var oneofs = mtype.oneofsArray,
            seenFirstField = {};
          if (oneofs.length) gen("var p={}");
          for (var i = 0; i < /* initializes */mtype.fieldsArray.length; ++i) {
            var field = mtype._fieldsArray[i].resolve(),
              ref = "m" + util.safeProp(field.name);
            if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null

            // map fields
            if (field.map) {
              gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
              genVerifyKey(gen, field, "k[i]");
              genVerifyValue(gen, field, i, ref + "[k[i]]")("}");

              // repeated fields
            } else if (field.repeated) {
              gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
              genVerifyValue(gen, field, i, ref + "[i]")("}");

              // required or present fields
            } else {
              if (field.partOf) {
                var oneofProp = util.safeProp(field.partOf.name);
                if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
                seenFirstField[field.partOf.name] = 1;
                gen("p%s=1", oneofProp);
              }
              genVerifyValue(gen, field, i, ref);
            }
            if (field.optional) gen("}");
          }
          return gen("return null");
          /* eslint-enable no-unexpected-multiline */
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './enum': __cjsMetaURL$1,
          './util': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/wrappers.js", ['./cjs-loader.mjs', './message.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        /**
         * Wrappers for common types.
         * @type {Object.<string,IWrapper>}
         * @const
         */
        var wrappers = exports;
        var Message = require("./message");

        /**
         * From object converter part of an {@link IWrapper}.
         * @typedef WrapperFromObjectConverter
         * @type {function}
         * @param {Object.<string,*>} object Plain object
         * @returns {Message<{}>} Message instance
         * @this Type
         */

        /**
         * To object converter part of an {@link IWrapper}.
         * @typedef WrapperToObjectConverter
         * @type {function}
         * @param {Message<{}>} message Message instance
         * @param {IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         * @this Type
         */

        /**
         * Common type wrapper part of {@link wrappers}.
         * @interface IWrapper
         * @property {WrapperFromObjectConverter} [fromObject] From object converter
         * @property {WrapperToObjectConverter} [toObject] To object converter
         */

        // Custom wrapper for Any
        wrappers[".google.protobuf.Any"] = {
          fromObject: function fromObject(object) {
            // unwrap value type if mapped
            if (object && object["@type"]) {
              // Only use fully qualified type name after the last '/'
              var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
              var type = this.lookup(name);
              /* istanbul ignore else */
              if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
                // type_url prefix is optional, but path seperator is required
                if (type_url.indexOf("/") === -1) {
                  type_url = "/" + type_url;
                }
                return this.create({
                  type_url: type_url,
                  value: type.encode(type.fromObject(object)).finish()
                });
              }
            }
            return this.fromObject(object);
          },
          toObject: function toObject(message, options) {
            // Default prefix
            var googleApi = "type.googleapis.com/";
            var prefix = "";
            var name = "";

            // decode value if requested and unmapped
            if (options && options.json && message.type_url && message.value) {
              // Only use fully qualified type name after the last '/'
              name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
              // Separate the prefix used
              prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
              var type = this.lookup(name);
              /* istanbul ignore else */
              if (type) message = type.decode(message.value);
            }

            // wrap value if unmapped
            if (!(message instanceof this.ctor) && message instanceof Message) {
              var object = message.$type.toObject(message, options);
              var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
              // Default to type.googleapis.com prefix if no prefix is used
              if (prefix === "") {
                prefix = googleApi;
              }
              name = prefix + messageName;
              object["@type"] = name;
              return object;
            }
            return this.toObject(message, options);
          }
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './message': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/writer_buffer.js", ['./cjs-loader.mjs', './writer.js', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = BufferWriter;

        // extends Writer
        var Writer = require("./writer");
        (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
        var util = require("./util/minimal");

        /**
         * Constructs a new buffer writer instance.
         * @classdesc Wire format writer using node buffers.
         * @extends Writer
         * @constructor
         */
        function BufferWriter() {
          Writer.call(this);
        }
        BufferWriter._configure = function () {
          /**
           * Allocates a buffer of the specified size.
           * @function
           * @param {number} size Buffer size
           * @returns {Buffer} Buffer
           */
          BufferWriter.alloc = util._Buffer_allocUnsafe;
          BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
            buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
            // also works for plain array values
          }
          /* istanbul ignore next */ : function writeBytesBuffer_copy(val, buf, pos) {
            if (val.copy)
              // Buffer values
              val.copy(buf, pos, 0, val.length);else for (var i = 0; i < val.length;)
            // plain array values
            buf[pos++] = val[i++];
          };
        };

        /**
         * @override
         */
        BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
          if (util.isString(value)) value = util._Buffer_from(value, "base64");
          var len = value.length >>> 0;
          this.uint32(len);
          if (len) this._push(BufferWriter.writeBytesBuffer, len, value);
          return this;
        };
        function writeStringBuffer(val, buf, pos) {
          if (val.length < 40)
            // plain js is faster for short strings (probably due to redundant assertions)
            util.utf8.write(val, buf, pos);else if (buf.utf8Write) buf.utf8Write(val, pos);else buf.write(val, pos);
        }

        /**
         * @override
         */
        BufferWriter.prototype.string = function write_string_buffer(value) {
          var len = util.Buffer.byteLength(value);
          this.uint32(len);
          if (len) this._push(writeStringBuffer, len, value);
          return this;
        };

        /**
         * Finishes the write operation.
         * @name BufferWriter#finish
         * @function
         * @returns {Buffer} Finished buffer
         */

        BufferWriter._configure();

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './writer': __cjsMetaURL$1,
          './util/minimal': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/writer.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        module.exports = Writer;
        var util = require("./util/minimal");
        var BufferWriter; // cyclic

        var LongBits = util.LongBits,
          base64 = util.base64,
          utf8 = util.utf8;

        /**
         * Constructs a new writer operation instance.
         * @classdesc Scheduled writer operation.
         * @constructor
         * @param {function(*, Uint8Array, number)} fn Function to call
         * @param {number} len Value byte length
         * @param {*} val Value to write
         * @ignore
         */
        function Op(fn, len, val) {
          /**
           * Function to call.
           * @type {function(Uint8Array, number, *)}
           */
          this.fn = fn;

          /**
           * Value byte length.
           * @type {number}
           */
          this.len = len;

          /**
           * Next operation.
           * @type {Writer.Op|undefined}
           */
          this.next = undefined;

          /**
           * Value to write.
           * @type {*}
           */
          this.val = val; // type varies
        }

        /* istanbul ignore next */
        function noop() {} // eslint-disable-line no-empty-function

        /**
         * Constructs a new writer state instance.
         * @classdesc Copied writer state.
         * @memberof Writer
         * @constructor
         * @param {Writer} writer Writer to copy state from
         * @ignore
         */
        function State(writer) {
          /**
           * Current head.
           * @type {Writer.Op}
           */
          this.head = writer.head;

          /**
           * Current tail.
           * @type {Writer.Op}
           */
          this.tail = writer.tail;

          /**
           * Current buffer length.
           * @type {number}
           */
          this.len = writer.len;

          /**
           * Next state.
           * @type {State|null}
           */
          this.next = writer.states;
        }

        /**
         * Constructs a new writer instance.
         * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
         * @constructor
         */
        function Writer() {
          /**
           * Current length.
           * @type {number}
           */
          this.len = 0;

          /**
           * Operations head.
           * @type {Object}
           */
          this.head = new Op(noop, 0, 0);

          /**
           * Operations tail
           * @type {Object}
           */
          this.tail = this.head;

          /**
           * Linked forked states.
           * @type {Object|null}
           */
          this.states = null;

          // When a value is written, the writer calculates its byte length and puts it into a linked
          // list of operations to perform when finish() is called. This both allows us to allocate
          // buffers of the exact required size and reduces the amount of work we have to do compared
          // to first calculating over objects and then encoding over objects. In our case, the encoding
          // part is just a linked list walk calling operations with already prepared values.
        }

        var create = function create() {
          return util.Buffer ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
              return new BufferWriter();
            })();
          }
          /* istanbul ignore next */ : function create_array() {
            return new Writer();
          };
        };

        /**
         * Creates a new writer.
         * @function
         * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
         */
        Writer.create = create();

        /**
         * Allocates a buffer of the specified size.
         * @param {number} size Buffer size
         * @returns {Uint8Array} Buffer
         */
        Writer.alloc = function alloc(size) {
          return new util.Array(size);
        };

        // Use Uint8Array buffer pool in the browser, just like node does with buffers
        /* istanbul ignore else */
        if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

        /**
         * Pushes a new operation to the queue.
         * @param {function(Uint8Array, number, *)} fn Function to call
         * @param {number} len Value byte length
         * @param {number} val Value to write
         * @returns {Writer} `this`
         * @private
         */
        Writer.prototype._push = function push(fn, len, val) {
          this.tail = this.tail.next = new Op(fn, len, val);
          this.len += len;
          return this;
        };
        function writeByte(val, buf, pos) {
          buf[pos] = val & 255;
        }
        function writeVarint32(val, buf, pos) {
          while (val > 127) {
            buf[pos++] = val & 127 | 128;
            val >>>= 7;
          }
          buf[pos] = val;
        }

        /**
         * Constructs a new varint writer operation instance.
         * @classdesc Scheduled varint writer operation.
         * @extends Op
         * @constructor
         * @param {number} len Value byte length
         * @param {number} val Value to write
         * @ignore
         */
        function VarintOp(len, val) {
          this.len = len;
          this.next = undefined;
          this.val = val;
        }
        VarintOp.prototype = Object.create(Op.prototype);
        VarintOp.prototype.fn = writeVarint32;

        /**
         * Writes an unsigned 32 bit value as a varint.
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.uint32 = function write_uint32(value) {
          // here, the call to this.push has been inlined and a varint specific Op subclass is used.
          // uint32 is by far the most frequently used operation and benefits significantly from this.
          this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
          return this;
        };

        /**
         * Writes a signed 32 bit value as a varint.
         * @function
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.int32 = function write_int32(value) {
          return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
          : this.uint32(value);
        };

        /**
         * Writes a 32 bit value as a varint, zig-zag encoded.
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.sint32 = function write_sint32(value) {
          return this.uint32((value << 1 ^ value >> 31) >>> 0);
        };
        function writeVarint64(val, buf, pos) {
          while (val.hi) {
            buf[pos++] = val.lo & 127 | 128;
            val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
            val.hi >>>= 7;
          }
          while (val.lo > 127) {
            buf[pos++] = val.lo & 127 | 128;
            val.lo = val.lo >>> 7;
          }
          buf[pos++] = val.lo;
        }

        /**
         * Writes an unsigned 64 bit value as a varint.
         * @param {Long|number|string} value Value to write
         * @returns {Writer} `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        Writer.prototype.uint64 = function write_uint64(value) {
          var bits = LongBits.from(value);
          return this._push(writeVarint64, bits.length(), bits);
        };

        /**
         * Writes a signed 64 bit value as a varint.
         * @function
         * @param {Long|number|string} value Value to write
         * @returns {Writer} `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        Writer.prototype.int64 = Writer.prototype.uint64;

        /**
         * Writes a signed 64 bit value as a varint, zig-zag encoded.
         * @param {Long|number|string} value Value to write
         * @returns {Writer} `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        Writer.prototype.sint64 = function write_sint64(value) {
          var bits = LongBits.from(value).zzEncode();
          return this._push(writeVarint64, bits.length(), bits);
        };

        /**
         * Writes a boolish value as a varint.
         * @param {boolean} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.bool = function write_bool(value) {
          return this._push(writeByte, 1, value ? 1 : 0);
        };
        function writeFixed32(val, buf, pos) {
          buf[pos] = val & 255;
          buf[pos + 1] = val >>> 8 & 255;
          buf[pos + 2] = val >>> 16 & 255;
          buf[pos + 3] = val >>> 24;
        }

        /**
         * Writes an unsigned 32 bit value as fixed 32 bits.
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.fixed32 = function write_fixed32(value) {
          return this._push(writeFixed32, 4, value >>> 0);
        };

        /**
         * Writes a signed 32 bit value as fixed 32 bits.
         * @function
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.sfixed32 = Writer.prototype.fixed32;

        /**
         * Writes an unsigned 64 bit value as fixed 64 bits.
         * @param {Long|number|string} value Value to write
         * @returns {Writer} `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        Writer.prototype.fixed64 = function write_fixed64(value) {
          var bits = LongBits.from(value);
          return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
        };

        /**
         * Writes a signed 64 bit value as fixed 64 bits.
         * @function
         * @param {Long|number|string} value Value to write
         * @returns {Writer} `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        Writer.prototype.sfixed64 = Writer.prototype.fixed64;

        /**
         * Writes a float (32 bit).
         * @function
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype["float"] = function write_float(value) {
          return this._push(util["float"].writeFloatLE, 4, value);
        };

        /**
         * Writes a double (64 bit float).
         * @function
         * @param {number} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype["double"] = function write_double(value) {
          return this._push(util["float"].writeDoubleLE, 8, value);
        };
        var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
          buf.set(val, pos); // also works for plain array values
        }
        /* istanbul ignore next */ : function writeBytes_for(val, buf, pos) {
          for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
        };

        /**
         * Writes a sequence of bytes.
         * @param {Uint8Array|string} value Buffer or base64 encoded string to write
         * @returns {Writer} `this`
         */
        Writer.prototype.bytes = function write_bytes(value) {
          var len = value.length >>> 0;
          if (!len) return this._push(writeByte, 1, 0);
          if (util.isString(value)) {
            var buf = Writer.alloc(len = base64.length(value));
            base64.decode(value, buf, 0);
            value = buf;
          }
          return this.uint32(len)._push(writeBytes, len, value);
        };

        /**
         * Writes a string.
         * @param {string} value Value to write
         * @returns {Writer} `this`
         */
        Writer.prototype.string = function write_string(value) {
          var len = utf8.length(value);
          return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
        };

        /**
         * Forks this writer's state by pushing it to a stack.
         * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
         * @returns {Writer} `this`
         */
        Writer.prototype.fork = function fork() {
          this.states = new State(this);
          this.head = this.tail = new Op(noop, 0, 0);
          this.len = 0;
          return this;
        };

        /**
         * Resets this instance to the last state.
         * @returns {Writer} `this`
         */
        Writer.prototype.reset = function reset() {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new Op(noop, 0, 0);
            this.len = 0;
          }
          return this;
        };

        /**
         * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
         * @returns {Writer} `this`
         */
        Writer.prototype.ldelim = function ldelim() {
          var head = this.head,
            tail = this.tail,
            len = this.len;
          this.reset().uint32(len);
          if (len) {
            this.tail.next = head.next; // skip noop
            this.tail = tail;
            this.len += len;
          }
          return this;
        };

        /**
         * Finishes the write operation.
         * @returns {Uint8Array} Finished buffer
         */
        Writer.prototype.finish = function finish() {
          var head = this.head.next,
            // skip noop
            buf = this.constructor.alloc(this.len),
            pos = 0;
          while (head) {
            head.fn(head.val, buf, pos);
            pos += head.len;
            head = head.next;
          }
          // this.head = this.tail = null;
          return buf;
        };
        Writer._configure = function (BufferWriter_) {
          BufferWriter = BufferWriter_;
          Writer.create = create();
          BufferWriter._configure();
        };

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './util/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

} }; });