/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleCheckboxActive = (event) => {
    setOnehabilita(event.target.checked);
  };
  return (
    <div className="card-info">
      <ProgressBar />
      <section className="card-section">
        <Title title="Bienvenido a Cuenta corriente OpenClose" />
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
        <div className="checkbox">
          <input
            className="input"
            id="check1"
            name="check1"
            type="checkbox"
            onChange={handleCheckboxActive}
          />
          <p className="text">
            Siendo mayor de edad , consiento el tratamiento de mis datos. OPENBANK S. L. tratará mis
            datos con la finalidad de usos para gestión de mis interese economicos . Puede ejercer
            sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición,
            como le informamos en nuestra Política de Privacidad y Aviso Legal.
          </p>
        </div>
      </section>
      <footer className="container">
        <Link to="/">
          <Button text="cancelar" />
        </Link>

        <Link to={onehabilita ? '/form' : '#'}>
          <Button text="siguiente" style="dark" />
        </Link>
      </footer>
    </div>
  );
};

export default Information;
