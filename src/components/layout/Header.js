import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from "../common/card/header/Logo"
import Search from "../common/card/header/Search"
import Navigation from "../common/card/header/Navigation"
import menu from "../../images/menu.svg"
import { Drawer, Button, Space, Radio } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { getBooks, getCategory } from '../../slice/bookSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const listCategory = useSelector(state => state.book.listCategory)
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

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
                    {listCategory.map((item, index) => {
                        return <Link onClick={onClose} style={{ width: '100%', height: '40px' }} to={{
                            pathname: `/category/${item.id}`,
                            state: { category: item.categoryName }
                        }}><li>{item.categoryName}</li>
                        </Link>
                    })}
                </ul>
            </Drawer>
        </div>
    )
}

export default Header