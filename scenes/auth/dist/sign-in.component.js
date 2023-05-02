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
// import { Formik } from "formik";
// import { Text } from "@ui-kitten/components";
var components_1 = require("@ui-kitten/components");
var _3rd_party_1 = require("./extra/3rd-party");
var react_redux_1 = require("react-redux");
var react_native_flash_message_1 = require("react-native-flash-message");
var fetch_user_service_1 = require("../../services/fetch.user.service");
var userAuth_1 = require("../../redux/features/auth/userAuth");
var spacing_1 = require("../../components/config/spacing");
var height = react_native_1.Dimensions.get("window").height;
exports["default"] = (function (_a) {
    var navigation = _a.navigation;
    var _b = react_1["default"].useState(), username = _b[0], setUsername = _b[1];
    var _c = react_1["default"].useState(), password = _c[0], setPassword = _c[1];
    var _d = react_1["default"].useState(false), passwordVisible = _d[0], setPasswordVisible = _d[1];
    var token = react_redux_1.useSelector(function (state) { return state.user.expo_token; }).token;
    var theme = react_redux_1.useSelector(function (state) { return state.user.theme; }).theme;
    var _e = react_1["default"].useState(false), done = _e[0], setDone = _e[1];
    var _f = react_1["default"].useState(true), loading = _f[0], setLoading = _f[1];
    // const dispatch = useDispatch();
    // const [getUserLogin] = useGetUserMutation();
    var _g = fetch_user_service_1.useLoginMutation(), login = _g[0], _h = _g[1], isLoading = _h.isLoading, isError = _h.isError, status = _h.status, error = _h.error;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        // if (token) setLoading(false);
        setLoading(false);
    }, [token]);
    var styles = components_1.useStyleSheet(themedStyles);
    var onSignUpButtonPress = function () {
        navigation && navigation.navigate("SignUp");
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, login({ username: username, password: password, token: token }).unwrap()];
                case 2:
                    user = _a.sent();
                    // @ts-ignore
                    if (user !== "Incorrect Data") {
                        dispatch(userAuth_1.userLoggedIn(user));
                    }
                    else {
                        react_native_flash_message_1.showMessage({
                            message: "Incorrect Username or Password",
                            type: "danger"
                        });
                        setLoading(false);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    react_native_flash_message_1.showMessage({
                        message: "Failed to login please check your connection",
                        type: "danger"
                    });
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onForgotPasswordButtonPress = function () {
        navigation && navigation.navigate("ForgotPassword");
    };
    var onPasswordIconPress = function () {
        setPasswordVisible(!passwordVisible);
    };
    var renderPasswordIcon = function (props) { return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onPasswordIconPress },
        react_1["default"].createElement(components_1.Icon, __assign({}, props, { name: passwordVisible ? "eye-off" : "eye" })))); };
    var renderPersonIcon = function (props) { return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onPasswordIconPress },
        react_1["default"].createElement(components_1.Icon, __assign({}, props, { name: "person-add-outline" })))); };
    return (react_1["default"].createElement(_3rd_party_1.KeyboardAvoidingView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.imageBox },
            react_1["default"].createElement(react_native_1.Image, { style: styles.stretch, source: theme === "light"
                    ? require("./assets/WidenOut_outline.png")
                    : require("./assets/WidenOut_outline_black.png") })),
        react_1["default"].createElement(components_1.Layout, { style: styles.formContainer, level: "1" },
            react_1["default"].createElement(components_1.Input, { placeholder: "Username", label: "Username", accessoryRight: renderPersonIcon, value: username, onChangeText: setUsername }),
            react_1["default"].createElement(components_1.Input, { style: styles.passwordInput, placeholder: "Password", label: "Password", accessoryRight: renderPasswordIcon, value: password, secureTextEntry: !passwordVisible, onChangeText: setPassword }),
            react_1["default"].createElement(react_native_1.View, { style: styles.forgotPasswordContainer },
                react_1["default"].createElement(components_1.Button, { style: styles.forgotPasswordButton, appearance: "ghost", status: "basic", onPress: onForgotPasswordButtonPress }, "Forgot your password?"))),
        loading ? (react_1["default"].createElement(components_1.Button, { style: styles.signInButton, disabled: true, size: "medium" }, "Loading...")) : (react_1["default"].createElement(components_1.Button, { style: styles.signInButton, onPress: handleSubmit, size: "medium" }, "SIGN IN")),
        react_1["default"].createElement(components_1.Button, { style: styles.signUpButton, appearance: "ghost", status: "basic", onPress: onSignUpButtonPress }, "Don't have an account? Create")));
});
var themedStyles = components_1.StyleService.create({
    imageBox: {
        width: "100%",
        alignItems: "center",
        marginTop: height / 6.5,
        marginBottom: 30
    },
    stretch: {
        width: 142,
        height: 188
    },
    textForgot: {
        textAlign: "center"
    },
    footnote: {
        marginTop: -14
    },
    viewOr: {
        flexDirection: "row",
        alignItems: "center"
    },
    divOr: {
        flex: 1
    },
    textOr: {
        marginHorizontal: spacing_1.margin.base
    },
    textAccount: {
        textAlign: "center",
        marginBottom: spacing_1.margin.base
    },
    margin: {
        marginVertical: spacing_1.margin.big
    },
    viewSocial: {
        marginBottom: spacing_1.margin.big
    },
    container: {
        backgroundColor: "background-basic-color-1"
    },
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16
    },
    signInLabel: {
        marginTop: 16
    },
    signInButton: {
        marginHorizontal: 16
    },
    signUpButton: {
        marginVertical: 12,
        marginHorizontal: 16
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    passwordInput: {
        marginTop: 16
    },
    forgotPasswordButton: {
        paddingHorizontal: 0
    },
    icon: {
        width: 32,
        height: 32
    }
});
