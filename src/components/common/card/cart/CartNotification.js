import { Link } from 'react-router-dom'

const CartNotification = (props) => {
    const { id, bookId, images, title, quantity, price } = props
    return (
        <Link to={`/detail/${bookId}`}>
            <div className="cart--notification">
                <div className="cart--notification__images">
                    <img src={`data:image/jpg;base64,${images}`} alt="cart" />
                </div>
                <div className="cart--notification--main">
                    <div className="cart--main__title">
                        <h4>{title}</h4>
                    </div>
                    <div className="cart--main__price">
                        <p>{quantity} X {price} </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CartNotification