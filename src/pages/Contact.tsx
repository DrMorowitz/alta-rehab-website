import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-burgundy/90 to-burgundy/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4506169/pexels-photo-4506169.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            CONTACTO
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y comienza tu camino hacia el bienestar
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-burgundy mb-8">
                  Información de Contacto
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-burgundy mb-2">Ubicación</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Centro Comercial Balboa Boutiques<br />
                    Av. Vasco Núñez de Balboa<br />
                    Ciudad de Panamá
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-burgundy mb-2">Teléfono</h3>
                  <a 
                    href="tel:+50769469101" 
                    className="text-gray-700 hover:text-burgundy transition-colors duration-300 text-lg"
                  >
                    +507 6946-9101
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-burgundy mb-2">Email</h3>
                  <a 
                    href="mailto:info@altarehab.net" 
                    className="text-gray-700 hover:text-burgundy transition-colors duration-300"
                  >
                    info@altarehab.net
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-burgundy mb-2">Horarios</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><strong>Lunes - Viernes:</strong> 6:00 - 19:00</p>
                    <p><strong>Sábados:</strong> 7:00 - 12:00</p>
                    <p><strong>Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-burgundy mb-2">Síguenos</h3>
                  <a 
                    href="https://instagram.com/altarehab.panama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-burgundy transition-colors duration-300"
                  >
                    @altarehab.panama
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-whatsapp text-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-medium mb-3">¡Contáctanos por WhatsApp!</h3>
                <p className="mb-4">La forma más rápida de agendar tu cita</p>
                <a 
                  href="https://wa.me/50769469101?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Alta%20Rehab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-whatsapp font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Enviar Mensaje
                </a>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-light-gray rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-burgundy" />
                  <p className="font-medium">Mapa de Ubicación</p>
                  <p className="text-sm">Centro Comercial Balboa Boutiques</p>
                  <p className="text-sm">Av. Vasco Núñez de Balboa</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-2xl font-medium text-burgundy mb-6">
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-300"
                      placeholder="+507 0000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>ENVIAR MENSAJE</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-burgundy text-warm-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg mb-6">
            No esperes más para cuidar tu salud y bienestar
          </p>
          <a 
            href="tel:+50769469101"
            className="bg-warm-neutral text-burgundy font-medium px-8 py-4 rounded-lg hover:bg-white transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>AGENDA TU CITA AHORA</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;