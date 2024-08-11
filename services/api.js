import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const getProducts = () => api.get('/products');
export const getRecommendations = (userId) => api.get(`/recommendation/${userId}`);
export const searchProducts = (query) => api.get(`/search/${query}`);

export default api;
