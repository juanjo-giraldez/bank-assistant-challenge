/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/style-prop-object */
/* eslint-disable-next-line  */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { t } from 'i18next';
import { Button } from '../../components/Button';
import Warning from '../../assets/img/Warning.png';
import CheckSuccess from '../../assets/img/Check_green_circle.png';
import { ProgressBar } from '../../components/ProgressBar';
import '../../styles/modal.scss';

const ViewFeedBack = () => {
  const nav = useNavigate();
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line no-console

  const { state } = useLocation();
  const { success } = state;

  const feedBackSucces = () => {
    const accessPage = () => {
      nav('/access');
    };
    return (
    <div className="modal">
      <div className="background">
        <section className="success">
        <ProgressBar />
          <div className="message">
            <img className="success-img" src={CheckSuccess} alt="success-create" />
            <div className="text">
              <h2 className="text-title">{t('feedback.titlesSuccess')}</h2>
              <p className="text-description">{t('feedback.textDescription')}</p>
            </div>
          </div>
          <footer className="container">
            <div className="footer-btn">
              <Button text={t('general.successButton')} type="Button" style="pink" functions={accessPage} />
            </div>
          </footer>
        </section>
      </div>
    </div>);
  };

  const feedBackFailed = () => {
    const closeModal = () => {
      nav('/form');
    };
    return (
      <div className="modal">
        <section className="feedBack">
        <ProgressBar />
          <div className="message">
            <img className="fail-img" src={Warning} alt="Warning-failed" />
            <div className="text">
              <h2 className="text-title">{t('feedback.titlesError')}</h2>
              <p className="text-description">{t('feedback.textError')}</p>
            </div>
          </div>
          <footer className="container">
            <div className="footer-btn">
              <button className="pink" type="Button" onClick={closeModal}>
                {t('general.errorButton')}
              </button>
            </div>
          </footer>
        </section>
      </div>
    );
  };

  // eslint-disable-next-line no-constant-condition
  return success ? feedBackSucces() : feedBackFailed();
};
export default ViewFeedBack;
