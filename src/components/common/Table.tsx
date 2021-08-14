import React from "react";
import { Table as TableInterface } from "interface/Table";
import TableMedicinesHead from "./TableMedicinesHead";
import TableMedicineBody from "./TableMedicinesBody";
interface Props {
  table: TableInterface;
  subtitles: string[];
}

function Table(props: Props) {
  const { pills, rings, patches } = props.table;
  return (
    <div className="table">
      <div className="table_title">
        <h3>
          Pildoras <span>(Los precios mostrados son sin cobertura médica)</span>
        </h3>
      </div>

      <div className="gridContainer">
        <TableMedicinesHead className={"gridItem subtitle"} />
      </div>
      <TableMedicineBody medicines={pills}></TableMedicineBody>

      <div className="table_title">
        <h3>
          Anillos <span>(Los precios mostrados son sin cobertura médica)</span>
        </h3>
      </div>

      <div className="gridContainer">
        <TableMedicinesHead className={"gridItem subtitle"} />
      </div>
      <TableMedicineBody medicines={rings}></TableMedicineBody>

      <div className="table_title">
        <h3>
          Parches <span>(Los precios mostrados son sin cobertura médica)</span>
        </h3>
      </div>

      <div className="gridContainer">
        <TableMedicinesHead className={"gridItem subtitle"} />
      </div>
      <TableMedicineBody medicines={patches}></TableMedicineBody>
    </div>
  );
}

export default Table;
