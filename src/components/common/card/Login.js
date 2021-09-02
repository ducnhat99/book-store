import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/login.css';
import Register from './Register';

const Login = (props) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const backgroundLogin = () => {
    if (isLogin) return 'login__btn'
    // background: "#ff4d4f", margin: '10px 0 0 15px', color: "#fff"
    else {
      return 'register__btn-login'
      // background: "#fff", color: "#ff4d4f", margin: '10px 0 0 15px', width: '45%'
    }
  };
  const backgroundRegister = () => {
    if (isLogin) return 'login__btn-rgt'
    // background: "#fff", margin: '10px 15px 0 0', color: "#ff4d4f"
    else {
      return 'register__btn-rgt'
      // background: "#ff4d4f", color: "#fff", margin: '10px 15px 0 0', width: '45%'
    }
  };
  const handleDisplayLogin = () => {
    if (isLogin) return { display: 'block' };
    else return { display: 'none' };
  };
  const handleDisplayRegister = () => {
    if (isLogin) return { display: 'none' }
    else return { display: 'block' }
  }
  return (
    <form className="box--login__container">
      <span className="login__btn__head">
        <Button
          value="login"
          className={backgroundLogin()}
          danger
          onClick={() => setIsLogin(true)}
        >
          Đăng nhập
        </Button>
        <Button
          value="register"
          className={backgroundRegister()}
          danger
          onClick={() => setIsLogin(false)}
        >
          Đăng ký
        </Button>
      </span>

      <div className="login" style={handleDisplayLogin()}>
        <div className="login__input">
          <label>Địa chỉ Email</label>
          <Input placeholder="Nhập địa chỉ email" className="login__input__main" />
        </div>
        <div className="login__input">
          <label id="label__password">Mật khẩu</label>
          <Input.Password placeholder="Nhập mật khẩu" className="login__input__main" />
        </div>
        <div style={{ float: 'right', marginRight: '25px', color: 'red' }}>
          <p>Quên mật khẩu ?</p>
        </div>
        <br />
        <div className="login__btn__all">
          <Button type="primary" className="login__btn__main">
            Đăng nhập
          </Button>
          <br />
          <Button danger className="login__btn__main" onClick={props.handleCancel}>
            Bỏ qua
          </Button>
          <br />
          <Button type="primary" block className="login__btn__main">
            Đăng nhập bằng facebook
          </Button>
        </div>
      </div>

      <div style={handleDisplayRegister()}>
        <Register handleCancel={props.handleCancel} />
      </div>
    </form>
  );
};
export default Login;
