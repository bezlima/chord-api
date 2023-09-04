import * as express from 'express'
const { getChordSchema } = require('../schema/getChordSchema')
const { getSimplifiedChord } = require('../services/getSimplifiedChord')

async function getSimplifiedChordController(req: express.Request, res: express.Response) {
    try {
        const validData = getChordSchema.parse(req.params)

        const simplifiedChordReturn = await getSimplifiedChord(validData)

        //.render
        res.status(200).send({
            cipher: simplifiedChordReturn,
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getSimplifiedChordController }
