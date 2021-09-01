import React from 'react';

import '../../../styles/item__notification.css';

const ItemNotification = (props) => {
  return (
    <div>
      <div className="item__notice__main">
        <div className="item__notice__left">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
        <div className="item__notice__right">{props.Date}</div>
      </div>
    </div>
  );
};

export default ItemNotification;
