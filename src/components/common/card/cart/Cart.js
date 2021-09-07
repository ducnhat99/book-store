import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import CartItem from "./CartItem"
import images from '../../../../images/7kyquanthegioi.jpg'

const Cart = () => {
    let totalPrice = 0
    let shipPrice = 0
    const cartData = [
        {
            images: images,
            title: "Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)",
            price: 50000,
            realPrice: 75000,
            quantity: 1
        },
        {
            images: images,
            title: "Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)",
            price: 50000,
            realPrice: 75000,
            quantity: 3
        },
        {
            images: images,
            title: "Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)",
            price: 45000,
            realPrice: 75000,
            quantity: 5
        },
    ]
    cartData.map((item, index) => {
        return totalPrice += (item.price * item.quantity)
    })
    return (
        <div className="cart--container">
            <div className="container">
                <div className="cart--container--header">
                    <h2>GIỎ HÀNG</h2>
                </div>
                <div className="cart-container--main">
                    <div className="cart-container__item">
                        {cartData.map((item, index) => {
                            return <CartItem images={item.images} title={item.title} price={item.price} realPrice={item.realPrice} quantity={item.quantity} />
                        })}
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