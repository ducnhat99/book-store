import { Rate, Popover } from 'antd';
import { Link } from 'react-router-dom'
import CardHover from './CardHover';

const FeaturedCardItem = (props) => {
    const { index, images, title, price, realPrice, rateStar, categoryId } = props
    const content = (
        <CardHover {...props} />
    );

    return (
        <Link to={{
            pathname: `/detail/${index}`,
            state: { categoryId: categoryId }
        }} className="featured-item__link" >
            <Popover content={content} placement="rightTop">
                <div className="featured-item" >
                    <div className="featured-item-images-container">
                        <div className="featured-item-images">
                            <img src={`data:image/jpg;base64,${images}`} alt="featured-book"></img>
                        </div>
                    </div>
                    <div className="featured-item-content">
                        <div className="featured-item-content-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="featured-item-content-price">
                            <p>{price.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            })}</p>
                        </div>
                        <div className="featured-item-content-real-price">
                            <p>{realPrice.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            })}</p>
                        </div>
                        <div className="featured-rate-start">
                            <Rate value={rateStar} disabled={true} />
                        </div>
                    </div>
                </div>
            </Popover>
        </Link>
    )
}

export default FeaturedCardItem