/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { stringCounter } from '../hook/stringCounter';
import '../styles/text-area.scss';

export const TextArea = () => {
  const { input, handleValueChange } = stringCounter();

  return (
    <div className="text-area">
      <label>Crea tu pista para recordar tu contraseña (opcional)</label>
      <div>
        <input
          id="clue"
          type="text"
          placeholder="Introduce tu pista"
          onChange={handleValueChange}
          maxLength={255}
        />
        <p className="counter">
          {input}
          /255
        </p>
      </div>
    </div>
  );
};
