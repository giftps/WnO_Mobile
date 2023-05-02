"use strict";
exports.__esModule = true;
exports.useSearchMutation = exports.useRemovePendingFriendMutation = exports.useGetPendingFriendsMutation = exports.useSetFriendMutation = exports.useGetPeopleMutation = exports.useGetFriendsMutation = exports.useAddFriendMutation = exports.useSetChatMessageMutation = exports.useGetGroupMemberDataMutation = exports.useGetChatsMutation = exports.useGetGroupMembersMutation = exports.useDelete_postMutation = exports.useUpdate_postMutation = exports.usePost_commentMutation = exports.usePost_feedMutation = exports.useGetNotificationsMutation = exports.usePostLikeMutation = exports.useGetPostCommentMutation = exports.useLoginWithJWTMutation = exports.useGetGroupFeedsMutation = exports.useGetGroupsMutation = exports.useProtectedMutation = exports.useGetUserProfileMutation = exports.useFeedsMutation = exports.useLoginMutation = exports.usersApi = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.usersApi = react_1.createApi({
    reducerPath: "userApi",
    baseQuery: react_1.fetchBaseQuery({
        // baseUrl: "http://192.168.8.100/wnoweb//api/endpoints/",
        baseUrl: "https://jw-widenout.com/api/endpoints/",
        prepareHeaders: function (headers, _a) {
            var getState = _a.getState;
            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    endpoints: function (builder) { return ({
        login: builder.mutation({
            query: function (credentials) { return ({
                url: "login.php",
                method: "POST",
                body: credentials
            }); }
        }),
        feeds: builder.mutation({
            query: function (credentials) { return ({
                url: "getFeeds.php",
                method: "POST",
                body: credentials
            }); }
        }),
        loginWithJWT: builder.mutation({
            query: function (credentials) { return ({
                url: "login_with_jwt",
                method: "POST",
                body: credentials
            }); }
        }),
        getGroups: builder.mutation({
            query: function (credentials) { return ({
                url: "getAllGroups.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getGroupFeeds: builder.mutation({
            query: function (credentials) { return ({
                url: "getGroupPosts.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getGroupMembers: builder.mutation({
            query: function (credentials) { return ({
                url: "getGroupMembers.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getGroupMemberData: builder.mutation({
            query: function (credentials) { return ({
                url: "getGroupMemberData.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getNotifications: builder.mutation({
            query: function (credentials) { return ({
                url: "getAllNotifications.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getUserProfile: builder.mutation({
            query: function (credentials) { return ({
                url: "getUserFeeds.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getPostComment: builder.mutation({
            query: function (credentials) { return ({
                url: "getComments.php",
                method: "POST",
                body: credentials
            }); }
        }),
        postLike: builder.mutation({
            query: function (credentials) { return ({
                url: "like.php",
                method: "POST",
                body: credentials
            }); }
        }),
        post_feed: builder.mutation({
            query: function (credentials) { return ({
                url: "postFeeds.php",
                method: "POST",
                body: credentials
            }); }
        }),
        post_comment: builder.mutation({
            query: function (credentials) { return ({
                url: "addComment.php",
                method: "POST",
                body: credentials
            }); }
        }),
        update_post: builder.mutation({
            query: function (credentials) { return ({
                url: "updatePost.php",
                method: "POST",
                body: credentials
            }); }
        }),
        delete_post: builder.mutation({
            query: function (credentials) { return ({
                url: "delete.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getChats: builder.mutation({
            query: function (credentials) { return ({
                url: "getChats.php",
                method: "POST",
                body: credentials
            }); }
        }),
        setChatMessage: builder.mutation({
            query: function (credentials) { return ({
                url: "setChatMessage.php",
                method: "POST",
                body: credentials
            }); }
        }),
        addFriend: builder.mutation({
            query: function (credentials) { return ({
                url: "setChatMessage.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getFriends: builder.mutation({
            query: function (credentials) { return ({
                url: "getFriendsList.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getPeople: builder.mutation({
            query: function (credentials) { return ({
                url: "getPeople.php",
                method: "POST",
                body: credentials
            }); }
        }),
        getPendingFriends: builder.mutation({
            query: function (credentials) { return ({
                url: "getPendingFriends.php",
                method: "POST",
                body: credentials
            }); }
        }),
        setFriend: builder.mutation({
            query: function (credentials) { return ({
                url: "setFriend.php",
                method: "POST",
                body: credentials
            }); }
        }),
        removePendingFriend: builder.mutation({
            query: function (credentials) { return ({
                url: "removePendingFriend.php",
                method: "POST",
                body: credentials
            }); }
        }),
        search: builder.mutation({
            query: function (credentials) { return ({
                url: "search.php",
                method: "POST",
                body: credentials
            }); }
        }),
        protected: builder.mutation({
            query: function () { return "protected"; }
        })
    }); }
});
// export const postApi = createApi({
//   reducerPath: "postApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://192.168.1.134/api/endpoints/",
//     prepareHeaders: (headers, { getState }) => {
//       headers.set("Content-Type", "multipart/form-data");
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     post_feed: builder.mutation<any, any>({
//       query: (credentials) => ({
//         url: "postFeeds.php",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     protected: builder.mutation<{ message: string }, void>({
//       query: () => "protected",
//     }),
//   }),
// });
exports.useLoginMutation = exports.usersApi.useLoginMutation, exports.useFeedsMutation = exports.usersApi.useFeedsMutation, exports.useGetUserProfileMutation = exports.usersApi.useGetUserProfileMutation, exports.useProtectedMutation = exports.usersApi.useProtectedMutation, exports.useGetGroupsMutation = exports.usersApi.useGetGroupsMutation, exports.useGetGroupFeedsMutation = exports.usersApi.useGetGroupFeedsMutation, exports.useLoginWithJWTMutation = exports.usersApi.useLoginWithJWTMutation, exports.useGetPostCommentMutation = exports.usersApi.useGetPostCommentMutation, exports.usePostLikeMutation = exports.usersApi.usePostLikeMutation, exports.useGetNotificationsMutation = exports.usersApi.useGetNotificationsMutation, exports.usePost_feedMutation = exports.usersApi.usePost_feedMutation, exports.usePost_commentMutation = exports.usersApi.usePost_commentMutation, exports.useUpdate_postMutation = exports.usersApi.useUpdate_postMutation, exports.useDelete_postMutation = exports.usersApi.useDelete_postMutation, exports.useGetGroupMembersMutation = exports.usersApi.useGetGroupMembersMutation, exports.useGetChatsMutation = exports.usersApi.useGetChatsMutation, exports.useGetGroupMemberDataMutation = exports.usersApi.useGetGroupMemberDataMutation, exports.useSetChatMessageMutation = exports.usersApi.useSetChatMessageMutation, exports.useAddFriendMutation = exports.usersApi.useAddFriendMutation, exports.useGetFriendsMutation = exports.usersApi.useGetFriendsMutation, exports.useGetPeopleMutation = exports.usersApi.useGetPeopleMutation, exports.useSetFriendMutation = exports.usersApi.useSetFriendMutation, exports.useGetPendingFriendsMutation = exports.usersApi.useGetPendingFriendsMutation, exports.useRemovePendingFriendMutation = exports.usersApi.useRemovePendingFriendMutation, exports.useSearchMutation = exports.usersApi.useSearchMutation;
// export const { usePost_feedMutation } = postApi;
