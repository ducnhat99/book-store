import { Select, Input, Space, Button, DatePicker } from 'antd';
const EditUser = () => {
    const { Option } = Select;
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA USER</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Họ và tên</label>
                    <Input placeholder="Họ và tên" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Email</label>
                    <Input placeholder="Nhập email" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Số điện thoại</label>
                    <Input placeholder="Nhập số điện thoại" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Mật khẩu</label>
                    <Input placeholder="Nhập mật khẩu" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Giới tính</label>
                    <Select defaultValue="Nam" className="admin-form-edit__select">
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                        <Option value="Khác">Khác</Option>
                    </Select>
                </div>
                <div className="admin-form-edit--container">
                    <label>Sinh nhật</label>
                    <Space direction="vertical" className="admin-form-edit__select">
                        <DatePicker />
                    </Space>
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ</label>
                    <Input placeholder="Nhập địa chỉ" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Chức vụ</label>
                    <Select defaultValue="Khách hàng" className="admin-form-edit__select">
                        <Option>Khách hàng</Option>
                        <Option>Admin</Option>
                    </Select>
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary">Xác nhận</Button>
            </div>
        </div>
    )
}
export default EditUser