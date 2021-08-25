import React from 'react';
import { PhoneOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../../../styles/contact-footer.css';

function Contact() {
  return (
    <div>
      <div className="footer__contact">
        <div className="contact__text">
          <h3>LIÊN HỆ</h3>
        </div>

        <div className="container__contact__info">
          <div className="contact__info">
            <p>
              <HomeOutlined /> TP Da Nang - Viet Nam
            </p>
          </div>
          <div className="contact__info">
            <p>
              <MailOutlined /> infomation@gmail.com
            </p>
          </div>
          <div className="contact__info">
            <p>
              <PhoneOutlined /> 1900636467
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
