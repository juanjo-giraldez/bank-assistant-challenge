import React from 'react';
import '../styles/title.scss';

export const Title = (props) => {
  const { title } = props;
  return (
    <h1 className="title">
      {title}
    </h1>
  );
};
