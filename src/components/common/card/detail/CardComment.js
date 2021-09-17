import React, { useEffect } from 'react';
import { Rate, Skeleton } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

const CardComment = (props) => {
    const { userName, rateStar, content, dateTime } = props
    const status = useSelector(state => state.book.status)
    return (
        <>
            {status === 'loading' ? <div className="card-comment"><Skeleton active /></div> :
                <div className="card-comment">
                    <div className="card-comment--user">
                        <p>{userName}</p>
                        <p>{dateTime}</p>
                    </div>
                    <div className="card-comment-main">
                        <div>
                            <Rate disabled={true} value={rateStar} />
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CardComment