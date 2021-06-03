import {
    START_LOADING_POSTS,
    START_LOADING_POST,
    SUCCESSFULLY_LOADED_POSTS,
    SUCCESSFULLY_LOADED_POST_COMMENTS,
} from '.'
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_POSTS})
        fetch('http://localhost:3001/posts', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
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
        dispatch({type: START_LOADING_POST, payload: postId})
        fetch(`http://localhost:3001/posts/${postId}`)
        .then(res => res.json())
        .then((postCommentsJson) => {
          dispatch({
              type: SUCCESSFULLY_LOADED_POST_COMMENTS,
              payload: postCommentsJson
          })
        });
    };
};