const express = require('express');
const gameController = require('../controllers/gameController.js')

const route = express.Router();

route.post('/', gameController.createGame, gameController.readGames, (req, res) => res.status(200).json(res.locals.games));
route.delete('/', gameController.destroyGame, gameController.readGames, (req, res) => res.status(200).json(res.locals.games));
route.put('/', gameController.evolveGame, gameController.readGames, (req, res) => res.status(200).json(res.locals.games));
route.get('/', gameController.readGames, (req, res) => res.status(200).json(res.locals.games));

module.exports = route;