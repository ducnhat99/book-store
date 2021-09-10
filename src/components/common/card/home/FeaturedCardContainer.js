import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import 'antd/dist/antd.css';
import top from '../../../../images/featured.jpg';
import humble from '../../../../images/humble.jpg';
import FeaturedCardItem from '../FeaturedCardItem';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getCategory } from '../../../../slice/bookSlice'
import { useEffect } from 'react';

const FeaturedCardContainer = () => {
    const dispatch = useDispatch()
    let listBook = useSelector(state => state.book.listBook)
    const listCategory = useSelector(state => state.book.listCategory)
    const listBookSale = []
    useEffect(() => {
        dispatch(getBooks())
        dispatch(getCategory())
    }, [dispatch])
    // listBook.forEach(item => {
    //     if (item.realPrice >= 3) {
    //         listBookSale.push(item)
    //     }
    // });
    listBook = [...listBook]
    listBook.sort((a, b) => b.rateStar - a.rateStar)
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return;
        return data.slice(0, 4).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <FeaturedCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                }
            })

        })
    }
    const scrollType = {
        duration: 700,
        spyThrottle: 1000
    };
    const handleMouseEnter = () => {
        window.countdown = setTimeout(function () { scroll.scrollTo(1620, scrollType) }, 1000)
    }
    const handleMouseLeave = () => {
        clearTimeout(window.countdown)
    }
    return (
        <div className="featured-container">
            <div className="featured-header">
                <h2>SÁCH NỖI BẬT</h2>
            </div>
            <div className="featured-main" >
                <div className="top-featured">
                    <div className="top-featured-images">
                        <img src={top} alt="top 1 featured" />
                    </div>
                </div>
                <div className="featured-main-item">
                    <div className="featured-main-list-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        {renderNewBook(listBook)}
                    </div>
                    <div className="featured-load-more">
                        <Link to="/featuredbook">
                            <Button type="default" className="btn-featured-load-more" onClick={() => scroll.scrollToTop()}> Xem thêm</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default FeaturedCardContainer;
