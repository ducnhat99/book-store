import { Pagination, Select, Input, Space, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const FormEditBook = () => {
    const { Option } = Select;
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA SÁCH</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Tên sách</label>
                    <Input placeholder="Nhập tên sách" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Tên tác giả</label>
                    <Input placeholder="Nhập tên tác giả" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Danh mục</label>
                    <Select defaultValue="Văn học" className="admin-form-edit__select">
                        <Option>Văn học</Option>
                        <Option>Kinh tế</Option>
                        <Option>Lịch sử</Option>
                    </Select>
                </div>
                <div className="admin-form-edit--container">
                    <label>Giá</label>
                    <Input placeholder="Nhập giá" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Giá gốc</label>
                    <Input placeholder="Nhập giá gốc" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Nhà xuất bản</label>
                    <Input placeholder="Nhập tên nhà xuất bản" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Năm xuất bản</label>
                    <Input placeholder="Nhập năm xuất bản" />
                </div>
                <div className="admin-form-edit--container">
                    <label>Hình ảnh</label>
                    <Upload {...props} className="admin-form-edit__select">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </div>
                <div className="admin-form-edit--container">
                    <label>Tóm tắt</label>
                    <Input placeholder="Nhập tóm tắt" />
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary">Xác nhận</Button>
            </div>
        </div>
    )
}

export default FormEditBook