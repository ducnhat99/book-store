import { Form, Input, Button, Select, DatePicker, Space } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../../styles/register.css';

const Register = (props) => {
  const { Option } = Select;
  return (
    <form id="register" className="register-form">
      <div className="register-container">
        <div className="register__input">
          <label>Email</label>
          <Input placeholder="Nhập email" className="register__input__main" />
        </div>
        <div className="register__input">
          <label>Số điện thoại</label>
          <Input placeholder="Nhập số điện thoại" className="register__input__main" />
        </div>
      </div>
      <div className="register-container">
        <div className="register__input">
          <label>Mật khẩu</label>
          <Input.Password placeholder="Nhập mật khẩu" className="register__input__main" />
        </div>
        <div className="register__input">
          <label>Nhập lại mật khẩu</label>
          <Input.Password placeholder="Nhập lại mật khẩu" className="register__input__main" />
        </div>
      </div>
      <div className="register-container">
        <div className="register__input">
          <label>Họ và tên</label>
          <Input placeholder="Nhập họ và tên" className="register__input__main" />
        </div>
        <div className="register__input" >
          <label>Giới tính</label>
          <Select defaultValue="Nam" className="register__input__main">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div>
      </div>
      <div className="register-container">
        <div className="register__input" >
          <label>Sinh nhật</label>
          <Space direction="vertical" width={500} className="register__input__main">
            <DatePicker />
          </Space>
        </div>
        <div className="register__input">
          <label>Nhập địa chỉ</label>
          <Input placeholder="Nhập địa chỉ" className="register__input__main" />
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
        <Button type="primary" className="register__btn__main">
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
