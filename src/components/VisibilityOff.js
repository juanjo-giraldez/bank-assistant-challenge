import React from 'react';
import hidden from '../assets/img/eye-show.png';
import '../styles/visibility.scss';

const VisibilityOff = () => (
  <img
    className="image-eye"
    src={hidden}
    alt="eye-off-password"
    aria-label="icon-eye-Closed"
  />
);
export default VisibilityOff;
