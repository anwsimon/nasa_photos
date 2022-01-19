import React from 'react';

function LikeButton (props) {
  const { onClick, className } = props;

  return (
    <div onClick={onClick} className ={className}>
    </div>
  );
}

export default LikeButton
