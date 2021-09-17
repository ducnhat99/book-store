import React, { useEffect } from 'react';
import { Button, Input, DatePicker, Space, Select, notification } from 'antd';
import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { getUser, putUser } from '../../../../slice/bookSlice'
import { useSelector, useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';

const EditPassword = (props) => {
  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  const user = useSelector(state => state.book.user)
  const [oldPass, setOldPass] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [passAgain, setPassAgain] = React.useState('')
  const dispatch = useDispatch()
  const openNotification = (e) => {
    notification.open({
      description:
        e,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  useEffect(() => {
    dispatch(getUser(isUserLogin))
  }, [dispatch])
  const handleChangePass = () => {
    if (oldPass === '' || pass === '' || passAgain === '') {
      return openNotification('Vui lòng nhập đầy đủ thông tin')
    } else
      if (oldPass !== user.password) {
        return openNotification('Mật khẩu cũ không chính xác !')
      } else if (pass !== passAgain) {
        return ('Vui lòng nhập lại đúng mật khẩu')
      }
      else {
        dispatch(putUser({
          id: isUserLogin,
          fullName: user.fullName,
          email: user.email,
          password: pass,
          phoneNumber: user.phoneNumber,
          address: user.address,
          birthDay: user.birthDay,
          sex: user.sex,
          registerDay: user.registerDay,
          role: user.role,
        }))
        openNotification('Thay đổi mật khẩu thành công')
      }
  }
  return (
    <form id="edit--password" className="edit--password">
      <div className="edit--infor__btn__main">
        <label id="edit--infor__text__head">Đổi mật khẩu</label>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Mật khẩu cũ</label>
          <Input.Password placeholder="Nhập mật khẩu" className="edit--password__input__main" value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
        </div>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Mật khẩu mới</label>
          <Input.Password placeholder="Nhập mật khẩu" className="edit--password__input__main" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
      </div>
      <div className="edit--password__container">
        <div className="edit--password__input">
          <label>Nhập lại mật khẩu mới</label>
          <Input.Password placeholder="Nhập lại mật khẩu" className="edit--password__input__main" value={passAgain} onChange={(e) => setPassAgain(e.target.value)} />
        </div>
      </div>

      <div className="edit--password___btn__all">

      </div>
      <div className="edit--infor__btn__all">
        <div className="edit--infor__btn__main">
          <Button type="primary" id="edit--infor__save" danger onClick={handleChangePass}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditPassword;
