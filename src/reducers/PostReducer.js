import { ADD_POST, DELETE_POST } from './../constants/action-types';

const initialState = {
    posts: [],
    username: ''
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_POST':
        return { ...state, posts: state.posts.concat([action.payload]) };// This is one way of writing with contactination

        
        case 'DELETE_POST':
            return { ...state, 
                posts : state.posts.filter(post => action.payload !== post) }; // this is just another way to write the return statement 
       

        case 'EDIT_POST':
        return { 
            ...state,
            posts: state.posts.map(
                post => post.id === action.payload.id ? action.payload
                                        : post
            )
         }


        default:
            return state;
    }
}

export default postReducer;