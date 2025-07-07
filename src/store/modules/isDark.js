import { createSlice } from "@reduxjs/toolkit";

const isDarkSlice = createSlice({
    name: 'isDark',
    initialState: {
        isDark: false
    },
    reducers: {
        changeDark: (state) => {
            state.isDark = !state.isDark;
        }
    }
});
export const { changeDark } = isDarkSlice.actions;
export default isDarkSlice.reducer;
