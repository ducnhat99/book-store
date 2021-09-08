import { Rate, Popover } from 'antd';
import { Link } from 'react-router-dom'
import CardHover from './CardHover';

const FeaturedCardItem = (props) => {
    const { images, title, price, realPrice, rateStar } = props
    const content = (
        <CardHover {...props} />
    );

    return (
        <Link to="/detail" className="featured-item__link" >
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
            </Popover>
        </Link>
    )
}

export default FeaturedCardItem