import React from 'react';

const Information = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>Esta es la vista de información del Wizard Password</h1>
      <h2>Extra de información</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default Information;
