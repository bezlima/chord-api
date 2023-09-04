const cheerio = require('cheerio')

function parseHTML(html: any) {
    const $Chord = cheerio.load(html.data)

    $Chord('.tablatura').remove()

    const formattedHTML = `${$Chord('pre').html().replace(/ /g, '&nbsp;').replace(/\n/g, '<br>')}`

    return formattedHTML
}

module.exports = { parseHTML }
