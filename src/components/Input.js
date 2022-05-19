/* eslint-disable no-sequences */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable-next-line jsx-a11y/label-has-associated-control */
import React from 'react';
import { t } from 'i18next';
import { passwordValidate } from '../hook/passwordValidate.js';
import { VisibilityOff } from './VisibilityOff';
import { Visibility } from './Visibility';
import '../styles/input.scss';

export const Input = () => {

  const {
    password,
    error,
    handleOnChange,
    handleClickShowPassword,
    handleClickShowPasswordTwo,
    handleMouseDownPassword,
    displayBar,
    validateInput,
  } = passwordValidate();
  return (
    <div className="input-container">
      <div className="field-container">
        <label htmlFor="Password">{t('form.LabelCreatePassword')}</label>
        <input
          type={password.showPasswordOne ? 'text' : 'password'}
          name="password"
          onChange={handleOnChange}
          placeholder={t('form.placeHolderPassword')}
          minLength={8}
          maxLength={24}
          onBlur={validateInput}
        />
        <div
          className="eye-container"
          data-name="password"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {password.showPasswordOne ? <Visibility /> : <VisibilityOff />}
        </div>
        {displayBar()}
        {error.password && (
        <div
          className={error.password === 'Macht' || error.password === 'Coinciden' ? 'macht' : 'error'}
        >
          {error.password}
        </div>
        )}
      </div>
      <div className="field-container">
        <label htmlFor="Repeat">{t('form.reEnterYourRassword')}</label>
        <input
          type={password.showPasswordTwo ? 'text' : 'password'}
          name="confirmPassword"
          onChange={handleOnChange}
          placeholder={t('form.placeHoldeReEnter')}
          minLength={8}
          maxLength={24}
          onBlur={validateInput}
        />
        <div
          className="eye-container"
          data-name="confirmPassword"
          onClick={handleClickShowPasswordTwo}
          onMouseDown={handleMouseDownPassword}
        >
          {password.showPasswordTwo ? <Visibility /> : <VisibilityOff />}
        </div>
        {error.confirmPassword && (
        <div
          className={error.password === 'Macht' || error.password === 'Coinciden' ? 'macht' : 'error'}
        >
          {error.confirmPassword}
        </div>
        )}
      </div>
    </div>
  );
};
