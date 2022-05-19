/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/style-prop-object */
import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ProgressBar } from '../../components/ProgressBar';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { passwordValidate } from '../../hook/passwordValidate';
import '../../styles/form.scss';

const Form = () => {
  const [first, setfirst] = useState(false);
  const { error } = passwordValidate();
  useLayoutEffect(() => {
    setfirst(error);
  });

  return (
    <div className="card-form">
      <ProgressBar />
      <form className="card-section">
        <Title title="Crea tu Password Manager" />
        <Paragraph
          description="En primer lugar, debes crear una
          contraseña direferente para us pertenencias
          electrónicas. No podrás recuperar tu contraseña, así
          que recuérdala bien."
        />
        <Input />
        <Paragraph
          description="Tambien puedes crear una pista que tec
        ayude a recordar tu contraseña maestra."
        />
        <TextArea />
      </form>
      <footer className="container">
        <Link to="/"><Button type="button" text="cancelar" /></Link>
        <Link to={first === 'Macht.' ? '/feedBack' : '#'}>
          <Button type="button" text="siguiente" style="dark" />
        </Link>
      </footer>
    </div>
  );
};

export default Form;
