import Logo from "../common/card/Logo"
import Search from "../common/card/Search"
import Navigation from "../common/card/Navigation"
import "../../styles/header.css"
import menu from "../../images/menu.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Logo />
            </div>
            <div className="header-menu">
                <img src={menu}></img>
            </div>
            <div className="header-search">
                <Search />
            </div>
            <div className="header-navigation">
                <Navigation />
            </div>
        </div>
    )
}

export default Header