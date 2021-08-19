import bell from '../../../images/bell.svg'
import cart from '../../../images/cart.svg'
import login from '../../../images/login.svg'
import '../../../styles/navigation.css'

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="navigation-item">
                <img className="navigation-img" src={bell}></img>
                <p>Thông báo</p>
            </div>
            <div className="navigation-item">
                <img className="navigation-img" src={cart}></img>
                <p>Giỏ hàng</p>
            </div>
            <div className="navigation-item">
                <img className="navigation-img" src={login}></img>
                <p>Đăng nhập</p>
            </div>
        </div>
    )
}

export default Navigation