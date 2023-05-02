"use strict";
exports.__esModule = true;
exports.search_ = exports.search_data = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    search_list: []
};
exports.search_data = toolkit_1.createSlice({
    name: "search_data",
    initialState: initialState,
    reducers: {
        search_: function (state, action) {
            state.search_list = action.payload.list;
        }
    }
});
// Action creators are generated for each case reducer function
exports.search_ = exports.search_data.actions.search_;
exports["default"] = exports.search_data.reducer;
