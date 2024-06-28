/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Lalezar&family=Press+Start+2P&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --buttonColor: #0f172a;
  --cellSizeLarge: 40px;
  --cellSizeMedium: 35px;
  --cellSizeSmall: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lalezar", system-ui;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background: rgb(22, 78, 99);
  background: linear-gradient(40deg, rgb(22, 78, 99) 16%, rgb(40, 57, 142) 92%, rgb(46, 16, 101) 100%);
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: "Black Ops One", system-ui;
  width: 100%;
  font-size: 100px;
  font-weight: bold;
  text-transform: uppercase;
  background: rgb(13, 150, 188);
  background: linear-gradient(0deg, rgb(13, 150, 188) 38%, rgb(0, 0, 0) 89%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

main {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 24px 0;
}

#direction {
  margin: 12px;
  font-size: 1.2rem;
  padding: 2px 10px 0 10px;
  background-color: transparent;
  border: solid var(--buttonColor) 2px;
  color: var(--buttonColor);
  cursor: pointer;
}

.board-container {
  background-color: #082f49;
}

.row {
  display: flex;
}

#cell {
  width: var(--cellSizeLarge);
  height: var(--cellSizeLarge);
  border: solid #0d9488 1px;
}

.invalid {
  background-color: #f87171;
}

.valid {
  background-color: #0891b2;
}

.ship {
  background-color: grey;
}

.message {
  font-size: 1.3rem;
  margin-top: 16px;
}

/* Loading Screen  */
/* styles.css */
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.load {
  opacity: 0;
  animation: fadeInOut 3s ease-in-out;
}

/* Game Play UI */
#cell-medium {
  width: var(--cellSizeMedium);
  height: var(--cellSizeMedium);
  border: solid #0d9488 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clickable:hover {
  background-color: #0d9488;
  cursor: crosshair;
}

#gameContainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.mainBoard,
.userBoard {
  background-color: #082f49;
}

#hit-marker {
  color: red;
  font-size: 2.3rem;
}

#miss-marker {
  color: #0891b2;
  font-size: 2.3rem;
}

.end-game-message {
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-top: 20px;
}

/* Events log */
#log-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}

#log {
  background-color: black;
  color: rgb(11, 237, 22);
  width: 80%;
  height: 150px;
  border: ridge gray 4px;
  padding: 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

