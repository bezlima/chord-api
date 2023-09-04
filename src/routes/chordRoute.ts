import * as express from 'express'
const chordController = require('../controller/chordController')
const chordRoute = express.Router()

chordRoute.route('/api/chord/:artist/:music').get(chordController.getChordController)

module.exports = chordRoute
