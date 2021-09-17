import React, { useEffect } from 'react';
import { Button, Input, DatePicker, Space, Select, notification } from 'antd';
import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { getUser, putUser } from '../../../../slice/bookSlice'
import { useSelector, useDispatch } from 'react-redux'
import { USERLOGIN } from '../../../../constants/UserLogin';

const SaveEditInfor = (props) => {
  const { Option } = Select;
  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  const user = useSelector(state => state.book.user)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('0')
  const [address, setAddress] = React.useState('')
  const [sex, setSex] = React.useState('')
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
  useEffect(() => {
    setName(user.fullName)
    setPhone(user.phoneNumber)
    setSex(user.sex)
    setAddress(user.address)
  }, [user])
  const handleChangeUser = () => {
    if (name === '' || phone === '' || address === '' || sex === '') {
      openNotification('Vui lòng nhập đầy đủ thông tin')
    } else
      if (!phone.match(/^\d{10}$/)) {
        openNotification('Số điện thoại gồm 10 chữ số')
      }
      else {
        dispatch(putUser({
          id: isUserLogin,
          fullName: name,
          email: user.email,
          password: user.password,
          phoneNumber: phone,
          address: address,
          birthDay: user.birthDay,
          sex: sex,
          registerDay: user.registerDay,
          role: user.role,
        }))
        openNotification('Thay đổi thông tin thành công')
      }
  }
  return (
    <form className="box--edit__container">
      <div className="edit--infor">
        <div className="edit--infor__btn__main">
          <label id="edit--infor__text__head">Thông tin tài khoản</label>
        </div>

        <div className="edit--infor__input">
          <label>Họ và tên</label>
          <Input placeholder="Nhập họ và tên" className="edit--infor__input__main" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="edit--infor__input">
          <label>Số điện thoại</label>
          <Input type="number" placeholder="Nhập số điện thoại" className="edit--infor__input__main" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="edit--infor__input">
          <label>Địa chỉ </label>
          <Input placeholder="Nhập địa chỉ " className="edit--infor__input__main" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="edit--infor__input" >
          <label>Giới tính</label>
          <Select value={sex} className="edit--infor__input__main" onChange={(e) => setSex(e.target.value)}>
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </div>
        <br />

        <div className="edit--infor__btn__all">
          <div className="edit--infor__btn__main">
            <Button type="primary" id="edit--infor__save" danger onClick={handleChangeUser}>
              Lưu thay đổi
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SaveEditInfor;
