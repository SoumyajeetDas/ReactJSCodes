import { ChevronDown, ChevronUp } from "lucide-react";
import { createContext, use, useState } from "react";

const AccordionRootContext = createContext();
const AccordionItemContext = createContext();

const Accordion = ({ children }) => {
  const [active, setActive] = useState(-1);
  const [closing, setIsClosing] = useState(-1);

  const handleButton = (i) => () => {
    // When you try to close the same accordion which is already open, it will close it.
    if (i === active) {
      setIsClosing(i);
      setTimeout(() => {
        setActive(-1);
        setIsClosing(-1);
      }, 200);

      return;
    } else if (active === -1) {
      // First time or when nothing is open
      setActive(i);
    } else {
      setIsClosing(active);

      setTimeout(() => {
        setActive(i);
      }, 200);
    }
  };

  return (
    <AccordionRootContext.Provider value={{ active, closing, handleButton }}>
      {children}
    </AccordionRootContext.Provider>
  );
};

const useAccordionContext = () => {
  const context = use(AccordionRootContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an AccordionRoot");
  }
  return context;
};

const useAccordionItemContext = () => {
  const context = use(AccordionItemContext);
  if (!context) {
    throw new Error(
      "useAccordionItemContext must be used within an AccordionItem",
    );
  }
  return context;
};

const AccordionHeader = ({ children }) => {
  const { active } = useAccordionContext();
  const { i } = useAccordionItemContext();
  return (
    <div className="header">
      {children}
      {i === active ? <ChevronUp /> : <ChevronDown />}
    </div>
  );
};

const AccordionBody = ({ children }) => {
  const { active, closing } = useAccordionContext();
  const { i } = useAccordionItemContext();
  return (
    i === active && (
      <div
        className={`body ${
          i === active && i === closing // This is when you click on the same accordion which is already open, it will close it.
            ? "not-active"
            : i === active
              ? "active"
              : "no-active"
        }`}
      >
        {children}
      </div>
    )
  );
};

const AccordionItem = ({ children, i }) => {
  const { handleButton } = useAccordionContext();
  return (
    <AccordionItemContext.Provider value={{ i }}>
      <div className="accordion" onClick={handleButton(i)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Item = AccordionItem;

export default Accordion;
