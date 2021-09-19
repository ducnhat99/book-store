import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SmileOutlined } from '@ant-design/icons';
import { Pagination, Select, Input, Space, Button, Upload, message, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { isEmpty } from 'validator';
import { getListUser, getBooks, getListOrder, addOrder } from '../../../../slice/bookSlice'
import ROUTE from "../../../../constants/Router"

const AddOrder = () => {
    const history = useHistory();
    const { Option } = Select;
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.book.listUsers)
    const listBook = useSelector(state => state.book.listBook)
    const listOrder = useSelector(state => state.book.listOrder)
    const [user, setUser] = React.useState([])
    const [userId, setUserId] = React.useState(-1)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [payments, setPayments] = React.useState('Trực tiếp');
    const [status, setStatus] = React.useState('Đang xử lý');
    const [phone, setPhone] = React.useState('')
    const [quantity, setQuantity] = React.useState('')
    const [book, setBook] = React.useState(-1)
    const [validationMsg, setValidationMsg] = React.useState({});
    const [address, setAddress] = React.useState('')
    const orderId = Math.max(...listOrder.map(item => item.id))
    useEffect(() => {
        dispatch(getListUser())
        dispatch(getBooks())
        dispatch(getListOrder())
    }, [dispatch])
    const openNotification = () => {
        notification.open({
            description:
                'Thêm đơn hàng thành công',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    useEffect(() => {
        const list = listUsers.filter((item) => {
            return item.role === 'user'
        })
        setUser(list)
    }, [listUsers])
    const validateAll = () => {
        const msg = {};
        if (userId < 0) {
            msg.userId = 'Xin vui lòng chọn mã người dùng ';
        }
        if (isEmpty(name)) {
            msg.name = 'Xin vui lòng nhập tên người dùng';
        }
        if (isEmpty(email)) {
            msg.email = 'Xin vui lòng nhập Email';
        } else if (!isEmail(email)) {
            msg.email = 'Email của bạn không chính xác';
        }
        if (isEmpty(phone)) {
            msg.phone = 'Xin vui lòng nhập số điện thoại';
        } else if (isNaN(phone)) {
            msg.phone = 'Xin vui lòng nhập lại số điện thoại';
        } else if (!phone.match(/^\d{10}$/)) {
            msg.phone = 'Số điện thoại gồm 10 chữ số'
        }
        if (isEmpty(address)) {
            msg.address = 'Xin vui lòng nhập địa chỉ';
        }
        if (book < 0) {
            msg.book = 'Xin vui lòng chọn sách';
        } if (isEmpty(quantity)) {
            msg.quantity = 'Xin vui lòng nhập số lượng';
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const handleAddOrder = () => {
        const isValid = validateAll();
        if (!isValid) return;
        let total = 0
        listBook.map((e) => {
            if (e.id === book) {
                total = quantity * e.price
            }
        })
        dispatch(addOrder({
            userId: userId,
            id: orderId + 1,
            fullName: name,
            email: email,
            phoneNumber: phone,
            address: address,
            bookingDate: moment().format('DD/MM/YYYY'),
            bill: total + 30000,
            detailOrder: [{
                bookId: book,
                quantityOrder: parseInt(quantity),
                total: total
            }],
            payments: payments,
            status: status
        }))
        history.push(ROUTE.LISTCART)
        openNotification()
    }
    return (
        <div className="admin-list-book" >
            <div className="admin-list-book--header">
                <h2>THÊM ĐƠN HÀNG</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Mã người dùng</label>
                    <Select className="admin-form-edit__select" onChange={(e) => setUserId(e)}>
                        {user.map((item) => {
                            return <Option value={item.id}>{item.id}</Option>
                        })}
                    </Select>
                    <p className="msg--error_list-book">{validationMsg.userId}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Tên khách hàng</label>
                    <Input
                        required
                        name="nameBook"
                        type="text"
                        id="nameBook"
                        value={name}
                        placeholder="Tên khách hàng"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p className="msg--error_list-book">{validationMsg.name}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ email</label>
                    <Input
                        required
                        name="nameBook"
                        type="text"
                        id="nameBook"
                        value={email}
                        placeholder="Địa chỉ email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="msg--error_list-book">{validationMsg.email}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số điện thoại</label>
                    <Input
                        required
                        name="nameAuthor"
                        type="number"
                        id="nameAuthor"
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className="msg--error_list-book">{validationMsg.phone}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ</label>
                    <Input
                        required
                        name="nameAuthor"
                        type="text"
                        id="nameAuthor"
                        placeholder="Địa chỉ"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <p className="msg--error_list-book">{validationMsg.address}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Chọn sách</label>
                    <Select className="admin-form-edit__select" onChange={(e) => setBook(e)}>
                        {listBook.map((item) => {
                            return <Option value={item.id}>{item.bookName}</Option>
                        })}
                    </Select>
                    <p className="msg--error_list-book">{validationMsg.book}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số lượng</label>
                    <Input
                        required
                        name="nameAuthor"
                        type="number"
                        id="nameAuthor"
                        placeholder="Số lượng"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <p className="msg--error_list-book">{validationMsg.quantity}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Thanh toán</label>
                    <Select defaultValue={payments} className="admin-form-edit__select" onChange={(e) => setPayments(e)}>
                        <Option value="Trực tiếp">Trực tiếp</Option>
                        <Option value="Momo">Momo</Option>
                    </Select>
                </div>
                <div className="admin-form-edit--container">
                    <label>Trạng thái</label>
                    <Select defaultValue={status} className="admin-form-edit__select" onChange={(e) => setStatus(e)}>
                        <Option value="Chờ duyệt">Đang xử lý</Option>
                        <Option value="Đang giao hàng">Đang giao hàng</Option>
                    </Select>
                </div>
            </form>
            <div className="admin-form-edit--btn" >
                <Button type="primary" onClick={handleAddOrder}>Xác nhận</Button>
            </div>
        </div >
    )
}
export default AddOrder