import { Rate, Popover } from 'antd';
import CardHover from './CardHover';
import { Link } from 'react-router-dom'
import VNPRICE from '../../../constants/FormatPrice';

const NewCardItem = (props) => {
    const { index, images, title, price, realPrice, rateStar } = props
    const content = (
        <CardHover {...props} />
    );
    return (
        <Link to={`/detail/${index}`}>
            <Popover content={content} placement="rightTop" >
                <div className="new-card-content">
                    <div className="new-card-images">
                        <img src={`data:image/jpg;base64,${images}`} />
                    </div>
                    <div className="new-card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="new-card-item-price">
                        <p>{VNPRICE(price)}</p>
                    </div>
                    <div className="new-card-item-real-price">
                        <p>{VNPRICE(realPrice)}</p>
                    </div>
                    <div>
                        <Rate value={rateStar} disabled={true} />
                    </div>
                </div>
            </Popover >
        </Link>
    )
}

export default NewCardItem