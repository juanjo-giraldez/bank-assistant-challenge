import React from 'react';
import hidden from '../assets/img/eye-show.png';
import '../styles/visibility.scss';

export const VisibilityOff = () => (
  <img
    className="image-eye"
    src={hidden}
    alt="eye-off-password"
  />
);
