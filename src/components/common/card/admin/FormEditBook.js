import { Pagination, Select, Input, Space, Button, Upload, message, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { getBooks, getCategory, putBook } from '../../../../slice/bookSlice'
import { SmileOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'validator';
import { useSelector, useDispatch } from 'react-redux'
const FormEditBook = (props) => {
    const history = useHistory();
    const { Option } = Select;
    const [bookName, setBookName] = React.useState(props.location.state.listBook.bookName)
    const [author, setAuthor] = React.useState(props.location.state.listBook.author)
    const [category, setCategory] = React.useState(props.location.state.listBook.categoryId)
    const [quantityBook, setQuantityBook] = React.useState(props.location.state.listBook.quantityBook)
    const [price, setPrice] = React.useState(props.location.state.listBook.price)
    const [validationMsg, setValidationMsg] = React.useState({});
    const [realPrice, setRealPrice] = React.useState(props.location.state.listBook.realPrice)
    const listCategory = useSelector(state => state.book.listCategory)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])
    const openNotification = (e) => {
        notification.open({
            description:
                e,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    const validateAll = () => {
        const msg = {};
        if (bookName === '') {
            msg.bookName = 'Xin vui lòng nhập tên sách ';
        }
        if (author === '') {
            msg.author = 'Xin vui lòng nhập tên tác giả';
        }
        if (category === '') {
            msg.category = 'Xin vui lòng chọn danh mục sách';
        }
        if (quantityBook === '') {
            msg.quantityBook = 'Xin vui lòng nhập số lượng';
        }
        if (price === '') {
            msg.price = 'Xin vui lòng nhập giá';
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const handleEditBook = () => {
        const isValid = validateAll();
        if (!isValid) return;
        dispatch(putBook({
            categoryId: category,
            id: props.location.state.listBook.id,
            bookName: bookName,
            supplier: props.location.state.listBook.supplier,
            publisher: props.location.state.listBook.publisher,
            publishYear: props.location.state.listBook.publishYear,
            author: author,
            bookLayout: props.location.state.listBook.bookLayout,
            language: props.location.state.listBook.language,
            quantityPage: props.location.state.listBook.quantityPage,
            rateStar: props.location.state.listBook.rateStar,
            description: props.location.state.listBook.description,
            imagesBook: props.location.state.listBook.imagesBook,
            quantityBook: parseInt(quantityBook),
            price: parseInt(price),
            realPrice: parseInt(realPrice),
        }))
        history.push("/admin/listbook")
        openNotification("Chỉnh sửa sách thành công")
    }
    return (
        <div className="admin-list-book">
            <div className="admin-list-book--header">
                <h2>CHỈNH SỬA SÁCH</h2>
            </div>
            <form>
                <div className="admin-form-edit--container">
                    <label>Tên sách</label>
                    <Input placeholder="Nhập tên sách" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.bookName}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Tên tác giả</label>
                    <Input placeholder="Nhập tên tác giả" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.author}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Danh mục</label>
                    <Select defaultValue={category} className="admin-form-edit__select" onChange={(e) => setCategory(e)}>
                        {listCategory.map((item) => {
                            return <Option value={item.id}>{item.categoryName}</Option>
                        })}
                    </Select>
                    <p className="msg--error_list-book">{validationMsg.category}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Số lượng</label>
                    <Input type="number" placeholder="Nhập số lượng" value={quantityBook} onChange={(e) => setQuantityBook(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.quantityBook}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Giá</label>
                    <Input type="number" placeholder="Nhập giá" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <p className="msg--error_list-book">{validationMsg.price}</p>
                </div>
                <div className="admin-form-edit--container">
                    <label>Giá gốc</label>
                    <Input type="number" placeholder="Nhập giá gốc" value={realPrice} onChange={(e) => setRealPrice(e.target.value)} />
                </div>
            </form>
            <div className="admin-form-edit--btn">
                <Button type="primary" onClick={handleEditBook}>Xác nhận</Button>
            </div>
        </div>
    )
}

export default FormEditBook