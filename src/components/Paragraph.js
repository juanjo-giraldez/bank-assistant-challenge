import React from 'react';
import '../styles/paragraph.scss';

const Paragraph = (props) => {
  const { title, description } = props;
  return (
    <article className="paragraph" aria-label="paragraph-info">
      <h2 className="paragraph-title" aria-label="paragraph-info-title">{title}</h2>
      <p className="paragraph-description" aria-label="paragraph-info-description">{description}</p>
    </article>
  );
};

export default Paragraph;
