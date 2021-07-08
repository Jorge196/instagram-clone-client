import { 
    START_LOADING_POSTS,
    SUCCESSFULLY_LOADED_POSTS, 
    FAILED_LOADING_POSTS, 
    SUCCESSFULLY_LOADED_POST_COMMENTS,
    SUCCESSFULLY_CREATED_POST,
    
    
} from '../actions';
const initialState = {
    postsLoadingState: "notStarted",
    list:[],
};

export default function postsReducer(state = initialState, action) {
    switch (action.type){
        case START_LOADING_POSTS:
            return {...state, postsLoadingState: "inProgress" };
        
        case SUCCESSFULLY_LOADED_POSTS:
            return {
                list: action.payload, 
                loadingState: 'successful'
            };
        case SUCCESSFULLY_LOADED_POST_COMMENTS:
            const foundPost = state.list.find(post => post.id === action.payload.post.id)
            if(foundPost){
                return state
            } else{
                return{
                    ...state, 
                    list: state.list.concat(action.payload.post)
                }
            }
        case SUCCESSFULLY_CREATED_POST:
            return{
                ...state, 
                list: state.list.concat(action.payload)
            }
        
    }
   
}