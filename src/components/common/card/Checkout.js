import React from 'react';
import { Button, Input, Radio } from 'antd';
import 'antd/dist/antd.css';

const Checkout = () => {
    return (
        <div className="checkout--container">
            <div className="container">
                <div className="checkout--header">
                    <h2>GIỎ HÀNG</h2>
                </div>
                <div className="checkout--main">
                    <div className="checkout--main--form">
                        <div className="checkout--main__header">
                            <h4>THÔNG TIN GIAO HÀNG</h4>
                        </div>
                        <form>
                            <div className="checkout--main--box">
                                <label>
                                    Họ và tên người nhận
                                </label>
                                <Input placeholder="Nhập họ và tên người nhận" />
                            </div>
                            <p></p>
                            <div className="checkout--main--box">
                                <label>
                                    Số điện thoại
                                </label>
                                <Input type="number" placeholder="Nhập số điện thoại người nhận" />
                            </div>
                            <p></p>
                            <div className="checkout--main--box">
                                <label>
                                    Địa chỉ email
                                </label>
                                <Input placeholder="Nhập địa chỉ email" />
                            </div>
                            <p></p>
                            <div className="checkout--main--box">
                                <label>
                                    Địa chỉ nhận hàng
                                </label>
                                <Input placeholder="Nhập địa chỉ nhận hàng" />
                            </div>
                            <p></p>
                        </form>
                    </div>
                    <div className="checkout--main--pay">
                        <div className="checkout--main--pay__header">
                            <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                        </div>
                        <div className="checkout--main--pay__radio">
                            <Radio.Group className="checkout--main--pay__radio--box">
                                <Radio value="Ví Momo" className="checkout--main__radio--item">Ví Momo</Radio>
                                <Radio value="Thanh toán khi nhận hàng" className="checkout--main__radio--item">Thanh toán khi nhận hàng</Radio>
                            </Radio.Group>
                        </div>
                        <div className="checkout--main--pay__btn--box">
                            <div className="checkout--main--pay__btn">
                                <Button type="primary">Xác nhận thanh toán</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout