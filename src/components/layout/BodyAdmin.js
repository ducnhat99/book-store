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

const BodyAdmin = () => {
    return (
        <div className="body-admin">
            <div className="container">
                <div className="admin--left-menu">

                </div>
                <div className="body-admin--main">
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
                    <EditDetailCart />
                </div>
            </div>
        </div>
    )
}

export default BodyAdmin