import {
  CheckCircleOutlined,
  DeleteOutlined,
  FileTextOutlined,
  EditOutlined,
} from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Pagination, Select, Input, Space, Button, Popconfirm, message, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { getListOrder, getBooks, deleteOrder } from '../../../../slice/bookSlice'
import { SmileOutlined } from '@ant-design/icons';

const ListCart = () => {
  const history = useHistory();
  const { Option } = Select;
  const [listOrderRender, setListOrderRender] = React.useState([])
  const [valueSearch, setValueSearch] = React.useState('')
  const { Search } = Input;
  const listOrder = useSelector(state => state.book.listOrder)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListOrder())
  }, [dispatch])
  useEffect(() => {
    let list = [...listOrder]
    list.sort((a, b) => {
      var nameA = a.status.toUpperCase(); // ignore upper and lowercase
      var nameB = b.status.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    setListOrderRender(list)
  }, [listOrder])
  const pageLimit = 10;
  const [pageSlice, setPageSlice] = React.useState(0)
  const handleChange = (page, pageSize) => {
    setPageSlice((page - 1) * pageSize)
  }
  const openNotification = (e) => {
    notification.open({
      description:
        e,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  function confirm(e) {
    dispatch(deleteOrder(e))
    message.success('Xóa thành công');
  }

  function cancel(e) {
  }
  const handleSort = (e) => {
    if (e === 'new') {
      let list = [...listOrderRender]
      list.sort((a, b) => {
        return a.id - b.id
      })
      setListOrderRender(list)
    }
    if (e === 'old') {
      let list = [...listOrderRender]
      list.sort((a, b) => {
        return b.id - a.id
      })
      setListOrderRender(list)
    }
    if (e === 'wait') {
      let list = [...listOrderRender]
      list.sort((a, b) => {
        var nameA = a.status.toUpperCase(); // ignore upper and lowercase
        var nameB = b.status.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
      setListOrderRender(list)
    }
  }
  const handleSearch = () => {
    if (valueSearch) {
      const list = listOrder.filter((item) => {
        return (item.fullName.toLowerCase().includes(valueSearch.toLowerCase().trim()) ||
          item.email.toLowerCase().includes(valueSearch.toLowerCase().trim()) ||
          item.phoneNumber.toLowerCase().includes(valueSearch.toLowerCase().trim()) ||
          item.address.toLowerCase().includes(valueSearch.toLowerCase().trim())
        )
      })
      setListOrderRender(list)
    }
    else {
      setListOrderRender(listOrder)
    }
  }
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÔNG TIN ĐƠN HÀNG</h2>
      </div>

      <div className="admin-list-search">
        <div className="admin-list-book_select">
          <Select defaultValue="Sắp xếp theo" style={{ marginRight: '30px', width: '100%' }} onChange={(e) => handleSort(e)}>
            <Option value="new">Mới nhất</Option>
            <Option value="old">Cũ nhất</Option>
            <Option value="wait">Chờ duyệt</Option>
          </Select>
        </div>
        <div className="input_search_text">
          <Search placeholder="input search text" value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} onSearch={handleSearch} />
          <Button type="primary" onClick={() => history.push("/admin/addorder")}>Thêm đơn hàng</Button>
        </div>
      </div>

      <div className="admin-list-book-content-1">
        <table className="table" style={{ fontSize: '13px' }}>
          <thead>
            <th>Mã ĐH</th>
            <th>Tên KH</th>
            <th style={{ width: '5%' }}>Tổng tiền</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ngày đặt</th>
            <th>Tình trạng</th>
            <th>Chi tiết</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </thead>
          {listOrderRender.slice(pageSlice, pageLimit + pageSlice).map((item, index, arr) => {
            return <tr>
              <td data-label="Mã ĐH :">{item.id}</td>
              <td data-label="Tên KH :">{item.fullName}</td>
              <td data-label="total :">{item.bill}</td>
              <td data-label="Địa chỉ :">{item.address}</td>
              <td data-label="Email :">{item.email}</td>
              <td data-label="Số điện thoại:">{item.phoneNumber}</td>
              <td data-label="Ngày đặt:">{item.bookingDate}</td>
              <td data-label="Tình trạng :">{item.status}</td>
              <td data-label="Tình trạng :" onClick={() => history.push({
                pathname: `/admin/detailorder`,
                state: { detailOrder: arr[index] }
              })}><FileTextOutlined /></td>
              <td onClick={() => history.push({
                pathname: '/admin/editcart',
                state: { order: arr[index] }
              })} data-label="Chỉnh sửa:">
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
            // })
          })}
        </table>
      </div>
      <div className="admin-list-book_pagination">
        {
          listOrderRender.length > 10 ? <Pagination defaultCurrent={1} total={listOrderRender.length} onChange={handleChange} pageSize={pageLimit} /> : null
        }
      </div>
    </div>
  );
};
export default ListCart;
