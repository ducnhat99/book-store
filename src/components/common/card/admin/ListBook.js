import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import images from '../../../../images/humble.jpg'
import { useHistory } from "react-router-dom";
import { Pagination, Select, Input, Space, Button } from 'antd';

const ListBook = () => {
    const history = useHistory()
    const { Option } = Select;
    const { Search } = Input;
    const listBookAdmin = [
        {
            bookId: 1,
            categoryId: 1,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            price: "50.500d",
            numberBook: 32,
            yearXB: 2017,
            images: images,
        },
        {
            bookId: 1,
            categoryId: 1,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            price: "50.500d",
            numberBook: 32,
            yearXB: 2017,
            images: images,
        }, {
            bookId: 1,
            categoryId: 1,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            price: "50.500d",
            numberBook: 32,
            yearXB: 2017,
            images: images,
        }, {
            bookId: 1,
            categoryId: 1,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            price: "50.500d",
            numberBook: 32,
            yearXB: 2017,
            images: images,
        }, {
            bookId: 1,
            categoryId: 1,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            price: "50.500d",
            numberBook: 32,
            yearXB: 2017,
            images: images,
        },
    ]
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>THÔNG TIN SÁCH</h2>
            </div>
            <div className="admin-list-search">
                <Select defaultValue="Sắp xếp theo" style={{ width: 200 }} className="admin-list-book_select">
                    <Option value="a-z">Sắp xếp từ A-Z</Option>
                    <Option value="z-a">Sắp xếp từ Z-A</Option>
                </Select>
                <Search placeholder="input search text" />
                <Button type="primary" onClick={() => history.push("/admin/addbook")}>Thêm sách</Button>
            </div>
            <div className="admin-list-book-content">
                <table>
                    <tr>
                        <th className="admin-list-book-id">Mã sách</th>
                        <th className="admin-list-book-id">Mã danh mục</th>
                        <th className="admin-list-book-name">Tên sách</th>
                        <th className="admin-list-book-author">Tên tác giả</th>
                        <th className="admin-list-book-price">Năm XB</th>
                        <th className="admin-list-book-number">Số lượng</th>
                        <th className="admin-list-book-price">Giá</th>
                        <th className="admin-list-book-number">Chỉnh sửa</th>
                        <th className="admin-list-book-number">Xóa</th>
                    </tr>
                    {listBookAdmin.map((item, index) => {
                        return <tr>
                            <td>{item.bookId}</td>
                            <td>{item.categoryId}</td>
                            <td>{item.title}</td>
                            <td>{item.anthor}</td>
                            <td>{item.yearXB}</td>
                            <td>{item.numberBook}</td>
                            <td>{item.price}</td>
                            <td onClick={() => history.push("/admin/editbook")}><EditOutlined /></td>
                            <td><DeleteOutlined /></td>
                        </tr>
                    })}
                </table>
            </div>
            <div className="admin-list-book_pagination">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default ListBook