/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react';
import '../../styles/view-feedBack.scss';
import { Footer } from '../../components/Footer';
import CheckSuccess from '../../assets/img/Check_green_circle.png';
import Warning from '../../assets/img/Warning.png';

const ViewFeedBack = (props) => {
  // const { success } = props;

  const getItRight = () => (
    <section className="success">
      <div className="message">
        <img className="success-img" src={CheckSuccess} alt="success" />
        <article className="text">
          <h2 className="text-title">¡Tu Password Manager ya está creado!</h2>
          <p className="text-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </article>
      </div>
      <Footer text="cancelar" type="text" footerButton="dark" />
    </section>
  );

  const failed = () => (
    <section className="feedBack">
      <div className="message">
        <img className="fail-img" src={Warning} alt="Warning-failed" />
        <article className="text">
          <h2 className="text-title">Ha habido un error</h2>
          <p className="text-description">
            No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde
          </p>
        </article>
      </div>
      <Footer text="cancelar" type="text" footerButton="dark" />
    </section>
  );

  return <div className="view-feedBack">{true ? getItRight() : failed() }</div>;
};

export default ViewFeedBack;
