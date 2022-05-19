/* eslint-disable react/button-has-type */
import React from 'react';
import '../styles/button.scss';

export const Button = (props) => {
  /* eslint no-unsafe-optional-chaining: "error" */
  const { type, text, style } = props;
  return <button type={type} className={style || 'stantard'}>{text}</button>;
};
