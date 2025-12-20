import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://altakamull.com";

  // جلب المنتجات من API
  const res = await fetch(
    "https://cornflowerblue-albatross-308247.hostingersite.com/api/get_products.php"
  );
  const productsData = await res.json();

  // إنشاء روابط المنتجات
  const productPages = productsData.map((product: any) => ({
    url: `${baseUrl}/products/${product.slug}`, // تأكد أن الـ API يرجع slug لكل منتج
    lastModified: new Date(), // نستخدم التاريخ الحالي لأن ليس هناك تاريخ فعلي
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/production`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...productPages, // روابط المنتجات الديناميكية
  ];
}
