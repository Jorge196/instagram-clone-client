import { 
    SUCCESSFULLY_LOADED_POST_COMMENTS,
    START_LOADING_POST,
    SUCCESSFULLY_CREATED_COMMENT    
} from '../actions';

const initialState = {
    postsLoaded: {},
    list: [],
};

export default function commentReducer(state = initialState, 
    action) {
        switch(action.type) {
            case START_LOADING_POST:
                return {
                    ...state, 
                    postsLoaded: {...state.postsLoaded, [action.payload]: "inProgress"},
                };
            case SUCCESSFULLY_LOADED_POST_COMMENTS:
                return {
                    postsLoaded: {
                        ...state.postsLoaded, 
                        [action.payload.post.id]: "successful",
                    },
                    list: state.list.filter((comment) => comment.post_id !== action.payload.post.id).concat(action.payload.comments),
                };

            case SUCCESSFULLY_CREATED_COMMENT:
                return {
                    ...state, 
                    list: state.list.concat(action.payload)
                }
            default:
                return state;
        }
    }