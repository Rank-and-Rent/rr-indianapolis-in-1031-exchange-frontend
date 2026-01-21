import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indy1031exchange.com';
  
  const neighborhoods = [
    'meridian-hills',
    'geist',
    'carmel',
    'zionsville',
    'fishers',
    'noblesville',
    'westfield',
    'brownsburg',
    'avon',
    'greenwood',
    'downtown',
    'broad-ripple',
  ];

  const services = [
    'delayed-exchange',
    'reverse-exchange',
    'improvement-exchange',
    'build-to-suit',
    'qualified-intermediary',
    'dst-investments',
    'consultation',
    'property-identification',
  ];

  const propertyTypes = [
    'nnn',
    'retail',
    'office',
    'industrial',
    'multifamily',
    'medical',
    'hospitality',
    'student-housing',
    'self-storage',
    'senior-living',
    'mixed-use',
    'land',
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-1031`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/property-types`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const neighborhoodPages = neighborhoods.map((slug) => ({
    url: `${baseUrl}/neighborhoods/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const propertyTypePages = propertyTypes.map((slug) => ({
    url: `${baseUrl}/property-types/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...neighborhoodPages,
    ...servicePages,
    ...propertyTypePages,
  ];
}
