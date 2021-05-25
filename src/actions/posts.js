import {
    START_LOADING_POSTS,
    SUCCESSFULLY_LOADED_POSTS
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