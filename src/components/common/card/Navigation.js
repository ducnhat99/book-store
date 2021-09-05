import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Modal, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import bell from '../../../images/bell.svg';
import cart from '../../../images/cart.svg';
import loginLogo from '../../../images/login.svg';
import userLogo from '../../../images/user.svg'
import settingLogo from '../../../images/setting.svg'
import signout from '../../../images/signout.svg'
import Login from './Login';
import CartNotification from './CartNotification';
import NotificationHover from './NotificationHover';
import { isLogged, isSignOut } from "../../../slice/bookSlice"
import {
  UserOutlined
} from '@ant-design/icons';

const Navigation = () => {
  const dispatch = useDispatch()
  const isUserLogin = useSelector(state => state.book.isUserLogin)
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClickCustomer = () => {
    isUserLogin ? history.push("/customer") : showModal()
  }
  const handleClickCart = () => {
    isUserLogin ? history.push("/cart") : showModal()
  }
  const bellContent = (
    isUserLogin ?
      <div>
        <NotificationHover />
        <NotificationHover />
        <div className="btn--more-notification">
          <Button onClick={() => history.push("/customer")}>Xem tất cả thông báo</Button>
        </div>
      </div> :
      <div className="bell-user--local">
        <div className="bell-user--local__images">
          <img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg' alt="login"></img>
          <p>Vui lòng đăng nhập để xem thông báo</p>
          <Button onClick={showModal}>Đăng nhập</Button>
        </div>
      </div>
  );
  const cartContent = (
    isUserLogin ?
      <div>
        <CartNotification />
        <CartNotification />
        <div className="btn--more-notification">
          <Button onClick={() => { history.push("/cart") }}>Xem tất cả</Button>
        </div>
      </div> :
      <div className="bell-user--local">
        <div className="bell-user--local__images">
          <img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg' alt="login"></img>
          <p>Vui lòng đăng nhập để xem giỏ hàng</p>
          <Button onClick={showModal}>Đăng nhập</Button>
        </div>
      </div>
  );
  const userContent = (
    <div className="navigation--user">
      <div className="navigation--user--info">
        <Link to="/customer">
          <img src={settingLogo} alt="setting logo"></img>
          <p>Bảng điều khiển của khách hàng</p>
        </Link>
      </div>
      <div className="navigation--user--info">
        <a onClick={() => {
          dispatch(isSignOut())
          history.push("/home")
        }}>
          <img src={signout} alt="setting logo"></img>
          <p>Đăng xuất</p>
        </a>
      </div>
    </div>
  );
  return (
    <div className="navigation-container">
      <Popover content={bellContent} placement="bottomRight" className="bellDesktop">
        <div className="navigation-item" onClick={handleClickCustomer}>
          <img className="navigation-img" src={bell}></img>
          <p>Thông báo</p>
          {isUserLogin ? <div className="navigation--unseen">
            3
          </div> : null}
        </div>
      </Popover>
      <div className="bellPhone">
        <div className="navigation-item" onClick={handleClickCustomer}>
          <img className="navigation-img" src={bell}></img>
          <p>Thông báo</p>
          {isUserLogin ? <div className="navigation--unseen">
            3
          </div> : null}
        </div>
      </div>
      <Popover content={cartContent} placement="bottomRight" className="bellDesktop">
        <div className="navigation-item" onClick={handleClickCart}>
          <img className="navigation-img" src={cart}></img>
          <p>Giỏ hàng</p>
          {isUserLogin ? <div className="navigation--unseen--cart">
            3
          </div> : null
          }
        </div>
      </Popover>
      <div className="bellPhone">
        <div className="navigation-item" onClick={handleClickCart}>
          <img className="navigation-img" src={cart}></img>
          <p>Giỏ hàng</p>
          {isUserLogin ? <div className="navigation--unseen--cart">
            3
          </div> : null
          }
        </div>
      </div>
      {
        isUserLogin ?
          <Popover content={userContent} placement="bottomRight" trigger="click">
            <div className="navigation-item">
              <img src={userLogo} alt="user-logo" className="navigation-img"></img>
              <p>Tài khoản</p>
            </div>
          </Popover>
          :
          <div className="navigation-item" onClick={showModal}>
            <img className="navigation-img" src={loginLogo}></img>
            <p>Đăng nhập</p>
          </div>
      }
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal__login"
      >
        <Login handleCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default Navigation;
