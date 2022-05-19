/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { Button } from '../../components/Button';
import { ProgressBar } from '../../components/ProgressBar';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import '../../styles/form.scss';

const Form = () => {
  const navigator = useNavigate();

  const previousPage = () => navigator('/');
  const nextPage = () => navigator('/feedBack');

  return (
    <div className="card-form">
      <ProgressBar />
      <form className="card-section">
        <Title title={t('form.titleForm')} />
        <Paragraph description={t('form.descriptionPasswordManager')} />
        <Input />
        <Paragraph description={t('form.commentClue')} />
        <TextArea />
      </form>
      <footer className="container">
        <Button text={t('general.cancelButton')} functions={previousPage} />
        <Button text={t('general.nextButton')} functions={nextPage} style="dark" />
      </footer>
    </div>
  );
};

export default Form;
