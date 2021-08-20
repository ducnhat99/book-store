import { Input, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../../styles/search.css'
const { Search } = Input;
const SearchItem = () => {
    return (
        <>
            <Space direction="vertical">
                <Search size="large" placeholder="Tìm kiếm sản phẩm mong muốn" className="search" style={{ width: 400 }} enterButton />
            </Space>
        </>
    )
}

export default SearchItem