import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { Button, Input, Modal, Pagination, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import Login from '../form/Login';
import CardComment from './CardComment';
import { USERLOGIN } from '../../../../constants/UserLogin';
import { getCommentsBook, addCommentApi, getListComments, getListUser } from '../../../../slice/bookSlice'

const CommentUser = (props) => {
    const { id } = props
    const dispatch = useDispatch()
    const [comment, setComment] = React.useState([])
    const [rateStar, setRateStar] = React.useState(5)
    const [content, setContent] = React.useState('')
    const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
    const { TextArea } = Input;
    const listComments = useSelector(state => state.book.commentsBook)
    const listCommentsAll = useSelector(state => state.book.listComments)
    const listUser = useSelector(state => state.book.listUsers)
    const pageLimit = 12;
    const [pageSlice, setPageSlice] = React.useState(0)
    const handleChange = (page, pageSize) => {
        setPageSlice((page - 1) * pageSize)
    }
    useEffect(() => {
        dispatch(getCommentsBook(id))
        dispatch(getListComments())
        dispatch(getListUser())
    }, [dispatch, id])
    useEffect(() => {
        let list = [...listComments]
        list = list.sort((a, b) => b.id - a.id)
        setComment(list)
    }, [listComments])
    const commentId = Math.max(...listCommentsAll.map(item => item.id))
    const handleClickComment = () => {
        if (!!content.trim() && !!rateStar) {
            dispatch(addCommentApi({
                userId: isUserLogin,
                bookId: parseInt(id),
                id: commentId + 1,
                content: content,
                star: rateStar,
                dateTime: moment().format('DD/MM/YYYY')
            }))
            setContent('')
            return
        }
        else {
            return openNotificationWithIcon('warning')

        }
    }
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Đánh giá thất bại !',
            description: 'Vui lòng đánh giá sao và nhập nội dung đánh giá',
        }
        );
    };
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="comment" id="comment">
            <div className="featured-header">
                <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
            </div>
            {isUserLogin ?
                <div className="comment--write">
                    <div className="comment--write--rate-star">
                        <p>Số sao</p>
                        <div>
                            <Rate value={rateStar} onChange={(value) => setRateStar(value)} />
                        </div>
                    </div>
                    <div className="comment--write--content">
                        <p>Nội dung</p>
                        <TextArea placeholder={"Nhập nhận xét của bạn"} value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="comment--write__btn">
                        <Button htmlType="submit" onClick={() => handleClickComment()}>
                            Gửi nhận xét
                        </Button>
                    </div>
                </div> :
                <p className="comment--login">Vui lòng <a style={{ color: 'blue' }} onClick={showModal}>đăng nhập</a> để viết đánh giá</p>
            }
            <div className="card-comment-container">
                {comment.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
                    return listUser.map((user) => {
                        if (user.id === item.userId) {
                            return <CardComment userName={user.fullName} rateStar={item.star} content={item.content} dateTime={item.dateTime} />
                        }
                    })
                })}
            </div>
            <div className="book-more-pagination">
                {
                    comment.length > 12 ? <Pagination defaultCurrent={1} total={comment.length} onChange={handleChange} pageSize={pageLimit} /> : null
                }
            </div>
            <Modal
                footer={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="modal__login"
            >
                <Login handleCancel={handleCancel} />
            </Modal>
        </div>
    )
}
export default CommentUser