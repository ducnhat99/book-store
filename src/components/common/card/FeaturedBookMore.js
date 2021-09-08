import * as React from 'react'
import { Pagination, Radio, Rate, Select } from 'antd';
import images from '../../../images/humble.jpg';
import NewCardItem from './NewCardItem';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getCategory } from '../../../slice/bookSlice'
import { useEffect } from 'react';

const FeaturedBookMore = () => {
    const dispatch = useDispatch()
    let listBook = useSelector(state => state.book.listBook)
    const listCategory = useSelector(state => state.book.listCategory)
    // const listBookSale = []
    const pageLimit = 12;
    const [pageSlice, setPageSlice] = React.useState(0)
    const handleChange = (page, pageSize) => {
        setPageSlice((page - 1) * pageSize)
    }
    useEffect(() => {
        dispatch(getBooks())
        dispatch(getCategory())
    }, [dispatch])
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return;
        return data.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <div className="card-more-item">
                        <NewCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={5} description={item.description} />
                    </div>
                }
            })

        })
    }
    const { Option } = Select;
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
                                {listCategory.map((item, index) => {
                                    return <a>{item.categoryName}</a>
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
                            <h2>SÁCH NỖI BẬT</h2>
                        </div>
                        <div className="book-more--selected">
                            <p>Sắp xếp theo:</p>
                            <Select defaultValue="Sắp xếp theo" style={{ width: 200 }}>
                                <Option value="Giá từ thấp lên cao">Giá từ thấp lên cao</Option>
                                <Option value="Giá từ cao xuống thấp">Giá từ cao xuống thấp</Option>
                                <Option value="Mới nhất" >
                                    Mới nhất
                                </Option>
                            </Select>
                        </div>
                        <div className="book-more--card-container">
                            {renderNewBook(listBook)}
                        </div>
                        <div className="book-more-pagination">
                            <Pagination defaultCurrent={1} total={listBook.length} onChange={handleChange} pageSize={pageLimit} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedBookMore