import { Input, Space } from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
const { Search } = Input;
const SearchAdmin = () => {
    const history = useHistory()
    const [valueSearch, setValueSearch] = React.useState('')
    // const handleSearch = (value) => {
    //     history.push({
    //         pathname: `/search/${valueSearch}`,
    //         state: { valueSearch: valueSearch }
    //     })
    // }
    return (
        <>
            <Space direction="vertical" className="search-container" bordered={false}>
                <Search size="large" placeholder="Tìm kiếm sản phẩm mong muốn" className="search" enterButton />
            </Space>
        </>
    )
}

export default SearchAdmin