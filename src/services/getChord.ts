import axios from 'axios'
const { BaseUrlCifraClub } = require('./baseUrlCifraClub')
const cheerio = require('cheerio')
const { parseHTML } = require('../services/parseHTML')

interface TypeValidData {
    artist: string
    music: string
}

async function getChord(validData: TypeValidData) {
    const gethtml = await axios.get(BaseUrlCifraClub(validData.artist, validData.music, 'imprimir.html'))

    const $Chord = cheerio.load(gethtml.data)
    const hasChord = $Chord('pre').length === 0 ? false : true

    if (!hasChord) throw new Error('there is no cipher')
    return parseHTML(gethtml)
}

module.exports = { getChord }
