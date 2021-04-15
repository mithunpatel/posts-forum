
export const initialState = {
    isloading: false,
    posts: [],
    current: 1,
    currentId: '',
    user: [],
    post: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {
                ...state,
                isloading: true
            };
        case "CLEAR_IS_LOADING":
            return {
                ...state,
                isloading: false
            };
        case "SET_LIVE_POSTS":
            return {
                ...state,
                posts: action.value
            };
        case "SET_POST":
            return {
                ...state,
                current: action.value
            };
        case "SET_USER":
            return {
                ...state,
                current: action.value
            };
        case "SET_CURRENT_ID":
            return {
                ...state,
                currentId: action.value
            };
        case "SET_LIVE_USER":
            return {
                ...state,
                user: action.value
            };
        case "SET_LIVE_POST":
            return {
                ...state,
                post: action.value
            };
        default:
            return state;
    }
};
