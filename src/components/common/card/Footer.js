import React from 'react';

import About from './AboutFooter';
import Contact from './ContactFooter';
import Infor from './InforFooter';
import Shipping from './ship';
import Slide from './SlideFooter';

import 'antd/dist/antd.css';
import '../../../styles/footer.css';

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
