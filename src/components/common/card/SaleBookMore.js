import { Pagination, Radio, Rate } from 'antd';
import images from '../../../images/book-orange.jpg'
import NewCardItem from './NewCardItem';

const SaleBookMore = () => {
    const category = [
        'Kỹ năng sống',
        'Kinh tế',
        'Lịch sử',
        'Văn học',
        'Từ điển',
        'Tham khảo',
        'Ngoại ngữ',
        'Âm nhạc - mỹ thuật',
        'Tiểu sử - hồi ký',
        'Địa lý',
        'Khoa học ký thuật'
    ];
    const listNewCard = [
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Cây Cam Ngọt Của Tôi",
            anthor: "Tony Buổi Sáng",
            product: "Văn học",
            page: 300,
            price: "70.500d",
            realPrice: "100.000d",
            rateStar: 3,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
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
                        <div className="new-book-more--search--category">
                            <div className="new-book-more--search--category__header">
                                <h3>
                                    NHÓM DANH MỤC
                                </h3>
                            </div>
                            <div className="new-book-more--search--category__list">
                                {category.map((item, index) => {
                                    return <a>{item}</a>
                                })}
                            </div>
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
                            <h2>SÁCH GIẢM GIÁ</h2>
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

export default SaleBookMore