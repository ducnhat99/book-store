import React from 'react';
import { InputNumber, Popconfirm, message } from 'antd';
import { useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { putCart, deleteCart, putBook } from '../../../../slice/bookSlice'
import { Link } from 'react-router-dom'
import VNPRICE from '../../../../constants/FormatPrice';

import {
    CloseCircleOutlined
} from '@ant-design/icons';
const CartItem = (props) => {
    const { id, bookId, categoryId, supplier, publisher, publishYear, author, bookLayout, language, quantityPage, rateStar, description, quantityBook, images, title, price, realPrice, quantity, total } = props
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const [bookNumber, setBookNumber] = React.useState(quantity)
    const dispatch = useDispatch()
    const handleChangeQuantity = (e) => {
        dispatch(putCart({
            userId: isUserLogin,
            bookId: bookId,
            id: id,
            quantity: e,
            total: e * price
        }))
        setBookNumber(e)

        // if (e > bookNumber) {
        //     dispatch(putBook({
        //         categoryId: categoryId,
        //         id: bookId,
        //         bookName: title,
        //         supplier: supplier,
        //         publisher: publisher,
        //         publishYear: publishYear,
        //         author: author,
        //         bookLayout: bookLayout,
        //         language: language,
        //         quantityPage: quantityPage,
        //         rateStar: rateStar,
        //         description: description,
        //         imagesBook: images,
        //         quantityBook: quantityBook - (e - bookNumber),
        //         price: price,
        //         realPrice: realPrice,
        //     }))
        //     setBookNumber(e)
        //     return
        // }
        // if (e < bookNumber) {
        //     dispatch(putBook({
        //         categoryId: categoryId,
        //         id: bookId,
        //         bookName: title,
        //         supplier: supplier,
        //         publisher: publisher,
        //         publishYear: publishYear,
        //         author: author,
        //         bookLayout: bookLayout,
        //         language: language,
        //         quantityPage: quantityPage,
        //         rateStar: rateStar,
        //         description: description,
        //         imagesBook: images,
        //         quantityBook: quantityBook + (bookNumber - e),
        //         price: price,
        //         realPrice: realPrice,
        //     }))
        //     setBookNumber(e)
        //     return
        // }

    }
    function confirm(e) {
        dispatch(putBook({
            categoryId: categoryId,
            id: bookId,
            bookName: title,
            supplier: supplier,
            publisher: publisher,
            publishYear: publishYear,
            author: author,
            bookLayout: bookLayout,
            language: language,
            quantityPage: quantityPage,
            rateStar: rateStar,
            description: description,
            imagesBook: images,
            quantityBook: quantityBook + bookNumber,
            price: price,
            realPrice: realPrice,
        }))
        dispatch(deleteCart(id))
        message.success('Xóa thành công');
    }

    function cancel(e) {
    }
    return (
        <div className="cart--item-box">
            <div className="cart--item--remove">
                <Popconfirm placement="topRight"
                    title="Bạn có muốn xóa không ?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Có"
                    cancelText="Không"
                >
                    <CloseCircleOutlined className="cart-item--remove__icon" />
                </Popconfirm>
            </div>
            <div className="cart--item__images">
                <div className="cart--item__images--box">
                    <img src={`data:image/jpg;base64,${images}`} alt="images book" />
                </div>
            </div>
            <div className="cart--item--info">
                <div className="cart--item--info__title">
                    <Link to={`/detail/${bookId}`}>
                        <h3>{title}</h3>
                    </Link>
                </div>
                <div className="cart--item--info__price">
                    <p>{VNPRICE(price)}</p>
                </div>
                <div className="cart--item--info__real-price">
                    {realPrice ? <p>{VNPRICE(realPrice)}</p> : null}
                </div>
            </div>
            <div className="cart--item--price">
                <div className="cart--item--price__number">
                    <InputNumber type="number" size="small" min={1} max={100000} value={bookNumber} onChange={(e) => handleChangeQuantity(e)} />
                </div>
                <div className="cart--item__total">
                    <p className="cart-item__total--header">Thành tiền</p>
                    <p className="cart-item__total--price">{VNPRICE(total)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem