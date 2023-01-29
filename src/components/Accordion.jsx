import { AccordionBody } from "./AccordionBody";
import { AccordionImg } from "./AccordionImg";
import "./accordion.css";

export const Accordion = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <AccordionImg />
          <AccordionBody />
        </div>
      </main>
    </>
  );
};
