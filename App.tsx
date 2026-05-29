import { useState, useEffect } from 'react';
import {
  Sun,
  Zap,
  Shield,
  Leaf,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Building2,
  Thermometer,
  TrendingUp,
  Clock
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
      });

    setIsSubmitting(false);

    if (error) {
      setSubmitError(true);
      return;
    }

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', location: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className={`w-10 h-10 ${scrollY > 50 ? 'text-amber-500' : 'text-white'} transition-colors`} />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <Sun className="w-10 h-10 text-amber-400" />
                </div>
              </div>
              <span className={`text-2xl font-bold transition-colors ${scrollY > 50 ? 'text-slate-900' : 'text-white'}`}>
                GO ENERGY
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className={`font-medium transition-colors hover:text-amber-500 ${scrollY > 50 ? 'text-slate-700' : 'text-white'}`}>Inicio</a>
              <a href="#beneficios" className={`font-medium transition-colors hover:text-amber-500 ${scrollY > 50 ? 'text-slate-700' : 'text-white'}`}>Beneficios</a>
              <a href="#servicios" className={`font-medium transition-colors hover:text-amber-500 ${scrollY > 50 ? 'text-slate-700' : 'text-white'}`}>Servicios</a>
              <a href="#proyectos" className={`font-medium transition-colors hover:text-amber-500 ${scrollY > 50 ? 'text-slate-700' : 'text-white'}`}>Proyectos</a>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contactar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrollY > 50 ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrollY > 50 ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <a href="#inicio" className="block text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#beneficios" className="block text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
              <a href="#servicios" className="block text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#proyectos" className="block text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
              <button
                onClick={() => { setIsMenuOpen(false); scrollToContact(); }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Paneles solares residenciales modernos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-8 animate-fade-in-up">
              <Zap className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Energía Solar Profesional</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Energía que trabaja
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                para vos.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
              Transforma tu hogar o empresa en <span className="text-amber-400 font-medium">Corrientes</span> y <span className="text-amber-400 font-medium">Buenos Aires</span>.
              Genera tu propia energía y reduce tu dependencia de la red eléctrica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Habla con un Especialista</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#proyectos"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Ver Proyectos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-slate-300 text-sm md:text-base font-light">Proyectos Completados</div>
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">15MW</div>
                <div className="text-slate-300 text-sm md:text-base font-light">Capacidad Instalada</div>
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">98%</div>
                <div className="text-slate-300 text-sm md:text-base font-light">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">Por que elegirnos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Beneficios de la Energía Solar
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Invierte en energía limpia y empieza a ahorrar desde el primer día
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Ahorro Inmediato',
                description: 'Reduce hasta un 70% tu factura eléctrica desde el primer mes. Recupera tu inversión en 3-5 años.'
              },
              {
                icon: Leaf,
                title: 'Eco-friendly',
                description: 'Disminuye tu huella de carbono. Un hogar solar evita 4 toneladas de CO2 anuales.'
              },
              {
                icon: Shield,
                title: 'Garantía 25 Años',
                description: 'Paneles de alta calidad con garantía de rendimiento. Soporte técnico permanente.'
              },
              {
                icon: TrendingUp,
                title: 'Valoriza tu Propiedad',
                description: 'Las instalaciones solares aumentan el valor de mercado de tu propiedad hasta un 10%.'
              },
              {
                icon: Thermometer,
                title: 'Independencia Energética',
                description: 'Líbrate de los aumentos tarifarios. Genera tu propia energía de forma autónoma.'
              },
              {
                icon: Building2,
                title: 'Para Hogar y Empresa',
                description: 'Soluciones escalables desde pequeñas viviendas hasta grandes instalaciones industriales.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/356044/pexels-photo-356044.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Solar panel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Soluciones Energéticas Completas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desde el diseño hasta la instalación y mantenimiento
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sistemas Fotovoltaicos',
                description: 'Instalación de paneles solares de última generación con tecnología de alto rendimiento.',
                features: ['Paneles premium', 'Inversores de calidad', 'Monitoreo remoto 24/7'],
                image: 'https://images.pexels.com/photos/4207709/pexels-photo-4207709.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Cálculo y Diseño',
                description: 'Estudios personalizados para maximizar la eficiencia según tu localización y consumo.',
                features: ['Análisis de consumo', 'Estudio de sombras', 'Cálculo de ROI'],
                image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Mantenimiento y Soporte',
                description: 'Servicio preventivo y correctivo para garantizar el rendimiento óptimo de tu sistema.',
                features: ['Limpieza de paneles', 'Revisión técnica', 'Actualizaciones'],
                image: 'https://images.pexels.com/photos/10080536/pexels-photo-10080536.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="proyectos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">Nuestros Proyectos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Casos de Exito
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proyectos realizados en Corrientes y Buenos Aires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://images.pexels.com/photos/4207709/pexels-photo-4207709.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Residencial Martinez',
                location: 'Buenos Aires',
                capacity: '8kW',
                savings: '65%'
              },
              {
                image: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Planta Industrial Corrientes',
                location: 'Corrientes',
                capacity: '150kW',
                savings: '72%'
              },
              {
                image: 'https://images.pexels.com/photos/8853530/pexels-photo-8853530.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Hotel Boutique Palermo',
                location: 'Buenos Aires',
                capacity: '35kW',
                savings: '60%'
              },
              {
                image: 'https://images.pexels.com/photos/11690084/pexels-photo-11690084.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Complejo Residencial Resistencia',
                location: 'Corrientes',
                capacity: '45kW',
                savings: '68%'
              },
              {
                image: 'https://images.pexels.com/photos/14613939/pexels-photo-14613939.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Centro Comercial Belgrano',
                location: 'Buenos Aires',
                capacity: '95kW',
                savings: '70%'
              },
              {
                image: 'https://images.pexels.com/photos/10074451/pexels-photo-10074451.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Escuela Sustentable Goya',
                location: 'Corrientes',
                capacity: '25kW',
                savings: '75%'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 font-semibold text-sm">{project.location}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <span className="text-white/60 text-sm">Capacidad</span>
                        <p className="font-semibold">{project.capacity}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white/60 text-sm">Ahorro</span>
                        <p className="font-semibold text-green-400">{project.savings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Contáctenos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                Hablemos de tu Proyecto Solar
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Te asesoramos sin compromiso. Nuestro equipo de especialistas te ayudará a encontrar la mejor solución.
              </p>

              <div className="space-y-6 mb-10">
                {/* Buenos Aires */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Buenos Aires</h3>
                      <p className="text-slate-400 mb-2">Torres Sarmiento. Rawson 1869, Martínez, San Isidro</p>
                    </div>
                  </div>
                </div>

                {/* Corrientes */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Corrientes</h3>
                      <p className="text-slate-400 mb-2">San Martín esq. España, Corrientes Capital</p>
                    </div>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-center space-x-4 text-slate-300">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <span>3794-527424</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 text-slate-300">
                  <Mail className="w-6 h-6 text-amber-400" />
                  <span>go.energy@go-energysolar.com</span>
                </div>

                {/* Horarios */}
                <div className="flex items-center space-x-4 text-slate-300">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <span>Lunes a Sábados de 8 a 17hs</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/97392/pexels-photo-97392.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Solar team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitar Presupuesto</h3>
              <p className="text-slate-600 mb-8">Completá el formulario y te contactaremos en menos de 24 horas.</p>

              {submitSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Mensaje enviado correctamente</p>
                    <p className="text-green-700 text-sm">Te contactaremos pronto.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Hubo un error al enviar</p>
                    <p className="text-red-700 text-sm">Intentá de nuevo o contactanos por teléfono.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none text-slate-900"
                    placeholder="Juan Perez"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none text-slate-900"
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none text-slate-900"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Ubicacion del Proyecto *
                  </label>
                  <select
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none text-slate-900 bg-white"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="buenos-aires">Buenos Aires</option>
                    <option value="corrientes">Corrientes</option>
                    <option value="otra">Otra ubicación</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none text-slate-900 resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Solicitud</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-slate-500 text-sm">
                  Al enviar, aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="w-10 h-10 text-amber-400" />
                <span className="text-2xl font-bold">GO ENERGY</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Líderes en energía solar en el NOA y CABA. Transformando el futuro con soluciones energéticas sustentables.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
                <li><a href="#beneficios" className="hover:text-amber-400 transition-colors">Beneficios</a></li>
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Servicios</a></li>
                <li><a href="#proyectos" className="hover:text-amber-400 transition-colors">Proyectos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+54 3794-527424</li>
                <li>go.energy@go-energysolar.com</li>
                <li>Lunes a Sábados 8-17hs</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="grid md:grid-cols-3 gap-4 text-center text-slate-500 text-sm">
              <div>
                <p className="font-semibold text-slate-400 mb-1">Buenos Aires</p>
                <p>Torres Sarmiento. Rawson 1869, Martínez, San Isidro</p>
              </div>
              <div>
                <p className="font-semibold text-slate-400 mb-1">Corrientes</p>
                <p>San Martín esq. España, Corrientes Capital</p>
              </div>
              <div>
                <p className="font-semibold text-slate-400 mb-1">Datos Legales</p>
                <p>GO ENERGY - CUIT: 30-71812075-2</p>
              </div>
            </div>
            <div className="text-center mt-6 space-x-6 text-slate-400 text-sm">
              <a href="/privacidad" className="hover:text-amber-400 transition-colors">Política de Privacidad</a>
              <span>|</span>
              <a href="/terminos" className="hover:text-amber-400 transition-colors">Términos y Condiciones</a>
            </div>
            <p className="text-center text-slate-600 mt-4 text-xs">
              &copy; {new Date().getFullYear()} GO ENERGY. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
