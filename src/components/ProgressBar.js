import React from 'react';
import '../styles/progress-bar.scss';

export const ProgressBar = () => (
  <header className="progress-bar">
    <div className="bullet">
      <p className="number">1</p>
      <span className="bar" />
    </div>
    <div className="bullet">
      <p className="number">2</p>
      <span className="bar" />
    </div>
    <div className="bullet">
      <p className="number">3</p>
    </div>
  </header>
);
