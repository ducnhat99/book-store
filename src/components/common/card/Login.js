import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/login.css';

const Login = () => {
  return (
    <form>
      <div className="login">
        <span className="login__btn__head">
          <Button value="login" className="login__btn" type="primary" danger>
            Đăng nhập
          </Button>
          <Button value="register" className="login__btn" type="primary" danger>
            Đăng kí
          </Button>
        </span>

        <div className="login__input">
          <label>Số điện thoại/Email</label>
          <Input placeholder="Nhập số điện thoại hoặc email" className="login__input__main" />
        </div>
        <div className="login__input">
          <label>Mật khẩu</label>
          <Input.Password placeholder="Nhập mật khẩu" className="login__input__main" />
        </div>

        <div style={{ float: 'right', marginRight: '25px', color: 'red' }}>
          <p>Quên mật khẩu</p>
        </div>

        <br />
        <div className="login__btn__all">
          <Button type="primary" className="login__btn__main">
            Đăng nhập
          </Button>
          <br />
          <Button danger className="login__btn__main">
            Bỏ qua
          </Button>
          <br />
          <Button type="primary" block className="login__btn__main">
            Đăng nhập bằng facebook
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Login;
