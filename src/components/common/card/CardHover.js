import { Rate } from 'antd';


const CardHover = (props) => {
    console.log(props)
    return (
        <div className="card__hover">

            <div className="card__hover__title">
                <h3>{props.title}</h3>
            </div>
            <div className="card__hover__price">
                <p>{props.price} <span>{props.realPrice}</span></p>
            </div>
            <div className="card__hover__rate">
                <Rate defaultValue={props.rateStar} disabled={true} />
            </div>
            <div className="card__hover__item">
                <p><b>Tác giả:</b> {props.author}</p>
            </div>
            <div className="card__hover__item">
                <p><b>Danh mục:</b> {props.product}</p>
            </div>
            <div className="card__hover__item">
                <p><b>Số trang:</b> {props.page}</p>
            </div>
            <div className="card__hover__description">
                <p><b>Nội dung:</b> {props.description}</p>
            </div>
        </div>
    )
}

export default CardHover