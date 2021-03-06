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
            message: '????nh gi?? th???t b???i !',
            description: 'Vui l??ng ????nh gi?? sao v?? nh???p n???i dung ????nh gi??',
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
                <h2>????NH GI?? S???N PH???M</h2>
            </div>
            {isUserLogin ?
                <div className="comment--write">
                    <div className="comment--write--rate-star">
                        <p>S??? sao</p>
                        <div>
                            <Rate value={rateStar} onChange={(value) => setRateStar(value)} />
                        </div>
                    </div>
                    <div className="comment--write--content">
                        <p>N???i dung</p>
                        <TextArea placeholder={"Nh???p nh???n x??t c???a b???n"} value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="comment--write__btn">
                        <Button htmlType="submit" onClick={() => handleClickComment()}>
                            G???i nh???n x??t
                        </Button>
                    </div>
                </div> :
                <p className="comment--login">Vui l??ng <a style={{ color: 'blue' }} onClick={showModal}>????ng nh???p</a> ????? vi???t ????nh gi??</p>
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