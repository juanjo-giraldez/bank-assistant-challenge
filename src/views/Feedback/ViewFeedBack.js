/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/style-prop-object */
/* eslint-disable-next-line  */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { t } from 'i18next';
import Button from '../../components/Button';
import Warning from '../../assets/img/Warning.png';
import CheckSuccess from '../../assets/img/Check_green_circle.png';
import ProgressBar from '../../components/ProgressBar';
import '../../styles/modal.scss';

const ViewFeedBack = () => {
  const nav = useNavigate();
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line no-console

  const { state } = useLocation();
  const accessPage = () => {
    nav('/access');
  };

  const closeModal = () => {
    nav('/form');
  };

  // eslint-disable-next-line no-constant-condition
  return state.success ? (
    <div className="modal" aria-label="modal-success">
      <div className="background">
        <section className="success" aria-label="region-modal-success">
        <ProgressBar />
          <div className="message" aria-label="article-modal-success">
            <img className="success-img" src={CheckSuccess} alt="success-create" />
            <div className="text">
              <h2 className="text-title">{t('feedback.titlesSuccess')}</h2>
              <p className="text-description">{t('feedback.textDescription')}</p>
            </div>
          </div>
          <footer className="container" aria-label="footer-modal-success">
            <div className="footer-btn">
              <Button text={t('general.successButton')} type="Button" style="pink" functions={accessPage} />
            </div>
          </footer>
        </section>
      </div>
    </div>) : (
    <section className="modal" aria-label="section-modal-failed">
      <div className="feedBack">
      <ProgressBar />
        <article className="message" aria-label="article-modal-failed">
          <img className="fail-img" src={Warning} alt="Warning-failed" />
          <div className="text">
            <h2 className="text-title">{t('feedback.titlesError')}</h2>
            <p className="text-description">{t('feedback.textError')}</p>
          </div>
        </article>
        <footer className="container" aria-label="footer-modal-failed">
          <div className="footer-btn">
            <button className="pink" type="Button" onClick={closeModal}>
              {t('general.errorButton')}
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default ViewFeedBack;
