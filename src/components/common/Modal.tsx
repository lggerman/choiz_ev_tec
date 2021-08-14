import React, { SetStateAction, Dispatch } from "react";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Modal({ open, setOpen }: Props) {
  const closeModal = () => {
    setOpen(false);
  };
  if (!open) {
    return null;
  }
  return (
    <div className="modal_background">
      <div className="modal">
        <div className="modal_button" onClick={closeModal} />
        <h3 className="modal_title">Paso a paso para la consulta remota</h3>
        <div className="modal_image_container">
          <div className="centered" id="one">
            <div className="modal_icon three"></div>
          </div>
          <div className="modal_rectangle"></div>
          <div className="centered" id="two">
            <div className="modal_icon two"></div>
          </div>
          <div className="modal_rectangle"></div>
          <div className="centered" id="three">
            <div className="modal_icon one"></div>
          </div>
        </div>
        <div className="content_container">
          <p className="number one">1.</p>
          <p className="number two">2.</p>
          <p className="number three">3.</p>
          <p className="title one">
            <span className="number inline one">1.</span>
            Completás algunas preguntas breves y nos contás el motivo de la
            consulta.
          </p>
          <p className="title two">
            <span className="number inline two">2.</span>
            Te contactamos por y coordinamos el pago para reservar la fecha.
          </p>
          <p className="title three">
            <span className="number inline three">3.</span>
            Tenés la videollamada con tu doctora, desde donde estés y sin límite
            de tiempo.
          </p>
          <p className="content one">
            Vamos a elegir la doctora adecuada según su especialidad y tu
            necesidad.
          </p>
          <p className="content two">
            Si tenés Swiss Medical es GRATIS* y si no, podes pedir reintegro
          </p>
          <p className="content three">¡Dura lo que vos necesites!</p>
          <p className="subcontent two">
            *Excepto para planes que requieren copago
          </p>
        </div>
        <button onClick={closeModal} className="mobile_close_button">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
