import { combineReducers } from "redux";
import { faqsReducer } from "./faqs/faqsReducer";
import { medicinesReducer } from "./medicines/medicinesReducer";

const appReducers = combineReducers({
  faqs: faqsReducer,
  medicines: medicinesReducer,
});

export default appReducers;

export type State = ReturnType<typeof appReducers>;
