import DesktopImg from "../assets/images/illustration-woman-online-desktop.svg";
import MobileImg from "../assets/images/illustration-woman-online-mobile.svg";

export const AccordionImg = () => {
  return (
    <>
      <div className="accordion-img">
        <div className="overlay">
          <picture>
            <source media="(min-width: 1024px)" srcSet={DesktopImg} />
            <img src={MobileImg} alt="illustration woman online" />
          </picture>
        </div>
      </div>
    </>
  );
};
