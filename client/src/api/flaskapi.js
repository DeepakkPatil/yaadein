import axios from 'axios';

const API= axios.create({ baseURL: 'https://flask-hello-world-psi-livid.vercel.app'}) ;

export const fetchSentiment = (userId) => axios.post('https://flask-hello-world-psi-livid.vercel.app/sentiments/', userId);
export const fetchTrends = () => API.get(`/trends`);
export const fetchPosts = () => API.get(`/posts`);
