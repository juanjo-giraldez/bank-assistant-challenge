/* eslint-disable react/button-has-type */
import React from 'react';
import '../styles/button.scss';

export const Button = (props) => {
  // eslint-disable-next-line no-console
  console.log('props Button', props);
  /* eslint no-unsafe-optional-chaining: "error" */
  const { type, text, klass } = props;
  return <button type={type} className={klass || 'stantard'}>{text}</button>;
};
