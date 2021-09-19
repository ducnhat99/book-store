import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import images from '../../../../images/humble.jpg';
import { useHistory } from 'react-router-dom';
import { Pagination, Select, Input, Space, Button, Popconfirm, message } from 'antd';
import React, { useEffect } from 'react';
import { getBooks, getCategory, deleteBook } from '../../../../slice/bookSlice'
import { useSelector, useDispatch } from 'react-redux'
const ListBook = () => {
  const history = useHistory();
  const { Option } = Select;
  const { Search } = Input;
  const [valueSearch, setValueSearch] = React.useState('')
  const [listRender, setListRender] = React.useState([])
  const listBook = useSelector(state => state.book.listBook)
  const listCategory = useSelector(state => state.book.listCategory)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getBooks())
  }, [dispatch])
  useEffect(() => {
    const list = [...listBook]
    setListRender(list)
  }, [listBook])
  const pageLimit = 10;
  const [pageSlice, setPageSlice] = React.useState(0)
  const handleChange = (page, pageSize) => {
    setPageSlice((page - 1) * pageSize)
  }
  function confirm(e) {
    dispatch(deleteBook(e))
    console.log(e)
    message.success('Xóa thành công');
  }

  function cancel(e) {
  }
  const handleSortBook = (e) => {
    if (e === 'new') {
      let list = [...listRender]
      list.sort((a, b) => {
        return a.id - b.id
      })
      setListRender(list)
    }
    if (e === 'old') {
      let list = [...listRender]
      list.sort((a, b) => {
        return b.id - a.id
      })
      setListRender(list)
    }
    if (e === "z-a") {
      let list = [...listRender]
      list.sort(((a, b) => (b.bookName < a.bookName) ? -1 : 1))
      setListRender(list)
    }
    if (e === "a-z") {
      let list = [...listRender]
      list.sort(((a, b) => (a.bookName < b.bookName) ? -1 : 1))
      setListRender(list)
    }
  }
  // const handleSearchBook = () => {
  //   console.log(valueSearch)
  //   if (valueSearch) {
  //     console.log("🚀 ~ file: ListBook.js ~ line 68 ~ list ~ listBook", listBook)
  //     const list = listBook.filter((item) => {
  //       return (item.bookName.includes(valueSearch.toLowerCase().trim()) ||
  //         item.author.includes(valueSearch.toLowerCase().trim())
  //       )
  //     })
  //     // setListRender(list)
  //   }
  //   else {
  //     // setListRender(listRender)
  //   }
  // }
  const handleSearchBook = () => {
    if (valueSearch) {
      const list = listBook.filter((item) => {
        return (item.bookName === valueSearch.trim()) ||
          item.author === valueSearch.trim()
      })
      setListRender(list)
    }
    else {
      setListRender(listBook)
    }
  }
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN SÁCH</h2>
      </div>
      <div className="admin-list-search">
        <Search
          placeholder="input search text"
          className="input_search_text"
          value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} onSearch={handleSearchBook}
        />
        <Select
          defaultValue="Sắp xếp theo"
          className="admin-list-book_select"
          style={{ width: 150 }}
          onChange={(e) => handleSortBook(e)}
        >
          <Option value="a-z">Sắp xếp tên sách từ A-Z</Option>
          <Option value="z-a">Sắp xếp tên sách từ Z-A</Option>
          <Option value="new">Mới nhất</Option>
          <Option value="old">Cũ nhất</Option>
        </Select>
        <Button type="primary" onClick={() => history.push('/admin/addbook')}>
          Thêm sách
        </Button>
      </div>
      <div className="admin-list-book-content">
        <table className="table">
          <thead>
            {/* <tr> */}
            <th className="admin-list-book-id">Mã sách</th>
            <th className="admin-list-book-id">Mã danh mục</th>
            <th className="admin-list-book">Tên sách</th>
            <th className="admin-list-book-author">Tên tác giả</th>
            <th className="admin-list-book-number">Số lượng</th>
            <th className="admin-list-book-price">Giá</th>
            <th className="admin-list-book-price">Giá gốc</th>
            <th className="admin-list-book-number">Chỉnh sửa</th>
            <th className="admin-list-book-number">Xóa</th>
            {/* </tr> */}
          </thead>

          {listRender.slice(pageSlice, pageLimit + pageSlice).map((item, index, arr) => {
            return (
              // <tbody>
              <tr>
                <td data-label="Mã sách :">{item.id}</td>
                {listCategory.map((e) => {
                  if (e.id === item.categoryId) {
                    return <td data-label="Mã danh mục :">{e.categoryName}</td>
                  }
                })}
                <td data-label="Tên sách :" className="admin-list-book-name">
                  {item.bookName}
                </td>
                <td data-label="Tên tác giả :">{item.author}</td>
                <td data-label="Số lượng :">{item.quantityBook}</td>
                <td data-label="Giá :">{item.price}</td>
                <td data-label="Giá :">{item.realPrice}</td>
                <td onClick={() => history.push({
                  pathname: '/admin/editbook',
                  state: { listBook: arr[index] }
                })} data-label="Chỉnh sửa">
                  <EditOutlined />
                </td>
                <td data-label="Xóa">
                  <Popconfirm placement="topRight"
                    title="Bạn có muốn xóa không ?"
                    onConfirm={() => confirm(item.id)}
                    onCancel={cancel}
                    okText="Có"
                    cancelText="Không"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </td>
              </tr>
              // </tbody>
            );
          })}
        </table>
      </div>
      <div className="admin-list-book_pagination">
        {
          listRender.length > 10 ? <Pagination defaultCurrent={1} total={listRender.length} onChange={handleChange} pageSize={pageLimit} /> : null
        }
      </div>
    </div>
  );
};

export default ListBook;
