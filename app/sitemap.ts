import type { MetadataRoute } from "next";

const SITE_URL = "https://apple-gelato.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
