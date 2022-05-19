import React from 'react';
import '../styles/progress-bar.scss';

export const ProgressBar = () => (
  <header className="progress-bar">
    <ol className="FormStepList">
      <li className="FormStepList-item">
        <span id="circle-1" className="FormStepIcon ">
          <span className="FormStepIcon-circle">1</span>
        </span>
      </li>

      <li className="FormStepList-item">
        <span className="FormStepIcon ">
          <span id="circle-2" className="FormStepIcon">2</span>
        </span>
      </li>

      <li className="FormStepList-item">
        <span id="circle-3" className="FormStepIcon FormStepIcon--last is-active">
          <span className="FormStepIcon-circle">3</span>
        </span>
      </li>
    </ol>
  </header>
);
