import React from 'react';

function LikeButton (props) {
  const { onClick, title } = props;
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

export default LikeButton
