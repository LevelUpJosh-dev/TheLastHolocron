'use strict'

export default (data) => {
    return `
    <!DOCTYPE html>
        <html lang="${data.Language}">
            <head>
                <meta charset="UTF-8">
                <title>${data.PageTitle}</title>
            </head>
            <body>
                ${data.body}
            </body>
        </html>
    `
}