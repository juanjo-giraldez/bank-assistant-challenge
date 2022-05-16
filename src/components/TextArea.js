/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../styles/text-area.scss';

export const TextArea = () => {
  const [input, setInput] = useState('0');
  const handleValueChange = (e) => setInput(e.currentTarget.value.length);

  return (
    <div className="text-area">
      <label>Crea tu pista para recordar tu contraseña (opcional)</label>
      <div>
        <input
          id="clue"
          type="text"
          placeholder="Introduce tu pista"
          onChange={handleValueChange}
          maxLength={60}
        />
        <p className="counter">
          {input}
          /60
        </p>
      </div>
    </div>
  );
};
