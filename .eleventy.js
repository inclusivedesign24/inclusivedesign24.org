module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("**/*.js");
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.zip");
    eleventyConfig.addPassthroughCopy("**/*.pdf");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("**/*.ico");
    eleventyConfig.addPassthroughCopy("**/*.svg");

    return {
        templateFormats: [
            "html"
        ]
    };
}
