import { Rate } from 'antd';

const CardComment = (props) => {
    const { userName, rateStar, content, datetime } = props
    return (
        <div className="card-comment">
            <div className="card-comment--user">
                <p>{userName}</p>
                <p>{datetime}</p>
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