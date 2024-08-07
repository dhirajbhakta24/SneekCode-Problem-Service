const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService =  new TurndownService();
    //1.Convert markdown to html
    const convertedHtml = marked.parse (markdownContent);

    //2.sanitize
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    //3. convert the sanitize html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;

}
module.exports = sanitizeMarkdownContent;