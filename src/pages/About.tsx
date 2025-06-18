import React from 'react';
import { Award, Heart, Lightbulb, Shield, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'EXCELENCIA',
      description: 'Nos comprometemos con los más altos estándares de calidad en cada tratamiento.'
    },
    {
      icon: Heart,
      title: 'COMPROMISO',
      description: 'Dedicación total con la recuperación y bienestar de nuestros pacientes.'
    },
    {
      icon: Lightbulb,
      title: 'INNOVACIÓN',
      description: 'Incorporamos las técnicas más avanzadas y efectivas en fisioterapia.'
    },
    {
      icon: Shield,
      title: 'CUIDADO INTEGRAL',
      description: 'Atención personalizada que considera todos los aspectos de tu salud.'
    }
  ];

  const team = [
    {
      name: 'Dra. María González',
      title: 'Fisioterapeuta Principal',
      credentials: 'Lic. en Fisioterapia, MSc. Rehabilitación',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'
    },
    {
      name: 'Dr. Carlos Rodríguez',
      title: 'Especialista en Medicina Deportiva',
      credentials: 'MD, Especialista en Medicina del Deporte',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'
    },
    {
      name: 'Lic. Ana Martínez',
      title: 'Especialista en Salud Femenina',
      credentials: 'Lic. en Fisioterapia, Cert. Salud de la Mujer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'
    }
  ];

  const stats = [
    { number: '500+', label: 'Pacientes Atendidos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '95%', label: 'Satisfacción del Cliente' },
    { number: '4', label: 'Especialidades' }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-burgundy/90 to-burgundy/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4506115/pexels-photo-4506115.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            CONÓCENOS
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Conoce a nuestro equipo de profesionales comprometidos con tu bienestar
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-burgundy mb-6">
              NUESTRA MISIÓN
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En Alta Rehab, creemos que cada paciente merece atención personalizada y de calidad. 
              Nuestro enfoque integral combina técnicas avanzadas de fisioterapia con un trato humano 
              y profesional, garantizando una experiencia de recuperación efectiva y confortable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos especializamos en crear planes de tratamiento individualizados que no solo abordan 
              los síntomas, sino que van al origen del problema para lograr una recuperación completa 
              y duradera.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-light-gray rounded-lg p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-medium text-burgundy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-warm-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-burgundy mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-burgundy mb-4">
              NUESTRO EQUIPO
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Profesionales altamente calificados dedicados a tu recuperación y bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-light-gray rounded-lg overflow-hidden card-hover"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-burgundy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-burgundy text-warm-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              ¿POR QUÉ ELEGIR ALTA REHAB?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-warm-neutral flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Atención Personalizada</h4>
                    <p className="text-warm-neutral/80">
                      Cada tratamiento se adapta específicamente a tus necesidades y objetivos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-warm-neutral flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Tecnología Avanzada</h4>
                    <p className="text-warm-neutral/80">
                      Utilizamos equipos de última generación para tratamientos más efectivos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-warm-neutral flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Ubicación Privilegiada</h4>
                    <p className="text-warm-neutral/80">
                      En el corazón de la ciudad, fácil acceso y estacionamiento disponible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-warm-neutral flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Horarios Flexibles</h4>
                    <p className="text-warm-neutral/80">
                      Amplios horarios de atención para adaptarnos a tu agenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;