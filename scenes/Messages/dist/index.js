"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var safe_area_layout_component_1 = require("../../components/safe-area-layout.component");
var conversation_list_1 = require("./conversation-list");
var icons_1 = require("./conversation-list/extra/icons");
var Messages = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(safe_area_layout_component_1.SafeAreaLayout, { style: styles.container, insets: "top" },
        react_1["default"].createElement(conversation_list_1["default"], { navigation: navigation }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.floatButton },
            react_1["default"].createElement(icons_1.MessageIcon, null))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    floatButton: {
        position: "absolute",
        bottom: 50,
        right: 20,
        backgroundColor: "teal",
        height: 50,
        width: 50,
        borderRadius: 50,
        shadowColor: "#000",
        elevation: 7,
        alignItems: "center",
        justifyContent: "center"
    }
});
exports["default"] = Messages;
