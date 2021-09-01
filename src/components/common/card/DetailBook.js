import React from 'react';
import { Button, Rate, Input } from 'antd';
import { useHistory } from "react-router-dom";
import '../../../styles/detail-book.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const DetailBook = () => {
  const history = useHistory()
  const [bookNumber, setBookNumber] = React.useState(1)
  const handleSetBookNumber = (number) => {
    if (number > 0)
      setBookNumber(number)
    else {
      setBookNumber(1)
    }
  }
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
            <a>(37 đánh giá)</a>
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

          <div className="text__content">
            <h3>Số lượng: </h3>
            <Input type="number" value={bookNumber} onChange={(e) => handleSetBookNumber(e.target.value)} />
          </div>
        </div>
        <div className="container__low">
          <div className="container__low__detail">
            <Button size="large" type="primary" danger>
              <ShoppingCartOutlined />
              Thêm vào giỏ hàng
            </Button>
            <Button size="large" danger onClick={() => history.push("./checkout")}>
              Mua ngay
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};
export default DetailBook;