#log * {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  font-weight: 100;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;EACE,sBAAA;EACA,qBAAA;EACA,sBAAA;EACA,qBAAA;AACF;;AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,iCAAA;AACF;;AAEA;;EAEE,YAAA;EACA,WAAA;AACF;;AAEA;EACE,2BAAA;EACA,oGAAA;AACF;;AAUA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,uCAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,6BAAA;EACA,0EAAA;EAKA,6BAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,2CAAA;AAXF;;AAcA;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;AAXF;;AAcA;EACE,YAAA;EACA,iBAAA;EACA,wBAAA;EACA,6BAAA;EACA,oCAAA;EACA,yBAAA;EACA,eAAA;AAXF;;AAcA;EACE,yBAAA;AAXF;;AAcA;EACE,aAAA;AAXF;;AAcA;EACE,2BAAA;EACA,4BAAA;EACA,yBAAA;AAXF;;AAcA;EACE,yBAAA;AAXF;;AAcA;EACE,yBAAA;AAXF;;AAcA;EACE,sBAAA;AAXF;;AAcA;EACE,iBAAA;EACA,gBAAA;AAXF;;AAcA,oBAAA;AACA,eAAA;AACA;EACE;IAEE,UAAA;EAZF;EAcA;IACE,UAAA;EAZF;AACF;AAeA;EACE,UAAA;EACA,mCAAA;AAbF;;AAgBA,iBAAA;AACA;EACE,4BAAA;EACA,6BAAA;EACA,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbF;;AAgBA;EACE,yBAAA;EACA,iBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;EACA,8BAAA;AAbF;;AAeA;;EAEE,yBAAA;AAZF;;AAeA;EACE,UAAA;EACA,iBAAA;AAZF;;AAcA;EACE,cAAA;EACA,iBAAA;AAXF;;AAcA;EACE,eAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAXF;;AAcA,eAAA;AACA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,gBAAA;AAZF;;AAeA;EACE,uBAAA;EACA,uBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAZF;;AAcA;EACE,8CAAA;EACA,iBAAA;EACA,gBAAA;AAXF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Lalezar&family=Press+Start+2P&display=swap\");\n:root {\n  --buttonColor: #0f172a;\n  --cellSizeLarge: 40px;\n  --cellSizeMedium: 35px;\n  --cellSizeSmall: 20px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Lalezar\", system-ui;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  background: rgb(22, 78, 99);\n  background: linear-gradient(\n    40deg,\n    rgba(22, 78, 99, 1) 16%,\n    rgba(40, 57, 142, 1) 92%,\n    rgba(46, 16, 101, 1) 100%\n  );\n}\n\nbody * {\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title {\n  font-family: \"Black Ops One\", system-ui;\n  width: 100%;\n  font-size: 100px;\n  font-weight: bold;\n  text-transform: uppercase;\n  background: rgb(13, 150, 188);\n  background: linear-gradient(\n    0deg,\n    rgba(13, 150, 188, 1) 38%,\n    rgba(0, 0, 0, 1) 89%\n  );\n  -webkit-background-clip: text;\n  color: transparent;\n  text-align: center;\n  letter-spacing: 2px;\n  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n}\n\nmain {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 24px 0 24px 0;\n}\n\n#direction {\n  margin: 12px;\n  font-size: 1.2rem;\n  padding: 2px 10px 0 10px;\n  background-color: transparent;\n  border: solid var(--buttonColor) 2px;\n  color: var(--buttonColor);\n  cursor: pointer;\n}\n\n.board-container {\n  background-color: #082f49;\n}\n\n.row {\n  display: flex;\n}\n\n#cell {\n  width: var(--cellSizeLarge);\n  height: var(--cellSizeLarge);\n  border: solid #0d9488 1px;\n}\n\n.invalid {\n  background-color: #f87171;\n}\n\n.valid {\n  background-color: #0891b2;\n}\n\n.ship {\n  background-color: grey;\n}\n\n.message {\n  font-size: 1.3rem;\n  margin-top: 16px;\n}\n\n/* Loading Screen  */\n/* styles.css */\n@keyframes fadeInOut {\n  0%,\n  100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.load {\n  opacity: 0;\n  animation: fadeInOut 3s ease-in-out;\n}\n\n/* Game Play UI */\n#cell-medium {\n  width: var(--cellSizeMedium);\n  height: var(--cellSizeMedium);\n  border: solid #0d9488 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.clickable:hover {\n  background-color: #0d9488;\n  cursor: crosshair;\n}\n\n#gameContainer {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.mainBoard,\n.userBoard {\n  background-color: #082f49;\n}\n\n#hit-marker {\n  color: red;\n  font-size: 2.3rem;\n}\n#miss-marker {\n  color: #0891b2;\n  font-size: 2.3rem;\n}\n\n.end-game-message {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n\n/* Events log */\n#log-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 24px;\n}\n\n#log {\n  background-color: black;\n  color: rgb(11, 237, 22);\n  width: 80%;\n  height: 150px;\n  border: ridge gray 4px;\n  padding: 8px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n#log * {\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 0.8rem;\n  font-weight: 100;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DomManipulation/Log.mjs":
/*!*************************************!*\
  !*** ./src/DomManipulation/Log.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Log)
/* harmony export */ });
/**
 * This is a retro looking log monitor that details the moves and events that happen when playing battleship. This module is responsible for rendering and updating the events log when it's initialized in PlayGame.mjs
 */

class Log {
  constructor() {}

  addMessage(newMessage) {
    const message = document.createElement("span");
    message.id = "message";
    message.innerHTML = `@Battlship % ${newMessage}`;
    const log = document.querySelector("#log");
    log.appendChild(message);
    this.scrollToBottom(); // Ensure the log scrolls to the bottom
  }

  render() {
    const main = document.querySelector("main");

    const container = document.createElement("div");
    container.id = "log-container";

    const log = document.createElement("div");
    log.id = "log";
    container.appendChild(log);
    main.appendChild(container);
  }

