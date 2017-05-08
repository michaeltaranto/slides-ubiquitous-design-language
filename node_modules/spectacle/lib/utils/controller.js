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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _HashHistory = require("react-history/HashHistory");

var _HashHistory2 = _interopRequireDefault(_HashHistory);

var _default = require("../themes/default");

var _default2 = _interopRequireDefault(_default);

var _context = require("./context");

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = function (_Component) {
  (0, _inherits3.default)(Controller, _Component);

  function Controller() {
    (0, _classCallCheck3.default)(this, Controller);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Controller.prototype.render = function render() {
    var _this2 = this;

    var styles = this.props.theme ? this.props.theme : (0, _default2.default)();
    return (0, _jsx3.default)(_HashHistory2.default, {}, void 0, function (_ref) {
      var history = _ref.history,
          location = _ref.location;

      var printEnabled = location.search.indexOf("print") !== -1;
      return (0, _jsx3.default)(_context2.default, {
        store: _this2.props.store,
        history: history,
        styles: printEnabled ? styles.print : styles.screen
      }, void 0, _this2.props.children);
    });
  };

  return Controller;
}(_react.Component);

exports.default = Controller;