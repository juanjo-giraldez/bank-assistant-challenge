/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react';
import '../../styles/view-feedBack.scss';
import { t } from 'i18next';
import { Footer } from '../../components/Footer';
import CheckSuccess from '../../assets/img/Check_green_circle.png';
import Warning from '../../assets/img/Warning.png';

const ViewFeedBack = (props) => {
  // const { success } = props;

  const getItRight = () => (
    <section className="success">
      <div className="message">
        <img className="success-img" src={CheckSuccess} alt="success-create" />
        <article className="text">
          <h2 className="text-title">{t('feedback.titlesSuccess')}</h2>
          <p className="text-description">{t('feedback.textSuccess')}</p>
        </article>
      </div>
      <Footer text={t('general.cancelButton')} type="text" footerButton="dark" />
    </section>
  );

  const failed = () => (
    <section className="feedBack">
      <div className="message">
        <img className="fail-img" src={Warning} alt="Warning-failed" />
        <article className="text">
          <h2 className="text-title">{t('feedback.titlesError')}</h2>
          <p className="text-description">{t('feedback.textError')}</p>
        </article>
      </div>
      <Footer text={t('general.cancelButton')} type="text" footerButton="dark" />
    </section>
  );

  return <div className="view-feedBack">{true ? getItRight() : failed()}</div>;
};

export default ViewFeedBack;
