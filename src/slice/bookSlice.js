import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBooks = createAsyncThunk('book/getBooks', async () => {
    const res = await axios
        .get('http://localhost:3001/book')
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getCategory = createAsyncThunk('book/getCategory', async () => {
    const res = await axios
        .get('http://localhost:3001/category')
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        listBook: [],
        listCategory: [],
        isUserLogin: false,
    },
    reducers: {
        isLogged: state => {
            state.isUserLogin = true
        },
        isSignOut: state => {
            state.isUserLogin = false
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getBooks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listBook = action.payload
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listCategory = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
export const { isLogged, isSignOut } = bookSlice.actions

export default bookSlice.reducer