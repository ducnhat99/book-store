import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { batch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Button, Input, Radio, notification, Modal, Spin } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getUser, getListOrder, getBooks, addOrder, putBook, getCartUser, deleteCartUser } from '../../../../slice/bookSlice'
import emailjs from 'emailjs-com';
import { isEmpty } from 'validator';
import isEmail from 'validator/lib/isEmail';
import VNPRICE from '../../../../constants/FormatPrice';
import qrcode from '../../../../images/qrcode.jpg'
import { setTimeout } from 'timers';

const Checkout = (props) => {
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const user = useSelector(state => state.book.user)
    const listOrder = useSelector(state => state.book.listOrder)
    const listBook = useSelector(state => state.book.listBook)
    const listCartUser = useSelector(state => state.book.listCartUser)
    const [fullName, setFullName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [arrOrder, setArrOrder] = React.useState([])
    const [validationMsg, setValidationMsg] = React.useState({});
    const [pay, setPay] = React.useState('Thanh toán khi nhận hàng')
    const orderId = Math.max(...listOrder.map(item => item.id))
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(getUser(isUserLogin))
        dispatch(getCartUser(isUserLogin))
        dispatch(getListOrder())
        dispatch(getBooks())
    }, [dispatch])
    useEffect(() => {
        setFullName(user.fullName)
        setPhoneNumber(user.phoneNumber)
        setEmail(user.email)
        setAddress(user.address)
    }, [user])
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const form = useRef();
    useEffect(() => {
        const list = []
        listCartUser.map((element, index) => {
            list.push({
                bookId: element.bookId,
                quantityOrder: element.quantity,
                total: element.total
            })
            return
        });
        setArrOrder(list)
    }, [listCartUser])
    const totalMoney = listCartUser.reduce((a, b) => a + b.total, 0
    )
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Đặt hàng thành công !',
            description: 'Vui lòng kiểm tra lại đơn hàng',
        });
    };
    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.emailInput = 'Xin vui lòng nhập Email';
        } else if (!isEmail(email)) {
            msg.emailInput = 'Email của bạn không chính xác';
        }
        if (isEmpty(phoneNumber)) {
            msg.phone = 'Xin vui lòng nhập số điện thoại';
        } else if (isNaN(phoneNumber)) {
            msg.phone = 'Xin vui lòng nhập lại số điện thoại';
        } else if (!phoneNumber.match(/^\d{10}$/)) {
            msg.phone = 'Số điện thoại gồm 10 chữ số'
        }
        if (isEmpty(fullName)) {
            msg.userName = 'Xin vui lòng nhập họ và tên ';
        } else if (!isNaN(fullName)) {
            msg.userName = 'Xin vui lòng nhập đúng họ và tên';
        }
        if (isEmpty(address)) {
            msg.address = 'Xin vui lòng nhập địa chỉ';
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_04xjr3g', 'template_a20nnkd', form.current, 'user_PyEFvLpNaNDkWn9Idh0EB').then(res => {
            console.log(res);
        }).catch(err => { console.log(err) })
    }
    const handleCheckout = async (e) => {
        const isValid = validateAll();
        if (!isValid) return;
        if (!!props.location.state) {
            if (pay === 'Thanh toán khi nhận hàng') {
                sendEmail(e)
                await dispatch(addOrder({
                    userId: isUserLogin,
                    id: orderId + 1,
                    fullName: fullName,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address,
                    bookingDate: moment().format('DD/MM/YYYY'),
                    bill: props.location.state.total + 30000,
                    detailOrder: [{
                        bookId: props.location.state.bookId,
                        quantityOrder: props.location.state.quantity,
                        total: props.location.state.total
                    }],
                    payments: 'Trực tiếp',
                    status: 'Chờ duyệt',
                }))
                await listBook.map((book) => {
                    if (book.id === props.location.state.bookId) {
                        dispatch(putBook({
                            categoryId: book.categoryId,
                            id: book.id,
                            bookName: book.bookName,
                            supplier: book.supplier,
                            publisher: book.publisher,
                            publishYear: book.publishYear,
                            author: book.author,
                            bookLayout: book.bookLayout,
                            language: book.language,
                            quantityPage: book.quantityPage,
                            rateStar: book.rateStar,
                            description: book.description,
                            imagesBook: book.imagesBook,
                            quantityBook: book.quantityBook - props.location.state.quantity,
                            price: book.price,
                            realPrice: book.realPrice,
                        }))
                    }
                })
                openNotificationWithIcon('success')
                await history.push("/home")
            }
            else {
                showModal()
            }
        }
        else {
            if (pay === 'Thanh toán khi nhận hàng') {
                sendEmail(e)
                setIsLoading(true)
                await dispatch(addOrder({
                    userId: isUserLogin,
                    id: orderId + 1,
                    fullName: fullName,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address,
                    bookingDate: moment().format('DD/MM/YYYY'),
                    bill: totalMoney + 30000,
                    detailOrder: arrOrder,
                    payments: 'Trực tiếp',
                    status: 'Chờ duyệt'
                }))
                setTimeout(() => {
                    listBook.map((item) => {
                        (listCartUser.map((e, index) => {
                            if (e.bookId === item.id) {
                                setTimeout(async () => {
                                    await dispatch(putBook({
                                        categoryId: item.categoryId,
                                        id: item.id,
                                        bookName: item.bookName,
                                        supplier: item.supplier,
                                        publisher: item.publisher,
                                        publishYear: item.publishYear,
                                        author: item.author,
                                        bookLayout: item.bookLayout,
                                        language: item.language,
                                        quantityPage: item.quantityPage,
                                        rateStar: item.rateStar,
                                        description: item.description,
                                        imagesBook: item.imagesBook,
                                        quantityBook: item.quantityBook - e.quantity,
                                        price: item.price,
                                        realPrice: item.realPrice,
                                    }))
                                    dispatch(deleteCartUser(e.id))
                                }, 1700 * index);
                            }
                        }))
                    })
                }, 300);
                setTimeout(() => {
                    setIsLoading(false)
                    openNotificationWithIcon('success')
                    history.push("/home")
                }, (listCartUser.length + 1) * 1700);
            }
            else {
                showModal()
            }
        }
    }
    return (
        <>
            <Spin spinning={isLoading} delay={50} size="large">
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
                                <form ref={form}>
                                    <div className="checkout--main--box">
                                        <label>
                                            Họ và tên người nhận
                                        </label>
                                        <Input name="name" placeholder="Nhập họ và tên người nhận" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="checkout__error">
                                        <p className="msg--error_register">{validationMsg.userName}</p>
                                    </div>
                                    <div className="checkout--main--box">
                                        <label>
                                            Số điện thoại
                                        </label>
                                        <Input name="phone" type="number" placeholder="Nhập số điện thoại người nhận" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                    <div className="checkout__error">
                                        <p className="msg--error_register">{validationMsg.phone}</p>
                                    </div>
                                    <div className="checkout--main--box">
                                        <label>
                                            Địa chỉ email
                                        </label>
                                        <Input name="email" placeholder="Nhập địa chỉ email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="checkout__error">
                                        <p className="msg--error_register">{validationMsg.emailInput}</p>
                                    </div>
                                    <div className="checkout--main--box">
                                        <label>
                                            Địa chỉ nhận hàng
                                        </label>
                                        <Input name="address" placeholder="Nhập địa chỉ nhận hàng" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="checkout__error">
                                        <p className="msg--error_register">{validationMsg.address}</p>
                                    </div>
                                </form>
                            </div>
                            <div className="checkout--main--pay">
                                <div className="checkout--main--pay__header">
                                    <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                                </div>
                                <div className="checkout--main--pay__radio">
                                    <Radio.Group name="pay" className="checkout--main--pay__radio--box" value={pay} onChange={(e) => setPay(e.target.value)}>
                                        <Radio value="Ví Momo" className="checkout--main__radio--item">Ví Momo</Radio>
                                        <Radio value="Thanh toán khi nhận hàng" className="checkout--main__radio--item">Thanh toán khi nhận hàng</Radio>
                                    </Radio.Group>
                                </div>
                                <div className="checkout--main--pay__price">
                                    <p>Tổng số tiền</p>
                                    {!!props.location.state ? <p name="price">{VNPRICE(props.location.state.total + 30000)}</p> : <p name="price">{VNPRICE(totalMoney + 30000)}</p>}
                                </div>
                                <div className="checkout--main--pay__btn--box">
                                    <div className="checkout--main--pay__btn">
                                        <Button type="primary" onClick={handleCheckout}>Xác nhận thanh toán</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
            <Modal
                footer={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="modal__login"
                width={250}
            >
                <img src={qrcode} alt="qrcode" style={{ width: '100%', height: '250px' }} />
            </Modal>
        </>
    )
}

export default Checkout