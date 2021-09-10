import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import Register from './Register';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';
import { isLogged, isSignOut } from '../../../../slice/bookSlice'
import { USERLOGIN } from '../../../../constants/UserLogin';

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userValue, setUserValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');
  const [isLogin, setIsLogin] = React.useState(true);
  const [validationMsg, setValidationMsg] = React.useState({});

  const backgroundLogin = () => {
    if (isLogin) return 'login__btn';
    else {
      return 'register__btn-login';
    }
  };
  const backgroundRegister = () => {
    if (isLogin) return 'login__btn-rgt';
    else {
      return 'register__btn-rgt';
    }
  };
  const handleDisplayLogin = () => {
    if (isLogin) return { display: 'block' };
    else return { display: 'none' };
  };
  const handleDisplayRegister = () => {
    if (isLogin) return { display: 'none' };
    else return { display: 'block' };
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setUserValue(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassValue(value);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(userValue)) {
      msg.email = 'Xin vui lòng nhập Email';
    } else if (!isEmail(userValue)) {
      msg.email = 'Email của bạn không chính xác';
    }

    if (isEmpty(passValue)) {
      msg.password = 'Xin vui lòng nhập mật khẩu';
    } else if (passValue.length < 8) {
      msg.password = 'Mật khẩu phải trên 8 kí tự';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).lenght > 0) return false;
    return true;
  };

  const handleLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;

    if (userValue === 'user' && passValue === 'user') {
      localStorage.setItem(USERLOGIN, JSON.stringify(true))
      window.location.reload(false);
      props.handleCancel();
    }
    if (userValue === 'admin' && passValue === 'admin') {
      history.push('/admin');
      props.handleCancel();
    }
  };

  return (
    <form className="box--login__container">
      <span className="login__btn__head">
        <Button value="login" className={backgroundLogin()} danger onClick={() => setIsLogin(true)}>
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
          <Input
            name="email"
            type="text"
            id="email"
            placeholder="Nhập địa chỉ email"
            value={userValue}
            onChange={onChangeEmail}
            className="login__input__main"
          />
        </div>
        <p className="msg--error_login">{validationMsg.email}</p>

        <div className="login__input">
          <label id="label__password">Mật khẩu</label>
          <Input.Password
            name="password"
            type="text"
            id="password"
            placeholder="Nhập mật khẩu"
            value={passValue}
            onChange={onChangePassword}
            className="login__input__main"
          />
        </div>
        <p className="msg--error_login">{validationMsg.password}</p>

        <div style={{ float: 'right', marginRight: '25px', color: 'red', marginTop: '10px' }}>
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
