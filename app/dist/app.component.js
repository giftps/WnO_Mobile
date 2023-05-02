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
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var components_1 = require("@ui-kitten/components");
var eva_icons_1 = require("@ui-kitten/eva-icons");
var react_native_flash_message_1 = require("react-native-flash-message");
var eva = require("@eva-design/eva");
var app_loading_component_1 = require("./app-loading.component");
var status_bar_component_1 = require("../components/status-bar.component");
var splash_image_component_1 = require("../components/splash-image.component");
var app_navigator_1 = require("../navigation/app.navigator");
var react_redux_1 = require("react-redux");
var loadingTasks = [
    function () {
        return app_loading_component_1.LoadFontsTask({
            "opensans-regular": require("../assets/fonts/opensans-regular.ttf"),
            "roboto-regular": require("../assets/fonts/roboto-regular.ttf")
        });
    },
];
var App = function () {
    var theme = react_redux_1.useSelector(function (state) { return state.user.theme; }).theme;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.IconRegistry, { icons: eva_icons_1.EvaIconsPack }),
        react_1["default"].createElement(components_1.ApplicationProvider, __assign({}, eva, { theme: theme == "light" ? eva.light : eva.dark }),
            react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaProvider, null,
                react_1["default"].createElement(status_bar_component_1["default"], null),
                react_1["default"].createElement(react_native_flash_message_1["default"], { position: "top" }),
                react_1["default"].createElement(app_navigator_1["default"], null)))));
};
var Splash = function (_a) {
    var loading = _a.loading;
    return (react_1["default"].createElement(splash_image_component_1.SplashImage, { loading: loading, source: require("../assets/splash.png") }));
};
exports["default"] = (function () {
    var theme = react_redux_1.useSelector(function (state) { return state.user.theme; }).theme;
    var defaultConfig = {
        mapping: "eva",
        theme: theme
    };
    return (react_1["default"].createElement(app_loading_component_1.AppLoading, { tasks: loadingTasks, initialConfig: defaultConfig, placeholder: Splash }, function (props) { return react_1["default"].createElement(App, __assign({}, props)); }));
});
