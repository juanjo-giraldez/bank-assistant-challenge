/* eslint-disable no-mixed-operators */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { Button } from '../../components/Button';
import { ProgressBar } from '../../components/ProgressBar';
import Title from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { TextArea } from '../../components/TextArea';
import { passwordValidate } from '../../hook/passwordValidate.js';
import { VisibilityOff } from '../../components/VisibilityOff';
import { Visibility } from '../../components/Visibility';
import submitForm from '../../services/api.js';
import '../../styles/input.scss';
import '../../styles/form.scss';

const Form = () => {
  const {
    password,
    handleOnChange,
    handleClickShowPassword,
    handleClickShowPasswordTwo,
    handleMouseDownPassword,
    displayBar,
    validateInput,
  } = passwordValidate();

  const nav = useNavigate();
  const previousPage = () => nav('/');

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    if (
      password.password.length > 8
      && password.confirmPassword.length > 8
      && password.password === password.confirmPassword
    ) {
      // eslint-disable-next-line no-use-before-define
      onSubmit();
    }
  };

  // eslint-disable-next-line consistent-return
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await submitForm(
        password.password,
        password.confirmPassword,
        password.commentClue,
      );

      if (res.status === 200) {
        return nav('/feedback', { state: { success: true, res:res.status } });
      }
    // eslint-disable-next-line no-shadow
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      nav('/feedback', { state: { success: false } });
    }
  }

  return (
    <form onSubmit={onSubmit} className="card-form">
      <ProgressBar />
      <section className="card-section">
        <Title title={t('form.titleForm')} />
        <Paragraph description={t('form.descriptionPasswordManager')} />
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
            {password.passwordError && (
            <div
              className={
                password.passwordError === 'Macht' || password.confirmPasswordError === 'Coinciden'
                  ? 'macht'
                  : 'error'
              }
            >
              {password.passwordError}
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
            {password.confirmPasswordError && (
            <div
              className={
                password.confirmPasswordError === 'Macht'
                || password.confirmPasswordError === 'Coinciden'
                  ? 'macht'
                  : 'error'
              }
            >
              {password.confirmPasswordError}
            </div>
            )}
          </div>
        </div>
        <Paragraph description={t('form.confirmPassword')} />
        <Paragraph description={t('form.commentClue')} />
        <TextArea />
      </section>
      <footer className="container">
        <Button text={t('general.cancelButton')} functions={previousPage} />
        <button
          type="submit"
          disabled={password.password !== null
            && password.password.length > 0
            && password.password !== password.confirmPassword}
          className="dark"
        >
          {t('general.nextButton')}

        </button>
      </footer>
    </form>
  );
};

export default Form;
