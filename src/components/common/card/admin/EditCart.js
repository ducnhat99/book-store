import { Select, Input, Space, Button, DatePicker } from 'antd';
const EditCart = () => {
    const { Option } = Select;
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA ĐƠN HÀNG</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Họ và tên</label>
                    <Input placeholder="Họ và tên" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Địa chỉ</label>
                    <Input placeholder="Nhập địa chỉ" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Email</label>
                    <Input placeholder="Nhập email" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Số điện thoại</label>
                    <Input placeholder="Nhập số điện thoại" />
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary">Xác nhận</Button>
            </div>
        </div>
    )
}
export default EditCart