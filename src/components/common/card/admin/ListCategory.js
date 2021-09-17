import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import { Pagination, Radio, Rate, Select, message, Button, Input, notification, Popconfirm, Modal } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory, addCategory, deleteCategory, putCategory } from '../../../../slice/bookSlice'

const ListCategory = () => {
  const dispatch = useDispatch();
  const [categoryInput, setCategoryInput] = React.useState('')
  const [categoryEdit, setCategoryEdit] = React.useState('')
  const [idEdit, setIdEdit] = React.useState()
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const listCategory = useSelector(state => state.book.listCategory)
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const categoryId = Math.max(...listCategory.map(item => item.id))
  const openNotification = (e) => {
    notification.open({
      description:
        e,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAddCategory = () => {
    if (categoryInput === '') {
      return openNotification('Vui lòng nhập tên danh mục')
    }
    else {
      dispatch(addCategory({
        id: categoryId + 1,
        categoryName: categoryInput,
      }))
      openNotification('Thêm danh mục thành công')
      setCategoryInput('')
    }
  }
  function confirm(e) {
    dispatch(deleteCategory(e))
    message.success('Xóa thành công');
  }

  function cancel(e) {
  }
  const handleEdit = (id, name) => {
    setIdEdit(id)
    setCategoryEdit(name)
    showModal()
  }
  const handleChangeCategory = () => {
    dispatch(putCategory({
      id: idEdit,
      categoryName: categoryEdit,
    }))
    openNotification('Sửa thành công')
    handleCancel()
  }
  return (
    <>
      <div className="admin-list-book">
        <div className="admin-list-book--header">
          <h2>THÔNG TIN DANH MỤC SÁCH</h2>
        </div>
        <div className="category__select">
          <Input placeholder="Thêm danh mục" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} />
          <Button type="primary" onClick={handleAddCategory}>Thêm danh mục</Button>
        </div>
        <div className="admin-list-book-content">
          <table className="table">
            <thead>
              <th className="admin-list-category-id">Mã danh mục</th>
              <th className="admin-list-category-name">Tên danh mục</th>
              <th className="admin-list-category-id">Chỉnh sửa</th>
              <th className="admin-list-category-id">Xóa</th>
            </thead>
            {listCategory.map((item, index) => {
              return (
                <tr>
                  <td data-label="Mã danh mục :">{item.id}</td>
                  <td data-label="Tên danh mục :">{item.categoryName}</td>
                  <td data-label="Chỉnh sửa :">
                    <EditOutlined onClick={() => handleEdit(item.id, item.categoryName)} />
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
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal__login"
        width={250}
      >
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <Input placeholder="Chỉnh sửa danh mục" value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)} />
          <Button type="primary" onClick={handleChangeCategory} style={{ marginTop: '10px' }}>Chỉnh sửa danh mục</Button>
        </div>
      </Modal>
    </>
  );
};

export default ListCategory;
