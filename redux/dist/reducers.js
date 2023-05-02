"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var userAuth_1 = require("./features/auth/userAuth");
var feeds_1 = require("./features/feeds");
var comments_1 = require("./features/feeds/comments");
var refresh_1 = require("./features/feeds/refresh");
var drawer_1 = require("./features/drawer");
var showTopBar_1 = require("./features/drawer/showTopBar");
var bottomToolBar_1 = require("./features/drawer/bottomToolBar");
var load_action_1 = require("./features/sync/load_action");
var expo_token_1 = require("./features/expo_token");
var settings_1 = require("./features/settings");
var searchData_1 = require("./features/searchData");
var rootReducers = redux_1.combineReducers({
    user: userAuth_1["default"],
    feeds: feeds_1["default"],
    postComments: comments_1["default"],
    load_action: load_action_1["default"],
    expo_token: expo_token_1["default"],
    refreshFeeds: refresh_1["default"],
    topBar: showTopBar_1["default"],
    drawerState: drawer_1["default"],
    bottomBarState: bottomToolBar_1["default"],
    theme: settings_1["default"],
    search__: searchData_1["default"]
});
exports["default"] = rootReducers;
