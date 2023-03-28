import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_POSTS_BY_SEARCH } from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { 
      ...state, 
      posts: action.payload.data,
      currentpage: action.payload.currentpage, 
      numberOfPages: action.payload.numberOfPages
      };
    case FETCH_POSTS_BY_SEARCH:
      
      return { ...state ,posts: action.payload} 
    case LIKE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

