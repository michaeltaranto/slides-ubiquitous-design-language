"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _fill = require("./fill");

var _fill2 = _interopRequireDefault(_fill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fill2.default, {}, void 0, "Spectacle");

describe("<Fill />", function () {
  test("should render with style `flex: 1`", function () {
    var wrapper = (0, _enzyme.mount)(_ref);
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});