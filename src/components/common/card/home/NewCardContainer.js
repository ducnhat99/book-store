import { useEffect } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'antd/dist/antd.css';
import NewCardItem from '../NewCardItem'
import { getBooks, getCategory } from '../../../../slice/bookSlice'

const NewCardContainer = () => {
    const dispatch = useDispatch()
    const listBook = useSelector(state => state.book.listBook)
    const listCategory = useSelector(state => state.book.listCategory)
    useEffect(() => {
        dispatch(getBooks())
        dispatch(getCategory())
    }, [dispatch])
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return;
        return data.slice(-5).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <div className="new-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
                        handleMouseLeave()
                        scroll.scrollToTop();
                    }}>
                        <NewCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={5} description={item.description} />
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
        window.countdown = setTimeout(function () { scroll.scrollTo(580, scrollType) }, 1000)
    }
    const handleMouseLeave = () => {
        clearTimeout(window.countdown)
    }
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>SÁCH MỚI</h2>
            </div>
            <div className="card-main">
                {/* onMouseEnter={() => scroll.scrollTo(580, scrollType)} */}
                <div className="card-item">
                    {renderNewBook(listBook)}
                </div>
                <div className="card-load-more">
                    <Link to="/newbook">
                        <Button className="btn-card-load-more" onClick={() => scroll.scrollToTop()}>Xem thêm</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewCardContainer

