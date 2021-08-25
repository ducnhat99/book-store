import React from 'react';
import About from '../common/card/AboutFooter';
import Contact from '../common/card/ContactFooter';
import Infor from '../common/card/InforFooter';
import Shipping from '../common/card/ship';
import Slide from '../common/card/SlideFooter';
import 'antd/dist/antd.css';

function Footer() {
  return (
    <div className="container">
      <div className="footer__ip__x">
        <Slide />
      </div>
      <div className="container__footer">
        <div className="footer__left">
          <Infor />
        </div>

        <div className="footer__right">
          <About />

          <Contact />

          <Shipping />
        </div>
      </div>

      <div className=" footer__last">
        <p>
          Giấy chứng nhận Đăng ký Kinh doanh số **0304132047** do Sở Kế hoạch và Đầu tư cấp ngày
          DD/MM/YYYY.
        </p>
      </div>
    </div>
  );
}
export default Footer;
