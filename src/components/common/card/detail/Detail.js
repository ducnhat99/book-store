import * as React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getBookDetail } from '../../../../slice/bookSlice'
import DetailBook from './DetailBook';
import InforDetail from './InforDetail';
import BoughtTogether from './BoughtTogether';
import CommentUser from './CommentUser';

const Detail = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams()
  const bookDetail = useSelector(state => state.book.bookDetail)
  useEffect(() => {
    dispatch(getBookDetail(bookId))
  }, [dispatch, bookId])

  return (
    <div className="container__detail">
      <div className="container">
        <DetailBook id={bookId}
          categoryId={bookDetail.categoryId}
          publishYear={bookDetail.publishYear}
          language={bookDetail.language}
          quantityPage={bookDetail.quantityPage}
          bookName={bookDetail.bookName}
          imagesBook={bookDetail.imagesBook}
          description={bookDetail.description}
          supplier={bookDetail.supplier}
          author={bookDetail.author}
          publisher={bookDetail.publisher}
          rateStar={bookDetail.rateStar}
          bookLayout={bookDetail.bookLayout}
          quantityBook={bookDetail.quantityBook}
          price={bookDetail.price}
          realPrice={bookDetail.realPrice} />
        <InforDetail {...bookDetail} />
        <BoughtTogether id={bookId} categoryId={bookDetail.categoryId} />
        <CommentUser id={bookId} />
      </div>
    </div>
  );
};

export default Detail;
