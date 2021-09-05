import React from 'react';
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
import '../../../styles/nav-bar-admin.css';

const NavBarAdmin = () => {
  const { SubMenu } = Menu;

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div style={{ width: 250, padding: '24px' }} className="mobileHidden">
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
          <div style={{ margin: ' 30px 0 30px 20px' }}>
            <Menu.Item key="" icon={<FundProjectionScreenOutlined />}>
              Dasboard Kit
            </Menu.Item>
          </div>

          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Qverview
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Tickets
          </Menu.Item>
          <Menu.Item key="3" icon={<BulbOutlined />}>
            Idears
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Contacts
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Agents
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            Articles
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingFilled />}>
            Settings
          </Menu.Item>
          <Menu.Item key="8" icon={<UserOutlined />}>
            Subscription
          </Menu.Item>

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

      <div style={{ width: 250, padding: '24px' }} className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
          Menu
        </Button>

        <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
          <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
            <div style={{ margin: ' 30px 0 30px 20px' }}>
              <Menu.Item key="" icon={<FundProjectionScreenOutlined />}>
                Dasboard Kit
              </Menu.Item>
            </div>

            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Qverview
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Tickets
            </Menu.Item>
            <Menu.Item key="3" icon={<BulbOutlined />}>
              Idears
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              Contacts
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              Agents
            </Menu.Item>
            <Menu.Item key="6" icon={<ContainerOutlined />}>
              Articles
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingFilled />}>
              Settings
            </Menu.Item>
            <Menu.Item key="8" icon={<UserOutlined />}>
              Subscription
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBarAdmin;
