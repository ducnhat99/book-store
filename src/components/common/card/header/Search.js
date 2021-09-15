import { Input, Space, notification } from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
const { Search } = Input;
const openNotificationWithIcon = type => {
    notification[type]({
        description:
            'Vui lòng nhập từ khóa tìm kiếm',
    });
};
const SearchItem = () => {
    const history = useHistory()
    const [valueSearch, setValueSearch] = React.useState('')
    const handleSearch = (value) => {
        valueSearch.trim() ?
            history.push({
                pathname: `/search`,
                state: { valueSearch: valueSearch }
            })
            : openNotificationWithIcon('warning')
    }
    return (
        <>
            <Space direction="vertical" className="search-container" bordered={false}>
                <Search onSearch={(value) => handleSearch(value)} value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} size="large" placeholder="Tìm kiếm sản phẩm mong muốn" className="search" enterButton />
            </Space>
        </>
    )
}

export default SearchItem
    // ? ${ valueSearch }