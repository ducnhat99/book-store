import React from 'react';
import '../../../styles/shipping.css';

function Shipping() {
  return (
    <div>
      <div className="ship">
        <div className="ship__unit">
          <div className="ship__up">
            <img
              src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/vnpost.png"
              style={{ width: '100px' }}
            />
            <img
              src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo.png"
              style={{ width: '110px' }}
            ></img>
            <img
              src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/icon_giao_hang_nhanh.png"
              style={{ maxWidth: '150px' }}
            ></img>
            <img
              src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy.png"
              style={{ maxWidth: '150px' }}
            ></img>
          </div>
          <div className="ship__low">
            <img
              style={{ maxWidth: '120px' }}
              src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/vnpay_logo.png"
            />
            <img
              style={{ maxWidth: '120px' }}
              src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/ZaloPay-logo-130x83.png"
            />

            <img
              style={{ maxHeight: '50px' }}
              src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png"
            />

            <img
              style={{ maxHeight: '44px' }}
              src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png"
            />

            <img
              style={{ maxHeight: '65px' }}
              src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/logo_moca_120.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shipping;
