import 'focus-outline-manager';
import React, { useState, useEffect, useRef, createRef, Component } from 'react';
import cn from 'classnames';
import scrollSmooth from 'scroll-smooth';
import Scrollparent from 'scrollparent';
import debounce from 'lodash.debounce';
import FocusLock from 'react-focus-lock';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _templateObject$9;
var GlobalStyle = createGlobalStyle(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  .focus-outline-hidden :focus {\n      outline: none;\n  }\n"])));

var _templateObject$8;
var SvgButton = styled.button(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ", ";\n"])), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});

var _templateObject$7, _templateObject2;
var Label = styled.span(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  line-height: 1;\n"])));

function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      inverted = _ref.inverted,
      label = _ref.label,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "data-tour-elem": "".concat(inverted ? 'right' : 'left', "-arrow"),
    disabled: disabled
  }, label ? /*#__PURE__*/React.createElement(Label, null, label) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 18.4 14.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: inverted ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2' : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeMiterlimit: "10"
  })));
}

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool
};
var Arrow$1 = styled(Arrow)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.disabled ? '#caccce' : '#646464';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ";
}, function (props) {
  return props.disabled ? '#caccce' : '#000';
});

var _templateObject$6;

function Close(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(SvgButton, {
    className: className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 9.1 9.1"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"
  })));
}

Close.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
var StyledClose = styled(Close)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"])));

function getNodeRect(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      top = _node$getBoundingClie.top,
      right = _node$getBoundingClie.right,
      bottom = _node$getBoundingClie.bottom,
      left = _node$getBoundingClie.left,
      width = _node$getBoundingClie.width,
      height = _node$getBoundingClie.height;

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height
  };
}
function getHighlightedRect(node, step) {
  if (!step.highlightedSelectors) {
    return getNodeRect(node);
  }

  var attrs = getNodeRect(node);

  var _iterator = _createForOfIteratorHelper(step.highlightedSelectors),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selector = _step.value;
      var element = document.querySelector(selector);

      if (!element || element.style.display === 'none' || element.style.visibility === 'hidden') {
        continue;
      }

      var rect = getNodeRect(element);

      if (rect.top < attrs.top) {
        attrs.top = rect.top;
      }

      if (rect.right > attrs.right) {
        attrs.right = rect.right;
      }

      if (rect.bottom > attrs.bottom) {
        attrs.bottom = rect.bottom;
      }

      if (rect.left < attrs.left) {
        attrs.left = rect.left;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  attrs.width = attrs.right - attrs.left;
  attrs.height = attrs.bottom - attrs.top;
  return attrs;
}
function inView(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      w = _ref.w,
      h = _ref.h,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;
  return top >= 0 + threshold && left >= 0 + threshold && bottom <= h - threshold && right <= w - threshold;
}
function isBody(node) {
  return node === document.querySelector('body') || node === document.querySelector('html');
}
var isHoriz = function isHoriz(pos) {
  return /(left|right)/.test(pos);
};
var isOutsideX = function isOutsideX(val, windowWidth) {
  return val > windowWidth;
};
var isOutsideY = function isOutsideY(val, windowHeight) {
  return val > windowHeight;
};
var safe = function safe(sum) {
  return sum < 0 ? 0 : sum;
};
function bestPositionOf(positions) {
  return Object.keys(positions).map(function (p) {
    return {
      position: p,
      value: positions[p]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }).map(function (p) {
    return p.position;
  });
}

var _templateObject$5;
var Guide = styled.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  --reactour-accent: ", ";\n  ", "\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ", ";\n"])), function (props) {
  return props.accentColor;
}, function (props) {
  return props.defaultStyles ? "\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(props.rounded, "px;\n  background-color: #fff;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  ") : '';
}, function (props) {
  var targetTop = props.targetTop,
      targetRight = props.targetRight,
      targetBottom = props.targetBottom,
      targetLeft = props.targetLeft,
      windowWidth = props.windowWidth,
      windowHeight = props.windowHeight,
      helperWidth = props.helperWidth,
      helperHeight = props.helperHeight,
      helperPosition = props.helperPosition,
      padding = props.padding;
  var available = {
    left: targetLeft,
    right: windowWidth - targetRight,
    top: targetTop,
    bottom: windowHeight - targetBottom
  };

  var couldPositionAt = function couldPositionAt(position) {
    return available[position] > (isHoriz(position) ? helperWidth + padding * 2 : helperHeight + padding * 2);
  };

  var autoPosition = function autoPosition(coords) {
    var positionsOrder = bestPositionOf(available);

    for (var j = 0; j < positionsOrder.length; j++) {
      if (couldPositionAt(positionsOrder[j])) {
        return coords[positionsOrder[j]];
      }
    }

    return coords.center;
  };

  var pos = function pos(helperPosition) {
    if (Array.isArray(helperPosition)) {
      var isOutX = isOutsideX(helperPosition[0], windowWidth);
      var isOutY = isOutsideY(helperPosition[1], windowHeight);

      var warn = function warn(axis, num) {
        console.warn("".concat(axis, ":").concat(num, " is outside window, falling back to center"));
      };

      if (isOutX) warn('x', helperPosition[0]);
      if (isOutY) warn('y', helperPosition[1]);
      return [isOutX ? windowWidth / 2 - helperWidth / 2 : helperPosition[0], isOutY ? windowHeight / 2 - helperHeight / 2 : helperPosition[1]];
    }

    var hX = isOutsideX(targetLeft + helperWidth, windowWidth) ? isOutsideX(targetRight + padding, windowWidth) ? targetRight - helperWidth : targetRight - helperWidth + padding : targetLeft - padding;
    var x = hX > padding ? hX : padding;
    var hY = isOutsideY(targetTop + helperHeight, windowHeight) ? isOutsideY(targetBottom + padding, windowHeight) ? targetBottom - helperHeight : targetBottom - helperHeight + padding : targetTop - padding;
    var y = hY > padding ? hY : padding;
    var coords = {
      top: [x, targetTop - helperHeight - padding * 2],
      right: [targetRight + padding * 2, y],
      bottom: [x, targetBottom + padding * 2],
      left: [targetLeft - helperWidth - padding * 2, y],
      center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2]
    };

    if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
      return coords[helperPosition];
    }

    return autoPosition(coords);
  };

  var p = pos(helperPosition);
  return "translate(".concat(Math.round(p[0]), "px, ").concat(Math.round(p[1]), "px)");
});

var _templateObject$4;
var Badge = styled.span(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: monospace;\n  background: var(--reactour-accent);\n  background: ", ";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"])), function (props) {
  return props.accentColor;
});

var _templateObject$3;
var Controls = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n"])));

var _templateObject$2;
var Navigation = styled.nav(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])));

var _templateObject$1;
var Dot = styled.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: ", ";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ", ";\n  transform: scale(", ");\n\n  color: ", ";\n  background: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ", ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"])), function (props) {
  return props.current === props.index ? '0' : '1px solid #caccce';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.current === props.index ? 1.25 : 1;
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'none';
}, function (props) {
  return props.current === props.index ? props.accentColor : '#caccce';
}, function (props) {
  return props.current === props.index ? props.accentColor : 'none';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});

