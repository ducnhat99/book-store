import { Button } from 'antd';
import 'antd/dist/antd.css';
import NewCardItem from './NewCardItem'
import images from '../../../images/7kyquanthegioi.jpg'

const NewCardContainer = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>SÁCH MỚI</h2>
            </div>
            <div className="card-main">
                <div className="card-item">
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" author="Jeffrey Archer" product="Văn học" page={600} price="50000d" realPrice="75000d" rateStar={4} description="“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là &#34;thánh kinh&#34; cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.
“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."/>
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" author="Jeffrey Archer" product="Văn học" page={600} price="50000d" realPrice="75000d" rateStar={5} description="“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là &#34;thánh kinh&#34; cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.
“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."/>
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" author="Jeffrey Archer" product="Văn học" page={600} price="50000d" realPrice="75000d" rateStar={3} description="“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là &#34;thánh kinh&#34; cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.
“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."/>
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" author="Jeffrey Archer" product="Văn học" page={600} price="50000d" realPrice="75000d" rateStar={1} description="“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là &#34;thánh kinh&#34; cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.
“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."/>
                    <NewCardItem images={images} title="Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn" author="Jeffrey Archer" product="Văn học" page={600} price="50000d" realPrice="75000d" rateStar={2} description="“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là &#34;thánh kinh&#34; cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.
“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."/>
                </div>
                <div className="card-load-more">
                    <Button className="btn-card-load-more">Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default NewCardContainer

