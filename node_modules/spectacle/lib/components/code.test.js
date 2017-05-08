"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _code = require("./code");

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_code2.default, {}, void 0, "const [a, ...b] = [1, 2, 3, 4]");

describe("<Code />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { code: { fontWeight: 500 } } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});