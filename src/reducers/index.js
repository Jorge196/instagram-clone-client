import { combineReducers } from "redux";
import { postsReducer, currentPostReducer } from "./posts";
import commentsReducer from "./comments";

export default combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
    comments: commentsReducer,
});