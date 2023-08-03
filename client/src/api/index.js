import axios from 'axios';

const API= axios.create({ baseURL: 'https://yaadein-lifestorybook.vercel.app/'}) ;
// The base URL will be used as the prefix for all the API requests made through this API instance.

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// Request interceptors are functions that run before making a request.
//They allow you to modify the request config or headers before sending the request.



// PATCH: The PATCH method is used to partially update a resource.
// It allows you to send only the specific fields or attributes that you want to update, leaving the other fields unchanged.
// PUT: The PUT method is used to completely replace a resource or create a new one if it does not exist.
// When using PUT, you send the entire updated representation of the resource, and any missing fields will be updated to their default or empty values.

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}` );
 export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const signin=(formData)=>API.post('/user/signin', formData) ;
export const singup=(formData)=> API.post('/user/signup', formData) ;