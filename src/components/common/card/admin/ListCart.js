import {
  CheckCircleOutlined,
  DeleteOutlined,
  FileTextOutlined,
  EditOutlined,
} from '@ant-design/icons';
import images from '../../../../images/humble.jpg';
import { Pagination, Select, Input, Space, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const ListCart = () => {
  const history = useHistory();
  const { Option } = Select;
  const { Search } = Input;
  const listCart = [
    {
      cartId: 1,
      userId: 1,
      userName: 'Nhat',
      address: 'Da Nang',
      email: 'nguyenvanducnhat@gmail.com',
      phoneNumber: '123123123',
      dateOrder: '12/12/2020',
      price: '70000d',
      status: 'Đang xử lý',
    },
    {
      cartId: 2,
      userId: 2,
      userName: 'Nhat',
      address: 'Da Nang',
      email: 'nguyenvanducnhat@gmail.com',
      phoneNumber: '123123123',
      dateOrder: '12/12/2020',
      price: '70000d',
      status: 'Đang xử lý',
    },
    {
      cartId: 3,
      userId: 3,
      userName: 'Nhat',
      address: 'Da Nang',
      email: 'nguyenvanducnhat@gmail.com',
      phoneNumber: '123123123',
      dateOrder: '12/12/2020',
      price: '70000d',
      status: 'Đang xử lý',
    },
    {
      cartId: 4,
      userId: 4,
      userName: 'nhat nguyen',
      address: 'Da Nang',
      email: 'nguyenvanducnhat@gmail.com',
      phoneNumber: '123123123',
      dateOrder: '12/12/2020',
      price: '70000d',
      status: 'Đang xử lý',
    },
  ];
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN ĐƠN HÀNG</h2>
      </div>

      <div className="admin-list-search">
        <div className="admin-list-book_select">
          <Select defaultValue="Sắp xếp theo" style={{ marginRight: '30px', width: '100%' }}>
            <Option value="a-z">Sắp xếp từ A-Z</Option>
            <Option value="z-a">Sắp xếp từ Z-A</Option>
          </Select>
        </div>
        <div className="input_search_text">
          <Search placeholder="input search text" />
          <Button type="primary">Thêm đơn hàng</Button>
        </div>
      </div>

      <div className="admin-list-book-content-1">
        <table className="table">
          <thead>
            <th>Mã ĐH</th>
            <th>Mã KH</th>
            <th>Tên KH</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ngày đặt</th>
            <th style={{ width: '5%' }}>Tổng tiền</th>
            <th>Tình trạng</th>
            {/* <th>Chi tiết</th>
            <th>Xác nhận</th> */}
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </thead>
          {listCart.map((item, index) => {
            return (
              <tr>
                <td data-label="Mã ĐH :">{item.cartId}</td>
                <td data-label="Mã KH :">{item.userId}</td>
                <td data-label="Tên KH :">{item.userName}</td>
                <td data-label="Địa chỉ :">{item.address}</td>
                <td data-label="Email :">{item.email}</td>
                <td data-label="Số điện thoại:">{item.phoneNumber}</td>
                <td data-label="Ngày đặt:">{item.dateOrder}</td>
                <td data-label="Tổng tiền :">{item.price}</td>
                <td data-label="Tình trạng :">{item.status}</td>
                {/* <td onClick={() => history.push('/admin/detailcart')} data-label="Chi tiết :">
                  <FileTextOutlined />
                </td> */}
                {/* <td data-label="Xác nhận :">
                  <CheckCircleOutlined />
                </td> */}
                <td onClick={() => history.push('/admin/editcart')} data-label="Chỉnh sửa:">
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
export default ListCart;
