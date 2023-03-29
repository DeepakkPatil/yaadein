import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE,FETCH_POSTS_BY_SEARCH ,START_LOADING, END_LOADING } from '../constants/actionTypes';

export default (state ={ isLoading:  true , posts: [] }, action) => {
  switch (action.type) {
    
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };  
    case FETCH_ALL:
      return { 
      ...state, 
      posts: action.payload.data,
      currentpage: action.payload.currentpage, 
      numberOfPages: action.payload.numberOfPages
      };
    case FETCH_POSTS_BY_SEARCH:
      return { ...state ,posts: action.payload}  // as only one post
      case FETCH_POST:
          return { ...state ,post: action.payload} 
    case LIKE:
      return {...state , posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case CREATE:
      return {...state , posts: [  action.payload,...state.posts] } ;
    case UPDATE:
      return {...state , posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return {...state , posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return {...state };
  }
};

