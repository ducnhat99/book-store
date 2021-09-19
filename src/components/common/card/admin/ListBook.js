import * as React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import images from '../../../../images/humble.jpg';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Select, Input, Space, Button } from 'antd';
import { getInputClassName } from 'antd/lib/input/Input';
import { getBooks, getCategory } from '../../../../slice/bookSlice';
import { useEffect } from 'react';
import CartListBook from './CartListBook';
const { Search } = Input;

const ListBook = () => {
  const history = useHistory();
  const { Option } = Select;
  const pageLimit = 12;
  const [pageSlice, setPageSlice] = React.useState(0);
  const handleChange = (page, pageSize) => {
    setPageSlice((page - 1) * pageSize);
  };

  const dispatch = useDispatch();
  let listBook = useSelector((state) => state.book.listBook);
  const listCategory = useSelector((state) => state.book.listCategory);
  const status = useSelector((state) => state.book.status);

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getCategory());
  }, [dispatch]);

  listBook = [...listBook];
  const renderlistBookAdmin = (data) => {
    if (!data || data.length === 0)
      return (
        <div class="containerNull">Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.</div>
      );

    return data.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
      return listCategory.map((categoryItem) => {
        if (categoryItem.id === item.categoryId) {
          return (
            <CartListBook
              id1={item.bookId}
              categoryId1={item.categoryId}
              bookName1={item.bookName}
              author1={item.author}
              publishYear1={item.publishYear}
              quantityBook1={item.quantityBook}
              price1={item.price}
            />
          );
        }
      });
    });
  };

  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN SÁCH</h2>
      </div>
      <div className="admin-list-search">
        <Search
          // value={valueSearch}
          placeholder="input search text"
          className="input_search_text"
          style={{ width: 200 }}
        />

        <Select
          defaultValue="Sắp xếp theo"
          className="admin-list-book_select"
          style={{ width: 150 }}
          // onChange={handleChangeSelect}
        >
          <Option value="a-z">Sắp xếp từ A-Z</Option>
          <Option value="z-a">Sắp xếp từ Z-A</Option>
        </Select>
        <Button type="primary" onClick={() => history.push('/admin/addbook')}>
          Thêm sách
        </Button>
      </div>
      <div className="admin-list-book-content">
        <table className="table">
          <tr>
            <thead>
              <th className="admin-list-book-id">Mã sách</th>
              <th className="admin-list-book-id">Mã danh mục</th>
              <th className="admin-list-book">Tên sách</th>
              <th className="admin-list-book-author">Tên tác giả</th>
              <th className="admin-list-book-price">Năm XB</th>
              <th className="admin-list-book-number">Số lượng</th>
              <th className="admin-list-book-price">Giá</th>
              <th className="admin-list-book-number">Chỉnh sửa</th>
              <th className="admin-list-book-number">Xóa</th>
            </thead>
            {renderlistBookAdmin(listBook)}
          </tr>
        </table>
      </div>
      <div className="admin-list-book_pagination" style={{ marginBottom: '40px' }}>
        {listBook.length > 12 ? (
          <Pagination
            defaultCurrent={1}
            total={listBook.length}
            onChange={handleChange}
            pageSize={pageLimit}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ListBook;
