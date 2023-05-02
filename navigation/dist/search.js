"use strict";
exports.__esModule = true;
exports.SearchNavigator = void 0;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Search_1 = require("../scenes/Search");
var Stack = stack_1.createStackNavigator();
exports.SearchNavigator = function () { return (react_1["default"].createElement(Stack.Navigator, { screenOptions: { presentation: "modal", headerShown: false } },
    react_1["default"].createElement(Stack.Screen, { name: "Search", component: Search_1["default"] }))); };
