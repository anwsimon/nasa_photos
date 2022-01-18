import React from 'react';

function LikeButton (props) {
  const { onClick, title } = props;

  return (
    <button onClick={onClick} className ="btn btn-primary">
      {title}
    </button>
  );
}

export default LikeButton