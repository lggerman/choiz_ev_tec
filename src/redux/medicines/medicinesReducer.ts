import { Table as TableInterface } from "interface/Table";
import { Actions } from "./medicineActions";
import { ActionType } from "./medicinesActionsTypes";

interface MedicinesState {
  medicines: TableInterface;
}

const initialState = {
  medicines: { patches: [], pills: [], rings: [] },
};

export const medicinesReducer = (
  state: MedicinesState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionType.ADD_MEDICINES:
      return { ...initialState, medicines: action.payload };
    default:
      return state;
  }
};
