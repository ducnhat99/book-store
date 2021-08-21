import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/new-card-container.css';
import NewCardItem from './NewCardItem'

const NewCardContainer = () => {
    return (
        <div className="new-card-container">
            <div className="new-card-header">
                <h2>New book</h2>
            </div>
            <div className="new-card-main">
                <div className="new-card-item">
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                    <NewCardItem />
                </div>
                <div className="new-card-load-more">
                    <Button type="primary" className="btn-new-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default NewCardContainer