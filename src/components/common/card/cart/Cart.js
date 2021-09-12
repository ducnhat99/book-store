import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import CartItem from "./CartItem"
import images from '../../../../images/7kyquanthegioi.jpg'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getCartUser, getBooks } from '../../../../slice/bookSlice'
const Cart = () => {
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const listCartUser = useSelector(state => state.book.listCartUser)
    const listBook = useSelector(state => state.book.listBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartUser(isUserLogin))
        dispatch(getBooks())
    }, [dispatch])
    let totalPrice = 0
    let shipPrice = 30000
    const listCartRender = (data) => {
        return data.map((item, index) => {
            return listBook.map((bookItem) => {
                if (bookItem.id === item.bookId) {
                    return <CartItem id={item.id}
                        bookId={item.bookId}
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
                <div className="cart-container--main">
                    <div className="cart-container__item">
                        {listCartRender(listCartUser)}
                    </div>
                    <div className="cart-checkout">
                        <div className="cart-checkout-price">
                            <p>Thành tiền</p>
                            <p>{totalPrice}d</p>
                        </div>
                        <div className="cart-checkout-price-ship">
                            <p>Phí vận chuyển</p>
                            <p>{shipPrice}d</p>
                        </div>
                        <div className="cart-checkout-total-price">
                            <p>Tổng số tiền</p>
                            <p>{totalPrice + shipPrice}d</p>
                        </div>
                        <div className="cart-checkout-btn">
                            <Link to="/checkout">
                                <Button type="primary">THANH TOÁN</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart