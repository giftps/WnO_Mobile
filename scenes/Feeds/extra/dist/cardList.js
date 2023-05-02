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
var components_1 = require("@ui-kitten/components");
var moment_1 = require("moment");
var react_native_root_toast_1 = require("react-native-root-toast");
var icons_1 = require("./icons");
var react_native_gesture_bottom_sheet_1 = require("react-native-gesture-bottom-sheet");
var react_native_image_zoom_viewer_1 = require("react-native-image-zoom-viewer");
var globalTypes_1 = require("../../../redux/globalTypes");
var fetch_user_service_1 = require("../../../services/fetch.user.service");
var react_redux_1 = require("react-redux");
var refresh_1 = require("../../../redux/features/feeds/refresh");
var feeds_1 = require("../../../redux/features/feeds");
var fetch_user_service_2 = require("../../../services/fetch.user.service");
var keyboard_avoiding_view_component_1 = require("./keyboard-avoiding-view.component");
var CardList = function (props) {
    var info = props.info, navigation = props.navigation;
    var user = react_redux_1.useSelector(function (state) { return state.user.user; }).user;
    var _a = fetch_user_service_1.usePostLikeMutation(), postLike = _a[0], _b = _a[1];
    var _c = react_1["default"].useState([]), comments = _c[0], setComments = _c[1];
    var _d = react_1["default"].useState([]), images = _d[0], setImages = _d[1];
    var _e = react_1["default"].useState(false), visible = _e[0], setVisible = _e[1];
    var _f = react_1["default"].useState(false), loading = _f[0], setLoading = _f[1];
    var _g = react_1["default"].useState(""), message = _g[0], setMessage = _g[1];
    var _h = react_1["default"].useState(false), menuVisible = _h[0], setMenuVisible = _h[1];
    var _j = react_1["default"].useState(false), likeing = _j[0], setLikeing = _j[1];
    var _k = react_1["default"].useState(null), selectedIndex = _k[0], setSelectedIndex = _k[1];
    var _l = fetch_user_service_1.useGetPostCommentMutation(), getPostComment = _l[0], _m = _l[1], isLoading = _m.isLoading, isError = _m.isError, status = _m.status, error = _m.error;
    var feeds = fetch_user_service_2.useFeedsMutation()[0];
    var update_post = fetch_user_service_2.useUpdate_postMutation()[0];
    var delete_post = fetch_user_service_1.useDelete_postMutation()[0];
    var bottomSheet = react_1.useRef();
    var dispatch = react_redux_1.useDispatch();
    var toggleMenu = function () {
        setMenuVisible(!menuVisible);
    };
    var showToastMsg = function (msg) {
        var toast = react_native_root_toast_1["default"].show(msg, {
            duration: react_native_root_toast_1["default"].durations.SHORT,
            position: react_native_root_toast_1["default"].positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });
    };
    var LoadingIndicator = function (props) { return (react_1["default"].createElement(react_native_1.View, { style: [props.style, styles.indicator] },
        react_1["default"].createElement(components_1.Spinner, { size: "small" }))); };
    var keyboardOffset = function (height) {
        return react_native_1.Platform.select({
            android: 0,
            ios: height
        });
    };
    react_1["default"].useEffect(function () {
        getComment();
    }, []);
    var LightBoxHeader = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.headerContainer },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setVisible(false); } },
                react_1["default"].createElement(components_1.Text, { style: styles.closeButton }, "\u00D7"))));
    };
    var getFeeds = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user_id, feedList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user_id = user.idu;
                    dispatch(refresh_1.refreshFeeds);
                    return [4 /*yield*/, feeds({ user_id: user_id }).unwrap()];
                case 1:
                    feedList = _a.sent();
                    dispatch(feeds_1.userFeeds(feedList));
                    dispatch(refresh_1.refreshDone);
                    return [2 /*return*/];
            }
        });
    }); };
    var getComment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var post_id, comment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    post_id = info.item.id;
                    return [4 /*yield*/, getPostComment({ post_id: post_id }).unwrap()];
                case 1:
                    comment = _a.sent();
                    setComments(comment);
                    setImages([
                        {
                            url: globalTypes_1.GLOBALTYPES.uploadsLink + info.item.value,
                            props: {
                            // headers: ...
                            }
                        },
                    ]);
                    return [2 /*return*/];
            }
        });
    }); };
    var LikePost = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var user_id, post, type, like;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLikeing(true);
                    user_id = user.idu;
                    post = id;
                    type = 0;
                    return [4 /*yield*/, postLike({ user_id: user_id, post: post, type: type }).unwrap()];
                case 1:
                    like = _a.sent();
                    getFeeds();
                    setLikeing(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var UpdatePost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, user_id, updatedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = info.item.id;
                    user_id = user.idu;
                    return [4 /*yield*/, update_post({ user_id: user_id, message: message, id: id }).unwrap()];
                case 1:
                    updatedPost = _a.sent();
                    // console.log(updatedPost);
                    if (updatedPost) {
                        bottomSheet.current.close();
                        showToastMsg("Updated");
                    }
                    else {
                        showToastMsg("Error failed to updated");
                    }
                    getFeeds();
                    return [2 /*return*/];
            }
        });
    }); };
    var DeletePost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, user_id, type, updatedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = info.item.id;
                    user_id = user.idu;
                    type = 1;
                    return [4 /*yield*/, delete_post({ user_id: user_id, id: id, type: type }).unwrap()];
                case 1:
                    updatedPost = _a.sent();
                    // console.log(updatedPost);
                    getFeeds();
                    showToastMsg("Deleted successfully");
                    return [2 /*return*/];
            }
        });
    }); };
    var onSelect = function (index, comment) {
        if (index.row === 0) {
            bottomSheet.current.show();
            setMessage(comment.message);
        }
        else if (1) {
            DeletePost();
        }
        setSelectedIndex(index);
        toggleMenu();
    };
    var renderButton = function () { return (react_1["default"].createElement(components_1.Button, { onPress: toggleMenu, style: styles.iconButton, appearance: "ghost", status: "basic", accessoryLeft: icons_1.MoreHorizontalIcon })); };
    var friendWithIconMenuItems = [
        {
            title: "Report",
            accessoryLeft: icons_1.EditIcon
        },
    ];
    var withIconMenuItems = [
        {
            title: "Edit",
            accessoryLeft: icons_1.EditIcon
        },
        {
            title: "Delete",
            accessoryLeft: icons_1.DeleteIcon
        },
    ];
    var renderData = withIconMenuItems.map(function (el, index) { return (react_1["default"].createElement(components_1.MenuItem, __assign({ key: index }, el))); });
    var renderFriendData = friendWithIconMenuItems.map(function (el, index) { return (react_1["default"].createElement(components_1.MenuItem, __assign({ key: index }, el))); });
    var renderCommentHeader = function (comment) { return (react_1["default"].createElement(react_native_1.View, { style: styles.commentHeader },
        react_1["default"].createElement(components_1.Avatar, { source: { uri: globalTypes_1.GLOBALTYPES.imageLink + comment.image } }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                return navigation.navigate("PostUserProfile", {
                    userId: comment.uid
                });
            }, style: styles.commentAuthorContainer },
            react_1["default"].createElement(components_1.Text, { category: "h6" }, comment.first_name + " " + comment.last_name),
            react_1["default"].createElement(components_1.Text, { appearance: "hint", category: "c1" }, moment_1["default"](comment.time).fromNow())),
        react_1["default"].createElement(components_1.OverflowMenu, { visible: menuVisible, selectedIndex: selectedIndex, onSelect: function (index) { return onSelect(index, comment); }, onBackdropPress: toggleMenu, anchor: renderButton }, user.idu === comment.idu ? renderData : renderFriendData),
        react_1["default"].createElement(react_native_gesture_bottom_sheet_1["default"], { hasDraggableIcon: true, ref: bottomSheet, height: 270 },
            react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container },
                react_1["default"].createElement(keyboard_avoiding_view_component_1.KeyboardAvoidingView, { offset: keyboardOffset },
                    react_1["default"].createElement(components_1.Text, { style: { width: 200, paddingLeft: 15, paddingBottom: 6 } }, "Edit Post"),
                    react_1["default"].createElement(react_native_1.TextInput, { style: styles.commentInput, onChangeText: function (msgValue) { return setMessage(msgValue); }, value: message, placeholder: "Write Comment", multiline: true, numberOfLines: 4 }))),
            react_1["default"].createElement(react_native_1.View, { style: { width: 200, padding: 15 } },
                react_1["default"].createElement(components_1.Button, { accessoryLeft: loading ? LoadingIndicator : null, disabled: loading, onPress: UpdatePost, appearance: "outline", status: "basic" },
                    react_1["default"].createElement(components_1.Text, null, "Save Edit")))))); };
    var renderPostHeader = function (comment) { return (react_1["default"].createElement(react_native_1.View, { style: styles.commentHeader },
        react_1["default"].createElement(components_1.Avatar, { source: { uri: globalTypes_1.GLOBALTYPES.imageLink + comment.image } }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                return navigation.navigate("PostComments", {
                    comments: comments,
                    post_id: info.item.id
                });
            }, style: styles.PostCommentContainer },
            react_1["default"].createElement(components_1.Text, { appearance: "hint", category: "c1" }, "Write a comment")))); };
    var renderPostComment = function (comment, index) { return (react_1["default"].createElement(react_native_1.View, { key: index, style: styles.PostComment },
        react_1["default"].createElement(components_1.Avatar, { source: { uri: globalTypes_1.GLOBALTYPES.imageLink + comment.image } }),
        react_1["default"].createElement(react_native_1.View, { style: styles.PostCommentBody },
            react_1["default"].createElement(components_1.Text, { appearance: "hint", category: "c1" }, moment_1["default"](comment.time).fromNow()),
            react_1["default"].createElement(components_1.Text, { category: "h6" }, comment.first_name + " " + comment.last_name),
            react_1["default"].createElement(components_1.Text, null, comment.message)))); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.commentItem },
        renderCommentHeader(info.item),
        react_1["default"].createElement(components_1.Divider, null),
        react_1["default"].createElement(react_native_1.View, { style: styles.postBody },
            react_1["default"].createElement(components_1.Text, null, info.item.message)),
        react_1["default"].createElement(react_native_1.View, null, info.item.value !== "" ? (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.89, onPress: function () {
                setVisible(true);
                setImages([
                    {
                        url: globalTypes_1.GLOBALTYPES.uploadsLink + info.item.value,
                        props: {
                        // headers: ...
                        }
                    },
                ]);
            } },
            react_1["default"].createElement(react_native_1.Image, { resizeMode: "contain", style: styles.stretch, source: { uri: globalTypes_1.GLOBALTYPES.uploadsLink + info.item.value } }))) : null),
        react_1["default"].createElement(react_native_1.Modal, { visible: visible, transparent: true },
            react_1["default"].createElement(react_native_image_zoom_viewer_1["default"], { enableImageZoom: true, 
                // @ts-ignore
                onSaveToCamera: true, enableSwipeDown: true, onSwipeDown: function () { return setVisible(false); }, renderFooter: function () { return react_1["default"].createElement(LightBoxHeader, null); }, imageUrls: images })),
        react_1["default"].createElement(components_1.Divider, null),
        react_1["default"].createElement(react_native_1.View, { style: styles.commentReactionsContainer },
            react_1["default"].createElement(components_1.Button, { onPress: function () {
                    return navigation.navigate("PostComments", {
                        comments: comments,
                        post_id: info.item.id
                    });
                }, style: styles.iconButton, appearance: "ghost", status: "basic", accessoryLeft: icons_1.MessageCircleIcon }, comments.length !== 0 ? "" + comments.length : ""),
            react_1["default"].createElement(components_1.Button, { onPress: function () { return LikePost(info.item.id); }, disabled: likeing, style: styles.iconButton, appearance: "ghost", status: "basic", accessoryLeft: info.item.likes != "0" ? (likeing ? icons_1.Like1light : icons_1.Like1) : icons_1.Like2 }, info.item.likes != "0" ? "" + info.item.likes : "")),
        comments.length !== 0 ? react_1["default"].createElement(components_1.Divider, null) : null,
        react_1["default"].createElement(react_native_1.View, null, comments.map(function (list, index) {
            if (index < 2)
                return renderPostComment(list, index);
        })),
        react_1["default"].createElement(components_1.Divider, null),
        react_1["default"].createElement(react_native_1.View, null, renderPostHeader(user)),
        comments.length !== 0 ? (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(components_1.Button, { onPress: function () {
                    return navigation.navigate("PostComments", {
                        comments: comments
                    });
                }, appearance: "ghost", size: "tiny" }, "Show more comments"))) : null));
};
var styles = react_native_1.StyleSheet.create({
    commentItem: {
        marginVertical: 4,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    commentInput: {
        backgroundColor: "#EDEDED",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 16
    },
    indicator: {
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "background-basic-color-4",
        paddingBottom: 8
    },
    commentHeader: {
        flexDirection: "row",
        padding: 16
    },
    PostComment: {
        flexDirection: "row",
        padding: 6,
        margin: 1
    },
    PostCommentBody: {
        backgroundColor: "#EDEDED",
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 16
    },
    PostCommentContainer: {
        backgroundColor: "#EDEDED",
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 16
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
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    reportButton: {
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        padding: 4,
        borderRadius: 3,
        textAlign: "center",
        margin: 10,
        alignSelf: "flex-end",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 1.5,
        shadowColor: "black",
        shadowOpacity: 0.8
    },
    closeButton: {
        fontSize: 35,
        color: "white",
        lineHeight: 40,
        width: 40,
        textAlign: "center",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 1.5,
        shadowColor: "black",
        shadowOpacity: 0.8
    }
});
exports["default"] = CardList;
