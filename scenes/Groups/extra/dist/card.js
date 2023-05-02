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
exports.GroupCard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var image_overlay_component_1 = require("./image-overlay.component");
var icons_1 = require("./icons");
var globalTypes_1 = require("../../../redux/globalTypes");
exports.GroupCard = function (props) {
    var navigate = props.navigate.navigate;
    var _a = props.items, cover = _a.cover, title = _a.title, description = _a.description, members = _a.members;
    react_1["default"].useEffect(function () {
        console.log(props);
    }, []);
    return (react_1["default"].createElement(components_1.Card, { onPress: function () { return navigate("GroupDiscussion", __assign({}, props.items)); }, style: styles.container },
        react_1["default"].createElement(image_overlay_component_1.ImageOverlay, { style: styles.image, source: { uri: globalTypes_1.GLOBALTYPES.coversLink + cover } },
            react_1["default"].createElement(components_1.Text, { style: styles.level, category: "h4", status: "control" }, title),
            react_1["default"].createElement(components_1.Text, { style: styles.level, category: "s1", status: "control" }, members != 1 ? members + " members" : members + " member"),
            react_1["default"].createElement(components_1.Text, { style: styles.title, category: "s1", status: "control" }, description),
            react_1["default"].createElement(components_1.Button, { style: styles.durationButton, size: "tiny", onPress: function () { return navigate("GroupDiscussion", __assign({}, props.items)); }, accessoryLeft: icons_1.ClockIcon }, "Open group feeds"))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        height: 200
    },
    image: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { height: 200, paddingVertical: 24, paddingHorizontal: 16 }),
    level: {
        zIndex: 1,
        color: "#fff"
    },
    title: {
        zIndex: 1,
        color: "#fff"
    },
    durationButton: {
        position: "absolute",
        left: 16,
        bottom: 16,
        borderRadius: 16,
        paddingHorizontal: 0
    }
});
