"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_text2.default, {}, void 0, "Spectacle!");

var _ref2 = (0, _jsx3.default)(_text2.default, {
  fit: true
}, void 0, "Spectacle Full Size!");

describe("<Text />", function () {
  it("should render a <p> with text for the default configuration.", function () {
    var context = { styles: { components: { text: { color: "#000" } } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  it("should render a <div> with text for the `fit` configuration.", function () {
    var context = { styles: { components: { text: { color: "#000" } } } };
    var wrapper = (0, _enzyme.mount)(_ref2, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});