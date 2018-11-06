import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import postReducer from './reducers/PostReducer';
import { Provider } from 'react-redux';
import { addPost } from './actions/actions';



const store = createStore(postReducer);

window.store = store;
window.addPost = addPost;


ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));