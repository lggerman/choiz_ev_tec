import React from "react";
import { Medicine } from "interface/Medicine";

interface Props {
  medicines: Medicine[];
}

function TableMedicinesBody({ medicines }: Props) {
  return (
    <>
      {medicines.map((medicine) => {
        return (
          <div
            className="gridItemContainer"
            key={medicine.brand + medicine.laboratory}
          >
            <div className="gridItem brand">{medicine.brand}</div>
            <div className="gridItem">{medicine.laboratory}</div>
            <div className="gridItem">{`$ ${medicine.price}`}</div>
          </div>
        );
      })}
    </>
  );
}

export default TableMedicinesBody;