  scrollToBottom() {
    const logContainer = document.querySelector("#log");
    logContainer.scrollTop = logContainer.scrollHeight;
  }
}


/***/ }),

/***/ "./src/DomManipulation/PlayGame.mjs":
/*!******************************************!*\
  !*** ./src/DomManipulation/PlayGame.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayGame)
/* harmony export */ });
/* harmony import */ var _Log_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.mjs */ "./src/DomManipulation/Log.mjs");

class PlayGame {
  constructor(player1, player2) {
    //this.fakeGame = new FakeGame();
    //this.user = this.fakeGame.player;
    //this.computer = this.fakeGame.computer;
    this.user = player1;
    this.computer = player2;
    this.userBoard = this.drawBoard(this.user);
    this.computerBoard = this.drawBoard(this.computer);
    this.usersMoves = []; // keeps track of user's moves.
    this.computerMoves = [];
    this.successfulHit = null;
    this.renderGame();
    this.handleGamePlay();
    this.log = new _Log_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.log.render();
  }

  /**
   * Handles the game play. When the user clicks on the computer's board.
   */
  handleGamePlay() {
    const cells = document.querySelectorAll(".clickable");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        if (this.isValidMove(x, y, this.usersMoves)) {
          if (this.computer.gameboard.receiveAttack(x, y)) {
            cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
            cell.classList.add("ship");
          } else {
            cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
          }
          this.usersMoves.push({ x, y });
          // Check if game is over after user's moves.
          if (this.checkGameOver()) {
            return;
          }
          // Computer takes it's turn now.
          this.computerAttacks();
        }
      });
    });
  }
  /**
   * Checks if the game has ended due to all ships of either player being sunk.
   * @returns {boolean} - true or false
   */
  checkGameOver() {
    if (this.user.gameboard.allShipsSunk()) {
      this.displayEndGameMessage("Defeated");
      console.log(this.user.gameboard.toString());
      return true;
    } else if (this.computer.gameboard.allShipsSunk()) {
      this.displayEndGameMessage("You Win!");
      console.log(this.computer.gameboard.toString());
      return true;
    }
    return false;
  }

  displayEndGameMessage(message) {
    const main = document.querySelector("main");
    const endGameMessage = document.createElement("div");
    endGameMessage.innerHTML = message;
    main.appendChild(endGameMessage);
  }

  /**
   * Handles the computer attacking the user. Called after user attacks computer.
   */
  computerAttacks() {
    let x, y;
    // check for a successful hit.
    if (this.successfulHit !== null) {
      // if there is a successful hit previously coordinates are generated adjacent to previous move.
      const nextCoordinates = this.generateAdjacentMove(this.successfulHit);
      x = nextCoordinates.x;
      y = nextCoordinates.y;
    } else {
      //if no previously successful move, then we generate random VALID coordinates
      do {
        x = this.generateXAndY();
        y = this.generateXAndY();
      } while (!this.isValidMove(x, y, this.computerMoves));
    }

    // once coodinates are valid and generated, then we select cell on board.
    // it's selecting the first board since that's the one we want anyways.
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (this.user.gameboard.receiveAttack(x, y)) {
      // check if the attack is a hit.
      cell.innerHTML = `<span id="hit-marker" class="material-symbols-outlined">close</span>`;
      cell.classList.add("hit");
      this.updateSuccessfulHit(x, y); // update successful hit.
    } else {
      // else just add a miss marker.
      cell.innerHTML = `<span id="miss-marker" class="material-symbols-outlined">radio_button_checked</span>`;
      cell.classList.add("miss");
      this.successfulHit = null;
    }

    this.computerMoves.push({ x, y }); // add the coordinates to moves list.

    // Check if game is over after computer's move.
    if (this.checkGameOver()) {
      return;
    }
  }

  updateSuccessfulHit(x, y) {
    const lastMove = this.computerMoves[this.computerMoves.length - 1]; // find last move
    if (this.successfulHit) {
      // check if last move was a successful hit.
      // if the last move's x matches the current hit's x, we know the direction is horizontal. Vice versa for vertical.
      if (this.successfulHit.x !== lastMove.x) {
        this.successfulHit = { hit: true, x, y, direction: "horizontal" };
      } else if (this.successfulHit.y !== lastMove.y) {
        this.successfulHit = { hit: true, x, y, direction: "vertical" };
      }
    } else {
      this.successfulHit = { hit: true, x, y, direction: null };
    }
  }

  /**
   * Generate adjacent move coordinates based on a previous successful hit.
   * @param {Object} successfulHit - { hit: true, x, y, direction }
   * @returns {Object} - { x, y } - Next move coordinates
   */
  generateAdjacentMove(successfulHit) {
    let x, y;
    const maxAttempts = 10; // Max attempts to avoid infinite recursion
    let attempts = 0;

    while (attempts < maxAttempts) {
      // check which direction we want to generate coordiantes for.
      if (successfulHit.direction === "horizontal") {
        const side = Math.round(Math.random()); // generate random side. 0 or 1.
        x = side === 1 ? successfulHit.x + 1 : successfulHit.x - 1;
        y = successfulHit.y;
      } else if (successfulHit.direction === "vertical") {
        const side = Math.round(Math.random());
        y = side === 1 ? successfulHit.y + 1 : successfulHit.y - 1;
        x = successfulHit.x;
      } else {
        // if there's no direction then we generate 1 of 4 adjacent coordinates.
        const choice = Math.floor(Math.random() * 4) + 1;
        switch (choice) {
          case 1:
            x = successfulHit.x - 1;
            y = successfulHit.y;
            break;
          case 2:
            x = successfulHit.x;
            y = successfulHit.y - 1;
            break;
          case 3:
            x = successfulHit.x + 1;
            y = successfulHit.y;
            break;
          case 4:
            x = successfulHit.x;
            y = successfulHit.y + 1;
            break;
        }
      }

      if (this.isValidMove(x, y, this.computerMoves)) {
        return { x, y };
      }
      attempts++;
    }

    // Fallback: If all adjacent moves are invalid, pick a random move
    do {
      x = this.generateXAndY();
      y = this.generateXAndY();
    } while (!this.isValidMove(x, y, this.computerMoves));

    return { x, y };
  }

  isValidMove(x, y, movesArray) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    return !movesArray.some((move) => move.x === x && move.y === y);
  }

  renderGame() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "gameContainer");

    this.userBoard.className = "mainBoard";
    this.computerBoard.className = "userBoard";

    gameContainer.appendChild(this.userBoard);
    gameContainer.appendChild(this.computerBoard);
    main.appendChild(gameContainer);
  }

  drawBoard(player) {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    const backEndBoard = player.gameboard.board;
    const name = player.name;

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < 10; j++) {
        const column = document.createElement("div");
        column.classList.add("empty");
        column.setAttribute("data-x", i);
        column.setAttribute("data-y", j);
        column.setAttribute("id", `cell-medium`);
        if (name === "computer") {
          column.className = "clickable";
        }
        if (name === "user" && backEndBoard[i][j]) {
          column.className = "ship";
        }

        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  generateXAndY() {
    return Math.floor(Math.random() * 10);
  }
}


