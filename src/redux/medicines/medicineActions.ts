import { Table as TableInterface } from "interface/Table";
import { ActionType } from "./medicinesActionsTypes";

interface AddMedicineAction {
  type: ActionType.ADD_MEDICINES;
  payload: TableInterface;
}

export type Actions = AddMedicineAction;
