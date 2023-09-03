import * as express from 'express'
const { getChordSchema } = require('../schema/getChordSchema')
const { getChord } = require('../services/getChord')

async function getChordController(req: express.Request, res: express.Response) {
    try {
        const validData = getChordSchema.parse(req.body)

        const chordReturn = await getChord(validData)

        // console.log(chordReturn)

        res.status(200).send({
            cipher: chordReturn,
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getChordController }
