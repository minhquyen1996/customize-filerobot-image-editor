"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _temp;

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

var _default = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isBlockRatio: false
    });

    _defineProperty(_assertThisInitialized(_this), "changeWidth", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var width = event.target.value;
      var height = canvasDimensions.height;
      if (!isBlockRatio) height = width && width / canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread({}, canvasDimensions, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeHeight", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var height = event.target.value;
      var width = canvasDimensions.width;
      if (!isBlockRatio) width = height && height * canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread({}, canvasDimensions, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRatio", function () {
      _this.setState({
        isBlockRatio: !_this.state.isBlockRatio
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          operations = _this$props.operations,
          processWithCloudimage = _this$props.processWithCloudimage,
          updateState = _this$props.updateState,
          forceApplyOperations = _this$props.forceApplyOperations;
      var operationIndex = operations.findIndex(function (_ref) {
        var stack = _ref.stack;
        return stack[0].name === 'resize';
      });

      if (operationIndex > -1 && processWithCloudimage) {
        operations.splice(operationIndex, 1);
        updateState({
          operations: operations
        });
        forceApplyOperations(operations, 'resize');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isBlockRatio = this.state.isBlockRatio;
      var _this$props2 = this.props,
          canvasDimensions = _this$props2.canvasDimensions,
          processWithCloudimage = _this$props2.processWithCloudimage,
          onPreResize = _this$props2.onPreResize,
          t = _this$props2.t;
      return _react.default.createElement(_styledComponents.PreResizeBox, {
        id: "preview-img-box"
      }, _react.default.createElement(_styledComponents.PreResizeWarning, null, t['warning.too_big_resolution']), _react.default.createElement(_styledComponents.PreResizeInner, null, _react.default.createElement("h4", null, t['pre_resize.title']), _react.default.createElement(_styledComponents.ResizeWrapper, null, _react.default.createElement(_styledComponents.ResizeBox, null, _react.default.createElement(_styledComponents.FieldSet, null, _react.default.createElement(_styledComponents.FieldLabel, null, t['common.width']), _react.default.createElement(_styledComponents.FieldInput, {
        fullSize: true,
        value: parseInt(canvasDimensions.width, 10) || '',
        onChange: this.changeWidth
      })), _react.default.createElement(_styledComponents.BlockRatioWrapper, null, _react.default.createElement(_styledComponents.BlockRatioBtn, {
        active: !isBlockRatio,
        style: processWithCloudimage ? {
          cursor: 'not-allowed'
        } : {},
        link: true,
        onClick: function onClick() {
          !processWithCloudimage && _this2.toggleRatio();
        }
      }, _react.default.createElement(_styledComponents.BlockRatioIcon, {
        active: !isBlockRatio,
        style: processWithCloudimage ? {
          cursor: 'not-allowed'
        } : {}
      }))), _react.default.createElement(_styledComponents.FieldSet, null, _react.default.createElement(_styledComponents.FieldLabel, null, t['common.height']), _react.default.createElement(_styledComponents.FieldInput, {
        fullSize: true,
        value: parseInt(canvasDimensions.height, 10) || '',
        onChange: this.changeHeight
      })))), _react.default.createElement(_styledComponents.PreResizeActions, null, _react.default.createElement("p", null, _react.default.createElement(_styledComponents.Button, {
        themeColor: true,
        themeBtn: true,
        onClick: function onClick() {
          onPreResize('keep');
        }
      }, t['pre_resize.keep_original_resolution'])), _react.default.createElement("p", null, _react.default.createElement(_styledComponents.Button, {
        themeColor: true,
        success: true,
        onClick: function onClick() {
          onPreResize('resize');
        }
      }, t['pre_resize.resize_n_continue'])))));
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

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/PreResize/PreResize.js");
}();

;