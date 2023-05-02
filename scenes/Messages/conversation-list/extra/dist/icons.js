"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SearchIcon = exports.MessageIcon = exports.DoneAllIcon = exports.ArrowIosBackIcon = void 0;
var react_1 = require("react");
var components_1 = require("@ui-kitten/components");
exports.ArrowIosBackIcon = function (style) { return (react_1["default"].createElement(components_1.Icon, __assign({}, style, { name: "arrow-ios-back" }))); };
exports.DoneAllIcon = function (style) {
    var theme = components_1.useTheme();
    return (react_1["default"].createElement(components_1.Icon, __assign({}, style, { width: 16, height: 16, fill: theme["color-primary-default"], name: "done-all" })));
};
exports.MessageIcon = function (style) {
    var theme = components_1.useTheme();
    return (react_1["default"].createElement(components_1.Icon, __assign({}, style, { width: 30, height: 30, fill: 'white', name: "message-circle-outline" })));
};
exports.SearchIcon = function (style) { return (react_1["default"].createElement(components_1.Icon, __assign({}, style, { name: "search" }))); };
