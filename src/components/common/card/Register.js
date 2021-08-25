import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../../styles/register.css';

const Register = (props) => {
  return (
    <form id="register" className="register">
      <div className="register__input">
        <label>Số điện thoại</label>
        <Input placeholder="Nhập số điện thoại hoặc email" className="register__input__main" />
      </div>
      <div className="register__input">
        <label>Mã xác nhận OTP</label>
        <Input.Password placeholder="6 kí tự" className="register__input__main" />
      </div>

      <div className="register__input">
        <label>Mật khẩu</label>
        <Input.Password placeholder="Nhập mật khẩu" className="register__input__main" />
      </div>

      <div className="register__btn__all">
        <Button type="primary" className="register__btn__main">
          Đăng kí
        </Button>
        <br />
        <Button danger className="register__btn__main" onClick={props.handleCancel}>
          Bỏ qua
        </Button>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '5px' }}>
        <a>Điều khoản dịch vụ và chính sách bảo mật</a>
      </div>
    </form>
  );
};

export default Register;
