const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");


module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2",
  ]);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  const seo = require("./src/seo.json");
  if (seo.url === "glitch-default") {
    seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  }
  eleventyConfig.addPlugin(pluginSEO, seo);

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });


  eleventyConfig.addCollection("classes", function (collection) {
       const coll = collection.getFilteredByTag("class");
    return coll;
  });

  eleventyConfig.addCollection("apps", function (collection) {
      const coll = collection.getFilteredByTag("app");
    return coll;
  });

  eleventyConfig.addCollection("hypes", function (collection) {
       const coll = collection.getFilteredByTag("hype");
    return coll;
  });

  eleventyConfig.addCollection("icms", function (collection) {
     const coll = collection.getFilteredByTag("icm");

    return coll;
  });

  eleventyConfig.addCollection("pcs", function (collection) {
      const coll = collection.getFilteredByTag("pc");
    return coll;
  });

  eleventyConfig.addCollection("catns", function (collection) {
    const coll = collection.getFilteredByTag("catn");
    return coll;
  });
  
  eleventyConfig.addCollection("coms", function (collection) {
       const coll = collection.getFilteredByTag("com");

     return coll;
  });
  
    eleventyConfig.addCollection("cyws", function (collection) {
      const coll = collection.getFilteredByTag("cyw");
    return coll;
  });

  eleventyConfig.addCollection("f24", function (collection) {
      const coll = collection.getFilteredByTag("fall2024");

    return coll;
  });

  eleventyConfig.addCollection("s25", function (collection) {
     const coll = collection.getFilteredByTag("spring2025");

    return coll;
  });

  eleventyConfig.addCollection("projects", function (collection) {
     const coll = collection.getFilteredByTag("project");

    return coll;
  });

   // Determine the path prefix based on environment
  const isProduction = process.env.NODE_ENV === 'production';
  const pathPrefix = isProduction ? '/docblog/' : '/';


  console.log('Path prefix:', pathPrefix);
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build",
    },
    pathPrefix: pathPrefix,
  };
};

