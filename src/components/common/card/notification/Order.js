import React, { useEffect } from 'react';
import {
    FileTextOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getListOrderUser, getBooks } from '../../../../slice/bookSlice'
const Order = () => {
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [listDetail, setListDetail] = React.useState([])
    const listOrderUser = useSelector(state => state.book.listOrderUser)
    const listBook = useSelector(state => state.book.listBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListOrderUser(isUserLogin))
        dispatch(getBooks())
    }, [dispatch])
    const showModal = (e) => {
        setListDetail(e)
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div className="admin-list-book-content-1">
                <table className="table" style={{ fontSize: '13px' }}>
                    <thead>
                        <th>Mã ĐH</th>
                        <th>Tên KH</th>
                        <th>Địa chỉ</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th style={{ width: '5%' }}>Tổng tiền</th>
                        <th>Ngày đặt</th>
                        <th>Tình trạng</th>
                        <th>Chi tiết</th>
                    </thead>
                    {listOrderUser.map((item, index, arr) => {
                        return <tr>
                            <td data-label="Mã ĐH :">{item.id}</td>
                            <td data-label="Tên KH :">{item.fullName}</td>
                            <td data-label="Địa chỉ :">{item.address}</td>
                            <td data-label="Email :">{item.email}</td>
                            <td data-label="Số điện thoại:">{item.phoneNumber}</td>
                            <td data-label="total :">{item.bill}</td>
                            <td data-label="Ngày đặt:">{item.bookingDate}</td>
                            <td data-label="Tình trạng :">{item.status}</td>
                            <td data-label="Chi tiết :" onClick={() => showModal(item.detailOrder)}><FileTextOutlined /></td>
                            {/* onClick={() => history.push({
                                pathname: `/admin/detailorder`,
                                state: { detailOrder: arr[index] }
                            })} */}
                        </tr>
                        // })
                    })}
                </table>
            </div>
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
            <Modal
                footer={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="modal__login"
                width={600}
            >
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <div className="admin-list-book-content-1">
                        <table className="table" style={{ fontSize: '13px' }}>
                            <thead>
                                <th>Tên sách</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                            </thead>
                            {listDetail.map((item, index, arr) => {
                                return listBook.map((e) => {
                                    if (e.id === item.bookId) {
                                        return <tr>
                                            <td data-label="Mã ĐH :">{e.bookName}</td>
                                            <td data-label="Tên KH :">{item.quantityOrder}</td>
                                            <td data-label="Địa chỉ :">{item.total}</td>
                                        </tr>
                                    }
                                })
                            })}
                        </table>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Order