var _templateObject;
var SvgMaskWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  opacity: ", ";\n  color: ", ";\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n"])), function (props) {
  return !props.maskClassName && 0.7;
}, function (props) {
  return !props.maskClassName && '#000';
});
function SvgMask(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      targetTop = _ref.targetTop,
      targetLeft = _ref.targetLeft,
      padding = _ref.padding,
      rounded = _ref.rounded,
      roundedStep = _ref.roundedStep,
      disableInteraction = _ref.disableInteraction,
      disableInteractionClassName = _ref.disableInteractionClassName,
      className = _ref.className,
      onClick = _ref.onClick,
      highlightedBorder = _ref.highlightedBorder;
  var width = safe(targetWidth + padding * 2);
  var height = safe(targetHeight + padding * 2);
  var top = safe(targetTop - padding);
  var left = safe(targetLeft - padding);
  var roundedRadius = roundedStep ? Math.min(width / 2, height / 2) : rounded;
  return /*#__PURE__*/React.createElement(SvgMaskWrapper, {
    onClick: onClick,
    maskClassName: className
  }, /*#__PURE__*/React.createElement("svg", {
    width: windowWidth,
    height: windowHeight,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
    id: "mask-main"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "white"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left - 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left - 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black "
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip-path"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: top
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: top,
    width: left,
    height: height
  }), /*#__PURE__*/React.createElement("rect", {
    x: targetLeft + targetWidth + padding,
    y: top,
    width: safe(windowWidth - targetWidth - left),
    height: height
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: targetTop + targetHeight + padding,
    width: windowWidth,
    height: safe(windowHeight - targetHeight - top)
  }))), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    mask: "url(#mask-main)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    clipPath: "url(#clip-path)",
    pointerEvents: "auto"
  }), /*#__PURE__*/React.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    pointerEvents: "auto",
    fill: "transparent",
    display: disableInteraction ? 'block' : 'none',
    className: disableInteractionClassName
  }), highlightedBorder && /*#__PURE__*/React.createElement("rect", {
    x: safe(left + highlightedBorder.width / 2.0),
    y: safe(top + highlightedBorder.width / 2.0),
    width: safe(width - highlightedBorder.width),
    height: safe(height - highlightedBorder.width),
    pointerEvents: "auto",
    fill: "none",
    strokeWidth: highlightedBorder.width,
    stroke: highlightedBorder.color,
    rx: roundedRadius - 2
  })));
}
SvgMask.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  targetWidth: PropTypes.number.isRequired,
  targetHeight: PropTypes.number.isRequired,
  targetTop: PropTypes.number.isRequired,
  targetLeft: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  rounded: PropTypes.number.isRequired,
  roundedStep: PropTypes.bool,
  disableInteraction: PropTypes.bool.isRequired,
  disableInteractionClassName: PropTypes.string.isRequired,
  highlightedBorder: PropTypes.shape({
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  })
};

