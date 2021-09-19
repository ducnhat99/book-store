import React from 'react';
import { useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getInputClassName } from 'antd/lib/input/Input';
import '../../../../styles/list-book.scss';

const CartListBook = (props) => {
  const { id1, categoryId1, bookName1, author1, publishYear1, quantityBook1, price1 } = props;
  const history = useHistory();

  return (
    <tr>
      <td data-label="Mã sách :">{id1}</td>
      <td data-label="Mã danh mục :">{categoryId1}</td>
      <td data-label="Tên sách :" className="admin-list-book-name">
        {bookName1}
      </td>
      <td data-label="Tên tác giả :">{author1}</td>
      <td data-label="Năm XB :">{publishYear1}</td>
      <td data-label="Số lượng :">{quantityBook1}</td>
      <td data-label="Giá :">{price1}</td>
      <td onClick={() => history.push('/admin/editbook')} data-label="Chỉnh sửa">
        <EditOutlined />
      </td>
      <td data-label="Xóa">
        <DeleteOutlined />
      </td>
    </tr>
  );
};

export default CartListBook;
