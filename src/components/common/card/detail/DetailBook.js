import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Rate, Input, InputNumber, Modal } from 'antd';
import { useHistory } from "react-router-dom";
import Login from '../form/Login';
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { USERLOGIN } from '../../../../constants/UserLogin';
import VNPRICE from '../../../../constants/FormatPrice';
import { getCartUser, addCartApi, getListCart, putCart, putBook } from '../../../../slice/bookSlice'

const DetailBook = (props) => {
  const { categoryId, id, bookName, imagesBook, quantityPage, quantityBook, language, description, supplier, author, publisher, publishYear, rateStar, bookLayout, price, realPrice } = props
  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  const history = useHistory()
  const [bookNumber, setBookNumber] = React.useState(1)
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const dispatch = useDispatch()
  const listCartUser = useSelector(state => state.book.listCartUser)
  const listCartAll = useSelector(state => state.book.listCartAll)
  const cartId = Math.max(...listCartAll.map(item => item.id))
  useEffect(() => {
    dispatch(getCartUser(isUserLogin))
    dispatch(getListCart())
  }, [dispatch])
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAddCart = () => {
    const cartFind = listCartUser.find((item) => {
      return item.bookId === parseInt(id)
    })
    if (cartFind) {
      dispatch(putCart({
        userId: isUserLogin,
        bookId: parseInt(id),
        id: cartFind.id,
        quantity: cartFind.quantity + bookNumber,
        total: cartFind.total + (bookNumber * price)
      }))
      dispatch(putBook({
        categoryId: categoryId,
        id: parseInt(id),
        bookName: bookName,
        supplier: supplier,
        publisher: publisher,
        publishYear: publishYear,
        author: author,
        bookLayout: bookLayout,
        language: language,
        quantityPage: quantityPage,
        rateStar: rateStar,
        description: description,
        imagesBook: imagesBook,
        quantityBook: quantityBook - bookNumber,
        price: price,
        realPrice: realPrice,
      }))
      return
    }
    else {
      dispatch(addCartApi({
        userId: isUserLogin,
        bookId: parseInt(id),
        id: cartId + 1,
        quantity: bookNumber,
        total: bookNumber * price,
      }))
      dispatch(putBook({
        categoryId: categoryId,
        id: parseInt(id),
        bookName: bookName,
        supplier: supplier,
        publisher: publisher,
        publishYear: publishYear,
        author: author,
        bookLayout: bookLayout,
        language: language,
        quantityPage: quantityPage,
        rateStar: rateStar,
        description: description,
        imagesBook: imagesBook,
        quantityBook: quantityBook - bookNumber,
        price: price,
        realPrice: realPrice,
      }))
      return
    }
  }
  return (
    <div>
      <div className="container__detail__m">
        <div className="container__left__detail">
          <div className="img__left">
            <img src={`data:image/jpg;base64,${imagesBook}`} />
          </div>
        </div>
        <div className="container__right__detail">
          <div className="text__content__1">
            <h1>{bookName}</h1>
          </div>

          <div className="text__content">
            <div className="text__content__1">
              <div className="text">
                <span> Nhà cung cấp: </span>
                <span>{supplier}
                </span>
              </div>
              <div className="text">
                <span>Tác giả: </span>
                <span>{author}
                </span>
              </div>
              <div className="text">
                <span>Nhà xuất bản: </span>
                <span>{publisher}
                </span>
              </div>
              <div className="text">
                <span>Hình thức bìa: </span>
                <span>{bookLayout}
                </span>
              </div>
            </div>
          </div>
          <div className="rate">
            <Rate value={rateStar} disabled={true} />
          </div>
          {price ? <div className="text__content">
            <span className="price">{VNPRICE(price)}</span>
            {realPrice ? <span className="old_price">{VNPRICE(realPrice)}</span> : null}
          </div> :
            <div className="text__content">
              <span className="price">{price}đ</span>
              {realPrice ? <span className="old_price">{realPrice}đ</span> : null}
            </div>}

          <div className="text__content">
            <div className="text__content__2">
              <div className="text">
                <span>Chính sách đổi trả: </span>
                <span className="text__margin">Đổi trả sản phẩm trong 30 ngày </span>
              </div>
            </div>
          </div>

          <div className="text__content__input">
            <h3>Số lượng: </h3>
            <div className="text__content__input__count">
              <MinusOutlined style={{ borderRight: '1px solid #c1c1c1' }} onClick={() => { if (bookNumber > 1) setBookNumber(bookNumber - 1) }} className="detail__count--icon" />
              <InputNumber type="number" min={1} max={100000} value={bookNumber} onChange={(value) => setBookNumber(value)} className="detail__count--input" />
              <PlusOutlined style={{ borderLeft: '1px solid #c1c1c1' }} className="detail__count--icon" onClick={() => setBookNumber(bookNumber + 1)} />
            </div>
          </div>
        </div>
        <div className="container__low">
          {isUserLogin ?
            <div className="container__low__detail">
              <Button size="large" type="primary" danger onClick={handleAddCart}>
                <ShoppingCartOutlined />
                Thêm vào giỏ hàng
              </Button>
              <Button size="large" danger onClick={() => history.push("./checkout")}>
                Mua ngay
              </Button>
            </div>
            : <div className="container__low__detail--login">
              <Button onClick={showModal} size="large" type="primary" danger style={{ background: "#1890ff", border: 'none' }}>Đăng nhập để mua hàng</Button>
            </div>
          }
        </div>
      </div>
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal__login"
      >
        <Login handleCancel={handleCancel} />
      </Modal>
    </div >
  );
};
export default DetailBook;
