"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _typeface = require("./typeface");

var _typeface2 = _interopRequireDefault(_typeface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockComponent = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MockComponent, _Component);

  function MockComponent() {
    (0, _classCallCheck3.default)(this, MockComponent);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MockComponent.prototype.render = function render() {
    return (0, _jsx3.default)("div", {
      style: this.context.typeface
    }, void 0, this.props.children);
  };

  return MockComponent;
}(_react.Component), _class.contextTypes = {
  typeface: _react.PropTypes.object
}, _temp);

var _ref = (0, _jsx3.default)(_typeface2.default, {
  font: "SF UI Text",
  weight: 400
}, void 0, (0, _jsx3.default)(MockComponent, {}, void 0, "Hello!"));

var _ref2 = (0, _jsx3.default)(_typeface2.default, {
  googleFont: "Roboto Slab",
  weight: 700,
  italic: true
}, void 0, (0, _jsx3.default)(MockComponent, {}, void 0, "Hello!"));

describe("<Typeface />", function () {
  test("should render the children when using a system font.", function () {
    var wrapper = (0, _enzyme.mount)(_ref);
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render the children when using a Google font.", function () {
    var wrapper = (0, _enzyme.mount)(_ref2);
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});