/***/ }),

/***/ "./src/DomManipulation/SetupComputer.mjs":
/*!***********************************************!*\
  !*** ./src/DomManipulation/SetupComputer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetupComputer)
/* harmony export */ });
/* harmony import */ var _classes_Player_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Player.mjs */ "./src/classes/Player.mjs");

/**
 * Responsible for setting up the computer player and gameboard.
 */

class SetupComputer {
  constructor() {
    this.computer = new _classes_Player_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]("computer");
    this.gameboard = this.computer.gameboard;
    this.ships = this.computer.ships;
    this.currentShipIndex = 0;

    this.placeNextShip();
  }

  placeNextShip() {
    // loop through all of the ships
    while (this.currentShipIndex < this.ships.length) {
      // get the ship
      let ship = this.ships[this.currentShipIndex];
      let x, y, direction;

      // Generate x, y, and direction until it's a valid position is found.
      do {
        x = this.generateXAndY();
        y = this.generateXAndY();
        direction = this.generateDirection();
      } while (!this.gameboard.isValidPosition(ship, x, y, direction));

      // once position is found, place the ship to the computer's gameboard.
      this.gameboard.placeShip(ship, x, y, direction);
      // increase current ship index.
      this.currentShipIndex++;
    }
    console.log("All of the computer's ships have been placed. ");
  }

  /**
   * Randomly generates a direction.
   * @returns {string} - "horizontal" || "vertical"
   */
  generateDirection() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
  }

  /**
   * Used for generating a random x and y coordinate.
   * @returns {number} between 0 and 9.
   */
  generateXAndY() {
    return Math.floor(Math.random() * 10);
  }
}


