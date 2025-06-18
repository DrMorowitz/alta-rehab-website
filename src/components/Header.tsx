import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const services = [
    { name: 'Fisioterapia', slug: 'fisioterapia' },
    { name: 'Salud Femenina', slug: 'salud-femenina' },
    { name: 'Acondicionamiento Físico', slug: 'acondicionamiento-fisico' },
    { name: 'Pilates', slug: 'pilates' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-light-gray shadow-lg' : 'bg-light-gray'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-burgundy rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-xl">AR</span>
            </div>
            <span className="text-burgundy font-extrabold text-xl hidden sm:block">
              ALTA REHAB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 hover:text-burgundy ${
                location.pathname === '/' ? 'text-burgundy' : 'text-gray-700'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/conocenos" 
              className={`font-medium transition-colors duration-300 hover:text-burgundy ${
                location.pathname === '/conocenos' ? 'text-burgundy' : 'text-gray-700'
              }`}
            >
              Conócenos
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`font-medium transition-colors duration-300 hover:text-burgundy flex items-center space-x-1 ${
                  location.pathname.startsWith('/servicios') ? 'text-burgundy' : 'text-gray-700'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  to="/servicios" 
                  className="block px-4 py-3 text-gray-700 hover:text-burgundy hover:bg-warm-neutral transition-colors duration-300 rounded-t-lg"
                >
                  Ver todos los servicios
                </Link>
                <hr className="border-gray-200" />
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block px-4 py-3 text-gray-700 hover:text-burgundy hover:bg-warm-neutral transition-colors duration-300 last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contacto" 
              className={`font-medium transition-colors duration-300 hover:text-burgundy ${
                location.pathname === '/contacto' ? 'text-burgundy' : 'text-gray-700'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <a 
            href="tel:+50769469101" 
            className="hidden lg:block bg-burgundy text-white font-medium px-6 py-3 rounded-lg hover:bg-burgundy/90 transition-all duration-300 transform hover:scale-105"
          >
            PIDE CITA
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-burgundy"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-4 border-t border-gray-200">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-burgundy transition-colors duration-300"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/conocenos" 
              className="block py-2 text-gray-700 hover:text-burgundy transition-colors duration-300"
              onClick={closeMenu}
            >
              Conócenos
            </Link>
            
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-burgundy transition-colors duration-300"
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ${
                isServicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <Link 
                  to="/servicios" 
                  className="block py-2 text-sm text-gray-600 hover:text-burgundy transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Ver todos los servicios
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block py-2 text-sm text-gray-600 hover:text-burgundy transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contacto" 
              className="block py-2 text-gray-700 hover:text-burgundy transition-colors duration-300"
              onClick={closeMenu}
            >
              Contacto
            </Link>
            
            <a 
              href="tel:+50769469101" 
              className="block w-full bg-burgundy text-white font-medium px-6 py-3 rounded-lg text-center hover:bg-burgundy/90 transition-all duration-300 mt-4"
              onClick={closeMenu}
            >
              PIDE CITA
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;