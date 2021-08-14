import { Table as TableInterface } from "interface/Table";
import { Dispatch } from "redux";
import { ActionType } from "./medicinesActionsTypes";
import { Actions } from "./medicineActions";

export const addMedicines = (medicines: TableInterface) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.ADD_MEDICINES,
      payload: medicines,
    });
  };
};
