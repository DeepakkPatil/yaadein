import { FETCH_POST,FETCH_ALL, CREATE, UPDATE, DELETE, LIKE ,FETCH_POSTS_BY_SEARCH , START_LOADING, END_LOADING, COMMENT} from '../constants/actionTypes';

import * as api from '../api/index.js';
import {toast} from 'react-toastify'

export const getPosts = (page) => async (dispatch) => {
  try {
  
    dispatch({ type: START_LOADING}) ;
    const { data } = await api.fetchPosts(page);
    
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING}) ;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
  
    dispatch({ type: START_LOADING}) ;
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING}) ;
  } catch (error) {
    console.log(error.message);
  }
};


export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING}) ;
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
     dispatch({ type: FETCH_POSTS_BY_SEARCH, payload: data });
     dispatch({ type: END_LOADING}) ;
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
  dispatch({ type: START_LOADING}) ;
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
     toast.success('Post created Successfully!!', {
   hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
    dispatch({ type: END_LOADING}) ;
  } catch (error) {
   toast.error('error', {
   hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    toast('🦄 Post Updated', {
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  } catch (error) {
    console.log(error.message);
       toast.error('Update Post Failed', {
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  }
};

export const likePost = (id) => async (dispatch) => {
  
   const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id,user?.token);
    console.log(data);
    

    dispatch({ type: LIKE, payload: data });
    
  } catch (error) {
   toast.error('error', {
   hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    console.log(error.message);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
  
    dispatch({ type: COMMENT, payload: data });
  toast('Commented', {
   autoClose: 1000,
hideProgressBar: false,
theme: "dark",
});
    return data.comments;
  } catch (error) {
   toast.error('error', {
   hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    toast.success('Post Successfully Deleted', {
   autoClose: 1000,
hideProgressBar: false,
theme: "dark",
});
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
  toast.error('error', {
   hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    console.log(error.message);
  }
};
