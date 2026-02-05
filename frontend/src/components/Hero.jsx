import React from 'react';
import { ArrowRight, MapPin, Star, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${mockData.business.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`, '_blank');
  };

  const handleDirectionsClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mockData.business.address)}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758691463354-055e4d72e5fc')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
            <span className="text-white font-semibold">{mockData.business.rating}</span>
            <span className="text-white/80 ml-2">• {mockData.business.reviewCount} avaliações</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cuidado Premium para o Seu Pet
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Clínica veterinária completa com pet shop, hotel e creche. 
            Seu pet merece o melhor cuidado profissional em Uberlândia.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {['Atendimento 24h', 'Equipe Qualificada', 'Estrutura Moderna', 'Hotel e Creche'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDirectionsClick}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 shadow-xl backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Como Chegar
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-white">
            <a 
              href={`tel:${mockData.business.phone}`}
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">{mockData.business.phone}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Lídice, Uberlândia - MG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
