import * as express from 'express'
const getSimplifiedChordController = require('../controller/simplifiedChordController')
const simplifiedChordRoute = express.Router()

simplifiedChordRoute.route('/api/chord/simplified').get(getSimplifiedChordController.getSimplifiedChordController)

module.exports = simplifiedChordRoute
