import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import CardComment from './CardComment';

const CommentUser = () => {
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
    console.log(listComment)
    return (
        <div className="comment">
            <div className="featured-header">
                <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
            </div>
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
            </div>
            <div className="card-comment-container">
                {listComment.map((item, index) => {
                    return <CardComment userName={item.userName} rateStar={item.rateStar} content={item.content} datetime={item.datetime} />
                })}
            </div>
        </div>
    )
}
export default CommentUser