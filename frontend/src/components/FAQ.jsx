
import React, { useState, useCallback } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const FAQ = () => {
  const faqs = [
    {
      question: 'What requriment for international shipping',
      answer: 'The purpose of life is a philosophical question that seeks to understand the reason for existence and the direction of human life.',
    },
    {
      question: 'What item can,t be shipped internationally?',
      answer: 'The purpose of life is a philosophical question that seeks to understand the reason for existence and the direction of human life.',
    },
    {
      question: 'Can I ship international  without an ICE',
     answer: 'The question of why we exist is a philosophical question that seeks to understand the reason behind our existence.',
    },
    {
      question: 'What carries does for international shipping',
     answer: 'The question of why we exist is a philosophical question that seeks to understand the reason behind our existence.',
    },
    {
      question: 'What is the purpose of life?',
     answer: 'The question of why we exist is a philosophical question that seeks to understand the reason behind our existence.',
    },
  ]; 


  
    

     const [activeFaq, setActiveFaq] = useState(null);

  const handleToggle = useCallback((index) => {
    setActiveFaq(activeFaq === index ? null : index);
  }, [activeFaq]);

  return (
    <div className="min-h-screen bg-gray-100">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-16 text-center text-[#011F61]">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 gap-11   lg:mx-44">
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <div className="bg-white rounded-2xl p-4 shadow-2xl drop-shadow-2xl">
              <details className="mb-3 mt-1">
                <summary className="flex items-center justify-between cursor-pointer" onClick={()=>handleToggle(index)}>
                  <h2 className="text-xl font-semibold text-[#011F61]">{faq.question}</h2>
                  <HiChevronDown className={`text-3xl transform transition-transform duration-300 ease-in-out ${activeFaq === index ? 'rotate-180' : ''}`} />
                </summary>
                {activeFaq === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </details>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
  );
};

export default FAQ;
