import React from 'react';
import '../styles/paragraph.scss';

export const Paragraph = (props) => {
  const { title, description } = props;
  return (
    <article className="paragraph">
      <h2 className="paragraph-title">{title}</h2>
      <p className="paragraph-description">{description}</p>
    </article>
  );
};
