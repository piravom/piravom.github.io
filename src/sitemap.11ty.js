module.exports = class Sitemap {
  data() {
    return {
      permalink: '/sitemap.xml',
      eleventyExcludeFromCollections: true,
    };
  }

  render({ collections, site }) {
    const baseUrl = site.url;

    // Listing/index pages excluded from collections.all via eleventyExcludeFromCollections.
    // These are manually added so they appear in the sitemap.
    const listingPages = [
      { url: '/stores/', changefreq: 'weekly', priority: '0.8' },
      { url: '/restaurants/', changefreq: 'weekly', priority: '0.8' },
      { url: '/services/', changefreq: 'weekly', priority: '0.8' },
      { url: '/attractions/', changefreq: 'weekly', priority: '0.8' },
      { url: '/events/', changefreq: 'weekly', priority: '0.8' },
      { url: '/faq/', changefreq: 'weekly', priority: '0.8' },
      { url: '/house-of-workships/', changefreq: 'weekly', priority: '0.8' },
      { url: '/blogs/', changefreq: 'weekly', priority: '0.8' },
      { url: '/about/', changefreq: 'monthly', priority: '0.5' },
      { url: '/contact/', changefreq: 'monthly', priority: '0.4' },
      { url: '/disclaimer/', changefreq: 'monthly', priority: '0.3' },
      { url: '/weather/', changefreq: 'daily', priority: '0.5' },
      { url: '/bus-timing/', changefreq: 'weekly', priority: '0.6' },
    ];

    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add listing/index pages
    for (const page of listingPages) {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    }

    // Add all collection items (individual pages)
    for (const entry of collections.all) {
      if (entry.url && !entry.data.eleventyExcludeFromCollections) {
        const loc = `${baseUrl}${entry.url}`;
        const lastmod = entry.date ? this.dateToISO(entry.date) : today;
        const changefreq = entry.url === '/' ? 'daily' : 'weekly';
        let priority = '0.6';
        if (entry.url === '/') {
          priority = '1.0';
        } else if (entry.data.layout && entry.data.layout.includes('layouts')) {
          priority = '0.8';
        }

        xml += '  <url>\n';
        xml += `    <loc>${loc}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += '  </url>\n';
      }
    }

    xml += '</urlset>\n';
    return xml;
  }

  dateToISO(date) {
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    }
    return String(date);
  }
};
