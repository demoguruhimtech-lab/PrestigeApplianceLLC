import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { CallButton } from './CallButton';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Appliance Repair Services' },
    { to: '/service-areas', label: 'Service Areas' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="container-pro">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                <Wrench className="w-6 h-6 text-teal-400" />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-navy-900 text-base lg:text-lg">
                  Prestige Appliance
                </span>
                <span className="block text-[10px] lg:text-xs text-navy-500 font-medium tracking-wider uppercase">
                  LLC · South Florida
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-teal-600 rounded-md transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-teal-600 rounded-md transition-colors"
              >
                About Us
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-teal-600 rounded-md transition-colors flex items-center gap-1"
                >
                  Services
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 animate-slide-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 grid grid-cols-1 gap-0.5 max-h-[70vh] overflow-y-auto">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/refrigerator-repair-${s.slug === 'refrigerator-repair' ? 'deerfield-beach-fl' : ''}`}
                          className="px-3 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/${s.slug}-deerfield-beach-fl`;
                          }}
                        >
                          {s.name}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="px-3 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50 rounded-lg transition-colors border-t border-navy-100 mt-1 pt-2"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <Link
                  to="/service-areas"
                  className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-teal-600 rounded-md transition-colors"
                >
                  Service Areas
                </Link>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-slide-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 grid grid-cols-1 gap-0.5">
                      {locations.map((l) => (
                        <Link
                          key={l.slug}
                          to={`/${l.slug}`}
                          className="px-3 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                        >
                          {l.name}
                        </Link>
                      ))}
                      <Link
                        to="/service-areas"
                        className="px-3 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50 rounded-lg transition-colors border-t border-navy-100 mt-1 pt-2"
                      >
                        View All Areas →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-teal-600 rounded-md transition-colors"
              >
                Contact
              </Link>

              <CallButton size="sm" className="ml-2" />
            </nav>

            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500 text-white shadow-md"
                aria-label={`Call ${business.phoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-navy-200 text-navy-700"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-100 bg-white animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container-pro py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-navy-100">
                <CallButton size="md" className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy-100 shadow-2xl">
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex items-center justify-center gap-2 w-full py-4 bg-teal-500 text-white font-bold text-lg"
        >
          <Phone className="w-5 h-5" />
          Call Now: {business.phoneDisplay}
        </a>
      </div>
    </>
  );
}
