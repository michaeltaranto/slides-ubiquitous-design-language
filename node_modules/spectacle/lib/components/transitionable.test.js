"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _desc, _value, _class2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _transitionable = require("./transitionable");

var _victoryCore = require("victory-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var _ref = (0, _jsx3.default)("div", {}, void 0, "Hello World!");

var ViewMock = (0, _transitionable.Transitionable)(_class = (_class2 = function (_Component) {
  (0, _inherits3.default)(ViewMock, _Component);

  function ViewMock() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ViewMock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { transitioning: true }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ViewMock.prototype.render = function render() {
    return _ref;
  };

  return ViewMock;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "render", [_transitionable.renderTransition], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, "render"), _class2.prototype)), _class2)) || _class;

describe("@renderTransition", function () {
  it("should wrap the view component in a VictoryAnimation component", function () {
    var wrapper = (0, _enzyme.shallow)((0, _jsx3.default)(ViewMock, {
      transition: []
    }));
    expect(wrapper.type()).toBe(_victoryCore.VictoryAnimation);
  });
});

describe("@Transitionable", function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  it("should add ReactCSSTransitionGroup lifecycle functions to the decorated class.", function () {
    expect(ViewMock.prototype.componentWillEnter).toBeDefined();
    expect(ViewMock.prototype.componentWillAppear).toBeDefined();
    expect(ViewMock.prototype.componentWillLeave).toBeDefined();
  });

  it("should call getTransitionStyles to get the transition styles when rendered.", function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(ViewMock, {
      transition: []
    }));
    wrapper.instance().getTransitionStyles = jest.fn();
    wrapper.update();
    expect(wrapper.instance().getTransitionStyles).toHaveBeenCalled();
  });
});