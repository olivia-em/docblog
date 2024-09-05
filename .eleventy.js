const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

/**
 * This is the JavaScript code that determines the config for your Eleventy site
 *
 * You can add lost of customization here to define how the site builds your content
 * Try extending it to suit your needs!
 */

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

  /* From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
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

  /* Build the collection of posts to list in the site
     - Read the Next Steps post to learn how to extend this
  */
  eleventyConfig.addCollection("classes", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("class");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevClass = coll[i - 1];
      const nextClass = coll[i + 1];

      coll[i].data["prevClass"] = prevClass;
      coll[i].data["nextClass"] = nextClass;
    }

    return coll;
  });

  //   eleventyConfig.addCollection("projects", function (collection) {
  //     /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
  //        - https://www.11ty.dev/docs/collections/
  //     */

  //     // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
  //     // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
  //     const coll = collection.getFilteredByTag("project");

  //     // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
  //     // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
  //     for (let i = 0; i < coll.length; i++) {
  //       const prevProject = coll[i - 1];
  //       const nextProject = coll[i + 1];

  //       coll[i].data["prevProject"] = prevProject;
  //       coll[i].data["nextProject"] = nextProject;
  //     }

  //     return coll;
  //   });

  eleventyConfig.addCollection("apps", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("app");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevApp = coll[i - 1];
      const nextApp = coll[i + 1];

      coll[i].data["prevApp"] = prevApp;
      coll[i].data["nextApp"] = nextApp;
    }

    return coll;
  });

  eleventyConfig.addCollection("hypes", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("hype");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevHype = coll[i - 1];
      const nextHype = coll[i + 1];

      coll[i].data["prevHype"] = prevHype;
      coll[i].data["nextHype"] = nextHype;
    }

    return coll;
  });

  eleventyConfig.addCollection("icms", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("icm");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevIcm = coll[i - 1];
      const nextIcm = coll[i + 1];

      coll[i].data["prevIcm"] = prevIcm;
      coll[i].data["nextIcm"] = nextIcm;
    }

    return coll;
  });

  eleventyConfig.addCollection("pcs", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("pc");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevPc = coll[i - 1];
      const nextPc = coll[i + 1];

      coll[i].data["prevPc"] = prevPc;
      coll[i].data["nextPc"] = nextPc;
    }

    return coll;
  });

  eleventyConfig.addCollection("f24", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("fall2024");

    return coll;
  });

  eleventyConfig.addCollection("projects", function (collection) {
    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection.getFilteredByTag("project");

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build",
    },
  };
}
