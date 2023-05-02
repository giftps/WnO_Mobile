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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var drawer_1 = require("@react-navigation/drawer");
var layouts_navigator_1 = require("./layouts.navigator");
var home_bottom_navigation_component_1 = require("../components/home-bottom-navigation.component");
var HomeDrawer_1 = require("../components/HomeDrawer");
var icons_1 = require("../components/icons");
var groups_navigator_1 = require("./groups.navigator");
var Notifications_1 = require("../scenes/Notifications");
var react_redux_1 = require("react-redux");
var messages_navigation_1 = require("./messages.navigation");
var People_1 = require("../scenes/People");
var components_1 = require("@ui-kitten/components");
var globalTypes_1 = require("../redux/globalTypes");
var search_1 = require("./search");
var fetch_user_service_1 = require("../services/fetch.user.service");
var searchData_1 = require("../redux/features/searchData");
var actionLoader_1 = require("../redux/features/actionLoader");
var actionLoader_2 = require("../redux/features/actionLoader");
var BottomTab = bottom_tabs_1.createBottomTabNavigator();
var Drawer = drawer_1.createDrawerNavigator();
var initialTabRoute = "Feeds";
var HomeTabsNavigator = function () { return (react_1["default"].createElement(BottomTab.Navigator, { initialRouteName: initialTabRoute, screenOptions: { headerShown: false }, tabBar: function (props) { return react_1["default"].createElement(home_bottom_navigation_component_1.HomeBottomNavigation, __assign({}, props)); } },
    react_1["default"].createElement(BottomTab.Screen, { name: "Feeds", component: layouts_navigator_1.LayoutsNavigator }),
    react_1["default"].createElement(BottomTab.Screen, { name: "Groups", component: groups_navigator_1.GroupNavigator }),
    react_1["default"].createElement(BottomTab.Screen, { name: "People", component: People_1["default"] }),
    react_1["default"].createElement(BottomTab.Screen, { name: "Notifications", component: Notifications_1["default"] }),
    react_1["default"].createElement(BottomTab.Screen, { name: "Messages", component: messages_navigation_1.MessagesNavigator }))); };
var HomeNavigator = function () {
    var showTopBar = react_redux_1.useSelector(function (state) { return state.user.topBar; }).showTopBar;
    var user = react_redux_1.useSelector(function (state) { return state.user.user; }).user;
    var styles = components_1.useStyleSheet(themedStyles);
    var search = fetch_user_service_1.useSearchMutation()[0];
    var dispatchEvent = react_redux_1.useDispatch();
    var _a = react_1["default"].useState(""), SearchValue = _a[0], setSearchValue = _a[1];
    var onSearch = function (inputSearchValue) { return __awaiter(void 0, void 0, void 0, function () {
        var searchResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSearchValue(inputSearchValue);
                    dispatchEvent(actionLoader_1.setLoader({}));
                    return [4 /*yield*/, search({
                            start: 0,
                            per_page: 10,
                            value: inputSearchValue
                        }).unwrap()];
                case 1:
                    searchResult = _a.sent();
                    dispatchEvent(searchData_1.search_({ list: searchResult }));
                    dispatchEvent(actionLoader_2.unSetLoader({}));
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(Drawer.Navigator, { screenOptions: { headerShown: showTopBar }, drawerContent: function (props) { return react_1["default"].createElement(HomeDrawer_1.HomeDrawer, __assign({}, props)); } },
        react_1["default"].createElement(Drawer.Screen, { name: "Widen Out", options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    title: "Widen out",
                    headerStyle: { backgroundColor: "#212F37" },
                    headerLeft: function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.stretch, source: require("../assets/icon.png") }))); },
                    headerTitle: function () { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                            // dispatchEvent(HideTopBar(true));
                            navigation.navigate("SearchNavigator");
                        }, style: styles.searchBox },
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(components_1.Text, { style: styles.searchText }, "Search people, groups")),
                        react_1["default"].createElement(icons_1.SearchIcon, null))); },
                    headerRight: function () { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.avatar, onPress: function () { return navigation.toggleDrawer(); } },
                        react_1["default"].createElement(components_1.Avatar, { size: "small", source: { uri: globalTypes_1.GLOBALTYPES.imageLink + user.image } }))); }
                });
            }, component: HomeTabsNavigator }),
        react_1["default"].createElement(Drawer.Screen, { name: "SearchNavigator", options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    title: "Widen out",
                    headerStyle: { backgroundColor: "#212F37" },
                    headerLeft: function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.goBack(); } },
                            react_1["default"].createElement(icons_1.ArrowIosBackIcon, null)))); },
                    headerTitle: function () { return (react_1["default"].createElement(components_1.Input, { textStyle: { color: "#ccc" }, placeholder: "Search people, groups", value: SearchValue, style: styles.searchInputBoxMain, onChangeText: function (nextValue) { return onSearch(nextValue); }, autoFocus: true, accessoryRight: react_1["default"].createElement(icons_1.SearchIcon, null) })); }
                });
            }, component: search_1.SearchNavigator })));
};
exports["default"] = HomeNavigator;
var themedStyles = components_1.StyleService.create({
    imageContainer: {
        marginLeft: 22
    },
    avatar: {
        marginRight: 20
    },
    searchBox: {
        backgroundColor: "#162027",
        width: 200,
        height: 35,
        borderRadius: 6,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchBoxMain: {
        backgroundColor: "#162027",
        width: "90%",
        height: 35,
        borderRadius: 6,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchInputBoxMain: {
        backgroundColor: "#162027",
        borderColor: "#000",
        width: "95%",
        height: 35,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconButton: {
        color: "#777170",
        width: 5,
        height: 5
    },
    searchText: {
        color: "#777170",
        fontWeight: "100",
        fontSize: 13
    },
    stretch: {
        width: 35,
        height: 35
    }
});
react_native_1.LogBox.ignoreLogs(["Accessing the 'state'"]);
