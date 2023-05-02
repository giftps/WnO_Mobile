"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_webview_1 = require("react-native-webview");
var react_native_animated_loader_1 = require("react-native-animated-loader");
var SettingsScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1["default"].useState(true), loading = _b[0], setLoading = _b[1];
    return (react_1["default"].createElement(react_native_webview_1.WebView, { startInLoadingState: true, source: {
            uri: "https://jw-widenout.com//index.php?a=settings"
        }, onMessage: function (e) {
            if (e.nativeEvent.data === "updated") {
                navigation.goBack();
            }
        }, cacheEnabled: false, originWhitelist: ["*"], javaScriptEnabled: true, 
        // source={{ uri: "https://jw-widenout.com//index.php?a=register" }}
        renderLoading: function () {
            return (react_1["default"].createElement(react_native_animated_loader_1["default"], { visible: loading, overlayColor: "rgba(255,255,255,0.75)", source: require("../../assets/lottiefiles/infinite-scroll-loader.json"), animationStyle: {
                    width: 100,
                    height: 60
                }, speed: 1 },
                react_1["default"].createElement(react_native_1.Text, null, "Please wait...")));
        } }));
};
exports["default"] = SettingsScreen;
