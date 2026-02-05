import React from 'react';
import { Award, Users, Shield, Clock, MapPin, Sparkles } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Award: Award,
  Users: Users,
  Shield: Shield,
  Clock: Clock,
  MapPin: MapPin,
  Sparkles: Sparkles
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a VetClin?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excelência em cuidados veterinários com mais de {mockData.business.reviewCount} clientes satisfeitos
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.whyChooseUs.map((reason) => {
            const IconComponent = iconMap[reason.icon];
            return (
              <div 
                key={reason.id}
                className="group relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity" />
                
                <div className="relative">
                  <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">{mockData.business.rating}</div>
              <div className="text-blue-100 text-lg">Avaliação no Google</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">{mockData.business.reviewCount}+</div>
              <div className="text-blue-100 text-lg">Clientes Satisfeitos</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-blue-100 text-lg">Serviços Completos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
