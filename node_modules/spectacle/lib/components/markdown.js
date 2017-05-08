"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _markdownToReactComponents = require("markdown-to-react-components");

var _markdownToReactComponents2 = _interopRequireDefault(_markdownToReactComponents);

var _blockQuote = require("./block-quote");

var _blockQuote2 = _interopRequireDefault(_blockQuote);

var _codePane = require("./code-pane");

var _codePane2 = _interopRequireDefault(_codePane);

var _code = require("./code");

var _code2 = _interopRequireDefault(_code);

var _heading = require("./heading");

var _heading2 = _interopRequireDefault(_heading);

var _image = require("./image");

var _image2 = _interopRequireDefault(_image);

var _link = require("./link");

var _link2 = _interopRequireDefault(_link);

var _list = require("./list");

var _list2 = _interopRequireDefault(_list);

var _listItem = require("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var _quote = require("./quote");

var _quote2 = _interopRequireDefault(_quote);

var _s = require("./s");

var _s2 = _interopRequireDefault(_s);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Heading = function _Heading(size) {
  var component = function component(_ref) {
    var children = _ref.children;
    return (0, _jsx3.default)(_heading2.default, {
      size: size
    }, void 0, children);
  };

  return component;
};

var _S = function _S(type) {
  var component = function component(_ref2) {
    var children = _ref2.children;
    return (0, _jsx3.default)(_s2.default, {
      type: type
    }, void 0, children);
  };

  return component;
};

var _CombineBlockQuote = function _CombineBlockQuote(_ref3) {
  var children = _ref3.children;
  return (0, _jsx3.default)(_blockQuote2.default, {}, void 0, (0, _jsx3.default)(_quote2.default, {}, void 0, children));
};


_markdownToReactComponents2.default.configure({
  a: _link2.default,
  blockquote: _CombineBlockQuote,
  code: _codePane2.default,
  del: _S("strikethrough"),
  em: _S("italic"),
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  img: _image2.default,
  inlineCode: _code2.default,
  li: _listItem2.default,
  p: _text2.default,
  strong: _S("bold"),
  ul: _list2.default
});

var Markdown = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Markdown, _Component);

  function Markdown() {
    (0, _classCallCheck3.default)(this, Markdown);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Markdown.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        children = _props.children;

    return (0, _jsx3.default)("div", {
      style: style
    }, void 0, (0, _markdownToReactComponents2.default)(children).tree);
  };

  return Markdown;
}(_react.Component), _class.defaultProps = {
  style: {}
}, _temp);
exports.default = Markdown;