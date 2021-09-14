import React from 'react';

import { Pagination, Select, Input, Space, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { isEmpty } from 'validator';

const AddBook = () => {
  const { Option } = Select;

  const [nameBook, setNameBook] = React.useState('');
  const [nameAuthor, setNameAuthor] = React.useState('');

  const [priceBook, setPriceBook] = React.useState('');
  const [oldPrice, setOldPrice] = React.useState('');
  const [publish, setPublish] = React.useState('');
  const [yearPublish, setYearPublish] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(nameBook)) {
      msg.nameBook = 'Xin vui lòng nhập tên sách ';
    }

    if (isEmpty(nameAuthor)) {
      msg.nameAuthor = 'Xin vui lòng nhập tên tác giả';
    }

    if (isEmpty(priceBook)) {
      msg.priceBook = 'Xin vui lòng nhập giá sách';
    } else if (isNaN(priceBook)) {
      msg.priceBook = 'Giá sách phải là số';
    }

    if (isEmpty(oldPrice)) {
      msg.oldPrice = 'Xin vui lòng nhập giá gốc';
    } else if (isNaN(oldPrice)) {
      msg.oldPrice = 'Giá sách phải là số';
    }

    if (isEmpty(publish)) {
      msg.publish = 'Xin vui lòng nhập nhà xuất bản';
    }

    if (isEmpty(yearPublish)) {
      msg.yearPublish = 'Xin vui lòng nhập năm xuất bản';
    } else if (isNaN(yearPublish)) {
      msg.yearPublish = 'Giá sách phải là số';
    }

    if (isEmpty(summary)) {
      msg.summary = 'Xin vui lòng nhập tóm tắt ';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleAddBook = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="admin-list-book">
      <div className="admin-list-book--header">
        <h2>THÊM SÁCH</h2>
      </div>
      <form>
        {/* <div className="admin-form-edit--container--form"> */}
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
          <Select defaultValue="Văn học" className="admin-form-edit__select">
            <Option>Văn học</Option>
            <Option>Kinh tế</Option>
            <Option>Lịch sử</Option>
          </Select>
        </div>
        <div className="admin-form-edit--container">
          <label>Giá</label>
          <Input
            required
            name="priceBook"
            type="text"
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
            type="text"
            id="oldPrice"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            placeholder="Nhập giá gốc"
          />
          <p className="msg--error_list-book">{validationMsg.oldPrice}</p>
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
            type="text"
            id="yearPublish"
            value={publish}
            onChange={(e) => setYearPublish(e.target.value)}
            placeholder="Nhập năm xuất bản"
          />
          <p className="msg--error_list-book">{validationMsg.yearPublish}</p>
        </div>
        <div className="admin-form-edit--container">
          <label>Hình ảnh</label>
          <Upload {...props} className="admin-form-edit__select">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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