/***/ }),

/***/ "./src/DomManipulation/SetupUser.mjs":
/*!*******************************************!*\
  !*** ./src/DomManipulation/SetupUser.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetupUser)
/* harmony export */ });
/* harmony import */ var _classes_Player_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Player.mjs */ "./src/classes/Player.mjs");
/* harmony import */ var _SetupComputer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupComputer.mjs */ "./src/DomManipulation/SetupComputer.mjs");
/* harmony import */ var _PlayGame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayGame.mjs */ "./src/DomManipulation/PlayGame.mjs");




/**
 * Responsible for setting up the user players gameboard.
 * The order of operations:
 * 1. Start by rendering the button, board, and message on the screen
 * 2. Add event handlers to everything.
 */

class SetupUser {
  constructor() {
    this.initializeGame();
    this.setupComputer = new _SetupComputer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.user = new _classes_Player_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]("User");
    this.gameboard = this.user.gameboard;
    this.ships = this.user.ships;
    this.currentShipIndex = 0;
    this.currentShip = this.ships[this.currentShipIndex];
    this.direction = "horizontal";
  }

  initializeGame() {
    this.renderPage();
    this.setupAllHandlers();
  }

  /**
   * Places a ship on the user's gameboard and updates the board UI.
   * This method also activates the next phase of the app once all ships have been assigned.
   * @param {number} x
   * @param {number} y
   */
  placeNextShip(x, y) {
    // Check if we reached the end of the ships array (all ships placed)
    if (this.currentShipIndex >= this.ships.length - 1) {
      this.gameboard.placeShip(this.currentShip, x, y, this.direction);
      console.log("All user ships have been placed. ");
      // activate next phase playGame
      //   console.log("User board");
      //   console.log(this.user.gameboard.toString());
      //   console.log("Computer Board");
      //   console.log(this.setupComputer.gameboard.toString());

      const startGame = new _PlayGame_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](this.user, this.setupComputer.computer);
    }
    this.gameboard.placeShip(this.currentShip, x, y, this.direction);
    // update board
    //console.log(this.user.gameboard.toString());
    this.updateBoard();
    // increase curent index and reassign current ship
    this.currentShipIndex++;
    this.currentShip = this.ships[this.currentShipIndex];
  }

  setupAllHandlers() {
    // select direction toggle button
    const button = document.querySelector("#direction");
    button.addEventListener("click", () => {
      this.direction =
        this.direction === "horizontal" ? "vertical" : "horizontal";
      button.innerHTML =
        this.direction.charAt(0).toUpperCase() + this.direction.slice(1);
    });

    // select all the cells
    let cells = document.querySelectorAll("#cell");
    // add the event handlers for each cell. Hover and click
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", this.handleMouseOver.bind(this));
      cell.addEventListener("mouseout", this.handleMouseOut.bind(this));
      cell.addEventListener("click", this.handleClick.bind(this));
    });
  }

  /**
   * Draws the board, a 10x10 grid.
   * @returns a DOM object to add to DOM
   */
  drawBoard() {
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    // first loop creates the rows.
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.classList.add("row");

      // columns
      for (let j = 0; j < 10; j++) {
        let column = document.createElement("div");
        column.classList.add("empty");
        column.setAttribute("data-x", i);
        column.setAttribute("data-y", j);
        column.setAttribute("id", `cell`);
        row.appendChild(column);
      }
      boardContainer.appendChild(row);
    }
    return boardContainer;
  }

  /**
   * Renders the page UI.
   */
  renderPage() {
    const main = document.querySelector("main");
    main.innerHTML = ``; //  clear it out.

    // direction toggle button
    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "direction");
    toggleButton.innerHTML = "Horizontal";

    // gameboard
    const gameboard = this.drawBoard();

    //message
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = "PLACE YOUR SHIPS";

    main.appendChild(toggleButton);
    main.appendChild(gameboard);
    main.appendChild(message);
  }

  /**
   * Highlights the cells when you hover over the square according to the ship being placed. Will highlight red if it's an invalid spot.
   * @param {number} x
   * @param {number} y
   * @param {String} direction
   * @param {Object} ship
   */
  handleMouseOver(event) {
    //check to make sure there is a ship
    if (this.currentShipIndex >= this.ships.length) {
      return;
    }

    let x = Number(event.target.dataset.x);
    let y = Number(event.target.dataset.y);
    for (let i = 0; i < this.currentShip.size; i++) {
      let cell;
      if (this.direction === "horizontal") {
        cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
      } else {
        cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
      }
      if (cell) {
        if (cell.className !== "ship") {
          if (
            !this.gameboard.isValidPosition(
              this.currentShip,
              x,
              y,
              this.direction
            )
          ) {
            cell.className = "empty"; //clears classlist
            cell.classList.add("invalid");
            ///cell.style.backgroundColor = "#f87171"; // red
          } else {
            cell.className = "empty"; //clears classlist
            cell.classList.add("valid");
            //cell.style.backgroundColor = "#0891b2"; //highlight
          }
        }
      }
    }
  }

  /**
   * unhighlights cells that are empty when the mouse event moves away from cell.
   */
  handleMouseOut(event) {
    let cells = document.querySelectorAll(".empty");
    cells.forEach((cell) => {
      cell.className = "empty";
    });
  }

  /**
   * Handles when a user clicks on a cell in the grid. Places a ship if it's a valid position.
   * @param {event} event
   * @returns
   */
  handleClick(event) {
    //check to make sure there is a ship
    if (this.currentShipIndex >= this.ships.length) {
      return;
    }
    let x = Number(event.target.dataset.x);
    let y = Number(event.target.dataset.y);

    if (
      this.gameboard.isValidPosition(this.currentShip, x, y, this.direction)
    ) {
      this.placeNextShip(x, y);
    }
  }

  /**
   * Syncs the backend board with the user's board.
   */
  updateBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== null) {
          let cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
          cell.className = "ship";
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/classes/Gameboard.mjs":
/*!***********************************!*\
  !*** ./src/classes/Gameboard.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.mjs */ "./src/classes/Ship.mjs");
