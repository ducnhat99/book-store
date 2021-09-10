import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'antd/dist/antd.css';
import images from '../../../../images/book-orange.jpg'
import NewCardItem from '../NewCardItem'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getCategory } from '../../../../slice/bookSlice'
import { useEffect } from 'react';

const SaleCardContainer = () => {
    const dispatch = useDispatch()
    let listBook = useSelector(state => state.book.listBook)
    const listCategory = useSelector(state => state.book.listCategory)
    const listBookSale = []
    useEffect(() => {
        dispatch(getBooks())
        dispatch(getCategory())
    }, [dispatch])
    listBook.forEach(item => {
        if (item.realPrice !== "") {
            listBookSale.push(item)
        }
    });
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return;
        return data.slice(0, 5).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                    </div>
                }
            })

        })
    }
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
                    {renderNewBook(listBookSale)}
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