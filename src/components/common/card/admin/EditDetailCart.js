import { Pagination, Select, Input, Space, Button, Upload, message } from 'antd';

const EditDetailCart = () => {
    const { Option } = Select;

    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA CHI TIẾT ĐƠN HÀNG</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Tên sách</label>
                    <Select defaultValue="Văn học" className="admin-form-edit__select">
                        <Option>Văn học</Option>
                        <Option>Kinh tế</Option>
                        <Option>Lịch sử</Option>
                    </Select>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số lượng</label>
                    <Input placeholder="Nhập số lượng" />
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary">Xác nhận</Button>
            </div>
        </div>
    )
}

export default EditDetailCart