import axios from 'axios';

const API= axios.create(PROCESS.env.FLASK_ID) ;

export const fetchSentiment = (userId) => axios.post(PROCESS.env.FLASK_SENTIMENT, userId);
export const fetchTrends = () => API.get(`/trends`);
export const fetchPosts = () => API.get(`/posts`);
