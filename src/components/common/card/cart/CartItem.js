import React from 'react';
import { InputNumber } from 'antd';
import { useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { putCart } from '../../../../slice/bookSlice'

import {
    CloseCircleOutlined
} from '@ant-design/icons';
const CartItem = (props) => {
    const { id, bookId, images, title, price, realPrice, quantity, total } = props
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const dispatch = useDispatch()
    const handleChangeQuantity = (e) => {
        dispatch(putCart({
            userId: isUserLogin,
            bookId: bookId,
            id: id,
            quantity: e,
            total: e * price
        }))

    }
    return (
        <div className="cart--item-box">
            <div className="cart--item--remove">
                <CloseCircleOutlined className="cart-item--remove__icon" />
            </div>
            <div className="cart--item__images">
                <div className="cart--item__images--box">
                    <img src={`data:image/jpg;base64,${images}`} alt="images book" />
                </div>
            </div>
            <div className="cart--item--info">
                <div className="cart--item--info__title">
                    <h3>{title}</h3>
                </div>
                <div className="cart--item--info__price">
                    <p>{price}d</p>
                </div>
                <div className="cart--item--info__real-price">
                    <p>{realPrice}d</p>
                </div>
            </div>
            <div className="cart--item--price">
                <div className="cart--item--price__number">
                    <InputNumber type="number" size="small" min={1} max={100000} value={quantity} onChange={(e) => handleChangeQuantity(e)} />
                </div>
                <div className="cart--item__total">
                    <p className="cart-item__total--header">Thành tiền</p>
                    <p className="cart-item__total--price">{total}d</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem