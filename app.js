const express = require('express');

//Init express app
const app = express();

//Enable incoming json Database
app.use(express.json());

//Utils
const { db } = require('./utils/database');

//Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

/**=============Endpoints================ */
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

db.sync() //{force: true} Se usa para remodelar nuestras tablas pero borra los datos al hacerlo
  .then(() => console.log('Databas synced'))
  .catch(err => console.log(err));

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
