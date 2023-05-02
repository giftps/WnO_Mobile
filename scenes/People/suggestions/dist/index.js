"use strict";
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
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var fetch_user_service_1 = require("../../../services/fetch.user.service");
var card_1 = require("./extra/card");
var react_native_super_grid_1 = require("react-native-super-grid");
var Suggestion = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1["default"].useState(new react_native_1.Animated.Value(0)), circleAnimatedValue = _b[0], setCircleAnimatedValue = _b[1];
    var getPeople = fetch_user_service_1.useGetPeopleMutation()[0];
    var _c = react_1["default"].useState([]), people = _c[0], peopleList = _c[1];
    var user = react_redux_1.useSelector(function (state) { return state.user.user; }).user;
    var loading = react_redux_1.useSelector(function (state) { return state.user.load_action; }).loading;
    var dispatch = react_redux_1.useDispatch();
    react_1["default"].useEffect(function () {
        circleAnimated();
        getFriendList();
    }, [loading]);
    var getFriendList = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user_id, List;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user_id = user.idu;
                    return [4 /*yield*/, getPeople({ user_id: user_id }).unwrap()];
                case 1:
                    List = _a.sent();
                    peopleList(List);
                    return [2 /*return*/];
            }
        });
    }); };
    var circleAnimated = function () {
        // setCircleAnimatedValue(0);
        react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(circleAnimatedValue, {
                toValue: 1,
                duration: 450,
                delay: 200,
                useNativeDriver: true
            }),
        ])).start();
    };
    var translateX = circleAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 100]
    });
    var translateX2 = circleAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 200]
    });
    var translateX3 = circleAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 90]
    });
    var Loader = function () { return (react_1["default"].createElement(react_native_1.View, { style: [{ marginBottom: 8 }, styles.card] },
        react_1["default"].createElement(react_native_1.View, { style: {
                width: 100,
                height: 100,
                borderRadius: 60,
                backgroundColor: "#ECEFF1",
                overflow: "hidden",
                marginRight: 16
            } },
            react_1["default"].createElement(react_native_1.Animated.View, { style: {
                    width: "30%",
                    opacity: 0.5,
                    height: "100%",
                    backgroundColor: "white",
                    transform: [{ translateX: translateX }]
                } })),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: "space-evenly", overflow: "hidden" } },
            react_1["default"].createElement(react_native_1.Animated.View, { style: { backgroundColor: "#ECEFF1", height: 32 } },
                react_1["default"].createElement(react_native_1.Animated.View, { style: {
                        width: "20%",
                        height: "100%",
                        backgroundColor: "white",
                        opacity: 0.5,
                        transform: [{ translateX: translateX2 }]
                    } })),
            react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#ECEFF1", height: 32 } },
                react_1["default"].createElement(react_native_1.Animated.View, { style: {
                        width: "20%",
                        height: "100%",
                        backgroundColor: "white",
                        opacity: 0.5,
                        transform: [{ translateX: translateX2 }]
                    } }))))); };
    return (react_1["default"].createElement(react_native_super_grid_1.FlatGrid, { itemDimension: 130, style: styles.container, data: people, renderItem: function (_a) {
            var item = _a.item;
            return react_1["default"].createElement(card_1.PeopleCard, { navigation: navigation, item: item });
        } }));
};
exports["default"] = Suggestion;
var styles = react_native_1.StyleSheet.create({
    list: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#ECEFF1",
        paddingBottom: 44
    },
    card: {
        padding: 16,
        shadowColor: "black",
        borderRadius: 4,
        backgroundColor: "#FAFAFA",
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.1,
        flexDirection: "row"
    }
});
