import React from 'react';
import About from '../common/card/footer/AboutFooter';
import Contact from '../common/card/footer/ContactFooter';
import Infor from '../common/card/footer/InforFooter';
import Shipping from '../common/card/footer/ship';
import Slide from '../common/card/footer/SlideFooter';
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
