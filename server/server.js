const express = require('express');
const path = require('path');
const pg = require('pg');
const fs = require('fs');
// ROUTES IMPORTS
const userRouter = require('./routes/userRouter');
const gamesRouter = require('./routes/gamesRouter');
// const reviewsRouter = require('./routes/reviewsRouter');

const app = express();

app.use(express.urlencoded())
app.use(express.json())

app.use(express.static('client'))

// Routes
app.use('/user', userRouter);
app.use('/games', gamesRouter);
// app.use('/reviews', reviewsRouter);

// app.use('/dashboard', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')))

// global error handler
app.use((err, req, res, next) => res.status(500).send('Error in Server: '))


app.listen(3000, () => console.log('LISTENING ON PORT 3000'));