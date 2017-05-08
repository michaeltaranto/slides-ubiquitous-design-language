"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _tableRow = require("./table-row");

var _tableRow2 = _interopRequireDefault(_tableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_tableRow2.default, {}, void 0, (0, _jsx3.default)("td", {}, void 0, "Table Row Content"));

describe("<TableRow />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { tableRow: {
            color: "#00f"
          } } } };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});