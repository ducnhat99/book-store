import React from 'react';
import DetailBook from './DetailBook';
import InforDetail from './InforDetail';
import '../../../styles/detail.css';

const Detail = () => {
  return (
    <div>
      <div className="container__detail">
        <div className="text__detail__header">
          <h2>Tiểu thuyết</h2>
        </div>
        <DetailBook />
        <InforDetail />
      </div>
    </div>
  );
};

export default Detail;
