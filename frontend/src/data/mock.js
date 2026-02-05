// Mock data for VetClin website

export const mockData = {
  business: {
    name: "PETS Veterinary (VetClin)",
    tagline: "Vetclin - Pet Shop Veterinary Clinic and small hotel",
    hotelName: "VetClin Hotel & Creche",
    rating: 4.9,
    reviewCount: 359,
    phone: "(34) 3237-6685",
    whatsapp: "5534323766685", // Format for WhatsApp link
    website: "vetclin.org",
    address: "R. Augusto César, 641 - Lídice, Uberlândia - MG, 38400-162",
    plusCode: "3PCC+29 Lídice, Uberlândia - State of Minas Gerais",
    hours: "Fecha às 19:00",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.9!2d-48.2796!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzA3LjAiUyA0OMKwMTYnNDYuNiJX!5e0!3m2!1sen!2sbr!4v1234567890"
  },
  
  reviews: [
    {
      id: 1,
      author: "Cliente Satisfeito",
      rating: 5,
      text: "Super atenciosos, profissionais e cuidadosos. Indicamos todos os serviços oferecidos pela Vetclin.",
      icon: "🐶",
      date: "2024"
    },
    {
      id: 2,
      author: "Maria Silva",
      rating: 5,
      text: "São MARAVILHOSOS! O Café e o Cappuccino adoram passar o dia na creche.",
      icon: "🐱",
      date: "2024"
    },
    {
      id: 3,
      author: "João Santos",
      rating: 5,
      text: "Top! Melhor clínica veterinária de Uberlândia.",
      icon: "🐕",
      date: "2024"
    }
  ],

  services: [
    {
      id: 1,
      title: "Clínica Veterinária",
      description: "Atendimento médico completo com profissionais qualificados para cuidar da saúde do seu pet.",
      icon: "Stethoscope",
      image: "https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHx2ZXRlcmluYXJ5JTIwbWVkaWNhbCUyMGNhcmV8ZW58MHx8fHwxNzcwMjkzMDE0fDA&ixlib=rb-4.1.0&q=85",
      features: [
        "Consultas e exames",
        "Cirurgias",
        "Vacinação",
        "Emergências 24h"
      ]
    },
    {
      id: 2,
      title: "Pet Shop",
      description: "Produtos de qualidade, rações premium e acessórios para o bem-estar do seu pet.",
      icon: "ShoppingBag",
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxwZXQlMjBwcm9kdWN0c3xlbnwwfHx8fDE3NzAyOTMwMjR8MA&ixlib=rb-4.1.0&q=85",
      features: [
        "Rações premium",
        "Brinquedos e acessórios",
        "Produtos de higiene",
        "Medicamentos"
      ]
    },
    {
      id: 3,
      title: "Hotel para Pets",
      description: "Hospedagem confortável e segura para seu pet enquanto você viaja. Ambiente acolhedor e monitorado.",
      icon: "Home",
      image: "https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxwZXQlMjBob3RlbHxlbnwwfHx8fDE3NzAyOTMwMjl8MA&ixlib=rb-4.1.0&q=85",
      features: [
        "Acomodações individuais",
        "Ambiente climatizado",
        "Monitoramento 24h",
        "Alimentação personalizada"
      ]
    },
    {
      id: 4,
      title: "Creche (Daycare)",
      description: "Seu pet se diverte e socializa em um ambiente seguro com supervisão profissional durante o dia.",
      icon: "Heart",
      image: "https://images.pexels.com/photos/27175407/pexels-photo-27175407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      features: [
        "Socialização",
        "Atividades recreativas",
        "Supervisão constante",
        "Relatório diário"
      ]
    }
  ],

  whyChooseUs: [
    {
      id: 1,
      icon: "Award",
      title: "4.9 Estrelas",
      description: "Avaliação de 359 clientes satisfeitos no Google"
    },
    {
      id: 2,
      icon: "Users",
      title: "Equipe Qualificada",
      description: "Veterinários experientes e apaixonados por animais"
    },
    {
      id: 3,
      icon: "Shield",
      title: "Estrutura Completa",
      description: "Equipamentos modernos e ambiente seguro"
    },
    {
      id: 4,
      icon: "Clock",
      title: "Atendimento Premium",
      description: "Cuidado atencioso e personalizado para cada pet"
    },
    {
      id: 5,
      icon: "MapPin",
      title: "Localização Conveniente",
      description: "Fácil acesso no bairro Lídice, Uberlândia"
    },
    {
      id: 6,
      icon: "Sparkles",
      title: "Serviços Completos",
      description: "Clínica, pet shop, hotel e creche no mesmo lugar"
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3NzAyOTMwNjJ8MA&ixlib=rb-4.1.0&q=85",
      alt: "Cachorro feliz e saudável"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNhdHxlbnwwfHx8fDE3NzAyOTMwNjd8MA&ixlib=rb-4.1.0&q=85",
      alt: "Gato feliz e bem cuidado"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3NzAyOTMwNjJ8MA&ixlib=rb-4.1.0&q=85",
      alt: "Pet brincando"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxoYXBweSUyMGNhdHxlbnwwfHx8fDE3NzAyOTMwNjd8MA&ixlib=rb-4.1.0&q=85",
      alt: "Gatinho adorável"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1679067652135-324b9535d288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3NzAyOTMwNjJ8MA&ixlib=rb-4.1.0&q=85",
      alt: "Cachorro correndo feliz"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/31440941/pexels-photo-31440941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Gato fofo e saudável"
    }
  ],

  faqs: [
    {
      id: 1,
      question: "Quais são os horários de atendimento?",
      answer: "Funcionamos de segunda a sábado, fechando às 19:00. Para emergências, entre em contato pelo telefone."
    },
    {
      id: 2,
      question: "É necessário agendar consulta?",
      answer: "Sim, recomendamos agendar para garantir atendimento no horário desejado. Você pode agendar pelo telefone ou WhatsApp."
    },
    {
      id: 3,
      question: "Como funciona o hotel para pets?",
      answer: "Seu pet fica em acomodações individuais, climatizadas, com alimentação personalizada e monitoramento 24h. Aceitamos cães e gatos."
    },
    {
      id: 4,
      question: "A creche aceita pets de todos os portes?",
      answer: "Sim! Aceitamos cães de todos os portes. Fazemos uma avaliação comportamental antes para garantir a segurança de todos."
    },
    {
      id: 5,
      question: "Vocês trabalham com convênios?",
      answer: "Entre em contato para saber sobre convênios e formas de pagamento disponíveis."
    },
    {
      id: 6,
      question: "Posso visitar as instalações antes?",
      answer: "Claro! Será um prazer recebê-lo. Entre em contato para agendar uma visita."
    }
  ]
};
