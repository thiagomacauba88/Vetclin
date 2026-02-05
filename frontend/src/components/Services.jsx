import React from 'react';
import { Stethoscope, ShoppingBag, Home, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const iconMap = {
  Stethoscope: Stethoscope,
  ShoppingBag: ShoppingBag,
  Home: Home,
  Heart: Heart
};

const Services = () => {
  const handleServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que seu pet precisa em um só lugar. Cuidado completo e profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                    onClick={handleServiceClick}
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
