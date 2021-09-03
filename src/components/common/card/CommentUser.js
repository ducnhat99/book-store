import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { Comment, Avatar, Form, Button, List, Input, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import Login from './Login';
import CardComment from './CardComment';

const CommentUser = () => {
    const isUserLogin = useSelector(state => state.book.isUserLogin)
    const { TextArea } = Input;
    const [rateStar, setRateStar] = React.useState(5)
    const [content, setContent] = React.useState('')
    const [listComment, setListComment] = React.useState([])
    const handleClickComment = () => {
        if (!!content && !!rateStar) {
            const list = [{ userName: 'Nhat', rateStar: rateStar, content: content, datetime: moment().fromNow() }, ...listComment];
            setListComment(list)
            setContent('')
            return
        }
        else {
            return alert("Vui lòng đánh giá sao và nhập nhận xét !")
        }
    }
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
                {listComment.map((item, index) => {
                    return <CardComment userName={item.userName} rateStar={item.rateStar} content={item.content} datetime={item.datetime} />
                })}
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