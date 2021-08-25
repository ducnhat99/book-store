import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import bell from '../../../images/bell.svg'
import cart from '../../../images/cart.svg'
import loginLogo from '../../../images/login.svg'
import Login from './Login'

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
    return (
        <div className="navigation-container">
            <div className="navigation-item">
                <img className="navigation-img" src={bell}></img>
                <p>Thông báo</p>
            </div>
            <div className="navigation-item">
                <img className="navigation-img" src={cart}></img>
                <p>Giỏ hàng</p>
            </div>
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