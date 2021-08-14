import { Faq as FaqInterface } from "interface/Faq";
import { Actions } from "./faqsActions";
import { ActionType } from "./faqsActionsTypes";

interface FaqsState {
  faqs: FaqInterface[];
}

const initialState = {
  faqs: [],
};

export const faqsReducer = (
  state: FaqsState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionType.ADD_FAQS:
      return { ...initialState, faqs: action.payload };
    default:
      return state;
  }
};
