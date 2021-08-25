import React from 'react';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

function Infor() {
  return (
    <div>
      <div className="footer__left__main">
        <div>
          <h1>LOGO</h1>
        </div>

        <div className="left__text">
          <p>
            Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM <br />Công Ty Cổ Phần Phát Hành Sách - 62 Lê Lợi,
            Quận 1, TP. HCM, Việt Nam
          </p>
          <p>
            Chúng tôi nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực
            tiếp tại văn phòng cũng như tất cả Hệ Thống trên toàn quốc.
          </p>
        </div>

        <div>
          <img
            src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao.png"
            style={{ width: '120px', height: '40px' }}
          />
        </div>

        <div className="icon__left">
          <FacebookOutlined />

          <InstagramOutlined />

          <YoutubeOutlined />

          <TwitterOutlined />
        </div>

        <div>
          <img
            src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/android.png"
            style={{ maxWidth: '110px', marginTop: '5px' }}
          />
          <br />
          <img
            src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/appstore.png"
            style={{ maxWidth: '110px', marginTop: '5px' }}
          />
        </div>
      </div>
    </div>
  );
}
export default Infor;
