import { Rate, Popover } from 'antd';
import CardHover from './CardHover';

const SaleCardItem = (props) => {
    const { images, title, price, realPrice, rateStar } = props
    const content = (
        <div className="card__hover">
            <CardHover {...props} />
        </div>
    );
    return (
        <Popover content={content} placement="rightTop">
            <div className="new-card">
                <div className="new-card-content">
                    <div className="new-card-images">
                        <img src={images}></img>
                    </div>
                    <div className="new-card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="new-card-item-price">
                        <p>{price}</p>
                    </div>
                    <div className="new-card-item-real-price">
                        <p>{realPrice}</p>
                    </div>
                    <div>
                        <Rate defaultValue={rateStar} disabled={true} />
                    </div>
                </div>
            </div>
        </Popover>
    )
}

export default SaleCardItem