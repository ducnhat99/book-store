import React from 'react';
import '../../../styles/notification.css';
import ItemNotification from './ItemNotification';

const Notification = () => {
  return (
    <div className="">
      <div className="container__notice">
        <div className="notice__title__header">
          <div className="notice__title__header__up">
            <div className="notice__personal">
              <button>Thông tin cá nhân</button>
            </div>

            <div className="notice__product">
              <button>Thông tin sản phẩm </button>
            </div>
          </div>
        </div>

        <div className="notice__content">
          <div className="notice__content__main">
            <div className="notice__content_0">
              <ItemNotification
                title="Thông tin sản phẩm"
                content="skjfkalkkslafflsfkn"
                Date="01/01/2021"
              />
            </div>
            <div className="noti__content_0">
              <ItemNotification
                title="Thông tin sản phẩm"
                content="skjfkalkkslafflsfkn"
                Date="01/01/2021"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
