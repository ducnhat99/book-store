import React from 'react';
import { Tabs } from 'antd';
import NotificationHover from './NotificationHover';
import Order from './Order'

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
            Coming soon -_-
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
};

export default Notification;
