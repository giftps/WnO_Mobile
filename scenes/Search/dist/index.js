"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var safe_area_layout_component_1 = require("../../components/safe-area-layout.component");
var components_1 = require("@ui-kitten/components");
var react_redux_1 = require("react-redux");
var globalTypes_1 = require("../../redux/globalTypes");
var Search = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1["default"].useState([]), people = _b[0], peopleList = _b[1];
    var search_list = react_redux_1.useSelector(function (state) { return state.user.search__; }).search_list;
    react_1["default"].useEffect(function () {
        console.log(search_list);
    }, []);
    var renderItemIcon = function (props) {
        console.log(props);
        return (react_1["default"].createElement(components_1.Avatar, { source: { uri: globalTypes_1.GLOBALTYPES.imageLink + props.image }, size: "giant" }));
    };
    var renderItem = function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(components_1.ListItem, { onPress: function () {
                return navigation.navigate("PostUserProfile", {
                    userId: item.idu
                });
            }, accessoryLeft: function () { return renderItemIcon(item); }, title: item.first_name + " " + item.last_name, description: item.description + " " + (index + 1) }));
    };
    return (react_1["default"].createElement(safe_area_layout_component_1.SafeAreaLayout, { style: styles.container, insets: "top", level: "2" },
        react_1["default"].createElement(react_native_1.View, { style: styles.layout },
            react_1["default"].createElement(components_1.List, { data: search_list, ItemSeparatorComponent: components_1.Divider, renderItem: renderItem }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    layout: {
        padding: 10
    },
    commentAuthorContainer: {
        flex: 1,
        marginHorizontal: 16
    }
});
exports["default"] = Search;
