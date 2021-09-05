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
import NavBarAdmin from "../common/card/NavBarAdmin"
import AdminHome from "../common/card/admin/AdminHome";

const BodyAdmin = () => {
    return (
        <div className="body-admin">
            <div className="container">
                <div className="admin--left-menu">
                    <NavBarAdmin />
                </div>
                <div className="body-admin--main">
                    <Route path="/admin/home" component={AdminHome} />
                    <Route path="/admin/listbook" component={ListBook} />
                    <Route path="/admin/listcart" component={ListCart} />
                    <Route path="/admin/listuser" component={ListUser} />
                    <Route path="/admin/adduser" component={AddUser} />
                    <Route path="/admin/addbook" component={AddBook} />
                    <Route path="/admin/listcategory" component={ListCategory} />
                    <Route path="/admin/editbook" component={FormEditBook} />
                    <Route path="/admin/editdetailcart" component={EditDetailCart} />
                    <Route path="/admin/editcart" component={EditCart} />
                    <Route path="/admin/detailcart" component={DetailCart} />
                    <Route path="/admin/edituser" component={EditUser} />

                    <Redirect to="/admin/home" />
                    {/* <Redirect to="/listbook" /> */}
                    {/* <ListBook /> */}
                    {/* <ListCategory /> */}
                    {/* <ListUser /> */}
                    {/* <ListCart /> */}
                    {/* <FormEditBook /> */}
                    {/* <AddBook /> */}
                    {/* <AddUser /> */}
                    {/* <EditUser /> */}
                    {/* <EditCart /> */}
                    {/* <DetailCart /> */}
                    {/* <EditDetailCart /> */}
                </div>
            </div>
        </div>
    )
}

export default BodyAdmin