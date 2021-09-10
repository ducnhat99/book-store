import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { getBooks, getCategory } from '../../../../slice/bookSlice'
import { useSelector, useDispatch } from 'react-redux'

const SideBar = () => {
    const dispatch = useDispatch()
    const listCategory = useSelector(state => state.book.listCategory)
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])
    return (
        <div className="sidebar">
            <ul className="sidebar-table">
                <li className="sidebar-table-header">
                    <h3>Danh mục</h3>
                </li>
                {listCategory.map((item, index) => {
                    return <Link style={{ width: '100%', height: '40px' }} to={{
                        pathname: `/category/${item.id}`,
                        state: { category: item.categoryName }
                    }}><li>{item.categoryName}</li>
                    </Link>
                })}
            </ul>
        </div >
    )
}

export default SideBar