import { useState } from "react";
import AccordionData from "../assets/data/FAQs.json";

export const AccordionBody = () => {
  const [data, setData] = useState(AccordionData);
  return (
    <>
      <div className="accordion-body">
        <h1 className="faq">FAQ</h1>
        <div className="faqs">
          {data.map((item) => {
            return (
              <>
                <details key={item.id}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
                <div className="line"></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
