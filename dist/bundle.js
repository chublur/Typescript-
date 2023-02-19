/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \***********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font: bold 20px \"Courier\";\n  background-color: #b26969;\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#main #stage {\n  position: relative;\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage > #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-content: space-between;\n  top: 50px;\n  left: 50px;\n  transform: rotate(45deg);\n}\n#main #stage > #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n}\n#main #score-panel {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/style/index.less"],"names":[],"mappings":"AAGA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAFJ;AAKA;EACI,yBAAA;EACA,yBAAA;AAHJ;AAMA;EACI,YAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,wBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;AAJJ;AANA;EAYQ,kBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAHR;AAKY;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;AAHhB;AAMQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,4BAAA;EACA,SAAA;EACA,UAAA;EACA,wBAAA;AAJZ;AAKY;EACI,UAAA;EACA,WAAA;EACA,uBAAA;AAHhB;AApCA;EA4CQ,YAAA;EACA,aAAA;EACA,8BAAA;AALR","sourcesContent":["// 设置变量\n@bg-color:#b7d4a8;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    font: bold 20px \"Courier\";\n    background-color: #b26969;\n}\n\n#main{\n    width: 360px;\n    height: 420px;\n    background-color: @bg-color;\n    margin: 100px auto;\n    border: 10px solid black;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    #stage{\n        position: relative;\n        width: 304px;\n        height: 304px;\n        border: 2px solid black;\n        #snake{\n            &>div{\n                width: 10px;\n                height: 10px;\n                background-color: #000;\n                border: 1px solid @bg-color;\n                position: absolute;\n            }\n        }\n        &>#food{\n            width: 10px;\n            height: 10px;\n            position: absolute;\n            display: flex;\n            flex-flow: row wrap;\n            justify-content: space-between;\n            align-content: space-between;\n            top: 50px;\n            left: 50px;\n            transform: rotate(45deg);\n            &>div{\n                width: 4px;\n                height: 4px;\n                background-color: black;\n            }\n        }\n    }\n    #score-panel{\n        width: 300px;\n        display: flex;\n        justify-content: space-between;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
// 定义食物类
class Food {
    constructor() {
        // 获取页面中的food元素赋值给element 后面的！表示该获取的dom元素不可能找不到
        this.element = document.getElementById('food');
    }
    // 判断蛇是否吃到食物 坐标相同就行
    // 定义一个获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    // 修改食物位置的方法
    change() {
        // 生成随机的位置
        // 食物的位置 最小是0 最大是290
        // 蛇移动一次就是一格 一格就是10 所以食物的坐标必须是整10
        let top = Math.floor(Math.random() * 30) * 10;
        let left = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);


/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./src/modules/Snake.ts");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ "./src/modules/Food.ts");
/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ "./src/modules/ScorePanel.ts");
// 游戏控制器 控制我们所有类
// 引入其他类



class GameControls {
    constructor() {
        // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
        this.direction = 'Right';
        // 创建一个属性用来记录游戏是否结束
        this.isLive = true;
        this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.init();
    }
    // 游戏的初始化方法 调用后游戏开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用run方法 让蛇移动
        this.run();
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event) {
        // 检查按键是否符合游戏设计规定 上下左右
        this.direction = event.key;
    }
    // 创建一个控制蛇移动的方法
    run() {
        //  获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据按键的方向修改值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);
        // 修改蛇的xy值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message + ' GAME OVER!');
            this.isLive = false;
        }
        // 蛇活着才开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 定义方法检查蛇是否吃到了食物
    checkEat(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            // 吃到了食物的话 食物位置进行重置 分数增加 蛇身增长
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControls);


/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
// 定义记分牌的类
class ScorePanel {
    // 默认为10
    constructor(maxLevel = 10, upScore = 10) {
        // 默认值
        this.score = 0;
        this.level = 1;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
    }
    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少 每10分升一级
        if (this.score % this.upScore === 0) {
            this.levelup();
        }
    }
    // 提升等级的方法
    levelup() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePanel);


/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake>div');
        this.bodies = document.getElementById('snake').getElementsByTagName('div');
    }
    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(val) {
        // 如果新值和旧值相同 则直接返回不再修改
        if (this.X === val) {
            return;
        }
        // X的合法范围0-290之间
        if (val < 0 || val > 290) {
            // 进入判断蛇撞墙死了
            throw new Error('蛇撞墙了！');
        }
        // 禁止蛇原地调头
        if (this.bodies[1] && this.bodies[1].offsetLeft === val) {
            // 如果发生了原地调头 让蛇继续移动 不理它
            if (val > this.X) {
                // 如果新值val 大于旧值 X 则说明蛇在向右走 此时发生掉头 应该让蛇继续向左走
                val = this.X - 10;
            }
            else {
                // 向左走 
                val = this.X + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = val + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }
    set Y(val) {
        if (this.Y === val) {
            return;
        }
        // Y的合法范围0-290之间
        if (val < 0 || val > 290) {
            // 进入判断蛇撞墙死了
            throw new Error('蛇撞墙了！');
        }
        // 禁止蛇原地调头
        if (this.bodies[1] && this.bodies[1].offsetTop === val) {
            // 如果发生了原地调头 让蛇继续移动 不理它
            if (val > this.Y) {
                // 如果新值val 大于旧值 X 则说明蛇在向右走 此时发生掉头 应该让蛇继续向左走
                val = this.Y - 10;
            }
            else {
                // 向左走 
                val = this.Y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = val + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }
    // 设置蛇增加身体的方法
    addBody() {
        // 向element添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    // 定义一个吃完食物后 增加的身体也移动的方法
    moveBody() {
        // 思路：将后边的身体设置为前边身体的位置
        // 第四节=第三节的位置 第二节位置赋值给第三节 蛇头赋值给第一节
        // 遍历获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            // 将值设置到当前的身体
            this.bodies[i].style.left = X + "px";
            this.bodies[i].style.top = Y + "px";
        }
    }
    // 检查头跟身体有没有相撞
    checkHeadBody() {
        // 获取所有身体 检查其是否和蛇头坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i];
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 说明蛇头撞到了自己身体
                throw new Error("撞到自己了");
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ "./src/style/index.less");
/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ "./src/modules/GameControl.ts");
// 引入样式

// 引入模块
// import Food from './modules/Food'
// import ScorePanel from './modules/ScorePanel'
// import Snake from './modules/Snake'

const GC = new _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
// setInterval(()=>{
//     console.log();
// },1000)

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ25HckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ2lEO0FBQ2pELGVBQWUsNERBQVk7QUFDM0I7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vLi9zcmMvc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL3NyYy9zdHlsZS9pbmRleC5sZXNzP2IxNDQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vLi9zcmMvbW9kdWxlcy9Gb29kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL3NyYy9tb2R1bGVzL0dhbWVDb250cm9sLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby8uL3NyYy9tb2R1bGVzL1Njb3JlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZW1vLy4vc3JjL21vZHVsZXMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZW1vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBmb250OiBib2xkIDIwcHggXFxcIkNvdXJpZXJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyNjk2OTtcXG59XFxuI21haW4ge1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2Q0YTg7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICBib3JkZXI6IDEwcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbiNtYWluICNzdGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzA0cHg7XFxuICBoZWlnaHQ6IDMwNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbiNtYWluICNzdGFnZSAjc25ha2UgPiBkaXYge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3ZDRhODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI21haW4gI3N0YWdlID4gI2Zvb2Qge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4jbWFpbiAjc3RhZ2UgPiAjZm9vZCA+IGRpdiB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuI21haW4gI3Njb3JlLXBhbmVsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSko7QUFOQTtFQVlRLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUhoQjtBQU1RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBSlo7QUFLWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFIaEI7QUFwQ0E7RUE0Q1EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUxSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIOiuvue9ruWPmOmHj1xcbkBiZy1jb2xvcjojYjdkNGE4O1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udDogYm9sZCAyMHB4IFxcXCJDb3VyaWVyXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyNjk2OTtcXG59XFxuXFxuI21haW57XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJnLWNvbG9yO1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICNzdGFnZXtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAzMDRweDtcXG4gICAgICAgIGhlaWdodDogMzA0cHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgICNzbmFrZXtcXG4gICAgICAgICAgICAmPmRpdntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQGJnLWNvbG9yO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJj4jZm9vZHtcXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICB0b3A6IDUwcHg7XFxuICAgICAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgJj5kaXZ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI3Njb3JlLXBhbmVse1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8g5a6a5LmJ6aOf54mp57G7XHJcbmNsYXNzIEZvb2Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W6aG16Z2i5Lit55qEZm9vZOWFg+e0oOi1i+WAvOe7mWVsZW1lbnQg5ZCO6Z2i55qE77yB6KGo56S66K+l6I635Y+W55qEZG9t5YWD57Sg5LiN5Y+v6IO95om+5LiN5YiwXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb2QnKTtcclxuICAgIH1cclxuICAgIC8vIOWIpOaWreibh+aYr+WQpuWQg+WIsOmjn+eJqSDlnZDmoIfnm7jlkIzlsLHooYxcclxuICAgIC8vIOWumuS5ieS4gOS4quiOt+WPlumjn+eJqXjovbTlnZDmoIfnmoTmlrnms5VcclxuICAgIGdldCBYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuICAgIC8vIOWumuS5ieS4gOS4quiOt+WPlumjn+eJqVnovbTlnZDmoIfnmoTmlrnms5VcclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g5L+u5pS56aOf54mp5L2N572u55qE5pa55rOVXHJcbiAgICBjaGFuZ2UoKSB7XHJcbiAgICAgICAgLy8g55Sf5oiQ6ZqP5py655qE5L2N572uXHJcbiAgICAgICAgLy8g6aOf54mp55qE5L2N572uIOacgOWwj+aYrzAg5pyA5aSn5pivMjkwXHJcbiAgICAgICAgLy8g6JuH56e75Yqo5LiA5qyh5bCx5piv5LiA5qC8IOS4gOagvOWwseaYrzEwIOaJgOS7pemjn+eJqeeahOWdkOagh+W/hemhu+aYr+aVtDEwXHJcbiAgICAgICAgbGV0IHRvcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSAqIDEwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogMTA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb29kO1xyXG4iLCIvLyDmuLjmiI/mjqfliLblmagg5o6n5Yi25oiR5Lus5omA5pyJ57G7XHJcbi8vIOW8leWFpeWFtuS7luexu1xyXG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4vRm9vZFwiO1xyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tIFwiLi9TY29yZVBhbmVsXCI7XHJcbmNsYXNzIEdhbWVDb250cm9scyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDliJvlu7rkuIDkuKrlsZ7mgKfmnaXlrZjlgqjom4fnmoTnp7vliqjmlrnlkJHvvIjkuZ/lsLHmmK/mjInplK7nmoTmlrnlkJHvvIlcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdSaWdodCc7XHJcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq5bGe5oCn55So5p2l6K6w5b2V5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoKTtcclxuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVQYW5lbCA9IG5ldyBTY29yZVBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICAvLyDmuLjmiI/nmoTliJ3lp4vljJbmlrnms5Ug6LCD55So5ZCO5ri45oiP5byA5aeLXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vIOe7keWumumUruebmOaMiemUruaMieS4i+eahOS6i+S7tlxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIOiwg+eUqHJ1buaWueazlSDorqnom4fnp7vliqhcclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG4gICAgLy8g5Yib5bu65LiA5Liq6ZSu55uY5oyJ5LiL55qE5ZON5bqU5Ye95pWwXHJcbiAgICBrZXlkb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIC8vIOajgOafpeaMiemUruaYr+WQpuespuWQiOa4uOaIj+iuvuiuoeinhOWumiDkuIrkuIvlt6blj7NcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgIH1cclxuICAgIC8vIOWIm+W7uuS4gOS4quaOp+WItuibh+enu+WKqOeahOaWueazlVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIC8vICDojrflj5bom4fnjrDlnKjnmoTlnZDmoIdcclxuICAgICAgICBsZXQgWCA9IHRoaXMuc25ha2UuWDtcclxuICAgICAgICBsZXQgWSA9IHRoaXMuc25ha2UuWTtcclxuICAgICAgICAvLyDmoLnmja7mjInplK7nmoTmlrnlkJHkv67mlLnlgLxcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5LiK56e75YqoIHRvcOWHj+WwkVxyXG4gICAgICAgICAgICAgICAgWSAtPSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDlkJHkuIvnp7vliqggdG9w5aKe5YqgXHJcbiAgICAgICAgICAgICAgICBZICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkxlZnRcIjpcclxuICAgICAgICAgICAgICAgIFggLT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBYICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOajgOafpeibh+aYr+WQpuWQg+WIsOS6humjn+eJqVxyXG4gICAgICAgIHRoaXMuY2hlY2tFYXQoWCwgWSk7XHJcbiAgICAgICAgLy8g5L+u5pS56JuH55qEeHnlgLxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLlggPSBYO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLlkgPSBZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UgKyAnIEdBTUUgT1ZFUiEnKTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6JuH5rS7552A5omN5byA5ZCv5LiA5Liq5a6a5pe26LCD55SoXHJcbiAgICAgICAgdGhpcy5pc0xpdmUgJiYgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAzMDAgLSAodGhpcy5zY29yZVBhbmVsLmxldmVsIC0gMSkgKiAzMCk7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnmlrnms5Xmo4Dmn6Xom4fmmK/lkKblkIPliLDkuobpo5/nialcclxuICAgIGNoZWNrRWF0KFgsIFkpIHtcclxuICAgICAgICBpZiAoWCA9PT0gdGhpcy5mb29kLlggJiYgWSA9PT0gdGhpcy5mb29kLlkpIHtcclxuICAgICAgICAgICAgLy8g5ZCD5Yiw5LqG6aOf54mp55qE6K+dIOmjn+eJqeS9jee9rui/m+ihjOmHjee9riDliIbmlbDlop7liqAg6JuH6Lqr5aKe6ZW/XHJcbiAgICAgICAgICAgIHRoaXMuZm9vZC5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVBhbmVsLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuYWRkQm9keSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbHM7XHJcbiIsIi8vIOWumuS5ieiusOWIhueJjOeahOexu1xyXG5jbGFzcyBTY29yZVBhbmVsIHtcclxuICAgIC8vIOm7mOiupOS4ujEwXHJcbiAgICBjb25zdHJ1Y3RvcihtYXhMZXZlbCA9IDEwLCB1cFNjb3JlID0gMTApIHtcclxuICAgICAgICAvLyDpu5jorqTlgLxcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICB0aGlzLm1heExldmVsID0gbWF4TGV2ZWw7XHJcbiAgICAgICAgdGhpcy51cFNjb3JlID0gdXBTY29yZTtcclxuICAgICAgICB0aGlzLnNjb3JlRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xyXG4gICAgfVxyXG4gICAgLy8g6K6+572u5LiA5Liq5Yqg5YiG55qE5pa55rOVXHJcbiAgICBhZGRTY29yZSgpIHtcclxuICAgICAgICAvLyDkvb/liIbmlbDoh6rlop5cclxuICAgICAgICB0aGlzLnNjb3JlRWxlLmlubmVySFRNTCA9ICsrdGhpcy5zY29yZSArICcnO1xyXG4gICAgICAgIC8vIOWIpOaWreWIhuaVsOaYr+WkmuWwkSDmr48xMOWIhuWNh+S4gOe6p1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlICUgdGhpcy51cFNjb3JlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWx1cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaPkOWNh+etiee6p+eahOaWueazlVxyXG4gICAgbGV2ZWx1cCgpIHtcclxuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEVsZS5pbm5lckhUTUwgPSArK3RoaXMubGV2ZWwgKyAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmVQYW5lbDtcclxuIiwiY2xhc3MgU25ha2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuYWtlJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NuYWtlPmRpdicpO1xyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuYWtlJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6JuH5aS055qE5Z2Q5qCHXHJcbiAgICBnZXQgWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLm9mZnNldFRvcDtcclxuICAgIH1cclxuICAgIHNldCBYKHZhbCkge1xyXG4gICAgICAgIC8vIOWmguaenOaWsOWAvOWSjOaXp+WAvOebuOWQjCDliJnnm7TmjqXov5Tlm57kuI3lho3kv67mlLlcclxuICAgICAgICBpZiAodGhpcy5YID09PSB2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBY55qE5ZCI5rOV6IyD5Zu0MC0yOTDkuYvpl7RcclxuICAgICAgICBpZiAodmFsIDwgMCB8fCB2YWwgPiAyOTApIHtcclxuICAgICAgICAgICAgLy8g6L+b5YWl5Yik5pat6JuH5pKe5aKZ5q275LqGXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign6JuH5pKe5aKZ5LqG77yBJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOemgeatouibh+WOn+WcsOiwg+WktFxyXG4gICAgICAgIGlmICh0aGlzLmJvZGllc1sxXSAmJiB0aGlzLmJvZGllc1sxXS5vZmZzZXRMZWZ0ID09PSB2YWwpIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5Y+R55Sf5LqG5Y6f5Zyw6LCD5aS0IOiuqeibh+e7p+e7reenu+WKqCDkuI3nkIblroNcclxuICAgICAgICAgICAgaWYgKHZhbCA+IHRoaXMuWCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5paw5YC8dmFsIOWkp+S6juaXp+WAvCBYIOWImeivtOaYjuibh+WcqOWQkeWPs+i1sCDmraTml7blj5HnlJ/mjonlpLQg5bqU6K+l6K6p6JuH57un57ut5ZCR5bem6LWwXHJcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLlggLSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWQkeW3pui1sCBcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuWCArIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOenu+WKqOi6q+S9k1xyXG4gICAgICAgIHRoaXMubW92ZUJvZHkoKTtcclxuICAgICAgICB0aGlzLmhlYWQuc3R5bGUubGVmdCA9IHZhbCArICdweCc7XHJcbiAgICAgICAgLy8g5qOA5p+l5pyJ5rKh5pyJ5pKe5Yiw6Ieq5bexXHJcbiAgICAgICAgdGhpcy5jaGVja0hlYWRCb2R5KCk7XHJcbiAgICB9XHJcbiAgICBzZXQgWSh2YWwpIHtcclxuICAgICAgICBpZiAodGhpcy5ZID09PSB2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZ55qE5ZCI5rOV6IyD5Zu0MC0yOTDkuYvpl7RcclxuICAgICAgICBpZiAodmFsIDwgMCB8fCB2YWwgPiAyOTApIHtcclxuICAgICAgICAgICAgLy8g6L+b5YWl5Yik5pat6JuH5pKe5aKZ5q275LqGXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign6JuH5pKe5aKZ5LqG77yBJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOemgeatouibh+WOn+WcsOiwg+WktFxyXG4gICAgICAgIGlmICh0aGlzLmJvZGllc1sxXSAmJiB0aGlzLmJvZGllc1sxXS5vZmZzZXRUb3AgPT09IHZhbCkge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzlj5HnlJ/kuobljp/lnLDosIPlpLQg6K6p6JuH57un57ut56e75YqoIOS4jeeQhuWug1xyXG4gICAgICAgICAgICBpZiAodmFsID4gdGhpcy5ZKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmlrDlgLx2YWwg5aSn5LqO5pen5YC8IFgg5YiZ6K+05piO6JuH5Zyo5ZCR5Y+z6LWwIOatpOaXtuWPkeeUn+aOieWktCDlupTor6Xorqnom4fnu6fnu63lkJHlt6botbBcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuWSAtIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5bem6LWwIFxyXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5ZICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g56e75Yqo6Lqr5L2TXHJcbiAgICAgICAgdGhpcy5tb3ZlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5zdHlsZS50b3AgPSB2YWwgKyAncHgnO1xyXG4gICAgICAgIC8vIOajgOafpeacieayoeacieaSnuWIsOiHquW3sVxyXG4gICAgICAgIHRoaXMuY2hlY2tIZWFkQm9keSgpO1xyXG4gICAgfVxyXG4gICAgLy8g6K6+572u6JuH5aKe5Yqg6Lqr5L2T55qE5pa55rOVXHJcbiAgICBhZGRCb2R5KCkge1xyXG4gICAgICAgIC8vIOWQkWVsZW1lbnTmt7vliqDkuIDkuKpkaXZcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPGRpdj48L2Rpdj5cIik7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrlkIPlrozpo5/nianlkI4g5aKe5Yqg55qE6Lqr5L2T5Lmf56e75Yqo55qE5pa55rOVXHJcbiAgICBtb3ZlQm9keSgpIHtcclxuICAgICAgICAvLyDmgJ3ot6/vvJrlsIblkI7ovrnnmoTouqvkvZPorr7nva7kuLrliY3ovrnouqvkvZPnmoTkvY3nva5cclxuICAgICAgICAvLyDnrKzlm5voioI956ys5LiJ6IqC55qE5L2N572uIOesrOS6jOiKguS9jee9rui1i+WAvOe7meesrOS4ieiKgiDom4flpLTotYvlgLznu5nnrKzkuIDoioJcclxuICAgICAgICAvLyDpgY3ljobojrflj5bmiYDmnInnmoTouqvkvZNcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ib2RpZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICAvLyDojrflj5bliY3ovrnouqvkvZPnmoTkvY3nva5cclxuICAgICAgICAgICAgbGV0IFggPSB0aGlzLmJvZGllc1tpIC0gMV0ub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgbGV0IFkgPSB0aGlzLmJvZGllc1tpIC0gMV0ub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAvLyDlsIblgLzorr7nva7liLDlvZPliY3nmoTouqvkvZNcclxuICAgICAgICAgICAgdGhpcy5ib2RpZXNbaV0uc3R5bGUubGVmdCA9IFggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzW2ldLnN0eWxlLnRvcCA9IFkgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qOA5p+l5aS06Lef6Lqr5L2T5pyJ5rKh5pyJ55u45pKeXHJcbiAgICBjaGVja0hlYWRCb2R5KCkge1xyXG4gICAgICAgIC8vIOiOt+WPluaJgOaciei6q+S9kyDmo4Dmn6XlhbbmmK/lkKblkozom4flpLTlnZDmoIflj5HnlJ/ph43lj6BcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZCA9IHRoaXMuYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5YID09PSBiZC5vZmZzZXRMZWZ0ICYmIHRoaXMuWSA9PT0gYmQub2Zmc2V0VG9wKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDor7TmmI7om4flpLTmkp7liLDkuoboh6rlt7HouqvkvZNcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuaSnuWIsOiHquW3seS6hlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbmFrZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8g5byV5YWl5qC35byPXHJcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5sZXNzJztcclxuLy8g5byV5YWl5qih5Z2XXHJcbi8vIGltcG9ydCBGb29kIGZyb20gJy4vbW9kdWxlcy9Gb29kJ1xyXG4vLyBpbXBvcnQgU2NvcmVQYW5lbCBmcm9tICcuL21vZHVsZXMvU2NvcmVQYW5lbCdcclxuLy8gaW1wb3J0IFNuYWtlIGZyb20gJy4vbW9kdWxlcy9TbmFrZSdcclxuaW1wb3J0IEdhbWVDb250cm9scyBmcm9tICcuL21vZHVsZXMvR2FtZUNvbnRyb2wnO1xyXG5jb25zdCBHQyA9IG5ldyBHYW1lQ29udHJvbHMoKTtcclxuLy8gc2V0SW50ZXJ2YWwoKCk9PntcclxuLy8gICAgIGNvbnNvbGUubG9nKCk7XHJcbi8vIH0sMTAwMClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9