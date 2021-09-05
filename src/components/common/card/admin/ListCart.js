import { CheckCircleOutlined, DeleteOutlined, FileTextOutlined, EditOutlined } from '@ant-design/icons';
import images from '../../../../images/humble.jpg'
import { Pagination, Select, Input, Space, Button } from 'antd';

const ListCart = () => {
    const { Option } = Select;
    const { Search } = Input;
    const listCart = [
        {
            cartId: 1,
            userId: 1,
            userName: "Nhat",
            address: 'Da Nang',
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '123123123',
            dateOrder: '12/12/2020',
            price: '70000d',
            status: 'Đang xử lý'
        },
        {
            cartId: 1,
            userId: 1,
            userName: "Nhat",
            address: 'Da Nang',
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '123123123',
            dateOrder: '12/12/2020',
            price: '70000d',
            status: 'Đang xử lý'
        },
        {
            cartId: 1,
            userId: 1,
            userName: "Nhat",
            address: 'Da Nang',
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '123123123',
            dateOrder: '12/12/2020',
            price: '70000d',
            status: 'Đang xử lý'
        },
        {
            cartId: 1,
            userId: 1,
            userName: "nhat nguyen",
            address: 'Da Nang',
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '123123123',
            dateOrder: '12/12/2020',
            price: '70000d',
            status: 'Đang xử lý'
        },
    ]
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>THÔNG TIN ĐƠN HÀNG</h2>
            </div>
            <div className="admin-list-search">
                <Select defaultValue="Sắp xếp theo" style={{ width: 200 }} className="admin-list-book_select">
                    <Option value="a-z">Sắp xếp từ A-Z</Option>
                    <Option value="z-a">Sắp xếp từ Z-A</Option>
                </Select>
                <Search placeholder="input search text" />
                <Button type="primary">Thêm đơn hàng</Button>
            </div>
            <div className="admin-list-book-content">
                <table>
                    <tr>
                        <th>Mã ĐH</th>
                        <th>Mã KH</th>
                        <th>Tên KH</th>
                        <th>Địa chỉ</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Ngày đặt</th>
                        <th>Tổng tiền</th>
                        <th>Tình trạng</th>
                        <th>Chi tiết</th>
                        <th>Xác nhận</th>
                        <th>Chỉnh sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {listCart.map((item, index) => {
                        return <tr>
                            <td>{item.cartId}</td>
                            <td>{item.userId}</td>
                            <td>{item.userName}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.dateOrder}</td>
                            <td>{item.price}</td>
                            <td>{item.status}</td>
                            <td><FileTextOutlined /></td>
                            <td><CheckCircleOutlined /></td>
                            <td><EditOutlined /></td>
                            <td><DeleteOutlined /></td>
                        </tr>
                    })}
                </table>
            </div>
            <div className="admin-list-book_pagination">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}
export default ListCart