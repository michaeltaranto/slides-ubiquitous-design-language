"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _s = require("./s");

var _s2 = _interopRequireDefault(_s);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_s2.default, {
  type: "strikethrough"
}, void 0, "Don\u2019t read this!");

var _ref2 = (0, _jsx3.default)(_s2.default, {
  type: "bold"
}, void 0, "You should read this!");

var _ref3 = (0, _jsx3.default)(_s2.default, {
  type: "underline"
}, void 0, "This text is underlined!");

var _ref4 = (0, _jsx3.default)(_s2.default, {
  type: "italic"
}, void 0, "This text is italicized!");

describe("<S />", function () {
  test("should underline text when specified", function () {
    var context = { styles: { components: { s: {
            strikethrough: { color: "#ff0" }
          } } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should bold text when specified", function () {
    var context = { styles: { components: { s: {
            bold: { color: "#ff0" }
          } } } };
    var wrapper = (0, _enzyme.mount)(_ref2, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should underline text when specified", function () {
    var context = { styles: { components: { s: {
            underline: { color: "#ff0" }
          } } } };
    var wrapper = (0, _enzyme.mount)(_ref3, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should italicize text when specified", function () {
    var context = { styles: { components: { s: {
            italic: { color: "#ff0" }
          } } } };
    var wrapper = (0, _enzyme.mount)(_ref4, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});