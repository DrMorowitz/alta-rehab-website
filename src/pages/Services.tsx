import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Dumbbell, Users, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Activity,
      title: 'Fisioterapia',
      subtitle: 'Recuperación y Rehabilitación',
      description: 'Tratamientos especializados para lesiones musculoesqueléticas, post-quirúrgicas y neurológicas. Utilizamos técnicas avanzadas para acelerar tu proceso de recuperación.',
      image: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      slug: 'fisioterapia',
      highlights: ['Terapia manual', 'Electroterapia', 'Ejercicios terapéuticos', 'Rehabilitación post-quirúrgica']
    },
    {
      icon: Heart,
      title: 'Salud Femenina',
      subtitle: 'Cuidado Integral de la Mujer',
      description: 'Servicios especializados en fisioterapia pélvica, pre y post natal, y tratamiento de disfunciones específicas de la mujer en todas las etapas de la vida.',
      image: 'https://images.pexels.com/photos/4506160/pexels-photo-4506160.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      slug: 'salud-femenina',
      highlights: ['Fisioterapia pélvica', 'Preparación al parto', 'Recuperación post-parto', 'Tratamiento de incontinencia']
    },
    {
      icon: Dumbbell,
      title: 'Acondicionamiento Físico',
      subtitle: 'Entrenamiento Personalizado',
      description: 'Programas de ejercicio diseñados específicamente para mejorar tu condición física, prevenir lesiones y optimizar tu rendimiento deportivo.',
      image: 'https://images.pexels.com/photos/4506141/pexels-photo-4506141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      slug: 'acondicionamiento-fisico',
      highlights: ['Evaluación física completa', 'Programas personalizados', 'Prevención de lesiones', 'Mejora del rendimiento']
    },
    {
      icon: Users,
      title: 'Pilates',
      subtitle: 'Fortalecimiento y Flexibilidad',
      description: 'Clases de Pilates terapéutico y tradicional para mejorar la postura, fortalecer el core, aumentar la flexibilidad y lograr un bienestar integral.',
      image: 'https://images.pexels.com/photos/4506142/pexels-photo-4506142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      slug: 'pilates',
      highlights: ['Pilates clínico', 'Clases grupales', 'Sesiones individuales', 'Corrección postural']
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-burgundy/90 to-burgundy/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4506111/pexels-photo-4506111.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            NUESTROS SERVICIOS
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Tratamientos especializados para tu bienestar y recuperación integral
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-light-gray rounded-lg overflow-hidden card-hover shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-burgundy">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-burgundy mb-3">Incluye:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/servicios/${service.slug}`}
                    className="btn-outline inline-flex items-center space-x-2"
                  >
                    <span>CONOCE MÁS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-burgundy mb-6">
            ¿NO ESTÁS SEGURO QUÉ SERVICIO NECESITAS?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas te ayudarán a determinar el tratamiento más adecuado para tu condición específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+50769469101"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>CONSULTA GRATUITA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/contacto"
              className="btn-outline inline-flex items-center justify-center space-x-2"
            >
              <span>MÁS INFORMACIÓN</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;