var ReactourResizeObserver = (function (_ref) {
  var step = _ref.step,
      refresh = _ref.refresh;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      mutationsCounter = _useState2[0],
      setMutationsCounter = _useState2[1]; // only use to notify main logic below
  // that a resizeObservable has been added to DOM (or removed from it)


  useEffect(function () {
    if (!step.resizeObservables) {
      return;
    }

    var incrementMutationsCounterIfObservable = function incrementMutationsCounterIfObservable(nodes) {
      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        var _loop = function _loop() {
          var node = _step.value;

          if (!node.attributes) {
            return "continue";
          }

          var found = step.resizeObservables.find(function (observable) {
            return node.matches(observable);
          });

          if (found) {
            setMutationsCounter(mutationsCounter + 1);
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var mutationObserver = new MutationObserver(function (mutationsList) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mutation = _step2.value;

          if (0 !== mutation.addedNodes.length) {
            incrementMutationsCounterIfObservable(mutation.addedNodes);
          }

          if (0 !== mutation.removedNodes.length) {
            incrementMutationsCounterIfObservable(mutation.removedNodes);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    var observable = document.documentElement || document.body;
    var config = {
      childList: true,
      subtree: true
    };
    mutationObserver.observe(observable, config);
    return function () {
      mutationObserver.disconnect();
    };
  }, [step, mutationsCounter]); // the main logic is here

  useEffect(function () {
    if (!step.resizeObservables) {
      return;
    }

    var resizeObserver = new ResizeObserver(function (entries) {
      refresh();
    });

    var _iterator3 = _createForOfIteratorHelper(step.resizeObservables),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var observable = _step3.value;
        var element = document.querySelector(observable);

        if (element) {
          resizeObserver.observe(element);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return function () {
      resizeObserver.disconnect();
    };
  }, [step, mutationsCounter]);
  return null;
});

var ReactourMutationObserver = (function (_ref) {
  var step = _ref.step,
      refresh = _ref.refresh;
  useEffect(function () {
    if (!step.mutationObservables) {
      return;
    }

    var refreshHighlightedRegionIfObservable = function refreshHighlightedRegionIfObservable(nodes) {
      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        var _loop = function _loop() {
          var node = _step.value;

          if (!node.attributes) {
            return "continue";
          }

          var found = step.mutationObservables.find(function (observable) {
            return node.matches(observable);
          });

          if (found) {
            refresh();
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var mutationObserver = new MutationObserver(function (mutationsList) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mutation = _step2.value;

          if (0 !== mutation.addedNodes.length) {
            refreshHighlightedRegionIfObservable(mutation.addedNodes);
          }

          if (0 !== mutation.removedNodes.length) {
            refreshHighlightedRegionIfObservable(mutation.removedNodes);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    var observable = document.documentElement || document.body;
    var config = {
      childList: true,
      subtree: true
    };
    mutationObserver.observe(observable, config);
    return function () {
      mutationObserver.disconnect();
    };
  }, [step]);
  return null;
});

function Portal(_ref) {
  var children = _ref.children;
  var ref = useRef(null);

  if (ref.current === null) {
    ref.current = document.createElement('div');
    ref.current.setAttribute('id', '___reactour');
  }

  useEffect(function () {
    document.body.appendChild(ref.current);
    return function () {
      document.body.removeChild(ref.current);
    };
  }, [ref]);
  return /*#__PURE__*/createPortal(children, ref.current);
}

var propTypes = {
  disableFocusLock: PropTypes.bool,
  badgeContent: PropTypes.func,
  highlightedMaskClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  closeWithMask: PropTypes.bool,
  inViewThreshold: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  lastStepNextButton: PropTypes.node,
  maskClassName: PropTypes.string,
  maskSpace: PropTypes.number,
  nextButton: PropTypes.node,
  onAfterOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  prevButton: PropTypes.node,
  scrollDuration: PropTypes.number,
  scrollOffset: PropTypes.number,
  showButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNavigationNumber: PropTypes.bool,
  showNumber: PropTypes.bool,
  startAt: PropTypes.number,
  goToStep: PropTypes.number,
  getCurrentStep: PropTypes.func,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.shape({
    selector: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]).isRequired,
    position: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center'])]),
    action: PropTypes.func,
    actionBefore: PropTypes.func,
    style: PropTypes.object,
    stepInteraction: PropTypes.bool,
    navDotAriaLabel: PropTypes.string,
    roundedStep: PropTypes.bool
  })),
  update: PropTypes.string,
  updateDelay: PropTypes.number,
  disableInteraction: PropTypes.bool,
  disableDotsNavigation: PropTypes.bool,
  disableKeyboardNavigation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(['esc', 'right', 'left'])), PropTypes.bool]),
  rounded: PropTypes.number,
  accentColor: PropTypes.string,
  highlightedBorder: PropTypes.shape({
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  })
};
var defaultProps = {
  disableFocusLock: false,
  showNavigation: true,
  showNavigationNumber: true,
  showButtons: true,
  showCloseButton: true,
  showNumber: true,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#007aff',
  closeWithMask: true
};

var CN = {
  mask: {
    base: 'reactour__mask',
    isOpen: 'reactour__mask--is-open',
    disableInteraction: 'reactour__mask--disable-interaction'
  },
  helper: {
    base: 'reactour__helper',
    isOpen: 'reactour__helper--is-open'
  },
  dot: {
    base: 'reactour__dot',
    active: 'reactour__dot--is-active'
  }
};

var Tour = /*#__PURE__*/function (_Component) {
  _inherits(Tour, _Component);

  var _super = _createSuper(Tour);

  function Tour() {
    var _this;

    _classCallCheck(this, Tour);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "unlockFocus", function (callback) {
      _this.setState({
        focusUnlocked: true
      }, callback());
    });

    _defineProperty(_assertThisInitialized(_this), "showStep", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var steps, _this$state, current, focusUnlocked, step, node, stepCallback, target, config, cb;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!_this.helper || !_this.helper.current)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              steps = _this.props.steps;
              _this$state = _this.state, current = _this$state.current, focusUnlocked = _this$state.focusUnlocked;

              if (focusUnlocked) {
                _this.setState({
                  focusUnlocked: false
                });
              }

              step = steps[current];

              if (!(step.actionBefore && typeof step.actionBefore === 'function')) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return step.actionBefore();

            case 9:
              node = step.selector ? document.querySelector(step.selector) : null;

              stepCallback = function stepCallback(o) {
                if (step.action && typeof step.action === 'function') {
                  _this.unlockFocus(function () {
                    return step.action(o);
                  });
                }
              };

              if (step.observe) {
                target = document.querySelector(step.observe);
                config = {
                  attributes: true,
                  childList: true,
                  characterData: true
                };

                _this.setState(function (prevState) {
                  if (prevState.observer) {
                    setTimeout(function () {
                      prevState.observer.disconnect();
                    }, 0);
                  }

                  return {
                    observer: new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                          var cb = function cb() {
                            return stepCallback(mutation.addedNodes[0]);
                          };

                          setTimeout(function () {
                            return _this.calculateNode(mutation.addedNodes[0], step, cb);
                          }, 100);
                        } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                          var _cb = function _cb() {
                            return stepCallback(node);
                          };

                          _this.calculateNode(node, step, _cb);
                        }
                      });
                    })
                  };
                }, function () {
                  return _this.state.observer.observe(target, config);
                });
              } else {
                if (_this.state.observer) {
                  _this.state.observer.disconnect();

                  _this.setState({
                    observer: null
                  });
                }
              }

              if (node) {
                cb = function cb() {
                  return stepCallback(node);
                };

                _this.calculateNode(node, step, cb);
              } else {
                _this.setState(setNodeState(null, step, _this.helper.current), stepCallback);

                step.selector && console.warn("Doesn't find a DOM node '".concat(step.selector, "'. Please check the 'steps' Tour prop Array at position ").concat(current, "."));
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "calculateNode", function (node, step, cb) {
      var _this$props = _this.props,
          scrollDuration = _this$props.scrollDuration,
          inViewThreshold = _this$props.inViewThreshold,
          scrollOffset = _this$props.scrollOffset;
      var attrs = getHighlightedRect(node, step);
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if (!inView(_objectSpread2(_objectSpread2({}, attrs), {}, {
        w: w,
        h: h,
        threshold: inViewThreshold
      }))) {
        var parentScroll = Scrollparent(node);
        var offset = scrollOffset ? scrollOffset : attrs.height > h ? -25 : -(h / 2) + attrs.height / 2;
        scrollSmooth.to(node, {
          context: isBody(parentScroll) ? window : parentScroll,
          duration: scrollDuration,
          offset: offset,
          callback: function callback(nd) {
            _this.setState(setNodeState(nd, step, _this.helper.current), cb);
          }
        });
      } else {
        _this.setState(setNodeState(node, step, _this.helper.current), cb);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "recalculateNode", function (step) {
      var node = document.querySelector(step.selector);

      var stepCallback = function stepCallback(o) {
        if (step.action && typeof step.action === 'function') {
          _this.unlockFocus(function () {
            return step.action(o);
          });
        }
      };

      _this.calculateNode(node, step, function () {
        return stepCallback(node);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "maskClickHandler", function (e) {
      var _this$props2 = _this.props,
          closeWithMask = _this$props2.closeWithMask,
          onRequestClose = _this$props2.onRequestClose;

      if (closeWithMask && !e.target.classList.contains(CN.mask.disableInteraction)) {
        onRequestClose(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var _this$props3 = _this.props,
          steps = _this$props3.steps,
          getCurrentStep = _this$props3.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current < steps.length - 1 ? prevState.current + 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "prevStep", function () {
      var getCurrentStep = _this.props.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current > 0 ? prevState.current - 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoStep", function (n) {
      var _this$props4 = _this.props,
          steps = _this$props4.steps,
          getCurrentStep = _this$props4.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = steps[n] ? n : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$props5 = _this.props,
          onRequestClose = _this$props5.onRequestClose,
          nextStep = _this$props5.nextStep,
          prevStep = _this$props5.prevStep,
          disableKeyboardNavigation = _this$props5.disableKeyboardNavigation;
          _this$props5.showCloseButton;
      e.stopPropagation();

      if (disableKeyboardNavigation === true) {
        return;
      }

      var isEscDisabled, isRightDisabled, isLeftDisabled;

      if (disableKeyboardNavigation) {
        isEscDisabled = disableKeyboardNavigation.includes('esc');
        isRightDisabled = disableKeyboardNavigation.includes('right');
        isLeftDisabled = disableKeyboardNavigation.includes('left');
      }

      if (e.keyCode === 27 && !isEscDisabled) {
        // esc
        e.preventDefault();
        onRequestClose();
      }

      if (e.keyCode === 39 && !isRightDisabled) {
        // right
        e.preventDefault();
        typeof nextStep === 'function' ? nextStep() : _this.nextStep();
      }

      if (e.keyCode === 37 && !isLeftDisabled) {
        // left
        e.preventDefault();
        typeof prevStep === 'function' ? prevStep() : _this.prevStep();
      }
    });

    _this.state = {
      isOpen: false,
      current: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      inDOM: false,
      observer: null,
      focusUnlocked: false
    };
    _this.helper = /*#__PURE__*/createRef();
    _this.helperElement = null;
    _this.debouncedShowStep = debounce(_this.showStep, 70);
    return _this;
  }

  _createClass(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          isOpen = _this$props6.isOpen,
          startAt = _this$props6.startAt;

      if (isOpen) {
        this.open(startAt);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props7 = this.props,
          isOpen = _this$props7.isOpen,
          update = _this$props7.update,
          updateDelay = _this$props7.updateDelay;

      if (!isOpen && nextProps.isOpen) {
        this.open(nextProps.startAt);
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }

      if (isOpen && update !== nextProps.update) {
        if (nextProps.steps[this.state.current]) {
          setTimeout(this.showStep, updateDelay);
        } else {
          this.props.onRequestClose();
        }
      }

      if (isOpen && nextProps.isOpen && this.state.current !== nextProps.goToStep) {
        this.gotoStep(nextProps.goToStep);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.close();
      }

      if (this.state.observer) {
        this.state.observer.disconnect();
      }
    }
  }, {
    key: "open",
    value: function open(startAt) {
      var _this2 = this;

      var onAfterOpen = this.props.onAfterOpen;
      this.setState(function (prevState) {
        return {
          isOpen: true,
          current: startAt !== undefined ? startAt : prevState.current
        };
      }, function () {
        setTimeout(_this2.showStep, 1);
        _this2.helperElement = _this2.helper.current;
        if (!_this2.props.disableFocusLock) _this2.helper.current.focus();

        if (onAfterOpen) {
          onAfterOpen(_this2.helperElement);
        }
      });
      window.addEventListener('resize', this.debouncedShowStep, false);
      window.addEventListener('keydown', this.keyDownHandler, false);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState(function (prevState) {
        if (prevState.observer) {
          prevState.observer.disconnect();
        }

        return {
          isOpen: false,
          observer: null
        };
      }, this.onBeforeClose);
      window.removeEventListener('resize', this.debouncedShowStep);
      window.removeEventListener('keydown', this.keyDownHandler);
    }
  }, {
    key: "onBeforeClose",
    value: function onBeforeClose() {
      var onBeforeClose = this.props.onBeforeClose;

      if (onBeforeClose) {
        onBeforeClose(this.helperElement);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          steps = _this$props8.steps,
          maskClassName = _this$props8.maskClassName,
          showButtons = _this$props8.showButtons,
          showCloseButton = _this$props8.showCloseButton,
          showNavigation = _this$props8.showNavigation,
          showNavigationNumber = _this$props8.showNavigationNumber,
          showNumber = _this$props8.showNumber,
          onRequestClose = _this$props8.onRequestClose,
          maskSpace = _this$props8.maskSpace,
          lastStepNextButton = _this$props8.lastStepNextButton,
          nextButton = _this$props8.nextButton,
          prevButton = _this$props8.prevButton,
          badgeContent = _this$props8.badgeContent,
          highlightedMaskClassName = _this$props8.highlightedMaskClassName,
          disableInteraction = _this$props8.disableInteraction,
          disableDotsNavigation = _this$props8.disableDotsNavigation,
          nextStep = _this$props8.nextStep,
          prevStep = _this$props8.prevStep,
          rounded = _this$props8.rounded,
          accentColor = _this$props8.accentColor,
          CustomHelper = _this$props8.CustomHelper,
          disableFocusLock = _this$props8.disableFocusLock,
          highlightedBorder = _this$props8.highlightedBorder;
      var _this$state2 = this.state,
          isOpen = _this$state2.isOpen,
          current = _this$state2.current,
          inDOM = _this$state2.inDOM,
          targetTop = _this$state2.top,
          targetRight = _this$state2.right,
          targetBottom = _this$state2.bottom,
          targetLeft = _this$state2.left,
          targetWidth = _this$state2.width,
          targetHeight = _this$state2.height,
          windowWidth = _this$state2.w,
          windowHeight = _this$state2.h,
          helperWidth = _this$state2.helperWidth,
          helperHeight = _this$state2.helperHeight,
          helperPosition = _this$state2.helperPosition;
          _this$state2.focusUnlocked;

      if (isOpen) {
        return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(ReactourResizeObserver, {
          step: steps[current],
          refresh: function refresh() {
            return _this3.recalculateNode(steps[current]);
          }
        }), /*#__PURE__*/React.createElement(ReactourMutationObserver, {
          step: steps[current],
          refresh: function refresh() {
            return _this3.recalculateNode(steps[current]);
          }
        }), /*#__PURE__*/React.createElement(SvgMask, {
          onClick: this.maskClickHandler,
          forwardRef: function forwardRef(c) {
            return _this3.mask = c;
          },
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          targetTop: targetTop,
          targetLeft: targetLeft,
          padding: maskSpace,
          rounded: rounded,
          roundedStep: steps[current].roundedStep,
          className: maskClassName,
          disableInteraction: steps[current].stepInteraction === false || disableInteraction ? !steps[current].stepInteraction : disableInteraction,
          disableInteractionClassName: "".concat(CN.mask.disableInteraction, " ").concat(highlightedMaskClassName),
          highlightedBorder: highlightedBorder
        }), /*#__PURE__*/React.createElement(FocusLock, {
          disabled: disableFocusLock,
          autoFocus: false
        }, /*#__PURE__*/React.createElement(Guide, {
          ref: this.helper,
          targetHeight: targetHeight,
          targetWidth: targetWidth,
          targetTop: targetTop,
          targetRight: targetRight,
          targetBottom: targetBottom,
          targetLeft: targetLeft,
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          helperWidth: helperWidth,
          helperHeight: helperHeight,
          helperPosition: helperPosition,
          padding: maskSpace,
          tabIndex: -1,
          current: current,
          style: steps[current].style ? steps[current].style : {},
          rounded: rounded,
          className: cn(CN.helper.base, className, _defineProperty({}, CN.helper.isOpen, isOpen)),
          accentColor: accentColor,
          defaultStyles: !CustomHelper,
          role: "dialog"
        }, CustomHelper ? /*#__PURE__*/React.createElement(CustomHelper, {
          current: current,
          totalSteps: steps.length,
          gotoStep: this.gotoStep,
          close: onRequestClose,
          content: steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
            close: onRequestClose,
            goTo: this.gotoStep,
            inDOM: inDOM,
            step: current + 1
          }) : steps[current].content)
        }, this.props.children) : /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children, steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
          close: onRequestClose,
          goTo: this.gotoStep,
          inDOM: inDOM,
          step: current + 1
        }) : steps[current].content), showNumber && /*#__PURE__*/React.createElement(Badge, {
          "data-tour-elem": "badge",
          accentColor: accentColor
        }, typeof badgeContent === 'function' ? badgeContent(current + 1, steps.length) : current + 1), (showButtons || showNavigation) && /*#__PURE__*/React.createElement(Controls, {
          "data-tour-elem": "controls"
        }, showButtons && /*#__PURE__*/React.createElement(Arrow$1, {
          onClick: typeof prevStep === 'function' ? prevStep : this.prevStep,
          disabled: current === 0,
          label: prevButton ? prevButton : null
        }), showNavigation && /*#__PURE__*/React.createElement(Navigation, {
          "data-tour-elem": "navigation"
        }, steps.map(function (s, i) {
          return /*#__PURE__*/React.createElement(Dot, {
            key: "".concat(s.selector ? s.selector : 'undef', "_").concat(i),
            onClick: function onClick() {
              return _this3.gotoStep(i);
            },
            current: current,
            index: i,
            accentColor: accentColor,
            disabled: current === i || disableDotsNavigation,
            showNumber: showNavigationNumber,
            "data-tour-elem": "dot",
            className: cn(CN.dot.base, _defineProperty({}, CN.dot.active, current === i)),
            "aria-label": s.navDotAriaLabel
          });
        })), showButtons && /*#__PURE__*/React.createElement(Arrow$1, {
          onClick: current === steps.length - 1 ? lastStepNextButton ? onRequestClose : function () {} : typeof nextStep === 'function' ? nextStep : this.nextStep,
          disabled: !lastStepNextButton && current === steps.length - 1,
          inverted: true,
          label: lastStepNextButton && current === steps.length - 1 ? lastStepNextButton : nextButton ? nextButton : null
        })), showCloseButton ? /*#__PURE__*/React.createElement(StyledClose, {
          onClick: onRequestClose,
          className: "reactour__close"
        }) : null))));
      }

      return null;
    }
  }]);

  return Tour;
}(Component);

var setNodeState = function setNodeState(node, step, helper) {
  if (!helper) return;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var _hx$getNodeRect = getNodeRect(helper),
      helperWidth = _hx$getNodeRect.width,
      helperHeight = _hx$getNodeRect.height;

  var attrs = {
    top: h + 10,
    right: w / 2 + 9,
    bottom: h / 2 + 9,
    left: w / 2 - helperWidth / 2,
    width: 0,
    height: 0,
    w: w,
    h: h,
    helperPosition: 'center'
  };

  if (node) {
    attrs = getHighlightedRect(node, step);
  }

  return function update() {
    return _objectSpread2(_objectSpread2({
      w: w,
      h: h,
      helperWidth: helperWidth,
      helperHeight: helperHeight,
      helperPosition: step.position
    }, attrs), {}, {
      inDOM: node ? true : false
    });
  };
};

Tour.propTypes = propTypes;
Tour.defaultProps = defaultProps;

export default Tour;
export { Arrow$1 as Arrow, Badge, StyledClose as Close, Controls, Dot, Navigation };