import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Input, notification } from 'antd';
import 'antd/dist/antd.css';
import Register from './Register';
import { USERLOGIN } from '../../../../constants/UserLogin';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';
import { isLogged, getListUser } from '../../../../slice/bookSlice'

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userValue, setUserValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');
  const [isLogin, setIsLogin] = React.useState(true);
  const [validationMsg, setValidationMsg] = React.useState({});
  const listUsers = useSelector(state => state.book.listUsers)
  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])
  const openNotification = () => {
    notification.open({
      description:
        'Đăng nhập thành công',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const styleTabLogin = () => {
    if (isLogin) {
      return {
        background: '#ff4d4f',
        color: '#fff'
      }
    }
    else {
      return {
        background: '#fff',
        color: '#ff4d4f'
      }
    }
  }
  const styleLoginRegister = () => {
    if (isLogin) {
      return {
        background: '#fff',
        color: '#ff4d4f'
      }
    }
    else {
      return {
        background: '#ff4d4f',
        color: '#fff'
      }
    }
  }
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

  const handleLogin = () => {
    let msg = {};
    listUsers.map((item) => {
      if (isEmpty(userValue)) {
        msg.email = 'Xin vui lòng nhập Email';
      } else if (!isEmail(userValue)) {
        msg.email = 'Email của bạn không chính xác';
      }
      if (isEmpty(passValue)) {
        msg.password = 'Xin vui lòng nhập mật khẩu';
      } else if (passValue.length < 6) {
        msg.password = 'Mật khẩu phải trên 6 kí tự';
      }
      if (userValue !== item.email && passValue !== item.password) {
        msg.exact = 'Tài khoản hoặc mật khẩu không chính xác'
      }
      if (userValue === item.email && passValue === item.password && item.role === "user") {
        msg.exact = ''
        dispatch(isLogged(item.id))
        history.push('./');
        window.location.reload(false);
        props.handleCancel();
        openNotification()
      }
      if (userValue === item.email && passValue === item.password && item.role === "admin") {
        msg.exact = ''
        props.handleCancel();
        openNotification()
        history.push('/admin');
      }
      setValidationMsg(msg);
      if (Object.keys(msg).lenght > 0) return false;
      return true;
    })
  };

  return (
    <form className="box--login__container">
      <span className="login__btn__head">
        <Button value="login" style={styleTabLogin()} className={backgroundLogin()} danger onClick={() => setIsLogin(true)}>
          Trang đăng nhập
        </Button>
        <Button
          style={styleLoginRegister()}
          value="register"
          className={backgroundRegister()}
          danger
          onClick={() => setIsLogin(false)}
        >
          Trang đăng ký
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
        {validationMsg.password ? <p className="msg--error_login">{validationMsg.password}</p> : <p className="msg--error_login">{validationMsg.exact}</p>}
        <div style={{ float: 'right', marginRight: '25px', color: 'red', marginTop: '10px' }}>
          <p>Quên mật khẩu ?</p>
        </div>
        <br />
        <div className="login__btn__all">
          <Button type="primary" onClick={handleLogin}>
            Đăng nhập
          </Button>
          <Button danger onClick={props.handleCancel}>
            Bỏ qua
          </Button>
        </div>
      </div>

      <div style={handleDisplayRegister()}>
        <Register handleCancel={props.handleCancel} handleLogin={() => setIsLogin(true)} />
      </div>
    </form>
  );
};
export default Login;
