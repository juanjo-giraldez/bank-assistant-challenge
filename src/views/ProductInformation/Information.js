/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { Button } from '../../components/Button';
import { ProgressBar } from '../../components/ProgressBar';
import { Title } from '../../components/Title';
import { CardImage } from '../../components/CardImage';
import { Paragraph } from '../../components/Paragraph';
import safetyBox from '../../assets/img/group-3.svg';
import thinkingHead from '../../assets/img/group.svg';
import '../../styles/information.scss';

const Information = () => {
  const [onehabilita, setOnehabilita] = useState(null);
  const navigator = useNavigate();

  const previousPage = () => navigator('/');
  const nextPage = () => navigator('/form');

  const handleCheckboxActive = (event) => {
    setOnehabilita(event.target.checked);
  };
  console.log('first', onehabilita);
  return (
    <div className="card-info">
      <ProgressBar />
      <section className="card-section">
        <Title title={t('information.titleInformation')} />
        <div className="image">
          <CardImage
            src={thinkingHead}
            alt={t('information.thinkingHeadImage')}
            text={t('information.KeepYourPasswordsSafe')}
          />
          <CardImage
            src={safetyBox}
            alt={t('information.SafeBepositBoxImage')}
            text={t('information.SafeBepositBox')}
          />
        </div>
        <Paragraph
          title={t('information.titleHowItWorks')}
          description={t('information.descriptionHowItWorks')}
        />
        <Paragraph
          title={t('information.titleDataSave')}
          description={t('information.descriptionDataSave')}
        />
        <article className="checkbox">
          <input
            className="checkbox-input"
            id="check1"
            name="check1"
            type="checkbox"
            onChange={handleCheckboxActive}
          />
          <p className="text">{t('information.terms')}</p>
        </article>
      </section>
      <footer className="container">
        <Button text={t('general.cancelButton')} functions={previousPage} />
        <button
          type="button"
          disabled={!onehabilita}
          className="dark"
          onClick={nextPage}
        >
          {t('general.nextButton')}
        </button>
      </footer>
    </div>
  );
};

export default Information;
