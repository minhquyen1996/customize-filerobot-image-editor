"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _throttleDebounce = require("throttle-debounce");

var _Range = _interopRequireDefault(require("../Range"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var watermarkPositions = ["left-top", "center-top", "right-top", "left-center", "center", "right-center", "left-bottom", "center-bottom", "right-bottom"];

var _default = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateOpacity", function (value) {
      _this.setState({
        opacity: value
      }, function () {
        _this.props.updateState({
          watermark: _objectSpread({}, _this.props.watermark, {
            opacity: value
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeURL", function (event) {
      var nextValue = event.target.value;

      _this.setState({
        url: nextValue
      }, function () {
        _this.props.updateState({
          watermark: _objectSpread({}, _this.props.watermark, {
            url: ''
          })
        });

        _this.initWatermarkImage(nextValue);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPositionChange", function (value) {
      _this.setState({
        position: value
      }, function () {
        _this.props.updateState({
          watermark: _objectSpread({}, _this.props.watermark, {
            position: value
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initWatermarkImage", (0, _throttleDebounce.debounce)(500, function (url) {
      var logoImage = null;

      if (url) {
        logoImage = new Image();
        logoImage.setAttribute('crossOrigin', 'Anonymous');

        logoImage.onload = function () {
          _this.props.updateState({
            logoImage: logoImage,
            isShowSpinner: false,
            watermark: _objectSpread({}, _this.props.watermark, {
              url: url
            })
          });
        };

        logoImage.onerror = function () {
          _this.props.updateState({
            isShowSpinner: false
          });
        };

        logoImage.src = url + '?' + new Date().getTime();
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "onApplyWatermarkChange", function () {
      var nextValue = !_this.state.applyByDefault;

      _this.setState({
        applyByDefault: nextValue
      }, function () {
        _this.props.updateState({
          watermark: _objectSpread({}, _this.props.watermark, {
            applyByDefault: nextValue
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showWatermarkList", function () {
      _this.setState({
        showWaterMarkList: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideWatermarkList", function () {
      _this.setState({
        showWaterMarkList: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeWatermark", function (url) {
      _this.changeURL({
        target: {
          value: url
        }
      });

      _this.hideWatermarkList();
    });

    _this.state = {
      isBlockRatio: false,
      opacity: props.watermark.opacity || 0.7,
      position: props.watermark.position || 'center',
      url: props.watermark.url || '',
      urls: props.watermark.urls || [],
      isWatermarkList: props.watermark.urls && props.watermark.urls.length > 1,
      applyByDefault: props.watermark.applyByDefault || false,
      showWaterMarkList: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.watermark.applyByDefault !== this.props.watermark.applyByDefault) {
        this.setState({
          applyByDefault: nextProps.watermark.applyByDefault
        });

        if (nextProps.watermark.applyByDefault) {
          this.initWatermarkImage(nextProps.watermark.url);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isWatermarkList = _this$state.isWatermarkList,
          url = _this$state.url,
          urls = _this$state.urls,
          opacity = _this$state.opacity,
          position = _this$state.position,
          applyByDefault = _this$state.applyByDefault,
          showWaterMarkList = _this$state.showWaterMarkList;
      var t = this.props.t;
      return _react.default.createElement(_styledComponents.WatermarkWrapper, null, _react.default.createElement(_styledComponents.WatermarkInputs, null, _react.default.createElement(_styledComponents.WrapperForURL, null, _react.default.createElement("label", {
        htmlFor: "url"
      }, "Watermark URL"), _react.default.createElement(_styledComponents.FieldInput, {
        name: "url",
        fullSize: true,
        style: {
          width: 'calc(100% - 200px)'
        },
        value: url,
        onChange: this.changeURL
      }), isWatermarkList && _react.default.createElement(_styledComponents.SelectWatermarkLabel, {
        onClick: this.showWatermarkList
      }, "Select")), _react.default.createElement(_styledComponents.WrapperForOpacity, null, _react.default.createElement("label", {
        htmlFor: "opacity"
      }, "Opacity"), _react.default.createElement(_Range.default, {
        label: t['common.opacity'],
        min: 0,
        max: 1,
        step: 0.05,
        range: opacity,
        updateRange: this.updateOpacity
      }), _react.default.createElement(_styledComponents.Switcher, {
        id: "switch-watermark",
        checked: applyByDefault,
        handleChange: this.onApplyWatermarkChange,
        text: t['common.apply_watermark'],
        style: {
          lineHeight: 'inherit',
          float: 'none'
        }
      }))), _react.default.createElement(_styledComponents.WatermarkPositionWrapper, null, watermarkPositions.map(function (value) {
        return _react.default.createElement(_styledComponents.PositionSquare, {
          key: value,
          value: value,
          active: value === position,
          onClick: function onClick() {
            _this2.onPositionChange(value);
          }
        });
      })), isWatermarkList && showWaterMarkList && _react.default.createElement(_styledComponents.Watermarks, null, urls.map(function (url) {
        return _react.default.createElement(_styledComponents.WatermarkIcon, {
          key: url,
          src: url,
          onClick: function onClick() {
            _this2.onChangeWatermark(url);
          }
        });
      })));
    }
  }]);

  return _default;
}(_react.Component), _temp);

var _default2 = _default;
exports.default = _default2;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(watermarkPositions, "watermarkPositions", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Watermark.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Watermark.js");
}();

;