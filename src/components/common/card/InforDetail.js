import React from 'react';
import '../../../styles/infor-detail.css';

const InforDetail = () => {
  return (
    <div className="container__detail__main">
      <br />
      <h1 style={{ marginLeft: '15px' }}>Thông tin sản phẩm</h1>

      {/* DATA TREN */}

      <div class="data-table_1">
        <table class="data-table table-additional">
          <tr>
            <th class="table-label">Mã hàng</th>
            <td class="data_sku">8935235226272</td>
          </tr>
          <tr>
            <th class="table-label">Tên Nhà Cung Cấp</th>
            <td class="data_supplier">
              Nhã Nam
            </td>
          </tr>
          <tr>
            <th class="table-label">Tác giả</th>
            <td class="data_author">Paulo Coelho</td>
          </tr>
          <tr>
            <th class="table-label">Người Dịch</th>
            <td class="data_translator">Lê Chu Cầu</td>
          </tr>
          <tr>
            <th class="table-label">NXB</th>
            <td class="data_publisher">NXB Hội Nhà Văn</td>
          </tr>
          <tr>
            <th class="table-label">Năm XB</th>
            <td class="data_publish_year">2020</td>
          </tr>
          <tr>
            <th class="table-label">Trọng lượng (gr)</th>
            <td class="data_weight">220</td>
          </tr>
          <tr>
            <th class="table-label">Kích Thước Bao Bì</th>
            <td class="data_size">20.5 x 13 cm</td>
          </tr>
          <tr>
            <th class="table-label">Số trang</th>
            <td class="data_qty_of_page">227</td>
          </tr>
          <tr>
            <th class="table-label">Hình thức</th>
            <td class="data_book_layout">Bìa Mềm</td>
          </tr>
          <tr>
            <th class="table-label">Sản phẩm bán chạy nhất</th>
            <td>
              Top 100 sản phẩm Tiểu thuyết bán chạy của tháng
            </td>
          </tr>
        </table>
      </div>

      {/* END DATA TREN */}

      <div class="clear"></div>

      {/* DATA DUOI */}

      <div id="" class="data-table_2">
        <div id="" class=" data-table_i">
          <p style={{ textAlign: 'justify' }}>
            <em>
              Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp
              Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con
              người
            </em>
            .&nbsp;
          </p>
          <p style={{ textAlign: 'justify' }}>
            Tiểu thuyết&nbsp;<em>Nhà giả kim&nbsp;</em>của Paulo Coelho như một câu chuyện cổ tích
            giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông.
            Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng,
            với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc
            gia,&nbsp;<em>Nhà giả kim&nbsp;</em>đã làm rung động hàng triệu tâm hồn, trở thành một
            trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người
            đọc.
          </p>
          <p style={{ textAlign: 'justify' }}>
            “Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều
            người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua
            chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì
            gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng
            mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao
            ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có
            thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.”
          </p>
          <p style={{ textAlign: 'justify' }}>
            - Trích&nbsp;<em>Nhà giả kim</em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>Nhận định</strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            “Sau Garcia Márquez, đây là nhà văn Mỹ Latinh được đọc nhiều nhất thế giới.”&nbsp;
            <em>- The Economist</em>, London, Anh
          </p>
          <p style={{ textAlign: 'justify' }}> &nbsp;</p>
          <p style={{ textAlign: 'justify' }}>
            “Santiago có khả năng cảm nhận bằng trái tim như&nbsp;<em>Hoàng tử bé</em>&nbsp;của
            Saint-Exupéry.”&nbsp;<em>- Frankfurter Allgemeine Zeitung, Đức</em>
          </p>{' '}
        </div>
      </div>

      {/* END DATA DUOI      */}
    </div>
  );
};

export default InforDetail;
