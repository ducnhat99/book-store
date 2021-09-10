import React from 'react';
import { Form, Input, Button, Select, DatePicker, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';

const Register = (props) => {
  const { Option } = Select;

  const [emailInput, setEmailInput] = React.useState('');
  const [passInput, setPassInput] = React.useState('');
  const [rePassInput, setRePassInput] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(emailInput)) {
      msg.emailInput = 'Xin vui lòng nhập Email';
    } else if (!isEmail(emailInput)) {
      msg.emailInput = 'Email của bạn không chính xác';
    }

    if (isEmpty(passInput)) {
      msg.passInput = 'Xin vui lòng nhập mật khẩu';
    } else if (passInput.length < 8) {
      msg.passInput = 'Mật khẩu phải trên 8 kí tự';
    }
    if (isEmpty(rePassInput)) {
      msg.rePassInput = 'Xin vui lòng nhập mật khẩu';
    } else if (rePassInput.length < 8) {
      msg.rePassInput = 'Mật khẩu phải trên 8 kí tự';
    } else if (rePassInput != passInput) {
      msg.rePassInput = 'Mật khẩu chưa chính xác';
    }

    if (isEmpty(phone)) {
      msg.phone = 'Xin vui lòng nhập số điện thoại';
    } else if (isNaN(phone)) {
      msg.phone = 'Xin vui lòng nhập lại số điện thoại';
    }

    if (isEmpty(userName)) {
      msg.userName = 'Xin vui lòng nhập họ và tên ';
    } else if (!isNaN(userName)) {
      msg.userName = 'Xin vui lòng nhập lại họ và tên';
    }

    if (isEmpty(address)) {
      msg.address = 'Xin vui lòng nhập địa chỉ';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleOnSubmit = () => {
    const isValid = validateAll();
    if (!isValid) return;

    // if (userValue === 'user' && passValue === 'user') {
    //   dispatch(isLogged());
    //   props.handleCancel();
    // }
    // if (userValue === 'admin' && passValue === 'admin') {
    //   history.push('/admin');
    //   props.handleCancel();
    // }
  };
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
            type="text"
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
          <Select defaultValue="Nam" className="register__input__main">
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
            <DatePicker />
          </Space>
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
          {/* <Select defaultValue="Đà Nẵng" className="register__input__main">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select> */}
        </div>
      </div>
      <div className="register-container">
        {/* <div className="register__input" >
          <label>Quận/Huyện</label>
          <Select defaultValue="Thanh Khê" className="register__input__main">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div>
        <div className="register__input" >
          <label>Xã/Phường</label>
          <Select defaultValue="An Khê" className="register__input__main">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div> */}
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
