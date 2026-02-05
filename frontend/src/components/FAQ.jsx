import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { mockData } from '../data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {mockData.faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="bg-white rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-colors px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está pronta para ajudar você e seu pet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${mockData.business.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ligar: {mockData.business.phone}
            </a>
            <a
              href={`https://wa.me/${mockData.business.whatsapp}?text=Olá! Tenho uma dúvida.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
