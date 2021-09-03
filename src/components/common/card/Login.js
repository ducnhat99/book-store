import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/login.css';
import Register from './Register';
import { isLogged, isSignOut } from '../../../slice/bookSlice'

const Login = (props) => {
  const dispatch = useDispatch()
  const [userValue, setUserValue] = React.useState('')
  const [passValue, setPassValue] = React.useState('')
  const [isLogin, setIsLogin] = React.useState(true);
  const backgroundLogin = () => {
    if (isLogin) return 'login__btn'
    else {
      return 'register__btn-login'
    }
  };
  const backgroundRegister = () => {
    if (isLogin) return 'login__btn-rgt'
    else {
      return 'register__btn-rgt'
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
  const handleLogin = () => {
    if (userValue === "user" && passValue === "user") {
      dispatch(isLogged())
      props.handleCancel()
    }
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
          <Input placeholder="Nhập địa chỉ email" value={userValue} onChange={(e) => setUserValue(e.target.value)} className="login__input__main" />
        </div>
        <div className="login__input">
          <label id="label__password">Mật khẩu</label>
          <Input.Password placeholder="Nhập mật khẩu" value={passValue} onChange={(e) => setPassValue(e.target.value)} className="login__input__main" />
        </div>
        <div style={{ float: 'right', marginRight: '25px', color: 'red' }}>
          <p>Quên mật khẩu ?</p>
        </div>
        <br />
        <div className="login__btn__all">
          <Button type="primary" className="login__btn__main" onClick={handleLogin}>
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
