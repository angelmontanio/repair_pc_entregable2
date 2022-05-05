const express = require('express');

//Error controler
const { globalErrorHandler } = require('./controllers/error.controller');

//Init express app
const app = express();

//Enable incoming json Database
app.use(express.json());

//Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

/**=============Endpoints================ */
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

//Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
