import '../../styles/header-admin.scss'
import LogoAdmin from '../common/card/admin/LogoAdmin'
import SearchAdmin from '../common/card/admin/SearchAdmin'
import InfoAdmin from '../common/card/admin/InfoAdmin'
const HeaderAdmin = () => {
    return (
        <div className="header-admin">
            <div className="container">
                <div className="header-admin-logo">
                    <LogoAdmin />
                </div>
                <div className="header-admin-search">
                    <SearchAdmin />
                </div>
                <div className="header-admin-navigation">
                    <InfoAdmin />
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin