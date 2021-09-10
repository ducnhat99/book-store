import { Input, Space } from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
const { Search } = Input;
const SearchItem = () => {
    const history = useHistory()
    const [valueSearch, setValueSearch] = React.useState('')
    const handleSearch = (value) => {
        valueSearch ?
            history.push({
                pathname: `/search`,
                state: { valueSearch: valueSearch }
            })
            : history.push('/home')
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