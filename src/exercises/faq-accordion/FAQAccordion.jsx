import { useState } from "react";
import "./FAQAccordion.css";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer: "JSX allows us to write HTML-like syntax in JavaScript.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React Hook that lets us manage state.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ Accordion</h1>

      {questions.map((item, index) => (
        <div className="faq-item" key={index}>
          <h3 className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.question}
          </h3>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
