import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Rate, Input, InputNumber, Modal, notification, Skeleton } from 'antd';
import { useHistory, Link } from "react-router-dom";
import Login from '../form/Login';
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { USERLOGIN } from '../../../../constants/UserLogin';
import VNPRICE from '../../../../constants/FormatPrice';
import { getCartUser, addCartApi, getListCart, putCart, putBook, getBookDetail } from '../../../../slice/bookSlice'

const DetailBook = (props) => {
  const { categoryId, id, bookName, imagesBook, quantityPage, quantityBook, language, description, supplier, author, publisher, publishYear, rateStar, bookLayout, price, realPrice } = props
  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  const [bookNumber, setBookNumber] = React.useState(1)
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalCart, setIsModalCart] = React.useState(false);
  const dispatch = useDispatch()
  const listCartUser = useSelector(state => state.book.listCartUser)
  const listCartAll = useSelector(state => state.book.listCartAll)
  const bookDetail = useSelector(state => state.book.bookDetail)
  const status = useSelector(state => state.book.status)
  const cartId = Math.max(...listCartAll.map(item => item.id))
  useEffect(() => {
    dispatch(getCartUser(isUserLogin))
    dispatch(getBookDetail(id))
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
  const showModalCart = () => {
    setIsModalCart(true)
  }
  const handleCartOk = () => {
    setIsModalCart(false)
  }
  const handleCartCancel = () => {
    setIsModalCart(false)
  }
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Thông báo',
      description:
        'Số lượng sách không đủ',
    });
  };
  const handlePlusNumber = () => {
    if ((bookNumber + 1) <= bookDetail.quantityBook) {
      setBookNumber(bookNumber + 1)
    }
    else {
      openNotificationWithIcon('warning')
    }
  }
  const handleChangeNumber = (e) => {
    if (e.target.value == 0 || e.target.value === '') {
      setBookNumber(1)
    }
    else {
      if ((e.target.value) <= bookDetail.quantityBook) {
        setBookNumber(e.target.value)
      }
      else {
        setBookNumber(1)
        openNotificationWithIcon('warning')
      }
    }

  }
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
      showModalCart()
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
      showModalCart()
      return
    }
  }
  return (
    <>
      {status === 'loading' ? <div className="container__detail__m"><Skeleton active /></div> :
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
                <div >
                  <span>Chính sách đổi trả: </span>
                  <span className="text__margin">Đổi trả sản phẩm trong 30 ngày </span>
                </div>
              </div>
            </div>

            <div className="text__content__input">
              {quantityBook ? <>
                <h3>Số lượng: </h3>
                <div className="text__content__input__count">
                  <MinusOutlined style={{ borderRight: '1px solid #c1c1c1' }} onClick={() => { if (bookNumber > 1) setBookNumber(bookNumber - 1) }} className="detail__count--icon" />
                  <InputNumber type="number" min={1} max={100000} value={bookNumber} onBlur={(value) => handleChangeNumber(value)} className="detail__count--input" />
                  <PlusOutlined style={{ borderLeft: '1px solid #c1c1c1' }} className="detail__count--icon" onClick={handlePlusNumber} />
                </div></> : <p style={{ color: 'red', fontSize: '20px' }}>Hết hàng</p>}
            </div>
          </div>
          {quantityBook ?
            <div className="container__low">
              {isUserLogin ?
                <div className="container__low__detail">
                  <Button size="large" type="primary" danger onClick={handleAddCart} >
                    <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                    Thêm vào giỏ hàng
                  </Button>
                  <Link to={{
                    pathname: `/checkout`,
                    state: {
                      bookId: parseInt(id),
                      quantity: bookNumber,
                      total: bookNumber * price
                    }
                  }}><Button size="large" danger >
                      Mua ngay
                    </Button>
                  </Link>
                </div>
                : <div className="container__low__detail--login">
                  <Button onClick={showModal} size="large" type="primary" danger style={{ background: "#1890ff", border: 'none' }}>Đăng nhập để mua hàng</Button>
                </div>
              }
            </div> : null}
        </div>
      }
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal__login"
      >
        <Login handleCancel={handleCancel} />
      </Modal>
      <Modal
        footer={null}
        visible={isModalCart}
        onOk={handleCartOk}
        className="modal__login"
        closable={false}
        width={400}
      >
        <div className="modal__cart">
          <div className="modal__cart--title">
            <p>Sản phẩm đã được thêm vào giỏ hàng của bạn</p>
          </div>
          <div className="modal__cart--images">
            <img src={`data:image/jpg;base64,${imagesBook}`} alt="cart" />
          </div>
          <p>{bookName}</p>
          <div className="modal__cart--button">
            <Button type="primary" onClick={handleCartCancel}>Chọn thêm</Button>
            <Link to="/cart">
              <Button type="primary">Thanh toán</Button>
            </Link>
          </div>
        </div>
      </Modal>
    </ >
  );
};
export default DetailBook;
