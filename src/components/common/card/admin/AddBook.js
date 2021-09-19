import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SmileOutlined } from '@ant-design/icons';
import { Pagination, Select, Input, Space, Button, Upload, message, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'validator';
import { getCategory, getBooks, addBook } from '../../../../slice/bookSlice'

const AddBook = () => {
  const history = useHistory();
  const { Option } = Select;
  const [nameBook, setNameBook] = React.useState('');
  const [nameAuthor, setNameAuthor] = React.useState('');
  const [supplier, setSupplier] = React.useState('')
  const [priceBook, setPriceBook] = React.useState('');
  const [oldPrice, setOldPrice] = React.useState('');
  const [publish, setPublish] = React.useState('');
  const [language, setLanguage] = React.useState('Tiếng VIệt');
  const [bookLayout, setBookLayout] = React.useState('Bìa mềm');
  const [quantityPage, setQuantityPage] = React.useState('');
  const [category, setCategory] = React.useState(0)
  const [quantityBook, setQuantityBook] = React.useState('');
  const [yearPublish, setYearPublish] = React.useState('');
  const [images, setImages] = React.useState('')
  const [summary, setSummary] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState({});
  const dispatch = useDispatch();
  const listCategory = useSelector(state => state.book.listCategory)
  const listBook = useSelector(state => state.book.listBook)
  const bookId = Math.max(...listBook.map(item => item.id))
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getBooks())
  }, [dispatch])
  const validateAll = () => {
    const msg = {};
    if (isEmpty(nameBook)) {
      msg.nameBook = 'Xin vui lòng nhập tên sách ';
    }
    if (isEmpty(nameAuthor)) {
      msg.nameAuthor = 'Xin vui lòng nhập tên tác giả';
    }
    if (isEmpty(supplier)) {
      msg.supplier = 'Xin vui lòng nhập nhà cung cấp';
    }
    if (isEmpty(priceBook)) {
      msg.priceBook = 'Xin vui lòng nhập giá sách';
    }

    if (isEmpty(publish)) {
      msg.publish = 'Xin vui lòng nhập nhà xuất bản';
    }
    if (isEmpty(quantityPage)) {
      msg.quantityPage = 'Xin vui lòng nhập số trang';
    }
    if (isEmpty(quantityBook)) {
      msg.quantityBook = 'Xin vui lòng nhập số trang';
    }
    if (isEmpty(yearPublish)) {
      msg.yearPublish = 'Xin vui lòng nhập năm xuất bản';
    }
    if (isEmpty(summary)) {
      msg.summary = 'Xin vui lòng nhập tóm tắt ';
    }
    if (isEmpty(images)) {
      msg.images = 'Xin vui chọn hình ảnh ';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const openNotification = (e) => {
    notification.open({
      description:
        e,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const handleChangeImages = (e) => {
    let base64String = "";
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:", "")
        .replace(/^.+,/, "");
      const imageBase64Stringsep = base64String;
      setImages(base64String)
    }
    reader.readAsDataURL(file);
  }
  const handleAddBook = () => {
    const isValid = validateAll();
    if (!isValid) return;
    dispatch(addBook({
      categoryId: category,
      id: bookId + 1,
      bookName: nameBook,
      supplier: supplier,
      publisher: publish,
      publishYear: yearPublish,
      author: nameAuthor,
      bookLayout: bookLayout,
      language: language,
      quantityPage: quantityPage,
      rateStar: 5,
      description: summary,
      imagesBook: images,
      quantityBook: quantityBook,
      price: priceBook,
      realPrice: oldPrice,
    }))
    history.push("/admin/listbook")
    openNotification("Thêm sách thành công")
  };

  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÊM SÁCH</h2>
      </div>
      <form>
        <div className="admin-form-edit--container">
          <label>Tên sách</label>
          <Input
            required
            name="nameBook"
            type="text"
            id="nameBook"
            value={nameBook}
            onChange={(e) => setNameBook(e.target.value)}
            placeholder="Nhập tên sách"
          />
          <p className="msg--error_list-book">{validationMsg.nameBook}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Nhà cung cấp</label>
          <Input
            required
            name="nameBook"
            type="text"
            id="nameBook"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Nhà cung cấp"
          />
          <p className="msg--error_list-book">{validationMsg.supplier}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Tên tác giả</label>
          <Input
            required
            name="nameAuthor"
            type="text"
            id="nameAuthor"
            value={nameAuthor}
            onChange={(e) => setNameAuthor(e.target.value)}
            placeholder="Nhập tên tác giả"
          />
          <p className="msg--error_list-book">{validationMsg.nameAuthor}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Danh mục</label>
          <Select defaultValue="Văn học" className="admin-form-edit__select" onChange={(e) => setCategory(e)}>
            {listCategory.map((item) => {
              return <Option value={item.id}>{item.categoryName}</Option>
            })}
          </Select>
          <p className="msg--error_list-book">{validationMsg.category}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Ngôn ngữ</label>
          <Select defaultValue={language} className="admin-form-edit__select" onChange={(e) => setLanguage(e)}>
            <Option value="Tiếng Việt">Tiếng Việt</Option>
            <Option value="Tiếng Anh">Tiếng anh</Option>
          </Select>
        </div>
        <div className="admin-form-edit--container">
          <label>Loại bìa</label>
          <Select defaultValue={bookLayout} className="admin-form-edit__select" onChange={(e) => setBookLayout(e)}>
            <Option value="Bìa mềm">Bìa mềm</Option>
            <Option value="Bìa cứng">Bìa cứng</Option>
          </Select>
        </div>
        <div className="admin-form-edit--container">
          <label>Giá</label>
          <Input
            required
            name="priceBook"
            type="number"
            id="priceBook"
            value={priceBook}
            onChange={(e) => setPriceBook(e.target.value)}
            placeholder="Nhập giá"
          />
          <p className="msg--error_list-book">{validationMsg.priceBook}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Giá gốc</label>
          <Input
            required
            name="oldPrice"
            type="number"
            id="oldPrice"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            placeholder="Nhập giá gốc"
          />
          <p className="msg--error_list-book">{validationMsg.oldPrice}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Số trang</label>
          <Input
            required
            name="priceBook"
            type="number"
            id="priceBook"
            value={quantityPage}
            onChange={(e) => setQuantityPage(e.target.value)}
            placeholder="Nhập số trang"
          />
          <p className="msg--error_list-book">{validationMsg.quantityPage}</p>
        </div><div className="admin-form-edit--container">
          <label>Số lượng</label>
          <Input
            required
            name="priceBook"
            type="number"
            id="priceBook"
            value={quantityBook}
            onChange={(e) => setQuantityBook(e.target.value)}
            placeholder="Nhập số lượng"
          />
          <p className="msg--error_list-book">{validationMsg.quantityBook}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Nhà xuất bản</label>
          <Input
            required
            name="publish"
            type="text"
            id="publish"
            value={publish}
            onChange={(e) => setPublish(e.target.value)}
            placeholder="Nhập tên nhà xuất bản"
          />
          <p className="msg--error_list-book">{validationMsg.publish}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Năm xuất bản</label>
          <Input
            required
            name="yearPublish"
            type="number"
            id="yearPublish"
            value={yearPublish}
            onChange={(e) => setYearPublish(e.target.value)}
            placeholder="Nhập năm xuất bản"
          />
          <p className="msg--error_list-book">{validationMsg.yearPublish}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Hình ảnh</label>
          <Input
            required
            type="file"
            onChange={(e) => handleChangeImages(e)}
          />
          <p className="msg--error_list-book">{validationMsg.images}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Tóm tắt</label>
          <Input
            required
            name="summary"
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Nhập tóm tắt"
          />
          <p className="msg--error_list-book">{validationMsg.summary}</p>
        </div>
        {/* </div> */}
      </form>
      <div className="admin-form-edit--btn" onClick={handleAddBook}>
        <Button type="primary">Xác nhận</Button>
      </div>
    </div>
  );
};
export default AddBook;
