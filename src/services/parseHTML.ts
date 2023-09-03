const cheerio = require('cheerio')

function parseHTML(html: any) {
    const $Chord = cheerio.load(html.data)

    $Chord('.tablatura').remove()

    const formattedHTML = `
        <div style="display: flex; flex-direction: column;">
          ${$Chord('pre').html()}
        <div>
    `
    // const $ = cheerio.load(html)
    // $('div').each((index: any, element: any) => {
    //     const content = $(element).html()
    //     const replacedContent = content.replace(/\n/g, '</div><div>')
    //     const replacedSpacesContent = replacedContent.replace(/\s+/g, '&nbsp;')
    //     $(element).html(`<div>${replacedSpacesContent}</div>`)
    // })
    // const modifiedHtml = $.html()

    // organizar retorno melhor para interface

    console.log('modificar html', formattedHTML)
    return formattedHTML
}

module.exports = { parseHTML }
