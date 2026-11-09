import { Link } from 'react-router-dom';
import { Phone, MapPin, Wrench, Clock } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-pro py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-white text-lg">
                  Prestige Appliance
                </span>
                <span className="block text-xs text-teal-400 font-medium tracking-wider uppercase">
                  LLC · South Florida
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed mb-4">
              A local appliance repair company based in {business.primaryCity},
              FL, serving homeowners throughout the surrounding South Florida
              community.
            </p>
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Appliance Repair Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-deerfield-beach-fl`}
                    className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/${l.slug}`}
                    className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                  >
                    {l.name}, FL
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-4 space-y-2 text-sm text-navy-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>
                  {business.primaryCity}, {business.state} {business.zip}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Mon–Sat · Sun Closed</span>
              </p>
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                Google Maps Listing →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-pro py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-navy-400 text-center sm:text-left">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-sm text-navy-400">
            {business.category} · {business.primaryCity}, {business.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
