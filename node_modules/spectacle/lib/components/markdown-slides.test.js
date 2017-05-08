"use strict";

var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n## Slide 1 Title\n---\n## Slide 2 Title\n        "], ["\n## Slide 1 Title\n---\n## Slide 2 Title\n        "]),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(["\n## Slide 1 Title\nThis text is ", ".\n---\n## Slide 2 Title\n        "], ["\n## Slide 1 Title\nThis text is ", ".\n---\n## Slide 2 Title\n        "]);

var _markdownSlides = require("./markdown-slides");

var _markdownSlides2 = _interopRequireDefault(_markdownSlides);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("MarkdownSlides", function () {
  test("should render correctly when using tagged template literals", function () {
    var wrapper = (0, _enzyme.shallow)((0, _jsx3.default)("div", {}, void 0, (0, _markdownSlides2.default)(_templateObject)));
    expect((0, _enzymeToJson.shallowToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render correctly when using tagged template literals and string interpolation", function () {
    var content = "**bold**";
    var wrapper = (0, _enzyme.shallow)((0, _jsx3.default)("div", {}, void 0, (0, _markdownSlides2.default)(_templateObject2, content)));
    expect((0, _enzymeToJson.shallowToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render correctly when using function syntax", function () {
    var markdownContent = "\n## Slide A Title\n---\n## Slide B Title\n    ";
    var markdownSlides = _markdownSlides2.default;
    var wrapper = (0, _enzyme.shallow)((0, _jsx3.default)("div", {}, void 0, markdownSlides(markdownContent)));
    expect((0, _enzymeToJson.shallowToJson)(wrapper)).toMatchSnapshot();
  });
});