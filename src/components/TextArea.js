/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { t } from 'i18next';
import { stringCounter } from '../hook/stringCounter';
import '../styles/text-area.scss';

const TextArea = () => {
  const { input, handleValueChange } = stringCounter();

  return (
    <article className="text-area" aria-label="text-clue-field">
      <label aria-label="text-area-label">{t('form.titleClues')}</label>
      <div>
        <input
          id="clue"
          type="text"
          placeholder={t('form.titleForm')}
          onChange={handleValueChange}
          maxLength={255}
          aria-label="text-area-input"
        />
        <p className="counter" aria-label="text-area-counter">
          {input}
          /255
        </p>
      </div>
    </article>
  );
};

export default TextArea;
