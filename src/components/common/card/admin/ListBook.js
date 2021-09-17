import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import images from '../../../../images/humble.jpg';
import { useHistory } from 'react-router-dom';
import { Pagination, Select, Input, Space, Button } from 'antd';
import { getInputClassName } from 'antd/lib/input/Input';

const ListBook = () => {
  const history = useHistory();
  const { Option } = Select;
  const { Search } = Input;
  const listBookAdmin = [
    {
      bookId: 1,
      categoryId: 1,
      title: 'Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn',
      anthor: 'Jeffrey Archer',
      price: '50.500d',
      numberBook: 32,
      yearXB: 2017,
      images: images,
    },
    {
      bookId: 1,
      categoryId: 1,
      title: 'Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn',
      anthor: 'Jeffrey Archer',
      price: '50.500d',
      numberBook: 32,
      yearXB: 2017,
      images: images,
    },
    {
      bookId: 1,
      categoryId: 1,
      title: 'Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn',
      anthor: 'Jeffrey Archer',
      price: '50.500d',
      numberBook: 32,
      yearXB: 2017,
      images: images,
    },
    {
      bookId: 1,
      categoryId: 1,
      title: 'Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn',
      anthor: 'Jeffrey Archer',
      price: '50.500d',
      numberBook: 32,
      yearXB: 2017,
      images: images,
    },
    {
      bookId: 1,
      categoryId: 1,
      title: 'Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn',
      anthor: 'Jeffrey Archer',
      price: '50.500d',
      numberBook: 32,
      yearXB: 2017,
      images: images,
    },
  ];
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN SÁCH</h2>
      </div>
      <div className="admin-list-search">
        <Search
          placeholder="input search text"
          className="input_search_text"
          // style={{ width: 350 }}
        />
        <Select
          defaultValue="Sắp xếp theo"
          className="admin-list-book_select"
          style={{ width: 150 }}
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
          <thead>
            {/* <tr> */}
            <th className="admin-list-book-id">Mã sách</th>
            <th className="admin-list-book-id">Mã danh mục</th>
            <th className="admin-list-book">Tên sách</th>
            <th className="admin-list-book-author">Tên tác giả</th>
            <th className="admin-list-book-price">Năm XB</th>
            <th className="admin-list-book-number">Số lượng</th>
            <th className="admin-list-book-price">Giá</th>
            <th className="admin-list-book-number">Chỉnh sửa</th>
            <th className="admin-list-book-number">Xóa</th>
            {/* </tr> */}
          </thead>

          {listBookAdmin.map((item, index) => {
            return (
              // <tbody>
              <tr>
                <td data-label="Mã sách :">{item.bookId}</td>
                <td data-label="Mã danh mục :">{item.categoryId}</td>
                <td data-label="Tên sách :" className="admin-list-book-name">
                  {item.title}
                </td>
                <td data-label="Tên tác giả :">{item.anthor}</td>
                <td data-label="Năm XB :">{item.yearXB}</td>
                <td data-label="Số lượng :">{item.numberBook}</td>
                <td data-label="Giá :">{item.price}</td>
                <td onClick={() => history.push('/admin/editbook')} data-label="Chỉnh sửa">
                  <EditOutlined />
                </td>
                <td data-label="Xóa">
                  <DeleteOutlined />
                </td>
              </tr>
              // </tbody>
            );
          })}
        </table>
      </div>
      <div className="admin-list-book_pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default ListBook;
