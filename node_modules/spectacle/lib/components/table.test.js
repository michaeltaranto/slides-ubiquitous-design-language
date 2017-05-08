"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_table2.default, {}, void 0, (0, _jsx3.default)("tbody", {}, void 0, (0, _jsx3.default)("tr", {}, void 0, (0, _jsx3.default)("td", {}, void 0, "Table Content"))));

describe("<Table />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { table: {} } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});