import React from "react";

interface Props {
  className: string;
}

function TableMedicinesHead({ className }: Props) {
  return (
    <>
      <div className={className}>Marcas que ofrecemos</div>
      <div className={className}>Laboratorio</div>
      <div className={className}>
        Precio<span>(sin cobertura médica)</span>
      </div>
    </>
  );
}

export default TableMedicinesHead;
