const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Pass through any static assets if you add them later (e.g., images)
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/restaurants/**/*.{jpg,png}');
  eleventyConfig.addPassthroughCopy('src/attractions/**/*.{jpg,png}');
  eleventyConfig.addPassthroughCopy('src/about/**/*.{jpg,png}');
  eleventyConfig.addPassthroughCopy('src/blogs/**/*.{jpg,png,webp,svg}');

  // Filters
  // Convert distance string like "350m" or "1.2km" to numeric meters
  function parseDistance(dist) {
    if (!dist) return Infinity;
    const match = String(dist).match(/^([\d.]+)\s*(m|km)?$/i);
    if (!match) return Infinity;
    const val = parseFloat(match[1]);
    const unit = (match[2] || 'm').toLowerCase();
    return unit === 'km' ? val * 1000 : val;
  }

  // Reusable sort filter: sort collection items by distanceFromBusStand (nearest first)
  eleventyConfig.addNunjucksFilter('sortByDistance', function (arr) {
    if (!arr || !Array.isArray(arr)) return [];
    var sorted = arr.slice().sort(function (a, b) {
      var dA = parseDistance(a.data && (a.data.distanceFromBusStand || a.data.restaurant && a.data.restaurant.distanceFromBusStand));
      var dB = parseDistance(b.data && (b.data.distanceFromBusStand || b.data.restaurant && b.data.restaurant.distanceFromBusStand));
      return dA - dB;
    });
    return sorted;
  });

  eleventyConfig.addNunjucksFilter('split', function (str, separator) {
    if (!str) return [];
    if (Array.isArray(str)) return str;
    return str.split(separator || ',').map((s) => s.trim());
  });

  eleventyConfig.addNunjucksFilter('groupBy', function (arr, key) {
    if (!arr || !key) return {};
    return arr.reduce(function (acc, item) {
      var group = item[key];
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {});
  });

  eleventyConfig.addNunjucksFilter('groupByData', function (arr, key) {
    if (!arr || !key) return {};
    return arr.reduce(function (acc, item) {
      var group = item.data && item.data[key];
      if (!group) return acc;
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {});
  });

  eleventyConfig.addNunjucksFilter('keys', function (obj) {
    if (!obj) return [];
    return Object.keys(obj).sort();
  });

  eleventyConfig.addFilter('humanDate', function (dateObj) {
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  });

  eleventyConfig.addNunjucksFilter('humanDateShortMonth', function (dateObj) {
    if (!dateObj) return '';
    const d = typeof dateObj === 'string' ? new Date(dateObj) : dateObj;
    return d.toLocaleDateString('en-US', { month: 'short' });
  });

  eleventyConfig.addNunjucksFilter('humanDateDay', function (dateObj) {
    if (!dateObj) return '';
    const d = typeof dateObj === 'string' ? new Date(dateObj) : dateObj;
    return d.getDate();
  });

  eleventyConfig.addNunjucksFilter('withImage', function (collection) {
    if (!collection) return [];
    return collection.filter(function (item) {
      return item.data && item.data.image;
    });
  });

  eleventyConfig.addNunjucksFilter('toDate', function (str) {
    return new Date(str);
  });

  eleventyConfig.addNunjucksFilter('uniq', function (arr) {
    if (!arr || !Array.isArray(arr)) return [];
    return [...new Set(arr)];
  });

  eleventyConfig.addNunjucksFilter('dateFormat', function (date, fmt) {
    if (typeof date === 'string') date = new Date(date);
    if (!(date instanceof Date) || isNaN(date)) return '';
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const map = {
      MMM: months[date.getMonth()],
      MMMM: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ][date.getMonth()],
      dd: String(date.getDate()).padStart(2, '0'),
      d: date.getDate(),
      yyyy: date.getFullYear(),
      yy: String(date.getFullYear()).slice(-2),
    };
    var result = fmt;
    Object.keys(map).forEach(function (k) {
      result = result.replace(k, map[k]);
    });
    return result;
  });

  eleventyConfig.addNunjucksFilter('filterByDate', function (collection, nowStr, type) {
    const now = new Date(nowStr);
    return collection.filter(function (item) {
      if (!item.data.date) return type === 'past';
      const eventDate =
        typeof item.data.date === 'string' ? new Date(item.data.date) : item.data.date;
      return type === 'upcoming' ? eventDate >= now : eventDate < now;
    });
  });

  eleventyConfig.addNunjucksFilter('getCategories', function (collection) {
    const cats = new Set();
    collection.forEach(function (item) {
      if (item.data.category) cats.add(item.data.category);
    });
    return Array.from(cats);
  });

  eleventyConfig.addFilter('json', function (value) {
    return JSON.stringify(value ?? null);
  });

  eleventyConfig.addFilter('dateToISO', function (date) {
    if (!date) return '';
    if (typeof date === 'string') date = new Date(date);
    if (!(date instanceof Date) || isNaN(date)) return '';
    return date.toISOString().split('T')[0];
  });

  eleventyConfig.addAsyncShortcode('image', imageShortcode);

  // Lucide icon shortcode - renders Lucide icons as inline SVGs
  const fs = require('fs');
  const path = require('path');
  eleventyConfig.addShortcode('lucide', function (name, className = 'h-5 w-5') {
    try {
      var iconFile = path.join(__dirname, 'node_modules', 'lucide-static', 'icons', name + '.svg');
      var src = fs.readFileSync(iconFile, 'utf8');
      // Extract everything between <svg ...> and </svg>
      var innerMatch = src.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
      if (!innerMatch) return '';
      var inner = innerMatch[1].trim();
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' +
        className +
        '" aria-hidden="true">' +
        inner +
        '</svg>'
      );
    } catch (e) {
      console.warn('Lucide icon not found:', name, e.message);
      return '';
    }
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};

async function imageShortcode(src, alt, sizes = '100vw', className = '') {
  console.log('IMAGE SRC:', src);
  if (!alt) {
    throw new Error(`Missing alt text for image: ${src}`);
  }

  const metadata = await Image(src, {
    widths: [320, 640, 960, 1280],
    formats: ['avif', 'webp', 'jpeg'],
    outputDir: '_site/img/',
    urlPath: '/img/',
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
    class: className,
  };

  return Image.generateHTML(metadata, imageAttributes);
}
