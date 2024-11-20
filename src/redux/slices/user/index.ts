import User from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    user: User | null;
}

const initialState: InitialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginWithFacebook: () => { },
        loginWithGoogle: () => { },
        loginWithZalo: () => { },
        loginSuccess: (state, { payload }) => {
            state.user = payload;
        },
    }
})

export const UserActions = userSlice.actions

export default userSlice