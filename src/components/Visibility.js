import React from 'react';
import show from '../assets/img/eye-hidden.png';
import '../styles/visibility.scss';

const Visibility = () => (
  <img
    className="image-eye"
    src={show}
    alt="eye-password"
    aria-label="icon-eye-open"
  />
);
export default Visibility;
