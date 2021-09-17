import * as React from 'react'
import { useEffect } from 'react';
import { Skeleton, Spin, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategory, getCategory } from '../../../../slice/bookSlice'
import NewCardItem from '../NewCardItem'

const BoughtTogether = (props) => {
    const { id, categoryId } = props
    const [listBookRender, setListBookRender] = React.useState([])
    const [idCate, setIdCate] = React.useState()
    const dispatch = useDispatch()
    const listBookCategory = useSelector(state => state.book.listBookCategory)
    const listCategory = useSelector(state => state.book.listCategory)
    const status = useSelector(state => state.book.status)
    useEffect(() => {
        dispatch(getBookCategory(idCate))
        dispatch(getCategory())
    }, [dispatch, idCate])
    useEffect(() => {
        setIdCate(categoryId)
    }, [categoryId])
    useEffect(() => {
        const list = listBookCategory.filter((item) => {
            return item.id !== parseInt(id)
        })
        setListBookRender(list)
    }, [listBookCategory, id])
    const renderNewBook = (data) => {
        if (!data || data.length === 0) return <div class="containerNull">Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.</div>;;
        return data.slice(-5).map((item, index) => {
            return listCategory.map((categoryItem) => {
                if (categoryItem.id === item.categoryId) {
                    return <div className="new-card">
                        <NewCardItem key={index} index={item.id} images={item.imagesBook} title={item.bookName} author={item.author} product={categoryItem.categoryName} page={item.quantityPage} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                    </div>
                }
            })

        })
    }
    return (
        <div className="bought-together">
            <div className="card-header">
                <h2>GỢI Ý CHO BẠN</h2>
            </div>
            {status === 'loading' ? <div className="card-item"><Skeleton active /></div> :
                <div className="card-item">
                    {renderNewBook(listBookRender)}
                </div>}
        </div>
    )
}

export default BoughtTogether