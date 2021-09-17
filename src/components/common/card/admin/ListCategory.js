import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Pagination, Radio, Rate, Select, Button } from 'antd';

const ListCategory = () => {
  const { Option } = Select;
  const category = [
    {
      categoryId: 1,
      categoryName: 'Kỹ năng sống',
    },
    {
      categoryId: 1,
      categoryName: 'Kinh tế',
    },
    {
      categoryId: 1,
      categoryName: 'Lịch sử',
    },
    {
      categoryId: 1,
      categoryName: 'Văn học',
    },
    {
      categoryId: 1,
      categoryName: 'Từ điển',
    },
    {
      categoryId: 1,
      categoryName: 'Tham khảo',
    },
    {
      categoryId: 1,
      categoryName: 'Ngoại ngữ',
    },
    {
      categoryId: 1,
      categoryName: 'Âm nhạc - mỹ thuật',
    },
    {
      categoryId: 1,
      categoryName: 'Tiểu sử - hồi ký',
    },
    {
      categoryId: 1,
      categoryName: 'Địa lý',
    },
    {
      categoryId: 1,
      categoryName: 'Khoa học ky thuật',
    },
  ];
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN DANH MỤC SÁCH</h2>
      </div>
      <div className="category__select">
        <Select
          defaultValue="Sắp xếp theo"
          style={{ width: 200 }}
          className="category_select-style"
        >
          <Option value="a-z">Sắp xếp từ A-Z</Option>
          <Option value="z-a">Sắp xếp từ Z-A</Option>
        </Select>
        <Button type="primary">Thêm danh mục</Button>
      </div>
      <div className="admin-list-book-content">
        <table className="table">
          <thead>
            <th className="admin-list-category-id">Mã danh mục</th>
            <th className="admin-list-category-name">Tên danh mục</th>
            <th className="admin-list-category-id">Chỉnh sửa</th>
            <th className="admin-list-category-id">Xóa</th>
          </thead>
          {category.map((item, index) => {
            return (
              <tr>
                <td data-label="Mã danh mục :">{item.categoryId}</td>
                <td data-label="Tên danh mục :">{item.categoryName}</td>
                <td data-label="Chỉnh sửa :">
                  <EditOutlined />
                </td>
                <td data-label="Xóa :">
                  <DeleteOutlined />
                </td>
              </tr>
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

export default ListCategory;
