import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Skeleton, Spin, Space } from 'antd';

const InforDetail = (props) => {
  const { id, supplier, author, publisher, publishYear, quantityPage, bookLayout, quantityBook, description } = props
  const status = useSelector(state => state.book.status)
  return (
    <>
      {status === 'loading' ? <div className="container__detail__main"><Skeleton active /></div> :
        <div className="container__detail__main">
          <br />
          <h1 style={{ marginLeft: '15px' }}>Thông tin sản phẩm</h1>

          {/* DATA TREN */}

          <div class="data-table_1">
            <table class="data-table table-additional">
              <tr>
                <th class="table-label">Mã hàng</th>
                <td class="data_sku">{id}</td>
              </tr>
              <tr>
                <th class="table-label">Tên Nhà Cung Cấp</th>
                <td class="data_supplier">
                  {supplier}
                </td>
              </tr>
              <tr>
                <th class="table-label">Tác giả</th>
                <td class="data_author">{author}</td>
              </tr>
              <tr>
                <th class="table-label">NXB</th>
                <td class="data_publisher">{publisher}</td>
              </tr>
              <tr>
                <th class="table-label">Năm XB</th>
                <td class="data_publish_year">{publishYear}</td>
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
                <td class="data_qty_of_page">{quantityPage}</td>
              </tr>
              <tr>
                <th class="table-label">Hình thức</th>
                <td class="data_book_layout">{bookLayout}</td>
              </tr>
              <tr>
                <th class="table-label">Số lượng còn</th>
                <td class="data_book_layout">{quantityBook}</td>
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
                  {description}
                </em>
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default InforDetail;
