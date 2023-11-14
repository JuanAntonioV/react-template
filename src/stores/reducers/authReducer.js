import { storeStatus } from '@/utils/globalEntities';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    status: storeStatus.idle,
    token: null,
    error: null,
    isAuth: false,
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.status = storeStatus.loading;

            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', JSON.stringify(payload.user));
            state.error = null;

            state.status = storeStatus.succeeded;
        },
        logout(state) {
            state.status = storeStatus.loading;
            state.user = null;
            state.error = null;
            state.isAuth = false;
            state.token = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            state.status = storeStatus.succeeded;
        },
        setUser(state, { payload }) {
            state.status = storeStatus.loading;
            state.user = payload;
            state.isAuth = true;
            state.error = null;
            state.status = storeStatus.succeeded;
        },
        setToken(state, { payload }) {
            state.status = storeStatus.loading;
            state.token = payload;
            state.error = null;
            state.status = storeStatus.succeeded;
        },
        setError(state, { payload }) {
            state.status = storeStatus.loading;
            state.error = payload;
            state.status = storeStatus.failed;
        },
        getAuth(state) {
            state.status = storeStatus.loading;
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');

            state.user = user ? JSON.parse(user) : null;

            if (token) {
                state.token = token;
                state.isAuth = true;
            } else {
                state.isAuth = false;
            }
            state.status = storeStatus.succeeded;
        },
    },
});

export const getAuthState = (state) => state.auth;

export const { login, logout, setUser, setToken, setError, getAuth } =
    authReducer.actions;

export default authReducer.reducer;
