import '../../styles/header-admin.scss'
import LogoAdmin from '../common/card/admin/LogoAdmin'
import SearchAdmin from '../common/card/admin/SearchAdmin'
import InfoAdmin from '../common/card/admin/InfoAdmin'
import menu from "../../images/menu.svg"
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
import '../../styles/nav-bar-admin.css';
const HeaderAdmin = () => {
    const history = useHistory()
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="header-admin">
            <div className="container">
                <div className="header-admin-menu" onClick={showDrawer}>
                    <img src={menu}></img>
                </div>
                <div className="header-admin-logo">
                    <LogoAdmin />
                </div>
                {/* <div className="header-admin-search">
                    <SearchAdmin />
                </div> */}
                <div className="header-admin-navigation">
                    <InfoAdmin />
                </div>
            </div>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" style={{ width: '100%', height: '100%' }}>
                    <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => { history.push("/admin/home"); onClose() }}>
                        Trang chủ
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => { history.push("/admin/listbook"); onClose() }}>
                        Quản lý sách
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BulbOutlined />} onClick={() => { history.push("/admin/listcart"); onClose() }}>
                        Quản lý đơn hàng
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined />} onClick={() => { history.push("/admin/listuser"); onClose() }}>
                        Quản lý người dùng
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />} onClick={() => { history.push("/admin/adduser"); onClose() }}>
                        Thêm người dùng
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ContainerOutlined />} onClick={() => { history.push("/admin/addbook"); onClose() }}>
                        Thêm sách
                    </Menu.Item>
                    <Menu.Item key="7" icon={<SettingFilled />} onClick={() => { history.push("/admin/listcategory"); onClose() }}>
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
            </Drawer>
        </div>
    )
}

export default HeaderAdmin