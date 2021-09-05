import { Pagination, Select, Input, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ListUser = () => {
    const { Option } = Select;
    const { Search } = Input;
    const listUser = [
        {
            userId: 1,
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '0123456789',
            name: 'Duc Nhat',
            password: '123456',
            address: 'Da Nang',
            dateAdd: '12/12/2020',
            roll: 'user'
        },
        {
            userId: 1,
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '0123456789',
            name: 'Duc Nhat',
            password: '123456',
            address: 'Da Nang',
            dateAdd: '12/12/2020',
            roll: 'user'
        },
        {
            userId: 1,
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '0123456789',
            name: 'Duc Nhat',
            password: '123456',
            address: 'Da Nang',
            dateAdd: '12/12/2020',
            roll: 'user'
        },
        {
            userId: 1,
            email: 'nguyenvanducnhat@gmail.com',
            phoneNumber: '0123456789',
            name: 'Duc Nhat',
            password: '123456',
            address: 'Da Nang',
            dateAdd: '12/12/2020',
            roll: 'user'
        },
    ]
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>THÔNG TIN NGƯỜI DÙNG</h2>
            </div>
            <div className="admin-list-search">
                <Select defaultValue="Sắp xếp theo" style={{ width: 200 }} className="admin-list-user_select">
                    <Option value="a-z">Sắp xếp tên từ A-Z</Option>
                    <Option value="z-a">Sắp xếp tên từ Z-A</Option>
                    <Option value="z-a">Admin</Option>
                    <Option value="z-a">Khách hàng</Option>
                </Select>
                <Search placeholder="input search text" />
                <Button type="primary">Thêm người dùng</Button>
            </div>
            <div className="admin-list-user">
                <table>
                    <tr>
                        <th className="admin-list-user-id">Mã người dùng</th>
                        <th className="admin-list-user-name">Tên người dùng</th>
                        <th className="admin-list-user-name">Địa chỉ email</th>
                        <th className="admin-list-user-number">Số điện thoại</th>
                        <th className="admin-list-user-number">Mật khẩu</th>
                        <th className="admin-list-user-name">Địa chỉ</th>
                        <th className="admin-list-user-number">Ngày đăng ký</th>
                        <th className="admin-list-user-number">Phân quyền</th>
                        <th className="admin-list-user-id">Chỉnh sửa</th>
                        <th className="admin-list-user-id">Xóa</th>
                    </tr>
                    {listUser.map((item, index) => {
                        return <tr>
                            <td>{item.userId}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.password}</td>
                            <td>{item.address}</td>
                            <td>{item.dateAdd}</td>
                            <td>{item.roll}</td>
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
export default ListUser