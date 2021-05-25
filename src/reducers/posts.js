import { 
    ADD_POST, 
    START_LOADING_POSTS, 
    SUCCESSFULLY_LOADED_POSTS, 
    FAILED_LOADING_POSTS
} from '../actions';
const defaultState = {
    loadingState: "notStarted",
    list:[]
};

export default function postsReducer(state = defaultState, action) {
    switch (action.type){
        case START_LOADING_POSTS:
            return {...state, loadingState: "inProgress" };
        case SUCCESSFULLY_LOADED_POSTS:
            return {
                list: action.payload, 
                loadingState: 'successful'
            };
        default:     
        return state;
    }
   
}