import React from 'react';
import '../styles/card-image.scss';

const CardImage = (props) => {
  const { src, alt, text } = props;
  return (
    <article className="card-image" aria-label="Card-info-image-description">
      <img className="image" src={src} alt={alt} />
      <p className="text" aria-label="info-image-description">{text}</p>
    </article>
  );
};

export default CardImage;
