import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../../../styles/card-container.css';
import '../../../styles/sale-card-container.css';
import SaleCardItem from '../card/SaleCardItem'

const SaleCardContainer = () => {
    return (
        <div className="card-container">
            <div className="sale-card-header">
                <h2>Flash Sale</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <SaleCardItem />
                    <SaleCardItem />
                    <SaleCardItem />
                    <SaleCardItem />
                    <SaleCardItem />
                </div>
                <div className="card-load-more">
                    <Button className="btn-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default SaleCardContainer