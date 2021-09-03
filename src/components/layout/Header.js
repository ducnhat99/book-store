import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from "../common/card/Logo"
import Search from "../common/card/Search"
import Navigation from "../common/card/Navigation"
import menu from "../../images/menu.svg"
import { Drawer, Button, Space, Radio } from 'antd';
import 'antd/dist/antd.css';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const category = [
        'Kỹ năng sống',
        'Kinh tế',
        'Lịch sử',
        'Văn học',
        'Từ điển',
        'Tham khảo',
        'Ngoại ngữ',
        'Âm nhạc - mỹ thuật',
        'Tiểu sử - hồi ký',
        'Địa lý',
        'Khoa học ky thuật'
    ]
    return (
        <div className="header">
            <div className="container">
                <div className="header-logo">
                    <Logo />
                </div>
                <div className="header-menu" onClick={showDrawer}>
                    <img src={menu}></img>
                </div>
                <div className="header-search">
                    <Search />
                </div>
                <div className="header-navigation">
                    <Navigation />
                </div>
            </div>
            <Drawer
                title="Danh mục sản phẩm"
                placement="left"
                width={250}
                onClose={onClose}
                visible={visible}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <ul className="sidebar-table">
                    {category.map((item, index) => {
                        return <Link onClick={onClose} style={{ width: '100%', height: '40px' }} to={{
                            pathname: `/category`,
                            state: { category: item }
                        }}><li>{item}</li>
                        </Link>
                    })}
                </ul>
            </Drawer>
        </div>
    )
}

export default Header