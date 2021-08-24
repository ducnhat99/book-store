import { Rate } from 'antd';

const FeaturedCardItem = (props) => {
    const { images, title, price, realPrice, rateStar } = props
    return (
        <div className="featured-item">
            <div className="featured-item-images-container">
                <div className="featured-item-images">
                    <img src={images} alt="featured-book"></img>
                </div>
            </div>
            <div className="featured-item-content">
                <div className="featured-item-content-title">
                    <h3>{title}</h3>
                </div>
                <div className="featured-item-content-price">
                    <p>{price}</p>
                </div>
                <div className="featured-item-content-real-price">
                    <p>{realPrice}</p>
                </div>
                <div className="featured-rate-start">
                    <Rate defaultValue={rateStar} disabled={true} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCardItem