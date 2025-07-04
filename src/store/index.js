import { configureStore } from "@reduxjs/toolkit";
import logoSlice from './modules/logo'

const store = configureStore({
    reducer: {
        logo: logoSlice
    }
})

export default store