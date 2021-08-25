import { Button } from 'antd';
import 'antd/dist/antd.css';
import images from '../../../images/book-orange.jpg'
import SaleCardItem from '../card/SaleCardItem'

const SaleCardContainer = () => {
    return (
        <div className="card-container">
            <div className="sale-card-header">
                <h2>SÁCH GIẢM GIÁ</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <SaleCardItem images={images} title="Cây Cam Ngọt Của Tôi" price="75.000d" realPrice="100.000d" rateStar={4} />
                    <SaleCardItem images={images} title="Cây Cam Ngọt Của Tôi" price="75.000d" realPrice="100.000d" rateStar={1} />
                    <SaleCardItem images={images} title="Cây Cam Ngọt Của Tôi" price="75.000d" realPrice="100.000d" rateStar={3} />
                    <SaleCardItem images={images} title="Cây Cam Ngọt Của Tôi" price="75.000d" realPrice="100.000d" rateStar={5} />
                    <SaleCardItem images={images} title="Cây Cam Ngọt Của Tôi" price="75.000d" realPrice="100.000d" rateStar={2} />
                </div>
                <div className="card-load-more">
                    <Button className="btn-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default SaleCardContainer