import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Dumbbell, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Component as MusicReactiveHero } from '@/components/ui/music-reactive-hero-section';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { TimelineDemo } from "@/components/ui/timeline-demo";

const Home: React.FC = () => {
  const services = [
    {
      icon: Activity,
      title: 'Fisioterapia',
      description: 'Tratamientos especializados para tu recuperación y rehabilitación integral.',
      slug: 'fisioterapia'
    },
    {
      icon: Heart,
      title: 'Salud Femenina',
      description: 'Cuidado integral de la mujer en todas las etapas de la vida.',
      slug: 'salud-femenina'
    },
    {
      icon: Dumbbell,
      title: 'Acondicionamiento Físico',
      description: 'Entrenamiento personalizado para optimizar tu rendimiento físico.',
      slug: 'acondicionamiento-fisico'
    },
    {
      icon: Users,
      title: 'Pilates',
      description: 'Fortalecimiento, flexibilidad y bienestar integral del cuerpo.',
      slug: 'pilates'
    }
  ];

  const benefits = [
    'Profesionales altamente calificados',
    'Equipos de última tecnología',
    'Atención personalizada',
    'Ambiente profesional y acogedor'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <MusicReactiveHero />

      {/* Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-burgundy mb-4">
              NUESTROS SERVICIOS
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para tu bienestar y recuperación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 text-center card-hover shadow-md"
              >
                <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-burgundy" />
                </div>
                <h3 className="text-xl font-medium text-burgundy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/servicios/${service.slug}`}
                  className="btn-outline text-sm inline-flex items-center space-x-2"
                >
                  <span>VER MÁS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-warm-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-burgundy mb-6">
                CONÓCENOS
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En Alta Rehab, nos dedicamos a brindar atención fisioterapéutica de la más alta calidad 
                en un ambiente profesional y acogedor. Nuestro equipo de especialistas está comprometido 
                con tu recuperación y bienestar integral.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-burgundy flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/conocenos"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>CONOCE NUESTRO EQUIPO</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Equipo profesional de Alta Rehab"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineDemo />

      {/* Testimonial Section */}
      <section className="bg-white">
        <AnimatedTestimonials
          testimonials={[
            {
              quote:
                "La atención personalizada y el profesionalismo del equipo de Alta Rehab me ayudaron a recuperar mi movilidad rápidamente. ¡Altamente recomendados!",
              name: "María González",
              designation: "Paciente de fisioterapia",
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=compress&w=800&q=80",
            },
            {
              quote:
                "Gracias a sus tratamientos innovadores, pude volver a mis actividades diarias sin dolor. El ambiente es muy acogedor y seguro.",
              name: "Carlos Ramírez",
              designation: "Paciente de rehabilitación",
              src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=compress&w=800&q=80",
            },
            {
              quote:
                "El equipo de Alta Rehab se preocupa genuinamente por tu bienestar. Me sentí acompañada en todo mi proceso de recuperación.",
              name: "Ana López",
              designation: "Paciente de salud femenina",
              src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=compress&w=800&q=80",
            },
            {
              quote:
                "Instalaciones modernas y atención de primera. Recomiendo Alta Rehab a todos los que buscan fisioterapia profesional en Panamá.",
              name: "Javier Torres",
              designation: "Paciente de pilates",
              src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&w=800&q=80",
            },
            {
              quote:
                "Recibí un trato cálido y humano desde el primer día. Los resultados superaron mis expectativas.",
              name: "Lucía Fernández",
              designation: "Paciente de acondicionamiento físico",
              src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=compress&w=800&q=80",
            },
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange text-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            ¿LISTO PARA COMENZAR TU RECUPERACIÓN?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Agenda tu cita hoy mismo y da el primer paso hacia tu bienestar integral
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+50769469101"
              className="bg-white text-orange font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>LLAMAR AHORA: +507 6946-9101</span>
            </a>
            <a 
              href="https://wa.me/50769469101?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Alta%20Rehab."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-orange transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;