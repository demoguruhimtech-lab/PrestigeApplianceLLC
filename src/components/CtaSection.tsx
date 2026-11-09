import { Phone, Clock } from 'lucide-react';
import { business } from '@/data/business';
import { CallButton } from './CallButton';

export function CtaSection({
  title = 'Need Appliance Repair in South Florida?',
  subtitle = "Call Prestige Appliance LLC today. A local technician is ready to help with your refrigerator, washer, dryer, dishwasher, oven, and more.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500 blur-3xl" />
      </div>
      <div className="container-pro py-16 md:py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-navy-200 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton size="lg" variant="primary" />
            <div className="flex items-center gap-2 text-navy-200">
              <Clock className="w-5 h-5 text-teal-400" />
              <span className="text-sm">Open Monday–Saturday</span>
            </div>
          </div>
          <p className="mt-6 text-navy-300 text-sm flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-teal-400" />
            Speak directly with {business.name} — no forms, no waiting.
          </p>
        </div>
      </div>
    </section>
  );
}
