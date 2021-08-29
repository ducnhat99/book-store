import React from 'react';
import DetailBook from './DetailBook';
import InforDetail from './InforDetail';
import '../../../styles/detail.css';

const Detail = () => {
  return (
    <div className="container__detail">
      <div className="container">
        <DetailBook />
        <InforDetail />
      </div>
    </div>
  );
};

export default Detail;
