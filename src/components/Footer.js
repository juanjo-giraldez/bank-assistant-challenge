import React from 'react';
import { Button } from './Button';
import '../styles/footer.scss';

export const Footer = (props) => {
  // eslint-disable-next-line no-console
  console.log('props Footer2', props);
  const { text, type, footerButton } = props;
  return (
    <section className="container">
      <Button text={text} type={type} klass={footerButton} />
      <Button text={text} type={type} klass={footerButton} />
    </section>
  );
};
