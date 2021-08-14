import { Faq as FaqInterface } from "interface/Faq";
import { Dispatch } from "redux";
import { ActionType } from "./faqsActionsTypes";
import { Actions } from "./faqsActions";

export const addFaqs = (faqs: FaqInterface[]) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.ADD_FAQS,
      payload: faqs,
    });
  };
};
