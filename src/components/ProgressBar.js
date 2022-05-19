/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/progress-bar.scss';

export const ProgressBar = () => {

  const location = useLocation();

  const styles = document.querySelectorAll('.FormStepIcon');
  styles.forEach((item) => {
    item.classList.remove('is-active');

    console.log('===============================', location.pathname === '/form', item.getAttribute('id').includes('2'));
    if (item.getAttribute('id').includes('1') && location.pathname === '/') {
      item.classList.add('is-active');
    }

    if (location.pathname === '/form' && item.getAttribute('id').includes('2')) {
      console.log('estoy aquisition');
      item.classList.add('is-active');
    }
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
