import { Helmet } from 'react-helmet-async';
import { business } from '@/data/business';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: object | object[];
}

export function Seo({
  title,
  description,
  path,
  image,
  type = 'website',
  jsonLd,
}: SeoProps) {
  const canonicalUrl = `${business.website.replace(/\/$/, '')}${path}`;
  const ogImage =
    image ||
    'https://images.pexels.com/photos/4832505/pexels-photo-4832505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={business.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(jsonLd) ? jsonLd : [jsonLd]
          )}
        </script>
      )}
    </Helmet>
  );
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: business.name,
  telephone: business.phone,
  url: business.website,
  areaServed: {
    '@type': 'City',
    name: `${business.primaryCity}, ${business.state}`,
  },
  sameAs: [business.googleMaps],
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ApplianceRepair',
  name: business.name,
  telephone: business.phone,
  url: business.website,
  areaServed: `${business.primaryCity}, ${business.state}`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
  },
  openingHoursSpecification: business.hours
    .filter((h) => h.hours !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      description: h.hours,
    })),
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: business.name,
  url: business.website,
};
