import { 
    START_LOADING_POSTS,
    SUCCESSFULLY_LOADED_POSTS, 
    SUCCESSFULLY_LOADED_POST, 
    SUCCESSFULLY_CREATED_POST,
} from '../actions';

const initialState = {
    postsLoadingState: "notStarted",
    list:[],
};

const initialCurrentPostState = {
    post: {},
    comments: []
}

export function postsReducer(state = initialState, action) {
    switch (action.type){
        case START_LOADING_POSTS:
            return {...state, postsLoadingState: "inProgress" };
        
        case SUCCESSFULLY_LOADED_POSTS:
            return {
                list: action.payload, 
                loadingState: 'successful'
            };
        case SUCCESSFULLY_CREATED_POST:
            return{
                ...state, 
                list: state.list.concat(action.payload)
            }
        default:
            return state;
        
    }
   
}

export function currentPostReducer(state = initialCurrentPostState, action) {
    switch (action.type){
        case SUCCESSFULLY_LOADED_POST:
            return action.payload
        default:
            return state;
        
    }
   
}