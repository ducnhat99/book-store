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
            <NotificationHover title={'Mua trọn bộ sách Nguyên Phong giá tốt nhất'} date={'20/09/2021'} content={'Chương trình FirstNews giảm 50% mừng sinh nhật Fahasa. Click xem mua ngay!'} />
            <NotificationHover title={'Sách tiếng anh Zenbooks sale up to 50% '} date={'22/08/2021'} content={'Cơ hội chỉ diễn ra duy nhất sinh nhật tháng 8 này. Click xem mua ngay!'} />
            <NotificationHover title={'Sale sách thả ga, mừng sinh nhật VietBook, Đinh Tị giảm đến 30%'} date={'22/09/2021'} content={'Chương trình từ 13.08 đến 22.08. Click xem mua ngay!'} />
            <NotificationHover title={'"Binh đoàn" sách tâm lý, văn học AZ giá cực tốt giảm đếm 70%'} date={'16/09/2021'} content={'Cơ hội chỉ diễn ra duy nhất sinh nhật tháng 8 này. Click xem mua ngay!'} />
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
