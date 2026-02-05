import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { mockData } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    service: '',
    phone: '',
    message: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // In a real app, this would send data to backend
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Clear form
    setFormData({
      name: '',
      petName: '',
      service: '',
      phone: '',
      message: ''
    });
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.service) {
      toast.error('Por favor, preencha seu nome e o serviço desejado.');
      return;
    }

    const message = `Olá! Meu nome é ${formData.name}.${formData.petName ? ` Meu pet se chama ${formData.petName}.` : ''} Gostaria de agendar: ${formData.service}.${formData.message ? ` Mensagem: ${formData.message}` : ''}`;
    window.open(`https://wa.me/${mockData.business.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende uma consulta ou tire suas dúvidas. Estamos prontos para cuidar do seu pet!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Agende seu Atendimento</CardTitle>
                <CardDescription className="text-base">
                  Preencha o formulário e entraremos em contato rapidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu Nome *
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Pet
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite o nome do seu pet"
                      value={formData.petName}
                      onChange={(e) => handleChange('petName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço Desejado *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta Veterinária</SelectItem>
                        <SelectItem value="vacina">Vacinação</SelectItem>
                        <SelectItem value="cirurgia">Cirurgia</SelectItem>
                        <SelectItem value="hotel">Hotel para Pets</SelectItem>
                        <SelectItem value="creche">Creche (Daycare)</SelectItem>
                        <SelectItem value="petshop">Pet Shop</SelectItem>
                        <SelectItem value="emergencia">Emergência</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <Input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      placeholder="Conte-nos mais sobre o que você precisa..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Agendar via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                    <a 
                      href={`tel:${mockData.business.phone}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {mockData.business.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {mockData.business.address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mockData.business.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center mt-2"
                    >
                      Ver no mapa
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horário</h3>
                    <p className="text-gray-600">{mockData.business.hours}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="border-2 border-gray-200 overflow-hidden">
              <div className="w-full h-80">
                <iframe
                  src={mockData.business.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização VetClin"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
