import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    // Main pages
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },

    // Services
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/ai-service`, lastModified: new Date() },
    { url: `${baseUrl}/services/orm-service`, lastModified: new Date() },
    { url: `${baseUrl}/services/trading-services`, lastModified: new Date() },

    // Fintech
    { url: `${baseUrl}/fintech`, lastModified: new Date() },
    { url: `${baseUrl}/fintech/blockchain`, lastModified: new Date() },
    { url: `${baseUrl}/fintech/paymentgateway`, lastModified: new Date() },
    { url: `${baseUrl}/fintech/trading`, lastModified: new Date() },

    // Diversification
    { url: `${baseUrl}/diversification`, lastModified: new Date() },
    { url: `${baseUrl}/diversification/pages/orm`, lastModified: new Date() },
    {
      url: `${baseUrl}/diversification/pages/realstate`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/diversification/pages/tradings`,
      lastModified: new Date(),
    },
  ];
}
