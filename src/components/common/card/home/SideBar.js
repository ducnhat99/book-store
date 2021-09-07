import { Link } from 'react-router-dom'

const SideBar = () => {
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
        'Khoa học ky thuật'
    ]
    return (
        <div className="sidebar">
            <ul className="sidebar-table">
                <li className="sidebar-table-header">
                    <h3>Danh mục</h3>
                </li>
                {category.map((item, index) => {
                    return <Link style={{ width: '100%', height: '40px' }} to={{
                        pathname: `/category`,
                        state: { category: item }
                    }}><li>{item}</li>
                    </Link>
                })}
            </ul>
        </div >
    )
}

export default SideBar