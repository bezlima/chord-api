import axios from 'axios'
const { BaseUrlCifraClub } = require('./baseUrlCifraClub')
const cheerio = require('cheerio')
const { parseHTML } = require('../services/parseHTML')

interface TypeValidData {
    artist: string
    music: string
}

async function getSimplifiedChord(validData: TypeValidData) {
    const gethtml = await axios.get(BaseUrlCifraClub(validData.artist, validData.music, 'simplificada/imprimir.html'))

    const $Chord = cheerio.load(gethtml.data)
    const hasChord = $Chord('pre').length === 0 ? false : true
    const isSimplified = gethtml.request.socket._httpMessage.res.responseUrl.includes('simplificada')

    if (!hasChord) throw new Error('there is no cipher')
    if (!isSimplified) throw new Error('there is no simplified cipher')
    return parseHTML(gethtml)
}

module.exports = { getSimplifiedChord }
