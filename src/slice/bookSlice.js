import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USERLOGIN } from '../constants/UserLogin';
import { HOST } from '../constants/Host'
import { useSelector, useDispatch } from 'react-redux'

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
export const getBookDetail = createAsyncThunk('book/getBookDetail', async (id) => {
    const res = await axios
        .get(`${HOST}book/${id}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getCommentsBook = createAsyncThunk('book/getCommentsBook', async (id) => {
    const res = await axios
        .get(`${HOST}book/${id}/comments`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getUser = createAsyncThunk('book/getUser', async (id) => {
    const res = await axios
        .get(`${HOST}users/${id}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getListUser = createAsyncThunk('book/getListUser', async () => {
    const res = await axios
        .get(`${HOST}users`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const addCommentApi = createAsyncThunk('book/addCommentApi', async (payload) => {
    const res = await axios
        .post(`${HOST}comments`, {
            userId: payload.userId,
            bookId: payload.bookId,
            id: payload.id,
            content: payload.content,
            star: payload.star,
            dateTime: payload.dateTime
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getListComments = createAsyncThunk('book/getListComments', async () => {
    const res = await axios
        .get(`${HOST}comments`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const addUsersApi = createAsyncThunk('book/addUsersApi', async (payload) => {
    const res = await axios
        .post(`${HOST}users`, {
            id: payload.id,
            fullName: payload.fullName,
            email: payload.email,
            password: payload.password,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
            birthDay: payload.birthDay,
            sex: payload.sex,
            registerDay: payload.registerDay,
            role: payload.role,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const getCartUser = createAsyncThunk('book/getCartUser', async (id) => {
    const res = await axios
        .get(`${HOST}users/${id}/cart`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const putCart = createAsyncThunk('book/putCart', async (payload) => {
    await axios
        .put(`${HOST}cart/${payload.id}`, {
            userId: payload.userId,
            bookId: payload.bookId,
            id: payload.id,
            quantity: payload.quantity,
            total: payload.total
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const deleteCart = createAsyncThunk('book/deleteCart', async (payload) => {
    await axios
        .delete(`${HOST}cart/${payload}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return payload;
});
export const addCartApi = createAsyncThunk('book/addCartApi', async (payload) => {
    await axios
        .post(`${HOST}cart`, {
            userId: payload.userId,
            bookId: payload.bookId,
            id: payload.id,
            quantity: payload.quantity,
            total: payload.total,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const getListCart = createAsyncThunk('book/getListCart', async () => {
    const res = await axios
        .get(`${HOST}cart`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const putBook = createAsyncThunk('book/putBook', async (payload) => {
    // require('events').EventEmitter.defaultMaxListeners = 15;
    try {
        await axios
            .put(`${HOST}book/${payload.id}`, {
                categoryId: payload.categoryId,
                id: payload.id,
                bookName: payload.bookName,
                supplier: payload.supplier,
                publisher: payload.publisher,
                publishYear: payload.publishYear,
                author: payload.author,
                bookLayout: payload.bookLayout,
                language: payload.language,
                quantityPage: payload.quantityPage,
                rateStar: payload.rateStar,
                description: payload.description,
                imagesBook: payload.imagesBook,
                quantityBook: payload.quantityBook,
                price: payload.price,
                realPrice: payload.realPrice,
            })
    } catch (error) {
        console.log(error)
    }

    // .then((res) => res.data)
    // .catch((e) => console.log(e));
});
export const putBookAll = createAsyncThunk('book/putBookAll', async (payload) => {
    console.log("🚀 ~ file: bookSlice.js ~ line 141 ~ putBookAll ~ payload", payload)
    await axios
        .put(`${HOST}book`, payload)
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const getListOrder = createAsyncThunk('book/getListOrder', async () => {
    const res = await axios
        .get(`${HOST}order`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});

export const addOrder = createAsyncThunk('book/addOrder', async (payload) => {
    await axios
        .post(`${HOST}order`, {
            userId: payload.userId,
            id: payload.id,
            fullName: payload.fullName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
            bookingDate: payload.bookingDate,
            bill: payload.bill,
            detailOrder: payload.detailOrder,
            payments: payload.payments,
            status: payload.status,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});

export const getListOrderUser = createAsyncThunk('book/getListOrderUser', async (id) => {
    const res = await axios
        .get(`${HOST}users/${id}/order`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return res;
});
export const deleteCartUser = createAsyncThunk('book/deleteCartUser', async (id) => {
    await axios
        .delete(`${HOST}users/${id}/cart`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const putUser = createAsyncThunk('book/putUser', async (payload) => {
    await axios
        .put(`${HOST}users/${payload.id}`, {
            id: payload.id,
            fullName: payload.fullName,
            email: payload.email,
            password: payload.password,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
            birthDay: payload.birthDay,
            sex: payload.sex,
            registerDay: payload.registerDay,
            role: payload.role,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const addCategory = createAsyncThunk('book/addCategory', async (payload) => {
    await axios
        .post(`${HOST}category`, {
            id: payload.id,
            categoryName: payload.categoryName
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const deleteCategory = createAsyncThunk('book/deleteCategory', async (payload) => {
    await axios
        .delete(`${HOST}category/${payload}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return payload;
});
export const putCategory = createAsyncThunk('book/putCategory', async (payload) => {
    await axios
        .put(`${HOST}category/${payload.id}`, {
            id: payload.id,
            categoryName: payload.categoryName
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const putOrder = createAsyncThunk('book/putOrder', async (payload) => {
    await axios
        .put(`${HOST}order/${payload.id}`, {
            userId: payload.userId,
            id: payload.id,
            fullName: payload.fullName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
            bookingDate: payload.bookingDate,
            bill: payload.bill,
            detailOrder: payload.detailOrder,
            payments: payload.payments,
            status: payload.status,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const deleteOrder = createAsyncThunk('book/deleteOrder', async (payload) => {
    await axios
        .delete(`${HOST}order/${payload}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return payload;
});
export const deleteBook = createAsyncThunk('book/deleteBook', async (payload) => {
    await axios
        .delete(`${HOST}book/${payload}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return payload;
});
export const deleteUser = createAsyncThunk('book/deleteUser', async (payload) => {
    await axios
        .delete(`${HOST}users/${payload}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    return payload;
});
export const addBook = createAsyncThunk('book/addBook', async (payload) => {
    await axios
        .post(`${HOST}book`, {
            categoryId: payload.categoryId,
            id: payload.id,
            bookName: payload.bookName,
            supplier: payload.supplier,
            publisher: payload.publisher,
            publishYear: payload.publishYear,
            author: payload.author,
            bookLayout: payload.bookLayout,
            language: payload.language,
            quantityPage: payload.quantityPage,
            rateStar: payload.rateStar,
            description: payload.description,
            imagesBook: payload.imagesBook,
            quantityBook: payload.quantityBook,
            price: payload.price,
            realPrice: payload.realPrice,
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
});
export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        listBook: [],
        listCategory: [],
        listBookCategory: [],
        bookDetail: [],
        commentsBook: [],
        user: [],
        listUsers: [],
        listComments: [],
        listCartUser: [],
        listCartAll: [],
        listOrder: [],
        listOrderUser: [],
        isAdmin: false
    },
    reducers: {
        isLogged: (state, action) => {
            localStorage.setItem(USERLOGIN, JSON.stringify(action.payload))
        },
        isSignOut: state => {
            localStorage.setItem(USERLOGIN, JSON.stringify(0))
        },
        isAdmin: state => {
            state.isAdmin = true
        },
        isAdminLogout: state => {
            state.isAdmin = false
        },
    },
    extraReducers(builder) {
        builder
            //listBook
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
            //listCategory    
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
            //listBookCategory    
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
            //bookDetail    
            .addCase(getBookDetail.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getBookDetail.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.bookDetail = action.payload
            })
            .addCase(getBookDetail.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //commentBook    
            .addCase(getCommentsBook.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCommentsBook.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.commentsBook = action.payload
            })
            .addCase(getCommentsBook.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //user    
            .addCase(getUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //listUser
            .addCase(getListUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getListUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listUsers = action.payload
            })
            .addCase(getListUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //listComments
            .addCase(getListComments.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getListComments.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listComments = action.payload
            })
            .addCase(getListComments.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addComment
            .addCase(addCommentApi.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addCommentApi.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.commentsBook.push(action.payload)
                state.listComments.push(action.payload)
            })
            .addCase(addCommentApi.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addUsers
            .addCase(addUsersApi.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addUsersApi.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listUsers.push(action.payload)
            })
            .addCase(addUsersApi.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //listCartUser
            .addCase(getCartUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCartUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listCartUser = action.payload
            })
            .addCase(getCartUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putCart
            .addCase(putCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listCartUser.findIndex((obj) => {
                    if (obj.id === action.meta.arg.id) {
                        return true;
                    }
                    return false;
                });
                state.listCartUser.splice(indexOfObject, 1, action.meta.arg)
            })
            .addCase(putCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteCart
            .addCase(deleteCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listCartUser.findIndex((obj) => {
                    if (obj.id === action.payload) {
                        return true;
                    }
                    return false;
                });
                state.listCartUser.splice(indexOfObject, 1)
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addCart
            .addCase(addCartApi.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addCartApi.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listCartUser.push(action.meta.arg)
                state.listCartAll.push(action.meta.arg)
            })
            .addCase(addCartApi.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //listCart
            .addCase(getListCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getListCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listCartAll = action.payload
            })
            .addCase(getListCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putBook
            .addCase(putBook.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putBook.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listBook.findIndex((obj) => {
                    if (obj.id === action.meta.arg.id) {
                        return true;
                    }
                    return false;
                });
                state.listBook.splice(indexOfObject, 1, action.meta.arg)
                state.bookDetail = action.meta.arg
                return
            })
            .addCase(putBook.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //listOrder
            .addCase(getListOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getListOrder.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listOrder = action.payload
            })
            .addCase(getListOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addOrder
            .addCase(addOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listOrder.push(action.meta.arg)
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            //getListOrderUser
            .addCase(getListOrderUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getListOrderUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listOrderUser = action.payload
            })
            .addCase(getListOrderUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putBookAll
            .addCase(putBookAll.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putBookAll.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listBook = action.meta.arg
                // state.bookDetail = action.meta.arg
            })
            .addCase(putBookAll.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteCartUser
            .addCase(deleteCartUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCartUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // const indexOfObject = state.listCartUser.findIndex((obj) => {
                //     if (obj.id === action.payload) {
                //         return true;
                //     }
                //     return false;
                // });
                state.listCartUser.splice(0)
            })
            .addCase(deleteCartUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putUser
            .addCase(putUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listUsers.findIndex((obj) => {
                    if (obj.id === action.meta.arg.id) {
                        return true;
                    }
                    return false;
                });
                state.listUsers.splice(indexOfObject, 1, action.meta.arg)
            })
            .addCase(putUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addCategory
            .addCase(addCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listCategory.push(action.meta.arg)
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteCategory
            .addCase(deleteCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // state.listCategory.push(action.meta.arg)
                const indexOfObject = state.listCategory.findIndex((obj) => {
                    if (obj.id === action.payload) {
                        return true;
                    }
                    return false;
                });
                state.listCategory.splice(indexOfObject, 1)
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putCategory
            .addCase(putCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listCategory.findIndex((obj) => {
                    if (obj.id === action.meta.arg.id) {
                        return true;
                    }
                    return false;
                });
                state.listCategory.splice(indexOfObject, 1, action.meta.arg)
            })
            .addCase(putCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addBook
            .addCase(addBook.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.listBook.push(action.meta.arg)
            })
            .addCase(addBook.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //putOrder
            .addCase(putOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(putOrder.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listOrder.findIndex((obj) => {
                    if (obj.id === action.meta.arg.id) {
                        return true;
                    }
                    return false;
                });
                state.listOrder.splice(indexOfObject, 1, action.meta.arg)
            })
            .addCase(putOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteOrder
            .addCase(deleteOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listOrder.findIndex((obj) => {
                    if (obj.id === action.payload) {
                        return true;
                    }
                    return false;
                });
                state.listOrder.splice(indexOfObject, 1)
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteUser
            .addCase(deleteUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listUsers.findIndex((obj) => {
                    if (obj.id === action.payload) {
                        return true;
                    }
                    return false;
                });
                state.listUsers.splice(indexOfObject, 1)
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //deleteBook
            .addCase(deleteBook.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const indexOfObject = state.listBook.findIndex((obj) => {
                    if (obj.id === action.payload) {
                        return true;
                    }
                    return false;
                });
                state.listBook.splice(indexOfObject, 1)
            })
            .addCase(deleteBook.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
export const { isLogged, isSignOut, isAdmin, isAdminLogout } = bookSlice.actions

export default bookSlice.reducer