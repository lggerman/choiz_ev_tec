import { useState } from "react";
import Modal from "./Modal";

function AddConsultation() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <div className="addConsultation">
      <h4 className="addConsultation_title">
        Las mejores expertas en ginecología del país están a tu disposición para
        conversar sin que tengas que salir de tu casa.
      </h4>
      <button className="addConsultation_button" onClick={openModal}>
        Agendar una consulta
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default AddConsultation;
