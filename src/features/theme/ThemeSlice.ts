import { createSlice } from "@reduxjs/toolkit";


interface themeState {
    theme: "light" | "dark"
}

const initialState:themeState = {
    theme: "light",
}

export const themeSlice = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
