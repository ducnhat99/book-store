import React, { useEffect } from 'react';
import {
    CloseCircleOutlined
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getListOrderUser, getBooks } from '../../../../slice/bookSlice'
const Order = () => {
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const listOrderUser = useSelector(state => state.book.listOrderUser)
    const listBook = useSelector(state => state.book.listBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListOrderUser(isUserLogin))
        dispatch(getBooks())
    }, [dispatch])
    return (
        <>
            <table className="order--table">
                <tr className="order--table--header">
                    <th className="order--table__idcart">Mã Đh</th>
                    <th className="order--table__title">Tên sản phẩm</th>
                    <th className="order--table__cartnumber">Số lượng</th>
                    <th className="order--table__cartnumber">Tổng tiền</th>
                    <th className="order--table__date">Ngày đặt hàng</th>
                    <th className="order--table__address">Địa chỉ</th>
                    <th className="order--table__tt">Tình trạng</th>
                </tr>
                {listOrderUser.map((item, index) => {
                    return item.detailOrder.map((e, orderIndex, arr) => {
                        return listBook.map((book) => {
                            if (book.id === e.bookId)
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{book.bookName}</td>
                                    <td>{e.quantityOrder}</td>
                                    <td>{item.bill}</td>
                                    <td>{item.bookingDate}</td>
                                    <td>{item.address}</td>
                                    <td>{item.status}</td>
                                </tr>
                        })

                    })

                })}
            </table>
            {listOrderUser.map((item, index) => {
                return item.detailOrder.map((e, orderIndex, arr) => {
                    return listBook.map((book) => {
                        if (book.id === e.bookId) {
                            return <div className="order-phone">
                                <div className="order-phone--content">
                                    <div className="order-phone--content__container">
                                        <p>Mã ĐH</p>
                                        <p>{item.id}</p>
                                    </div>
                                    <div className="order-phone--content__container--title">
                                        <p>Tên SP</p>
                                        <p>{book.bookName}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>Tổng tiền</p>
                                        <p>{item.bill}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>Ngày ĐH</p>
                                        <p>{item.bookingDate}</p>
                                    </div>
                                    <div className="order-phone--content__container--title">
                                        <p>Địa chỉ</p>
                                        <p>{item.address}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>Tình trạng</p>
                                        <p>{item.status}</p>
                                    </div>
                                </div>
                                <div className="order-phone--cancel">
                                    <CloseCircleOutlined className="cart-item--remove__icon" />
                                </div>
                            </div>
                        }
                    })
                })
            })}
        </>
    )
}

export default Order