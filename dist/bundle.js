/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  box-sizing: border-box;

  background: black;
}

#game {
  border: 1px solid #ffffff;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,sBAAsB;;EAEtB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["body {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n\r\n  background: black;\r\n}\r\n\r\n#game {\r\n  border: 1px solid #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/***/ ((module) => {



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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
/***/ ((module) => {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/***/ ((module) => {



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

/***/ "./src/scripts/Classes/CollisionBlock.ts":
/*!***********************************************!*\
  !*** ./src/scripts/Classes/CollisionBlock.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollisionBlock: () => (/* binding */ CollisionBlock)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/scripts/constants.ts");

var CollisionBlock = /** @class */ (function () {
    function CollisionBlock(_a) {
        var position = _a.position;
        this.position = position;
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH;
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT;
    }
    CollisionBlock.prototype.draw = function (cx) {
        cx.fillStyle = "rgba(255, 0, 0, 0.5)";
        cx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    return CollisionBlock;
}());



/***/ }),

/***/ "./src/scripts/Classes/Controller.ts":
/*!*******************************************!*\
  !*** ./src/scripts/Classes/Controller.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
    }
    Controller.prototype.start = function () {
        console.log("controller started");
    };
    Controller.prototype.step = function () {
        this.model.updatePosition();
        this.view.updatePosition(this.model);
    };
    Controller.prototype.setPlayerVelocityX = function (direction) {
        this.model.player.velocity.x = direction;
    };
    Controller.prototype.handlePlayerJump = function () {
        this.model.jump();
    };
    return Controller;
}());



/***/ }),

/***/ "./src/scripts/Classes/Level.ts":
/*!**************************************!*\
  !*** ./src/scripts/Classes/Level.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level: () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/scripts/Classes/Sprite.ts");

var Level = /** @class */ (function () {
    function Level(collisionBlocks, startPos, sprite) {
        this.playerStartPos = startPos;
        this.background = new _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite({
            position: {
                x: 0,
                y: 0
            },
            imageSrc: sprite
        });
        this.collisions = collisionBlocks;
    }
    return Level;
}());



/***/ }),

/***/ "./src/scripts/Classes/Model.ts":
/*!**************************************!*\
  !*** ./src/scripts/Classes/Model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Model: () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/scripts/Classes/Player.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/scripts/constants.ts");
/* harmony import */ var _data_levels_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/levels_data */ "./src/scripts/data/levels_data.ts");



var Model = /** @class */ (function () {
    function Model() {
        this.gameState = _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATE.MENU;
        this.currentLevel = _data_levels_data__WEBPACK_IMPORTED_MODULE_2__.testLevelWide;
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player();
        this.player.setInitialPosition(this.currentLevel.playerStartPos);
        this.offset = 0;
    }
    Model.prototype.updatePosition = function () {
        // console.log(this.player.position);
        // player
        this.player.position.x += this.player.velocity.x * _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_SPEED;
        this.player.updateState();
        // physics
        this.checForkHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
        // shift level
        this.shiftLevel();
        // console.log(collisions[0].position);
    };
    Model.prototype.jump = function () {
        if (this.player.canJump) {
            this.player.canJump = false;
            this.player.velocity.y = _constants__WEBPACK_IMPORTED_MODULE_1__.JUMP_FORCE;
        }
    };
    Model.prototype.applyGravity = function () {
        this.player.velocity.y += 1;
        this.player.position.y += this.player.velocity.y;
    };
    Model.prototype.checForkHorizontalCollisions = function () {
        var collisions = this.currentLevel.collisions;
        for (var i = 0; i < collisions.length; i++) {
            var collision = collisions[i];
            if (this.player.position.x <= collision.position.x + collision.width &&
                this.player.position.x + this.player.width >= collision.position.x &&
                this.player.position.y + this.player.height >= collision.position.y &&
                this.player.position.y <= collision.position.y + collision.height) {
                if (this.player.velocity.x < 0) {
                    this.player.position.x =
                        collision.position.x + collision.width + 0.01;
                    break;
                }
                if (this.player.velocity.x > 0) {
                    this.player.position.x =
                        collision.position.x - this.player.width - 0.01;
                    break;
                }
            }
        }
    };
    Model.prototype.checkForVerticalCollisions = function () {
        var collisions = this.currentLevel.collisions;
        for (var i = 0; i < collisions.length; i++) {
            var collision = collisions[i];
            if (this.player.position.x <= collision.position.x + collision.width &&
                this.player.position.x + this.player.width >= collision.position.x &&
                this.player.position.y + this.player.height >= collision.position.y &&
                this.player.position.y <= collision.position.y + collision.height) {
                if (this.player.velocity.y < 0) {
                    this.player.velocity.y = 0;
                    this.player.position.y =
                        collision.position.y + collision.height + 0.01;
                    break;
                }
                if (this.player.velocity.y > 0) {
                    this.player.velocity.y = 0;
                    this.player.position.y =
                        collision.position.y - this.player.height - 0.01;
                    // если игрок касается земли, то может снова
                    if (!this.player.canJump) {
                        this.player.canJump = true;
                    }
                    break;
                }
            }
        }
    };
    Model.prototype.shiftLevel = function () {
        var collisions = this.currentLevel.collisions;
        for (var i = 0; i < collisions.length; i++) {
            var collision = collisions[i];
            if (this.player.position.x >= _constants__WEBPACK_IMPORTED_MODULE_1__.RIGHT_BOUND) {
                this.player.position.x = _constants__WEBPACK_IMPORTED_MODULE_1__.RIGHT_BOUND;
                collision.position.x -= this.player.velocity.x * _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_SPEED;
            }
            if (this.player.position.x <= _constants__WEBPACK_IMPORTED_MODULE_1__.LEFT_BOUND) {
                this.player.position.x = _constants__WEBPACK_IMPORTED_MODULE_1__.LEFT_BOUND;
                collision.position.x -= this.player.velocity.x * _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_SPEED;
            }
        }
    };
    return Model;
}());



