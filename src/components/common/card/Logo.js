import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
const Logo = () => {
    return (
        <Link to="/home">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
        </Link>
    )
}

export default Logo