/* harmony import */ var _DomManipulation_Log_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomManipulation/Log.mjs */ "./src/DomManipulation/Log.mjs");


class Gameboard {
  constructor(name) {
    this.name = name;
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [];
    this.gameOver = false;
    this.log = new _DomManipulation_Log_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  /**
   * Method to place ships on the board.
   * @param {Ship} ship - The ship to place.
   * @param {number} x - The starting x-coordinate.
   * @param {number} y - The starting y-coordinate.
   * @param {string} direction - The direction ('horizontal' or 'vertical').
   * @returns {boolean} - Returns true if the ship was placed successfully, false otherwise.
   */
  placeShip(ship, x, y, direction) {
    if (!this.isValidPosition(ship, x, y, direction)) {
      return false; // Invalid position, return false
    }

    const size = ship.size;
    if (direction === "horizontal") {
      for (let i = 0; i < size; i++) {
        this.board[x][y + i] = ship; // Place the ship reference
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < size; i++) {
        this.board[x + i][y] = ship; // Place the ship reference
      }
    }
    this.ships.push(ship); // Add ship to ships array
    return true; // Ship placed successfully
  }

  /**
   * Checks if the coordinates for placing a ship are valid.
   * @param {Ship} ship - The ship to place.
   * @param {number} x - The starting x-coordinate.
   * @param {number} y - The starting y-coordinate.
   * @param {string} direction - The direction ('horizontal' or 'vertical').
   * @returns {boolean} - Returns true if the position is valid, false otherwise.
   */
  isValidPosition(ship, x, y, direction) {
    const length = ship.size;
    if (direction === "horizontal") {
      if (y + length > 10) return false; // Ship goes out of bounds
      for (let i = 0; i < length; i++) {
        if (this.board[x][y + i] !== null) return false; // Overlaps another ship
      }
    } else if (direction === "vertical") {
      if (x + length > 10) return false; // Ship goes out of bounds
      for (let i = 0; i < length; i++) {
        if (this.board[x + i][y] !== null) return false; // Overlaps another ship
      }
    }
    return true; // Position is valid
  }

  /**
   * Takes a pair of coordinates, determines whether or not the attack hit a ship and sends their 'hit' function to the correct ship, or records the coordinates of the miss shot. If an attack is a hit on a ship then true is returned. Otherwise false.
   * @param {*} x - coordinate
   * @param {*} y - coordinate
   * @returns {boolean} true or false
   */
  receiveAttack(x, y) {
    if (this.find(x, y) !== null) {
      //check gameboard. If null then no ship exists.
      // Check if it's a hit or miss.
      let hitShip = this.find(x, y); // get's ship hit.
      //update the log
      this.log.addMessage(`${this.name}'s ${hitShip.name} was hit!`);

      hitShip.hit();
      this.board[x][y] = "H"; // Add H for hit to board.

      // check if all the enemy ships were sunk.
      if (this.allShipsSunk()) {
        this.log.addMessage(`${this.name}'s ships have been sunk. Game Over.`);
        console.log(`All of ${this.name}'s ships have been sunk. Game Over.`);

        return true;
      }

      if (hitShip.isSunk()) {
        // Check if ship is sunk.
        //console.log(`${this.name}'s ${hitShip.name} has sunk`);
        this.log.addMessage(`${this.name}'s ${hitShip.name} has sunk!`);
      }
      return true;
    } else {
      //console.log(`${this.name} didn't get hit`);
      this.log.addMessage(`${this.name}'s attack missed.`);

      this.board[x][y] = "M"; // fills the board with M for miss.
      return false;
    }
  }

  /**
   * Accepts coordinates and returns what is at that space in the board.
   * @param {number} x
   * @param {number} y
   * @returns {Ship || null} - Returns ship object or null
   */
  find(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
      return this.board[x][y];
    } else {
      throw Error("The coordinates were out of bounds of the board.");
    }
  }

