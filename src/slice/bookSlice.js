import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isUserLogin: false
    },
    reducers: {
        isLogged: state => {
            state.isUserLogin = true
        },
        isSignOut: state => {
            state.isUserLogin = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { isLogged, isSignOut } = bookSlice.actions

export default bookSlice.reducer