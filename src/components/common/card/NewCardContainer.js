import { Button } from 'antd';
import 'antd/dist/antd.css';
import NewCardItem from './NewCardItem'
import images from '../../../images/7kyquanthegioi.jpg'

const NewCardContainer = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>SÁCH MỚI</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" price="50000d" realPrice="75000d" rateStar={4} />
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" price="50000d" realPrice="75000d" rateStar={5} />
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" price="50000d" realPrice="75000d" rateStar={3} />
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" price="50000d" realPrice="75000d" rateStar={2} />
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" price="50000d" realPrice="75000d" rateStar={0} />
                </div>
                <div className="card-load-more">
                    <Button className="btn-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default NewCardContainer