import * as express from 'express'
const { getChordSchema } = require('../schema/getChordSchema')
const { getChord } = require('../services/getChord')

async function getChordController(req: express.Request, res: express.Response) {
    try {
        const validData = getChordSchema.parse(req.params)

        const chordReturn = await getChord(validData)

        res.status(200).send({
            cipher: chordReturn,
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getChordController }
