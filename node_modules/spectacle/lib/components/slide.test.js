"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _slide = require("./slide");

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mockContext = function _mockContext() {
  return {
    styles: {
      global: {
        body: {
          background: "#eee"
        }
      },
      components: {
        content: {}
      }
    },
    store: {
      getState: function getState() {
        return { route: "" };
      }
    }
  };
};

var _ref = (0, _jsx3.default)(_slide2.default, {}, void 0, (0, _jsx3.default)("div", {}, void 0, "Slide Content"));

var _ref2 = (0, _jsx3.default)("div", {}, void 0, "Slide Content");

describe("<Slide />", function () {
  test("should render correctly without transitions.", function () {
    window.watchMedia = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: [] });
    var wrapper = (0, _enzyme.mount)(_ref, { context: _mockContext() });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render correctly with transitions.", function () {
    window.watchMedia = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: [] });

    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      transition: ["slide", "spin"]
    }, void 0, _ref2), { context: _mockContext() });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});