import { Button } from 'antd';
import 'antd/dist/antd.css';
import top from '../../../images/featured.jpg';
import FeaturedCardItem from './FeaturedCardItem';

const FeaturedCardContainer = () => {
    return (
        <div className="featured-container">
            <div className="featured-header">
                <h2>SÁCH NỖI BẬT</h2>
            </div>
            <div className="featured-main">
                <div className="top-featured">
                    <div className="top-featured-images">
                        <img src={top} alt="top 1 featured" />
                    </div>
                </div>
                <div className="featured-main-item">
                    <div className="featured-main-list-item">
                        <FeaturedCardItem />
                        <FeaturedCardItem />
                        <FeaturedCardItem />
                        <FeaturedCardItem />
                    </div>
                    <div className="featured-load-more">
                        <Button type="default" className="btn-featured-load-more"> Xem thêm</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedCardContainer