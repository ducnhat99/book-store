import {
    CheckCircleOutlined,
    DeleteOutlined,
    FileTextOutlined,
    EditOutlined,
} from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from 'validator';
import { Pagination, Select, Input, Space, Button, Modal, notification, Popconfirm, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { putOrder, getBooks } from '../../../../slice/bookSlice'
const DetailOrder = (props) => {
    const { Option } = Select;
    const history = useHistory();
    const detail = props.location.state.detailOrder
    const [id, setId] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [addIdBook, setAddIdBook] = React.useState(-1)
    const [addQuantityBook, setAddQuantityBook] = React.useState('')
    const [validationMsg, setValidationMsg] = React.useState({});
    const [listOrder, setListOrder] = React.useState(detail.detailOrder)
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isModalVisible2, setIsModalVisible2] = React.useState(false);
    const listBook = useSelector(state => state.book.listBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
    const showModal = (id, e) => {
        setId(id)
        setNumber(e)
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal2 = (id, e) => {
        setIsModalVisible2(true);
    };
    const handleOk2 = () => {
        setIsModalVisible2(false);
    };

    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };
    const validateAll = () => {
        const msg = {};
        if (addIdBook < 0 || isEmpty(addQuantityBook)) {
            msg.error = 'Vui lòng nhập đầy đủ thông tin';
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const openNotification = (e) => {
        notification.open({
            description:
                e,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    const handleEdit = () => {
        let list = [...listOrder]
        let total = 0
        detail.detailOrder.map((item, index) => {
            if (item.bookId === id) {
                console.log('a')
                return list.splice(index, 1, { bookId: id, quantityOrder: parseInt(number), total: (item.total / item.quantityOrder) * number })
            }
        })
        setListOrder(list)
        list.map((a) => {
            return total += a.total
        })
        dispatch(putOrder({
            userId: props.location.state.detailOrder.userId,
            id: props.location.state.detailOrder.id,
            fullName: props.location.state.detailOrder.fullName,
            email: props.location.state.detailOrder.email,
            phoneNumber: props.location.state.detailOrder.phoneNumber,
            address: props.location.state.detailOrder.address,
            bookingDate: props.location.state.detailOrder.bookingDate,
            bill: total + 30000,
            detailOrder: list,
            payments: props.location.state.detailOrder.payments,
            status: props.location.state.detailOrder.status
        }))
        openNotification('Chỉnh sửa đơn hàng thành công')
        handleCancel()
        history.push("/admin/listcart")
    }
    const handleEditBook = () => {
        const isValid = validateAll();
        if (!isValid) return;
        let list = [...listOrder]
        let total = 0
        listBook.map((item) => {
            if (item.id === addIdBook) {
                return list.push({ bookId: addIdBook, quantityOrder: parseInt(addQuantityBook), total: item.price * addQuantityBook })
            }
        })
        setListOrder(list)
        list.map((a) => {
            return total += a.total
        })
        dispatch(putOrder({
            userId: props.location.state.detailOrder.userId,
            id: props.location.state.detailOrder.id,
            fullName: props.location.state.detailOrder.fullName,
            email: props.location.state.detailOrder.email,
            phoneNumber: props.location.state.detailOrder.phoneNumber,
            address: props.location.state.detailOrder.address,
            bookingDate: props.location.state.detailOrder.bookingDate,
            bill: total + 30000,
            detailOrder: list,
            payments: props.location.state.detailOrder.payments,
            status: props.location.state.detailOrder.status
        }))
        openNotification('Chỉnh sửa đơn hàng thành công')
        handleCancel()
        history.push("/admin/listcart")
    }
    function confirm(e) {
        let list = [...listOrder]
        let total = 0
        if (list.length <= 1) {
            openNotification("Đơn hàng phải có ít nhất 1 sản phẩm")
        }
        else {
            detail.detailOrder.map((item, index) => {
                if (item.bookId === e) {
                    console.log('a')
                    return list.splice(index, 1)
                }
            })
            setListOrder(list)
            list.map((a) => {
                return total += a.total
            })
            dispatch(putOrder({
                userId: props.location.state.detailOrder.userId,
                id: props.location.state.detailOrder.id,
                fullName: props.location.state.detailOrder.fullName,
                email: props.location.state.detailOrder.email,
                phoneNumber: props.location.state.detailOrder.phoneNumber,
                address: props.location.state.detailOrder.address,
                bookingDate: props.location.state.detailOrder.bookingDate,
                bill: total + 30000,
                detailOrder: list,
                payments: props.location.state.detailOrder.payments,
                status: props.location.state.detailOrder.status
            }))
            handleCancel()
            history.push("/admin/listcart")
            message.success('Xóa thành công');
        }
    }

    function cancel(e) {
    }
    return (
        <>
            <div className="admin-list-book">
                <div className="admin-list-book--header">
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                </div>
                <div className="admin-list-search">
                    <div className="input_search_text">
                        <Button type="primary" onClick={showModal2}>Thêm sản phẩm</Button>
                    </div>
                </div>
                <div className="admin-list-book-content-1">
                    <table className="table" style={{ fontSize: '13px' }}>
                        <thead>
                            <th>Tên sách</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </thead>
                        {detail.detailOrder.map((item) => {
                            return listBook.map((e) => {
                                if (item.bookId === e.id) {
                                    return <tr>
                                        <td data-label="Mã ĐH :">{e.bookName}</td>
                                        <td data-label="Tên KH :">{item.quantityOrder}</td>
                                        <td data-label="total :">{item.total}</td>
                                        <td data-label="Chỉnh sửa:" onClick={() => showModal(e.id, item.quantityOrder)}>
                                            <EditOutlined />
                                        </td>
                                        <td data-label="Xóa :">
                                            <Popconfirm placement="topRight"
                                                title="Bạn có muốn xóa không ?"
                                                onConfirm={() => confirm(item.bookId)}
                                                onCancel={cancel}
                                                okText="Có"
                                                cancelText="Không"
                                            >
                                                <DeleteOutlined />
                                            </Popconfirm>
                                        </td>
                                    </tr>
                                }
                            })
                        })}
                    </table>
                </div>
            </div>
            <Modal
                footer={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="modal__login"
                width={250}
            >
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <Input type="number" placeholder="Số lượng" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <Button type="primary" style={{ marginTop: '10px' }} onClick={handleEdit}>Chỉnh sửa đơn hàng</Button>
                </div>
            </Modal>
            <Modal
                footer={null}
                visible={isModalVisible2}
                onOk={handleOk2}
                onCancel={handleCancel2}
                className="modal__login"
                width={250}
            >
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <lable style={{ float: 'left' }}>Chọn sách</lable>
                    <Select className="admin-form-edit__select" style={{ width: '100%' }} onChange={(e) => setAddIdBook(e)}>
                        {listBook.map((item) => {
                            return <Option value={item.id}>{item.bookName}</Option>
                        })}
                    </Select>
                    <lable style={{ float: 'left' }}>Số lượng</lable>
                    <Input type="number" placeholder="Số lượng" value={addQuantityBook} onChange={(e) => setAddQuantityBook(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.error}</p>
                    <Button type="primary" style={{ marginTop: '10px' }} onClick={handleEditBook}>Chỉnh sửa đơn hàng</Button>
                </div>
            </Modal>
        </>
    )
}
export default DetailOrder