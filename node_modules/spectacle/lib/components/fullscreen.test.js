"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _fullscreen = require("./fullscreen");

var _fullscreen2 = _interopRequireDefault(_fullscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fullscreen2.default, {});

var _ref2 = (0, _jsx3.default)(_fullscreen2.default, {});

describe("<Fullscreen />", function () {
  test("should render correctly.", function () {
    var context = { styles: { styles: { fullscreen: {} } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should toggle fullscreen when the button is selected.", function () {
    var context = { styles: { styles: { fullscreen: {} } } };
    var wrapper = (0, _enzyme.mount)(_ref2, { context: context });
    wrapper.instance().handleToggleFullScreen = jest.fn();
    wrapper.update();
    wrapper.find("svg").simulate("click");
    expect(wrapper.instance().handleToggleFullScreen).toHaveBeenCalledTimes(1);
  });
});