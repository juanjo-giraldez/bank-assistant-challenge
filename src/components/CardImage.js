import React from 'react';
import '../styles/card-image.scss';

export const CardImage = (props) => {
  const { src, alt, text } = props;
  return (
    <div className="card-image">
      <img className="image" src={src} alt={alt} />
      <p className="text">{text}</p>
    </div>
  );
};
