import { Button } from 'antd';
import 'antd/dist/antd.css';
import NewCardItem from './NewCardItem'

const NewCardContainer = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>SÁCH MỚI</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                </div>
                <div className="card-load-more">
                    <Button className="btn-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default NewCardContainer