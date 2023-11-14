import axios from 'axios';

const devURL = import.meta.env.VITE_API_URL_DEV;
const prodURL = import.meta.env.VITE_API_URL_PROD;

const baseURL = import.meta.env.MODE == 'production' ? prodURL : devURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
