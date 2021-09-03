import React from 'react';
import { Button, Input, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/save-edit-infor.css';
import EditPassword from './EditPassword';

const SaveEditInfor = (props) => {
  const [isEdit, setIsEdit] = React.useState(true);

  const handleDisplayEditInfor = () => {
    if (isEdit) return { display: 'block' };
    else return { display: 'none' };
  };

  const handleDisplayEditPassword = () => {
    if (isEdit) return { display: 'none' };
    else return { display: 'block' };
  };

  return (
    <form className="box--edit__container">
      <div className="edit--infor" style={handleDisplayEditInfor()}>
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
        <div className="edit--infor__input">
          <label>Sinh nhật</label>
          <Space direction="vertical" width={500} className="edit--infor__input__main">
            <DatePicker />
          </Space>
        </div>

        <br />

        <div className="edit--infor__btn__all">
          <div className="edit--infor__btn__main">
            <Button type="primary" id="edit--infor__save" danger onClick={() => setIsEdit(true)}>
              Lưu thay đổi
            </Button>
          </div>

          <div className="edit--infor__btn__main">
            <p
              style={{ width: '100%', textAlign: 'center', fontSize: '14px' }}
              value="edit--password"
              danger
              onClick={() => setIsEdit(false)}
            >
              Bạn muốn đổi mật khẩu <a style={{ fontSize: '14px' }}>Nhấn vào đây!</a>
            </p>
          </div>
        </div>
      </div>

      <div style={handleDisplayEditPassword()}>
        <EditPassword handleCancel={props.handleCancel} />
      </div>
    </form>
  );
};
export default SaveEditInfor;
