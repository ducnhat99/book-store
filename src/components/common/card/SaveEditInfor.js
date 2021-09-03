import React from 'react';
import { Button, Input, DatePicker, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/save-edit-infor.css';
import EditPassword from './EditPassword';

const SaveEditInfor = (props) => {
  const { Option } = Select;

  return (
    <form className="box--edit__container">
      <div className="edit--infor">
        <div className="edit--infor__btn__main">
          <label id="edit--infor__text__head">Thông tin tài khoản</label>
        </div>

        <div className="edit--infor__input">
          <label>Họ và tên</label>
          <Input placeholder="Nhập họ và tên" className="edit--infor__input__main" />
        </div>

        <div className="edit--infor__input">
          <label>Địa chỉ Email</label>
          <Input placeholder="Nhập địa chỉ email" className="edit--infor__input__main" />
        </div>

        <div className="edit--infor__input">
          <label>Số điện thoại</label>
          <Input placeholder="Nhập số điện thoại" className="edit--infor__input__main" />
        </div>
        <div className="edit--infor__input" >
          <label>Giới tính</label>
          <Select defaultValue="Nam" className="edit--infor__input__main">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div>
        <div className="edit--infor__input">
          <label>Sinh nhật</label>
          <Space direction="vertical" width={500} className="edit--infor__input__main">
            <DatePicker />
          </Space>
        </div>

        <br />

        <div className="edit--infor__btn__all">
          <div className="edit--infor__btn__main">
            <Button type="primary" id="edit--infor__save" danger >
              Lưu thay đổi
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SaveEditInfor;
