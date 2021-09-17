import * as React from 'react'
import { useEffect } from 'react';
import { Pagination, Radio, Rate, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import images from '../../../images/humble.jpg';
import NewCardItem from './NewCardItem';
import { useParams } from "react-router-dom";
import { getCategory, getBookCategory } from '../../../slice/bookSlice'

const CategoryBook = (props) => {
    const [listBookRender, setListBookRender] = React.useState([])
    const [listBookSearchLanguage, setListBookSearchLanguage] = React.useState([])
    const [listBookSearchPrice, setListBookSearchPrice] = React.useState([])
    const [listBookRate, setListBookRate] = React.useState([])
    const [listBookDefault, setListBookDefault] = React.useState([])
    const [isCategory, setIsCategory] = React.useState(false)
    const { categoryId } = useParams()
    const pageLimit = 12;
    const [pageSlice, setPageSlice] = React.useState(0)
    const dispatch = useDispatch()
    const listBook = useSelector(state => state.book.listBookCategory)
    const listCategory = useSelector(state => state.book.listCategory)
    const handleChange = (page, pageSize) => {
        setPageSlice((page - 1) * pageSize)
    }
    useEffect(() => {
        dispatch(getBookCategory(categoryId))
        dispatch(getCategory())
    }, [dispatch])
    useEffect(() => {
        setListBookRender([...listBook])
        setListBookSearchLanguage([...listBook])
        setListBookSearchPrice([...listBook])
        setListBookDefault([...listBook])
        setListBookRate([...listBook])
    }, [listBook])
    const handleChangeSelect = (value) => {
        if (value === "downToUp") {
            const list = listBookRender.sort((a, b) => a.price - b.price)
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookSearchPrice([...list])
            setListBookRate([...list])
            return
        }
        if (value === "upToDown") {
            const list = listBookRender.sort((a, b) => b.price - a.price)
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookSearchPrice([...list])
            setListBookRate([...list])
            return
        }
        if (value === "new") {
            const list = listBookRender.sort((a, b) => b.id - a.id)
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookSearchPrice([...list])
            setListBookRate([...list])
            return
        }
    }
    const handleChangeLanguage = (e) => {
        if (e.target.value === "vietNam") {
            const list = listBookSearchLanguage.filter((item) => {
                return item.language === "Tiếng Việt"
            })
            setListBookRender([...list])
            setListBookSearchPrice([...list])
            setListBookRate([...list])
            setIsCategory(true)
            return
        }
        if (e.target.value === "english") {
            const list = listBookSearchLanguage.filter((item) => {
                return item.language === "Tiếng Anh"
            })
            setListBookRender([...list])
            setListBookSearchPrice([...list])
            setListBookRate([...list])
            setIsCategory(true)
            return
        }
    }
    const handleRemoveCategory = () => {
        setIsCategory(false)
        setListBookRender(listBookDefault)
        setListBookSearchPrice(listBookDefault)
        setListBookSearchLanguage(listBookDefault)
        setListBookRate(listBookDefault)
    }
    const handleChangePrice = (e) => {
        if (e.target.value === "100") {
            const list = listBookSearchPrice.filter((item) => {
                return item.price <= 100000
            })
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookRate([...list])
            setIsCategory(true)
        }
        if (e.target.value === "200") {
            const list = listBookSearchPrice.filter((item) => {
                return (item.price > 100000 && item.price <= 200000)
            })
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookRate([...list])
            setIsCategory(true)
        }
        if (e.target.value === "500") {
            const list = listBookSearchPrice.filter((item) => {
                return (item.price > 200000)
            })
            setListBookRender([...list])
            setListBookSearchLanguage([...list])
            setListBookRate([...list])
            setIsCategory(true)
        }
    }
    const handleChangeStar = (value) => {
        const list = listBookRate.filter((item) => {
            return item.rateStar === value
        })
        setListBookRender([...list])
        setListBookSearchPrice([...list])
        setListBookSearchLanguage([...list])
        setIsCategory(true)
    }
    const { Option } = Select;
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return <div class="containerNull">Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.</div>;;
        return data.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <div className="card-more-item">
                        <NewCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                    </div>
                }
            })

        })
    }
    return (
        <div className="book-more">
            <div className="container">
                <div className="book-more--main">
                    <div className="book-more--search">
                        <div className="new-book-more--search__header">
                            <h2>MUA THEO</h2>
                        </div>
                        {
                            isCategory ? <h3 onClick={handleRemoveCategory} style={{ paddingLeft: '10px', color: 'blue', marginTop: '10px' }}>BAN ĐẦU</h3> : null
                        }
                        <div className="new-book-more--search--price">
                            <div className="new-book-more--search--price__header">
                                <h3>
                                    GIÁ
                                </h3>
                            </div>
                            <div className="book-more--search--price__list">
                                <Radio.Group onChange={handleChangePrice}>
                                    <Radio value={'100'} className="book-more-search--price__radio">Dưới 100.000d</Radio>
                                    <Radio value={'200'} className="book-more-search--price__radio">100.000d-200.000d</Radio>
                                    <Radio value={'500'} className="book-more-search--price__radio">Trên 200.000d</Radio>
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
                                <Radio.Group className="book-more--search__group" onChange={handleChangeLanguage}>
                                    <Radio value={'vietNam'} className="book-more-search--price__radio">Tiếng Việt</Radio>
                                    <Radio value={'english'}>Tiếng Anh</Radio>
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
                                <Rate style={{ marginBottom: '10px' }} onChange={handleChangeStar} />
                            </div>
                        </div>
                    </div>
                    <div className="book-more--container">
                        <div className="card-header">
                            <h2>{props.location.state.category}</h2>
                        </div>
                        <div className="book-more--selected">
                            <p>Sắp xếp theo:</p>
                            <Select defaultValue="Sắp xếp theo" style={{ width: 200 }} onChange={handleChangeSelect}>
                                <Option value="downToUp">Giá từ thấp lên cao</Option>
                                <Option value="upToDown">Giá từ cao xuống thấp</Option>
                                <Option value="new" >
                                    Mới nhất
                                </Option>
                            </Select>
                        </div>
                        <div className="book-more--card-container">
                            {renderNewBook(listBookRender)}
                        </div>
                        <div className="book-more-pagination">
                            {
                                listBookRender.length > 12 ? <Pagination defaultCurrent={1} total={listBookRender.length} onChange={handleChange} pageSize={pageLimit} /> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CategoryBook