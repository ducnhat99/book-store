import { Rate } from 'antd';
import humble from '../../../images/humble.jpg'

const FeaturedCardItem = () => {
    return (
        <div className="featured-item">
            <div className="featured-item-images-container">
                <div className="featured-item-images">
                    <img src={humble} alt="featured-book"></img>
                </div>
            </div>
            <div className="featured-item-content">
                <div className="featured-item-content-title">
                    <h3>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</h3>
                </div>
                <div className="featured-item-content-price">
                    <p>50000d</p>
                </div>
                <div className="featured-item-content-real-price">
                    <p>150000d</p>
                </div>
                <div className="featured-rate-start">
                    <Rate defaultValue={5} disabled={true} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCardItem