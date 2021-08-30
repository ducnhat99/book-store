import { Pagination, Radio, Rate } from 'antd';
import images from '../../../images/humble.jpg';
import NewCardItem from './NewCardItem';

const CategoryBook = (props) => {
    const listNewCard = [
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
        {
            images: images,
            title: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling",
            anthor: "Edgar H. Schein, Peter A. Schein",
            product: "Tiểu thuyết",
            page: 192,
            price: "253.300d",
            realPrice: "298.000d",
            rateStar: 5,
            description: "Humble Inquiry: The Gentle Art Of Asking Instead Of Telling. This worldwide bestseller offers simple guidance for building the kind of open and trusting relationships vital for tackling global systemic challenges and developing adaptive, innovative organizations—over 200, 000 copies sold and translated into seventeen languages!"
        },
    ]
    return (
        <div className="book-more">
            <div className="container">
                <div className="book-more--main">
                    <div className="book-more--search">
                        <div className="new-book-more--search__header">
                            <h2>MUA THEO</h2>
                        </div>

                        <div className="new-book-more--search--price">
                            <div className="new-book-more--search--price__header">
                                <h3>
                                    GIÁ
                                </h3>
                            </div>
                            <div className="book-more--search--price__list">
                                <Radio.Group>
                                    <Radio value={'100.000d'} className="book-more-search--price__radio">Dưới 100.000d</Radio>
                                    <Radio value={'200.000d'} className="book-more-search--price__radio">100.000d-200.000d</Radio>
                                    <Radio value={'500.000d'} className="book-more-search--price__radio">200.000d-500.000d</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="new-book-more--search--price">
                            <div className="new-book-more--search--price__header">
                                <h3>
                                    NGÔN NGỮ
                                </h3>
                            </div>
                            <div className="book-more--search--price__list">
                                <Radio.Group className="book-more--search__group">
                                    <Radio value={'Tiếng Việt'} className="book-more-search--price__radio">Tiếng Việt</Radio>
                                    <Radio value={'Tiếng Anh'}>Tiếng Anh</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="new-book-more--search--price">
                            <div className="new-book-more--search--price__header">
                                <h3>
                                    ĐÁNH GIÁ
                                </h3>
                            </div>
                            <div className="book-more--search--price__list">
                                <Rate style={{ marginBottom: '10px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="book-more--container">
                        <div className="card-header">
                            <h2>{props.location.state.category}</h2>
                        </div>
                        <div className="book-more--card-container">
                            {listNewCard.map((item, index) => {
                                return <div className="card-more-item" >
                                    <NewCardItem key={index} index={index} images={item.images} title={item.title} author={item.author} product={item.product} page={item.page} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                                </div>
                            })}
                        </div>
                        <div className="book-more-pagination">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CategoryBook