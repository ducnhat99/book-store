import React from 'react';
import { Select, Input, Space, Button, DatePicker, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';
import moment from 'moment';
import { getListUser, addUsersApi } from '../../../../slice/bookSlice'

const AddUser = () => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const [emailAdmin, setEmailAdmin] = React.useState('');
  const [passAdmin, setPassAdmin] = React.useState('');
  const [phoneAdmin, setPhoneAdmin] = React.useState('');
  const [userAdmin, setUserAdmin] = React.useState('');
  const [addressAdmin, setAddressAdmin] = React.useState('');
  const [birthday, setBirthday] = React.useState('')
  const [sex, setSex] = React.useState('Nam')
  const [role, setRole] = React.useState('user')
  const [validationMsg, setValidationMsg] = React.useState({});
  const listUsers = useSelector(state => state.book.listUsers)
  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])
  const userIdMax = Math.max(...listUsers.map(item => item.id))
  const validateAll = () => {
    const msg = {};
    listUsers.map((item) => {
      if (isEmpty(emailAdmin)) {
        msg.emailAdmin = 'Xin vui lòng nhập Email';
      } else if (!isEmail(emailAdmin)) {
        msg.emailAdmin = 'Email của bạn không chính xác';
      }

      if (isEmpty(passAdmin)) {
        msg.passAdmin = 'Xin vui lòng nhập mật khẩu';
      } else if (passAdmin.length < 6) {
        msg.passAdmin = 'Mật khẩu phải trên 6 kí tự';
      }

      if (isEmpty(phoneAdmin)) {
        msg.phoneAdmin = 'Xin vui lòng nhập số điện thoại';
      } else if (isNaN(phoneAdmin)) {
        msg.phoneAdmin = 'Xin vui lòng nhập lại số điện thoại';
      } else if (!phoneAdmin.match(/^\d{10}$/)) {
        msg.phoneAdmin = 'Số điện thoại gồm 10 chữ số'
      }

      if (isEmpty(userAdmin)) {
        msg.userAdmin = 'Xin vui lòng nhập họ và tên ';
      } else if (!isNaN(userAdmin)) {
        msg.userAdmin = 'Xin vui lòng nhập lại họ và tên';
      }

      if (isEmpty(addressAdmin)) {
        msg.addressAdmin = 'Xin vui lòng nhập địa chỉ';
      }
      if (emailAdmin === item.email) {
        msg.emailAdmin = 'Email này đã tồn tại'
      }
    })

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const setStateNull = () => {
    setEmailAdmin('')
    setPassAdmin('')
    setPhoneAdmin('')
    setUserAdmin('')
    setBirthday('')
    setAddressAdmin('')
  }
  const openNotification = () => {
    notification.open({
      description:
        'Đăng ký tài khoản thành công',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const handleAddUser = () => {
    const isValid = validateAll();
    if (!isValid) return;
    console.log('a')
    dispatch(addUsersApi({
      id: userIdMax + 1,
      fullName: userAdmin,
      email: emailAdmin,
      password: passAdmin,
      phoneNumber: phoneAdmin,
      address: addressAdmin,
      birthDay: birthday,
      sex: sex,
      registerDay: moment().format('DD/MM/YYYY'),
      role: role,
    }))
    setStateNull()
    openNotification()
  };

  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÊM USER</h2>
      </div>
      <form>
        <div className="admin-form-edit--container">
          <label>Họ và tên</label>
          <Input
            required
            name="userAdmin"
            type="text"
            id="userAdmin"
            value={userAdmin}
            onChange={(e) => setUserAdmin(e.target.value)}
            placeholder="Họ và tên"
          />
          <p className="msg--error_list-book">{validationMsg.userAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Email</label>
          <Input
            name="emailAdmin"
            type="text"
            id="emailAdmin"
            value={emailAdmin}
            onChange={(e) => setEmailAdmin(e.target.value)}
            placeholder="Nhập email"
          />
          <p className="msg--error_list-book">{validationMsg.emailAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Số điện thoại</label>
          <Input
            name="phoneAdmin"
            type="number"
            id="phoneAdmin"
            value={phoneAdmin}
            onChange={(e) => setPhoneAdmin(e.target.value)}
            placeholder="Nhập số điện thoại"
          />
          <p className="msg--error_list-book">{validationMsg.phoneAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Mật khẩu</label>
          <Input
            name="passAdmin"
            type="text"
            id="passAdmin"
            value={passAdmin}
            onChange={(e) => setPassAdmin(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
          <p className="msg--error_list-book">{validationMsg.passAdmin}</p>
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
          <Space direction="vertical" className="admin-form-edit__select" >
            <DatePicker onChange={(date, dateString) => setBirthday(dateString)} />
          </Space>
        </div>
        <div className="admin-form-edit--container">
          <label>Địa chỉ</label>
          <Input
            name="addressAdmin"
            type="text"
            id="addressAdmin"
            value={addressAdmin}
            onChange={(e) => setAddressAdmin(e.target.value)}
            placeholder="Nhập địa chỉ"
          />
          <p className="msg--error_list-book">{validationMsg.addressAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Chức vụ</label>
          <Select defaultValue={role} className="admin-form-edit__select" onChange={(e) => setRole(e)}>
            <Option value="user">Khách hàng</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </div>
      </form>
      <div className="admin-form-edit--btn" onClick={handleAddUser}>
        <Button type="primary">Xác nhận</Button>
      </div>
    </div>
  );
};

export default AddUser;
