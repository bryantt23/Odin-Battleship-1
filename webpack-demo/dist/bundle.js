/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   check: () => (/* binding */ check)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction check(grid) {\n  console.log(grid, _typeof(grid));\n  var userGrid = document.querySelector(\".battleship-grid-user\");\n  userGrid.textContent = JSON.stringify(grid, null, 4);\n  grid.receiveAttack(0, 0);\n  var computerGrid = document.querySelector(\".battleship-grid-computer\");\n  computerGrid.textContent = JSON.stringify(grid, null, 4);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/DOM.js?");

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar ComputerPlayer = /*#__PURE__*/function (_Player) {\n  _inherits(ComputerPlayer, _Player);\n  function ComputerPlayer(gameboard) {\n    var _this;\n    _classCallCheck(this, ComputerPlayer);\n    _this = _callSuper(this, ComputerPlayer, ['Computer']);\n    _this.gameboard = gameboard;\n    _this.usedCoordinates = new Set();\n    return _this;\n  }\n  _createClass(ComputerPlayer, [{\n    key: \"getRandomCoordinates\",\n    value: function getRandomCoordinates() {\n      var availableCoordinates = [];\n      for (var row = 0; row < this.gameboard.gridSize; row++) {\n        for (var column = 0; column < this.gameboard.gridSize; column++) {\n          var coordinate = \"\".concat(row, \",\").concat(column);\n          if (!this.usedCoordinates.has(coordinate)) {\n            availableCoordinates.push({\n              row: row,\n              column: column\n            });\n          }\n        }\n      }\n      if (availableCoordinates.length === 0) {\n        return null; //All coordinates have been used\n      }\n      var randomIndex = Math.floor(Math.random() * availableCoordinates.length);\n      return availableCoordinates[randomIndex];\n    }\n  }, {\n    key: \"computerAttack\",\n    value: function computerAttack() {\n      var coordinates = this.getRandomCoordinates();\n      if (coordinates) {\n        var row = coordinates.row,\n          column = coordinates.column;\n        if (this.gameboard.receiveAttack(row, column)) {\n          console.log(\"Computer attacks (\".concat(row, \", \").concat(column, \")\"));\n          this.usedCoordinates.add(\"\".concat(row, \",\").concat(column));\n        }\n      } else {\n        console.log(\"Computer has no valid moves.\");\n      }\n    }\n  }]);\n  return ComputerPlayer;\n}(_player__WEBPACK_IMPORTED_MODULE_0__.Player);\n\n//# sourceURL=webpack://webpack-demo/./src/computer.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ \"./src/computer.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.player1Gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.player2Gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"Player 1\", this.player2Gameboard);\n    this.player2 = new _computer__WEBPACK_IMPORTED_MODULE_2__.ComputerPlayer(this.player1Gameboard);\n    this.currentPlayer = this.player1;\n    this.gameOver = false;\n    this.winner = null;\n    this.initializeGame();\n  }\n  _createClass(Game, [{\n    key: \"initializeGame\",\n    value: function initializeGame() {\n      var ship1 = new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(1);\n      var ship2 = new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(2);\n      var ship3 = new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(3);\n      var ship4 = new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(4);\n      this.player1Gameboard.placeShip(ship1, 0, 0, true);\n      this.player1Gameboard.placeShip(ship3, 5, 0, false);\n      this.player2Gameboard.placeShip(ship2, 6, 6, true);\n      this.player2Gameboard.placeShip(ship4, 2, 0, false);\n    }\n  }, {\n    key: \"checkGameOver\",\n    value: function checkGameOver() {\n      // Check for game over condition\n      if (this.player1Gameboard.areAllShipsSunk() || this.player2Gameboard.areAllShipsSunk()) {\n        this.gameOver = true;\n        this.winner = this.currentPlayer;\n        console.log(\"Game over!\");\n        console.log(this.winner.name + \" is the winner!\");\n        return true;\n      }\n      return false;\n    }\n  }, {\n    key: \"handleAttack\",\n    value: function handleAttack(row, column) {\n      if (!this.gameOver) {\n        if (this.currentPlayer === this.player1) {\n          var isValidAttack = this.player1.attack(row, column);\n          if (isValidAttack) {\n            if (this.checkGameOver()) {\n              return;\n            }\n            // Switch to the other player\n            this.switchPlayer();\n          }\n        } else if (this.currentPlayer === this.player2) {\n          this.player2.computerAttack();\n          if (this.checkGameOver()) {\n            return;\n          }\n          // Switch to the other player\n          this.switchPlayer();\n        }\n        // Check for game over condition\n      }\n    }\n  }, {\n    key: \"switchPlayer\",\n    value: function switchPlayer() {\n      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;\n    }\n  }, {\n    key: \"playRound\",\n    value: function playRound(row, column) {\n      // Check if it's the computer player's turn\n      if (this.currentPlayer === this.player2) {\n        this.handleAttack(); // Computer player makes a random attack\n      } else {\n        this.handleAttack(row, column); // Directly call the player's attack\n      }\n    }\n  }]);\n  return Game;\n}();\n\n//# sourceURL=webpack://webpack-demo/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Gameboard = /*#__PURE__*/_createClass(function Gameboard() {\n  var _this = this;\n  _classCallCheck(this, Gameboard);\n  _defineProperty(this, \"placeShip\", function (ship, row, column, isVertical) {\n    // Check for valid coordinates and bounds\n    if (row < 0 || row >= _this.gridSize || column < 0 || column >= _this.gridSize) {\n      return false; // Invalid ship coordinates for placement\n    }\n    if (isVertical) {\n      if (row + ship.length > _this.gridSize) {\n        return false; // Invalid ship placement out of bounds\n      }\n      for (var i = row; i < row + ship.length; i++) {\n        if (_this.grid[i][column] !== null) {\n          return false; // Ship overlap\n        }\n      }\n      for (var _i = row; _i < row + ship.length; _i++) {\n        _this.grid[_i][column] = ship;\n      }\n    } else {\n      if (column + ship.length > _this.gridSize) {\n        return false; // Invalid ship placement out of bounds\n      }\n      for (var _i2 = column; _i2 < column + ship.length; _i2++) {\n        if (_this.grid[row][_i2] !== null) {\n          return false; // Ship overlap\n        }\n      }\n      for (var _i3 = column; _i3 < column + ship.length; _i3++) {\n        _this.grid[row][_i3] = ship;\n      }\n    }\n    return true; // Ship placed successfully\n  });\n  _defineProperty(this, \"rotateShip\", function (ship) {\n    // Check if the ship can be rotated without going out of bounds\n    var canRotate = ship.orientation === \"horizontal\" ? ship.length + ship.row <= _this.gridSize : ship.length + ship.column <= _this.gridSize;\n    if (canRotate) {\n      // Remove the ship from its current position\n      for (var i = 0; i < ship.length; i++) {\n        if (ship.orientation === \"horizontal\") {\n          _this.grid[ship.row][ship.column + i] = null;\n        } else {\n          _this.grid[ship.row + i][ship.column] = null;\n        }\n      } // Toggle the ship's orientation and re-place it\n\n      ship.toggleOrientation();\n      return _this.placeShip(ship, ship.row, ship.column, ship.orientation === \"vertical\");\n    }\n    return false; // Ship cannot be rotated\n  });\n  _defineProperty(this, \"receiveAttack\", function (row, column) {\n    var hit = 'X',\n      miss = 'O';\n    // Check for valid coordinates\n    if (row < 0 || row >= _this.gridSize || column < 0 || column >= _this.gridSize) {\n      return false; // Invalid attack coordinates\n    }\n    var target = _this.grid[row][column];\n\n    // Check if the target has already been attacked\n    if (target === \"X\" || target === \"O\") {\n      return false; // Already attacked this spot, prevent further actions\n    }\n\n    // Mark the target as attacked\n    if (target === null) {\n      _this.grid[row][column] = miss; //'O'\n    } else {\n      _this.grid[row][column] = hit; //'X'\n      // Check if the ship is sunk\n      if (_this.isShipSunk(row, column)) {\n        // Handle the case when a ship is sunk (e.g., update some state or message)\n        console.log(\"The ship at (\".concat(row, \", \").concat(column, \") has been sunk!\"));\n      }\n    }\n\n    // Check if all ships are sunk\n    if (_this.areAllShipsSunk()) {\n      // Handle the end of the game (e.g., display a message or trigger game over)\n      console.log(\"All ships have been sunk! Game over.\");\n    }\n    return true; // Valid attack\n  });\n  _defineProperty(this, \"isShipSunk\", function (row, column) {\n    var target = _this.grid[row][column];\n\n    //Check if the target is a ship and if it's already sunk\n    if (target !== null && target !== \"X\") {\n      // Check if all cells occupied by the ship have been hit\n      for (var r = 0; r < _this.gridSize; r++) {\n        for (var c = 0; c < _this.gridSize; c++) {\n          if (_this.grid[r][c] === target) {\n            return false; // Ship is not sunk yet\n          }\n        }\n      }\n      return true; // Ship is sunk\n    }\n    return false; // Not a ship or already sunk\n  });\n  _defineProperty(this, \"areAllShipsSunk\", function () {\n    // Check if all ships on the gameboard are sunk\n    for (var r = 0; r < _this.gridSize; r++) {\n      for (var c = 0; c < _this.gridSize; c++) {\n        var cur = _this.grid[r][c];\n        if (cur !== null && cur !== \"X\" && cur !== \"O\") {\n          return false; // At least one ship is not sunk yet\n        }\n      }\n    }\n    return true; // All ships are sunk\n  });\n  this.gridSize = 10;\n  this.grid = Array(this.gridSize).fill(null).map(function () {\n    return Array(_this.gridSize).fill(null);\n  });\n});\n\n//# sourceURL=webpack://webpack-demo/./src/gameboard.js?");

/***/ }),

/***/ "./src/helloWorld.js":
/*!***************************!*\
  !*** ./src/helloWorld.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HelloWorld: () => (/* binding */ HelloWorld)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar HelloWorld = /*#__PURE__*/function () {\n  function HelloWorld() {\n    _classCallCheck(this, HelloWorld);\n  }\n  _createClass(HelloWorld, [{\n    key: \"hi\",\n    value: function hi() {\n      console.log(\"hello world\");\n    }\n  }]);\n  return HelloWorld;\n}();\n;\n\n//# sourceURL=webpack://webpack-demo/./src/helloWorld.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helloWorld */ \"./src/helloWorld.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nstart();\nfunction start() {\n  var object = new _helloWorld__WEBPACK_IMPORTED_MODULE_0__.HelloWorld();\n  object.hi();\n  var game = new _game__WEBPACK_IMPORTED_MODULE_1__.Game();\n  game.initializeGame();\n  console.log(game);\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.check)(game.player1Gameboard);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Player = /*#__PURE__*/function () {\n  function Player(name, gameboard) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.gameboard = gameboard;\n  }\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(row, column) {\n      // Check if the move is legal (not already attacked)\n      if (this.gameboard.receiveAttack(row, column)) {\n        console.log(\"\".concat(this.name, \" attacks (\").concat(row, \", \").concat(column, \")\"));\n        return true; // Valid attack\n      } else {\n        console.log(\"\".concat(this.name, \" already attacked (\").concat(row, \", \").concat(column, \")\"));\n        return false; // Invalid attack\n      }\n    }\n  }]);\n  return Player;\n}();\n\n//# sourceURL=webpack://webpack-demo/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n//Create Ship class\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hits = 0;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits >= this.length;\n    }\n  }]);\n  return Ship;\n}();\n\n//# sourceURL=webpack://webpack-demo/./src/ship.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;