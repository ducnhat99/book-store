import { Pagination, Select, Input, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const DetailCart = () => {
    const history = useHistory()
    const detailCart = [
        {
            detailCartId: 1,
            cartId: 2,
            bookName: 'Humble Inquiry: The Gentle Art Of Asking Instead Of Telling',
            bookNumber: 2,
            price: '60000d',
        },
        {
            detailCartId: 1,
            cartId: 2,
            bookName: 'Humble Inquiry: The Gentle Art Of Asking Instead Of Telling',
            bookNumber: 2,
            price: '60000d',
        },
        {
            detailCartId: 1,
            cartId: 2,
            bookName: 'Humble Inquiry: The Gentle Art Of Asking Instead Of Telling',
            bookNumber: 2,
            price: '60000d',
        },
        {
            detailCartId: 1,
            cartId: 2,
            bookName: 'Humble Inquiry: The Gentle Art Of Asking Instead Of Telling',
            bookNumber: 2,
            price: '60000d',
        },
    ]
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>THÔNG TIN NGƯỜI DÙNG</h2>
            </div>
            <div className="admin-list-user">
                <table>
                    <tr>
                        <th >Mã CTDH</th>
                        <th >Mã DH</th>
                        <th>Tên sách</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Chỉnh sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {detailCart.map((item, index) => {
                        return <tr>
                            <td>{item.detailCartId}</td>
                            <td>{item.cartId}</td>
                            <td>{item.bookName}</td>
                            <td>{item.bookNumber}</td>
                            <td>{item.price}</td>
                            <td onClick={() => history.push("/admin/editdetailcart")}><EditOutlined /></td>
                            <td><DeleteOutlined /></td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}

export default DetailCart