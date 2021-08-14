import { Faq } from "interface/Faq";
import { SetStateAction, Dispatch } from "react";

interface Props {
  faq: Faq;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

function OneFaq({ faq, active, setActive }: Props) {
  const changeClass = () => {
    active === faq.id ? setActive(-1) : setActive(faq.id);
  };
  if (!faq.enabled) {
    return null;
  }
  return (
    <div className={faq.id === active ? "faq active" : "faq"}>
      <h5 className="faq_title">{faq.title}</h5>
      <div
        className={faq.id === active ? "faq_arrow active" : "faq_arrow"}
        onClick={changeClass}
      ></div>
      <p
        className={
          faq.id === active ? "faq_description active" : "faq_description"
        }
      >
        {faq.description}
      </p>
    </div>
  );
}

export default OneFaq;
