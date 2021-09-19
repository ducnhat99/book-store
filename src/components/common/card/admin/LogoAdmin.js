import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import logo from '../../../../images/logo.png'
const LogoAdmin = () => {
    const history = useHistory();
    return (
        // <Link to="/home">
        <div className="logo" onClick={() => history.push('/admin/home')}>
            <img src={logo} alt="logo"></img>
        </div>
        // </Link>
    )
}

export default LogoAdmin