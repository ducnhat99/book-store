import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, Modal, Popover } from 'antd';
import bell from '../../../images/bell.svg'
import cart from '../../../images/cart.svg'
import loginLogo from '../../../images/login.svg'
import Login from './Login'
import Notification from './Notification';
import CartNotification from './CartNotification';

const Navigation = () => {
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
    const bellContent = (
        <>
            <Notification />
            <Notification />
            <div className="btn--more-notification">
                <Button>Xem tất cả thông báo</Button>
            </div>
        </>
    );
    const cartContent = (
        <>
            <CartNotification />
            <CartNotification />
            <div className="btn--more-notification">
                <Button>Xem tất cả</Button>
            </div>
        </>
    );
    return (
        <div className="navigation-container">
            <Popover content={bellContent} placement="bottomRight">
                <div className="navigation-item">
                    <img className="navigation-img" src={bell}></img>
                    <p>Thông báo</p>
                </div>
            </Popover>
            <Popover content={cartContent} placement="bottomRight">
                <div className="navigation-item">
                    <img className="navigation-img" src={cart}></img>
                    <p>Giỏ hàng</p>
                </div>
            </Popover>
            <div className="navigation-item" onClick={showModal}>
                <img className="navigation-img" src={loginLogo}></img>
                <p>Đăng nhập</p>
            </div>
            <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={600} className="modal__login">
                <Login handleCancel={handleCancel} />
            </Modal>
        </div>
    )
}

export default Navigation