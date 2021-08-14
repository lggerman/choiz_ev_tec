import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAQS_ENDPOINT } from "services/endpoints";
import { makeGET } from "services/httpRequest";
import { Faq as FaqInterface } from "interface/Faq";
import OneFaq from "components/common/OneFaq";
import { addFaqs } from "redux/faqs/faqsActionsCreators";
import { State } from "redux/reducers";

function Faqs() {
  const dispatch = useDispatch();
  const faqsFromStore = useSelector((state: State) => state.faqs.faqs);
  const [faqs, setFaqs] = useState<FaqInterface[]>([]);
  const [active, setActive] = useState<number>(-1);
  useEffect(() => {
    const obtainFaqs = async () => {
      const { data: faqs } = await makeGET(FAQS_ENDPOINT);
      dispatch(addFaqs(faqs));
      setFaqs(faqs);
    };
    faqsFromStore.length === 0 ? obtainFaqs() : setFaqs(faqsFromStore);
  }, []); // eslint-disable-line

  return (
    <div className="faqs_container" id="faqs">
      <h3 className="faqs_title">Preguntas frecuentes</h3>
      {faqs.map((faq) => {
        return (
          <OneFaq
            faq={faq}
            key={faq.id}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
}

export default Faqs;
