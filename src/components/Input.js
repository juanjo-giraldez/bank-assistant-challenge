/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/input.scss';

export const Input = () => (
  <div className="input-container">
    <div>
      <label htmlFor="Password">Crea tu contraseña Maestra</label>
      <input type="password" name="Password" placeholder="Contraseña" />
    </div>
    <div>
      <label htmlFor="Repeat">Repite tu Contraseña Maestra</label>
      <input type="password" name="Repeat" placeholder="Repite tu contraseña" />
    </div>
  </div>
);
