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
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var image_overlay_component_1 = require("./extra/image-overlay.component");
var data_1 = require("./extra/data");
var react_redux_1 = require("react-redux");
var globalTypes_1 = require("../../redux/globalTypes");
var icons_1 = require("./extra/icons");
var fetch_user_service_1 = require("../../services/fetch.user.service");
var product = data_1.Product.centralParkApartment();
exports["default"] = (function (props) {
    var id = props.id, navigation = props.navigation;
    var user = react_redux_1.useSelector(function (state) { return state.user.user; }).user;
    var _a = fetch_user_service_1.useGetUserProfileMutation(), getUserProfile = _a[0], _b = _a[1], isLoading = _b.isLoading, isError = _b.isError, status = _b.status, error = _b.error;
    var _c = react_1["default"].useState(0), selectedIndex = _c[0], setSelectedIndex = _c[1];
    var _d = react_1["default"].useState([]), profile = _d[0], setProfile = _d[1];
    var _e = react_1["default"].useState(false), isMainUser = _e[0], setIsMainUser = _e[1];
    var _f = react_1["default"].useState(""), cover = _f[0], setCover = _f[1];
    var _g = react_1["default"].useState(""), image = _g[0], setImage = _g[1];
    var _h = react_1["default"].useState(""), last_name = _h[0], setLast_name = _h[1];
    var _j = react_1["default"].useState(""), first_name = _j[0], setFirst_name = _j[1];
    var _k = react_1["default"].useState(""), email = _k[0], setEmail = _k[1];
    var _l = react_1["default"].useState(""), country = _l[0], setCountry = _l[1];
    var _m = react_1["default"].useState(""), bio = _m[0], setBio = _m[1];
    var _o = react_1["default"].useState(false), refresh = _o[0], setRefresh = _o[1];
    var dispatch = react_redux_1.useDispatch();
    //   const UserInfo = user[0];
    react_1["default"].useEffect(function () {
        if (user.idu === id) {
            setIsMainUser(true);
        }
        UserProfile();
    }, []);
    var UserProfile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var uid, ProfileList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setRefresh(true);
                    uid = id;
                    return [4 /*yield*/, getUserProfile({ uid: uid }).unwrap()];
                case 1:
                    ProfileList = _a.sent();
                    // console.log(ProfileList);
                    if (ProfileList) {
                        setProfile(ProfileList);
                        setCover(ProfileList[0].cover);
                        setImage(ProfileList[0].image);
                        setLast_name(ProfileList[0].last_name);
                        setFirst_name(ProfileList[0].first_name);
                        setEmail(ProfileList[0].email);
                        setCountry(ProfileList[0].country);
                        setBio(ProfileList[0].bio);
                        setRefresh(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var styles = components_1.useStyleSheet(themedStyles);
    var onBookButtonPress = function () {
        navigation.navigate("UserSettings");
    };
    var renderDetailItem = function (detail, index) {
        if (detail === "Block")
            return (react_1["default"].createElement(components_1.Button, { accessoryLeft: icons_1.SlashIcon, key: index, status: "danger", style: styles.detailItem, appearance: "outline", size: "tiny" }, detail));
        else if (detail === "Message")
            return (react_1["default"].createElement(components_1.Button, { accessoryLeft: icons_1.MessageCircleIcon, key: index, style: styles.detailItem, appearance: "outline", size: "tiny" }, detail));
        else if (detail === "Poke")
            return (react_1["default"].createElement(components_1.Button, { accessoryLeft: icons_1.HandPointerIcon, key: index, style: styles.detailItem, appearance: "outline", size: "tiny" }, detail));
    };
    var renderBookingFooter = function () { return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.detailsList }, ["Message", "Poke", "Block"].map(renderDetailItem)))); };
    var renderHeader = function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(image_overlay_component_1.ImageOverlay, { style: styles.image, source: { uri: globalTypes_1.GLOBALTYPES.coversLink + cover } }),
        react_1["default"].createElement(components_1.Card, { style: styles.bookingCard, appearance: "filled", disabled: true, footer: renderBookingFooter },
            react_1["default"].createElement(components_1.Avatar, { size: "giant", source: { uri: globalTypes_1.GLOBALTYPES.imageLink + image } }),
            react_1["default"].createElement(components_1.Text, { style: styles.title, category: "h6" },
                first_name,
                " ",
                last_name),
            react_1["default"].createElement(components_1.Text, { style: styles.rentLabel, appearance: "hint", category: "p2" }, email),
            react_1["default"].createElement(components_1.Text, null, country),
            react_1["default"].createElement(components_1.Button, { style: styles.bookButton, onPress: onBookButtonPress }, "Add Friend")))); };
    var renderUserHeader = function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(image_overlay_component_1.ImageOverlay, { style: styles.image, source: { uri: globalTypes_1.GLOBALTYPES.coversLink + cover } }),
        react_1["default"].createElement(components_1.Card, { style: styles.bookingCard, appearance: "filled", disabled: true },
            react_1["default"].createElement(components_1.Avatar, { size: "giant", source: { uri: globalTypes_1.GLOBALTYPES.imageLink + image } }),
            react_1["default"].createElement(components_1.Text, { style: styles.title, category: "h6" },
                first_name,
                " ",
                last_name),
            react_1["default"].createElement(components_1.Text, { style: styles.rentLabel, appearance: "hint", category: "p2" }, email),
            react_1["default"].createElement(components_1.Text, null, country),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bookButton, onPress: onBookButtonPress },
                react_1["default"].createElement(icons_1.SettingsIcon, null))))); };
    var renderItem = function (info) { return (react_1["default"].createElement(react_native_1.View, { style: styles.commentItem },
        react_1["default"].createElement(react_native_1.View, { style: styles.postBody },
            react_1["default"].createElement(components_1.Text, null, info.item.message)),
        react_1["default"].createElement(react_native_1.View, null, info.item.value !== "" ? (react_1["default"].createElement(react_native_1.Image, { resizeMode: "contain", style: styles.stretch, source: { uri: globalTypes_1.GLOBALTYPES.uploadsLink + info.item.value } })) : null),
        react_1["default"].createElement(components_1.Divider, null),
        react_1["default"].createElement(react_native_1.View, { style: styles.commentReactionsContainer },
            react_1["default"].createElement(components_1.Button, { style: styles.iconButton, appearance: "ghost", status: "basic", accessoryLeft: icons_1.MessageCircleIcon }, info.item.comments !== "0" ? "" + info.item.comments : ""),
            react_1["default"].createElement(components_1.Button, { style: styles.iconButton, appearance: "ghost", status: "danger", accessoryLeft: icons_1.HeartIcon }, "" + info.item.likes.length)))); };
    return (react_1["default"].createElement(components_1.List, { data: profile, onRefresh: function () { return UserProfile(); }, refreshing: refresh, renderItem: renderItem, ListHeaderComponent: isMainUser ? renderUserHeader() : renderHeader() }));
});
var themedStyles = components_1.StyleService.create({
    container: {
        backgroundColor: "background-basic-color-2"
    },
    image: {
        height: 260
    },
    bookingCard: {
        marginTop: -80,
        margin: 16
    },
    title: {
        width: "65%"
    },
    rentLabel: {
        marginTop: 24
    },
    priceLabel: {
        marginTop: 8
    },
    bookButton: {
        position: "absolute",
        bottom: 24,
        right: 24
    },
    detailsList: {
        flexDirection: "row",
        marginHorizontal: -4,
        marginVertical: 8
    },
    detailItem: {
        marginHorizontal: 4,
        borderRadius: 16
    },
    optionList: {
        flexDirection: "row",
        marginHorizontal: -4,
        marginVertical: 8
    },
    optionItem: {
        marginHorizontal: 4,
        paddingHorizontal: 0
    },
    description: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    sectionLabel: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    imagesList: {
        padding: 8,
        backgroundColor: "background-basic-color-2"
    },
    imageItem: {
        width: 180,
        height: 120,
        borderRadius: 8,
        marginHorizontal: 8
    },
    commentItem: {
        marginVertical: 4,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    commentHeader: {
        flexDirection: "row",
        padding: 16
    },
    postBody: {
        marginHorizontal: 16,
        marginTop: 2,
        marginBottom: 2
    },
    commentAuthorContainer: {
        flex: 1,
        marginHorizontal: 16
    },
    commentReactionsContainer: {
        flexDirection: "row",
        padding: 8,
        marginHorizontal: -8,
        marginVertical: -8
    },
    iconButton: {
        paddingHorizontal: 0
    },
    stretch: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    }
});
