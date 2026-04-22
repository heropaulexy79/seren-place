import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://serenplace.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/senior-care',
    '/services/dementia-care',
    '/services/alzheimers-care',
    '/in-home-care',
    '/in-home-care/extra-help',
    '/in-home-care/companionship',
    '/in-home-care/meal-prep',
    '/in-home-care/respite-care',
    '/blog',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
