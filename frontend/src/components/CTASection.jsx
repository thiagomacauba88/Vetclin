import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${mockData.business.whatsapp}?text=Olá! Gostaria de agendar um atendimento.`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Cuidar do Seu Pet?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Agende agora sua consulta e garanta o melhor atendimento veterinário para seu melhor amigo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar via WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-10 py-7 shadow-2xl backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            Preencher Formulário
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-lg">Atendimento Rápido</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-lg">Equipe Qualificada</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-lg">{mockData.business.rating} ⭐ no Google</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default CTASection;
