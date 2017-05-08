"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fill = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Fill, _Component);

  function Fill() {
    (0, _classCallCheck3.default)(this, Fill);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Fill.prototype.render = function render() {
    var styles = {
      flex: 1
    };
    return (0, _jsx3.default)("div", {
      className: this.props.className,
      style: [styles, this.props.style]
    }, void 0, this.props.children);
  };

  return Fill;
}(_react.Component)) || _class;

exports.default = Fill;