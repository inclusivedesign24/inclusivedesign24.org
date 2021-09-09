module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("site.webmanifest");

    return {
        templateFormats: [
            "png",
            "svg",
            "jpg",
            "css",
            "js",
            "html",
            "zip",
            "ico"
        ]
    };
}
