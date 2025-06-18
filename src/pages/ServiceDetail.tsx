import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Activity, Heart, Dumbbell, Users, CheckCircle, ArrowRight, Phone, ChevronRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const servicesData = {
    'fisioterapia': {
      icon: Activity,
      title: 'Fisioterapia',
      subtitle: 'Recuperación y Rehabilitación Integral',
      image: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: 'La fisioterapia es una disciplina de las ciencias de la salud que ofrece una alternativa terapéutica no farmacológica para diagnosticar, prevenir y tratar síntomas de múltiples dolencias, tanto agudas como crónicas, por medio del ejercicio terapéutico, calor, frío, luz, agua, técnicas manuales entre ellas el masaje y la electricidad.',
      indications: [
        'Lesiones deportivas o traumáticas',
        'Dolor muscular o articular',
        'Limitación de movimiento',
        'Recuperación post-quirúrgica',
        'Problemas posturales',
        'Dolor de espalda crónico',
        'Artritis o artrosis',
        'Contracturas musculares'
      ],
      process: [
        {
          step: 1,
          title: 'Evaluación Inicial',
          description: 'Realizamos una evaluación completa de tu condición física y historial médico.'
        },
        {
          step: 2,
          title: 'Diagnóstico Funcional',
          description: 'Identificamos las causas del problema y establecemos objetivos de tratamiento.'
        },
        {
          step: 3,
          title: 'Plan de Tratamiento',
          description: 'Diseñamos un programa personalizado con técnicas específicas para tu caso.'
        },
        {
          step: 4,
          title: 'Seguimiento y Progreso',
          description: 'Monitoreamos tu evolución y ajustamos el tratamiento según sea necesario.'
        }
      ]
    },
    'salud-femenina': {
      icon: Heart,
      title: 'Salud Femenina',
      subtitle: 'Cuidado Integral de la Mujer',
      image: 'https://images.pexels.com/photos/4506160/pexels-photo-4506160.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: 'La fisioterapia en salud femenina se enfoca en el tratamiento de disfunciones específicas que afectan a las mujeres a lo largo de su vida. Nuestro enfoque integral incluye el cuidado del suelo pélvico, preparación y recuperación del parto, y tratamiento de condiciones ginecológicas y urológicas.',
      indications: [
        'Incontinencia urinaria o fecal',
        'Dolor pélvico crónico',
        'Prolapsos de órganos pélvicos',
        'Preparación al parto',
        'Recuperación post-parto',
        'Dolor durante las relaciones íntimas',
        'Disfunciones del suelo pélvico',
        'Cicatrices de cesárea o episiotomía'
      ],
      process: [
        {
          step: 1,
          title: 'Consulta Confidencial',
          description: 'Evaluación privada y detallada de tu condición en un ambiente cómodo y seguro.'
        },
        {
          step: 2,
          title: 'Evaluación Especializada',
          description: 'Examen funcional del suelo pélvico y estructuras relacionadas.'
        },
        {
          step: 3,
          title: 'Tratamiento Personalizado',
          description: 'Técnicas específicas incluyendo ejercicios, terapia manual y educación.'
        },
        {
          step: 4,
          title: 'Seguimiento Continuo',
          description: 'Monitoreo del progreso y ajustes al programa de tratamiento.'
        }
      ]
    },
    'acondicionamiento-fisico': {
      icon: Dumbbell,
      title: 'Acondicionamiento Físico',
      subtitle: 'Entrenamiento Personalizado y Prevención',
      image: 'https://images.pexels.com/photos/4506141/pexels-photo-4506141.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: 'Nuestro programa de acondicionamiento físico está diseñado para mejorar tu condición física general, prevenir lesiones y optimizar tu rendimiento en las actividades diarias y deportivas. Combinamos evaluaciones científicas con programas de ejercicio personalizados.',
      indications: [
        'Sedentarismo y falta de actividad física',
        'Preparación para actividades deportivas',
        'Prevención de lesiones',
        'Mejora del rendimiento atlético',
        'Fortalecimiento muscular',
        'Mejora de la resistencia cardiovascular',
        'Corrección de desequilibrios musculares',
        'Retorno seguro al deporte tras lesión'
      ],
      process: [
        {
          step: 1,
          title: 'Evaluación Física Completa',
          description: 'Análisis de composición corporal, fuerza, flexibilidad y capacidad cardiovascular.'
        },
        {
          step: 2,
          title: 'Establecimiento de Objetivos',
          description: 'Definimos metas realistas y específicas según tus necesidades y deseos.'
        },
        {
          step: 3,
          title: 'Programa de Entrenamiento',
          description: 'Diseño de rutinas progresivas y personalizadas con supervisión profesional.'
        },
        {
          step: 4,
          title: 'Evaluación del Progreso',
          description: 'Seguimiento regular y ajustes al programa para optimizar resultados.'
        }
      ]
    },
    'pilates': {
      icon: Users,
      title: 'Pilates',
      subtitle: 'Fortalecimiento, Flexibilidad y Bienestar',
      image: 'https://images.pexels.com/photos/4506142/pexels-photo-4506142.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: 'El método Pilates es un sistema de entrenamiento físico y mental que combina fuerza, flexibilidad, equilibrio y conciencia corporal. Nuestras clases están adaptadas tanto para principiantes como para practicantes avanzados, con enfoque terapéutico cuando es necesario.',
      indications: [
        'Problemas posturales',
        'Dolor de espalda',
        'Debilidad del core',
        'Estrés y tensión muscular',
        'Falta de flexibilidad',
        'Rehabilitación de lesiones',
        'Mejora del equilibrio y coordinación',
        'Búsqueda de bienestar integral'
      ],
      process: [
        {
          step: 1,
          title: 'Evaluación Postural',
          description: 'Análisis de tu postura y patrones de movimiento para personalizar las clases.'
        },
        {
          step: 2,
          title: 'Introducción al Método',
          description: 'Enseñanza de principios básicos y técnicas de respiración del Pilates.'
        },
        {
          step: 3,
          title: 'Práctica Progresiva',
          description: 'Ejercicios graduales adaptados a tu nivel y objetivos específicos.'
        },
        {
          step: 4,
          title: 'Integración y Avance',
          description: 'Incorporación de movimientos más complejos y seguimiento del progreso.'
        }
      ]
    }
  };

  const service = servicesData[serviceSlug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="pt-20 py-20 text-center">
        <h1 className="text-2xl font-bold text-burgundy mb-4">Servicio no encontrado</h1>
        <Link to="/servicios" className="btn-primary">
          Ver todos los servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-light-gray py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-burgundy">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/servicios" className="text-gray-600 hover:text-burgundy">Servicios</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-burgundy font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Service Header */}
      <section className="relative py-20 bg-gradient-to-r from-burgundy/90 to-burgundy/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-4 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                  {service.title}
                </h1>
                <p className="text-xl font-light">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-burgundy mb-6">
              ¿Qué es {service.title.toLowerCase()}?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {service.description}
            </p>

            {/* Indications */}
            <div className="bg-light-gray rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-medium text-burgundy mb-6">
                Esto es para ti si tienes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.indications.map((indication, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-burgundy flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{indication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium text-burgundy mb-8 text-center">
                Nuestro Proceso de Tratamiento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-burgundy text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-medium text-burgundy mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-warm-neutral rounded-lg p-8 text-center">
              <h3 className="text-2xl font-extrabold text-burgundy mb-4">
                Agenda tu Evaluación
              </h3>
              <p className="text-gray-700 mb-6">
                Da el primer paso hacia tu recuperación. Nuestros especialistas están listos para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+50769469101"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>LLAMAR AHORA</span>
                </a>
                <a 
                  href="https://wa.me/50769469101?text=Hola,%20me%20gustaría%20agendar%20una%20evaluación%20para%20el%20servicio%20de%20fisioterapia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center space-x-2"
                >
                  <span>WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;