/***/ }),

/***/ "./src/scripts/Classes/Player.ts":
/*!***************************************!*\
  !*** ./src/scripts/Classes/Player.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/scripts/constants.ts");

var Player = /** @class */ (function () {
    function Player() {
        this.position = {
            x: 100,
            y: 100,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_HEIGHT;
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_WIDTH;
        this.canJump = false;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_STATE.FALL;
    }
    Player.prototype.setInitialPosition = function (pos) {
        this.position = pos;
    };
    Player.prototype.updateState = function () {
        if (this.velocity.x === 0 && this.velocity.y === 0) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_STATE.IDLE;
        }
        if (this.velocity.x !== 0) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_STATE.MOVE;
        }
        if (this.velocity.y < 0) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_STATE.JUMP;
        }
        if (this.velocity.y > 0) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_STATE.FALL;
        }
    };
    return Player;
}());



/***/ }),

/***/ "./src/scripts/Classes/Sprite.ts":
/*!***************************************!*\
  !*** ./src/scripts/Classes/Sprite.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sprite: () => (/* binding */ Sprite)
/* harmony export */ });
var Sprite = /** @class */ (function () {
    function Sprite(_a) {
        var _this = this;
        var position = _a.position, imageSrc = _a.imageSrc;
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.isLoaded = false;
        this.image.onload = function () {
            _this.isLoaded = true;
        };
    }
    return Sprite;
}());



/***/ }),

/***/ "./src/scripts/Classes/View.ts":
/*!*************************************!*\
  !*** ./src/scripts/Classes/View.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/scripts/constants.ts");

var View = /** @class */ (function () {
    function View(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__.SCREEN_WIDTH;
        this.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__.SCREEN_HEIGHT;
    }
    View.prototype.updatePosition = function (model) {
        var _this = this;
        // level
        // отрисовка фона
        this.context.drawImage(model.currentLevel.background.image, model.currentLevel.background.position.x, model.currentLevel.background.position.y);
        // отрисовка коллизий
        model.currentLevel.collisions.forEach(function (block) {
            block.draw(_this.context);
        });
        // player
        this.context.fillStyle = "grey";
        this.context.fillRect(model.player.position.x, model.player.position.y, model.player.width, model.player.height);
    };
    return View;
}());



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_WIDTH: () => (/* binding */ FIELD_WIDTH),
/* harmony export */   FPS: () => (/* binding */ FPS),
/* harmony export */   GAME_STATE: () => (/* binding */ GAME_STATE),
/* harmony export */   JUMP_FORCE: () => (/* binding */ JUMP_FORCE),
/* harmony export */   KEYS: () => (/* binding */ KEYS),
/* harmony export */   LEFT_BOUND: () => (/* binding */ LEFT_BOUND),
/* harmony export */   NO_TIMER_VALUE: () => (/* binding */ NO_TIMER_VALUE),
/* harmony export */   PLAYER_HEIGHT: () => (/* binding */ PLAYER_HEIGHT),
/* harmony export */   PLAYER_SPEED: () => (/* binding */ PLAYER_SPEED),
/* harmony export */   PLAYER_STATE: () => (/* binding */ PLAYER_STATE),
/* harmony export */   PLAYER_WIDTH: () => (/* binding */ PLAYER_WIDTH),
/* harmony export */   RIGHT_BOUND: () => (/* binding */ RIGHT_BOUND),
/* harmony export */   SCREEN_HEIGHT: () => (/* binding */ SCREEN_HEIGHT),
/* harmony export */   SCREEN_WIDTH: () => (/* binding */ SCREEN_WIDTH),
/* harmony export */   TILE_HEIGHT: () => (/* binding */ TILE_HEIGHT),
/* harmony export */   TILE_WIDTH: () => (/* binding */ TILE_WIDTH),
/* harmony export */   WIDE_FIELD_WIDTH: () => (/* binding */ WIDE_FIELD_WIDTH)
/* harmony export */ });
// ====== GAME VARIABLES ======
var NO_TIMER_VALUE = "no-timer";
var FPS = 1000 / 60;
var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 576;
var RIGHT_BOUND = 624;
var LEFT_BOUND = 200;
// ширина и высота тайла в пикселях
var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;
// количество тайлов в уровне в ширину
var FIELD_WIDTH = 32;
var WIDE_FIELD_WIDTH = 64;
var GAME_STATE = {
    MENU: "Menu",
    GAMEPLAY: "Gameplay",
};
// ====== PLAYER VARIABLES ======
var PLAYER_SPEED = 5;
var JUMP_FORCE = -12;
// размеры игрока в пикселях
var PLAYER_WIDTH = 31;
var PLAYER_HEIGHT = 31;
// клавиши управления
var KEYS = {
    DOWN: "KeyS",
    LEFT: "KeyA",
    RIGHT: "KeyD",
    JUMP: "KeyW",
    PAUSE: "Escape"
};
// состояния персонажа
var PLAYER_STATE = {
    IDLE: "Idle",
    MOVE: "Move",
    ATTACK: "Attack",
    JUMP: "Jump",
    FALL: "Fall"
};


/***/ }),

/***/ "./src/scripts/data/levels_data.ts":
/*!*****************************************!*\
  !*** ./src/scripts/data/levels_data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testLevel: () => (/* binding */ testLevel),
/* harmony export */   testLevelWide: () => (/* binding */ testLevelWide)
/* harmony export */ });
/* harmony import */ var _Classes_Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Level */ "./src/scripts/Classes/Level.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/scripts/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.ts");



// масив с коллизиями для уровней
var level1 = [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 36, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 36, 36, 36, 36, 36, 36, 36, 36, 0, 0, 0, 0, 36, 36,
    36, 0, 0, 0, 36, 36, 36, 36, 0, 0, 36, 36, 36, 36, 36, 0, 0, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 0, 0, 36, 36, 36,
    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36];
var wideLevel = [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 0, 0, 0, 36, 36, 36, 36, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 36,
    36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 0, 0, 36,
    36, 36, 36, 36, 36, 36, 36, 36, 36, 0, 0, 36, 36, 36, 36, 36, 36, 0, 0, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36];
// TODO: ОПТИМИЗИРОВАТЬ, ПЕРЕНЕСТИ
var parsedCollisions = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseCollisions)(level1, _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_WIDTH);
var parsedCollisionsWide = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseCollisions)(wideLevel, _constants__WEBPACK_IMPORTED_MODULE_1__.WIDE_FIELD_WIDTH);
// тестовый уровень
var testLevel = new _Classes_Level__WEBPACK_IMPORTED_MODULE_0__.Level((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createCollisionBlocks)(parsedCollisions), { x: 32, y: 512 }, "../../images/test_level.png");
var testLevelWide = new _Classes_Level__WEBPACK_IMPORTED_MODULE_0__.Level((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createCollisionBlocks)(parsedCollisionsWide), { x: 32, y: 512 }, "../../images/test_wide.png");


/***/ }),

/***/ "./src/scripts/utils.ts":
/*!******************************!*\
  !*** ./src/scripts/utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollisionBlocks: () => (/* binding */ createCollisionBlocks),
/* harmony export */   parseCollisions: () => (/* binding */ parseCollisions)
/* harmony export */ });
/* harmony import */ var _Classes_CollisionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/CollisionBlock */ "./src/scripts/Classes/CollisionBlock.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");


function parseCollisions(data, width) {
    var rows = [];
    for (var i = 0; i < data.length; i += width) {
        rows.push(data.slice(i, i + width));
    }
    return rows;
}
function createCollisionBlocks(array) {
    var output = [];
    array.forEach(function (row, y) {
        row.forEach(function (symbol, x) {
            if (symbol === 36) {
                // add collision to collisions array
                output.push(new _Classes_CollisionBlock__WEBPACK_IMPORTED_MODULE_0__.CollisionBlock({
                    position: {
                        x: x * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH,
                        y: y * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT,
                    }
                }));
            }
        });
    });
    return output;
}


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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _Classes_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/View */ "./src/scripts/Classes/View.ts");
/* harmony import */ var _Classes_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Model */ "./src/scripts/Classes/Model.ts");
/* harmony import */ var _Classes_Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/Controller */ "./src/scripts/Classes/Controller.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");





