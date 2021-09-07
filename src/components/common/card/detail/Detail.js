import React from 'react';
import DetailBook from './DetailBook';
import InforDetail from './InforDetail';
import BoughtTogether from './BoughtTogether';
import CommentUser from './CommentUser';

const Detail = () => {
  return (
    <div className="container__detail">
      <div className="container">
        <DetailBook />
        <InforDetail />
        <BoughtTogether />
        <CommentUser />
      </div>
    </div>
  );
};

export default Detail;
