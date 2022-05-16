import React from 'react';
import { Footer } from '../../components/Footer';
import { ProgressBar } from '../../components/ProgressBar';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

const Form = () => (
  <div className="card-info">
    <ProgressBar />
    <section className="card-section">
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
    </section>
    <Footer text="cancelar" type="text" footerButton="dark" />
  </div>
);

export default Form;
