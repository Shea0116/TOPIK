import { createSlice } from "@reduxjs/toolkit";

const logoSlice = createSlice({
    name: 'logo',
    initialState: {
        logo: 'https://cdn.topik.go.kr/asset/image/logo_header.png'
    },
    reducers: {
        changeLogo: (state, action) => {
            state.logo = action.payload
        }
    }
})

export default logoSlice.reducer
