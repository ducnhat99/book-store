import { Input, Button } from 'antd';

import '../../../styles/edit-password.css';

const EditPassword = (props) => {
  return (
    <form id="edit--password" className="edit--password">
      <div className="edit--infor__btn__main">
        <label id="edit--infor__text__head">Đổi mật khẩu</label>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Mật khẩu cũ</label>
          <Input.Password placeholder="Nhập mật khẩu" className="edit--password__input__main" />
        </div>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Mật khẩu mới</label>
          <Input.Password placeholder="Nhập mật khẩu" className="edit--password__input__main" />
        </div>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Nhập lại mật khẩu mới</label>
          <Input.Password placeholder="Nhập lại mật khẩu" className="edit--password__input__main" />
        </div>
      </div>

      <div className="edit--password___btn__all">

      </div>
      <div className="edit--infor__btn__all">
        <div className="edit--infor__btn__main">
          <Button type="primary" id="edit--infor__save" danger >
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditPassword;
