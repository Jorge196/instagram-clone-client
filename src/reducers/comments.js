import { 
    SUCCESSFULLY_LOADED_POST_COMMENTS,
    START_LOADING_POST
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
                    list: state.list.concat(action.payload.comments),
                };
            default:
                return state;
        }
    }