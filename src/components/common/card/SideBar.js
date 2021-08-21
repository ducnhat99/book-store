import '../../../styles/sidebar.css'

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
        'Khoa học ký thuật'
    ]
    return (
        <div>
            <table className="sidebar-table">
                <tr className="sidebar-table-header">
                    <th>Danh mục</th>
                </tr>
                {category.map((item, index) => {
                    return <tr>
                        <td onClick={() => console.log('a')}>{item}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default SideBar