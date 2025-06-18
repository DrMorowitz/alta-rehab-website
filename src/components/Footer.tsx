import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy text-warm-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Ubicación</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm leading-relaxed">
                  Centro Comercial Balboa Boutiques<br />
                  Av. Vasco Núñez de Balboa<br />
                  Ciudad de Panamá
                </p>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Horarios</h3>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p><strong>Lunes - Viernes:</strong> 6:00 - 19:00</p>
                <p><strong>Sábados:</strong> 7:00 - 12:00</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a 
                  href="tel:+50769469101" 
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +507 6946-9101
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:info@altarehab.net" 
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  info@altarehab.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <a 
                  href="https://instagram.com/altarehab.panama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  @altarehab.panama
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-neutral/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-warm-neutral rounded-lg flex items-center justify-center">
                <span className="text-burgundy font-extrabold text-sm">AR</span>
              </div>
              <span className="font-extrabold text-lg">ALTA REHAB</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <span>© 2024 Alta Rehab. Todos los derechos reservados.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Política de Privacidad
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Política de Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;