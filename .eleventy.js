const markdownIt = require("markdown-it");

module.exports = config => {
    config.addPassthroughCopy('./src/_redirects');
    config.addPassthroughCopy('./src/robots.txt');
    config.addPassthroughCopy('./src/site.webmanifest');
    config.setTemplateFormats("html,css,js,liquid,ejs,md,hbs,mustache,haml,pug,njk,jpg,jpeg,gif,png,svg,webp,ico,pdf,ppt,pptx,doc,docx,zip");

    // Ad-hoc markdown filter
    const md = new markdownIt({
        html: true
    });
    config.addFilter("markdown", (content) => {
        return md.render(content);
    });

    return {
        templateFormats: [
            "html"
        ],
        dir: {
            input: 'src',
            output: 'dist',
            includes: "_includes"
        }
    };
}
