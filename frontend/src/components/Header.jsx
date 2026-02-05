import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${mockData.business.whatsapp}?text=Olá! Gostaria de mais informações.`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${mockData.business.phone}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold text-blue-600">
              VetClin
            </h1>
            <p className="text-xs text-gray-600 -mt-1">Cuidando do seu pet</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Galeria
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCallClick}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
            >
              Contato
            </button>
            <div className="pt-3 space-y-2">
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleCallClick}
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={handleWhatsAppClick}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
