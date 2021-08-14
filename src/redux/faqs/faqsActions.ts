import { Faq as FaqInterface } from "interface/Faq";
import { ActionType } from "./faqsActionsTypes";

interface AddFaqsAction {
  type: ActionType.ADD_FAQS;
  payload: FaqInterface[];
}

export type Actions = AddFaqsAction;
