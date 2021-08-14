import { useEffect } from "react";
import { MEDICINES_ENDPOINT } from "services/endpoints";
import { makeGET } from "services/httpRequest";
import Table from "components/common/Table";
import { Table as TableInterface } from "interface/Table";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { addMedicines } from "redux/medicines/medicinesActionsCreators";

function MedicineList() {
  const dispatch = useDispatch();
  const medicinesFromStore: TableInterface = useSelector(
    (state: State) => state.medicines.medicines
  );

  useEffect(() => {
    medicinesFromStore.pills.length === 0 && obtainMedicines();
  }, []); // eslint-disable-line

  const obtainMedicines = async () => {
    const { data } = await makeGET(MEDICINES_ENDPOINT);
    dispatch(addMedicines(data));
  };
  return (
    <div className="medicineList">
      <h3 className="medicineList_title">Lista de medicamentos</h3>
      <Table
        table={medicinesFromStore}
        subtitles={["Pastillas", "Anillos", "Parches"]}
      ></Table>
    </div>
  );
}

export default MedicineList;
