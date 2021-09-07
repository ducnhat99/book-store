import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'antd/dist/antd.css';
import images from '../../../../images/book-orange.jpg'
import NewCardItem from '../NewCardItem'

const SaleCardContainer = () => {
    const scrollType = {
        duration: 700,
        spyThrottle: 1000
    };
    const handleMouseEnter = () => {
        window.countdown = setTimeout(function () { scroll.scrollTo(1100, scrollType) }, 1000)
    }
    const handleMouseLeave = () => {
        clearTimeout(window.countdown)
    }
    return (
        <div className="card-container">
            <div className="sale-card-header">
                <h2>SÁCH GIẢM GIÁ</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem images={images} title="Cây Cam Ngọt Của Tôi" author="Tony Buổi Sáng" product="Văn học" page={300} price="63000d" realPrice="90000d" rateStar={5} description="Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường." />
                    </div>
                    <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem images={images} title="Cây Cam Ngọt Của Tôi" author="Tony Buổi Sáng" product="Văn học" page={300} price="63000d" realPrice="90000d" rateStar={4} description="Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường." />
                    </div>
                    <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem images={images} title="Cây Cam Ngọt Của Tôi" author="Tony Buổi Sáng" product="Văn học" page={300} price="63000d" realPrice="90000d" rateStar={3} description="Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường." />
                    </div>
                    <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem images={images} title="Cây Cam Ngọt Của Tôi" author="Tony Buổi Sáng" product="Văn học" page={300} price="63000d" realPrice="90000d" rateStar={2} description="Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường." />
                    </div>
                    <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem images={images} title="Cây Cam Ngọt Của Tôi" author="Tony Buổi Sáng" product="Văn học" page={300} price="63000d" realPrice="90000d" rateStar={1} description="Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường." />
                    </div>
                </div>
                <div className="card-load-more">
                    <Link to="/salebook">
                        <Button className="btn-card-load-more" onClick={() => scroll.scrollToTop()}>Xem thêm</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SaleCardContainer