import {
    START_LOADING_POSTS,
    START_LOADING_POST,
    SUCCESSFULLY_LOADED_POST,
    SUCCESSFULLY_LOADED_POSTS,
    SUCCESSFULLY_CREATED_POST,
} from '.'

import { getToken } from '../actions/auth';

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_POSTS})
        fetch('http://localhost:3001/posts', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': getToken()
            }
        })
        .then((res) => res.json())
        .then(postsJson => {
           dispatch({
               type: SUCCESSFULLY_LOADED_POSTS,
               payload: postsJson
            })
        });
    }
}

export const fetchPost = (postId) => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_POST, payload: postId })
        fetch(`http://localhost:3001/posts/${postId}`,
            {
                method: 'GET',
                headers: {
                'Authorization': getToken()
                }
        })
        .then((res) => res.json())
        .then((postCommentsJson) => {
          dispatch({
              type: SUCCESSFULLY_LOADED_POST,
              payload: postCommentsJson
          })
        });
    };
};

export const createPost = (formData) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/posts`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': getToken()
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(postJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_POST,
                payload: postJson
            })
        })
    }
}