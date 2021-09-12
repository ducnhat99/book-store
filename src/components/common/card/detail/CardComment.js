import React, { useEffect } from 'react';
import { Rate } from 'antd';

const CardComment = (props) => {
    const { userName, rateStar, content, dateTime } = props
    return (
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
        </div>
    )
}

export default CardComment