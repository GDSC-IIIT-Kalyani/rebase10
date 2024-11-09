// src/Faqs.js
import React, { useState } from "react";

const faqs = [
  {
    question: "How many team members do I need?",
    answer:
      "You need a minimum of 2 and a maximum of 5 team members to participate.",
  },
  {
    question: "How do I register?",
    answer:
      "Register on our official website by filling out the registration form.",
  },
  {
    question: "What are the prerequisites to participate in this hackathon?",
    answer: "Basic programming knowledge and a team spirit are encouraged!",
  },
  {
    question: "Will the hackathon be in-person or online?",
    answer:
      "The hackathon will be conducted in a hybrid mode, allowing both online and offline participation.",
  },
  {
    question: "What is the venue for this hackathon?",
    answer: "The offline venue will be announced soon. Stay tuned!",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white relative overflow-x-hidden  px-[10%] flex-wrap gap-[2vh] min-h-screen top-20">
        <h1 className="text-white text-[calc(2.5vw+20px)] font-heading font-bold px-[2.5%] drop-shadow-brand">
          FAQs
        </h1>
      <div className="flex items-center justify-center relative w-full sm:w-[60%]">
        <img src="" alt="" />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-blue-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center">
                <span className="mr-2 text-brand text-xl font-semibold">
                  {index + 1}
                </span>
                <p className=" text-brand text-[calc(1vw+10px)] font-primary font-bold px-[2.5%]">{faq.question}</p>
              </div>
              <div
                className={`transition-[max-height] rounded-xl  mx-16 w-1/2 duration-500 bg-brand ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className=" text-brand text-white text-[calc(1vw+10px)] font-primary font-thin px-[2.5%]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
