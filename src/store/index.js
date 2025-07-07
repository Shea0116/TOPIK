import { configureStore } from "@reduxjs/toolkit";
import logoSlice from './modules/logo'
import isDarkSlice from './modules/isDark'


const store = configureStore({
    reducer: {
        logo: logoSlice,
        isDark: isDarkSlice
    }
})

export default store