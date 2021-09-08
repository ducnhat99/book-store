import { Rate, Popover } from 'antd';
import CardHover from './CardHover';
import { Link } from 'react-router-dom'

const NewCardItem = (props) => {
    const { index, images, title, price, realPrice, rateStar } = props
    const content = (
        <CardHover {...props} />
    );
    return (
        <Link to="/detail">
            <Popover content={content} placement="rightTop" >
                <div className="new-card-content">
                    <div className="new-card-images">
                        <img src={`data:image/jpg;base64,${images}`} />
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
            </Popover >
        </Link>
    )
}

export default NewCardItem