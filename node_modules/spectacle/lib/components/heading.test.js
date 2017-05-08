"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _heading = require("./heading");

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_heading2.default, {
  size: 2
}, void 0, "Hi There!");

var _ref2 = (0, _jsx3.default)(_heading2.default, {
  fit: true
}, void 0, "This Header Fits!");

describe("<Heading />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { heading: { h2: {
              color: "#ff0"
            } } } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render the fit configuration correctly.", function () {
    var context = { styles: { components: { heading: {} } } };
    var wrapper = (0, _enzyme.mount)(_ref2, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});