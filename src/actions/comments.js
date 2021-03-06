import { SUCCESSFULLY_CREATED_COMMENT } from '.'
import { getToken } from '../actions/auth';

export const createComment = (formData) => {
        const comment = {
            comment: formData          
        }
   
    return (dispatch) => {
        console.log('called')
        return fetch('http://localhost:3001/comments', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(comment)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(commentJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_COMMENT,
                payload: commentJson
            });
        })
    }
}