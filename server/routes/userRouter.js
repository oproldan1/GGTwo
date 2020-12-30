const express = require('express');
const userController = require('../controllers/userController.js')

const route = express.Router();

route.post('/login', userController.verifyUser, (req, res) => {
  console.log(res.locals.username)
  res.status(200).json(res.locals.username)
}/*.redirect('/dashboard')*/);

// CREATE USER
route.post('/signup', userController.createUser, (req, res) => res.status(200).json(res.locals.username)/*.redirect('/dashboard')*/);


module.exports = route;