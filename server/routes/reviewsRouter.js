const express = require('express');
const reviewController = require('../controllers/reviewController.js')

const route = express.Router();


route.post('/reviews', reviewController.createReview, reviewController.readReview, (req, res) => res.status(200).json(res.locals.reviews));
route.delete('/reviews', reviewController.deleteReview, reviewController.readReview, (req, res) => res.status(200).json(res.locals.reviews))
route.put('/reviews', reviewController.updateReview, reviewController.readReview, (req, res) => res.status(200).json(res.locals.reviews));
route.get('/reviews', reviewController.readReview, (req, res) => res.status(200).json(res.locals.reviews));


module.export = route;