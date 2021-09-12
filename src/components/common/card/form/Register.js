import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Select, DatePicker, Space, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import moment from 'moment';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';
import { getListUser, addUsersApi } from '../../../../slice/bookSlice'

const Register = (props) => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const [emailInput, setEmailInput] = React.useState('');
  const [passInput, setPassInput] = React.useState('');
  const [rePassInput, setRePassInput] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [sex, setSex] = React.useState('Nam')
  const [address, setAddress] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState({});
  const listUsers = useSelector(state => state.book.listUsers)
  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])
  const userIdMax = Math.max(...listUsers.map(item => item.id))
  const setStateNull = () => {
    setEmailInput('')
    setPassInput('')
    setRePassInput('')
    setPhone('')
    setUserName('')
    setBirthday('')
    setAddress('')
  }
  const openNotification = () => {
    notification.open({
      description:
        'Đăng ký tài khoản thành công',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const validateAll = () => {
    const msg = {};
    listUsers.map((item) => {
      if (isEmpty(emailInput)) {
        msg.emailInput = 'Xin vui lòng nhập Email';
      } else if (!isEmail(emailInput)) {
        msg.emailInput = 'Email của bạn không chính xác';
      }

      if (isEmpty(passInput)) {
        msg.passInput = 'Xin vui lòng nhập mật khẩu';
      } else if (passInput.length < 6) {
        msg.passInput = 'Mật khẩu phải trên 6 kí tự';
      }
      if (isEmpty(rePassInput)) {
        msg.rePassInput = 'Xin vui lòng nhập mật khẩu';
      } else if (rePassInput.length < 6) {
        msg.rePassInput = 'Mật khẩu phải trên 6 kí tự';
      } else if (rePassInput != passInput) {
        msg.rePassInput = 'Mật khẩu chưa chính xác';
      }

      if (isEmpty(phone)) {
        msg.phone = 'Xin vui lòng nhập số điện thoại';
      } else if (isNaN(phone)) {
        msg.phone = 'Xin vui lòng nhập lại số điện thoại';
      } else if (!phone.match(/^\d{10}$/)) {
        msg.phone = 'Số điện thoại gồm 10 chữ số'
      }

      if (isEmpty(userName)) {
        msg.userName = 'Xin vui lòng nhập họ và tên ';
      } else if (!isNaN(userName)) {
        msg.userName = 'Xin vui lòng nhập đúng họ và tên';
      }
      if (isEmpty(birthday)) {
        msg.birthDay = 'Xin vui lòng chọn sinh nhật'
      }

      if (isEmpty(address)) {
        msg.address = 'Xin vui lòng nhập địa chỉ';
      }
      if (emailInput === item.email) {
        return msg.emailInput = 'Email này đã tồn tại'
      }
    })
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleOnSubmit = () => {
    const isValid = validateAll();
    if (!isValid) return;
    dispatch(addUsersApi({
      id: userIdMax + 1,
      fullName: userName,
      email: emailInput,
      password: passInput,
      phoneNumber: phone,
      address: address,
      birthDay: birthday,
      sex: sex,
      registerDay: moment().format('DD/MM/YYYY'),
      roll: 'user',
    }))
    openNotification()
    props.handleLogin()
    setStateNull()
  }
  return (
    <form id="register" className="register-form">
      <div className="register-container">
        <div className="register__input">
          <label>Email</label>
          <Input
            name="email"
            type="text"
            id="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Nhập email"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.emailInput}</p>
        </div>
        <div className="register__input">
          <label>Số điện thoại</label>
          <Input
            name="phone"
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nhập số điện thoại"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.phone}</p>
        </div>
      </div>
      <div className="register-container">
        <div className="register__input">
          <label>Mật khẩu</label>
          <Input.Password
            name="password"
            type="text"
            id="password"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
            placeholder="Nhập mật khẩu"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.passInput}</p>
        </div>

        <div className="register__input">
          <label>Nhập lại mật khẩu</label>
          <Input.Password
            name="rePassword"
            type="text"
            id="rePassword"
            value={rePassInput}
            onChange={(e) => setRePassInput(e.target.value)}
            placeholder="Nhập lại mật khẩu"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.rePassInput}</p>
        </div>
      </div>
      <div className="register-container">
        <div className="register__input">
          <label>Họ và tên</label>
          <Input
            required
            name="userName"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nhập họ và tên"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.userName}</p>
        </div>
        <div className="register__input">
          <label>Giới tính</label>
          <Select defaultValue={sex} className="register__input__main" onChange={(e) => setSex(e)}>
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div>
      </div>
      <div className="register-container">
        <div className="register__input">
          <label>Sinh nhật</label>
          <Space direction="vertical" width={500} className="register__input__main">
            <DatePicker onChange={(date, dateString) => setBirthday(dateString)} />
          </Space>
          <p className="msg--error_register">{validationMsg.birthDay}</p>
        </div>
        <div className="register__input">
          <label>Nhập địa chỉ</label>
          <Input
            name="address"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Nhập địa chỉ"
            className="register__input__main"
          />
          <p className="msg--error_register">{validationMsg.address}</p>
        </div>
      </div>
      <div className="register-container">
      </div>
      <div className="register__btn__all">
        <Button onClick={handleOnSubmit} type="primary" className="register__btn__main">
          Xác nhận
        </Button>
        <br />
        <Button danger className="register__btn__main" onClick={props.handleCancel}>
          Bỏ qua
        </Button>
      </div>
    </form>
  );
};

export default Register;
