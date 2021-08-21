"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireWildcard(require("react"));

var _needlemanJs = _interopRequireDefault(require("needleman-js"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SearchBox = _ref => {
  let {
    ariaLabel,
    placeholder,
    pool,
    searchConfig,
    onSelect
  } = _ref;
  const [options, setOptions] = (0, _react.useState)({});
  const [show, setShow] = (0, _react.useState)(false);
  const [value, setValue] = (0, _react.useState)('');
  const aria = ariaLabel || "Search through dataset";
  const placeholderText = placeholder || "Search...";
  const needleman = new _needlemanJs.default(searchConfig);

  const search = value => {
    const newOptions = needleman.search(value, pool);
    setOptions(newOptions);
  };

  const select = selectedVal => {
    if (value !== selectedVal) {
      onSelect(selectedVal);
      setValue(selectedVal);
    }

    setShow(false);
  };

  (0, _react.useEffect)(() => {
    if (value) {
      search(value);
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-box"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: placeholderText,
    "aria-label": aria,
    value: value,
    onClick: () => setShow(true),
    onChange: _ref2 => {
      let {
        target
      } = _ref2;
      return setValue(target.value);
    }
  }), Object.keys(options).length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "search-box-results ".concat(show ? 'active' : '')
  }, Object.keys(options).sort().map(score => {
    return options[score].map(opt => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: opt,
        value: opt,
        onClick: () => {
          console.log(opt);
          select(opt);
        }
      }, opt);
    });
  })));
};

var _default = SearchBox;
exports.default = _default;