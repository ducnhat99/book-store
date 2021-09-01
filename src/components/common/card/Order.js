const Order = () => {
    return (
        <table className="order--table">
            <tr className="order--table--header">
                <th className="order--table__id">STT</th>
                <th className="order--table__idcart">Mã Đh</th>
                <th className="order--table__title">Tên sản phẩm</th>
                <th className="order--table__cartnumber">Số lượng</th>
                <th className="order--table__date">Ngày đặt hàng</th>
                <th className="order--table__address">Địa chỉ</th>
                <th className="order--table__tt">Tình trạng</th>
                <th className="order--table__cancel">Hủy</th>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</td>
                <td>1</td>
                <td>31-08-2021</td>
                <td>Da Nang</td>
                <td>Dang giao hang</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</td>
                <td>1</td>
                <td>31-08-2021</td>
                <td>Da Nang</td>
                <td>Dang giao hang</td>
                <td></td>
            </tr>
        </table>
    )
}

export default Order