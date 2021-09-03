import { Input, Button } from 'antd';

import '../../../styles/edit-password.css';

const EditPassword = (props) => {
  return (
    <form id="edit--password" className="edit--password">
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Mật khẩu</label>
          <Input.Password placeholder="Nhập mật khẩu" className="edit--password__input__main" />
        </div>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Nhập lại mật khẩu</label>
          <Input.Password placeholder="Nhập lại mật khẩu" className="edit--password__input__main" />
        </div>
      </div>

      <div className="edit--password___btn__all">
        <Button type="primary" className="edit--password___btn__main">
          Xác nhận
        </Button>
        <br />
        <Button danger className="edit--password___btn__main" onClick={props.handleCancel}>
          Bỏ qua
        </Button>
      </div>
    </form>
  );
};

export default EditPassword;
