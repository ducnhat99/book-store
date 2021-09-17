import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  SettingFilled,
  UserOutlined,
  BulbOutlined,
  SnippetsOutlined,
  TeamOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const NavBarAdmin = () => {
  const { SubMenu } = Menu;

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const history = useHistory();

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '100%' }} className="mobileHidden">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          style={{ width: '100%', height: '100%' }}
        >
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={() => history.push('/admin/home')}
          >
            Trang chủ
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<DesktopOutlined />}
            onClick={() => history.push('/admin/listbook')}
          >
            Quản lý sách
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<BulbOutlined />}
            onClick={() => history.push('/admin/listcart')}
          >
            Quản lý đơn hàng
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<TeamOutlined />}
            onClick={() => history.push('/admin/listuser')}
          >
            Quản lý người dùng
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />} onClick={() => history.push('/admin/adduser')}>
            Thêm người dùng
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<ContainerOutlined />}
            onClick={() => history.push('/admin/addbook')}
          >
            Thêm sách
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<SettingFilled />}
            onClick={() => history.push('/admin/listcategory')}
          >
            Quản lý danh mục
          </Menu.Item>
          {/* <Menu.Item key="8" icon={<UserOutlined />}>
            Subscription
          </Menu.Item> */}

          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    </div>
  );
};

export default NavBarAdmin;
