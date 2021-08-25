import { Rate } from 'antd';

const NewCardItem = (props) => {
    const { images, title, price, realPrice, rateStar } = props
    return (
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
    )
}

export default NewCardItem