"use strict";
exports.__esModule = true;
exports.appTheme = exports.themeSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    theme: "light"
};
exports.themeSlice = toolkit_1.createSlice({
    name: "settings",
    initialState: initialState,
    reducers: {
        appTheme: function (state, action) {
            state.theme = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
exports.appTheme = exports.themeSlice.actions.appTheme;
exports["default"] = exports.themeSlice.reducer;
