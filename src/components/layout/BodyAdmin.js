import { Switch, Route, Redirect } from "react-router-dom";
import AddBook from "../common/card/admin/AddBook"
import AddUser from "../common/card/admin/AddUser"
import DetailCart from "../common/card/admin/DetailCart"
import EditCart from "../common/card/admin/EditCart"
import EditDetailCart from "../common/card/admin/EditDetailCart"
import EditUser from "../common/card/admin/EditUser"
import FormEditBook from "../common/card/admin/FormEditBook"
import ListBook from "../common/card/admin/ListBook"
import ListCart from "../common/card/admin/ListCart"
import ListCategory from "../common/card/admin/ListCategory"
import ListUser from "../common/card/admin/ListUser"
import NavBarAdmin from "../common/card/admin/NavBarAdmin"
import AdminHome from "../common/card/admin/AdminHome";
import ROUTE from "../../constants/Router"
const BodyAdmin = () => {
    return (
        <div className="body-admin">
            <div className="container">
                <div className="admin--left-menu">
                    <NavBarAdmin />
                </div>
                <div className="body-admin--main">
                    <Route path={ROUTE.HOMEADMIN} component={AdminHome} />
                    <Route path={ROUTE.LISTBOOK} component={ListBook} />
                    <Route path={ROUTE.LISTCART} component={ListCart} />
                    <Route path={ROUTE.LISTUSER} component={ListUser} />
                    <Route path={ROUTE.ADDUSER} component={AddUser} />
                    <Route path={ROUTE.ADDBOOK} component={AddBook} />
                    <Route path={ROUTE.LISTCATEGORY} component={ListCategory} />
                    <Route path={ROUTE.EDITBOOK} component={FormEditBook} />
                    <Route path={ROUTE.EDITDETAILCART} component={EditDetailCart} />
                    <Route path={ROUTE.EDITCART} component={EditCart} />
                    <Route path={ROUTE.DETAILCART} component={DetailCart} />
                    <Route path={ROUTE.EDITUSER} component={EditUser} />
                    <Redirect to={ROUTE.HOMEADMIN} />
                </div>
            </div>
        </div>
    )
}

export default BodyAdmin