var view = new _Classes_View__WEBPACK_IMPORTED_MODULE_1__.View("game");
var model = new _Classes_Model__WEBPACK_IMPORTED_MODULE_2__.Model();
var controller = new _Classes_Controller__WEBPACK_IMPORTED_MODULE_3__.Controller(model, view);
window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case _constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.RIGHT:
            controller.setPlayerVelocityX(1);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.LEFT:
            controller.setPlayerVelocityX(-1);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.JUMP:
            controller.handlePlayerJump();
            break;
        default:
            break;
    }
});
window.addEventListener("keyup", function (e) {
    if (e.code === _constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.RIGHT || e.code === _constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.LEFT) {
        controller.setPlayerVelocityX(0);
    }
});
controller.start();
setInterval(function () {
    controller.step();
}, _constants__WEBPACK_IMPORTED_MODULE_4__.FPS);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3BILEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2pHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2xHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3JHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3BHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQzVHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3JILEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUUxSixJQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDOVAsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNoTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDaE0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNoTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2hNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDaE0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2pNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdk0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNsTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3pNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDbk0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3TSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxF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QUFDOUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxpREFBSyxFQUFFLENBQUM7QUFDMUIsSUFBTSxVQUFVLEdBQUcsSUFBSSwyREFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQztJQUNuQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDZCxLQUFLLDRDQUFJLENBQUMsS0FBSztZQUNiLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNO1FBQ1IsS0FBSyw0Q0FBSSxDQUFDLElBQUk7WUFDWixVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNO1FBQ1IsS0FBSyw0Q0FBSSxDQUFDLElBQUk7WUFDWixVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QixNQUFNO1FBQ1I7WUFDRSxNQUFNO0tBQ1Q7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyw0Q0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLDRDQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2pELFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5CLFdBQVcsQ0FBQztJQUNWLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixDQUFDLEVBQUUsMkNBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vc3JjL3NjcmlwdHMvQ2xhc3Nlcy9Db2xsaXNpb25CbG9jay50cyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc2NyaXB0cy9DbGFzc2VzL0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vc3JjL3NjcmlwdHMvQ2xhc3Nlcy9MZXZlbC50cyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc2NyaXB0cy9DbGFzc2VzL01vZGVsLnRzIiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS8uL3NyYy9zY3JpcHRzL0NsYXNzZXMvUGxheWVyLnRzIiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS8uL3NyYy9zY3JpcHRzL0NsYXNzZXMvU3ByaXRlLnRzIiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS8uL3NyYy9zY3JpcHRzL0NsYXNzZXMvVmlldy50cyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lLy4vc3JjL3NjcmlwdHMvZGF0YS9sZXZlbHNfZGF0YS50cyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc2NyaXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYXRmb3JtZXJfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxhdGZvcm1lcl9nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wbGF0Zm9ybWVyX2dhbWUvLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4jZ2FtZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjs7RUFFdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUSUxFX0hFSUdIVCwgVElMRV9XSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ29vcmRzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQmxvY2sge1xyXG4gIHBvc2l0aW9uOiBDb29yZHM7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3Ioe3Bvc2l0aW9ufTogYW55KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLndpZHRoID0gVElMRV9XSURUSDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gVElMRV9IRUlHSFQ7XHJcbiAgfVxyXG5cclxuICBkcmF3KGN4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIGN4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIDAuNSlcIjtcclxuICAgIGN4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vVmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIG1vZGVsOiBNb2RlbDtcclxuICB2aWV3OiBWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3RvciAobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbnRyb2xsZXIgc3RhcnRlZFwiKTsgICAgXHJcbiAgfVxyXG5cclxuICBzdGVwKCkge1xyXG4gICAgdGhpcy5tb2RlbC51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy52aWV3LnVwZGF0ZVBvc2l0aW9uKHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgc2V0UGxheWVyVmVsb2NpdHlYKGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVsLnBsYXllci52ZWxvY2l0eS54ID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxheWVySnVtcCgpIHtcclxuICAgIHRoaXMubW9kZWwuanVtcCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbGxpc2lvbkJsb2NrIH0gZnJvbSBcIi4vQ29sbGlzaW9uQmxvY2tcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcbmltcG9ydCB7IENvb3JkcyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuICBjb2xsaXNpb25zOiBDb2xsaXNpb25CbG9ja1tdO1xyXG4gIGJhY2tncm91bmQ6IFNwcml0ZTtcclxuICBwbGF5ZXJTdGFydFBvczogQ29vcmRzO1xyXG4gIGNvbnN0cnVjdG9yKGNvbGxpc2lvbkJsb2NrczogQ29sbGlzaW9uQmxvY2tbXSwgc3RhcnRQb3M6IENvb3Jkcywgc3ByaXRlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGxheWVyU3RhcnRQb3MgPSBzdGFydFBvcztcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZVNyYzogc3ByaXRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29sbGlzaW9ucyA9IGNvbGxpc2lvbkJsb2NrcztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQge1xyXG4gIEdBTUVfU1RBVEUsXHJcbiAgUExBWUVSX1NQRUVELFxyXG4gIFNDUkVFTl9IRUlHSFQsXHJcbiAgSlVNUF9GT1JDRSxcclxuICBUSUxFX1dJRFRILFxyXG4gIFBMQVlFUl9XSURUSCxcclxuICBSSUdIVF9CT1VORCxcclxuICBMRUZUX0JPVU5ELFxyXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdGVzdExldmVsLCB0ZXN0TGV2ZWxXaWRlIH0gZnJvbSBcIi4uL2RhdGEvbGV2ZWxzX2RhdGFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RlbCB7XHJcbiAgY3VycmVudExldmVsOiBMZXZlbCB8IG51bGw7XHJcbiAgZ2FtZVN0YXRlOiBzdHJpbmc7XHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gIHN0YXRlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FX1NUQVRFLk1FTlU7XHJcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRlc3RMZXZlbFdpZGU7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zZXRJbml0aWFsUG9zaXRpb24odGhpcy5jdXJyZW50TGV2ZWwucGxheWVyU3RhcnRQb3MpO1xyXG4gICAgdGhpcy5vZmZzZXQgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICBcclxuICAgIC8vIHBsYXllclxyXG4gICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueCArPSB0aGlzLnBsYXllci52ZWxvY2l0eS54ICogUExBWUVSX1NQRUVEO1xyXG4gICAgdGhpcy5wbGF5ZXIudXBkYXRlU3RhdGUoKTtcclxuICAgIFxyXG4gICAgLy8gcGh5c2ljc1xyXG4gICAgdGhpcy5jaGVjRm9ya0hvcml6b250YWxDb2xsaXNpb25zKCk7XHJcbiAgICB0aGlzLmFwcGx5R3Jhdml0eSgpO1xyXG4gICAgdGhpcy5jaGVja0ZvclZlcnRpY2FsQ29sbGlzaW9ucygpO1xyXG5cclxuICAgIC8vIHNoaWZ0IGxldmVsXHJcbiAgICB0aGlzLnNoaWZ0TGV2ZWwoKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb2xsaXNpb25zWzBdLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuY2FuSnVtcCkge1xyXG4gICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnkgPSBKVU1QX0ZPUkNFO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUdyYXZpdHkoKSB7XHJcbiAgICB0aGlzLnBsYXllci52ZWxvY2l0eS55ICs9IDE7XHJcbiAgICB0aGlzLnBsYXllci5wb3NpdGlvbi55ICs9IHRoaXMucGxheWVyLnZlbG9jaXR5Lnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNGb3JrSG9yaXpvbnRhbENvbGxpc2lvbnMoKSB7XHJcbiAgICBjb25zdCBjb2xsaXNpb25zID0gdGhpcy5jdXJyZW50TGV2ZWwuY29sbGlzaW9ucztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA8PSBjb2xsaXNpb24ucG9zaXRpb24ueCArIGNvbGxpc2lvbi53aWR0aCAmJlxyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uLnggKyB0aGlzLnBsYXllci53aWR0aCA+PSBjb2xsaXNpb24ucG9zaXRpb24ueCAmJlxyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uLnkgKyB0aGlzLnBsYXllci5oZWlnaHQgPj0gY29sbGlzaW9uLnBvc2l0aW9uLnkgJiZcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbi55IDw9IGNvbGxpc2lvbi5wb3NpdGlvbi55ICsgY29sbGlzaW9uLmhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICBjb2xsaXNpb24ucG9zaXRpb24ueCArIGNvbGxpc2lvbi53aWR0aCArIDAuMDE7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci52ZWxvY2l0eS54ID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA9XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbi5wb3NpdGlvbi54IC0gdGhpcy5wbGF5ZXIud2lkdGggLSAwLjAxO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRm9yVmVydGljYWxDb2xsaXNpb25zKCkge1xyXG4gICAgY29uc3QgY29sbGlzaW9ucyA9IHRoaXMuY3VycmVudExldmVsLmNvbGxpc2lvbnM7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uLnggPD0gY29sbGlzaW9uLnBvc2l0aW9uLnggKyBjb2xsaXNpb24ud2lkdGggJiZcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbi54ICsgdGhpcy5wbGF5ZXIud2lkdGggPj0gY29sbGlzaW9uLnBvc2l0aW9uLnggJiZcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbi55ICsgdGhpcy5wbGF5ZXIuaGVpZ2h0ID49IGNvbGxpc2lvbi5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSA8PSBjb2xsaXNpb24ucG9zaXRpb24ueSArIGNvbGxpc2lvbi5oZWlnaHRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uLnkgPVxyXG4gICAgICAgICAgICBjb2xsaXNpb24ucG9zaXRpb24ueSArIGNvbGxpc2lvbi5oZWlnaHQgKyAwLjAxO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSA9XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbi5wb3NpdGlvbi55IC0gdGhpcy5wbGF5ZXIuaGVpZ2h0IC0gMC4wMTtcclxuXHJcbiAgICAgICAgICAvLyDQtdGB0LvQuCDQuNCz0YDQvtC6INC60LDRgdCw0LXRgtGB0Y8g0LfQtdC80LvQuCwg0YLQviDQvNC+0LbQtdGCINGB0L3QvtCy0LBcclxuICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaGlmdExldmVsKCkge1xyXG4gICAgY29uc3QgY29sbGlzaW9ucyA9IHRoaXMuY3VycmVudExldmVsLmNvbGxpc2lvbnM7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBsYXllci5wb3NpdGlvbi54ID49IFJJR0hUX0JPVU5EKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA9IFJJR0hUX0JPVU5EO1xyXG4gICAgICAgIGNvbGxpc2lvbi5wb3NpdGlvbi54IC09IHRoaXMucGxheWVyLnZlbG9jaXR5LnggKiBQTEFZRVJfU1BFRUQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnBsYXllci5wb3NpdGlvbi54IDw9IExFRlRfQk9VTkQpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbi54ID0gTEVGVF9CT1VORDtcclxuICAgICAgICBjb2xsaXNpb24ucG9zaXRpb24ueCAtPSB0aGlzLnBsYXllci52ZWxvY2l0eS54ICogUExBWUVSX1NQRUVEO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkcyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBQTEFZRVJfSEVJR0hULCBQTEFZRVJfU1RBVEUsIFBMQVlFUl9XSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIHBvc2l0aW9uOiBDb29yZHM7XHJcbiAgdmVsb2NpdHk6IENvb3JkcztcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGNhbkp1bXA6IGJvb2xlYW47XHJcbiAgc3RhdGU6IFN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICB4OiAxMDAsXHJcbiAgICAgIHk6IDEwMCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oZWlnaHQgPSBQTEFZRVJfSEVJR0hUO1xyXG4gICAgdGhpcy53aWR0aCA9IFBMQVlFUl9XSURUSDtcclxuICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBQTEFZRVJfU1RBVEUuRkFMTDtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxQb3NpdGlvbihwb3M6IENvb3Jkcykge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKCkge1xyXG5cclxuICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPT09IDAgJiYgdGhpcy52ZWxvY2l0eS55ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBQTEFZRVJfU1RBVEUuSURMRTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy52ZWxvY2l0eS54ICE9PSAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBQTEFZRVJfU1RBVEUuTU9WRTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gUExBWUVSX1NUQVRFLkpVTVA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFBMQVlFUl9TVEFURS5GQUxMO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFNwcml0ZUluZm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHBvc2l0aW9uOiBhbnk7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgcG9zaXRpb24sIGltYWdlU3JjIH06IFNwcml0ZUluZm8pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIi4vTW9kZWxcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcbmltcG9ydCB7IFNDUkVFTl9IRUlHSFQsIFNDUkVFTl9XSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgY3VycmVudExldmVsOiBTcHJpdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhc0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKG1vZGVsOiBNb2RlbCkge1xyXG4gICAgLy8gbGV2ZWxcclxuICAgIC8vINC+0YLRgNC40YHQvtCy0LrQsCDRhNC+0L3QsFxyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtb2RlbC5jdXJyZW50TGV2ZWwuYmFja2dyb3VuZC5pbWFnZSwgbW9kZWwuY3VycmVudExldmVsLmJhY2tncm91bmQucG9zaXRpb24ueCwgbW9kZWwuY3VycmVudExldmVsLmJhY2tncm91bmQucG9zaXRpb24ueSk7XHJcbiAgICAvLyDQvtGC0YDQuNGB0L7QstC60LAg0LrQvtC70LvQuNC30LjQuVxyXG4gICAgbW9kZWwuY3VycmVudExldmVsLmNvbGxpc2lvbnMuZm9yRWFjaChibG9jayA9PiB7XHJcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jb250ZXh0KTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIHBsYXllclxyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KG1vZGVsLnBsYXllci5wb3NpdGlvbi54LCBtb2RlbC5wbGF5ZXIucG9zaXRpb24ueSwgbW9kZWwucGxheWVyLndpZHRoLCBtb2RlbC5wbGF5ZXIuaGVpZ2h0KTtcclxuICB9XHJcbn0iLCIvLyA9PT09PT0gR0FNRSBWQVJJQUJMRVMgPT09PT09XHJcbmV4cG9ydCBjb25zdCBOT19USU1FUl9WQUxVRSA9IFwibm8tdGltZXJcIjtcclxuZXhwb3J0IGNvbnN0IEZQUyA9IDEwMDAgLyA2MDtcclxuZXhwb3J0IGNvbnN0IFNDUkVFTl9XSURUSCA9IDEwMjQ7XHJcbmV4cG9ydCBjb25zdCBTQ1JFRU5fSEVJR0hUID0gNTc2O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJJR0hUX0JPVU5EID0gNjI0O1xyXG5leHBvcnQgY29uc3QgTEVGVF9CT1VORCA9IDIwMDtcclxuXHJcbi8vINGI0LjRgNC40L3QsCDQuCDQstGL0YHQvtGC0LAg0YLQsNC50LvQsCDQsiDQv9C40LrRgdC10LvRj9GFXHJcbmV4cG9ydCBjb25zdCBUSUxFX1dJRFRIID0gMzI7XHJcbmV4cG9ydCBjb25zdCBUSUxFX0hFSUdIVCA9IDMyO1xyXG5cclxuLy8g0LrQvtC70LjRh9C10YHRgtCy0L4g0YLQsNC50LvQvtCyINCyINGD0YDQvtCy0L3QtSDQsiDRiNC40YDQuNC90YNcclxuZXhwb3J0IGNvbnN0IEZJRUxEX1dJRFRIID0gMzI7XHJcbmV4cG9ydCBjb25zdCBXSURFX0ZJRUxEX1dJRFRIID0gNjQ7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEUgPSB7XHJcbiAgTUVOVTogXCJNZW51XCIsXHJcbiAgR0FNRVBMQVk6IFwiR2FtZXBsYXlcIixcclxufVxyXG5cclxuLy8gPT09PT09IFBMQVlFUiBWQVJJQUJMRVMgPT09PT09XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfU1BFRUQgPSA1O1xyXG5leHBvcnQgY29uc3QgSlVNUF9GT1JDRSA9IC0xMjtcclxuLy8g0YDQsNC30LzQtdGA0Ysg0LjQs9GA0L7QutCwINCyINC/0LjQutGB0LXQu9GP0YVcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9XSURUSCA9IDMxO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX0hFSUdIVCA9IDMxO1xyXG5cclxuLy8g0LrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y9cclxuZXhwb3J0IGNvbnN0IEtFWVMgPSB7XHJcbiAgRE9XTjogXCJLZXlTXCIsXHJcbiAgTEVGVDogXCJLZXlBXCIsXHJcbiAgUklHSFQ6IFwiS2V5RFwiLFxyXG4gIEpVTVA6IFwiS2V5V1wiLFxyXG4gIFBBVVNFOiBcIkVzY2FwZVwiXHJcbn1cclxuXHJcbi8vINGB0L7RgdGC0L7Rj9C90LjRjyDQv9C10YDRgdC+0L3QsNC20LBcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TVEFURSA9IHtcclxuICBJRExFOiBcIklkbGVcIixcclxuICBNT1ZFOiBcIk1vdmVcIixcclxuICBBVFRBQ0s6IFwiQXR0YWNrXCIsXHJcbiAgSlVNUDogXCJKdW1wXCIsXHJcbiAgRkFMTDogXCJGYWxsXCJcclxufSIsImltcG9ydCB7IENvbGxpc2lvbkJsb2NrIH0gZnJvbSBcIi4uL0NsYXNzZXMvQ29sbGlzaW9uQmxvY2tcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vQ2xhc3Nlcy9MZXZlbFwiO1xyXG5pbXBvcnQgeyBGSUVMRF9XSURUSCwgVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFdJREVfRklFTERfV0lEVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29sbGlzaW9ucywgY3JlYXRlQ29sbGlzaW9uQmxvY2tzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG4vLyDQvNCw0YHQuNCyINGBINC60L7Qu9C70LjQt9C40Y/QvNC4INC00LvRjyDRg9GA0L7QstC90LXQuVxyXG5jb25zdCBsZXZlbDEgPSBbMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMCwgMCwgMzYsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMzYsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMzYsIDM2LCAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzZdO1xyXG5cclxuY29uc3Qgd2lkZUxldmVsID0gWzM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LFxyXG4gICAgICAgICAgICAgICAgICAgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMCwgMCwgMCwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAwLCAwLCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAwLCAwLCAwLCAwLCAzNixcclxuICAgICAgICAgICAgICAgICAgIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMzYsIDM2LCAzNiwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAzNiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzYsIDM2LCAzNiwgMCwgMCwgMzYsXHJcbiAgICAgICAgICAgICAgICAgICAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAzNiwgMzYsIDM2LCAzNiwgMzYsIDM2LCAwLCAwLCAzNiwgMzYsIDM2LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzNiwgMzYsIDM2LCAzNiwgMCwgMCwgMzYsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDM2LCAzNiwgMzYsIDM2XVxyXG5cclxuLy8gVE9ETzog0J7Qn9Ci0JjQnNCY0JfQmNCg0J7QktCQ0KLQrCwg0J/QldCg0JXQndCV0KHQotCYXHJcbmNvbnN0IHBhcnNlZENvbGxpc2lvbnMgPSBwYXJzZUNvbGxpc2lvbnMobGV2ZWwxLCBGSUVMRF9XSURUSCk7XHJcbmNvbnN0IHBhcnNlZENvbGxpc2lvbnNXaWRlID0gcGFyc2VDb2xsaXNpb25zKHdpZGVMZXZlbCwgV0lERV9GSUVMRF9XSURUSCk7XHJcblxyXG4vLyDRgtC10YHRgtC+0LLRi9C5INGD0YDQvtCy0LXQvdGMXHJcbmV4cG9ydCBjb25zdCB0ZXN0TGV2ZWwgPSBuZXcgTGV2ZWwoY3JlYXRlQ29sbGlzaW9uQmxvY2tzKHBhcnNlZENvbGxpc2lvbnMpLCB7eDogMzIsIHk6IDUxMn0sIFwiLi4vLi4vaW1hZ2VzL3Rlc3RfbGV2ZWwucG5nXCIpO1xyXG5leHBvcnQgY29uc3QgdGVzdExldmVsV2lkZSA9IG5ldyBMZXZlbChjcmVhdGVDb2xsaXNpb25CbG9ja3MocGFyc2VkQ29sbGlzaW9uc1dpZGUpLCB7eDogMzIsIHk6IDUxMn0sIFwiLi4vLi4vaW1hZ2VzL3Rlc3Rfd2lkZS5wbmdcIik7XHJcbiIsImltcG9ydCB7IENvbGxpc2lvbkJsb2NrIH0gZnJvbSBcIi4vQ2xhc3Nlcy9Db2xsaXNpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBGSUVMRF9XSURUSCwgVElMRV9IRUlHSFQsIFRJTEVfV0lEVEggfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbGxpc2lvbnMoZGF0YTogbnVtYmVyW10sIHdpZHRoOiBudW1iZXIpIHtcclxuICBjb25zdCByb3dzOiBhbnlbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gd2lkdGgpIHtcclxuICAgIHJvd3MucHVzaChkYXRhLnNsaWNlKGksIGkgKyB3aWR0aCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xsaXNpb25CbG9ja3MoYXJyYXk6IGFueVtdKSB7XHJcbiAgY29uc3Qgb3V0cHV0OiBDb2xsaXNpb25CbG9ja1tdID0gW107XHJcblxyXG4gIGFycmF5LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgcm93LmZvckVhY2goKHN5bWJvbDogbnVtYmVyLCB4OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHN5bWJvbCA9PT0gMzYpIHtcclxuICAgICAgICAvLyBhZGQgY29sbGlzaW9uIHRvIGNvbGxpc2lvbnMgYXJyYXlcclxuICAgICAgICBvdXRwdXQucHVzaChuZXcgQ29sbGlzaW9uQmxvY2soe1xyXG4gICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogeCAqIFRJTEVfV0lEVEgsXHJcbiAgICAgICAgICAgIHk6IHkgKiBUSUxFX0hFSUdIVCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9DbGFzc2VzL1ZpZXdcIjtcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9DbGFzc2VzL01vZGVsXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9DbGFzc2VzL0NvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCB7IEZQUywgS0VZUywgTk9fVElNRVJfVkFMVUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhcImdhbWVcIik7XHJcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBzd2l0Y2ggKGUuY29kZSkge1xyXG4gICAgY2FzZSBLRVlTLlJJR0hUOlxyXG4gICAgICBjb250cm9sbGVyLnNldFBsYXllclZlbG9jaXR5WCgxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEtFWVMuTEVGVDpcclxuICAgICAgY29udHJvbGxlci5zZXRQbGF5ZXJWZWxvY2l0eVgoLTEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgS0VZUy5KVU1QOlxyXG4gICAgICBjb250cm9sbGVyLmhhbmRsZVBsYXllckp1bXAoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICBpZiAoZS5jb2RlID09PSBLRVlTLlJJR0hUIHx8IGUuY29kZSA9PT0gS0VZUy5MRUZUKSB7XHJcbiAgICBjb250cm9sbGVyLnNldFBsYXllclZlbG9jaXR5WCgwKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29udHJvbGxlci5zdGFydCgpO1xyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGNvbnRyb2xsZXIuc3RlcCgpO1xyXG59LCBGUFMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=