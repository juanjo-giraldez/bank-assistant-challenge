/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { t } from 'i18next';
import { stringCounter } from '../hook/stringCounter';
import '../styles/text-area.scss';

export const TextArea = () => {
  const { input, handleValueChange } = stringCounter();

  return (
    <div className="text-area">
      <label>{t('form.titleClues')}</label>
      <div>
        <textarea
          id="clue"
          type="text"
          placeholder={t('form.titleForm')}
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
