import {
    CloseCircleOutlined
} from '@ant-design/icons';
const Order = () => {
    return (
        <>
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
                    <td><CloseCircleOutlined className="cart-item--remove__icon" /></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</td>
                    <td>1</td>
                    <td>31-08-2021</td>
                    <td>Da Nang</td>
                    <td>Dang giao hang</td>
                    <td><CloseCircleOutlined className="cart-item--remove__icon" /></td>
                </tr>
            </table>
            <div className="order-phone">
                <div className="order-phone--content">
                    <div className="order-phone--content__container">
                        <p>STT</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Mã ĐH</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container--title">
                        <p>Tên SP</p>
                        <p>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Số lượng</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Ngày ĐH</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container--title">
                        <p>Địa chỉ</p>
                        <p>Đà Nẵng</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Tình trạng</p>
                        <p>Đang giao hàng</p>
                    </div>
                </div>
                <div className="order-phone--cancel">
                    <CloseCircleOutlined className="cart-item--remove__icon" />
                </div>
            </div>
            <div className="order-phone">
                <div className="order-phone--content">
                    <div className="order-phone--content__container">
                        <p>STT</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Mã ĐH</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container--title">
                        <p>Tên SP</p>
                        <p>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Số lượng</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Ngày ĐH</p>
                        <p>1</p>
                    </div>
                    <div className="order-phone--content__container--title">
                        <p>Địa chỉ</p>
                        <p>Đà Nẵng</p>
                    </div>
                    <div className="order-phone--content__container">
                        <p>Tình trạng</p>
                        <p>Đang giao hàng</p>
                    </div>
                </div>
                <div className="order-phone--cancel">
                    <CloseCircleOutlined className="cart-item--remove__icon" />
                </div>
            </div>
        </>
    )
}

export default Order