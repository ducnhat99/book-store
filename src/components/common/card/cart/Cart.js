import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Empty, Pagination } from 'antd';
import CartItem from "./CartItem"
import { USERLOGIN } from '../../../../constants/UserLogin';
import VNPRICE from '../../../../constants/FormatPrice';
import { getCartUser, getBooks } from '../../../../slice/bookSlice'
const Cart = () => {
    const [shipPrice, setShipPrice] = React.useState(30000)
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const listCartUser = useSelector(state => state.book.listCartUser)
    const listBook = useSelector(state => state.book.listBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartUser(isUserLogin))
        dispatch(getBooks())
    }, [dispatch])
    let totalPrice = 0
    const pageLimit = 5;
    const [pageSlice, setPageSlice] = React.useState(0)
    const handleChange = (page, pageSize) => {
        setPageSlice((page - 1) * pageSize)
    }
    const listCartRender = (data) => {
        return data.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
            return listBook.map((bookItem) => {
                if (bookItem.id === item.bookId) {
                    console.log("🚀 ~ file: Cart.js ~ line 42 ~ returnlistBook.map ~ bookItem.quantityBook", bookItem.quantityBook)
                    return <CartItem id={item.id}
                        categoryId={bookItem.categoryId}
                        bookId={item.bookId}
                        supplier={bookItem.supplier}
                        publisher={bookItem.publisher}
                        publishYear={bookItem.publishYear}
                        author={bookItem.author}
                        bookLayout={bookItem.bookLayout}
                        language={bookItem.language}
                        quantityPage={bookItem.quantityPage}
                        rateStar={bookItem.rateStar}
                        description={bookItem.description}
                        quantityBook={bookItem.quantityBook}
                        images={bookItem.imagesBook}
                        title={bookItem.bookName}
                        price={bookItem.price}
                        realPrice={bookItem.realPrice}
                        quantity={item.quantity}
                        total={item.total} />
                }
            })
        })
    }
    listCartUser.map((item, index) => {
        return totalPrice += item.total
    })
    return (
        <div className="cart--container">
            <div className="container">
                <div className="cart--container--header">
                    <h2>GIỎ HÀNG</h2>
                </div>
                {(!listCartUser || listCartUser.length === 0) ? <div className="cart-empty"><Empty description="Không có sản phẩm nào trong giỏ hàng" /></div> :
                    <div className="cart-container--main">
                        <div className="cart-container__item">
                            {listCartRender(listCartUser)}
                            <Pagination style={{ textAlign: 'center', marginTop: '10px' }} defaultCurrent={1} total={listCartUser.length} onChange={handleChange} pageSize={pageLimit} />
                        </div>
                        <div className="cart-checkout">
                            <div className="cart-checkout-price">
                                <p>Thành tiền</p>
                                <p>{VNPRICE(totalPrice)}</p>
                            </div>
                            <div className="cart-checkout-price-ship">
                                <p>Phí vận chuyển</p>
                                <p>{VNPRICE(shipPrice)}</p>
                            </div>
                            <div className="cart-checkout-total-price">
                                <p>Tổng số tiền</p>
                                <p>{VNPRICE(totalPrice + shipPrice)}</p>
                            </div>
                            <div className="cart-checkout-btn">
                                <Link to="/checkout">
                                    <Button type="primary">THANH TOÁN</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart