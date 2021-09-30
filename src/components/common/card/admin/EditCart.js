import { Select, Input, Space, Button, DatePicker, notification } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import images from '../../../../images/humble.jpg';
import { SmileOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { putOrder } from '../../../../slice/bookSlice'
import isEmail from 'validator/lib/isEmail';
import { isEmpty } from 'validator';
import ROUTE from "../../../../constants/Router"
const EditCart = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { Option } = Select;
    const [name, setName] = React.useState(props.location.state.order.fullName)
    const [email, setEmail] = React.useState(props.location.state.order.email)
    const [phone, setPhone] = React.useState(props.location.state.order.phoneNumber)
    const [address, setAddress] = React.useState(props.location.state.order.address)
    const [status, setStatus] = React.useState(props.location.state.order.status)
    const [validationMsg, setValidationMsg] = React.useState({});
    const validateAll = () => {
        const msg = {};
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
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const openNotification = () => {
        notification.open({
            description:
                'Chỉnh sửa đơn hàng thành công',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    const handleEditOrder = () => {
        const isValid = validateAll();
        if (!isValid) return;
        dispatch(putOrder({
            userId: props.location.state.order.userId,
            id: props.location.state.order.id,
            fullName: name,
            email: email,
            phoneNumber: phone,
            address: address,
            bookingDate: props.location.state.order.bookingDate,
            bill: props.location.state.order.bill,
            detailOrder: props.location.state.order.detailOrder,
            payments: props.location.state.order.payments,
            status: status
        }))
        history.push(ROUTE.LISTCART)
        openNotification()
    }
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA ĐƠN HÀNG</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Họ và tên</label>
                    <Input placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.name}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ</label>
                    <Input placeholder="Nhập địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.address}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Email</label>
                    <Input placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.email}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số điện thoại</label>
                    <Input placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.phone}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Trạng thái</label>
                    <Select defaultValue={status} className="admin-form-edit__select" onChange={(e) => setStatus(e)}>
                        <Option value="Chờ duyệt">Chờ duyệt</Option>
                        <Option value="Đang giao hàng">Đang giao hàng</Option>
                        <Option value="Đã nhận hàng">Đã nhận hàng</Option>
                    </Select>
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary" onClick={handleEditOrder}>Xác nhận</Button>
            </div>
        </div>
    )
}
export default EditCart