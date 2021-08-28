import images from '../../../images/book-orange.jpg';

const CartNotification = () => {
    return (
        <div className="cart--notification">
            <div className="cart--notification__images">
                <img src={images} alt="cart" />
            </div>
            <div className="cart--notification--main">
                <div className="cart--main__title">
                    <h4>Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)</h4>
                </div>
                <div className="cart--main__price">
                    <p>1 X 64.200d</p>
                </div>
            </div>
        </div>
    )
}

export default CartNotification