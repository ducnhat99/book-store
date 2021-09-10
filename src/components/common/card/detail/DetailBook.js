import React from 'react';
import { Button, Rate, Input, InputNumber, Modal } from 'antd';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Login from '../form/Login';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { USERLOGIN } from '../../../../constants/UserLogin';

const DetailBook = () => {
  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  const history = useHistory()
  const [bookNumber, setBookNumber] = React.useState(1)
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="container__detail__m">
        <div className="container__left__detail">
          <div className="img__left">
            <img
              id="image"
              src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_36793.jpg"
              alt="Nhà Giả Kim (Tái Bản 2020)"
              title="Nhà Giả Kim (Tái Bản 2020)"
            />
          </div>
        </div>
        <div className="container__right__detail">
          <div className="text__content__1">
            <h1>Nhà Giả Kim (Tái Bản 2020)</h1>
          </div>

          <div className="text__content">
            <div className="text__content__1">
              <div className="text">
                <span> Nhà cung cấp: </span>
                <span>Nhã Nam
                </span>
              </div>
              <div className="text">
                <span>Tác giả: </span>
                <span>Paulo Coelho
                </span>
              </div>
              <div className="text">
                <span>Nhà xuất bản: </span>
                <span>NXB Hội Nhà Văn
                </span>
              </div>
              <div className="text">
                <span>Hình thức bìa: </span>
                <span>Bìa mềm
                </span>
              </div>
            </div>
          </div>
          <div className="rate">
            <Rate defaultValue={2} disabled={true} />
            <a href="#comment">(37 đánh giá)</a>
          </div>
          <div className="text__content">
            <span className="price">55.300&nbsp;đ</span>
            <span className="old_price">79.000&nbsp;đ</span>
          </div>

          <div className="text__content">
            <div className="text__content__2">
              <div className="text">
                <span>Giao hàng đến:  </span>
                <span className="text__margin">
                  Da Nang
                </span>
              </div>
              <div className="text">
                <span>Chính sách đổi trả: </span>
                <span className="text__margin">Đổi trả sản phẩm trong 30 ngày </span>
              </div>
            </div>
          </div>

          <div className="text__content__input">
            <h3>Số lượng: </h3>
            <InputNumber type="number" size="small" min={1} max={100000} size="small" min={1} max={100000} value={bookNumber} onChange={(value) => setBookNumber(value)} />
          </div>
        </div>
        <div className="container__low">
          {isUserLogin ?
            <div className="container__low__detail">
              <Button size="large" type="primary" danger>
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
