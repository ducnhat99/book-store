import React, { useEffect } from 'react';
import { InputNumber, Popconfirm, message, notification } from 'antd';
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { putCart, deleteCart, putBook, getBookDetail } from '../../../../slice/bookSlice'
import { Link } from 'react-router-dom'
import VNPRICE from '../../../../constants/FormatPrice';

import {
    CloseCircleOutlined
} from '@ant-design/icons';
const CartItem = (props) => {
    const { id, bookId, categoryId, supplier, publisher, publishYear, author, bookLayout, language, quantityPage, rateStar, description, quantityBook, images, title, price, realPrice, quantity, total } = props
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookDetail(id))
    }, [dispatch])
    // useEffect(() => {
    //     if (quantity > quantityBook)
    //         console.log(quantityBook)
    //     dispatch(putCart({
    //         userId: isUserLogin,
    //         bookId: bookId,
    //         id: id,
    //         quantity: quantityBook,
    //         total: quantityBook * price
    //     }))
    // }, [quantityBook])
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Thông báo',
            description:
                'Số lượng sách không đủ',
        });
    };
    const handleMinusCart = () => {
        dispatch(putCart({
            userId: isUserLogin,
            bookId: bookId,
            id: id,
            quantity: quantity - 1,
            total: (quantity - 1) * price
        }))
        return
    }
    const handlePlusCart = () => {
        if ((quantity + 1) <= quantityBook) {
            dispatch(putCart({
                userId: isUserLogin,
                bookId: bookId,
                id: id,
                quantity: quantity + 1,
                total: (quantity + 1) * price
            }))
        }
        else {
            openNotificationWithIcon('warning')
        }
        return
    }
    const handleChangeNumber = (e) => {
        if (e.target.value == 0 || e.target.value === '') {
            return
        }
        else {
            if ((e.target.value) <= quantityBook) {
                dispatch(putCart({
                    userId: isUserLogin,
                    bookId: bookId,
                    id: id,
                    quantity: parseInt(e.target.value),
                    total: parseInt(e.target.value) * price
                }))
            }
            else {
                openNotificationWithIcon('warning')
            }
        }
    }
    // const handleChangeQuantity = (e) => {
    //     if (e > bookNumber) {
    //         dispatch(putBook({
    //             categoryId: categoryId,
    //             id: bookId,
    //             bookName: title,
    //             supplier: supplier,
    //             publisher: publisher,
    //             publishYear: publishYear,
    //             author: author,
    //             bookLayout: bookLayout,
    //             language: language,
    //             quantityPage: quantityPage,
    //             rateStar: rateStar,
    //             description: description,
    //             imagesBook: images,
    //             quantityBook: quantityBook - (e - bookNumber),
    //             price: price,
    //             realPrice: realPrice,
    //         }))
    //         setBookNumber(e)
    //         return
    //     }
    //     // if (e < bookNumber) {
    //     //     dispatch(putBook({
    //     //         categoryId: categoryId,
    //     //         id: bookId,
    //     //         bookName: title,
    //     //         supplier: supplier,
    //     //         publisher: publisher,
    //     //         publishYear: publishYear,
    //     //         author: author,
    //     //         bookLayout: bookLayout,
    //     //         language: language,
    //     //         quantityPage: quantityPage,
    //     //         rateStar: rateStar,
    //     //         description: description,
    //     //         imagesBook: images,
    //     //         quantityBook: quantityBook + (bookNumber - e),
    //     //         price: price,
    //     //         realPrice: realPrice,
    //     //     }))
    //     //     setBookNumber(e)
    //     //     return
    //     // }

    // }
    function confirm(e) {
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
                    <div className="text__content__input">

                        <div className="text__content__input__count">
                            <MinusOutlined style={{ borderRight: '1px solid #c1c1c1' }} onClick={() => { if (quantity > 1) handleMinusCart() }} className="detail__count--icon" />
                            <InputNumber type="number" min={1} max={100000} value={quantity} onBlur={(value) => handleChangeNumber(value)} className="detail__count--input" />
                            <PlusOutlined style={{ borderLeft: '1px solid #c1c1c1' }} className="detail__count--icon" onClick={() => handlePlusCart()} />
                        </div>
                    </div>
                    {/* <InputNumber type="number" size="small" min={1} max={100000} value={bookNumber} onChange={(e) => handleChangeQuantity(e)} /> */}
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