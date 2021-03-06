import React from 'react';
import '../styles/title.scss';

const Title = (props) => {
  const { title } = props;
  return (
    <h1 id="title" className="title" aria-label="heading-title">
      {title}
    </h1>
  );
};

export default Title;
