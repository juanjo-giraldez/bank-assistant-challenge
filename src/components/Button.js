/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../styles/button.scss';

const Button = (props) => {
  /* eslint no-unsafe-optional-chaining: "error" */
  const { type, text, style, functions } = props;
  return (
    <button
      role="link"
      aria-label="button"
      type={type}
      className={style || 'stantard'}
      onClick={functions}
    >
      {text}
    </button>
  );
};

export default Button;