  /**
   * Returns true or false based off if all ships have been sunk or not.
   * @returns {boolean} - True or False
   */
  allShipsSunk() {
    let count = 0;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].isSunk()) {
        count++;
      }
    }
    if (count === this.ships.length) {
      return true;
    }
  }

  /**
   * Returns a printable string that represents the gameboard.
   * @returns {String}
   */
  toString() {
    let string = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== null && typeof this.board[i][j] === "object") {
          string += `[${this.board[i][j].size}]`;
        } else if (this.board[i][j] === "H" || this.board[i][j] === "M") {
          string += `[${this.board[i][j]}]`;
        } else {
          string += "[ ]";
        }
      }
      string += "\n";
    }
    return string;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/classes/Player.mjs":
/*!********************************!*\
  !*** ./src/classes/Player.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.mjs */ "./src/classes/Gameboard.mjs");
/* harmony import */ var _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.mjs */ "./src/classes/Ship.mjs");



class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new _Gameboard_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](this.name);
    this.ships = [
      new _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]("Carrier", 5),
      new _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]("Battleship", 4),
      new _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]("Cruiser", 3),
      new _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]("Submarine", 3),
      new _Ship_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]("Destroyer", 2),
    ];
  }
}


/***/ }),

/***/ "./src/classes/Ship.mjs":
/*!******************************!*\
  !*** ./src/classes/Ship.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Ship object
 */

class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.hitCount = 0;
    this.sunk = false;
  }

  getHitCount() {
    return this.hitCount;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount >= this.size;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _DomManipulation_SetupUser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomManipulation/SetupUser.mjs */ "./src/DomManipulation/SetupUser.mjs");



/**
 * The game will start with the initialization of User setup. The page will render and the user will be able to place ships. After the user has placed all of the ships a new overlay will appear asking the use
 *
 */

const initialize = new _DomManipulation_SetupUser_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map