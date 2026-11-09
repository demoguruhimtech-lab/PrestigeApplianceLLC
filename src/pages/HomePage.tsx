import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  ShieldCheck,
  Star,
  Wrench,
  MapPin,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ThumbsUp,
  Languages,
} from 'lucide-react';
import { Seo, orgJsonLd, localBusinessJsonLd, websiteJsonLd } from '@/components/Seo';
import { CallButton } from '@/components/CallButton';
import { CtaSection } from '@/components/CtaSection';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { reviews } from '@/data/reviews';

export function HomePage() {
  const heroImage =
    'https://images.pexels.com/photos/4832505/pexels-photo-4832505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <>
      <Seo
        title={`${business.name} | Appliance Repair in ${business.primaryCity}, ${business.state}`}
        description={`Trusted appliance repair in ${business.primaryCity}, FL and surrounding South Florida communities. Prestige Appliance LLC repairs refrigerators, washers, dryers, dishwashers, ovens, and more. Call ${business.phoneDisplay}.`}
        path="/"
        image={heroImage}
        jsonLd={[orgJsonLd, localBusinessJsonLd, websiteJsonLd]}
      />

      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern South Florida kitchen with stainless steel appliances"
            className="w-full h-full object-cover opacity-30"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        </div>
        <div className="container-pro relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              {business.primaryCity}, {business.state} · Locally Based
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Appliance Repair in {business.primaryCity}, FL
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up">
              {business.name} is a local appliance repair company serving
              South Florida homeowners. When your refrigerator, washer, dryer,
              dishwasher, or oven stops working, we are a phone call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <CallButton size="lg" label={`Call ${business.phoneDisplay}`} />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-teal-400 hover:bg-teal-500/10 text-white font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-200"
              >
                Explore Appliance Repair Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-navy-100">
        <div className="container-pro py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Rated 4.7 / 5
                </p>
                <p className="text-xs text-navy-500">Customer Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Full-Service Repair
                </p>
                <p className="text-xs text-navy-500">Major Appliances</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Locally Based
                </p>
                <p className="text-xs text-navy-500">
                  {business.primaryCity}, FL
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Languages className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Se Habla Español
                </p>
                <p className="text-xs text-navy-500">Bilingual Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              Appliance Repair Services
            </h2>
            <p className="text-lg text-navy-600">
              We repair the major household appliances South Florida families
              rely on every day. Click any service below to learn more and call
              us to schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-deerfield-beach-fl`}
                  className="group bg-white rounded-2xl overflow-hidden card-hover border border-navy-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-display font-semibold text-lg">
                        {s.shortName}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-navy-600 leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                        {s.shortName} in {business.primaryCity}
                      </span>
                      <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
                Why Choose {business.name}?
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                We are a local, family-run appliance repair company based in{' '}
                {business.primaryCity}, Florida. We take pride in honest
                diagnostics, quality work, and treating every customer like a
                neighbor.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: ThumbsUp,
                    title: 'Honest, Straightforward Service',
                    text: 'Our customers consistently describe us as honest and dependable. We diagnose the real problem and explain it in plain language.',
                  },
                  {
                    icon: MapPin,
                    title: 'Locally Based in Deerfield Beach',
                    text: `We are based right here in ${business.primaryCity}, FL — so when you call, you are talking to a local company, not a call center.`,
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Warranties on Repairs',
                    text: 'We stand behind our work. Repairs performed by Prestige Appliance LLC are covered by a warranty.',
                  },
                  {
                    icon: Languages,
                    title: 'Se Habla Español',
                    text: 'We are proud to serve South Florida\'s Spanish-speaking community in both English and Spanish.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy-900 text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7168051/pexels-photo-7168051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Bright modern South Florida kitchen with stainless steel appliances"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-navy-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Call Today</p>
                    <a
                      href={`tel:${business.phoneRaw}`}
                      className="font-display font-bold text-navy-900 text-lg"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              South Florida Service Areas
            </h2>
            <p className="text-lg text-navy-600">
              Based in {business.primaryCity}, Florida, we serve homeowners in
              the surrounding South Florida community.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group bg-white rounded-xl p-5 text-center border border-navy-100 card-hover"
              >
                <MapPin className="w-7 h-7 text-teal-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-display font-semibold text-navy-900 text-sm">
                  {loc.name}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">{loc.county}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-navy-600">
              Getting your appliance repaired is as simple as picking up the
              phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Call Us',
                text: `Call ${business.phoneDisplay} and tell us what is going on with your appliance.`,
                icon: Phone,
              },
              {
                step: '2',
                title: 'Describe the Problem',
                text: 'Explain the symptoms — strange noises, leaks, no cooling, no heat, and so on.',
                icon: PhoneCall,
              },
              {
                step: '3',
                title: 'Discuss Availability',
                text: 'We talk with you directly about service availability for your area and schedule.',
                icon: Clock,
              },
              {
                step: '4',
                title: 'Confirm Next Steps',
                text: 'We confirm the appointment and next steps with you over the phone. No online booking — just a real conversation.',
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-navy-50 rounded-2xl p-6 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mx-auto mb-4 mt-2">
                  <item.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-display font-semibold text-navy-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-navy-600">
              Real reviews from real South Florida homeowners who trusted{' '}
              {business.name} with their appliance repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-navy-100 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-teal-500 text-teal-500"
                    />
                  ))}
                </div>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-navy-100 pt-4">
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-navy-500">{review.date}</p>
                  </div>
                  {review.service && (
                    <span className="text-xs text-teal-600 font-medium text-right max-w-[50%]">
                      {review.service}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Questions & Answers
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
                Appliance Repair FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What areas does Prestige Appliance LLC serve?',
                  a: `We are based in ${business.primaryCity}, FL and serve the surrounding South Florida community, including Boca Raton, Pompano Beach, Coconut Creek, Coral Springs, and Margate. Call ${business.phoneDisplay} to confirm service for your address.`,
                },
                {
                  q: 'What appliances do you repair?',
                  a: 'We repair refrigerators, freezers, washing machines, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers. Call us to describe your appliance and the issue.',
                },
                {
                  q: 'Do you offer a warranty on repairs?',
                  a: 'Yes. Repairs performed by Prestige Appliance LLC are covered by a warranty. Call us at (954) 234-9371 to discuss the details for your specific repair.',
                },
                {
                  q: 'Do you speak Spanish?',
                  a: 'Yes. Se habla español. We are proud to serve South Florida\'s Spanish-speaking community.',
                },
                {
                  q: 'How do I schedule a repair?',
                  a: `Simply call us at ${business.phoneDisplay}. We do not use online booking — we talk with you directly to understand the problem and arrange the service.`,
                },
                {
                  q: 'Should I repair or replace my appliance?',
                  a: 'That depends on the age, condition, and cost of the repair. Our technician will give you an honest diagnosis so you can make an informed decision.',
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-navy-50 rounded-xl border border-navy-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-display font-semibold text-navy-900 list-none">
                    {faq.q}
                    <span className="text-teal-500 group-open:rotate-45 transition-transform text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
