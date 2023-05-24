import { RootState, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logOut: (state) => {
            state.token = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

const authReducer = authSlice.reducer;

export default authReducer;
