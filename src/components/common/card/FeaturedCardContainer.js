import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'antd/dist/antd.css';
import top from '../../../images/featured.jpg';
import humble from '../../../images/humble.jpg'
import FeaturedCardItem from './FeaturedCardItem';

const FeaturedCardContainer = () => {
    const scrollType = {
        duration: 700,
        delay: 1200,
    };
    return (
        <div className="featured-container">
            <div className="featured-header">
                <h2>SÁCH NỖI BẬT</h2>
            </div>
            <div className="featured-main" onMouseEnter={() => scroll.scrollTo(1600, scrollType)}>
                <div className="top-featured">
                    <div className="top-featured-images">
                        <img src={top} alt="top 1 featured" />
                    </div>
                </div>
                <div className="featured-main-item">
                    <div className="featured-main-list-item">
                        <FeaturedCardItem images={humble} title="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling" author="Edgar H. Schein, Peter A. Schein" product="Tiểu thuyết" page={192} price="253.300d" realPrice="298.000d" rateStar={1} description="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling
This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200,000 copies sold and translated into seventeen languages!" />
                        <FeaturedCardItem images={humble} title="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling" author="Edgar H. Schein, Peter A. Schein" product="Tiểu thuyết" page={192} price="253.300d" realPrice="298.000d" rateStar={2} description="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling
This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200,000 copies sold and translated into seventeen languages!" />
                        <FeaturedCardItem images={humble} title="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling" author="Edgar H. Schein, Peter A. Schein" product="Tiểu thuyết" page={192} price="253.300d" realPrice="298.000d" rateStar={3} description="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling
This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200,000 copies sold and translated into seventeen languages!" />
                        <FeaturedCardItem images={humble} title="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling" author="Edgar H. Schein, Peter A. Schein" product="Tiểu thuyết" page={192} price="253.300d" realPrice="298.000d" rateStar={5} description="Humble Inquiry: The Gentle Art Of Asking Instead Of Telling
This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200,000 copies sold and translated into seventeen languages!" />
                    </div>
                    <div className="featured-load-more">
                        <Link to="/featuredbook">
                            <Button type="default" className="btn-featured-load-more"> Xem thêm</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedCardContainer