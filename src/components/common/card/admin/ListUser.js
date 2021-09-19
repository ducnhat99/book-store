import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Pagination, Select, Input, Space, Button, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getListUser, deleteUser } from '../../../../slice/bookSlice'
import { useHistory } from 'react-router-dom';

const ListUser = () => {
  const history = useHistory();
  const { Option } = Select;
  const { Search } = Input;
  const listUsers = useSelector(state => state.book.listUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])
  const pageLimit = 10;
  const [pageSlice, setPageSlice] = React.useState(0)
  const handleChange = (page, pageSize) => {
    setPageSlice((page - 1) * pageSize)
  }
  function confirm(e) {
    dispatch(deleteUser(e))
    message.success('Xóa thành công');
  }

  function cancel(e) {
  }
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN NGƯỜI DÙNG</h2>
      </div>
      <div className="admin-list-search">
        <Button type="primary" onClick={() => history.push('/admin/adduser')}>
          Thêm người dùng
        </Button>
      </div>
      <div className="admin-list-book-content">
        <table className="table" style={{ fontSize: '13px' }}>
          <thead>
            <th >Tên người dùng</th>
            <th >Địa chỉ email</th>
            <th >Mật khẩu</th>
            <th >Số điện thoại</th>
            <th >Địa chỉ</th>
            <th >Sinh nhật</th>
            <th >Giới tính</th>
            <th >Ngày đăng ký</th>
            <th >Phân quyền</th>
            <th >Chỉnh sửa</th>
            <th >Xóa</th>
          </thead>
          {listUsers.slice(pageSlice, pageLimit + pageSlice).map((item, index, arr) => {
            return (
              <tr>
                <td data-label="Tên người dùng :">{item.fullName}</td>
                <td data-label="Địa chỉ email :">{item.email}</td>
                <td data-label="Địa chỉ :">{item.password}</td>
                <td data-label="Số điện thoại :">{item.phoneNumber}</td>
                <td data-label="Ngày đăng ký :">{item.address}</td>
                <td data-label="Phân quyền :">{item.birthDay}</td>
                <td data-label="Phân quyền :">{item.sex}</td>
                <td data-label="Phân quyền :">{item.registerDay}</td>
                <td data-label="Chỉnh sửa :">{item.role}</td>
                <td onClick={() => history.push({
                  pathname: '/admin/edituser',
                  state: { info: arr[index] }
                })} data-label="Xóa :">
                  <EditOutlined />
                </td>
                <td data-label="Xóa :">
                  <Popconfirm placement="topRight"
                    title="Bạn có muốn xóa không ?"
                    onConfirm={() => confirm(item.id)}
                    onCancel={cancel}
                    okText="Có"
                    cancelText="Không"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="admin-list-book_pagination">
        {
          listUsers.length > 10 ? <Pagination defaultCurrent={1} total={listUsers.length} onChange={handleChange} pageSize={pageLimit} /> : null
        }
      </div>
    </div>
  );
};
export default ListUser;
