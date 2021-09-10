import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USERLOGIN } from '../constants/UserLogin';
import { HOST } from '../constants/Host'

export const getBooks = createAsyncThunk('book/getBooks', async () => {
    const res = await axios
        .get(`${HOST}book`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getCategory = createAsyncThunk('book/getCategory', async () => {
    const res = await axios
        .get(`${HOST}category`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getBookCategory = createAsyncThunk('book/getBookCategory', async (id) => {
    const res = await axios
        .get(`${HOST}category/${id}/book`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getComments = createAsyncThunk('book/getComments', async () => {
    const res = await axios
        .get(`${HOST}comments`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        listBook: [],
        listCategory: [],
        listBookCategory: [],
        listComments: [],
    },
    reducers: {
        isLogged: state => {
            localStorage.setItem(USERLOGIN, JSON.stringify(true))
        },
        isSignOut: state => {
            localStorage.setItem(USERLOGIN, JSON.stringify(false))
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
            .addCase(getBookCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getBookCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listBookCategory = action.payload
            })
            .addCase(getBookCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getComments.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listComments = action.payload
            })
            .addCase(getComments.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
export const { isLogged, isSignOut } = bookSlice.actions

export default bookSlice.reducer