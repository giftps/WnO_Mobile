"use strict";
exports.__esModule = true;
exports.LayoutsNavigator = exports.FeedsNavigator = void 0;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Feeds_1 = require("../scenes/Feeds");
var PostStatus_1 = require("../scenes/Feeds/PostStatus");
var Profile_1 = require("../scenes/Profile");
var PostComments_1 = require("../scenes/Feeds/PostComments");
var settings_1 = require("../scenes/Profile/settings");
var Stack = stack_1.createStackNavigator();
var Feeds = stack_1.createStackNavigator();
exports.FeedsNavigator = function () { return (react_1["default"].createElement(Feeds.Navigator, { screenOptions: { headerShown: false } },
    react_1["default"].createElement(Feeds.Screen, { name: "HomeFeeds", component: Feeds_1["default"] }))); };
exports.LayoutsNavigator = function () { return (react_1["default"].createElement(Stack.Navigator, { screenOptions: { presentation: "modal", headerShown: false } },
    react_1["default"].createElement(Stack.Screen, { name: "LayoutFeeds", component: exports.FeedsNavigator }),
    react_1["default"].createElement(Stack.Screen, { name: "PostStatus", component: PostStatus_1["default"] }),
    react_1["default"].createElement(Stack.Screen, { name: "PostUserProfile", component: Profile_1["default"] }),
    react_1["default"].createElement(Stack.Screen, { options: { headerShown: true }, name: "UserSettings", component: settings_1["default"] }),
    react_1["default"].createElement(Stack.Screen, { name: "PostComments", component: PostComments_1["default"] }))); };
