import React from 'react';
import { Footer } from '../../components/Footer';
import { ProgressBar } from '../../components/ProgressBar';
import { Title } from '../../components/Title';
import { CardImage } from '../../components/CardImage';
import { Paragraph } from '../../components/Paragraph';
import safetyBox from '../../assets/img/group-3.svg';
import thinkingHead from '../../assets/img/group.svg';
import '../../styles/information.scss';

const Information = () => (
  <div className="card-info">
    <ProgressBar />
    <section className="card-section">
      <Title title="Crea tu Password Manager" />
      <div className="image">
        <CardImage
          src={thinkingHead}
          alt="thinking-Head"
          text="Guarda aquí todas tus contraseñas, datos
      o cualquier información, olvida las notas
      de papel y las aplicaciones no protegidas."
        />
        <CardImage
          src={safetyBox}
          alt="safety-Box"
          text="Crea tu clave maestra: solo tú podras
      acceder a tus secretos con ella"
        />
      </div>

      <Paragraph
        title="Cómo funciona"
        description="En primer lugar, debes crear una
      contraseña direferente para us pertenencias
      electrónicas. No podrás recuperar tu contraseña, así
      que recuérdala bien."
      />
      <Paragraph
        title="Qué datos puedes guardar"
        description="Por ejemplo, el número de tu tarjeta,
      el PIN y el PUK de teléfono móvil, el número de
      serie de alguno de tus dispositivos o cualquier
      información que necesites tener en lugar seguro"
      />
    </section>
    <Footer text="cancelar" type="text" footerButton="dark" />
  </div>
);

export default Information;
