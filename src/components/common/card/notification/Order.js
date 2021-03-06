import React, { useEffect } from 'react';
import {
    FileTextOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import { Modal, Popconfirm, message, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getListOrderUser, getBooks, deleteOrder, putBook } from '../../../../slice/bookSlice'
const Order = () => {
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [listDetail, setListDetail] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false);
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
    const confirm = async (e, detail) => {
        setIsLoading(true)
        await listBook.map((item) => {
            detail.map((book, index) => {
                if (item.id === book.bookId) {
                    setTimeout(async () => {
                        await dispatch(putBook({
                            categoryId: item.categoryId,
                            id: item.id,
                            bookName: item.bookName,
                            supplier: item.supplier,
                            publisher: item.publisher,
                            publishYear: item.publishYear,
                            author: item.author,
                            bookLayout: item.bookLayout,
                            language: item.language,
                            quantityPage: item.quantityPage,
                            rateStar: item.rateStar,
                            description: item.description,
                            imagesBook: item.imagesBook,
                            quantityBook: item.quantityBook + book.quantityOrder,
                            price: item.price,
                            realPrice: item.realPrice,
                        }))
                    }, 800 * index);
                }
            })
        })
        setTimeout(async () => {
            await dispatch(deleteOrder(e))
            await dispatch(getListOrderUser(isUserLogin))
            message.success('X??a th??nh c??ng');
            setIsLoading(false)
        }, detail.length * 1000);
    }
    function cancel(e) {
    }
    return (
        <>
            <Spin spinning={isLoading} delay={50} size="large">
                <div className="order--table">
                    <div className="admin-list-book-content-1">
                        <table className="table" style={{ fontSize: '13px' }}>
                            <thead>
                                <th>M?? ??H</th>
                                <th>T??n KH</th>
                                <th>?????a ch???</th>
                                <th>Email</th>
                                <th>S??? ??i???n tho???i</th>
                                <th>T???ng ti???n</th>
                                <th>Ng??y ?????t</th>
                                <th>T??nh tr???ng</th>
                                <th>Chi ti???t</th>
                                <th>H???y</th>
                            </thead>
                            {listOrderUser.map((item, index, arr) => {
                                return <tr>
                                    <td data-label="M?? ??H :">{item.id}</td>
                                    <td data-label="T??n KH :">{item.fullName}</td>
                                    <td data-label="?????a ch??? :">{item.address}</td>
                                    <td data-label="Email :">{item.email}</td>
                                    <td data-label="S??? ??i???n tho???i:">{item.phoneNumber}</td>
                                    <td data-label="total :">{item.bill}</td>
                                    <td data-label="Ng??y ?????t:">{item.bookingDate}</td>
                                    <td data-label="T??nh tr???ng :">{item.status}</td>
                                    <td data-label="Chi ti???t :" onClick={() => showModal(item.detailOrder)}><FileTextOutlined /></td>
                                    <td>{item.status === "Ch??? duy???t" ? <Popconfirm placement="topRight"
                                        title="B???n c?? mu???n x??a kh??ng ?"
                                        onConfirm={() => confirm(item.id, item.detailOrder)}
                                        onCancel={cancel}
                                        okText="C??"
                                        cancelText="Kh??ng"
                                    >
                                        <CloseCircleOutlined />
                                    </Popconfirm> : null}</td>
                                </tr>
                            })}
                        </table>
                    </div>
                </div>
            </Spin>
            {listOrderUser.map((item, index) => {
                return item.detailOrder.map((e, orderIndex, arr) => {
                    return listBook.map((book) => {
                        if (book.id === e.bookId) {
                            return <div className="order-phone">
                                <div className="order-phone--content">
                                    <div className="order-phone--content__container">
                                        <p>M?? ??H</p>
                                        <p>{item.id}</p>
                                    </div>
                                    <div className="order-phone--content__container--title">
                                        <p>T??n KH</p>
                                        <p>{item.fullName}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>S??T</p>
                                        <p>{item.phoneNumber}</p>
                                    </div>
                                    <div className="order-phone--content__container--title">
                                        <p>?????a ch???</p>
                                        <p>{item.address}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>Ng??y ??H</p>
                                        <p>{item.bookingDate}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>T???ng ti???n</p>
                                        <p>{item.bill}</p>
                                    </div>
                                    <div className="order-phone--content__container">
                                        <p>T??nh tr???ng</p>
                                        <p>{item.status}</p>
                                    </div>
                                </div>
                                <div className="order-phone--cancel">
                                    <FileTextOutlined className="cart-item--remove__icon" onClick={() => showModal(item.detailOrder)} />
                                </div>
                                <div className="order-phone--cancel">
                                    {item.status === "Ch??? duy???t" ? <Popconfirm placement="topRight"
                                        title="B???n c?? mu???n x??a kh??ng ?"
                                        onConfirm={() => confirm(item.id)}
                                        onCancel={cancel}
                                        okText="C??"
                                        cancelText="Kh??ng"
                                    >
                                        <CloseCircleOutlined />
                                    </Popconfirm> : null}
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
                                <th>T??n s??ch</th>
                                <th>S??? l?????ng</th>
                                <th>Gi??</th>
                            </thead>
                            {listDetail.map((item, index, arr) => {
                                return listBook.map((e) => {
                                    if (e.id === item.bookId) {
                                        return <tr>
                                            <td >{e.bookName}</td>
                                            <td >{item.quantityOrder}</td>
                                            <td >{item.total}</td>
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