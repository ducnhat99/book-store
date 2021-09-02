import NewCardItem from './NewCardItem'
import images from '../../../images/7kyquanthegioi.jpg'

const BoughtTogether = () => {
    const listNewCard = [
        {
            images: images,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            product: "Văn học",
            page: 600,
            price: "50.500d",
            realPrice: "75.000d",
            rateStar: 4,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            product: "Văn học",
            page: 600,
            price: "50.500d",
            realPrice: "75.000d",
            rateStar: 4,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            product: "Văn học",
            page: 600,
            price: "50.500d",
            realPrice: "75.000d",
            rateStar: 4,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            product: "Văn học",
            page: 600,
            price: "50.500d",
            realPrice: "75.000d",
            rateStar: 4,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        },
        {
            images: images,
            title: "Sài Gòn - Những Mảnh Ghép Rời Ký Ức Sài Gòn Sài Gòn",
            anthor: "Jeffrey Archer",
            product: "Văn học",
            page: 600,
            price: "50.500d",
            realPrice: "75.000d",
            rateStar: 4,
            description: "“Hai số phận” không chỉ đơn thuần là một cuốn tiểu thuyết, đây có thể xem là thánh kinh cho những người đọc và suy ngẫm, những ai không dễ dãi, không chấp nhận lối mòn.“Hai số phận” làm rung động mọi trái tim quả cảm, nó có thể làm thay đổi cả cuộc đời bạn.Đọc cuốn sách này, bạn sẽ bị chi phối bởi cá tính của hai nhân vật chính, hoặc bạn là Kane, hoặc sẽ là Abel, không thể nào nhầm lẫn.Và điều đó sẽ khiến bạn thấy được chính mình."
        }
    ]
    return (
        <div className="bought-together">
            <div className="card-header">
                <h2>GỢI Ý CHO BẠN</h2>
            </div>
            <div className="card-item">
                {listNewCard.map((item, index) => {
                    return <div className="new-card">
                        <NewCardItem key={index} index={index} images={item.images} title={item.title} author={item.author} product={item.product} page={item.page} price={item.price} realPrice={item.realPrice} rateStar={item.rateStar} description={item.description} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default BoughtTogether