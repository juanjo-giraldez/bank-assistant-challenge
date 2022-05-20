/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/progress-bar.scss';

export const ProgressBar = () => {

  const location = useLocation();

  useEffect(() => {
    const styles = document.querySelectorAll('.FormStepIcon');
    styles.forEach((item) => {
      item.classList.remove('is-active');

      if (item.getAttribute('id').includes('1') && location.pathname === '/information') {
        item.classList.add('is-active');
      }

      if (location.pathname === '/form' && item.getAttribute('id').includes('2')) {
        item.classList.add('is-active');
      }
      if (location.pathname === '/feedback' && item.getAttribute('id').includes('3')) {
        item.classList.add('is-active');
      }
    });
  });

  return (
    <header className="progress-bar">
      <ol className="FormStepList">
        <li className="FormStepList-item">
          <span id="circle-1" className="FormStepIcon ">
            <span className="FormStepIcon-circle">1</span>
          </span>
        </li>

        <li className="FormStepList-item">
          <span id="circle-2" className="FormStepIcon ">
            <span className="FormStepIcon-circle">2</span>
          </span>
        </li>

        <li className="FormStepList-item">
          <span id="circle-3" className="FormStepIcon FormStepIcon--last">
            <span className="FormStepIcon-circle">3</span>
          </span>
        </li>
      </ol>
    </header>
  );

};
