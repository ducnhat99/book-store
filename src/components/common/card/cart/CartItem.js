import React from 'react';
import { InputNumber } from 'antd';
import {
    CloseCircleOutlined
} from '@ant-design/icons';
const CartItem = (props) => {
    const { images, title, price, realPrice, quantity } = props
    const [isquantity, setIsQuantity] = React.useState(quantity)
    return (
        <div className="cart--item-box">
            <div className="cart--item--remove">
                <CloseCircleOutlined className="cart-item--remove__icon" />
            </div>
            <div className="cart--item__images">
                <div className="cart--item__images--box">
                    <img src={images} alt="images book" />
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
                    <InputNumber type="number" size="small" min={1} max={100000} value={isquantity} onChange={(value) => setIsQuantity(value)} />
                </div>
                <div className="cart--item__total">
                    <p className="cart-item__total--header">Thành tiền</p>
                    <p className="cart-item__total--price">{price * isquantity}d</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem