import React from 'react';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function Slide() {
  return (
    <div>
      <div className="footer__ip__x">
        <div className="footer__slice">
          <ul>
            <li>
              <a href="" style={{ marginLeft: '5px' }}>
                <LeftCircleOutlined />
              </a>
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/cambridge.jpg"
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/cengage.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/Harper-Collins.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/hachette.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/macgrawhill.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/macmillan.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/oxford.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ maxWidth: '30px' }}
                src="https://cdn0.fahasa.com/media/wysiwyg/NXB/logo-nxb/logo-home-page/paragon.jpg"
                alt=""
              />
            </li>

            <li>
              <a href="" style={{ float: 'right', marginLeft: '5px' }}>
                <RightCircleOutlined />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Slide;
