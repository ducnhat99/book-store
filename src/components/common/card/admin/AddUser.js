import React from 'react';
import { Select, Input, Space, Button, DatePicker } from 'antd';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';

const AddUser = () => {
  const { Option } = Select;
  const [emailAdmin, setEmailAdmin] = React.useState('');
  const [passAdmin, setPassAdmin] = React.useState('');

  const [phoneAdmin, setPhoneAdmin] = React.useState('');
  const [userAdmin, setUserAdmin] = React.useState('');
  const [addressAdmin, setAddressAdmin] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(emailAdmin)) {
      msg.emailAdmin = 'Xin vui lòng nhập Email';
    } else if (!isEmail(emailAdmin)) {
      msg.emailAdmin = 'Email của bạn không chính xác';
    }

    if (isEmpty(passAdmin)) {
      msg.passAdmin = 'Xin vui lòng nhập mật khẩu';
    } else if (passAdmin.length < 8) {
      msg.passAdmin = 'Mật khẩu phải trên 8 kí tự';
    }

    if (isEmpty(phoneAdmin)) {
      msg.phoneAdmin = 'Xin vui lòng nhập số điện thoại';
    } else if (isNaN(phoneAdmin)) {
      msg.phoneAdmin = 'Xin vui lòng nhập lại số điện thoại';
    }

    if (isEmpty(userAdmin)) {
      msg.userAdmin = 'Xin vui lòng nhập họ và tên ';
    } else if (!isNaN(userAdmin)) {
      msg.userAdmin = 'Xin vui lòng nhập lại họ và tên';
    }

    if (isEmpty(addressAdmin)) {
      msg.addressAdmin = 'Xin vui lòng nhập địa chỉ';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleAddUser = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÊM USER</h2>
      </div>
      <form>
        <div className="admin-form-edit--container">
          <label>Họ và tên</label>
          <Input
            required
            name="userAdmin"
            type="text"
            id="userAdmin"
            value={userAdmin}
            onChange={(e) => setUserAdmin(e.target.value)}
            placeholder="Họ và tên"
          />
          <p className="msg--error_list-book">{validationMsg.userAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Email</label>
          <Input
            name="emailAdmin"
            type="text"
            id="emailAdmin"
            value={emailAdmin}
            onChange={(e) => setEmailAdmin(e.target.value)}
            placeholder="Nhập email"
          />
          <p className="msg--error_list-book">{validationMsg.emailAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Số điện thoại</label>
          <Input
            name="phoneAdmin"
            type="text"
            id="phoneAdmin"
            value={phoneAdmin}
            onChange={(e) => setPhoneAdmin(e.target.value)}
            placeholder="Nhập số điện thoại"
          />
          <p className="msg--error_list-book">{validationMsg.phoneAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Mật khẩu</label>
          <Input
            name="passAdmin"
            type="text"
            id="passAdmin"
            value={passAdmin}
            onChange={(e) => setPassAdmin(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
          <p className="msg--error_list-book">{validationMsg.passAdmin}</p>
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
          <Input
            name="addressAdmin"
            type="text"
            id="addressAdmin"
            value={addressAdmin}
            onChange={(e) => setAddressAdmin(e.target.value)}
            placeholder="Nhập địa chỉ"
          />
          <p className="msg--error_list-book">{validationMsg.addressAdmin}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Chức vụ</label>
          <Select defaultValue="Khách hàng" className="admin-form-edit__select">
            <Option>Khách hàng</Option>
            <Option>Admin</Option>
          </Select>
        </div>
      </form>
      <div className="admin-form-edit--btn" onClick={handleAddUser}>
        <Button type="primary">Xác nhận</Button>
      </div>
    </div>
  );
};

export default AddUser;
