import '../../../styles/new-card-item.css'
import images from '../../../images/7kyquanthegioi.jpg'
const NewCardItem = () => {
    return (
        <div className="new-card">
            <div className="new-card-content">
                <div className="new-card-images">
                    <img src={images}></img>
                </div>
                <div className="new-card-title">
                    <h3>Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn</h3>
                </div>
                <div className="new-card-item-price">
                    <p>50000d</p>
                </div>
            </div>
        </div>
    )
}

export default NewCardItem