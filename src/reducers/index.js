import { combineReducers } from "redux";
import { postsReducer, currentPostReducer } from "./posts";
import commentsReducer from "./comments"
import authReducer from "./auth";

export default combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
    comments: commentsReducer,
    auth: authReducer,
});