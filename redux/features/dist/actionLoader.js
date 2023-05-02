"use strict";
var _a;
exports.__esModule = true;
exports.setLoader = exports.unSetLoader = exports.actionLoaderSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isLoading: false
};
exports.actionLoaderSlice = toolkit_1.createSlice({
    name: "action_loader",
    initialState: initialState,
    reducers: {
        setLoader: function (state, action) {
            state.isLoading = true;
        },
        unSetLoader: function (state, action) {
            state.isLoading = false;
        }
    }
});
// Action creators are generated for each case reducer function
exports.unSetLoader = (_a = exports.actionLoaderSlice.actions, _a.unSetLoader), exports.setLoader = _a.setLoader;
exports["default"] = exports.actionLoaderSlice.reducer;
