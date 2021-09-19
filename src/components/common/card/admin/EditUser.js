import React, { useEffect } from 'react';
import moment from 'moment';
import { Select, Input, Space, Button, DatePicker, notification } from 'antd';
import { isEmpty } from 'validator';
import { SmileOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { useHistory } from 'react-router-dom';
import { putUser } from '../../../../slice/bookSlice'
const EditUser = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { Option } = Select;
    const [pass, setPass] = React.useState(props.location.state.info.password)
    const [name, setName] = React.useState(props.location.state.info.fullName)
    const [phone, setPhone] = React.useState(props.location.state.info.phoneNumber)
    const [address, setAddress] = React.useState(props.location.state.info.address)
    const [birthday, setBirthday] = React.useState(props.location.state.info.birthDay)
    const [sex, setSex] = React.useState(props.location.state.info.sex)
    const [role, setRole] = React.useState(props.location.state.info.role)
    const [validationMsg, setValidationMsg] = React.useState({});
    const validateAll = () => {
        const msg = {};
        if (isEmpty(pass)) {
            msg.pass = 'Xin vui lòng nhập mật khẩu';
        } else if (pass.length < 6) {
            msg.pass = 'Mật khẩu phải trên 6 kí tự';
        }
        if (isEmpty(phone)) {
            msg.phone = 'Xin vui lòng nhập số điện thoại';
        } else if (isNaN(phone)) {
            msg.phone = 'Xin vui lòng nhập lại số điện thoại';
        } else if (!phone.match(/^\d{10}$/)) {
            msg.phone = 'Số điện thoại gồm 10 chữ số'
        }

        if (isEmpty(name)) {
            msg.name = 'Xin vui lòng nhập họ và tên ';
        } else if (!isNaN(name)) {
            msg.name = 'Xin vui lòng nhập lại họ và tên';
        }

        if (isEmpty(address)) {
            msg.address = 'Xin vui lòng nhập địa chỉ';
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
    const handleChangeUser = () => {
        const isValid = validateAll();
        if (!isValid) return;
        dispatch(putUser({
            id: props.location.state.info.id,
            fullName: name,
            email: props.location.state.info.email,
            password: pass,
            phoneNumber: phone,
            address: address,
            birthDay: birthday,
            sex: sex,
            registerDay: props.location.state.info.registerDay,
            role: role
        }))
        openNotification("Chỉnh sửa thông tin thành công")
        history.push("/admin/listuser")
    }
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA USER</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Họ và tên</label>
                    <Input placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.name}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số điện thoại</label>
                    <Input type="number" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.phone}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Mật khẩu</label>
                    <Input.Password type="password" placeholder="Nhập mật khẩu" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.pass}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Giới tính</label>
                    <Select defaultValue={sex} className="admin-form-edit__select" onChange={(e) => setSex(e)}>
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                        <Option value="Khác">Khác</Option>
                    </Select>
                </div>
                <div className="admin-form-edit--container">
                    <label>Sinh nhật</label>
                    <Space direction="vertical" className="admin-form-edit__select">
                        <DatePicker placeholder={birthday} onChange={(date, dateString) => setBirthday(dateString)} />
                    </Space>
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ</label>
                    <Input placeholder="Nhập địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.address}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Chức vụ</label>
                    <Select defaultValue={role} className="admin-form-edit__select" onChange={(e) => setRole(e)}>
                        <Option value="user">Khách hàng</Option>
                        <Option value="admin">Admin</Option>
                    </Select>
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary" onClick={handleChangeUser}>Xác nhận</Button>
            </div>
        </div>
    )
}
export default EditUser