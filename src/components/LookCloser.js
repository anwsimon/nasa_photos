import React from 'react';

function LookCloser (props) {
  const { url } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer noopener" >Take a closer look</a>
  );
}

export default LookCloser
