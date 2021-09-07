import React from 'react';
import { Tabs } from 'antd';
import NotificationHover from './NotificationHover';
import SaveEditInfor from '../form/SaveEditInfor'
import Order from './Order'
import EditPassword from '../form/EditPassword';

const Notification = () => {
  const { TabPane } = Tabs;
  return (
    <div className="ntf--container">
      <div className="container">
        <Tabs defaultActiveKey="1" className="ntf--main">
          <TabPane tab="Thông báo" key="1" className="ntf--main__tab1">
            <NotificationHover />
            <NotificationHover />
            <NotificationHover />
            <NotificationHover />
          </TabPane>
          <TabPane tab="Đơn hàng" key="2" className="ntf--main__tab1">
            <Order />
          </TabPane>
          <TabPane tab="Thông tin cá nhân" key="3" className="ntf--main__tab1">
            <SaveEditInfor />
          </TabPane>
          <TabPane tab="Đổi mật khẩu" key="4" className="ntf--main__tab1">
            <EditPassword />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
};

export default Notification;
