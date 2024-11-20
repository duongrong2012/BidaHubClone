import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    navbarHeight: number | string
}

const initialState: InitialState = {
    navbarHeight: 0,
}

const navbarHeightSlice = createSlice({
    name: 'navbarHeight',
    initialState,
    reducers: {
        getnavbarHeightSuccess: (state, { payload }: PayloadAction<InitialState['navbarHeight']>) => {
            state.navbarHeight = payload;
        },
    }
})

export const navbarHeightActions = navbarHeightSlice.actions

export default navbarHeightSlice