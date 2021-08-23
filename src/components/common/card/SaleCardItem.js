import { Rate } from 'antd';

import images from '../../../images/book-orange.jpg'
const SaleCardItem = () => {
    return (
        <div className="new-card">
            <div className="new-card-content">
                <div className="new-card-images">
                    <img src={images}></img>
                </div>
                <div className="new-card-title">
                    <h3>Cây Cam Ngọt Của Tôi</h3>
                </div>
                <div className="new-card-item-price">
                    <p>75.000d</p>
                </div>
                <div>
                    <Rate defaultValue={5} disabled={true} />
                </div>
            </div>
        </div>
    )
}

export default SaleCardItem