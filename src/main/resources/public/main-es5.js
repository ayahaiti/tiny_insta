(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\">\r\n  <div class=\"item1\">\r\n    <span>New Post</span>\r\n  </div>\r\n  <div class=\"item2\">\r\n    <div class=\"quote\">\r\n    <label>Quote: </label>\r\n    <input [(ngModel)]=\"quote\"/>\r\n    </div>\r\n    <div class=\"image\">\r\n    <!--<label>Image: </label>-->\r\n      <div class=\"file-upload\" style=\"margin-top: 5px;\">\r\n        <div class=\"file-select\">\r\n          <div class=\"file-select-button\" id=\"fileName\">Choose File</div>\r\n          <div class=\"file-select-name\" id=\"noFile\">{{fileName}}</div>\r\n          <input type=\"file\" name=\"chooseFile\" id=\"chooseFile\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"item3\">\r\n    <button (click)=\"addpost()\"> <span>+</span> </button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-search></app-search>\r\n<app-add-post></app-add-post>\r\n<app-feed></app-feed>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disconnect/disconnect.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disconnect/disconnect.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button class=\"disconnect\" (click)=\"disconnectUser()\">Log out</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"feed\" *ngFor=\"let post of postList\">\r\n  <app-onepost [input]=\"post\" class=\"onepost\"></app-onepost>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/follow/follow.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow/follow.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"follow_unfollow\">\r\n  <div class=\"follow_div\">\r\n    <p class=\"username\">Username</p>\r\n    <p class=\"nb_followers\">0</p>\r\n    <button class=\"follow_button\" [ngStyle]=\"{display: 'block'}\">FOLLOW</button>\r\n    <button class=\"unfollow_button\" [ngStyle]=\"{display: 'block'}\">UNFOLLOW</button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<h2>Login</h2>\r\n<form action=\"action_page.php\" method=\"post\">\r\n  <div class=\"container\">\r\n    <label><b>Username</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"uname\" required>\r\n\r\n    <label><b>Password</b></label>\r\n    <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n    <button (click)=\"connectUser()\" type=\"submit\">Login</button>\r\n  </div>\r\n\r\n  <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n\r\n    <span class=\"register\">You don't have an account? <a href=\"/#/register\">Register</a></span>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onepost/onepost.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onepost/onepost.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post\" id=\"{{input.id}}\">\r\n  <p class=\"username\">{{input.username}}</p>\r\n  <div class=\"image\">{{input.image}}</div>\r\n  <p>{{input.quote}}</p>\r\n  <input id=\"toggle-heart\" type=\"checkbox\" />\r\n  <p class=\"nb_likes\">{{nbrOfLikes}}</p>\r\n  <label for=\"toggle-heart\" (click)=\"likePost()\" [ngStyle]=\"{color: (liked)}\">❤</label>\r\n  <hr>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<h2>Register</h2>\r\n<form>\r\n  <div class=\"container\">\r\n    <label> <b>Email</b></label>\r\n    <input type=\"text\" placeholder=\"Enter email\" (ngModelChange)=\"onEmailChanged($event)\" [(ngModel)]=\"email\" name=\"email\" required>\r\n\r\n    <label><b>Username</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Username\" (ngModelChange)=\"onUsernameChanged($event)\" [(ngModel)]=\"username\" name=\"uname\" required>\r\n\r\n    <label ><b>Password</b></label>\r\n    <input type=\"password\" placeholder=\"Enter Password\" (ngModelChange)=\"onPasswordChanged($event)\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n    <button type=\"button\" [disabled]=\"!buttonActif\" (click)=\"onUserRegisterButtonClicked()\">Register</button>\r\n  </div>\r\n\r\n  <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n\r\n    <span class=\"login\">You already have an account? <a href=\"\" (click)=\"goToLogin()\">Login</a></span>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n  <div class=\"example\" style=\"margin:auto;max-width:300px\">\r\n    <input type=\"text\" placeholder=\"Search username..\" name=\"search2\" [(ngModel)]=\"username\" >\r\n    <button type=\"submit\" [disabled]=\"!searchButtonEnabled\" (click)=\"findUserAndNbOfFollowers()\"><i class=\"fa fa-search\"></i></button>\r\n  </div>\r\n  <app-disconnect></app-disconnect>\r\n  <p *ngIf=\"!userExists && output.errorMessage!=null\"  class=\"usernotfound\">{{output.errorMessage}}</p>\r\n  <div class=\"follow_unfollow\" *ngIf=\"userExists\">\r\n    <div class=\"follow_div\">\r\n      <p class=\"username\">{{output.username}}</p>\r\n      <p class=\"nb_followers\">{{output.countOfFollowers}}</p>\r\n      <button class=\"follow_button\" [disabled]=\"!followButtonEnabled\" (click)=\"follow()\" *ngIf=\"!iFollowHim\">FOLLOW</button>\r\n      <button class=\"unfollow_button\" [disabled]=\"!unfollowButtonEnabled\" (click)=\"unfollow()\" *ngIf=\"iFollowHim\">UNFOLLOW</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br><br><br>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/add-post/AddPostInput.ts": 
        /*!******************************************!*\
          !*** ./src/app/add-post/AddPostInput.ts ***!
          \******************************************/
        /*! exports provided: AddPostInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostInput", function () { return AddPostInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AddPostInput = /** @class */ (function () {
                function AddPostInput(image, username, token, quote) {
                    this.image = image;
                    this.username = username;
                    this.token = token;
                    this.quote = quote;
                }
                return AddPostInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/add-post/add-post.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/add-post/add-post.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".grid-container {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  grid-gap: 2px;\r\n  background-color: black;\r\n  padding: 2px;\r\n}\r\n\r\n.grid-container > div {\r\n  background-color: white;\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.item1 {\r\n  width: 150px;\r\n}\r\n\r\n.item1 span {\r\n  font-size: 23px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.item2 {\r\n  width: 1000px;\r\n}\r\n\r\n.item2 label{\r\n  font-size: 19px;\r\n}\r\n\r\n.item3 {\r\n  width: 168px;\r\n}\r\n\r\n.quote {\r\n  margin-left: -300px;\r\n  display: inline-block;\r\n}\r\n\r\n.image {\r\n  margin-left: 340px;\r\n  display: inline-block;\r\n}\r\n\r\n.image label {\r\n  font-size: 19px;\r\n}\r\n\r\n.item3 button {\r\n  border-radius: 20px;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: black;\r\n  color: #bf00ff;\r\n  cursor: pointer;\r\n}\r\n\r\n.item3 button span {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgZ3JpZC1nYXA6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uaXRlbTEgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5pdGVtMiB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLml0ZW0yIGxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLml0ZW0zIHtcclxuICB3aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5xdW90ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmltYWdlIGxhYmVsIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5pdGVtMyBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiAjYmYwMGZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW0zIGJ1dHRvbiBzcGFuIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/add-post/add-post.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/add-post/add-post.component.ts ***!
          \************************************************/
        /*! exports provided: AddPostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function () { return AddPostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            /* harmony import */ var _AddPostInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPostInput */ "./src/app/add-post/AddPostInput.ts");
            var AddPostComponent = /** @class */ (function () {
                function AddPostComponent(userService) {
                    this.userService = userService;
                    this.uploadedImage = null;
                    this.quote = null;
                }
                AddPostComponent.prototype.ngOnInit = function () {
                };
                AddPostComponent.prototype.addpost = function () {
                    var _this = this;
                    this.userService.addPost(new _AddPostInput__WEBPACK_IMPORTED_MODULE_3__["AddPostInput"](this.uploadedImage, localStorage.getItem('username'), localStorage.getItem('token'), this.quote)).subscribe(function (response) { return _this.doAddPostSuccessful(); }, function (error) { return _this.doAddPostUnsuccessful(); });
                };
                AddPostComponent.prototype.doAddPostSuccessful = function () {
                };
                AddPostComponent.prototype.doAddPostUnsuccessful = function () {
                };
                return AddPostComponent;
            }());
            AddPostComponent.ctorParameters = function () { return [
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            AddPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-post',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-post.component.css */ "./src/app/add-post/add-post.component.css")).default]
                })
            ], AddPostComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
            var routes = [
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
                { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
                { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'tiny-insta-angular-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./follow/follow.component */ "./src/app/follow/follow.component.ts");
            /* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
            /* harmony import */ var _onepost_onepost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onepost/onepost.component */ "./src/app/onepost/onepost.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _disconnect_disconnect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./disconnect/disconnect.component */ "./src/app/disconnect/disconnect.component.ts");
            /* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                        _follow_follow_component__WEBPACK_IMPORTED_MODULE_8__["FollowComponent"],
                        _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"],
                        _onepost_onepost_component__WEBPACK_IMPORTED_MODULE_10__["OnepostComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                        _disconnect_disconnect_component__WEBPACK_IMPORTED_MODULE_14__["DisconnectComponent"],
                        _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_15__["AddPostComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                    ],
                    providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".appfeed {\r\n  margin-left: 5px;\r\n  margin-top: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBmZWVkIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(router) {
                    this.router = router;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var username = localStorage.getItem('username');
                    var token = localStorage.getItem('token');
                    if (token == null && username == null) {
                        this.router.navigateByUrl('/login');
                    }
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/disconnect/DisconnectInput.ts": 
        /*!***********************************************!*\
          !*** ./src/app/disconnect/DisconnectInput.ts ***!
          \***********************************************/
        /*! exports provided: DisconnectInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectInput", function () { return DisconnectInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DisconnectInput = /** @class */ (function () {
                function DisconnectInput(username, token) {
                    this.username = username;
                    this.token = token;
                }
                return DisconnectInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/disconnect/disconnect.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/disconnect/disconnect.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".disconnect {\r\n  background-color: #bf00ff;\r\n  color: white;\r\n  float: right;\r\n  margin-top: 0;\r\n  width: 75px;\r\n  height: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY29ubmVjdC9kaXNjb25uZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kaXNjb25uZWN0L2Rpc2Nvbm5lY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjb25uZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMGZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/disconnect/disconnect.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/disconnect/disconnect.component.ts ***!
          \****************************************************/
        /*! exports provided: DisconnectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectComponent", function () { return DisconnectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DisconnectComponent = /** @class */ (function () {
                function DisconnectComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                }
                DisconnectComponent.prototype.ngOnInit = function () {
                };
                DisconnectComponent.prototype.disconnectUser = function () {
                    var _this = this;
                    this.userService.disconnect().subscribe(function (response) { return _this.disconnectSuccessful(response); }, function (error) { return _this.disconnectUnsuccessful(error); });
                };
                DisconnectComponent.prototype.disconnectUnsuccessful = function (response) {
                    // TODO
                };
                DisconnectComponent.prototype.disconnectSuccessful = function (error) {
                    localStorage.removeItem('username');
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('/login');
                };
                return DisconnectComponent;
            }());
            DisconnectComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            DisconnectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-disconnect',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./disconnect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disconnect/disconnect.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./disconnect.component.css */ "./src/app/disconnect/disconnect.component.css")).default]
                })
            ], DisconnectComponent);
            /***/ 
        }),
        /***/ "./src/app/feed/GetLastPostsInput.ts": 
        /*!*******************************************!*\
          !*** ./src/app/feed/GetLastPostsInput.ts ***!
          \*******************************************/
        /*! exports provided: GetLastPostsInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLastPostsInput", function () { return GetLastPostsInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetLastPostsInput = /** @class */ (function () {
                function GetLastPostsInput(username, token) {
                    this.page = 0;
                    this.username = username;
                    this.token = token;
                }
                return GetLastPostsInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/feed/feed.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/feed/feed.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/feed/feed.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/feed/feed.component.ts ***!
          \****************************************/
        /*! exports provided: FeedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function () { return FeedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            var FeedComponent = /** @class */ (function () {
                function FeedComponent(userService) {
                    this.userService = userService;
                }
                FeedComponent.prototype.ngOnInit = function () {
                    this.retrieveLastPosts();
                };
                FeedComponent.prototype.retrieveLastPosts = function () {
                    var _this = this;
                    this.userService.getLastPosts().subscribe(function (response) { return _this.doOnPostsRetrievedOk(response); }, function (error) { return _this.doOnPostsRetrievedKo(error); });
                };
                FeedComponent.prototype.doOnPostsRetrievedOk = function (response) {
                    this.postList = response.tempPostPojoList;
                };
                FeedComponent.prototype.doOnPostsRetrievedKo = function (error) {
                };
                return FeedComponent;
            }());
            FeedComponent.ctorParameters = function () { return [
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")).default]
                })
            ], FeedComponent);
            /***/ 
        }),
        /***/ "./src/app/follow/follow.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/follow/follow.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".like {\r\n  width: 20px;\r\n  height: 20px;\r\n  top:50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  margin-top: -45px;\r\n  margin-left: -50px;\r\n  border-radius: 5px;\r\n  background: none;\r\n  cursor: pointer;\r\n  transition: background 0.5s ease;\r\n}\r\n.follow_unfollow {\r\n  z-index: 9;\r\n  margin-top: 120px;\r\n  margin-left: 100px;\r\n}\r\n.follow_div {\r\n  width: 600px;\r\n  height: 70px;\r\n  background: lightgray;\r\n  top: 1px;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  font-family: 'Alfa Slab One', sans-serif;\r\n  font-size: 1em;\r\n  z-index: 6;\r\n  border: 4px solid black;\r\n  border-radius: 5px;\r\n  color: black;\r\n  text-shadow: none;\r\n  text-align: center;\r\n}\r\n.username {\r\n  display: inline-block;\r\n  font-size: 1.1em;\r\n  color: black;\r\n  font-weight: bold;\r\n  text-shadow: 0px 0px white;\r\n  margin-left: 2px ;\r\n  float: left;\r\n}\r\n.follow_button {\r\n  display: inline-block;\r\n  background-color: royalblue;\r\n  color: white;\r\n  border-radius: 6px;\r\n  width: 130px;\r\n  height: 30px;\r\n  float: right;\r\n  margin-top: 14px;\r\n}\r\n.unfollow_button {\r\n  display: inline-block;\r\n  background-color: royalblue;\r\n  color: white;\r\n  border-radius: 6px;\r\n  width: 130px;\r\n  height: 30px;\r\n  float: right;\r\n  margin-top: 14px;\r\n}\r\n.nb_followers {\r\n  display: inline-block;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sbG93L2ZvbGxvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdG9wOjUwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XHJcbn1cclxuLmZvbGxvd191bmZvbGxvdyB7XHJcbiAgei1pbmRleDogOTtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuLmZvbGxvd19kaXYge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gIHRvcDogMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnVzZXJuYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweCA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mb2xsb3dfYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnVuZm9sbG93X2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5uYl9mb2xsb3dlcnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/follow/follow.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/follow/follow.component.ts ***!
          \********************************************/
        /*! exports provided: FollowComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function () { return FollowComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FollowComponent = /** @class */ (function () {
                function FollowComponent() {
                }
                FollowComponent.prototype.ngOnInit = function () {
                };
                return FollowComponent;
            }());
            FollowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-follow',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./follow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/follow/follow.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./follow.component.css */ "./src/app/follow/follow.component.css")).default]
                })
            ], FollowComponent);
            /***/ 
        }),
        /***/ "./src/app/login/LoginFormInput.ts": 
        /*!*****************************************!*\
          !*** ./src/app/login/LoginFormInput.ts ***!
          \*****************************************/
        /*! exports provided: LoginFormInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormInput", function () { return LoginFormInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoginFormInput = /** @class */ (function () {
                function LoginFormInput() {
                }
                LoginFormInput.prototype.isValid = function () {
                    if (this.username != null && this.username.length > 0
                        && this.password != null && this.password.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return LoginFormInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form {\r\n  border: 3px solid #f1f1f1;\r\n  max-width: 500px;\r\n  margin: auto;\r\n}\r\n\r\nh2{\r\n  text-align:center;\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #bf00ff;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBLHNCQUFzQjs7QUFDdEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZjAwZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cclxuc3Bhbi5wc3cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgc3Bhbi5wc3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _LoginFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginFormInput */ "./src/app/login/LoginFormInput.ts");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.loginFormInput = new _LoginFormInput__WEBPACK_IMPORTED_MODULE_3__["LoginFormInput"]();
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var username = localStorage.getItem('username');
                    var token = localStorage.getItem('token');
                    if (token != null && username != null) {
                        this.router.navigateByUrl('/dashboard');
                    }
                };
                LoginComponent.prototype.connectUser = function () {
                    var _this = this;
                    this.loginFormInput.password = this.password;
                    this.loginFormInput.username = this.username;
                    this.userService.connectUser(this.loginFormInput).subscribe(function (response) { return _this.onUserLoginSucceded(response); }, function (error) { return _this.onUserLoginFailed(error); });
                };
                LoginComponent.prototype.onUserLoginSucceded = function (response) {
                    localStorage.setItem('username', response.username);
                    localStorage.setItem('token', response.token);
                    this.router.navigateByUrl('/dashboard');
                };
                LoginComponent.prototype.onUserLoginFailed = function (error) {
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/onepost/CheckLikePostInput.ts": 
        /*!***********************************************!*\
          !*** ./src/app/onepost/CheckLikePostInput.ts ***!
          \***********************************************/
        /*! exports provided: CheckLikePostInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLikePostInput", function () { return CheckLikePostInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CheckLikePostInput = /** @class */ (function () {
                function CheckLikePostInput(username, token, uniqueIdentifier) {
                    this.username = username;
                    this.token = token;
                    this.uniqueIdentifier = uniqueIdentifier;
                }
                return CheckLikePostInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/onepost/CountLikePostInput.ts": 
        /*!***********************************************!*\
          !*** ./src/app/onepost/CountLikePostInput.ts ***!
          \***********************************************/
        /*! exports provided: CountLikePostInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountLikePostInput", function () { return CountLikePostInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CountLikePostInput = /** @class */ (function () {
                function CountLikePostInput(uniqueIdentifier) {
                    this.uniqueIdentifier = uniqueIdentifier;
                }
                return CountLikePostInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/onepost/DislikePostInput.ts": 
        /*!*********************************************!*\
          !*** ./src/app/onepost/DislikePostInput.ts ***!
          \*********************************************/
        /*! exports provided: DislikePostInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DislikePostInput", function () { return DislikePostInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DislikePostInput = /** @class */ (function () {
                function DislikePostInput(username, token, uniqueIdentifier) {
                    this.username = username;
                    this.token = token;
                    this.uniqueIdentifier = uniqueIdentifier;
                }
                return DislikePostInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/onepost/LikePostInput.ts": 
        /*!******************************************!*\
          !*** ./src/app/onepost/LikePostInput.ts ***!
          \******************************************/
        /*! exports provided: LikePostInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikePostInput", function () { return LikePostInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LikePostInput = /** @class */ (function () {
                function LikePostInput(username, token, uniqueIdentifier) {
                    this.username = username;
                    this.token = token;
                    this.uniqueIdentifier = uniqueIdentifier;
                }
                return LikePostInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/onepost/onepost.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/onepost/onepost.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".username {\r\n  font-weight: bold;\r\n  font-size: 1.05em;\r\n}\r\n[id='toggle-heart'] {\r\n  position: absolute;\r\n  left: -100vw;\r\n}\r\n[for='toggle-heart'] {\r\n  color: #aab8c2;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n[id='toggle-heart']:checked + label {\r\n  color: #e2264d;\r\n}\r\n[for='toggle-heart'] {\r\n  align-self: center;\r\n}\r\n.post {\r\n  margin-left: 165px;\r\n  margin-right: 180px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25lcG9zdC9vbmVwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL29uZXBvc3Qvb25lcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJuYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuMDVlbTtcclxufVxyXG5baWQ9J3RvZ2dsZS1oZWFydCddIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMHZ3O1xyXG59XHJcbltmb3I9J3RvZ2dsZS1oZWFydCddIHtcclxuICBjb2xvcjogI2FhYjhjMjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbltpZD0ndG9nZ2xlLWhlYXJ0J106Y2hlY2tlZCArIGxhYmVsIHtcclxuICBjb2xvcjogI2UyMjY0ZDtcclxufVxyXG5bZm9yPSd0b2dnbGUtaGVhcnQnXSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTgwcHg7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/onepost/onepost.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/onepost/onepost.component.ts ***!
          \**********************************************/
        /*! exports provided: OnepostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnepostComponent", function () { return OnepostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            var OnepostComponent = /** @class */ (function () {
                function OnepostComponent(userService) {
                    this.userService = userService;
                    this.liked = 'grey';
                    this.nbrOfLikes = 0;
                }
                OnepostComponent.prototype.ngOnInit = function () {
                    this.checkIfLiked();
                    var thiObj = this;
                    setInterval(function () {
                        thiObj.getNbrOfLikes();
                    }, 2000);
                };
                OnepostComponent.prototype.likePost = function () {
                    var _this = this;
                    if (this.liked === 'grey') {
                        this.userService.likePost(this.input.id).subscribe(function (response) { return _this.doOnLikeOk(); }, function (error) { return _this.doOnLikeKo(error); });
                    }
                    else {
                        this.userService.dislikePost(this.input.id).subscribe(function (response) { return _this.doOnDislikeOk(); }, function (error) { return _this.doOnDislikeKo(error); });
                        this.liked = 'grey';
                    }
                };
                OnepostComponent.prototype.doOnLikeOk = function () {
                    this.scroll(document.getElementById(this.input.id));
                    this.liked = 'red';
                };
                OnepostComponent.prototype.doOnLikeKo = function (error) {
                    // TODO show error
                };
                OnepostComponent.prototype.doOnDislikeOk = function () {
                    this.scroll(document.getElementById(this.input.id));
                    this.liked = 'grey';
                };
                OnepostComponent.prototype.doOnDislikeKo = function (error) {
                    // TODO show error
                };
                OnepostComponent.prototype.checkIfLiked = function () {
                    var _this = this;
                    this.userService.checkLike(this.input.id).subscribe(function (response) { return _this.doOnCheckLikeOk(response); }, function (error) { return _this.doOnCheckLikeKo(error); });
                };
                OnepostComponent.prototype.doOnCheckLikeOk = function (response) {
                    if (response.liked) {
                        this.liked = 'red';
                    }
                    else {
                        this.liked = 'grey';
                    }
                };
                OnepostComponent.prototype.doOnCheckLikeKo = function (error) {
                    // TODO show error
                };
                OnepostComponent.prototype.getNbrOfLikes = function () {
                    var _this = this;
                    this.userService.countLikes(this.input.id).subscribe(function (response) { return _this.doOnGetNbrOfLikesOk(response); }, function (error) { return _this.doOnGetNbrOfLikesKo(error); });
                };
                OnepostComponent.prototype.doOnGetNbrOfLikesOk = function (response) {
                    this.nbrOfLikes = response.nbOfPostLikes;
                };
                OnepostComponent.prototype.doOnGetNbrOfLikesKo = function (error) {
                    // TODO show error
                };
                OnepostComponent.prototype.scroll = function (el) {
                    el.scrollIntoView();
                };
                return OnepostComponent;
            }());
            OnepostComponent.ctorParameters = function () { return [
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OnepostComponent.prototype, "input", void 0);
            OnepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-onepost',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onepost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onepost/onepost.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onepost.component.css */ "./src/app/onepost/onepost.component.css")).default]
                })
            ], OnepostComponent);
            /***/ 
        }),
        /***/ "./src/app/register/RegisterFormInput.ts": 
        /*!***********************************************!*\
          !*** ./src/app/register/RegisterFormInput.ts ***!
          \***********************************************/
        /*! exports provided: RegisterFormInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormInput", function () { return RegisterFormInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var RegisterFormInput = /** @class */ (function () {
                function RegisterFormInput() {
                }
                RegisterFormInput.prototype.isValid = function () {
                    if (this.username != null && this.username.length > 0
                        && this.email != null && this.email.length > 0
                        && this.password != null && this.password.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return RegisterFormInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form {\r\n  border: 3px solid #f1f1f1;\r\n  max-width: 500px;\r\n  margin: auto;\r\n}\r\n\r\nh2{\r\n  text-align:center;\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #bf00ff;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBLHNCQUFzQjs7QUFDdEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZjAwZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cclxuc3Bhbi5wc3cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgc3Bhbi5wc3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _RegisterFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterFormInput */ "./src/app/register/RegisterFormInput.ts");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.email = null;
                    this.username = null;
                    this.password = null;
                    this.buttonActif = true;
                    this.inputForm = new _RegisterFormInput__WEBPACK_IMPORTED_MODULE_2__["RegisterFormInput"]();
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    var username = localStorage.getItem('username');
                    var token = localStorage.getItem('token');
                };
                RegisterComponent.prototype.onEmailChanged = function (data) {
                    console.log(data);
                    this.email = data.trim();
                    this.inputForm.email = this.email;
                };
                RegisterComponent.prototype.onUsernameChanged = function (data) {
                    console.log(data);
                    this.username = data.trim();
                    this.inputForm.username = this.username;
                };
                RegisterComponent.prototype.onPasswordChanged = function (data) {
                    console.log(data);
                    this.password = data.trim();
                    this.inputForm.password = this.password;
                };
                RegisterComponent.prototype.onUserRegistrationSucceded = function () {
                    this.buttonActif = true;
                    this.router.navigateByUrl('/login');
                };
                RegisterComponent.prototype.onUserRegistrationFailed = function () {
                    this.buttonActif = true;
                    // TODO show error message
                };
                RegisterComponent.prototype.onUserRegisterButtonClicked = function () {
                    var _this = this;
                    this.buttonActif = false;
                    this.userService.registerUser(this.inputForm).subscribe(function (response) { return _this.onUserRegistrationSucceded(); }, function (error) { return _this.onUserRegistrationFailed(); });
                };
                RegisterComponent.prototype.goToLogin = function () {
                    this.router.navigateByUrl('/#/login');
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/search/CheckFollowedInut.ts": 
        /*!*********************************************!*\
          !*** ./src/app/search/CheckFollowedInut.ts ***!
          \*********************************************/
        /*! exports provided: CheckFollowedInut */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckFollowedInut", function () { return CheckFollowedInut; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CheckFollowedInut = /** @class */ (function () {
                function CheckFollowedInut(follower, followed, token) {
                    this.follower = follower;
                    this.followed = followed;
                    this.token = token;
                }
                return CheckFollowedInut;
            }());
            /***/ 
        }),
        /***/ "./src/app/search/FindUserInput.ts": 
        /*!*****************************************!*\
          !*** ./src/app/search/FindUserInput.ts ***!
          \*****************************************/
        /*! exports provided: FindUserInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindUserInput", function () { return FindUserInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FindUserInput = /** @class */ (function () {
                function FindUserInput(username, token, userToFind) {
                    this.username = username;
                    this.userToFind = userToFind;
                    this.token = token;
                }
                FindUserInput.prototype.isValid = function () {
                    if (this.username != null && this.username.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return FindUserInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/search/FollowInput.ts": 
        /*!***************************************!*\
          !*** ./src/app/search/FollowInput.ts ***!
          \***************************************/
        /*! exports provided: FollowInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowInput", function () { return FollowInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FollowInput = /** @class */ (function () {
                function FollowInput(username, token, usernameToFollow) {
                    this.username = null;
                    this.token = null;
                    this.usernameToFollow = null;
                    this.username = username;
                    this.token = token;
                    this.usernameToFollow = usernameToFollow;
                }
                return FollowInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/search/GetUserFollowersInput.ts": 
        /*!*************************************************!*\
          !*** ./src/app/search/GetUserFollowersInput.ts ***!
          \*************************************************/
        /*! exports provided: GetUserFollowersInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFollowersInput", function () { return GetUserFollowersInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GetUserFollowersInput = /** @class */ (function () {
                function GetUserFollowersInput(exists) {
                    this.username = null;
                    this.username = exists;
                }
                return GetUserFollowersInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/search/UnfollowInput.ts": 
        /*!*****************************************!*\
          !*** ./src/app/search/UnfollowInput.ts ***!
          \*****************************************/
        /*! exports provided: UnfollowInput */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnfollowInput", function () { return UnfollowInput; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UnfollowInput = /** @class */ (function () {
                function UnfollowInput(username, token, usernameToFollow) {
                    this.username = username;
                    this.token = token;
                    this.usernameToFollow = usernameToFollow;
                }
                return UnfollowInput;
            }());
            /***/ 
        }),
        /***/ "./src/app/search/search.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/search/search.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\r\n  font-family: Arial;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.example input[type=text] {\r\n  padding: 10px;\r\n  font-size: 17px;\r\n  border: 1px solid grey;\r\n  width: 80%;\r\n  background: white;\r\n}\r\n\r\n.example button {\r\n  width: 20%;\r\n  padding: 10px;\r\n  background: #bf00ff;\r\n  color: white;\r\n  font-size: 17px;\r\n  border: 1px solid grey;\r\n  border-left: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.example button:hover {\r\n  background: grey;\r\n}\r\n\r\n.follow_unfollow {\r\n  z-index: 9;\r\n  margin-top: 20px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.follow_div {\r\n  width: 900px;\r\n  height: 70px;\r\n  background: lightgray;\r\n  top: 1px;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  font-family: 'Alfa Slab One', sans-serif;\r\n  font-size: 1em;\r\n  z-index: 6;\r\n  border: 4px solid #bf00ff;\r\n  border-radius: 5px;\r\n  color: black;\r\n  text-shadow: none;\r\n  text-align: center;\r\n}\r\n\r\n.username {\r\n  display: inline-block;\r\n  font-size: 1.1em;\r\n  color: black;\r\n  font-weight: bold;\r\n  text-shadow: 0px 0px white;\r\n  float: left;\r\n}\r\n\r\n.follow_button {\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n  border-radius: 6px;\r\n  width: 130px;\r\n  height: 30px;\r\n  float: right;\r\n  margin-top: 14px;\r\n}\r\n\r\n.unfollow_button {\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n  border-radius: 6px;\r\n  width: 130px;\r\n  height: 30px;\r\n  float: right;\r\n  margin-top: 14px;\r\n}\r\n\r\n.nb_followers {\r\n  display: inline-block;\r\n  font-weight: bold;\r\n  float: none;\r\n}\r\n\r\n.appfeed {\r\n  margin-top: 50px;\r\n}\r\n\r\n.usernotfound {\r\n  margin-top: 20px;\r\n  margin-left: 525px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZXhhbXBsZSBpbnB1dFt0eXBlPXRleHRdIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5leGFtcGxlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNiZjAwZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcbi5mb2xsb3dfdW5mb2xsb3cge1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uZm9sbG93X2RpdiB7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgdG9wOiAxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgei1pbmRleDogNjtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjYmYwMGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51c2VybmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IHdoaXRlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZm9sbG93X2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnVuZm9sbG93X2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLm5iX2ZvbGxvd2VycyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4uYXBwZmVlZCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnVzZXJub3Rmb3VuZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTI1cHg7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
            /* harmony import */ var _FindUserInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FindUserInput */ "./src/app/search/FindUserInput.ts");
            /* harmony import */ var _GetUserFollowersInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetUserFollowersInput */ "./src/app/search/GetUserFollowersInput.ts");
            /* harmony import */ var _FollowInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FollowInput */ "./src/app/search/FollowInput.ts");
            /* harmony import */ var _CheckFollowedInut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckFollowedInut */ "./src/app/search/CheckFollowedInut.ts");
            /* harmony import */ var _UnfollowInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UnfollowInput */ "./src/app/search/UnfollowInput.ts");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(userService) {
                    this.userService = userService;
                    this.followButtonEnabled = true;
                    this.unfollowButtonEnabled = true;
                    this.searchButtonEnabled = true;
                    this.username = null;
                    this.userExists = false;
                    this.iFollowHim = false;
                    this.output = {
                        username: null,
                        errorMessage: null,
                        countOfFollowers: null
                    };
                }
                SearchComponent.prototype.ngOnInit = function () {
                    var thiObj = this;
                    setInterval(function () {
                        if (thiObj.userExists) {
                            thiObj.getNbOfFollowers();
                        }
                    }, 2000);
                };
                SearchComponent.prototype.findUserAndNbOfFollowers = function () {
                    this.findUser();
                };
                SearchComponent.prototype.getNbOfFollowers = function () {
                    var _this = this;
                    this.userService.getUserFollowers(new _GetUserFollowersInput__WEBPACK_IMPORTED_MODULE_4__["GetUserFollowersInput"](this.output.username)).subscribe(function (response) { return _this.doAfterNbrFollowersOk(response); }, function (error) { return _this.doAfterNbrFollowersKo(error); });
                };
                SearchComponent.prototype.findUser = function () {
                    var _this = this;
                    this.searchButtonEnabled = false;
                    this.userService.findUser(new _FindUserInput__WEBPACK_IMPORTED_MODULE_3__["FindUserInput"](localStorage.getItem("username"), localStorage.getItem("token"), this.username)).subscribe(function (response) { return _this.doAfterUserFound(response); }, function (error) { return _this.doAfterUserNotFound(error); });
                };
                SearchComponent.prototype.doAfterUserFound = function (response) {
                    this.userExists = true;
                    this.output.errorMessage = null;
                    this.output.username = response.userEntity.username;
                    this.searchButtonEnabled = true;
                    this.checkIfFollowed();
                    this.getNbOfFollowers();
                };
                SearchComponent.prototype.doAfterUserNotFound = function (error) {
                    this.searchButtonEnabled = true;
                    this.userExists = false;
                    this.output.errorMessage = "User not found!";
                };
                SearchComponent.prototype.doAfterNbrFollowersOk = function (response) {
                    this.output.countOfFollowers = response.nbOfFollowers;
                };
                SearchComponent.prototype.doAfterNbrFollowersKo = function (error) {
                    // TODO
                };
                SearchComponent.prototype.checkIfFollowed = function () {
                    var _this = this;
                    this.searchButtonEnabled = false;
                    this.userService.checkUsernameIsFollowed(new _CheckFollowedInut__WEBPACK_IMPORTED_MODULE_6__["CheckFollowedInut"](localStorage.getItem('username'), this.output.username, localStorage.getItem('token'))).subscribe(function (response) { return _this.doCheckFollowedSuccessful(response); }, function (error) { return _this.doCheckFollowedUnsuccessful(error); });
                };
                SearchComponent.prototype.follow = function () {
                    var _this = this;
                    this.followButtonEnabled = false;
                    this.userService.followUser(new _FollowInput__WEBPACK_IMPORTED_MODULE_5__["FollowInput"](localStorage.getItem('username'), localStorage.getItem('token'), this.output.username)).subscribe(function (response) { return _this.doFollowSuccessful(response); }, function (error) { return _this.doFollowUnsuccessful(error); });
                };
                SearchComponent.prototype.unfollow = function () {
                    var _this = this;
                    this.unfollowButtonEnabled = false;
                    this.userService.unfollow(new _UnfollowInput__WEBPACK_IMPORTED_MODULE_7__["UnfollowInput"](localStorage.getItem("username"), localStorage.getItem("token"), this.output.username)).subscribe(function (response) { return _this.doUnFollowSuccessful(response); }, function (error) { return _this.UnFollowUnsuccessful(error); });
                };
                SearchComponent.prototype.doCheckFollowedSuccessful = function (response) {
                    this.searchButtonEnabled = true;
                    this.iFollowHim = response.followed;
                };
                SearchComponent.prototype.doCheckFollowedUnsuccessful = function (error) {
                    this.searchButtonEnabled = true;
                    // TODO
                };
                SearchComponent.prototype.doFollowSuccessful = function (response) {
                    this.followButtonEnabled = true;
                    this.iFollowHim = true;
                };
                SearchComponent.prototype.doFollowUnsuccessful = function (error) {
                    this.followButtonEnabled = true;
                    // TODO
                };
                SearchComponent.prototype.doUnFollowSuccessful = function (response) {
                    this.unfollowButtonEnabled = true;
                    if (response.deleted === 1) {
                        this.iFollowHim = false;
                    }
                };
                SearchComponent.prototype.UnFollowUnsuccessful = function (error) {
                    this.unfollowButtonEnabled = true;
                    // TODO
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/service/user.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/user.service.ts ***!
          \*****************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _feed_GetLastPostsInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed/GetLastPostsInput */ "./src/app/feed/GetLastPostsInput.ts");
            /* harmony import */ var _disconnect_DisconnectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disconnect/DisconnectInput */ "./src/app/disconnect/DisconnectInput.ts");
            /* harmony import */ var _onepost_LikePostInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onepost/LikePostInput */ "./src/app/onepost/LikePostInput.ts");
            /* harmony import */ var _onepost_DislikePostInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../onepost/DislikePostInput */ "./src/app/onepost/DislikePostInput.ts");
            /* harmony import */ var _onepost_CheckLikePostInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../onepost/CheckLikePostInput */ "./src/app/onepost/CheckLikePostInput.ts");
            /* harmony import */ var _onepost_CountLikePostInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../onepost/CountLikePostInput */ "./src/app/onepost/CountLikePostInput.ts");
            var UserService = /** @class */ (function () {
                function UserService(httpClient) {
                    this.httpClient = httpClient;
                    this.registerUserUrl = "/user/create";
                    this.connectUserUrl = "/user/connect";
                    this.findUserUrl = "/user/find";
                    this.getLastPostsUrl = "/post/get";
                    this.getFolllowers = "/follower/count";
                    this.follow = "/follower/add";
                    this.checkFollower = "/follower/check";
                    this.unfollowUser = "/follower/delete";
                    this.disconnectUser = "/user/disconnect";
                    this.addpost = "post/add";
                    this.likePostUrl = "like/add";
                    this.dislikePostUrl = "like/delete";
                    this.checkLikePostUrl = "like/check";
                    this.countLikesUrl = "like/count";
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                }
                UserService.prototype.registerUser = function (body) {
                    return this.httpClient.post(this.registerUserUrl, body, this.httpOptions);
                };
                UserService.prototype.addPost = function (body) {
                    return this.httpClient.post(this.addpost, body, this.httpOptions);
                };
                UserService.prototype.getLastPosts = function () {
                    return this.httpClient.post(this.getLastPostsUrl, new _feed_GetLastPostsInput__WEBPACK_IMPORTED_MODULE_3__["GetLastPostsInput"](localStorage.getItem('username'), localStorage.getItem('token')), this.httpOptions);
                };
                UserService.prototype.countLikes = function (uniqueIdentifier) {
                    return this.httpClient.post(this.countLikesUrl, new _onepost_CountLikePostInput__WEBPACK_IMPORTED_MODULE_8__["CountLikePostInput"](uniqueIdentifier), this.httpOptions);
                };
                UserService.prototype.checkLike = function (uniqueIdentifier) {
                    return this.httpClient.post(this.checkLikePostUrl, new _onepost_CheckLikePostInput__WEBPACK_IMPORTED_MODULE_7__["CheckLikePostInput"](localStorage.getItem('username'), localStorage.getItem('token'), uniqueIdentifier), this.httpOptions);
                };
                UserService.prototype.likePost = function (uniqueIdentifier) {
                    return this.httpClient.post(this.likePostUrl, new _onepost_LikePostInput__WEBPACK_IMPORTED_MODULE_5__["LikePostInput"](localStorage.getItem('username'), localStorage.getItem('token'), uniqueIdentifier), this.httpOptions);
                };
                UserService.prototype.dislikePost = function (uniqueIdentifier) {
                    return this.httpClient.post(this.dislikePostUrl, new _onepost_DislikePostInput__WEBPACK_IMPORTED_MODULE_6__["DislikePostInput"](localStorage.getItem('username'), localStorage.getItem('token'), uniqueIdentifier), this.httpOptions);
                };
                UserService.prototype.disconnect = function () {
                    return this.httpClient.post(this.disconnectUser, new _disconnect_DisconnectInput__WEBPACK_IMPORTED_MODULE_4__["DisconnectInput"](localStorage.getItem('username'), localStorage.getItem('token')), this.httpOptions);
                };
                UserService.prototype.connectUser = function (body) {
                    return this.httpClient.post(this.connectUserUrl, body, this.httpOptions);
                };
                UserService.prototype.findUser = function (body) {
                    return this.httpClient.post(this.findUserUrl, body, this.httpOptions);
                };
                UserService.prototype.getUserFollowers = function (body) {
                    return this.httpClient.post(this.getFolllowers, body, this.httpOptions);
                };
                UserService.prototype.followUser = function (body) {
                    return this.httpClient.post(this.follow, body, this.httpOptions);
                };
                UserService.prototype.checkUsernameIsFollowed = function (body) {
                    return this.httpClient.post(this.checkFollower, body, this.httpOptions);
                };
                UserService.prototype.unfollow = function (body) {
                    return this.httpClient.post(this.unfollowUser, body, this.httpOptions);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Dev\aya\insta\tiny_insta\src\main\resources\front-end\tiny-insta-angular-app\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map