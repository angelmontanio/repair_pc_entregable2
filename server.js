const { app } = require("./app");

//models
const {User} = require('./models/user.model');
const {Repair} = require('./models/repair.model');

//Date Base Conection
const { db } = require("./utils/database");

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

//Establish model relation
User.hasMany(Repair);
Repair.belongsTo(User);

db.sync() 
  .then(() => console.log("Databas synced"))
  .catch((err) => console.log(err));

//Spin up server
const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
