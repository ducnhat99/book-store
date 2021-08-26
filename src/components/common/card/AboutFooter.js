import React from 'react';

function About() {
  return (
    <div>
      <div className="footer__list__main_1">
        <div className="footer__list__item_1">
          <ul>
            <li>
              <h3>DỊCH VỤ</h3>
            </li>
            <li>
              <a>Điều khoản sử dụng</a>
            </li>
            <li>
              <a>Chính sách bảo mật</a>
            </li>
            <li>
              <a>Giới thiệu</a>{' '}
            </li>
            <li>
              {' '}
              <a>Hệ thống trung tâm - nhà sách</a>
            </li>
          </ul>
        </div>

        <div className="footer__list__item_1">
          <ul>
            <li>
              <h3>HỖ TRỢ</h3>
            </li>
            <li>
              <a>Chính sách đổi - trả - hoàn tiền </a>
            </li>
            <li>
              {' '}
              <a>Chính sách khách sỉ</a>
            </li>
            <li>
              <a>Phương thức vận chuyển </a>
            </li>
            <li>
              <a>Phương thức thanh toán và xuất HĐ </a>
            </li>
          </ul>
        </div>

        <div className="footer__list__item_1">
          <ul>
            <li>
              <h3>TÀI KHOẢN CỦA TÔI</h3>
            </li>
            <li>
              {' '}
              <a>Đăng nhập/Tạo mới tài khoản</a>
            </li>
            <li>
              {' '}
              <a>Thay đổi địa chỉ khách hàng</a>
            </li>
            <li>
              {' '}
              <a>Chi tiết tài khoản</a>
            </li>
            <li>
              {' '}
              <a>Lịch sử mua hàng</a>
            </li>
          </ul>
        </div>

        <div className="footer__list__item_1">
          <div className="list__item--hidden_1"></div>
        </div>
      </div>
    </div>
  );
}
export default About;
