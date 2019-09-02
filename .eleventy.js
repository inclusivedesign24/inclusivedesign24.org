module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_redirects");

    return {
        templateFormats: [
            "png",
            "svg",
            "css",
            "js",
            "html",
            "zip"
        ]
    };
}
