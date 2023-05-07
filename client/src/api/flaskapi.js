import axios from 'axios';

const API= axios.create({ baseURL: 'https://flask-hello-world-psi-livid.vercel.app/'}) ;

export const fetchTrends = () => API.get(`/trends`);
export const fetchPosts = () => API.get(`/posts`);
export const fetchSentiment = (userIdObj) => API.post(`/sentiment`,userIdObj)
