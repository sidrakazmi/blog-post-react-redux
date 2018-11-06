import { ADD_POST } from '../constants/action-types';
import { EDIT_POST } from '../constants/action-types';
import { DELETE_POST } from '../constants/action-types';

export const addPost = post => ({
    type: ADD_POST,
    payload: post // { id:1, message: hej', title: 'lorem ipsum' }
});

export const editPost = post => ({
    type: EDIT_POST,
    payload: post // { id:1, message: tjena', title: 'lorem ipsum', newMessage: 'nya meddelandet' }
});

export const deletePost = post => ({
    type: DELETE_POST,
    payload: post // { id:1, message: hej', title: 'lorem ipsum' }
});

