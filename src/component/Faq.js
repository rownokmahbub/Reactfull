import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { faqData } from "./data";
const Faq = () => {
  const [faq, setFaq] = useState(faqData);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p>our faqs </p>
      <div className="grid grid-cols-1  gap-5 mx-auto container">
        {faq.map((faq, i) => {
          return (
            <div className="bg-slate-100 px-4 py-4 rounded-lg" key={i}>
              <div className="flex items-center justify-between">
                <p className="text-2xl">{faq.title}</p>
                <button onClick={()=>{setToggle(!toggle)}}>
                {toggle? "-" : "+"}
                </button>
             
               
              </div>
              {toggle && <p>{faq.des}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
