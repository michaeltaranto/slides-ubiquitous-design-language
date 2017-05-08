"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _codePane = require("./code-pane");

var _codePane2 = _interopRequireDefault(_codePane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("<CodePane />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { codePane: { pre: {} } } } };
    var source = "\n      const myButton = (\n        <CustomButton\n          style={{ background: '#f00' }}\n          onClick={this.action}\n        >\n         Click Me\n        </CustomButton>\n      );\n    ";
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_codePane2.default, {
      lang: "jsx",
      source: source
    }), { context: context });
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});