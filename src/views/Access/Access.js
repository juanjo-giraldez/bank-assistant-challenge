/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/style-prop-object */
import React from 'react'; import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { Button } from '../../components/Button';
import '../../styles/modal.scss';

const Access = () => {
  const nav = useNavigate();
  const goToInfo = () => {
    nav('/information');
  };

  return (
    <div className="modal">
      <div className="background">
        <section role="info-page" id="info" className="success" aria-label="section-access-page">
          <div className="message">
            <div className="text">
              <h2 className="text-title">{t('access.titlesAccess')}</h2>
              <p className="text-description">{t('access.textDescription')}</p>
            </div>
          </div>
          <footer className="container">
            <div className="footer-btn">
              <Button text={t('access.accessButton')} type="Button" style="pink" functions={goToInfo} />
            </div>
          </footer>
        </section>
      </div>
    </div>
  );

};

export default Access;
